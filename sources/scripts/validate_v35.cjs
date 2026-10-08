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
 await page.setViewportSize({width:375,height:700});await page.screenshot({path:output+'/bienvenue-v35-mobile.png'});const hello=page.getByText("Bonjour je m’appelle CiviCoach !",{exact:false});if(await hello.count()){const box=await hello.first().boundingBox();assert(box.y<550,'Bienvenue visible à l’ouverture');}
 async function nav(id){await page.evaluate(id=>{const a=document.createElement('a');a.href='#'+btoa(id);document.querySelector('#chat').append(a);a.click();a.remove();},id);}
 async function correct(){await page.waitForFunction(()=>{const b=[...document.querySelectorAll('.bot-message')].at(-1);return b&&[...b.querySelectorAll('.messageOptions a')].some(a=>{try{return atob(a.hash.slice(1)).endsWith('_VRAI');}catch(e){return false;}});});const links=page.locator('.bot-message').last().locator('.messageOptions a');const data=await links.evaluateAll(as=>as.map(a=>({href:a.hash,text:a.textContent})));const picked=data.find(x=>{try{return atob(x.href.slice(1)).endsWith('_VRAI');}catch(e){return false;}});await page.locator('.bot-message').last().locator('a[href="'+picked.href+'"]').click();await page.waitForTimeout(15);const next=page.locator('.bot-message').last().getByRole('link',{name:/Question suivante|Voir mes résultats|Mes résultats|Continuer|Voir le résultat/}).first();await next.click({timeout:5000});return data.filter(x=>{try{return /_(VRAI|FAUX)$/.test(atob(x.href.slice(1)));}catch(e){return false;}});}
 const cases=[['Est-ce qu’il y a un centre proche de Lyon ?','près de Lyon'],['Explique-moi le gouvernement','Gouvernement'],['Comment mémoriser les dates de l’histoire ?','reformulez']];
 await nav('SCR_QL_RESET');await page.waitForFunction(()=>document.querySelector('.bot-message:last-of-type .nova-question-input'));
 for(const [query,expected] of cases){const count=await page.locator('.bot-message').count();await page.locator('#user-input').fill(query);await page.locator('#send-button').click();await page.waitForFunction(n=>document.querySelectorAll('.bot-message').length>n&&document.querySelector('.bot-message:last-of-type .nova-question-answer'),count);assert((await page.locator('.bot-message').last().innerText()).includes(expected),query);console.log('OK question directe',query);}
 assert.equal(await page.locator('#a11y-disclosure').getAttribute('open'),null);
 await page.screenshot({path:output+'/accueil-v35.png'});
 await page.locator('#a11y-disclosure>summary').click();
 for(const mode of ['deuteranopia','protanopia','tritanopia','achromatopsia']){await page.locator('[data-colour-profile="'+mode+'"]').click();assert.equal(await page.locator('html').getAttribute('data-civi-colour-profile'),mode);assert.equal(await page.locator('[data-colour-profile="'+mode+'"]').getAttribute('aria-checked'),'true');}
 await page.locator('#a11y-large').click();
 assert(parseFloat(await page.locator('.switch-label').first().evaluate(el=>getComputedStyle(el).fontSize))>=22);
 for(const width of [375,768,1280]){await page.setViewportSize({width,height:950});await page.screenshot({path:output+'/accessibilite-v34-'+width+'.png'});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'overflow '+width);}
 await page.goto(origin+'/recherche-centres/');await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('Vous pouvez rechercher'));
 await page.locator('#query').fill('25000');await page.locator('#search-form button').click();await page.waitForFunction(()=>document.querySelectorAll('.centre-address').length===3);assert((await page.locator('#cards').innerText()).includes('83 rue de Dole'));assert((await page.locator('#cards').innerText()).includes('37 avenue des Alliés'));console.log('OK adresses des résultats');
 assert.deepEqual(errors,[]);await browser.close();server.close();
})().catch(e=>{console.error(e);process.exit(1)});
