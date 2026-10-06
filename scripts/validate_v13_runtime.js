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

const ex=sections('modules/05_preparer_examen.md'),rev=sections('modules/03_revisions.md'),ent=sections('modules/06_entrainement.md'),data=JSON.parse(fs.readFileSync('data/feedbacks_examens_v13.json'));
const render=(s,v)=>ctx.render(parse(s),v);
for(const body of Object.values(ent)){assert(!body.includes('Un repère à conserver'));assert(!body.includes('**Pour progresser :**'))}
let runs=0;
for(const exam of ['CSP','CR','NAT'])for(let variant=1;variant<=10;variant++)for(const pattern of [0,1,2]){
 const code=exam+'_V'+String(variant).padStart(2,'0'),base='EXAM_'+code,vars={};render(ex[base+'_PART1'],vars);
 for(let i=1;i<=40;i++){const q=base+'_Q'+String(i).padStart(2,'0');render(ex[q],vars);const correct=pattern===2||(pattern===1&&i%3!==0);render(ex[q+(correct?'_VRAI':'_FAUX')],vars)}
 const out=render(ex[base+'_RESULT'],vars);assert(!out.includes('undefined'));assert(out.includes('v13-summary'));assert(out.includes(vars.exam_score+'/40'));assert.strictEqual((out.match(/<tr>/g)||[]).length,6);
 const priorities=[...out.matchAll(/#### 🎯 Priorité (\d)/g)];assert(priorities.length<=2);assert((out.match(/^- /gm)||[]).length<=6);assert.strictEqual(priorities.length,pattern===2?0:2);
 const buttons=[...out.matchAll(/<li><a href="#([^"]+)"/g)].map(m=>m[1]);assert.strictEqual(buttons.length,pattern===2?4:5);assert.strictEqual(buttons.filter(x=>/SCR_ENT_/.test(x)).length,pattern===2?0:1);
 const corr=render(ex[base+'_CORRIGE'],vars),errors=40-vars.exam_score;assert.strictEqual((corr.match(/data-label="Question"/g)||[]).length,errors);assert(!corr.includes('undefined'));
 assert.strictEqual((corr.match(/<li>/g)||[]).length,4);assert(corr.includes('Aucune erreur')===(errors===0));
 if(errors){assert(corr.includes('Détails'));assert(corr.includes('Cours :'));assert(corr.includes('v13-errors'))}
 const advice=render(ex['SCR_EXAM_CONSEILS_'+code],vars);assert.strictEqual((advice.match(/#### /g)||[]).length,5);
 for(let t=1;t<=5;t++){const pct=vars['r13Pct'+t],band=data.bands.findIndex(([low,high])=>pct>=low&&pct<high);assert(advice.includes(data.themes[String(t)][band]))}
 // Saved errors stay correct even if live counters are subsequently altered.
 const savedScore=vars.lastExamScore;vars.exam_score=0;vars.exam_t1=0;const last=render(ex.SCR_LAST_EXAM_RESULT,vars);assert(last.includes(savedScore+'/40'));
 const saved=render(ex['SCR_LAST_CORR_'+code],vars);assert.strictEqual((saved.match(/data-label="Question"/g)||[]).length,errors);
 runs++;
}
// Every inline link points to an actual ChatMD screen and is obfuscated like the engine.
const all={...ex,...rev,...sections('modules/04_glossaire.md')};
for(const [id,body] of Object.entries(ex))if(id.endsWith('_CORRIGE')||id.startsWith('SCR_LAST_CORR_'))for(const m of body.matchAll(/href="#([A-Za-z0-9+/=]+)"/g)){const target=Buffer.from(m[1],'base64').toString();assert(all[target],id+' -> '+target)}
const points=JSON.parse(fs.readFileSync('reports/notions_examens_v13.json'));assert.strictEqual(points.length,1200);for(const row of points){assert(rev[row.course]);assert(ex[row.details]);assert(rev[row.course].includes(row.notion));}
// Ensure all six bands are represented with a single feedback for each theme.
for(let t=1;t<=5;t++)for(const pct of [0,25,50,70,90,100]){
 const sample=ex.SCR_EXAM_CONSEILS_CR_V01;
 const start=sample.indexOf('#### '+['🇫🇷','🏛️','⚖️','🗺️','🤝'][t-1]);const tail=sample.slice(start);const end=tail.indexOf('\n`endif`\n`if @r13Rank');const section=end>=0?tail.slice(0,end):tail;
 const vars={};for(let u=1;u<=5;u++)vars['r13Pct'+u]=u===t?pct:0;
 const out=render(section,vars);const matches=data.themes[String(t)].filter(text=>out.includes(text));assert.strictEqual(matches.length,1);
}
console.log('OK v13 — 90 examens, feedbacks par tranche, deux priorités, tableaux des erreurs, 1200 liens aux notions et derniers résultats préservés.');
