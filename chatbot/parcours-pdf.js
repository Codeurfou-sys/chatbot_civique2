'use strict';
(function(root){
let dataPromise;
function reportData(){return dataPromise||(dataPromise=fetch('parcours-data.json?v=36').then(r=>{if(!r.ok)throw Error('Le contenu du parcours PDF est indisponible.');return r.json();}));}
const finite=v=>typeof v==='number'&&Number.isFinite(v);
const names={CSP:'Carte de séjour pluriannuelle',CR:'Carte de résident',NAT:'Naturalisation'};
function build(state,data){
 if(!root.jspdf?.jsPDF||!root.NovaPdfFont)throw Error('Le module PDF n’a pas pu être chargé. Actualisez la page puis réessayez.');
 const doc=new root.jspdf.jsPDF({unit:'mm',format:'a4',compress:true});
 doc.addFileToVFS('NovaSans.ttf',root.NovaPdfFont);doc.addFont('NovaSans.ttf','NovaSans','normal');doc.setFont('NovaSans');
 doc.setProperties({title:'Mon parcours civique - CiviCoach',subject:'Résultats et conseils de progression',author:'CiviCoach'});
 let y=39;
 function header(){doc.setFillColor(178,28,26);doc.rect(0,0,210,28,'F');if(root.NovaFrateBrand?.logo){doc.setFillColor(255,255,255);doc.roundedRect(13,2,43,24,2,2,'F');doc.addImage(root.NovaFrateBrand.logo,'PNG',15.5,3.2,38,38*root.NovaFrateBrand.height/root.NovaFrateBrand.width);}doc.setTextColor(255,255,255);doc.setFontSize(15);doc.text('Mon parcours civique',68,17);doc.setTextColor(43,54,72);}
 function newPage(){doc.addPage();header();y=39;}
 function room(n){if(y+n>276)newPage();}
 function text(value,size=10,color=[43,54,72]){doc.setFontSize(size);doc.setTextColor(...color);const lines=doc.splitTextToSize(String(value),174);for(const line of lines){room(size*.5+2);doc.text(line,18,y);y+=size*.5+1;}y+=2;}
 function heading(value){room(55);y+=4;text(value,13,[178,28,26]);}
 function scorebar(score,max){room(15);doc.setFillColor(233,236,241);doc.roundedRect(18,y,174,4,2,2,'F');if(score>0){doc.setFillColor(52,120,110);doc.roundedRect(18,y,174*Math.min(1,Math.max(0,score/max)),4,2,2,'F');}y+=10;}
 function feedback(theme,pct){const bands=data.feedback.bands,index=bands.findIndex(b=>pct>=b[0]&&pct<b[1]);return data.feedback.themes[String(theme)][index<0?0:index];}
 header();text('CiviCoach - préparation à l’examen civique',10);text('Export du '+new Date().toLocaleString('fr-FR',{timeZone:'Europe/Paris'}),9,[99,109,120]);
 text('Votre feuille de route reprend uniquement votre dernier bilan, votre dernier entraînement et votre dernier examen blanc. Les thématiques sont classées par priorité, du score le plus faible au plus élevé. Les autres tentatives restent accessibles dans CiviCoach.',10);
 for(const [kind,label] of [['bilan','Mon dernier bilan'],['entrainement','Mon dernier entraînement'],['examen','Mon dernier examen blanc']]){
  heading(label);const rows=[...(state.history?.[kind]||[])].sort((a,b)=>{const x=Date.parse(a.date),z=Date.parse(b.date);return (Number.isFinite(z)?z:0)-(Number.isFinite(x)?x:0);}).slice(0,1);
  if(!rows.length){text('Aucun résultat enregistré dans cette rubrique.',10,[99,109,120]);continue;}
  rows.forEach((row,index)=>{
   const v=row.variables||{},code=String(v[kind==='bilan'?'parcoursExam':kind==='entrainement'?'trainExam':'lastExamCode']||'').split('_')[0];
   room(30);text('Résultat du '+new Date(row.date).toLocaleString('fr-FR',{timeZone:'Europe/Paris'}),11);
   if(names[code])text(names[code]);text('Score : '+row.score+'/'+row.max,12);scorebar(row.score,row.max);
   if(kind==='examen')text(Number(row.score)>=32?'Objectif de l’examen blanc atteint (32/40 ou plus).':'L’objectif de l’examen blanc est de 32/40. Reprenez les notions associées à vos erreurs avant une nouvelle tentative.');
   if(kind==='examen'&&finite(v.lastKnowledge)&&finite(v.lastSituations))text('Questions de connaissances : '+v.lastKnowledge+'/28. Mises en situation : '+v.lastSituations+'/12.');
   const thematic=[];
   for(let t=1;t<=5;t++){
    const prefix=kind==='bilan'?'parcours':kind==='entrainement'?'train':'last',raw=v[prefix+'T'+t],rawMax=kind==='bilan'?5:v[(kind==='entrainement'?'trainTotal':'lastTotal')+t];
    if(raw===undefined||raw===null||rawMax===undefined||rawMax===null)continue;
    const points=Number(raw),max=Number(rawMax);
    if(!Number.isFinite(points)||!Number.isFinite(max)||max<=0)continue;
    thematic.push({t,points,max,pct:Math.max(0,Math.min(100,points/max*100))});
   }
   thematic.sort((a,b)=>a.pct-b.pct||a.t-b.t);
   if(thematic.length){room(100);text('Plan d’action par thématique',11,[178,28,26]);}
   else text('Le détail par thématique n’est pas disponible pour cette ancienne tentative. Consultez le parcours personnalisé après votre prochaine session.',9);
   for(const {t,points,max,pct} of thematic){
    const band=pct<40?0:pct<80?1:pct<100?2:3,plan=data.actionPlans?.[kind]?.[String(t)]?.[band];
    doc.setFontSize(9);const height=plan?20+plan.reduce((sum,step)=>sum+doc.splitTextToSize(step.title+' : '+step.text,174).length*5.5+2,0):42;
    room(height);text(data.themes[t-1]+' : '+points+'/'+max,11,[178,28,26]);
    if(plan)for(const step of plan)text(step.title+' : '+step.text,9);
    else text(feedback(t,pct),9);
    room(10);doc.setFontSize(9);doc.setTextColor(178,28,26);doc.textWithLink('Revoir cette thématique dans CiviCoach',18,y,{url:'https://codeurfou-sys.github.io/chatbot_civique2/chatbot/?retour=SCR_REV_T'+t+'_MENU'});y+=8;
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
