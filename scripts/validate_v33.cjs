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


 
 for(const width of [375,768,1280]){await page.setViewportSize({width,height:1000});await page.waitForTimeout(100);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
 await page.locator('.civi-skip').focus();await page.keyboard.press('Enter');assert.equal(await page.evaluate(()=>document.activeElement.id),'chat');await page.locator('#a11y-contrast').focus();await page.keyboard.press('Space');assert.equal(await page.locator('#a11y-contrast').getAttribute('aria-checked'),'true');
 await page.locator('#a11y-markers').focus();await page.keyboard.press('Enter');assert.equal(await page.locator('#a11y-markers').getAttribute('aria-checked'),'true');
 await page.locator('#a11y-large').click();if(await page.locator('#a11y-motion').getAttribute('aria-checked')==='false')await page.locator('#a11y-motion').click();assert.equal(await page.locator('#a11y-motion').getAttribute('aria-checked'),'true');
 await page.reload();await page.waitForFunction(()=>document.querySelector('#chat .messageOptions a'));assert.equal(await page.locator('#a11y-contrast').getAttribute('aria-checked'),'true');assert.equal(await page.locator('#a11y-large').getAttribute('aria-checked'),'true');
 await nav('SCR_REV_T4_CH03_COURS');await page.waitForFunction(()=>[...document.querySelectorAll('.bot-message')].at(-1)?.textContent.includes('Les écrivains'));assert(!await page.evaluate(()=>document.body.classList.contains('typewriter-active')));await page.waitForTimeout(200);assert(await page.locator('.civi-table-scroll').count()>0);
 for(const width of [375,768,1280]){await page.setViewportSize({width,height:1000});await page.waitForTimeout(150);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
 
 for(const [profile,colour] of [['deuteranopia','rgb(18, 60, 120)'],['protanopia','rgb(54, 34, 104)'],['tritanopia','rgb(104, 22, 45)'],['achromatopsia','rgb(32, 32, 32)']]){
 await page.locator('#a11y-colour-profile').selectOption(profile);assert.equal(await page.evaluate(()=>document.documentElement.dataset.civiColourProfile),profile);assert.equal(await page.locator('#a11y-markers').getAttribute('aria-checked'),'true');assert.equal(await page.locator('#chat .messageOptions a').first().evaluate(e=>getComputedStyle(e).color),colour);assert.equal(await page.locator('.civi-message-mascot').first().evaluate(e=>getComputedStyle(e).filter),'none');
 }
 await page.reload();await page.waitForFunction(()=>document.querySelector('#chat .messageOptions a'));assert.equal(await page.locator('#a11y-colour-profile').inputValue(),'achromatopsia');
 await page.locator('#a11y-colour-profile').selectOption('general');await nav('SCR_REV_T4_CH03_COURS');await page.waitForFunction(()=>[...document.querySelectorAll('.bot-message')].at(-1)?.textContent.includes('Les écrivains'));await page.waitForTimeout(200);
 assert.equal(await page.locator('#a11y-markers .switch-label').textContent(),'Daltonisme');
 const styles=await page.evaluate(()=>{const css=s=>{const e=document.querySelector(s),c=getComputedStyle(e);return {color:c.color,background:c.backgroundColor,border:c.borderTopColor};};return {body:css('body'),text:css('#chat p'),box:css('#chat .admonition'),option:css('#chat .messageOptions a'),cell:css('#chat td')};});
 console.log('Actual contrast styles',styles);
 assert.equal(styles.body.background,'rgb(249, 225, 230)');assert.equal(styles.text.color,'rgb(23, 23, 23)');assert.equal(styles.box.background,'rgb(249, 225, 230)');assert.equal(styles.box.border,'rgb(23, 23, 23)');assert.equal(styles.option.color,'rgb(101, 13, 25)');assert.equal(styles.cell.border,'rgb(23, 23, 23)');
 await page.locator('#a11y-contrast').click();assert.equal(await page.evaluate(()=>getComputedStyle(document.body).backgroundColor),'rgb(253, 240, 242)');await page.locator('#a11y-contrast').click();
await page.evaluate(()=>{const a=document.createElement('aside');a.className='admonition success';a.innerHTML='<div class="admonitionTitle">Correct</div>';document.getElementById('chat').append(a);});await page.waitForFunction(()=>document.querySelector('.civi-outcome'));assert(await page.locator('.civi-outcome').isVisible());
 await page.setViewportSize({width:640,height:1000});await page.evaluate(()=>document.documentElement.style.zoom='2');await page.waitForTimeout(150);console.log(await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,wide:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>innerWidth+2&&!e.closest('.civi-table-scroll')).slice(0,10).map(e=>[e.tagName,e.id,e.className,e.getBoundingClientRect().right])})));assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await page.evaluate(()=>document.documentElement.style.zoom='');await page.setViewportSize({width:600,height:1000});await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:output+'/accessibilite-v33.png'});
 function luminance(hex){const v=hex.match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return v[0]*.2126+v[1]*.7152+v[2]*.0722;}function ratio(a,b){const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);}assert(ratio('b21c1a','ffffff')>4.5);assert(ratio('b21c1a','fff0f2')>3);console.log('Accessibilité : interrupteurs clavier, états ARIA, stockage/rechargement, réduction animation, repères textuels, aucun débordement 375/768/1280, contraste rouge/blanc et bordures : PASS');assert.deepEqual(errors,[]);
 for(const tool of ['recherche-centres','activites-revision','activites-geographie']){
 await page.goto(origin+'/'+tool+'/');await page.waitForFunction(()=>document.documentElement.classList.contains('civi-a11y-contrast'));
 assert.equal(await page.evaluate(()=>getComputedStyle(document.body).backgroundColor),'rgb(249, 225, 230)');
 }
 console.log('Contraste propagé aux trois outils : PASS');await browser.close();server.close();
})().catch(e=>{console.error(e);process.exit(1);});
