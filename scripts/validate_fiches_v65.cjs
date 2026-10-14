const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const r=path.resolve(__dirname,'..'),w={jspdf:require(r+'/chatbot/vendor/jspdf.umd.min.js')},c=vm.createContext({window:w,console,Date,Map,Set,URL});
for(const f of ['vendor/parcours-font.js','vendor/parcours-font-bold.js','vendor/repere-hand.js','vendor/repere-title.js','frate-brand.js','fiches-art.js','fiches-data.js','fiches-visuels.js','fiches-regles.js','fiches-contenus.js','fiches-coherence.js','fiches-territoires.js','fiches-autonomes.js','fiches-audio.js'])vm.runInContext(fs.readFileSync(r+'/chatbot/'+f,'utf8'),c);
const V=w.CiviSheetsVisual,D=w.CiviSheetsData,all=Object.values(D.questions),rows=[];
const get=(regex)=>{const q=all.find(q=>regex.test(q.question+' '+q.correct));assert(q,String(regex));return {...q,kind:'bilan'};};
const mutuelle=get(/À quoi sert une mutuelle santé/),napoleon=get(/Lequel de ces personnages historiques est français/),napoleonDate=get(/Napoléon.*devenu empereur/),fontaine=get(/Qui était Jean de La Fontaine/),rodin=get(/Rodin/),reunion=get(/Quelle île française se trouve dans l'océan Indien/),canteen=get(/cantine/),ports=get(/grand port maritime/),ivg=get(/Une femme peut-elle avorter/),separation=get(/loi de séparation des Églises/),crime=get(/exemple de crime/);
assert.equal(V.pick(mutuelle).key,'mutuelle');assert.equal(V.pick(canteen).key,'canteen');assert.equal(V.pick(ivg).key,'ivg');assert.equal(V.pick(ports).key,'ports');assert.equal(V.pick(crime).key,'infractions');
assert(!V.sections(mutuelle).some(f=>/CPAM|carte Vitale/.test(f.text)));assert(/complémentaire santé/.test(V.sections(mutuelle)[0].text));
assert(!V.sections(napoleon).some(f=>/autres personnages/.test(f.text)));
assert.equal(w.NovaSheetsRules.plan([napoleon,napoleonDate],{kind:'bilan'}).notionCount,1,'Napoléon ne doit pas être répété');
assert(V.sections(reunion)[0].text.includes('Saint-Denis'));assert(!V.sections(reunion)[1].text.includes('carte'));
const road=get(/non-respect du Code de la route/);assert.equal(V.pick(road).key,'driving');assert(!/meurtre|crime >/.test(V.sections(road).map(f=>f.text).join(' ')));
const before=new Map(JSON.parse(fs.readFileSync(r+'/reports/coherence_fiches_v64.json')).rows.map(x=>[x.group+'|'+x.id,x]));
const forbidden=/les autres (personnages|propositions|choix)|à l.inverse des autres|contrairement aux autres|la région concernée|mise en évidence|mis en évidence|repérez|cherchez Paris|la carte situe|Cette notion s.applique|^Œuvre de/iu;
for(const group of ['questions','revision','activities'])for(const [id,q]of Object.entries(D[group])){
 const facts=V.sections(q),image=V.pick(q).key,title=V.title(q),old=before.get(group+'|'+id);
 assert.equal(facts.length,2,id);assert(facts.every(f=>f.text.trim()),id);
 assert(!facts.some(f=>forbidden.test(f.text)),id+' : '+facts.map(f=>f.text).join(' | '));
 assert(!facts.some(f=>/^(À (compléter|faciliter|autoriser)|De (l.Assemblée|créer)|Pour (protéger|garantir|éviter)|Cette journée)/.test(f.text)),id);
 assert(w.CiviSheetsArt[image]&&w.CiviSheetsArtMono[image],image);
 if(/avort/.test(q.question+' '+q.correct))assert.equal(image,'ivg',id);
 rows.push({group,id,question:q.question,correct:q.correct,title,image,facts,changed:JSON.stringify([title,image,facts])!==JSON.stringify([old?.title,old?.image,old?.facts])});
}
console.log('Catalogue contrôlé :',rows.length);
const six=[mutuelle,napoleon,fontaine,rodin,reunion,canteen,napoleonDate],ten=[...six,ports,ivg,separation,crime];
assert.equal(w.NovaSheetsRules.plan(six,{kind:'bilan'}).notionCount,6);assert.equal(w.NovaSheetsRules.plan(ten,{kind:'examen'}).notionCount,10);
function verifyBounds(doc){for(const b of doc.__civiImageBounds||[]){const [x,y,bw,bh]=b.box,[dx,dy,dw,dh]=b.draw;assert(Math.abs(dw/dh-b.sourceRatio)<1e-7,b.key);assert(dx>=x-1e-6&&dy>=y-1e-6&&dx+dw<=x+bw+1e-6&&dy+dh<=y+bh+1e-6,b.key);}}
const profiles=['general','deuteranopia','protanopia','tritanopia','achromatopsia'];
for(const profile of profiles){w.NovaAccess={settings:()=>({markers:true,colourProfile:profile})};for(const [name,cards]of[['Six_notions',six],['Dix_notions',ten]]){const doc=w.NovaSheetsRules.buildPdf(cards,{kind:'bilan'});verifyBounds(doc);assert.equal(doc.__civiAccessibility.id,profile);fs.writeFileSync(r+'/exemples/'+name+'_'+profile+'_v65.pdf',Buffer.from(doc.output('arraybuffer')));}}
const extra=[...ten,get(/Bleu.*blanc.*rouge/),get(/grève/),get(/Shoah/),get(/France Travail/),get(/Mont-Saint-Michel/),get(/1789/),get(/Beethoven|Ode à la joie/),get(/Déclarer|déclarer ses revenus/)];
for(const large of [false,true]){w.NovaAccess={settings:()=>({markers:true,colourProfile:'general',large,contrast:large})};const doc=w.NovaSheetsRules.buildPdf(extra,{kind:'examen'});verifyBounds(doc);fs.writeFileSync(r+'/exemples/Compilation_'+(large?'texte_agrandi':'standard')+'_v65.pdf',Buffer.from(doc.output('arraybuffer')));}
for(const kind of ['bilan','examen','entrainement','revision'])assert.equal(w.NovaSheetsRules.plan(ten,{kind}).notionCount,10);
assert.equal(w.NovaSheetsRules.plan([],{kind:'bilan'}).mode,'empty');
fs.writeFileSync(r+'/reports/coherence_fiches_v65.json',JSON.stringify({version:65,total:rows.length,changed:rows.filter(x=>x.changed).length,profiles,autonomousText:true,portraitWorkAspectRatios:true,dedupNapoleon:true,rows},null,2));
console.log('PASS v65 : fiches autonomes, images cohérentes, dédoublonnage, cinq profils, images PDF non déformées, texte agrandi et tous les types d’activités.');
