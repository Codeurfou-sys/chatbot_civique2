const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const r=path.resolve(__dirname,'..'),w={jspdf:require(r+'/chatbot/vendor/jspdf.umd.min.js')},c=vm.createContext({window:w,console,Date,Map,Set,URL});
for(const f of ['vendor/parcours-font.js','vendor/parcours-font-bold.js','vendor/repere-hand.js','vendor/repere-title.js','frate-brand.js','fiches-art.js','fiches-data.js','fiches-visuels.js','fiches-regles.js','fiches-contenus.js','fiches-coherence.js','fiches-audio.js'])vm.runInContext(fs.readFileSync(r+'/chatbot/'+f,'utf8'),c);
const V=w.CiviSheetsVisual,D=w.CiviSheetsData,rows=[],before=JSON.parse(fs.readFileSync(r+'/reports/coherence_fiches_v63.json')).rows;
const originals=new Map(before.map(x=>[x.group+'|'+x.id,x]));
const all=Object.values(D.questions),get=(regex)=>{const q=all.find(q=>regex.test(q.question+' '+q.correct));assert(q,String(regex));return {...q,kind:'bilan'};};
const history=D.questions['c2f371ffb44f4c00'];assert(history);assert.equal(V.pick(history).key,'war');assert.equal(w.NovaSheetsRules.plan([history],{kind:'bilan'}).blocks[0].id,4);
const rhin=D.activities['SCR_REV_T4_CH02:0:geo2'];assert.equal(V.pick(rhin).key,'river-rhin');assert(!/8 pays/.test(V.sections(rhin)[0].text));
const legislative=D.questions['bb5949c08d480564'];assert.equal(V.pick(legislative).key,'vote');assert(/Assemblée nationale/.test(V.sections(legislative)[0].text));
const seats=get(/Combien de députés/);assert.equal(V.pick(seats).key,'assembly-seats');
for(const [name,key] of [['Seine','seine'],['Rhône','rhone'],['Rhin','rhin'],['Loire','loire'],['Garonne','garonne']]){
 const q={question:'Où se trouve '+name+' ?',correct:name,theme:4};assert.equal(V.pick(q).key,'river-'+key);
 const svg=fs.readFileSync(r+'/chatbot/assets/fiches/river-'+key+'.svg','utf8');assert(svg.includes(name));assert(svg.includes('stroke-width="5"'));
}
assert.equal(V.pick({question:'Où se trouvent les Vosges ?',correct:'À l’ouest du Rhin.',theme:4}).key,'mountains');
assert.equal(V.pick(get(/France Travail/)).key,'france-travail');assert.equal(V.pick(get(/droit de grève/)).key,'strike');assert.equal(V.pick(get(/Shoah/)).key,'shoah');
const rodin=get(/Rodin/);assert(V.sections(rodin)[1].text.includes('Dante'));assert(V.artwork(rodin).art==='thinker');
const veil={question:'Qui a porté la loi sur l’IVG en 1975 ?',correct:'Simone Veil.',theme:4};assert.equal(V.pick(veil).key,'veil');
for(const g of ['questions','revision','activities'])for(const [id,q] of Object.entries(D[g])){
 const facts=V.sections(q),image=V.pick(q).key,title=V.title(q),old=originals.get(g+'|'+id);
 assert.equal(facts.length,2,q.question);assert(facts.every(f=>f.text.trim()),id);
 assert(w.CiviSheetsArt[image]&&w.CiviSheetsArtMono[image],image);
 assert(!/[→←↑↓↔➜➔]/.test(facts.map(f=>f.text).join('')),id);
 assert(!/^Situation\s*:|^Pour mémoriser|^Œuvre de /.test(facts[1].text),id);
 const category=V.revisionTheme(q)||Number(q.theme);assert(category>=1&&category<=5,id);
 rows.push({group:g,id,question:q.question,correct:q.correct,title,image,category,facts,oldImage:old?.image,changed:JSON.stringify([facts,title,image])!==JSON.stringify([old?.facts,old?.title,old?.image])});
}
console.log('Catalogue vérifié :',rows.length);
const six=[history,rhin,seats,get(/France Travail/),rodin,get(/droit de grève/)];
const ten=[...six,get(/Shoah/),get(/Sécurité sociale/),get(/IVG|interruption volontaire/),get(/colonisé/)];
const profiles=['general','deuteranopia','protanopia','tritanopia','achromatopsia'];
for(const id of profiles){
 w.NovaAccess={settings:()=>({markers:true,colourProfile:id})};
 for(const [name,cards] of [['Six_notions',six],['Dix_notions',ten]]){
  const doc=w.NovaSheetsRules.buildPdf(cards,{kind:'bilan'});assert.equal(doc.__civiAccessibility.id,id);
  fs.writeFileSync(r+'/exemples/'+name+'_'+id+'_v64.pdf',Buffer.from(doc.output('arraybuffer')));
 }
}
for(const kind of ['examen','bilan','revision','entrainement'])assert(w.NovaSheetsRules.plan(ten,{kind}).notionCount>=6);
assert.equal(w.NovaSheetsRules.plan([],{kind:'bilan'}).mode,'empty');
fs.writeFileSync(r+'/reports/coherence_fiches_v64.json',JSON.stringify({version:64,total:rows.length,changed:rows.filter(x=>x.changed).length,profiles,rows},null,2));
console.log('PASS v64',rows.length,'références ;',rows.filter(x=>x.changed).length,'contenus/titres/illustrations corrigés ; cinq profils, six et dix notions, aucun résultat sans erreur.');
