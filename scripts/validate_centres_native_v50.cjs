const {JSDOM}=require(process.env.CIVICOACH_JSDOM_PATH||'jsdom'),fs=require('fs'),path=require('path'),assert=require('assert');
const base=path.resolve(__dirname,'..');const pause=n=>new Promise(r=>setTimeout(r,n));
async function start(saved=null){
 const html=fs.readFileSync(base+'/chatbot/index.html','utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'');
 const dom=new JSDOM(html,{url:'http://localhost/chatbot/#http://localhost/chat_bot.md',runScripts:'outside-only',pretendToBeVisual:true});const w=dom.window;const errors=[];w.addEventListener('error',e=>errors.push(e.message));w.TextEncoder=TextEncoder;w.TextDecoder=TextDecoder;w.matchMedia=()=>({matches:false});w.HTMLElement.prototype.scrollIntoView=()=>{};w.scrollTo=()=>{};w.ResizeObserver=class{observe(){}disconnect(){}};Object.defineProperty(w.HTMLElement.prototype,'innerText',{get(){return this.textContent},set(v){this.textContent=v}});
 w.localStorage.setItem('civicoach-accessibilite-v1',JSON.stringify({motion:true}));if(saved)w.localStorage.setItem('novafrate-civique-v14',JSON.stringify(saved));
 w.fetch=async url=>{const u=new URL(url,w.location.href),file=path.resolve(base,'.'+u.pathname);if(!file.startsWith(base+'/'))throw Error('Unexpected URL');return new Response(fs.readFileSync(file),{status:200,headers:{'content-type':file.endsWith('.json')?'application/json':'text/plain'}});};w.speechSynthesis={cancel(){},getVoices:()=>[],speak(u){w.spoken=(w.spoken||[]).concat(u.text);setTimeout(()=>u.onend?.(),0);},pause(){},resume(){}};w.SpeechSynthesisUtterance=class{constructor(t){this.text=t}};
 for(const f of [...fs.readFileSync(base+'/chatbot/index.html','utf8').matchAll(/<script src="([^"]+)"/g)].map(m=>m[1].split('?')[0]).concat('chatmd.js'))w.eval(fs.readFileSync(base+'/chatbot/'+f,'utf8'));
 const deadline=Date.now()+45000;while(!w.NovaRuntime||!w.document.querySelector('#chat .bot-message .messageOptions')){if(Date.now()>deadline)throw Error('ChatMD did not start: '+errors.join(';'));await pause(100);}
 await pause(200);assert.equal(errors.length,0,errors.join(';'));return {dom,w,errors};
}
(async()=>{const {dom,w}=await start();const d=w.document,addresses=JSON.parse(fs.readFileSync(base+'/recherche-centres/data/adresses_centres.json','utf8'));
for(const [region,codes] of [['GRAND_EST',['CHAUMONT','TROYES']],['AUVERGNE',['VICHY','LE_PUY_EN_VELAY']],['RHONE_ALPES',['ANNEMASSE','MONTLUEL']]]){
 await w.NovaRuntime.navigate('SCR_PASS_REGION_'+region);await pause(120);const latest=[...d.querySelectorAll('#chat .bot-message')].at(-1);
 for(const code of codes){assert(latest.textContent.includes(addresses[code].adresse),code);assert([...latest.querySelectorAll('a')].some(a=>{try{return w.atob(a.hash.slice(1))==='SCR_PASS_CITY_'+code}catch{return false}}),code+' destination');}
 for(const code of codes){await w.NovaRuntime.navigate('SCR_PASS_CITY_'+code);await pause(100);assert([...d.querySelectorAll('#chat .bot-message')].at(-1).textContent.includes(addresses[code].adresse),code+' fiche');}
}
dom.window.close();console.log('PASS moteur ChatMD : six adresses dans les boutons régionaux et les fiches, liens de navigation conservés.');})().catch(e=>{console.error(e);process.exit(1)});
