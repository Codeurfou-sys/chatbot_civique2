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

const ql=sections('modules/10_question_libre.md');
assert(ql.SCR_QL_INPUT.includes('@INPUT : SCR_QL_ANSWER'));
const landing=ctx.render(parse(ql.SCR_QL_INPUT),{});assert(!landing.includes('Précisons'));assert(!landing.includes('capable de répondre'));
for(const [q,expected] of [['Combien faut-il de points pour obtenir l’examen ?','32'],['Combien coûte l’examen ?','80'],['Explique-moi simplement le Parlement','Assemblée nationale'],['Je comprends pas le gouvernemant','Premier ministre'],['Comment mieux retenir les connaissances ?','SCR_CONS_MEMOIRE_MENU']]){
 const answer=ctx.render(parse(ql.SCR_QL_ANSWER),{qlQuestion:q});assert(answer.includes(expected),q+' => '+answer.slice(0,250));assert(!answer.includes('Précisons'),q);
}
const bil=sections('modules/02_bilan.md');const reco=bil.BIL_CSP_EQ_V01_RECO;
for(const score of [0,1,2,3,4,5]){
 const vars={score_t1:score,score_t2:score,score_t3:score,score_t4:score,score_t5:score};const out=ctx.render(parse(reco),vars);
 assert.strictEqual(out.includes('href="#SCR_CONS_SITUATIONS_MENU"'),false);
 const links=[...out.matchAll(/href="#(.*?)"/g)].map(m=>m[1]);assert.strictEqual(links[0],'SCR_PARCOURS_MENU');
}
const cons=sections('modules/08_conseils.md');assert(cons.SCR_CONS_ENTRETIEN_MENU.includes('SCR_REV_T5_MENU'));assert(!cons.SCR_CONS_ENTRETIEN_MENU.includes('SCR_GLO_MENU'));assert(cons.SCR_CONS_MNEMO_MENU.includes('image-mentale-1905.png'));assert(!cons.SCR_CONS_MNEMO_MENU.includes('SCR_REV_T4_MENU'));
const communes=JSON.parse(fs.readFileSync('recherche-centres/data/communes_france.json','utf8')).communes;
const app=fs.readFileSync('recherche-centres/app.js','utf8');const n=app.match(/function normalize\(value\) \{[\s\S]*?\n\}/)[0],f=app.match(/function findCommunes\(raw\) \{[\s\S]*?\n\}/)[0];
const geo={};vm.createContext(geo);vm.runInContext('const state='+JSON.stringify({communes})+';'+n+f+';globalThis.find=findCommunes;',geo);
for(const q of ['Lyon','LYON','69000','69001','69009']){const c=geo.find(q);assert(c.length>0,q);assert(c.every(x=>x.commune==='Lyon'||x.commune.startsWith('Lyon ')),q);assert(c.every(x=>x.code_postal.startsWith('69')),q)}
for(const q of ['Paris','Marseille','Saint-Étienne','Bordeaux','Lille','Nantes','Toulouse'])assert(geo.find(q).length,q);
assert(geo.find('Saint-Aubin').length>1);assert.strictEqual(geo.find('commune inexistante xyz').length,0);
for(const path of fs.readdirSync('modules'))assert(!fs.readFileSync('modules/'+path,'utf8').includes('Pour retenir'),path);
console.log('OK v8 — saisie vers un écran réel, accueil sans recherche, questions utilisateur, scores 0–5, conseils et communes/homonymes.');
