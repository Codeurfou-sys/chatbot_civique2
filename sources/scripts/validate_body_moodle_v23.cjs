const {chromium}=require(process.env.NOVA_PLAYWRIGHT_MODULE||'playwright');
const fs=require('fs'),path=require('path'),assert=require('assert');
(async()=>{
 const base=path.resolve(__dirname,'..'),out=path.join(base,'.build_ui');fs.mkdirSync(out,{recursive:true});
 const app='http://civi.test',moodle='http://novafrate.test',url=moodle+'/course/view.php?id=92';
 const browser=await chromium.launch({executablePath:process.env.PLAYWRIGHT_EXECUTABLE_PATH,headless:true,args:['--no-sandbox']});
 const context=await browser.newContext({viewport:{width:850,height:950},reducedMotion:'reduce'}),errors=[];
 context.on('page',p=>p.on('pageerror',e=>errors.push(e.message)));
 const widget=('<!doctype html><html><head><meta charset="utf-8"></head><body class="course-92">'+fs.readFileSync(base+'/moodle/INTEGRATION_BODY_MULTI_COURS.html','utf8')+'</body></html>').replaceAll('https://codeurfou-sys.github.io',app);
 await context.route('**/*',async r=>{
  const u=new URL(r.request().url());if(u.origin===moodle)return r.fulfill({contentType:'text/html',body:widget});
  if(u.origin!==app)return r.fulfill({status:404,body:''});
  let file=path.join(base,decodeURIComponent(u.pathname.replace(/^\/chatbot_civique2/,'')));if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
  if(!fs.existsSync(file))return r.fulfill({status:404,body:''});
  const type=({'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.md':'text/plain','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'})[path.extname(file)]||'application/octet-stream';
  const body=file.endsWith('chat_bot.md')?fs.readFileSync(file,'utf8').replaceAll('https://codeurfou-sys.github.io/chatbot_civique2/',app+'/'):fs.readFileSync(file);return r.fulfill({contentType:type,body});
 });
 const page=await context.newPage();await page.goto(url);await page.locator('#frate-widget-summary').click();assert(await page.locator('#frate-widget-wait').isVisible());assert((await page.locator('#frate-widget-wait').innerText()).includes('CiviCoach arrive'));
 await page.screenshot({path:out+'/chargement-body-v23.png'});await page.waitForFunction(()=>document.querySelector('#frate-widget-wait').hidden);
 const frame=page.frames().find(f=>f.url().startsWith(app));await frame.waitForFunction(()=>window.NovaSave?.exportData().integrationContext?.url);
 assert.equal(await frame.evaluate(()=>NovaSave.exportData().integrationContext.url),url);
 await frame.evaluate(()=>{window.requested=[];document.addEventListener('click',e=>{const a=e.target.closest('#chat a');if(a?.hash){try{requested.push(atob(a.hash.slice(1)));}catch(err){}}},true);});
 console.log('OK code BODY : cours 92, mascotte, attente dès ouverture et adresse NovaFrate transmise.');
 async function nav(surface,id){await surface.evaluate(id=>{const a=document.createElement('a');a.href='#'+btoa(id);document.querySelector('#chat').append(a);a.click();a.remove();},id);}
 const state=await frame.evaluate(()=>NovaSave.exportData());state.integration=true;
 for(const [kind,vars,max] of [['bilan',{parcoursDisponible:true,parcoursRun:1,parcoursScore:19},25],['entrainement',{trainDisponible:true,trainRun:1,trainScore:8,trainTotal1:10},10],['examen',{lastExamDisponible:true,lastSavedRun:1,lastExamScore:32,lastExamCode:'CR_V01'},40]]){
  state.history[kind]=[{id:'fixture-'+kind,run:'1',date:new Date().toISOString(),score:Object.values(vars).find(v=>typeof v==='number'&&v>1),max,variables:vars}];Object.assign(state.variables,vars);
 }
 Object.assign(state.variables,{entRun:1,bilRun:1,examRun:1});await frame.evaluate(x=>NovaSave.importData(x),state);
 await nav(frame,'SCR_SAVE_MENU');const p=page.waitForEvent('popup');await frame.locator('.nova-open-saved').last().click();const results=await p;
 await results.waitForFunction(()=>window.NovaSave?.exportData().history.examen.length===1);assert((await results.locator('#saved-list').innerText()).includes('19/25'));assert((await results.locator('#saved-list').innerText()).includes('32/40'));
 const dl=results.waitForEvent('download');await results.locator('#export-pdf').click();await (await dl).saveAs(out+'/parcours-v23.pdf');
 // The full-screen sibling receives changes while the results tab stays open.
 await nav(frame,'MENU_PRINCIPAL');const fullPromise=page.waitForEvent('popup');await frame.locator('.nova-large-link a').last().click();const full=await fullPromise;await full.waitForFunction(()=>window.NovaSave?.exportData().history.entrainement.length===1);
 await full.evaluate(()=>{const s=NovaSave.exportData(),vars={trainDisponible:true,trainRun:2,trainScore:9,trainTotal1:10};s.history.entrainement.unshift({id:'second-training',run:'2',date:new Date(Date.now()+10).toISOString(),score:9,max:10,variables:vars});Object.assign(s.variables,vars,{entRun:2});NovaSave.importData(s);});
 await frame.waitForFunction(()=>NovaSave.exportData().history.entrainement.length===2);await results.waitForFunction(()=>NovaSave.exportData().history.entrainement.length===2);assert((await results.locator('#saved-list').innerText()).includes('9/10'));
 console.log('OK origines distinctes : bilans, entraînements et examens transmis ; actualisation du parcours Moodle et de l’onglet résultats déjà ouvert.');
 await full.close();await results.close();
 // Browsers or integrations may suppress the opener. The URL handoff still works.
 await frame.evaluate(()=>{const native=window.open;window.open=function(url){native.call(window,url,'_blank','noopener');return null;};});
 await nav(frame,'SCR_SAVE_MENU');const isolatedPromise=context.waitForEvent('page');await frame.locator('.nova-open-saved').last().click();const isolated=await isolatedPromise;await isolated.waitForFunction(()=>window.NovaSave?.exportData().history.entrainement.length===2);
 assert.equal(await isolated.evaluate(()=>!!opener),false);assert(await isolated.locator('#return-moodle').isEnabled());await isolated.evaluate(()=>{const s=NovaSave.exportData(),vars={trainDisponible:true,trainRun:3,trainScore:6,trainTotal1:10};s.history.entrainement.unshift({id:'third-training',run:'3',date:new Date(Date.now()+20).toISOString(),score:6,max:10,variables:vars});Object.assign(s.variables,vars,{entRun:3});NovaSave.importData(s);});await isolated.locator('#return-moodle').click();await isolated.waitForURL(u=>u.origin===moodle);
 await isolated.waitForFunction(()=>document.querySelector('#frate-widget-wait').hidden);const restored=isolated.frames().find(f=>f.url().startsWith(app));await restored.waitForFunction(()=>NovaSave.exportData().history.entrainement.length===3);await frame.waitForFunction(()=>NovaSave.exportData().history.entrainement.length===3);assert.equal(await restored.evaluate(()=>NovaSave.exportData().history.examen.length),1);
 console.log('OK sans opener : restauration du parcours, retour à la page NovaFrate exacte et réouverture de la bulle avec les résultats.');
 for(const course of [162,233,999]){const other=await context.newPage();await other.route('**/other*',r=>r.fulfill({contentType:'text/html',body:widget.replace('class=\"course-92\"','class=\"course-'+course+'\"')}));await other.goto(moodle+'/other?id='+course);if(course===999)assert.equal(await other.locator('#frate-chat-widget').count(),0);else{assert.equal(await other.locator('#mascotte-anim-element').count(),0);await other.locator('#frate-widget-summary').click();await other.waitForFunction(()=>!!document.querySelector('#frate-chat-frame').getAttribute('src'));const src=await other.locator('#frate-chat-frame').getAttribute('src');assert(src.includes(course===162?'MentoratMD/main/assistant_mentorat.md':'Assistant-entretiens-pro-/main/assistant_entretiens_pro.md'));}await other.close();}console.log('OK cours 162 et 233 conservés ; aucun widget dans un autre cours.');assert.deepEqual(errors,[]);await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
