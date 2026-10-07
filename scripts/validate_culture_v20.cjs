const {chromium}=require(process.env.NOVA_PLAYWRIGHT_MODULE||'playwright');
const fs=require('fs'),http=require('http'),path=require('path'),assert=require('assert');
(async()=>{
 const base=path.resolve(__dirname,'..'),output=path.join(base,'.build_ui');fs.mkdirSync(output,{recursive:true});
 const data=JSON.parse(fs.readFileSync(base+'/activites-revision/data.json'));let origin;
 const server=http.createServer((req,res)=>{let p=path.join(base,decodeURIComponent(new URL(req.url,origin).pathname));if(fs.existsSync(p)&&fs.statSync(p).isDirectory())p=path.join(p,'index.html');if(!fs.existsSync(p)){res.writeHead(404);res.end();return;}res.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.md':'text/plain','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg'})[path.extname(p)]||'application/octet-stream');res.end(fs.readFileSync(p));});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));origin='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({executablePath:process.env.PLAYWRIGHT_EXECUTABLE_PATH||undefined,headless:true,args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:740,height:950}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 async function open(k,st=0){await page.goto(origin+'/activites-revision/?chapitre='+k);await page.waitForFunction(()=>typeof lesson!=='undefined'&&lesson);await page.evaluate(n=>{step=n;render();},st);assert(await page.locator('#questions').isEnabled());}

 const signatures=new Set(),artists=new Set(),authors=new Set();
 for(let pass=0;pass<4;pass++)for(const st of [0,2]){
  await open('SCR_REV_T4_CH03',st);const items=await page.evaluate(()=>lesson.activities[step].items);
  for(const q of items){assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert(q.options.includes(q.answer));q.options.forEach(n=>(st===0?artists:authors).add(n));}
  signatures.add(JSON.stringify(items.map(q=>q.options)));
  if(pass===0)for(let i=0;i<items.length;i++){
   const q=await page.evaluate(()=>lesson.activities[step].items[order[qi]]);
   if(st===0)await page.getByRole('button',{name:'Découvrir sans gratter (clavier)',exact:true}).click();
   assert.equal(await page.locator('.quiz-options button').count(),4);await page.getByRole('button',{name:q.answer,exact:true}).click();assert(await page.evaluate(()=>answered));await page.locator('#next').click();
  }
 }
 assert(signatures.size>2);assert(artists.size>=10);assert(authors.size>=18);
 await open('SCR_REV_T1_CH03',1);assert.equal(await page.locator('#instructions').innerText(),'Parmi ces dix images, sélectionnez les quatre symboles officiels de la République.');assert.equal(await page.locator('[data-symbol]').count(),10);
 await page.screenshot({path:path.join(output,'symboles-consigne-v20.png')});
 console.log('OK : consigne sans réponses, 4 choix uniques, auteurs/peintres variés, tirages renouvelés et corrections des 12 œuvres.');assert.deepEqual(errors,[]);await browser.close();server.close();
})().catch(e=>{console.error(e);process.exit(1)});
