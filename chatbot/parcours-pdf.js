'use strict';
(function(root){
let dataPromise;
function reportData(){return dataPromise||(dataPromise=fetch('parcours-data.json?v=19').then(r=>{if(!r.ok)throw Error('Le contenu du parcours PDF est indisponible.');return r.json();}));}
const finite=v=>typeof v==='number'&&Number.isFinite(v);
const names={CSP:'Carte de séjour pluriannuelle',CR:'Carte de résident',NAT:'Naturalisation'};
function build(state,data){
 if(!root.jspdf?.jsPDF||!root.NovaPdfFont)throw Error('Le module PDF n’a pas pu être chargé. Actualisez la page puis réessayez.');
 const doc=new root.jspdf.jsPDF({unit:'mm',format:'a4',compress:true});
 doc.addFileToVFS('NovaSans.ttf',root.NovaPdfFont);doc.addFont('NovaSans.ttf','NovaSans','normal');doc.setFont('NovaSans');
 doc.setProperties({title:'Mon parcours civique - CiviCoach',subject:'Résultats et conseils de progression',author:'CiviCoach'});
 let y=34;
 function header(){doc.setFillColor(131,38,64);doc.rect(0,0,210,22,'F');doc.setTextColor(255,255,255);doc.setFontSize(15);doc.text('Mon parcours civique',18,14);doc.setTextColor(43,54,72);}
 function newPage(){doc.addPage();header();y=34;}
 function room(n){if(y+n>276)newPage();}
 function text(value,size=10,color=[43,54,72]){doc.setFontSize(size);doc.setTextColor(...color);const lines=doc.splitTextToSize(String(value),174);for(const line of lines){room(size*.5+2);doc.text(line,18,y);y+=size*.5+1;}y+=2;}
 function heading(value){room(55);y+=4;text(value,13,[131,38,64]);}
 function scorebar(score,max){room(15);doc.setFillColor(233,236,241);doc.roundedRect(18,y,174,4,2,2,'F');if(score>0){doc.setFillColor(52,120,110);doc.roundedRect(18,y,174*Math.min(1,Math.max(0,score/max)),4,2,2,'F');}y+=10;}
 function feedback(theme,pct){const bands=data.feedback.bands,index=bands.findIndex(b=>pct>=b[0]&&pct<b[1]);return data.feedback.themes[String(theme)][index<0?0:index];}
 header();text('CiviCoach - préparation à l’examen civique',10);text('Export du '+new Date().toLocaleString('fr-FR',{timeZone:'Europe/Paris'}),9,[99,109,120]);
 text('Ce document permet de consulter vos résultats et vos conseils. Vos résultats et vos conseils restent accessibles dans « Mon parcours personnalisé ».',10);
 for(const [kind,label] of [['bilan','Mes bilans'],['entrainement','Mes entraînements'],['examen','Mes examens blancs']]){
  heading(label);const rows=state.history[kind]||[];
  if(!rows.length){text('Aucun résultat enregistré dans cette rubrique.',10,[99,109,120]);continue;}
  rows.forEach((row,index)=>{
   const v=row.variables||{},code=String(v.parcoursExam||v.trainExam||v.lastExamCode||'').split('_')[0];
   room(30);text('Tentative '+(index+1)+' - '+new Date(row.date).toLocaleString('fr-FR',{timeZone:'Europe/Paris'}),11);
   if(names[code])text(names[code]);text('Score : '+row.score+'/'+row.max,12);scorebar(row.score,row.max);
   if(kind==='examen')text(Number(row.score)>=32?'Objectif de l’examen blanc atteint (32/40 ou plus).':'L’objectif de l’examen blanc est de 32/40. Reprenez les notions associées à vos erreurs avant une nouvelle tentative.');
   if(kind==='examen'&&finite(v.lastKnowledge)&&finite(v.lastSituations))text('Questions de connaissances : '+v.lastKnowledge+'/28. Mises en situation : '+v.lastSituations+'/12.');
   for(let t=1;t<=5;t++){
    const prefix=kind==='bilan'?'parcours':kind==='entrainement'?'train':'last',points=Number(v[prefix+'T'+t]),max=kind==='bilan'?5:Number(v[(kind==='entrainement'?'trainTotal':'lastTotal')+t]);
    if(!Number.isFinite(points)||!Number.isFinite(max)||max<=0)continue;
    const pct=Math.max(0,Math.min(100,points/max*100));room(35);text(data.themes[t-1]+' : '+points+'/'+max,10,[131,38,64]);text(feedback(t,pct));
   }
   if(kind!=='bilan')text('Pour les mises en situation, identifiez le principe civique recherché, lisez toutes les propositions et consultez « Réussir les mises en situation » dans les conseils.');
   y+=3;
  });
 }
 heading('Mes révisions');let found=false;
 for(const [key,title] of Object.entries(data.chapters)){
  const raw=state.variables['atelier_'+key];let workshop;try{workshop=JSON.parse(raw||'null');}catch(e){}
  const q=state.variables['revisionScore_'+key],total=state.variables['revisionTotal_'+key];
  if(!workshop&&!finite(q))continue;found=true;room(20);text(title,11);
  if(workshop)text('Activités : '+(workshop.complete?'terminées':'en cours')+' - '+workshop.step+'/'+(workshop.activityCount||2)+' activité(s). Score enregistré : '+workshop.score+'/'+workshop.total+'.');
  if(finite(q)&&finite(total))text('Questions de connaissances : '+q+'/'+total+'.');
  text('Relisez le corrigé des erreurs, puis revenez aux notions utiles avant de refaire les questions.');
 }
 if(!found)text('Aucune activité de révision enregistrée pour le moment.',10,[99,109,120]);
 heading('Retrouver mon parcours');text('Ouvrez le chatbot, puis « Mon parcours personnalisé » pour retrouver vos plans d’action et les corrections détaillées.');
 room(10);doc.setFontSize(10);doc.setTextColor(131,38,64);doc.textWithLink('Ouvrir CiviCoach',18,y,{url:'https://codeurfou-sys.github.io/chatbot_civique2/chatbot/'});y+=8;
 const n=doc.getNumberOfPages();for(let i=1;i<=n;i++){doc.setPage(i);doc.setFontSize(8);doc.setTextColor(99,109,120);doc.text('CiviCoach - Mon parcours personnel',18,288);doc.text(i+'/'+n,192,288,{align:'right'});}
 return doc;
}
root.NovaPdf={build,async export(state){const data=await reportData();build(state,data).save('mon-parcours-civique.pdf');}};
})(window);
