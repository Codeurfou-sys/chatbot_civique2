const {JSDOM}=require(process.env.CIVICOACH_JSDOM_PATH||'jsdom'),fs=require('fs'),path=require('path'),assert=require('assert');
const base=path.resolve(__dirname,'..'),dom=new JSDOM('<body><div id="chat"></div></body>',{url:'http://localhost/chatbot/',runScripts:'outside-only'}),w=dom.window;
w.TextEncoder=TextEncoder;w.TextDecoder=TextDecoder;w.NovaSave={exportData:()=>({variables:{},history:{}}),history(){}};
for(const f of ['vendor/jspdf.umd.min.js','vendor/parcours-font.js','frate-brand.js','fiches-art.js','feedback-data.js','feedbacks.js','fiches-data.js','fiches-visuels.js','fiches-regles.js','fiches.js'])w.eval(fs.readFileSync(base+'/chatbot/'+f,'utf8'));
const data=w.CiviSheetsData,qList=Object.entries(data.questions).map(([key,q])=>({...q,key}));
const find=(pattern,t,exclude=[])=>{const q=qList.find(q=>q.theme===t&&!w.NovaSheetsRules.isSituation(q)&&pattern.test(q.question+' '+q.correct)&&!exclude.includes(q.key)&&q.sourceId);assert(q,String(pattern));return q;};
const president=find(/nomme.*premier|premier.*nomm/i,2),premier=find(/rôle du Premier ministre/i,2,[president.key]),rights=find(/droits individuels/i,3),history=find(/1789/i,4),culture=find(/Hugo|Camus|peint|auteur/i,4,[history.key]),society=find(/école|santé|emploi|travail/i,5);
const cards=[president,premier,rights,history,culture,society].map(q=>({...q,kind:'examen',source:'Exemple : examen blanc',date:null}));
let model=w.NovaSheets.plan(cards,{kind:'examen'});assert.equal(model.mode,'synthese');assert.equal(model.notionCount,6);assert.equal(model.blocks.length,4);assert.equal(model.sheets.length,1);assert.equal(model.blocks.find(b=>b.id===4).notions.length,2);
assert.equal(w.NovaSheets.plan([president,premier],{kind:'examen'}).mode,'thematique');
const more=qList.find(q=>q.theme===1&&q.sourceId&&!w.NovaSheetsRules.isSituation(q));assert(more);
assert.equal(w.NovaSheets.plan([...cards,more],{kind:'examen'}).mode,'par-thematique');
assert.equal(w.NovaSheets.plan([...cards,more],{kind:'bilan'}).mode,'par-thematique');
assert.equal(w.NovaSheets.plan([...cards,more],{kind:'entrainement'}).mode,'synthese');
assert.equal(w.NovaSheets.plan([],{kind:'bilan'}).mode,'empty');
assert.equal(w.NovaSheets.plan([president,{...president,key:'second-id'}],{kind:'bilan'}).notionCount,1,'deux questions sur le même repère ne créent pas deux blocs');
assert.equal(w.NovaSheets.plan([president,premier],{kind:'bilan'}).notionCount,2,'deux rôles différents restent deux notions');
// Actual recorded attempts, including both bilan variants and MS training.
const ms=['921d4a8d1fbc0f8a','4f79e0a22994b51a','68b7d65c95bbb7b3'].map(key=>qList.find(q=>q.key===key));assert(ms.every(Boolean));
assert.equal(ms.length,3);const state={variables:{},history:{}};
for(const mode of ['INIT','PROG']){const v={parcoursMistakes:'|'+cards.map(q=>q.key).join('|')+'|',parcoursMode:mode};const row={score:19,max:25,date:'2026-10-11',variables:v};const result=w.NovaSheets.collect(state,{kind:'bilan',row});assert.equal(result.cards.length,6);assert.equal(w.NovaSheets.plan(result.cards,{kind:'bilan'}).mode,'synthese');assert.equal(w.NovaSheets.collect(state,{kind:'bilan',row:{...row,score:25}}).cards.length,0);}
const train={score:2,max:5,date:'2026-10-11',variables:{trainMistakes:'|'+ms.map(q=>q.key).join('|')+'|'}};const picked=w.NovaSheets.collect(state,{kind:'entrainement',row:train});assert.equal(picked.cards.length,3);assert(picked.cards.every(q=>w.NovaSheetsRules.isSituation(q)));
w.NovaSave.exportData=()=>({variables:{trainMistakes:train.variables.trainMistakes,trainScore:2,trainTotal1:0,trainTotal2:0,trainTotal3:0,trainTotal4:0,trainTotal5:0},history:{entrainement:[train]}});
w.NovaSheets.open({kind:'entrainement',row:train});const d=w.document;assert.equal(d.querySelectorAll('.civi-sheet').length,3);assert(!d.querySelector('.civi-sheet-date'));assert(!d.body.textContent.includes('Lecture simplifiée'));assert(!d.body.textContent.includes('Choix erroné'));assert(!d.body.textContent.includes('Je vérifie ma compréhension'));assert(d.querySelector('.civi-sheets-logo'));assert(d.body.textContent.includes(ms[0].explanation[0]));w.NovaSheets.close();
assert(Object.values(data.activities).some(q=>q.type==='situation'),'cas multimédias contextualisés');
for(const q of qList){assert.equal(q.correct,w.CiviFeedbackData.questions[q.key].correct,'réponse issue des bases');if(String(q.sourceId||'').startsWith('MS-'))assert(w.NovaSheetsRules.isSituation(q));}
const out=base+'/.build_ui';fs.mkdirSync(out,{recursive:true});
const examPdf=w.NovaSheets.buildPdf(cards,{kind:'examen'});fs.writeFileSync(out+'/exemple-examen-parcours-v55.pdf',Buffer.from(examPdf.output('arraybuffer')));
const trainPdf=w.NovaSheets.buildPdf(ms.map(q=>({...q,source:'Exemple : mises en situation',kind:'entrainement'})),{kind:'entrainement'});fs.writeFileSync(out+'/exemple-situations-parcours-v55.pdf',Buffer.from(trainPdf.output('arraybuffer')));
const thematicPdf=w.NovaSheets.buildPdf([...cards,{...more,source:'Exemple : examen',kind:'examen'}],{kind:'examen'});assert(thematicPdf.getNumberOfPages()>=5);
assert(examPdf.getNumberOfPages()>0&&trainPdf.getNumberOfPages()>0);dom.window.close();console.log('PASS parcours-v55 : seuil 6/7, bilans INIT/PROG, connaissances et situations, erreurs nulles, dédoublonnage, thèmes officiels, schémas de situations, suppression des questions finales, logo et PDF complets.');
