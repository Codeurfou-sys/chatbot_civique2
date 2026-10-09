const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const base=path.resolve(__dirname,'..');const root={jspdf:require(base+'/chatbot/vendor/jspdf.umd.min.js')};const ctx=vm.createContext({window:root,console});
for(const f of ['vendor/parcours-font.js','frate-brand.js','feedback-data.js','feedbacks.js','icones.js','parcours-pdf.js'])vm.runInContext(fs.readFileSync(base+'/chatbot/'+f,'utf8'),ctx);
const key=Object.keys(root.CiviFeedbackData.questions).find(k=>root.CiviFeedbackData.questions[k].notion==='Laïcité');const q=root.CiviFeedbackData.questions[key];const vars={parcoursMistakes:'|'+key+'|',parcoursFeedbackChoices:JSON.stringify({[key]:'Choix incorrect de test'})};
for(const kind of ['bilan','entrainement','examen'])for(const max of [2,5,7,10,12,25,40])for(let n=0;n<=max;n++){
 const plan=root.NovaFeedback.plan(kind,1,n,max,vars);const str=plan.label+' '+plan.steps.map(x=>x.text).join(' ');
 assert(!/\d+\/10|sur dix|sur 10/.test(str)||max===10,'unexpected denominator: '+kind+' '+n+'/'+max);assert(!/\/10/.test(plan.label));assert(plan.target<=max);assert(plan.target>n||n===max);
 assert.equal(plan.steps.length,5);
 if(n===max)assert.equal(plan.errors.length,0);
}
const plan=root.NovaFeedback.plan('bilan',1,1,5,vars);assert(plan.steps[0].text.includes('1/5'));assert(plan.steps[1].text.includes('1905'));assert(plan.steps[1].text.includes('frise'));assert(plan.steps[3].text.includes('glossaire'));assert(plan.steps[4].text.includes('3/5'));assert.equal(plan.errors[0].chosen,'Choix incorrect de test');assert.equal(plan.errors[0].correct,q.correct);
const state={variables:{},history:{bilan:[{date:'2026-10-09T09:00:00Z',score:14,max:25,variables:{...vars,parcoursExam:'CR',parcoursT1:1,parcoursT2:2,parcoursT3:3,parcoursT4:4,parcoursT5:4}}],entrainement:[],examen:[]}};
const data=JSON.parse(fs.readFileSync(base+'/chatbot/parcours-data.json'));
fs.mkdirSync('/tmp/civicoach41-pdf',{recursive:true});
for(const profile of ['default','protanopia']){const pdf=root.NovaPdf.build(state,data,profile==='default'?{}:{markers:true,colourProfile:profile});fs.writeFileSync('/tmp/civicoach41-pdf/'+profile+'.pdf',Buffer.from(pdf.output('arraybuffer')));}
console.log('PASS native denominators, bounded progressive goals, five action stages, targeted laicity error with chosen/correct response, no errors invented at full score; PDF generated');
