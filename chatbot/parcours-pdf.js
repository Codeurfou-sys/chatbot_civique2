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
 let y=39, section='Votre feuille de route';
 function header(){doc.setFillColor(178,28,26);doc.rect(0,0,210,28,'F');if(root.NovaFrateBrand?.logo){doc.setFillColor(255,255,255);doc.roundedRect(13,2,43,24,2,2,'F');doc.addImage(root.NovaFrateBrand.logo,'PNG',15.5,3.2,38,38*root.NovaFrateBrand.height/root.NovaFrateBrand.width);}doc.setTextColor(255,255,255);doc.setFontSize(15);doc.text('Mon parcours civique',68,17);doc.setFontSize(8);doc.text('CIVICOACH  /  '+section,68,24);doc.setTextColor(43,54,72);}
 function newPage(){doc.addPage();header();y=39;}
 function room(n){if(y+n>276)newPage();}
 function text(value,size=10,color=[43,54,72]){doc.setFontSize(size);doc.setTextColor(...color);const lines=doc.splitTextToSize(String(value),174);for(const line of lines){room(size*.5+2);doc.text(line,18,y);y+=size*.5+1;}y+=2;}
 function heading(value){room(55);y+=4;doc.setFillColor(178,28,26);doc.roundedRect(14,y-5,2,8,1,1,'F');text(value,15,[178,28,26]);}
 function scorebar(score,max){room(15);doc.setFillColor(233,236,241);doc.roundedRect(18,y,174,4,2,2,'F');if(score>0){doc.setFillColor(178,28,26);doc.roundedRect(18,y,174*Math.min(1,Math.max(0,score/max)),4,2,2,'F');}y+=10;}
 function planCard(t,points,max,pct,plan,kind){
  const title=data.themes[t-1],tag=pct<40?'À travailler en priorité':pct<80?'À consolider':pct<100?'À confirmer':'Acquis à entretenir';
  doc.setFontSize(11);const titleLines=doc.splitTextToSize(title,127);
  const top=14+titleLines.length*5.5;
  const blocks=(plan||[{title:'Votre prochaine étape',text:feedback(t,pct)}]).map((step,i)=>{
   const label=step.title.replace(/^Étape \d+\s*-\s*/,'' );
   doc.setFontSize(10);const lines=doc.splitTextToSize(step.text,151);return {label,lines,i,height:8+lines.length*4.5+2};
  });
  const height=top+blocks.reduce((sum,b)=>sum+b.height,0)+11;
  room(height+5);const start=y;
  doc.setFillColor(255,249,249);doc.setDrawColor(233,210,210);doc.roundedRect(18,start,174,height,3,3,'FD');
  doc.setFillColor(248,229,230);doc.roundedRect(18,start,174,top,3,3,'F');
  doc.setFontSize(11);doc.setTextColor(130,22,24);doc.text(titleLines,24,start+8,{lineHeightFactor:1.4});
  doc.setFontSize(9);doc.text(tag,24,start+top-5);
  doc.setFillColor(178,28,26);doc.roundedRect(158,start+5,28,12,3,3,'F');doc.setTextColor(255,255,255);doc.setFontSize(13);doc.text(points+'/'+max,172,start+13,{align:'center'});
  let cursor=start+top+5;
  for(const block of blocks){
   doc.setFillColor(178,28,26);doc.circle(26,cursor+3,3.2,'F');doc.setTextColor(255,255,255);doc.setFontSize(9);doc.text(String(block.i+1),26,cursor+4.1,{align:'center'});
   doc.setTextColor(130,22,24);doc.setFontSize(11);doc.text(block.label,33,cursor+4);
   doc.setTextColor(43,54,72);doc.setFontSize(10);doc.text(block.lines,33,cursor+9,{lineHeightFactor:1.27});cursor+=block.height;
  }
  doc.setFontSize(9);doc.setTextColor(178,28,26);doc.textWithLink('Revoir cette thématique dans CiviCoach',24,start+height-6,{url:'https://codeurfou-sys.github.io/chatbot_civique2/chatbot/?retour=SCR_REV_T'+t+'_MENU'});
  y=start+height+4;
 }
 function feedback(theme,pct){const bands=data.feedback.bands,index=bands.findIndex(b=>pct>=b[0]&&pct<b[1]);return data.feedback.themes[String(theme)][index<0?0:index];}
 header();text('CiviCoach - préparation à l’examen civique',10);text('Export du '+new Date().toLocaleString('fr-FR',{timeZone:'Europe/Paris'}),9,[99,109,120]);
 text('Votre feuille de route reprend uniquement votre dernier bilan, votre dernier entraînement et votre dernier examen blanc. Les thématiques sont classées par priorité, du score le plus faible au plus élevé. Les autres tentatives restent accessibles dans CiviCoach.',10);
 for(const [kind,label] of [['bilan','Mon dernier bilan'],['entrainement','Mon dernier entraînement'],['examen','Mon dernier examen blanc']]){
  section=label;heading(label);const rows=[...(state.history?.[kind]||[])].sort((a,b)=>{const x=Date.parse(a.date),z=Date.parse(b.date);return (Number.isFinite(z)?z:0)-(Number.isFinite(x)?x:0);}).slice(0,1);
  if(!rows.length){text('Aucun résultat enregistré dans cette rubrique.',10,[99,109,120]);continue;}
  rows.forEach((row,index)=>{
   const v=row.variables||{},code=String(v[kind==='bilan'?'parcoursExam':kind==='entrainement'?'trainExam':'lastExamCode']||'').split('_')[0];
   room(38);const sy=y;doc.setFillColor(248,229,230);doc.roundedRect(18,sy,174,32,3,3,'F');
   doc.setTextColor(130,22,24);doc.setFontSize(11);doc.text(names[code]||'Examen civique',24,sy+8);
   doc.setFontSize(9);doc.setTextColor(83,91,104);doc.text('Résultat du '+new Date(row.date).toLocaleString('fr-FR',{timeZone:'Europe/Paris'}),24,sy+15);
   doc.setFontSize(20);doc.setTextColor(178,28,26);doc.text(row.score+'/'+row.max,184,sy+13,{align:'right'});
   doc.setFillColor(235,209,211);doc.roundedRect(24,sy+22,162,3,1.5,1.5,'F');
   const ratio=Math.min(1,Math.max(0,Number(row.score)/Number(row.max)||0));if(ratio){doc.setFillColor(178,28,26);doc.roundedRect(24,sy+22,162*ratio,3,1.5,1.5,'F');}
   y=sy+39;
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
   if(thematic.length){room(120);text('Votre plan d’action - commencez par la première thématique',11,[178,28,26]);}
   else text('Le détail par thématique n’est pas disponible pour cette ancienne tentative. Consultez le parcours personnalisé après votre prochaine session.',9);
   for(const {t,points,max,pct} of thematic){
    const band=pct<40?0:pct<80?1:pct<100?2:3,plan=data.actionPlans?.[kind]?.[String(t)]?.[band];
    planCard(t,points,max,pct,plan,kind);
   }
   if(kind!=='bilan')text('Pour les mises en situation, identifiez le principe civique recherché, lisez toutes les propositions et consultez « Réussir les mises en situation » dans les conseils.');
   y+=3;
  });
 }
 section='Mes révisions';heading('Mes révisions');let found=false;
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
