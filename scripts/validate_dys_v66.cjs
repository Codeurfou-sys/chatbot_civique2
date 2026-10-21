const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const r=path.resolve(__dirname,'..'),w={jspdf:require(r+'/chatbot/vendor/jspdf.umd.min.js')},c=vm.createContext({window:w,console,Date,Map,Set,URL});
for(const f of ['vendor/parcours-font.js','vendor/parcours-font-bold.js','vendor/repere-hand.js','vendor/repere-title.js','frate-brand.js','fiches-art.js','fiches-data.js','fiches-visuels.js','dys-pdf.js','fiches-regles.js','fiches-contenus.js','fiches-coherence.js','fiches-territoires.js','fiches-autonomes.js','fiches-audio.js'])vm.runInContext(fs.readFileSync(r+'/chatbot/'+f,'utf8'),c);
const V=w.CiviSheetsVisual,D=w.CiviSheetsData,all=Object.values(D.questions),rows=[];
const get=(regex)=>{const q=all.find(q=>regex.test(q.question+' '+q.correct));assert(q,String(regex));return {...q,kind:'bilan'};};
const mutuelle=get(/À quoi sert une mutuelle santé/),napoleon=get(/Lequel de ces personnages historiques est français/),napoleonDate=get(/Napoléon.*devenu empereur/),fontaine=get(/Qui était Jean de La Fontaine/),rodin=get(/Rodin/),reunion=get(/Quelle île française se trouve dans l'océan Indien/),canteen=get(/cantine/),ports=get(/grand port maritime/),ivg=get(/Une femme peut-elle avorter/),separation=get(/loi de séparation des Églises/),crime=get(/exemple de crime/);
assert.equal(V.pick(mutuelle).key,'mutuelle');assert.equal(V.pick(canteen).key,'canteen');assert.equal(V.pick(ivg).key,'ivg');assert.equal(V.pick(ports).key,'ports');assert.equal(V.pick(crime).key,'infractions');
assert(!V.sections(mutuelle).some(f=>/CPAM|carte Vitale/.test(f.text)));assert(/complémentaire santé/.test(V.sections(mutuelle)[0].text));
assert(!V.sections(napoleon).some(f=>/autres personnages/.test(f.text)));
assert.equal(w.NovaSheetsRules.plan([napoleon,napoleonDate],{kind:'bilan'}).notionCount,1,'Napoléon ne doit pas être répété');
assert(V.sections(reunion)[0].text.includes('Saint-Denis'));assert(!V.sections(reunion)[1].text.includes('carte'));
const road=get(/non-respect du Code de la route/);assert.equal(V.pick(road).key,'driving');assert(!/meurtre|crime >/.test(V.sections(road).map(f=>f.text).join(' ')));

w.location={href:'https://nouveau-compte.github.io/civicoach/chatbot/'};
vm.runInContext(fs.readFileSync(r+'/chatbot/parcours-pdf.js','utf8'),c);
const six=[mutuelle,napoleon,fontaine,rodin,reunion,canteen,napoleonDate];
const profiles=['general','deuteranopia','protanopia','tritanopia','achromatopsia'];
for(const profile of profiles)for(const large of [false,true]){
 const access={dys:true,dysReadable:true,dysFocus:true,dysPaper:'cream',dysSpacing:large?'wide':'comfortable',dysLine:large?'1.8':'1.5',large,markers:true,colourProfile:profile};w.NovaAccess={settings:()=>access};
 const doc=w.NovaSheetsRules.buildPdf(six,{kind:'bilan'});assert(doc.__civiAccessibility.dys);assert.equal(doc.__civiAccessibility.id,profile);assert.equal(doc.__civiAccessibility.font,'NovaSans');
 for(const b of doc.__civiImageBounds){const[x,y,bw,bh]=b.box,[dx,dy,dw,dh]=b.draw;assert(Math.abs(dw/dh-b.sourceRatio)<1e-7);assert(dx>=x-1e-6&&dy>=y-1e-6&&dx+dw<=x+bw+1e-6&&dy+dh<=y+bh+1e-6);}
 for(const t of doc.__civiTextBounds)assert(t.x+t.width<=190&&t.y<278,JSON.stringify(t));
 if(profile==='general'||(profile==='achromatopsia'&&large))fs.writeFileSync(r+'/exemples/Six_notions_DYS_'+profile+'_'+(large?'agrandi':'aere')+'_v66.pdf',Buffer.from(doc.output('arraybuffer')));
}
const access={dys:true,large:true,markers:true,colourProfile:'tritanopia',dysSpacing:'wide',dysLine:'1.8',dysPaper:'cream'};w.NovaAccess={settings:()=>access};
const data=JSON.parse(fs.readFileSync(r+'/chatbot/parcours-data.json'));
const state={variables:{revisionScore_SCR_REV_T1_CH01:1,revisionTotal_SCR_REV_T1_CH01:2},history:{bilan:[{date:'2026-10-21T10:00:00Z',score:19,max:25,variables:{parcoursExam:'NAT',parcoursT1:3,parcoursT2:4,parcoursT3:4,parcoursT4:5,parcoursT5:3}}],entrainement:[{date:'2026-10-21',score:8,max:10,variables:{trainExam:'CR',trainScore:8,trainT1:8,trainTotal1:10}}],examen:[{date:'2026-10-21',score:34,max:40,variables:{lastExamCode:'NAT',lastT1:5,lastTotal1:7,lastT2:6,lastTotal2:6,lastT3:9,lastTotal3:11,lastT4:6,lastTotal4:8,lastT5:8,lastTotal5:8,lastKnowledge:23,lastSituations:11}}]}};
const doc=w.NovaPdf.build(state,data,access);for(const t of doc.__civiTextBounds)assert(t.x+t.width<=190&&t.y<278,JSON.stringify(t));fs.writeFileSync(r+'/exemples/Parcours_DYS_v66.pdf',Buffer.from(doc.output('arraybuffer')));
const stress=[...Object.values(D.questions),...Object.values(D.revision),...Object.values(D.activities)].sort((a,b)=>V.sections(b).map(x=>x.text).join(' ').length-V.sections(a).map(x=>x.text).join(' ').length).slice(0,12);
for(const dysReadable of [false,true]){w.NovaAccess={settings:()=>({...access,dysReadable,contrast:true})};const stressDoc=w.NovaSheetsRules.buildPdf(stress,{kind:'examen'});assert.equal(stressDoc.__civiAccessibility.font,dysReadable?'NovaSans':'RepereHand');for(const t of stressDoc.__civiTextBounds)assert(t.x+t.width<=190&&t.y<278,JSON.stringify(t));}
w.NovaAccess={settings:()=>({dys:false})};assert(!w.NovaSheetsRules.buildPdf(six,{kind:'bilan'}).__civiAccessibility.dys);
console.log('PASS : 10 combinaisons DYS/couleurs/texte agrandi, proportions, marges, parcours aux barèmes natifs et retour au modèle habituel.');
