const fs=require('fs'),vm=require('vm'),assert=require('assert');
const data=JSON.parse(fs.readFileSync('activites-geographie/data.json'));class Element{constructor(){this.children=[];this.attrs={};this.handlers={};this.textContent='';this.classList={add(){},toggle(){}}}setAttribute(k,v){this.attrs[k]=v}append(x){this.children.push(x)}replaceChildren(){this.children=[]}addEventListener(k,f){this.handlers[k]=f}querySelector(s){const name=s.match(/data-name="(.*?)"/)[1];return this.children.find(x=>x.attrs['data-name']===name)}}
const nodes={};for(const id of ['map','status','progress','prompt','next','rivers','mountains','restart'])nodes['#'+id]=new Element();const ctx={document:{querySelector:s=>nodes[s],createElementNS:()=>new Element()},fetch:async()=>({ok:true,json:async()=>data}),console};Object.assign(ctx,{localStorage:{getItem:()=>null,setItem:()=>{}},parent:{postMessage:()=>{}},location:{origin:'https://codeurfou-sys.github.io'}});vm.createContext(ctx);vm.runInContext(fs.readFileSync('activites-geographie/app.js','utf8'),ctx);
(async()=>{for(let i=0;i<5;i++)await Promise.resolve();
 for(const [mode,button] of [['fleuves','#rivers'],['massifs','#mountains']]){
  nodes[button].onclick();assert.strictEqual(nodes['#map'].children.length,6);
  for(const item of data[mode]){const el=nodes['#map'].children.find(x=>x.attrs['data-name']===item.name);el.handlers.keydown({key:'Enter',preventDefault(){}})}
  assert(nodes['#prompt'].textContent.includes('5/5'));assert.strictEqual(nodes['#progress'].value,5);
  nodes['#restart'].onclick();ctx.select(data[mode][1].name);assert(nodes['#status'].textContent.includes('Essayez'));for(const item of data[mode])ctx.select(item.name);assert(nodes['#prompt'].textContent.includes('4/5'));
 }
 console.log('OK — deux activités, clavier, clic, erreur et correction, score de première tentative, recommencer.');
})().catch(e=>{console.error(e);process.exitCode=1});
