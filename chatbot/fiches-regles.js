'use strict';
(function(root){
const themes=[
 {id:1,title:'Les valeurs de la République',colour:'#17669c',rgb:[23,102,156],image:'values'},
 {id:2,title:'Les institutions : qui fait quoi ?',colour:'#a33360',rgb:[163,51,96],image:'president'},
 {id:3,title:'Les droits et les devoirs',colour:'#28775b',rgb:[40,119,91],image:'rights'},
 {id:4,title:'L’histoire, la géographie et la culture',colour:'#80501c',rgb:[128,80,28],image:'history'},
 {id:5,title:'La vie en société',colour:'#59418e',rgb:[89,65,142],image:'daily'}];
const normal=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
function isSituation(q){return q.type==='situation'||String(q.sourceId||'').startsWith('MS-')||!!(q.context&&q.context!==q.question);}
function explanation(q){
 const sentences=q.explanation||[];
 // A factual history/culture question needs its repère, not a whole biography.
 // Situations and rule-based questions retain the complete source explanation.
 const factual=Number(q.theme)===4&&!isSituation(q)&&String(q.correct||'').length<80&&/quelle année|quelle date|en quelle|qui a |qui était|quel écrivain|quel peintre|comment s'appelle/i.test(q.question||'');
 if(factual)return sentences.slice(0,1).map(sentence=>/^qui (était|est)/i.test(q.question||'')?sentence.replace(/\s*\(\d{4}\s*[-–]\s*\d{4}\)/g,''):sentence);
 return sentences;
}
function plan(cards,context={}){
 const notions=new Map();
 for(const q of cards){
  // A broad chapter label alone cannot merge different dates, roles or actions.
  const key=Number(q.theme)+'|'+normal(q.notion||q.question)+'|'+normal(q.correct)+(isSituation(q)?'|'+normal(q.context||q.question):'');
  if(!notions.has(key))notions.set(key,{...q,variants:[],kind:q.kind});
  notions.get(key).variants.push(q);
 }
 const blocks=themes.map(t=>({...t,notions:[...notions.values()].filter(q=>Number(q.theme)===t.id)})).filter(t=>t.notions.length);
 const kinds=[...new Set(cards.map(q=>q.kind).filter(Boolean))],kind=context.kind||(kinds.length===1?kinds[0]:'ensemble');
 const long=kind==='examen'||kind==='bilan'||kind==='ensemble';
 const mode=!blocks.length?'empty':blocks.length===1?'thematique':long&&notions.size>6?'par-thematique':'synthese';
 const sheets=mode==='empty'?[]:mode==='par-thematique'?blocks.map(b=>({title:b.title,blocks:[b]})):[{title:blocks.length===1?blocks[0].title:'Mes notions à revoir',blocks}];
 return {mode,kind,notionCount:notions.size,errorCount:cards.length,blocks,sheets};
}
function buildPdf(cards,context={}){
 const model=plan(cards,context);if(!model.sheets.length)throw Error('Aucune fiche à télécharger.');
 if(!root.jspdf?.jsPDF||!root.NovaPdfFont||!root.CiviSheetsVisual)throw Error('Le module PDF est indisponible. Actualisez la page puis réessayez.');
 if(!root.CiviSheetsArt)throw Error('Les illustrations sont encore en cours de chargement. Réessayez dans un instant.');
 const doc=new root.jspdf.jsPDF({orientation:'landscape',unit:'mm',format:'a4',compress:true});doc.addFileToVFS('NovaSans.ttf',root.NovaPdfFont);doc.addFont('NovaSans.ttf','NovaSans','normal');doc.setFont('NovaSans');if(root.NovaPdfFontBold){doc.addFileToVFS('NovaSansBold.ttf',root.NovaPdfFontBold);doc.addFont('NovaSansBold.ttf','NovaSans','bold');}
 doc.setProperties({title:'Mes fiches de révision',author:'Frate Formation Conseil'});
 const clean=s=>String(s||'').replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu,'');
 const exportProfile=root.CiviSheetsVisual.profile(),mono=exportProfile.mono,large=!!root.NovaAccess?.settings?.().large;const bodySize=large?16:14,lh=large?6.6:5.8;
 const colour=b=>exportProfile.ink||b.rgb;doc.__civiAccessibility={...exportProfile};
 let y,current;
 function font(bold=false){doc.setFont('NovaSans',bold&&root.NovaPdfFontBold?'bold':'normal');}
 function wrap(s,w,size=bodySize,bold=false){font(bold);doc.setFontSize(size);return doc.splitTextToSize(clean(s),w);}
 function header(){doc.setFillColor(...exportProfile.tint);doc.rect(0,0,297,210,'F');doc.setDrawColor(235,235,235);doc.setLineWidth(.12);for(let x=0;x<297;x+=8)doc.line(x,0,x,210);for(let yy=0;yy<210;yy+=8)doc.line(0,yy,297,yy);
  if(root.NovaFrateBrand?.logo)doc.addImage(mono&&root.CiviMonoFrateLogo?root.CiviMonoFrateLogo:root.NovaFrateBrand.logo,'PNG',12,6,32,18);
  font(true);doc.setTextColor(...(exportProfile.ink||[36,54,72]));doc.setFontSize(19);doc.text(wrap(current.title,235,19,true),50,16);
  font();doc.setFontSize(10);const label={bilan:'Bilan',examen:'Examen blanc',entrainement:'Entraînement',revision:'Révision'}[model.kind]||'Parcours';doc.text(label+' · Lecture simplifiée · '+model.notionCount+' notion'+(model.notionCount>1?'s':'')+' à revoir · '+exportProfile.label,50,28);y=39;
 }
 function next(){doc.addPage();header();}
 function image(q,x,yy,w,h){const v=root.CiviSheetsVisual.pick(q),src=mono?root.CiviSheetsArtMono?.[v.key]:v.src;if(!src)throw Error('L’illustration adaptée au profil choisi n’est pas disponible.');const info=doc.getImageProperties(src),ratio=Math.min(w/info.width,h/info.height);doc.addImage(src,src.startsWith('data:image/jpeg')?'JPEG':'PNG',x+(w-info.width*ratio)/2,yy+(h-info.height*ratio)/2,info.width*ratio,info.height*ratio,v.key,'FAST');}
 function content(q,width){const full=width>200,iw=full?58:37,tw=width-iw-14;const title=wrap(root.CiviSheetsVisual.title(q),width-10,15,true),titleH=title.length*6+4;let parts=[];
  if(q.date)parts.push({lines:wrap('Réponses du '+new Date(q.date).toLocaleDateString('fr-FR'),tw,10),size:10,step:4});
  for(const s of root.CiviSheetsVisual.sections(q)){
   if(isSituation(q))parts.push({lines:wrap(s.label,tw,11),size:11,step:4.4,label:true});
   const text=!isSituation(q)&&['Mémo','Exemple concret'].includes(s.label)?s.label+' : '+s.text:s.text;
   parts.push({lines:wrap(text,tw,s.label==='Le repère'?12:bodySize,s.label==='À retenir'),size:s.label==='Le repère'?12:bodySize,step:s.label==='Le repère'?5:lh,bold:s.label==='À retenir'});
   parts.push({gap:isSituation(q)?2:3,lines:[]});
  }
  const textH=parts.reduce((sum,p)=>sum+(p.gap||p.lines.length*p.step),0);return {q,width,iw,tw,title,titleH,parts,h:titleH+Math.max(35,textH)+6};
 }
 function frame(b,yy,h,continued=false){const ink=colour(b);doc.setFillColor(255,255,255);doc.setDrawColor(...ink);doc.setLineWidth(.35);doc.roundedRect(12,yy,273,h,2,2,'FD');doc.setFillColor(...ink);doc.roundedRect(15,yy-1,267,11,2,2,'F');font(true);doc.setTextColor(255,255,255);doc.setFontSize(14);doc.text('T'+b.id+' · '+b.title+(continued?' · suite':''),20,yy+6.5);}
 function drawCard(item,x,yy,b,parts=item.parts,first=true){const ink=colour(b);font(true);doc.setTextColor(...ink);doc.setFontSize(15);doc.text(item.title,x+4,yy+6,{lineHeightFactor:1.12});let py=yy+item.titleH;
  if(first)image(item.q,x+3,py,item.iw,Math.min(52,item.h-item.titleH-4));
  for(const p of parts){if(p.gap){py+=p.gap;continue;}font(p.label||p.bold);doc.setFontSize(p.size);doc.setTextColor(...(p.label?ink:(exportProfile.ink||[36,54,72])));doc.text(p.lines,x+item.iw+8,py+4,{lineHeightFactor:p.step/(p.size*25.4/72)});py+=p.lines.length*p.step;}
 }
 for(const [si,sheet] of model.sheets.entries()){
  if(si)doc.addPage();current=sheet;header();
  for(const b of sheet.blocks){
   const qs=b.notions;
   for(let i=0;i<qs.length;){
    // Short knowledge notions share one horizontal themed block. Situations stay whole.
    const short=q=>!isSituation(q)&&root.CiviSheetsVisual.sections(q).reduce((n,s)=>n+s.text.length,0)<600;
    let pair=i+1<qs.length&&short(qs[i])&&short(qs[i+1]);let items=pair?[content(qs[i],133),content(qs[i+1],133)]:[content(qs[i],267)];
    if(pair&&Math.max(...items.map(p=>p.h))>138){pair=false;items=[content(qs[i],267)];}
    const h=14+Math.max(...items.map(p=>p.h));
    if(h<=154){if(y+h>193)next();frame(b,y,h);for(const [j,item] of items.entries())drawCard(item,15+j*136,y+12,b);if(pair){doc.setDrawColor(220,220,220);doc.line(148,y+14,148,y+h-5);}y+=h+8;}
    else{
     // Preserve every source condition even when a long explanation spans pages.
     const item=content(qs[i],267);let flat=[];for(const p of item.parts){if(p.gap)flat.push({gap:p.gap,lines:[]});else for(const line of p.lines)flat.push({...p,lines:[line]});}
     let pos=0,first=true;while(pos<flat.length){if(y>45)next();const available=193-y-14-item.titleH-6;let used=0,chunk=[];while(pos<flat.length){const p=flat[pos],height=p.gap||p.step;if(used+height>available&&chunk.length)break;chunk.push(p);used+=height;pos++;}
      const chunkItem={...item,h:item.titleH+Math.max(first?35:0,used)+6};const ch=14+chunkItem.h;frame(b,y,ch,!first);drawCard(chunkItem,15,y+12,b,chunk,first);y+=ch+8;first=false;if(pos<flat.length)next();}
    }
    i+=pair?2:1;
   }
   const example=root.CiviSheetsVisual.lawExample(b);
   if(example){const h=89;if(y+h>193)next();frame(b,y,h);font(true);doc.setTextColor(...colour(b));doc.setFontSize(14);doc.text(example.title,19,y+18);
    for(const [j,step] of example.steps.entries()){const x=19+j*67;image({theme:2,question:'',correct:'',context:'',notion:'',...{question:step.key==='bins'?'poubelle':step.key==='president'?'président de la République':step.key==='government'?'gouvernement':'Assemblée nationale'}},x+10,y+23,43,25);font(true);doc.setFontSize(11);doc.text(step.label,x,y+55);font();doc.setTextColor(...(exportProfile.ink||[36,54,72]));doc.setFontSize(12);doc.text(wrap(step.text,59,12),x,y+62,{lineHeightFactor:1.25});if(j<3){doc.setDrawColor(...colour(b));doc.line(x+56,y+35,x+63,y+35);doc.line(x+61,y+33,x+63,y+35);doc.line(x+61,y+37,x+63,y+35);}}
    font();doc.setFontSize(8);doc.text(example.note,19,y+85);y+=h+8;}
  }
 }
 for(let p=1;p<=doc.getNumberOfPages();p++){doc.setPage(p);font();doc.setTextColor(...(mono?[80,80,80]:[80,85,95]));doc.setFontSize(8);doc.text('Frate Formation Conseil · Illustrations originales générées · Personnages historiques représentés de façon stylisée',12,202);doc.text(p+' / '+doc.getNumberOfPages(),285,202,{align:'right'});}
 return doc;
}
root.NovaSheetsRules={themes,normal,isSituation,explanation,plan,buildPdf};
})(window);
