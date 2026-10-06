const fs=require('fs'),vm=require('vm'),assert=require('assert');
const source=fs.readFileSync(process.argv[2] || 'chatmd_runtime.js','utf8');const ctx={console};vm.createContext(ctx);
const search=source.slice(source.indexOf('function St('),source.indexOf('function Ht('));
const conversion=source.slice(source.indexOf('function Ye('),source.indexOf('function Qe('));
const cond=source.slice(source.indexOf('function Zn('),source.indexOf('const Xn='));
const declarations=source.slice(source.indexOf('const Xn='),source.indexOf('function cr('));
const rendering=source.slice(source.indexOf('function cr('),source.indexOf('function mr('));
vm.runInContext('const e={secureMode:false};function _t(a){return a[0]}'+conversion+search+cond+declarations+rendering+';globalThis.render=hr;globalThis.nativeEval=lr;',ctx);
function sections(path){const text=fs.readFileSync(path,'utf8');return Object.fromEntries([...text.matchAll(/^## (\w+)\s*\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)].map(x=>[x[1],x[2]]))}
function parse(body){const stack=[],choices=[],lines=[];for(const line of body.split('\n')){if(line.startsWith('`if '))stack.push(line.slice(4,-1));if(line==='`endif`')stack.pop();const opt=line.match(/^\d+\. \[(.+)\]\(([^)]+)\)$/);if(opt)choices.push({label:opt[1],target:opt[2],cond:stack.map(s=>'('+s+')').join(' && ')});else lines.push(line)}return lines.join('\n')+'\n<ul>'+choices.map(c=>(c.cond?'\n`if '+c.cond+'`\n':'')+'<li><a href="#'+c.target+'">'+c.label+'</a></li>'+(c.cond?'\n`endif`\n':'')).join('')+'</ul>'}

const bil=sections('modules/02_bilan.md'),ent=sections('modules/06_entrainement.md'),par=sections('modules/11_parcours.md'),ex=sections('modules/05_preparer_examen.md');
const render=(body,vars)=>ctx.render(parse(body),vars);
const links=s=>[...s.matchAll(/href="#([^"]+)"/g)].map(m=>m[1]);
for(const [sid,body] of Object.entries(bil))if(sid.endsWith('_RECO')){
 const out=render(body,{score_t1:5,score_t2:0,score_t3:2,score_t4:3,score_t5:4});
 assert.deepStrictEqual(links(out),['SCR_PARCOURS_MENU',sid.replace('_RECO','_RESULT'),'SCR_BIL_MENU','MENU_PRINCIPAL']);
}
for(const exam of ['CSP','CR','NAT'])for(let t=1;t<=5;t++)for(let score=0;score<=5;score++){
 const vars={parcoursDisponible:true,parcoursExam:exam};vars['parcoursT'+t]=score;
 const out=render(par['SCR_PARCOURS_T'+t],vars),l=links(out);
 assert.deepStrictEqual([...out.matchAll(/Étape (\d)/g)].map(m=>+m[1]),[1,2,3,4]);
 assert.strictEqual(l.length,6);assert(l.includes(`SCR_ENT_${exam}_T${t}_Q${score===5?'_DIF':''}_LAUNCH`));assert(l.includes('SCR_LAST_EXAM_RESULT'));assert(out.includes('@lastRetour=SCR_PARCOURS_MENU'));
 if(score===5){assert(out.includes('deux entraînements'));assert(out.includes('au moins trois'));assert(!out.includes('bilan de progression'))}
}
let examAnswers=0;
for(const exam of ['CSP','CR','NAT'])for(let v=1;v<=10;v++){
 const code=exam+'_V'+String(v).padStart(2,'0'),base='EXAM_'+code,vars={};render(ex[base+'_PART1'],vars);assert.strictEqual(vars.examRun,1);assert.strictEqual(vars.examActive,code);
 for(let i=1;i<=40;i++){
  const q=base+'_Q'+String(i).padStart(2,'0');assert(!/^\d+\)/m.test(ex[q]));const letters=[...ex[q].matchAll(/qcm-letter">([A-D])<\/span>/g)].map(m=>m[1]);assert.deepStrictEqual(letters,['A','B','C','D']);
  render(ex[q],vars);render(ex[q+(i%3===0?'_FAUX':'_VRAI')],vars);const counted=vars.exam_score;render(ex[q+(i%3===0?'_FAUX':'_VRAI')],vars);assert.strictEqual(vars.exam_score,counted);examAnswers++;
 }
 const out=render(ex[base+'_RESULT'],vars);assert.strictEqual(vars.lastExamScore,27);assert.strictEqual(vars.lastExamCode,code);assert.strictEqual(vars.lastErr3,1);assert.strictEqual(vars.lastErr1,0);assert.strictEqual(links(out).length,5);
 // Result revisits do not overwrite snapshot after training changes live counters.
 vars.exam_score=0;vars.exam_t1=0;vars.err_CR_V01_Q03=0;render(ex[base+'_RESULT'],vars);assert.strictEqual(vars.lastExamScore,27);assert.strictEqual(vars.lastErr3,1);
 const last=render(ex.SCR_LAST_EXAM_RESULT,vars);assert(last.includes('27/40'));assert(!last.includes('undefined'));const corr=render(ex['SCR_LAST_CORR_'+code],vars);assert(corr.includes('<strong>3.</strong>'));assert(!corr.includes('<strong>1.</strong>'));assert(corr.includes('Notion à revoir'));
 const themeScores=[];for(let t=1;t<=5;t++)themeScores.push({t,pct:vars['lastT'+t]/vars['lastTotal'+t]});themeScores.sort((a,b)=>a.pct-b.pct||a.t-b.t);
 const headingOrder=[...last.matchAll(/<tr><td>([^<]+)<\/td><td>/g)].map(m=>m[1]);assert.strictEqual(headingOrder.length,5);for(let i=0;i<5;i++)assert(headingOrder[i].includes(['Principes','Institutions','Droits','Histoire','Vivre'][themeScores[i].t-1]));
 // Starting another exam keeps old snapshot accessible until it is completed.
 render(ex[base+'_PART1'],vars);render(ex[base+'_RESULT'],vars);assert.strictEqual(vars.lastExamCode,code);assert.strictEqual(vars.lastExamScore,27);
}
const manifest=JSON.parse(fs.readFileSync('reports/entrainements_sources.json'));assert.strictEqual(manifest.length,630);
for(const row of manifest){const base=`ENT_${row.exam}_${row.route}_V${String(row.variant).padStart(2,'0')}`,vars={};render(ent[`SCR_ENT_${row.exam}_${row.route}_LAUNCH_START`],vars);
 for(let i=1;i<=row.questions.length;i++)render(ent[base+'_Q'+String(i).padStart(2,'0')+(i%2?'_VRAI':'_FAUX')],vars);
 const out=render(ent[base+'_RESULT'],vars);assert.strictEqual(vars.trainExam,row.exam);assert.strictEqual(vars.trainScore,Math.ceil(row.questions.length/2));assert.strictEqual(links(out).length,3);
 const old=vars.trainScore;vars.score=0;render(ent[base+'_RESULT'],vars);assert.strictEqual(vars.trainScore,old);
 const menu=render(par.SCR_ENT_PLAN_MENU,vars);assert(!menu.includes('undefined'));assert.strictEqual(links(menu).length,7);
 for(let t=1;t<=5;t++){const plan=render(par['SCR_ENT_PLAN_T'+t],vars);assert(!plan.includes('undefined'));if(vars['trainTotal'+t]>0)assert.deepStrictEqual([...plan.matchAll(/Étape (\d)/g)].map(m=>+m[1]),[1,2,3,4]);}
}
assert(render(ex.SCR_LAST_EXAM_RESULT,{}).includes('pas encore terminé'));
console.log('OK v11 — 180 parcours, menus limités, '+examAnswers+' réponses d’examens, classement exact et snapshots, 630 entraînements et plans.');
