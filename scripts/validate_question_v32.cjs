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



 await page.emulateMedia({reducedMotion:'reduce'});
 await page.route('**/chat_bot.md*',r=>r.fulfill({body:fs.readFileSync(base+'/chat_bot.md','utf8').replaceAll('https://codeurfou-sys.github.io/chatbot_civique2/',origin+'/'),contentType:'text/plain'}));
 await page.goto(origin+'/chatbot/');await page.waitForFunction(()=>document.querySelector('#chat .messageOptions a'));await page.waitForFunction(()=>document.querySelector('#civicoach-loading').hidden);
 async function nav(id){await page.evaluate(id=>{const a=document.createElement('a');a.href='#'+btoa(id);document.querySelector('#chat').append(a);a.click();a.remove();},id);}
 async function correct(){await page.waitForFunction(()=>{const b=[...document.querySelectorAll('.bot-message')].at(-1);return b&&[...b.querySelectorAll('.messageOptions a')].some(a=>{try{return atob(a.hash.slice(1)).endsWith('_VRAI');}catch(e){return false;}});});const links=page.locator('.bot-message').last().locator('.messageOptions a');const data=await links.evaluateAll(as=>as.map(a=>({href:a.hash,text:a.textContent})));const picked=data.find(x=>{try{return atob(x.href.slice(1)).endsWith('_VRAI');}catch(e){return false;}});await page.locator('.bot-message').last().locator('a[href="'+picked.href+'"]').click();await page.waitForTimeout(15);const next=page.locator('.bot-message').last().getByRole('link',{name:/Question suivante|Voir mes résultats|Mes résultats|Continuer|Voir le résultat/}).first();await next.click({timeout:5000});return data.filter(x=>{try{return /_(VRAI|FAUX)$/.test(atob(x.href.slice(1)));}catch(e){return false;}});}
 const cases=[
 ['Quels exercices m’aideront à réussir l’examen civique naturalisation ?','Questions officielles','SCR_ENT_THEME_NAT'],
 ['Je veux préparer l’examen pour la carte de résident','carte de résident','SCR_ENT_THEME_CR'],
 ['Quels exercices pour mon titre de séjour ?','titre de séjour','SCR_ENT_THEME_CSP'],
 ['Comment mémoriser les dates de l’histoire ?','reformulez','SCR_CONS_MEMOIRE_MENU'],
 ['Comment progresser après mes erreurs ?','notion à revoir','SCR_CONS_ERREURS_MENU'],
 ['Je cherche des exercices','Vous souhaitez vous exercer','SCR_ENT_THEME_EXAM'],
 ['Pourquoi la naturalisation changerait mon travail ?','Je ne suis pas sûr',null],
 ['Qu’est-ce que la naturalisation ?','devenir français',null],
 ['Comment télécharger mon bilan en PDF ?','Télécharger mon parcours en PDF','SCR_SAVE_MENU'],
 ['Je veux réviser les institutions','thématique','SCR_REV_T2_MENU'],
 ['Les mises en situation sont-elles officielles ?','ne constituent pas','SCR_CONS_SITUATIONS_MENU'],
 ['Explique-moi le gouvernement','Gouvernement',null],
 ];
 for(const [query,expected,target] of cases){await nav('SCR_QL_RESET');await page.waitForFunction(()=>document.querySelector('.bot-message:last-of-type .nova-question-input'));await page.locator('#user-input').fill(query);await page.locator('#send-button').click();await page.waitForFunction(()=>document.querySelector('.bot-message:last-of-type .nova-question-answer'));const answer=page.locator('.bot-message').last();assert((await answer.innerText()).toLowerCase().includes(expected.toLowerCase()),query);if(target)assert(await answer.locator('a[href="#'+Buffer.from(target).toString('base64')+'"]').count()>0,query);console.log('OK intention :',query);}
 await page.screenshot({path:output+'/question-v31.png'});
 assert.deepEqual(errors,[]);await browser.close();server.close();
})().catch(e=>{console.error(e);process.exit(1)});
