const {JSDOM}=require(process.env.CIVICOACH_JSDOM_PATH||'jsdom'),fs=require('fs'),path=require('path'),assert=require('assert');
const base=path.resolve(__dirname,'..');const pause=n=>new Promise(r=>setTimeout(r,n));
async function start(saved=null){
 const html=fs.readFileSync(base+'/chatbot/index.html','utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'');
 const dom=new JSDOM(html,{url:'http://localhost/chatbot/#http://localhost/chat_bot.md',runScripts:'outside-only',pretendToBeVisual:true});const w=dom.window;const errors=[];w.addEventListener('error',e=>errors.push(e.message));w.TextEncoder=TextEncoder;w.TextDecoder=TextDecoder;w.matchMedia=()=>({matches:false});w.HTMLElement.prototype.scrollIntoView=()=>{};w.scrollTo=()=>{};w.ResizeObserver=class{observe(){}disconnect(){}};Object.defineProperty(w.HTMLElement.prototype,'innerText',{get(){return this.textContent},set(v){this.textContent=v}});
 w.localStorage.setItem('civicoach-accessibilite-v1',JSON.stringify({motion:true}));if(saved)w.localStorage.setItem('novafrate-civique-v14',JSON.stringify(saved));
 w.fetch=async url=>{const u=new URL(url,w.location.href),file=path.resolve(base,'.'+u.pathname);if(!file.startsWith(base+'/'))throw Error('Unexpected URL');return new Response(fs.readFileSync(file),{status:200,headers:{'content-type':file.endsWith('.json')?'application/json':'text/plain'}});};w.speechSynthesis={cancel(){},getVoices:()=>[],speak(u){w.spoken=(w.spoken||[]).concat(u.text);setTimeout(()=>u.onend?.(),0);},pause(){},resume(){}};w.SpeechSynthesisUtterance=class{constructor(t){this.text=t}};
 for(const f of ['liaison.js','vendor/jspdf.umd.min.js','vendor/parcours-font.js','frate-brand.js','feedback-data.js','feedbacks.js','icones.js','parcours-pdf.js','tirages-data.js','tirages.js','demarrage.js','questions-banque.js','questions-moteur.js','sauvegarde.js','presentation.js','accessibilite.js','revision-parcours.js','questions-partout.js','lecture-audio.js','question-attente.js','chatmd.js'])w.eval(fs.readFileSync(base+'/chatbot/'+f,'utf8'));
 const deadline=Date.now()+45000;while(!w.NovaRuntime||!w.document.querySelector('#chat .bot-message .messageOptions')){if(Date.now()>deadline)throw Error('ChatMD did not start: '+errors.join(';'));await pause(100);}
 await pause(200);assert.equal(errors.length,0,errors.join(';'));return {dom,w,errors};
}
(async()=>{
const {dom,w,errors}=await start();const d=w.document;
assert(!d.getElementById('civi-help-anywhere'));assert(!d.getElementById('civi-help-panel'));assert(d.getElementById('civi-audio-dock').parentElement===d.body);assert.equal(d.querySelectorAll('#civi-audio-dock button').length,3);d.getElementById('audio-read').click();assert(w.spoken?.length);d.getElementById('audio-stop').click();
assert(d.getElementById('chat').textContent.includes('🎯'));assert(!d.querySelector('#chat [data-civi-icon]'));
assert.equal(w.NovaQuestions.resolve("Je veux passer l'examen de naturalisation par quoi commencer ?"),'INTENT_PREPARER_NAT');assert.equal(w.NovaQuestions.resolve('Je veux passer examen naturalisation'),'INTENT_PREPARER_NAT');assert.equal(w.NovaQuestions.resolve('Qu’est-ce que la naturalisation ?'),'SCR_QL_GLO0097');
const original=JSON.stringify(w.NovaSave.exportData().variables);
function send(q){d.getElementById('user-input').textContent=q;d.getElementById('send-button').click();}
send('Combien coûte l’examen ?');await pause(300);
assert(/euros|€/.test(d.querySelector('[data-civi-help]').textContent));assert(d.querySelector('.user-message').textContent.includes('Combien'));assert.equal(JSON.stringify(w.NovaSave.exportData().variables),original);
assert(d.querySelector('[data-civi-help-resume]').textContent.includes('Revenir au chatbot'));d.querySelector('[data-civi-help-resume]').click();
send("Je veux passer l'examen de naturalisation par quoi commencer ?");await pause(150);const preparation=[...d.querySelectorAll('[data-civi-help]')].at(-1);assert(preparation.textContent.includes('préparer l’examen civique'));assert(!preparation.textContent.includes('procédure qui permet'));assert(preparation.querySelector('[data-civi-help-resume]'));w.NovaHelp.resume();await w.NovaRuntime.navigate('SCR_QL_INPUT');send('Comment vas-tu ?');await pause(300);assert([...d.querySelectorAll('[data-civi-help]')].at(-1).textContent.includes('prêt à vous accompagner'));
w.NovaHelp.resume();
// A real QCM resumes with its original options and no result recorded by asking.
w.NovaSave.importData({...w.NovaSave.exportData(),variables:{...w.NovaSave.exportData().variables,type_examen:'CSP',bilPos:1,bilAnswered:0,bilAnswerKeys:'',bilCurrentSeen:'',bilSeen_CSP:'',score:0,score_t1:0}},true);await w.NovaRuntime.navigate('BIL_ITEM_CSP_001');await pause(150);
const quiz=d.querySelector('[data-screen="BIL_ITEM_CSP_001"]').closest('.bot-message');
const quizState=JSON.stringify(w.NovaRuntime.exportSession()),quizVars=JSON.stringify(w.NovaSave.exportData().variables);
send('Comment retrouver mes résultats après ?');await pause(150);
assert.equal(JSON.stringify(w.NovaRuntime.exportSession()),quizState);assert.equal(JSON.stringify(w.NovaSave.exportData().variables),quizVars);
[...d.querySelectorAll('[data-civi-help-resume]')].at(-1).click();assert.equal(JSON.stringify(w.NovaRuntime.exportSession()),quizState);
const correct=[...quiz.querySelectorAll('.messageOptions a')].find(a=>a.textContent.includes('fête nationale'));assert(correct);correct.click();await pause(300);assert([...d.querySelectorAll('.bot-message')].at(-1).textContent.includes('Bonne réponse'));
// Exercise snapshot and exact runtime preservation.
const activity=d.createElement('div');activity.className='message bot-message';activity.id='test-activity';activity.innerHTML='<h3>Question 1 : Votre réponse</h3><span data-civi-question="q1"></span><p>Choisissez votre réponse.</p>';d.getElementById('chat').append(activity);
const state=JSON.stringify(w.NovaRuntime.exportSession()),vars=JSON.stringify(w.NovaSave.exportData().variables);
send('Comment retrouver mes résultats après ?');await pause(300);const response=[...d.querySelectorAll('[data-civi-help]')].at(-1);assert(/parcours|PDF/.test(response.textContent));assert(response.querySelector('[data-civi-help-resume]'));assert.equal(JSON.stringify(w.NovaRuntime.exportSession()),state);assert.equal(JSON.stringify(w.NovaSave.exportData().variables),vars);
const saved=JSON.parse(JSON.stringify(w.NovaSave.exportData()));assert(saved.resume.help.suspended);response.querySelector('[data-civi-help-resume]').click();assert.equal(JSON.stringify(w.NovaRuntime.exportSession()),state);assert.equal(w.NovaHelp.exportSession().suspended,null);
// Restore conversation + pending return in another window; no duplicated response.
const newer=await start();const b=newer.w;b.NovaResume.applyLive(saved.resume,true);const count=b.document.querySelectorAll('[data-civi-help]').length;assert(b.document.querySelector('[data-civi-help-resume]'));[...b.document.querySelectorAll('[data-civi-help-resume]')].find(button=>!button.disabled).click();assert.equal(b.NovaHelp.exportSession().suspended,null);assert.equal(b.document.querySelectorAll('[data-civi-help]').length,count);
Object.defineProperty(b,'opener',{value:w,configurable:true});w.open=()=>b;w.postMessage=(packet,origin)=>w.dispatchEvent(new w.MessageEvent('message',{data:packet,origin,source:b}));b.postMessage=(packet,origin)=>b.dispatchEvent(new b.MessageEvent('message',{data:packet,origin,source:w}));w.NovaLink.open('http://localhost/chatbot/');w.dispatchEvent(new w.MessageEvent('message',{data:{source:'civicoach-companion-request'},origin:w.location.origin,source:b}));
w.NovaHelp.ask('Combien coûte l’examen ?');await pause(800);assert([...b.document.querySelectorAll('[data-civi-help]')].at(-1).textContent.match(/euros|€/));b.NovaHelp.ask('Comment vas-tu ?');await pause(800);assert([...d.querySelectorAll('[data-civi-help]')].at(-1).textContent.includes('prêt à vous accompagner'));
assert.equal(errors.length,0,errors.join(';'));newer.dom.window.close();dom.window.close();console.log('PASS inline questions, original emoji icons, no side panel, quiz runtime/variables intact, resume action, synchronized pending resume without duplicate replies');
})().catch(e=>{console.error(e);process.exit(1)});
