const {JSDOM}=require(process.env.CIVICOACH_JSDOM_PATH||'jsdom'),fs=require('fs'),path=require('path'),assert=require('assert');
const base=path.resolve(__dirname,'..'),data=base+'/recherche-centres/data',addresses=JSON.parse(fs.readFileSync(data+'/adresses_centres.json'));
const expected=['CHAUMONT','TROYES','VICHY','LE_PUY_EN_VELAY','ANNEMASSE','MONTLUEL'];
const native=fs.readFileSync(base+'/modules/07_passer_examen.md','utf8');
for(const code of expected){const address=addresses[code].adresse;assert(native.includes('**Adresse :** '+address));const block=native.match(new RegExp('^## SCR_PASS_CITY_'+code+'\\n([\\s\\S]*?)(?=^## |$)','m'));assert(block);assert(native.includes(address+'</small>](SCR_PASS_CITY_'+code+')'));}
async function search(fallback){
 const dom=new JSDOM(fs.readFileSync(base+'/recherche-centres/index.html','utf8'),{url:'https://localhost/recherche-centres/',runScripts:'outside-only',pretendToBeVisual:true}),w=dom.window;
 w.HTMLElement.prototype.scrollIntoView=()=>{};
 w.fetch=async url=>{if(fallback&&/sessions|geocodes/.test(url))throw Error('Simulation copie locale');return new Response(fs.readFileSync(path.join(base,'recherche-centres',url.split('?')[0])),{status:200});};
 w.eval(fs.readFileSync(base+'/recherche-centres/app.js','utf8')+';window.testSearch={state,showResults,findCommunes};');await new Promise(r=>setTimeout(r,30));assert(!w.document.querySelector('#search-form button').disabled);
 const list=w.testSearch.state.centres;assert(list.some(c=>c.code_centre==='MONTLUEL'));
 for(const code of expected){const c=list.find(c=>c.code_centre===code);assert(c);assert.equal(c.adresse,addresses[code].adresse);w.testSearch.showResults(c);assert([...w.document.querySelectorAll('.centre-address')].some(p=>p.textContent.includes(c.adresse)),code);}
 w.document.querySelector('#query').value='Montluel';w.document.querySelector('#search-form').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));
 assert(w.document.querySelector('.card .city').textContent==='Montluel');assert(w.document.querySelector('.card .centre-address').textContent.includes('630 rue des Valets, 01120 Montluel'));assert(w.document.querySelector('.card .sessions').textContent.includes('18 novembre 2026'));assert.equal(w.testSearch.findCommunes('01120').some(c=>c.commune==='Montluel'),true);
 dom.window.close();
}
(async()=>{await search(false);await search(true);console.log('PASS six adresses, présence dans les menus régionaux, Montluel détecté par commune/code postal, sessions, copie locale et données actualisées.');})().catch(e=>{console.error(e);process.exit(1)});
