const {chromium}=require(process.env.NOVA_PLAYWRIGHT_MODULE||'playwright');
const fs=require('fs'),path=require('path'),assert=require('assert');
(async()=>{
 const base=path.resolve(__dirname,'..'),out=path.join(base,'.build_ui');fs.mkdirSync(out,{recursive:true});
 const app='http://civi.test',moodle='http://novafrate.test',url=moodle+'/course/view.php?id=42';
 const browser=await chromium.launch({executablePath:process.env.PLAYWRIGHT_EXECUTABLE_PATH,headless:true,args:['--no-sandbox']});
 const context=await browser.newContext({viewport:{width:850,height:950},reducedMotion:'reduce'}),errors=[];
 context.on('page',p=>p.on('pageerror',e=>errors.push(e.message)));
 const widget=fs.readFileSync(base+'/moodle/INTEGRATION_PIED_DE_PAGE.html','utf8').replaceAll('https://codeurfou-sys.github.io',app);
 await context.route('**/*',async r=>{
  const u=new URL(r.request().url());if(u.origin===moodle)return r.fulfill({contentType:'text/html',body:widget});
  if(u.origin!==app)return r.fulfill({status:404,body:''});
  let file=path.join(base,decodeURIComponent(u.pathname.replace(/^\/chatbot_civique2/,'')));if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
  if(!fs.existsSync(file))return r.fulfill({status:404,body:''});
  const type=({'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.md':'text/plain','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'})[path.extname(file)]||'application/octet-stream';
  const body=file.endsWith('chat_bot.md')?fs.readFileSync(file,'utf8').replaceAll('https://codeurfou-sys.github.io/chatbot_civique2/',app+'/'):fs.readFileSync(file);return r.fulfill({contentType:type,body});
 });
 const page=await context.newPage();await page.goto(url);await page.locator('#civi-launch').click();assert(await page.locator('#civi-wait').isVisible());assert((await page.locator('#civi-wait').innerText()).includes('CiviCoach arrive'));
 await page.screenshot({path:out+'/chargement-v23.png'});await page.waitForFunction(()=>document.querySelector('#civi-wait').hidden);
 const frame=page.frames().find(f=>f.url().startsWith(app));await frame.waitForFunction(()=>window.NovaSave?.exportData().integrationContext?.url);
 assert.equal(await frame.evaluate(()=>NovaSave.exportData().integrationContext.url),url);
 await frame.evaluate(()=>{window.requested=[];document.addEventListener('click',e=>{const a=e.target.closest('#chat a');if(a?.hash){try{requested.push(atob(a.hash.slice(1)));}catch(err){}}},true);});
 const chapters=Object.keys(JSON.parse(fs.readFileSync(base+'/activites-revision/data.json')));let checked=0;
 for(const chapter of chapters)for(const [id,target] of [['notions',chapter+'_GLO'],['questions',chapter+'_VERIF'],['chapters',chapter.replace(/_CH\d+$/,'_MENU')],['main-menu','MENU_PRINCIPAL']]){
  await frame.evaluate(src=>{document.querySelector('#test-activity')?.remove();const f=document.createElement('iframe');f.id='test-activity';f.src=src;document.querySelector('#chat').append(f);},app+'/activites-revision/?chapitre='+chapter);
  const activity=page.frames().find(f=>f.url().includes('/activites-revision/?chapitre='+chapter));
  // Frame attachment and initial navigation may finish on the next event loop.
  const active=activity||await new Promise(resolve=>{const poll=setInterval(()=>{const f=page.frames().find(f=>f.url().includes('/activites-revision/?chapitre='+chapter));if(f){clearInterval(poll);resolve(f);}},20);});
  try{await active.waitForFunction(()=>typeof lesson!=='undefined'&&lesson&&bridgeReady,null,{timeout:10000,polling:100});}catch(e){console.log('ACTIVITY DEBUG',chapter,id,await active.evaluate(()=>({url:location.href,lesson:typeof lesson,status:document.querySelector('#status')?.textContent,bridge:typeof bridgeReady==='undefined'?null:bridgeReady})),errors);throw e;}
  if(id==='main-menu')await active.evaluate(()=>{bridgeReady=false;});
  await active.locator('#'+id).click();await frame.waitForFunction(t=>window.requested.at(-1)===t,target);assert.equal(page.url(),url);checked++;
 }
 await frame.evaluate(()=>document.querySelector('#test-activity')?.remove());assert.equal(context.pages().length,1);console.log('OK',checked,'retours, y compris avant confirmation du lien, sans quitter Moodle ni ouvrir un onglet.');
 async function nav(surface,id){await surface.evaluate(id=>{const a=document.createElement('a');a.href='#'+btoa(id);document.querySelector('#chat').append(a);a.click();a.remove();},id);}
 const state=await frame.evaluate(()=>NovaSave.exportData());state.integration=true;
 for(const [kind,vars,max] of [['bilan',{parcoursDisponible:true,parcoursRun:1,parcoursScore:19},25],['entrainement',{trainDisponible:true,trainRun:1,trainScore:8,trainTotal1:10},10],['examen',{lastExamDisponible:true,lastSavedRun:1,lastExamScore:32,lastExamCode:'CR_V01'},40]]){
  state.history[kind]=[{id:'fixture-'+kind,run:'1',date:new Date().toISOString(),score:Object.values(vars).find(v=>typeof v==='number'&&v>1),max,variables:vars}];Object.assign(state.variables,vars);
 }
 Object.assign(state.variables,{entRun:1,bilRun:1,examRun:1});await frame.evaluate(x=>NovaSave.importData(x),state);
 await nav(frame,'SCR_SAVE_MENU');const p=page.waitForEvent('popup');await frame.locator('.nova-open-saved').last().click();const results=await p;
 await results.waitForFunction(()=>NovaSave?.exportData().history.examen.length===1);assert((await results.locator('#saved-list').innerText()).includes('19/25'));assert((await results.locator('#saved-list').innerText()).includes('32/40'));
 const dl=results.waitForEvent('download');await results.locator('#export-pdf').click();await (await dl).saveAs(out+'/parcours-v23.pdf');
 // The full-screen sibling receives changes while the results tab stays open.
 await nav(frame,'MENU_PRINCIPAL');const fullPromise=page.waitForEvent('popup');await frame.locator('.nova-large-link a').last().click();const full=await fullPromise;await full.waitForFunction(()=>NovaSave?.exportData().history.entrainement.length===1);
 await full.evaluate(()=>{const s=NovaSave.exportData(),vars={trainDisponible:true,trainRun:2,trainScore:9,trainTotal1:10};s.history.entrainement.unshift({id:'second-training',run:'2',date:new Date(Date.now()+10).toISOString(),score:9,max:10,variables:vars});Object.assign(s.variables,vars,{entRun:2});NovaSave.importData(s);});
 await frame.waitForFunction(()=>NovaSave.exportData().history.entrainement.length===2);await results.waitForFunction(()=>NovaSave.exportData().history.entrainement.length===2);assert((await results.locator('#saved-list').innerText()).includes('9/10'));
 console.log('OK origines distinctes : bilans, entraînements et examens transmis ; actualisation du parcours Moodle et de l’onglet résultats déjà ouvert.');
 await full.close();await results.close();
 // Browsers or integrations may suppress the opener. The URL handoff still works.
 await frame.evaluate(()=>{const native=window.open;window.open=function(url){native.call(window,url,'_blank','noopener');return null;};});
 await nav(frame,'SCR_SAVE_MENU');const isolatedPromise=context.waitForEvent('page');await frame.locator('.nova-open-saved').last().click();const isolated=await isolatedPromise;await isolated.waitForFunction(()=>NovaSave?.exportData().history.entrainement.length===2);
 assert.equal(await isolated.evaluate(()=>!!opener),false);assert(await isolated.locator('#return-moodle').isEnabled());await isolated.evaluate(()=>{const s=NovaSave.exportData(),vars={trainDisponible:true,trainRun:3,trainScore:6,trainTotal1:10};s.history.entrainement.unshift({id:'third-training',run:'3',date:new Date(Date.now()+20).toISOString(),score:6,max:10,variables:vars});Object.assign(s.variables,vars,{entRun:3});NovaSave.importData(s);});await isolated.locator('#return-moodle').click();await isolated.waitForURL(u=>u.origin===moodle);
 await isolated.waitForFunction(()=>document.querySelector('#civi-wait').hidden);const restored=isolated.frames().find(f=>f.url().startsWith(app));await restored.waitForFunction(()=>NovaSave.exportData().history.entrainement.length===3);await frame.waitForFunction(()=>NovaSave.exportData().history.entrainement.length===3);assert.equal(await restored.evaluate(()=>NovaSave.exportData().history.examen.length),1);
 console.log('OK sans opener : restauration du parcours, retour à la page NovaFrate exacte et réouverture de la bulle avec les résultats.');
 assert.deepEqual(errors,[]);await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
