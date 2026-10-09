'use strict';
(function(root){
let dataPromise;
function reportData(){return dataPromise||(dataPromise=fetch('parcours-data.json?v=39').then(r=>{if(!r.ok)throw Error('Le contenu du parcours PDF est indisponible.');return r.json();}));}
const finite=v=>typeof v==='number'&&Number.isFinite(v);
const names={CSP:'Carte de séjour pluriannuelle',CR:'Carte de résident',NAT:'Naturalisation'};
function build(state,data,access=root.NovaAccess?.settings?.()||{}){
 const profiles={deuteranopia:{ink:[18,60,120],soft:[231,238,251],paper:[248,250,255]},protanopia:{ink:[54,34,104],soft:[238,232,250],paper:[250,248,255]},tritanopia:{ink:[104,22,45],soft:[248,232,237],paper:[255,248,250]},achromatopsia:{ink:[32,32,32],soft:[238,238,238],paper:[250,250,250]}};
 const palette=access.markers&&profiles[access.colourProfile]?profiles[access.colourProfile]:{ink:[178,28,26],soft:[248,229,230],paper:[255,249,249]};

 if(!root.jspdf?.jsPDF||!root.NovaPdfFont)throw Error('Le module PDF n’a pas pu être chargé. Actualisez la page puis réessayez.');
 const doc=new root.jspdf.jsPDF({unit:'mm',format:'a4',compress:true});
 doc.addFileToVFS('NovaSans.ttf',root.NovaPdfFont);doc.addFont('NovaSans.ttf','NovaSans','normal');doc.setFont('NovaSans');
 doc.setProperties({title:'Mon parcours civique - CiviCoach',subject:'Résultats et conseils de progression',author:'CiviCoach'});
 let y=39, section='Votre feuille de route';
 function header(){doc.setFillColor(...palette.ink);doc.rect(0,0,210,28,'F');if(root.NovaFrateBrand?.logo){doc.setFillColor(255,255,255);doc.roundedRect(13,2,43,24,2,2,'F');doc.addImage(root.NovaFrateBrand.logo,'PNG',15.5,3.2,38,38*root.NovaFrateBrand.height/root.NovaFrateBrand.width);}doc.setTextColor(255,255,255);doc.setFontSize(15);doc.text('Mon parcours civique',68,17);doc.setFontSize(8);doc.text('CIVICOACH  /  '+section,68,24);doc.setTextColor(43,54,72);}
 function newPage(){doc.addPage();header();y=39;}
 function room(n){if(y+n>276)newPage();}
 function text(value,size=10,color=[43,54,72]){doc.setFontSize(size);doc.setTextColor(...color);const lines=doc.splitTextToSize(String(value),174);for(const line of lines){room(size*.5+2);doc.text(line,18,y);y+=size*.5+1;}y+=2;}
 function icon(name,x,at,size=6){const key=access.markers&&profiles[access.colourProfile]?access.colourProfile:'default',png=root.NovaIcons?.png[key]?.[name];if(png)doc.addImage(png,'PNG',x,at,size,size);}
 function heading(value){room(55);y+=4;icon(value==='Mes révisions'?'books':value.includes('bilan')?'compass':value.includes('entraînement')?'clipboard':value.includes('examen')?'target':'compass',18,y-4);doc.setFillColor(...palette.ink);doc.roundedRect(14,y-5,2,8,1,1,'F');doc.setFontSize(15);doc.setTextColor(...palette.ink);doc.text(value,27,y);y+=12;return;doc.setFillColor(...palette.ink);doc.roundedRect(14,y-5,2,8,1,1,'F');text(value,15,palette.ink);}
 function scorebar(score,max){room(15);doc.setFillColor(233,236,241);doc.roundedRect(18,y,174,4,2,2,'F');if(score>0){doc.setFillColor(...palette.ink);doc.roundedRect(18,y,174*Math.min(1,Math.max(0,score/max)),4,2,2,'F');}y+=10;}
 function planCard(t,points,max,pct,plan,kind,personalized,offset=0){
  const title=data.themes[t-1],tag=pct<20?'0–1/10 · Premiers repères':pct<40?'2–3/10 · Distinctions':pct<60?'4–5/10 · Explications':pct<80?'6–7/10 · Raisonnement':pct<100?'8–9/10 · Dernières hésitations':'10/10 · Transfert des acquis';
  doc.setFontSize(11);const titleLines=doc.splitTextToSize(title,121);
  const top=14+titleLines.length*5.5;
  const enriched=(plan||[]).map((step,i)=>{const q=i===0&&offset===0?personalized?.errors?.[0]:null;return q?{...step,text:'Question manquée : '+q.question+(q.chosen?' Votre choix : '+q.chosen.replace(/[.]+$/,'')+'.':'')+(q.correct?' Réponse correcte : '+q.correct.replace(/[.]+$/,'')+'.':'')+' '+step.text}:step;});
  const blocks=(enriched.length?enriched:[{title:'Votre prochaine étape',text:feedback(t,pct)}]).map((step,i)=>{
   const label=step.title.replace(/^Étape \d+\s*-\s*/,'' );
   doc.setFontSize(10);const lines=doc.splitTextToSize(step.text,151);return {label,lines,i,height:8+lines.length*4.5+2};
  });
  const height=top+blocks.reduce((sum,b)=>sum+b.height,0)+11;
  if(height>233&&plan?.length>1){let cut=1,used=top+blocks[0].height+11;while(cut<plan.length-1&&used+blocks[cut].height<215){used+=blocks[cut].height;cut++;}planCard(t,points,max,pct,plan.slice(0,cut),kind,personalized,offset);planCard(t,points,max,pct,plan.slice(cut),kind,personalized,offset+cut);return;}
  room(height+5);const start=y;
  doc.setFillColor(...palette.paper);doc.setDrawColor(...palette.soft);doc.roundedRect(18,start,174,height,3,3,'FD');
  doc.setFillColor(...palette.soft);doc.roundedRect(18,start,174,top,3,3,'F');
  icon('book',23,start+3,7);
  doc.setFontSize(11);doc.setTextColor(...palette.ink);doc.text(titleLines,32,start+8,{lineHeightFactor:1.4});
  doc.setFontSize(9);doc.text(tag,24,start+top-5);
  doc.setFillColor(...palette.ink);doc.roundedRect(158,start+5,28,12,3,3,'F');doc.setTextColor(255,255,255);doc.setFontSize(13);doc.text(points+'/'+max,172,start+13,{align:'center'});
  let cursor=start+top+5;
  for(const block of blocks){
   icon(['search','book','target','clock','pencil'][block.i+offset]||'book',23,cursor,6);doc.setFontSize(11);
   doc.setTextColor(...palette.ink);doc.setFontSize(11);doc.text((block.i+offset+1)+'. '+block.label,33,cursor+4);
   doc.setTextColor(43,54,72);doc.setFontSize(10);doc.text(block.lines,33,cursor+9,{lineHeightFactor:1.27});cursor+=block.height;
  }
  doc.setFontSize(9);doc.setTextColor(...palette.ink);doc.textWithLink('Revoir cette thématique dans CiviCoach',24,start+height-6,{url:'https://codeurfou-sys.github.io/chatbot_civique2/chatbot/?retour='+(personalized?.errors?.[0]?.course||'SCR_REV_T'+t+'_MENU')});
  y=start+height+4;
 }
 function feedback(theme,pct){const bands=data.feedback.bands,index=bands.findIndex(b=>pct>=b[0]&&pct<b[1]);return data.feedback.themes[String(theme)][index<0?0:index];}
 header();text('CiviCoach - préparation à l’examen civique',10);text('Export du '+new Date().toLocaleString('fr-FR',{timeZone:'Europe/Paris'}),9,[99,109,120]);if(access.markers&&profiles[access.colourProfile])text('Palette d’accessibilité : '+({deuteranopia:'Deutéranopie',protanopia:'Protanopie',tritanopia:'Tritanopie',achromatopsia:'Achromatopsie'}[access.colourProfile])+'. Le logo FRATE conserve ses couleurs originales.',9);
 text('Votre feuille de route reprend uniquement votre dernier bilan, votre dernier entraînement et votre dernier examen blanc. Les thématiques sont classées par priorité, du score le plus faible au plus élevé. Les autres tentatives restent accessibles dans CiviCoach. Les paliers sont exprimés sur 10 pour comparer les séries de longueurs différentes.',10);
 if(!['bilan','entrainement','examen'].some(k=>state.history?.[k]?.length))text('Aucun bilan, entraînement ou examen blanc terminé n’est enregistré pour le moment.',10);
 for(const [kind,label] of [['bilan','Mon dernier bilan'],['entrainement','Mon dernier entraînement'],['examen','Mon dernier examen blanc']]){
  section=label;const rows=[...(state.history?.[kind]||[])].sort((a,b)=>{const x=Date.parse(a.date),z=Date.parse(b.date);return (Number.isFinite(z)?z:0)-(Number.isFinite(x)?x:0);}).slice(0,1);
  if(!rows.length)continue;heading(label);
  rows.forEach((row,index)=>{
   const v=row.variables||{},code=String(v[kind==='bilan'?'parcoursExam':kind==='entrainement'?'trainExam':'lastExamCode']||'').split('_')[0];
   room(38);const sy=y;doc.setFillColor(...palette.soft);doc.roundedRect(18,sy,174,32,3,3,'F');
   doc.setTextColor(...palette.ink);doc.setFontSize(11);doc.text(names[code]||'Examen civique',24,sy+8);
   doc.setFontSize(9);doc.setTextColor(83,91,104);doc.text('Résultat du '+new Date(row.date).toLocaleString('fr-FR',{timeZone:'Europe/Paris'}),24,sy+15);
   doc.setFontSize(20);doc.setTextColor(...palette.ink);doc.text(row.score+'/'+row.max,184,sy+13,{align:'right'});
   doc.setFillColor(...palette.soft);doc.roundedRect(24,sy+22,162,3,1.5,1.5,'F');
   const ratio=Math.min(1,Math.max(0,Number(row.score)/Number(row.max)||0));if(ratio){doc.setFillColor(...palette.ink);doc.roundedRect(24,sy+22,162*ratio,3,1.5,1.5,'F');}
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
   if(thematic.length){room(120);text('Votre plan d’action - commencez par la première thématique',11,palette.ink);}
   else text('Le détail par thématique n’est pas disponible pour cette ancienne tentative. Consultez le parcours personnalisé après votre prochaine session.',9);
   for(const {t,points,max,pct} of thematic){
    const personalized=root.NovaFeedback?.plan(kind,t,points,max,v);
    const band=pct<40?0:pct<80?1:pct<100?2:3,plan=personalized?.steps||data.actionPlans?.[kind]?.[String(t)]?.[band];
    planCard(t,points,max,pct,plan,kind,personalized);
   }
   y+=3;
  });
 }
 section='Mes révisions';heading('Mes révisions');let found=false;
 for(const [key,title] of Object.entries(data.chapters)){
  const raw=state.variables['atelier_'+key];let workshop;try{workshop=JSON.parse(raw||'null');}catch(e){}
  const q=state.variables['revisionScore_'+key],total=state.variables['revisionTotal_'+key];
  if(!workshop&&!finite(q))continue;found=true;room(20);text(title,11);
  if(workshop){icon('pieces',11,y-3,5);text('Activités : '+(workshop.complete?'terminées':'en cours')+' - '+workshop.step+'/'+(workshop.activityCount||2)+' activité(s). Score enregistré : '+workshop.score+'/'+workshop.total+'.');}
  if(finite(q)&&finite(total)){icon('pencil',11,y-3,5);text('Questions de connaissances : '+q+'/'+total+'.');}
  text('Relisez le corrigé des erreurs, puis revenez aux notions utiles avant de refaire les questions.');
 }
 if(!found)text('Aucune activité de révision enregistrée pour le moment.',10,[99,109,120]);
 heading('Retrouver mon parcours');text('Ouvrez le chatbot, puis « Mon parcours personnalisé » pour retrouver vos plans d’action et les corrections détaillées.');
 room(10);doc.setFontSize(10);doc.setTextColor(...palette.ink);doc.textWithLink('Ouvrir CiviCoach',18,y,{url:'https://codeurfou-sys.github.io/chatbot_civique2/chatbot/'});y+=8;
 const n=doc.getNumberOfPages();for(let i=1;i<=n;i++){doc.setPage(i);doc.setFontSize(8);doc.setTextColor(99,109,120);doc.text('CiviCoach - Mon parcours personnel',18,288);doc.text(i+'/'+n,192,288,{align:'right'});}
 return doc;
}
root.NovaPdf={build,async export(state){const data=await reportData();build(state,data,state.accessibility||root.NovaAccess?.settings?.()||{}).save('mon-parcours-civique.pdf');}};
})(window);
