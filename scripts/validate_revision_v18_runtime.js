const fs=require('fs'),vm=require('vm'),assert=require('assert');const src=fs.readFileSync('chatbot/chatmd.js','utf8'),ctx={console,window:{}};vm.createContext(ctx);const parts=[['function St(','function Ht('],['function Ye(','function Qe('],['function Zn(','const Xn='],['const Xn=','function cr('],['function cr(','function mr(']].map(([a,b])=>src.slice(src.indexOf(a),src.indexOf(b)));vm.runInContext('const e={secureMode:false};function _t(a){return a[0]}'+parts.join('')+';globalThis.render=hr;',ctx);
const text=fs.readFileSync('modules/03_revisions.md','utf8'),screens=Object.fromEntries([...text.matchAll(/^## (\w+)\s*\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)].map(m=>[m[1],m[2]]));const data=JSON.parse(fs.readFileSync('activites-revision/data.json'));
function parse(body){const stack=[],opts=[],lines=[];for(const line of body.split('\n')){if(line.startsWith('`if '))stack.push(line.slice(4,-1));if(line==='`endif`')stack.pop();const m=line.match(/^\d+\. \[(.+)\]\(([^)]+)\)$/);if(m)opts.push({label:m[1],target:m[2],cond:stack.map(s=>'('+s+')').join(' && ')});else lines.push(line);}return lines.join('\n')+'\n<ul>'+opts.map(o=>(o.cond?'\n`if '+o.cond+'`\n':'')+'<li><a href="#'+o.target+'">'+o.label+'</a></li>'+(o.cond?'\n`endif`\n':'')).join('')+'</ul>';}
for(const key of Object.keys(data)){const out=ctx.render(parse(screens[key+'_VERIF']),{});assert(out.includes('href="#'+key+'_VERIF_Q01"'));assert(/\*\*\d+ questions?\*\*/.test(screens[key+'_VERIF']));assert(!screens[key+'_GLO'].includes('<iframe'));assert(screens[key+'_ACT'].includes('<iframe'));}
let count=0;for(const [id,body]of Object.entries(screens)){if(!/^SCR_REV_T\d_CH\d+_VERIF_Q\d+$/.test(id))continue;assert(body.includes('@INPUT'));assert(/Écrivez|Indiquez/.test(body));const variable=body.match(/@(rep_\w+) = @INPUT/)[1];const result=ctx.render(parse(screens[id+'_RESULT']),{[variable]:'zzzz'});assert(result.includes('Réponse à revoir'),id+' '+result.slice(0,650));assert(!result.includes('Bonne réponse'));assert(!result.includes('Réponse partielle'));count++;}assert.equal(count,62);console.log('OK moteur livré : 19 accès directs aux questions, 62 saisies et corrections exclusives.');
const originals=JSON.parse(fs.readFileSync('data/revision_questions_originales.json'));for(const q of originals){let answer=q.answer;if(['SCR_REV_T4_CH01_VERIF_Q01','SCR_REV_T4_CH01_VERIF_Q02','SCR_REV_T5_CH02_VERIF_Q03','SCR_REV_T5_CH04_VERIF_Q01'].includes(q.id))answer=q.answer.match(/\d+/)[0];const result=ctx.render(parse(screens[q.id+'_RESULT']),{[q.variable]:answer});assert(result.includes('Bonne réponse'),q.id+' réponse attendue non reconnue');assert(!result.includes('Réponse à revoir'));assert(!result.includes('Réponse partielle')); }

console.log('OK : les 62 réponses attendues sont reconnues par le moteur natif.');

// Regression examples from learner feedback and negative controls.
function check(id,answer,expected){const q=originals.find(q=>q.id===id);const result=ctx.render(parse(screens[id+'_RESULT']),{[q.variable]:answer});assert(result.includes(expected),id+' : '+answer+' -> '+result.slice(0,180));assert.equal((result.match(/:::success|:::warning|:::danger/g)||[]).length,1);}
for(const a of ['3','3 ans','trois ans','À partir de 3 ans.','3ans'])check('SCR_REV_T5_CH04_VERIF_Q01',a,'Bonne réponse');
for(const a of ['13','13 ans','30 ans','6 ans','trois ou six ans'])check('SCR_REV_T5_CH04_VERIF_Q01',a,'Réponse à revoir');
for(const a of ['15','le 15','112','le 112 pour les urgences'])check('SCR_REV_T5_CH02_VERIF_Q03',a,'Bonne réponse');
for(const a of ['115','113','151','1120'])check('SCR_REV_T5_CH02_VERIF_Q03',a,'Réponse à revoir');
check('SCR_REV_T1_CH04_VERIF_Q01',"la neutralité de l'Etat",'Bonne réponse');
check('SCR_REV_T5_CH04_VERIF_Q04','les parents accompagne les enfants et les éduque','Bonne réponse');
check('SCR_REV_T1_CH03_VERIF_Q03','fete nationale','Bonne réponse');
function permutations(xs){return xs.length?xs.flatMap((x,i)=>permutations(xs.filter((_,j)=>i!==j)).map(p=>[x,...p])):[[]];}
for(const p of permutations(['indivisible','laïque','démocratique','sociale']))check('SCR_REV_T1_CH01_VERIF_Q03',p.join(', '),'Bonne réponse');
check('SCR_REV_T1_CH01_VERIF_Q03','laïque et sociale','Réponse partielle');
console.log('OK : réponses des captures, nombres délimités, 24 ordres des principes et feedback unique.');
