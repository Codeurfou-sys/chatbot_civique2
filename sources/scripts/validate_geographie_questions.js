const fs=require('fs'),vm=require('vm'),assert=require('assert');
const data=JSON.parse(fs.readFileSync('activites-geographie/data.json'));
class Element{constructor(){this.children=[];this.attrs={};this.handlers={};this.textContent='';this.hidden=false;this.classList={add(){}}}setAttribute(k,v){this.attrs[k]=v}append(x){this.children.push(x)}replaceChildren(){this.children=[]}addEventListener(k,f){this.handlers[k]=f}focus(){}querySelector(s){const name=s.match(/data-name="(.*?)"/)[1];return this.children.find(x=>x.attrs['data-name']===name)}querySelectorAll(){return this.children.filter(x=>x.attrs.class==='zone')}}
const nodes={};for(const id of ['map','status','progress','prompt','next','restart'])nodes['#'+id]=new Element();
const ctx={document:{querySelector:s=>nodes[s],createElementNS:()=>new Element()},fetch:async()=>({ok:true,json:async()=>data}),console};vm.createContext(ctx);vm.runInContext(fs.readFileSync('activites-geographie/questions.js','utf8'),ctx);
(async()=>{for(let i=0;i<5;i++)await Promise.resolve();
 for(const pattern of [0,1,2]){
  ctx.start();assert.strictEqual(nodes['#map'].children.length,6);
  for(let i=0;i<2;i++){
   const q=vm.runInContext('questions[index]',ctx),correct=pattern===2||(pattern===1&&i===0),name=correct?q.name:data[q.mode].find(x=>x.name!==q.name).name;
   const el=nodes['#map'].querySelector('[data-name="'+name+'"]');el.handlers.keydown({key:'Enter',preventDefault(){}});
   assert.strictEqual(nodes['#progress'].value,i+1);assert.strictEqual(nodes['#next'].hidden,false);assert(nodes['#status'].textContent.includes(q.name)||correct);
   // A second click cannot alter the first attempt score.
   const score=vm.runInContext('score',ctx);ctx.answer(q.name);assert.strictEqual(vm.runInContext('score',ctx),score);
   nodes['#next'].onclick();
  }
  assert(nodes['#prompt'].textContent.includes(pattern+'/2'));assert.strictEqual(nodes['#restart'].hidden,false);assert.strictEqual(nodes['#map'].children.length,0);
 }
 console.log('OK — deux questions sur carte, clavier, scores 0/2 à 2/2, correction, double clic et nouvel essai.');
})().catch(e=>{console.error(e);process.exitCode=1});
