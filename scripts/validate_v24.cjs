const {chromium}=require(process.env.NOVA_PLAYWRIGHT_MODULE||'playwright');
const fs=require('fs'),http=require('http'),path=require('path'),assert=require('assert');
(async()=>{
 const base=path.resolve(__dirname,'..'),output=path.join(base,'.build_ui');fs.mkdirSync(output,{recursive:true});
 const data=JSON.parse(fs.readFileSync(base+'/activites-revision/data.json'));let origin;
 const server=http.createServer((req,res)=>{let p=path.join(base,decodeURIComponent(new URL(req.url,origin).pathname.replace(/^\/chatbot_civique2/,'')));if(fs.existsSync(p)&&fs.statSync(p).isDirectory())p=path.join(p,'index.html');if(!fs.existsSync(p)){res.writeHead(404);res.end();return;}res.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.md':'text/plain','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg'})[path.extname(p)]||'application/octet-stream');res.end(fs.readFileSync(p));});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));origin='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({executablePath:process.env.PLAYWRIGHT_EXECUTABLE_PATH||undefined,headless:true,args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:740,height:950},reducedMotion:'reduce'}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 async function open(k,st=0){await page.goto(origin+'/activites-revision/?chapitre='+k);await page.waitForFunction(()=>typeof lesson!=='undefined'&&lesson);await page.evaluate(n=>{step=n;render();},st);assert(await page.locator('#questions').isEnabled());}



 await page.emulateMedia({reducedMotion:'reduce'});
 await page.context().route('**/chat_bot.md*',r=>r.fulfill({body:fs.readFileSync(base+'/chat_bot.md','utf8').replaceAll('https://codeurfou-sys.github.io/chatbot_civique2/',origin+'/'),contentType:'text/plain'}));
 await page.goto(origin+'/chatbot/');await page.waitForFunction(()=>document.querySelector('#chat .messageOptions a'));await page.waitForFunction(()=>document.querySelector('#civicoach-loading').hidden);
 async function nav(id){await page.evaluate(id=>{const a=document.createElement('a');a.href='#'+btoa(id);document.querySelector('#chat').append(a);a.click();a.remove();},id);}
 async function correct(){await page.waitForFunction(()=>{const b=[...document.querySelectorAll('.bot-message')].at(-1);return b&&[...b.querySelectorAll('.messageOptions a')].some(a=>{try{return atob(a.hash.slice(1)).endsWith('_VRAI');}catch(e){return false;}});});const links=page.locator('.bot-message').last().locator('.messageOptions a');const data=await links.evaluateAll(as=>as.map(a=>({href:a.hash,text:a.textContent})));const picked=data.find(x=>{try{return atob(x.href.slice(1)).endsWith('_VRAI');}catch(e){return false;}});await page.locator('.bot-message').last().locator('a[href="'+picked.href+'"]').click();await page.waitForTimeout(15);const next=page.locator('.bot-message').last().getByRole('link',{name:/Question suivante|Voir mes résultats|Mes résultats|Continuer|Voir le résultat/}).first();await next.click({timeout:5000});return data.filter(x=>{try{return /_(VRAI|FAUX)$/.test(atob(x.href.slice(1)));}catch(e){return false;}});}


 await nav('SCR_REV_T4_CH03_COURS');await page.waitForTimeout(1200);
 for(const width of [375,768,1280]){await page.setViewportSize({width,height:900});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
 assert(await page.locator('.civi-table-scroll').count()>0);await page.locator('.bot-message').last().scrollIntoViewIfNeeded();await page.screenshot({path:output+'/responsive-v24.png',fullPage:false});console.log(await page.locator('.admonitionTitle img').evaluateAll(es=>es.map(e=>e.src)));
 await page.evaluate(()=>NovaResume.capture());const savedText=await page.locator('#chat').innerText();const variables=await page.evaluate(()=>NovaSave.exportData().variables);
 const state=await page.evaluate(()=>NovaSave.exportData());await page.goto(origin+'/chatbot/?reprendre=1#parcours='+encodeURIComponent(JSON.stringify(state)));await page.waitForFunction(()=>document.querySelector('#chat .messageOptions a')&&document.querySelector('#civicoach-loading').hidden,null,{timeout:30000});await page.waitForTimeout(250);assert.equal(await page.locator('#chat').innerText(),savedText);assert.deepEqual(await page.evaluate(()=>NovaSave.exportData().variables),variables);
 const result=await browser.newPage();await result.goto(origin+'/chatbot/?vue=resultats#parcours='+encodeURIComponent(JSON.stringify(state)));await result.waitForFunction(()=>window.NovaSave&&window.NovaPdf);assert.equal(await result.locator('#saved-panel').isVisible(),true);assert.equal(await result.evaluate(()=>document.querySelector('script[src^="chatmd.js"]')!==null),false);
 for(let i=0;i<2;i++){const download=result.waitForEvent('download');await result.locator('#export-pdf').click();const d=await download;assert(d.suggestedFilename().endsWith('.pdf'));assert(result.url().includes('vue=resultats'));}
 await page.goto(origin+'/recherche-centres/');assert.equal(await page.locator('#query').getAttribute('placeholder'),'Ex. 25000 ou Besançon');assert.equal(await page.locator('header .eyebrow').count(),0);assert.equal(await page.locator('button[type=submit]').evaluate(e=>getComputedStyle(e).backgroundColor),'rgb(178, 28, 26)');
 assert.deepEqual(errors,[]);console.log('v24: responsive 375/768/1280, exact conversation and variable resume, repeated PDF export, results stay open, red search, Besançon: PASS');await browser.close();server.close();
})().catch(e=>{console.error(e);process.exit(1);});
