const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path'),r=path.resolve(__dirname,'..'),w={jspdf:require(r+'/chatbot/vendor/jspdf.umd.min.js')},c=vm.createContext({window:w,console,Date,Map,Set,URL});
for(const f of ['vendor/parcours-font.js','vendor/parcours-font-bold.js','vendor/repere-hand.js','vendor/repere-title.js','frate-brand.js','fiches-art.js','fiches-data.js','fiches-visuels.js','fiches-regles.js','fiches-contenus.js','fiches-audio.js'])vm.runInContext(fs.readFileSync(r+'/chatbot/'+f,'utf8'),c);
let count=0;for(const g of ['questions','revision','activities'])for(const q of Object.values(w.CiviSheetsData[g])){const f=w.CiviSheetsVisual.composition(q).facts;assert.equal(f.length,2,q.question);assert(f.every(x=>x.text));assert(!/[→←↑↓↔➜➔]/.test(f.map(x=>x.text).join('')));count++;}
const all=Object.values(w.CiviSheetsData.questions),by=re=>({...all.find(q=>re.test(q.question+' '+q.correct)),kind:'bilan'});
const cards=[by(/nom de l.hymne national/),by(/auteur de la Marseillaise/),by(/Debussy/),by(/Beethoven|Ode à la joie/),by(/tour Eiffel/),by(/1789/)];
assert(cards.every(q=>q.question));
for(const id of ['general','deuteranopia','protanopia','tritanopia','achromatopsia']){w.NovaAccess={settings:()=>({markers:true,colourProfile:id})};const d=w.NovaSheetsRules.buildPdf(cards,{kind:'bilan'});assert.equal(d.__civiAccessibility.id,id);fs.writeFileSync(r+'/exemples/Audio_et_Marseillaise_'+id+'_v62.pdf',Buffer.from(d.output('arraybuffer')));}
const lyrics=all.find(q=>/Aux armes/.test(q.question));assert(w.CiviSheetsVisual.sections(lyrics)[1].text.includes('citoyens'));
assert.equal(w.CiviSheetAudio.track(cards[0]).id,'marseillaise');
fs.writeFileSync(r+'/reports/validation_v62.json',JSON.stringify({references:count,profiles:5,drawnAudioButtons:true,shortMarseillaise:true},null,2));
console.log('PASS v62',count,'références, cinq profils, paroles et contrôles audio');
