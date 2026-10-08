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
const bil=sections('modules/02_bilan.md'),parcours=sections('modules/11_parcours.md');const catalog=JSON.parse(fs.readFileSync('reports/bilans_tirage_v7.json','utf8'));const rowsByScreen=Object.fromEntries(catalog.map(r=>[r.screen,r]));
function auto(body,vars){const rendered=ctx.render(body,vars);const routes=[...rendered.matchAll(/^!SelectNext: (.+)$/gm)];if(routes.length!==1)console.log('Variables',vars);assert.strictEqual(routes.length,1,'Route attendue unique '+rendered.slice(0,900));return routes[0][1].trim()}
let simulations=0;
for(const exam of ['CSP','CR','NAT'])for(const profile of ['DEC','EQ','INT'])for(let attempt=0;attempt<3;attempt++){
 const vars={type_examen:exam,mode_bilan:'INIT'};const previous=new Set();
 for(let run=0;run<2;run++){
  vars.mode_bilan=run?'PROG':'INIT';let next=auto(bil['SCR_BIL_'+(run?'PROG_':'')+'START_'+profile],vars);const keys=new Set(),counts=[0,0,0,0,0];
  for(let n=1;n<=25;n++){
   assert.strictEqual(next,'BIL_DRAW_NEXT');let draw=auto(bil[next],vars);let q=auto(bil[draw],vars),row=rowsByScreen[q];assert(row,'Question inconnue '+q);assert(!keys.has(row.key),'Doublon dans le bilan');assert(!previous.has(row.key),'Question du premier bilan retrouvée dans la progression');keys.add(row.key);counts[row.theme-1]++;
   // Quand il reste des questions difficiles inédites, le profil INT les utilise.
   const available=catalog.filter(r=>r.exam===exam&&r.theme===row.theme&&!vars['bilSeen_'+exam].includes('|'+r.key+'|'));
   if(profile==='INT'&&available.some(r=>r.level===2))assert.strictEqual(row.level,2,'Difficile disponible mais non choisi');
   const question=ctx.render(parse(bil[q]),vars);assert(question.includes('Question '+n+' sur 25'));assert(question.includes((n-1)+'/25'));
   const feedback=ctx.render(parse(bil[q+'_VRAI']),vars);assert.strictEqual(vars.score,n);assert.strictEqual(vars.bilAnswered,n);
   // Un ancien bouton de correction ne doit jamais compter deux fois une réponse.
   ctx.render(parse(bil[q+'_VRAI']),vars);assert.strictEqual(vars.score,n);
   if(n<25){assert(feedback.includes('Question suivante'));next='BIL_DRAW_NEXT'}else{assert(feedback.includes('Voir mes résultats'));assert(!feedback.includes('Question suivante'));next=auto(bil.BIL_FINISH,vars)}
  }
  assert.deepStrictEqual(counts,[5,5,5,5,5]);const result=ctx.render(parse(bil[next]),vars);assert.strictEqual(vars.parcoursScore,25);assert.strictEqual(vars.parcoursExam,exam);assert.strictEqual(vars.parcoursMode,run?'PROG':'INIT');for(let t=1;t<=5;t++)assert.strictEqual(vars['parcoursT'+t],5);
  vars.score=0;vars.score_t1=0;ctx.render(parse(bil[next]),vars);assert.strictEqual(vars.parcoursScore,25,'Parcours modifié en consultant un ancien résultat après entraînement');assert.strictEqual(vars.parcoursT1,5);
  const plan=ctx.render(parse(parcours.SCR_PARCOURS_T1),vars);assert(plan.includes('SCR_ENT_'+exam+'_T1_Q_DIF_LAUNCH'));assert(!plan.includes('SCR_ENT_'+exam+'_LVL_DIF_LAUNCH'));
  for(const k of keys)previous.add(k);simulations++;
 }
}
console.log('Moteur ChatMD :',simulations,'bilans de 25 questions, aucun doublon ni répétition entre premier bilan et progression ; difficulté, scores et parcours conservés.');
const empty=ctx.render(parse(parcours.SCR_PARCOURS_MENU),{});assert(empty.includes('Terminez un bilan'));assert(!empty.includes('Votre parcours reprend'));
const weak=ctx.render(parse(parcours.SCR_PARCOURS_FAIBLES),{parcoursDisponible:true,parcoursT1:1,parcoursT2:4,parcoursT3:3,parcoursT4:5,parcoursT5:2});for(const t of [1,3,5])assert(weak.includes('href="#SCR_PARCOURS_T'+t+'"'));for(const t of [2,4])assert(!weak.includes('href="#SCR_PARCOURS_T'+t+'"'));
const glo=sections('modules/04_glossaire.md');assert(ctx.render(parse(glo.SCR_GLO_FILTER),{gloPrefix:''}).includes('Choisissez la première lettre'));assert(!ctx.render(parse(glo.SCR_GLO_FILTER),{gloPrefix:'a'}).includes('Choisissez la première lettre'));
const ql=sections('modules/10_question_libre.md');for(const question of ['combien dois-je obtenir de points pour réussir mon examen ?','Combien de points faut-il pour valider ?','Quelle est la note minimale ?','Combien de bonnes réponses pour réussir ?','Quel est le score nécessaire ?']){const out=ctx.render(parse(ql.SCR_QL_ANSWER),{qlQuestion:question});assert(out.includes('32')&&out.includes('40')&&out.includes('80 %'),question);assert(!out.includes('Agents publics'),question);assert(!out.includes('Précisons votre demande'),question)}
const landing=ctx.render(parse(ql.SCR_QL_INPUT),{});assert(landing.includes('Dans cette rubrique'));assert(!landing.includes('href="#SCR_QL_RETOUR"'));assert(!landing.includes('href="#SCR_QL_THEMES"'));console.log('Parcours vide/points faibles, consigne de filtre unique et formulations du seuil de réussite vérifiés.');
