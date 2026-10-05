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

const bil=sections('modules/02_bilan.md'),ent=sections('modules/06_entrainement.md'),par=sections('modules/11_parcours.md');
const reco=bil.BIL_CSP_EQ_V01_RECO;
const out=ctx.render(parse(reco),{score_t1:5,score_t2:4,score_t3:4,score_t4:5,score_t5:5});
assert(out.indexOf('Institutions et système politique')<out.indexOf('Principes et valeurs'));
assert(out.indexOf('Droits et devoirs')<out.indexOf('Principes et valeurs'));assert(out.includes('score parfait'));assert(!out.includes('presque'));
for(const score of [0,1,2,3,4,5]){
 const v=ctx.render(parse(par.SCR_PARCOURS_T4),{parcoursDisponible:true,parcoursT4:score,parcoursExam:'NAT'});const ns=[...v.matchAll(/Étape (\d)/g)].map(m=>+m[1]);assert.deepStrictEqual(ns,score<4?[1,2,3,4]:[1,2,3]);
}
const plans=ctx.render(parse(par.SCR_PARCOURS_MENU),{parcoursDisponible:true,parcoursT1:5,parcoursT2:4,parcoursT3:4,parcoursT4:5,parcoursT5:5});const ids=[...plans.matchAll(/href="#SCR_PARCOURS_T(\d)"/g)].map(m=>+m[1]);assert.deepStrictEqual(ids,[2,3,1,4,5]);
let answers=0;
for(const row of JSON.parse(fs.readFileSync('reports/entrainements_sources.json'))){
 if(row.questions.length!==15)continue;const base=`ENT_${row.exam}_${row.route}_V${String(row.variant).padStart(2,'0')}`;
 for(const pattern of [0,1,2]){
  const vars={score:0,ent_q:0,ent_ms:0};for(let t=1;t<=5;t++){vars['ent_k'+t]=0;vars['ent_m'+t]=0;vars['ent_t'+t]=0}const totals={k:[0,0,0,0,0],m:[0,0,0,0,0]};
  for(let i=0;i<15;i++){const q=`${base}_Q${String(i+1).padStart(2,'0')}`,body=ent[q];assert.strictEqual((body.match(/class="qcm-letter"/g)||[]).length,4);assert(body.includes('>A</span>')&&body.includes('>D</span>'));
   const yes=pattern===1||(pattern===2&&i%3!==0);ctx.render(parse(ent[q+(yes?'_VRAI':'_FAUX')]),vars);if(yes)totals[row.questions[i].situation?'m':'k'][row.questions[i].theme-1]++;answers++;
   if(i===9)assert(ent[q+'_VRAI'].includes('Accéder aux mises en situation'));
  }
  for(let t=1;t<=5;t++){assert.strictEqual(vars['ent_k'+t],totals.k[t-1]);assert.strictEqual(vars['ent_m'+t],totals.m[t-1])}
  assert.strictEqual(vars.ent_q,totals.k.reduce((a,b)=>a+b,0));assert.strictEqual(vars.ent_ms,totals.m.reduce((a,b)=>a+b,0));assert.strictEqual(vars.score,vars.ent_q+vars.ent_ms);
  const result=ctx.render(parse(ent[base+'_RESULT']),vars);for(let t=1;t<=5;t++){assert(result.includes(totals.k[t-1]+'/2'));assert(result.includes(totals.m[t-1]+'/1'))}assert(result.includes('progress'));
 }
}
for(const [q,b] of Object.entries(bil))if(q.startsWith('BIL_ITEM_')&&!q.endsWith('_VRAI')&&!q.endsWith('_FAUX')){assert.strictEqual((b.match(/class="qcm-letter"/g)||[]).length,4);assert(!bil[q+'_VRAI'].includes('Retenez : ** Retenez'));}
const cons=sections('modules/08_conseils.md');for(let t=1;t<=5;t++)assert.strictEqual((cons.SCR_CONS_ENTRETIEN_MENU.match(new RegExp('SCR_REV_T'+t+'_MENU','g'))||[]).length,1);assert(cons.SCR_CONS_MEMOIRE_02.includes('Ebbinghaus'));
console.log('OK v9 — priorités exactes, étapes continues pour 0–5, lettres A–D et '+answers+' réponses avec scores séparés par thématique.');
