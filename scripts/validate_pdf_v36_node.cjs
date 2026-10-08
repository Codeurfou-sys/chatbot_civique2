const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const base=path.resolve(__dirname,'..'),output=base+'/.build_ui';fs.mkdirSync(output,{recursive:true});
const root={jspdf:require(base+'/chatbot/vendor/jspdf.umd.min.js')};
const ctx=vm.createContext({window:root,console,fetch:()=>{throw Error('unexpected fetch')}});
for(const file of ['vendor/parcours-font.js','frate-brand.js','parcours-pdf.js'])vm.runInContext(fs.readFileSync(base+'/chatbot/'+file,'utf8'),ctx);
const data=JSON.parse(fs.readFileSync(base+'/chatbot/parcours-data.json'));
const state={variables:{},history:{bilan:[],entrainement:[],examen:[]}};
for(const kind of Object.keys(state.history)){
 const prefix=kind==='bilan'?'parcours':kind==='entrainement'?'train':'last',variables={};variables[kind==='examen'?'lastExamCode':prefix+'Exam']='CR';
 for(let t=1;t<=5;t++){variables[prefix+'T'+t]=[0,2,4,5,3][t-1];if(kind!=='bilan')variables[(kind==='examen'?'lastTotal':'trainTotal')+t]=5;}
 state.history[kind]=[{date:'2025-01-01T12:00:00Z',score:25,max:25,variables},{date:'2026-10-08T12:00:00Z',score:14,max:kind==='examen'?40:25,variables}];
}
const before=JSON.stringify(state),doc=root.NovaPdf.build(state,data);assert(doc.getNumberOfPages()<12);assert.equal(JSON.stringify(state),before);fs.writeFileSync(output+'/parcours-plans-v36.pdf',Buffer.from(doc.output('arraybuffer')));
const focused=structuredClone(state);focused.history.bilan=[];focused.history.examen=[];for(let t=2;t<=5;t++)focused.history.entrainement[1].variables['trainTotal'+t]=0;
fs.writeFileSync(output+'/parcours-theme-v36.pdf',Buffer.from(root.NovaPdf.build(focused,data).output('arraybuffer')));
assert(root.NovaPdf.build({variables:{},history:{}},data).getNumberOfPages()>0);
console.log('PASS latest chronological rows, all score bands, targeted training, empty history, no state mutation; pages',doc.getNumberOfPages());
