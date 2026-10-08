const {chromium}=require(process.env.NOVA_PLAYWRIGHT_MODULE||'playwright');
const fs=require('fs'),http=require('http'),path=require('path'),assert=require('assert');
(async()=>{
 const base=path.resolve(__dirname,'..'),output=path.join(base,'.build_ui');fs.mkdirSync(output,{recursive:true});
 let origin;
 const server=http.createServer((req,res)=>{let p=path.join(base,decodeURIComponent(new URL(req.url,origin).pathname.replace(/^\/chatbot_civique2/,'')));if(fs.existsSync(p)&&fs.statSync(p).isDirectory())p=path.join(p,'index.html');if(!fs.existsSync(p)){res.writeHead(404);res.end();return;}res.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.md':'text/plain','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg'})[path.extname(p)]||'application/octet-stream');res.end(fs.readFileSync(p));});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));origin='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({executablePath:process.env.PLAYWRIGHT_EXECUTABLE_PATH||undefined,headless:true,args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:740,height:950},reducedMotion:'reduce'}),errors=[];page.on('pageerror',e=>errors.push(e.message));

 await page.goto(origin+'/chatbot/?vue=resultats');await page.waitForFunction(()=>window.NovaPdf&&window.NovaPdfFont);
 const fixture={version:14,variables:{},history:{bilan:[],entrainement:[],examen:[]}};
 for(const kind of ['bilan','entrainement','examen']){
  const prefix=kind==='bilan'?'parcours':kind==='entrainement'?'train':'last';
  const variables={};variables[kind==='examen'?'lastExamCode':prefix+'Exam']='CR';
  for(let t=1;t<=5;t++){variables[prefix+'T'+t]=[0,2,4,5,3][t-1];if(kind!=='bilan')variables[(kind==='examen'?'lastTotal':'trainTotal')+t]=5;}
  fixture.history[kind]=[{date:'2025-01-01T12:00:00Z',score:25,max:25,variables},{date:'2026-10-08T12:00:00Z',score:14,max:kind==='examen'?40:25,variables}];
 }
 const data=JSON.parse(fs.readFileSync(base+'/chatbot/parcours-data.json'));
 const original=JSON.stringify(fixture);
 const result=await page.evaluate(({state,data})=>{const doc=NovaPdf.build(state,data);return {base64:doc.output('datauristring').split(',')[1],pages:doc.getNumberOfPages()};},{state:fixture,data});
 fs.writeFileSync(output+'/parcours-plans-v36.pdf',Buffer.from(result.base64,'base64'));
 assert.equal(JSON.stringify(fixture),original);assert(result.pages<12,'PDF compact');
 const focused=JSON.parse(JSON.stringify(fixture));focused.history.bilan=[];focused.history.examen=[];
 for(let t=2;t<=5;t++)focused.history.entrainement[1].variables['trainTotal'+t]=0;
 const bytes=await page.evaluate(({state,data})=>NovaPdf.build(state,data).output('datauristring').split(',')[1],{state:focused,data});
 fs.writeFileSync(output+'/parcours-theme-v36.pdf',Buffer.from(bytes,'base64'));
 const empty=await page.evaluate(data=>NovaPdf.build({variables:{},history:{bilan:[],entrainement:[],examen:[]}},data).getNumberOfPages(),data);assert(empty>=1);
 assert.deepEqual(errors,[]);console.log('PASS PDF dernières tentatives, 4 étapes, entraînement ciblé, historique vide; pages:',result.pages);await browser.close();server.close();
})().catch(e=>{console.error(e);process.exit(1)});
