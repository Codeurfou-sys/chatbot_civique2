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
 const revisionTheme=q=>{const k=root.CiviSheetsVisual.pick(q).key;return ['interview','vitale','health','factory','worker','business','bins','solidarity'].includes(k)?5:['president','government','parliament','elysee'].includes(k)?2:['ddhc','tax','marriage','justice'].includes(k)?3:['marianne','frenchflag','values','conscience'].includes(k)?1:Number(q.theme);};const blocks=themes.map(t=>({...t,notions:[...notions.values()].filter(q=>revisionTheme(q)===t.id)})).filter(t=>t.notions.length);
 const kinds=[...new Set(cards.map(q=>q.kind).filter(Boolean))],kind=context.kind||(kinds.length===1?kinds[0]:'ensemble');
 const long=kind==='examen'||kind==='bilan'||kind==='ensemble';
 const mode=!blocks.length?'empty':blocks.length===1?'thematique':long&&notions.size>6?'par-thematique':'synthese';
 const sheets=mode==='empty'?[]:mode==='par-thematique'?blocks.map(b=>({title:b.title,blocks:[b]})):[{title:blocks.length===1?blocks[0].title:'Mes repères pour réviser',blocks}];
 return {mode,kind,notionCount:notions.size,errorCount:cards.length,blocks,sheets};
}
function buildPdf(cards,context={}){
 const model=plan(cards,context);if(!model.sheets.length)throw Error('Aucune fiche à télécharger.');
 if(!root.jspdf?.jsPDF||!root.NovaPdfFont||!root.CiviSheetsVisual)throw Error('Le module PDF est indisponible. Actualisez la page puis réessayez.');
 if(!root.CiviHandFont)throw Error('Le modèle illustré n’est pas chargé. Actualisez la page puis réessayez.');
 if(!root.CiviSheetsArt)throw Error('Les illustrations sont encore en cours de chargement. Réessayez dans un instant.');
 const doc=new root.jspdf.jsPDF({orientation:'portrait',unit:'mm',format:'a4',compress:true});doc.addFileToVFS('NovaSans.ttf',root.NovaPdfFont);doc.addFont('NovaSans.ttf','NovaSans','normal');doc.setFont('NovaSans');if(root.NovaPdfFontBold){doc.addFileToVFS('NovaSansBold.ttf',root.NovaPdfFontBold);doc.addFont('NovaSansBold.ttf','NovaSans','bold');}
 if(root.CiviHandFont){doc.addFileToVFS('RepereHand.ttf',root.CiviHandFont);doc.addFont('RepereHand.ttf','RepereHand','normal');}
 doc.setProperties({title:'Mes repères pour réviser',author:'Frate Formation Conseil'});
 const clean=s=>String(s||'').replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu,'');
 const exportProfile=root.CiviSheetsVisual.profile(),mono=exportProfile.mono,large=!!root.NovaAccess?.settings?.().large;const bodySize=large?19:12,lh=large?6.7:4.5;
 const colour=b=>exportProfile.ink||b.rgb;doc.__civiAccessibility={...exportProfile};
 let y,current,serial=0;doc.__civiComposition=[];
 function font(bold=false){doc.setFont(root.CiviHandFont?'RepereHand':'NovaSans',!root.CiviHandFont&&bold&&root.NovaPdfFontBold?'bold':'normal');}
 function wrap(s,w,size=bodySize,bold=false){font(bold);doc.setFontSize(size);return doc.splitTextToSize(clean(s),w);}
 function header(){doc.setFillColor(...exportProfile.tint);doc.rect(0,0,210,297,'F');doc.setDrawColor(235,235,235);doc.setLineWidth(.12);for(let x=0;x<210;x+=8)doc.circle(x,4,.12,'F');for(let xx=4;xx<210;xx+=5)for(let yy=4;yy<297;yy+=5){doc.setFillColor(221,225,225);doc.circle(xx,yy,.1,'F')};
  if(root.NovaFrateBrand?.logo)doc.addImage(mono&&root.CiviMonoFrateLogo?root.CiviMonoFrateLogo:root.NovaFrateBrand.logo,'PNG',12,6,24,14);
  doc.setFillColor(...(exportProfile.ink?exportProfile.tint:[218,235,248]));doc.roundedRect(39,6,162,13,2,2,'F');doc.setDrawColor(...(exportProfile.ink||[154,32,61]));doc.setLineWidth(.8);doc.line(44,21,195,20.5);font(true);doc.setTextColor(...(exportProfile.ink||[36,54,72]));doc.setFontSize(23);doc.text('MES REPÈRES POUR RÉVISER',40,15);
  font();doc.setFontSize(10);const label={bilan:'Bilan',examen:'Examen blanc',entrainement:'Entraînement',revision:'Révision'}[model.kind]||'Parcours';if(doc.getNumberOfPages()===1)doc.text('Fiche du '+new Date(context.row?.date||Date.now()).toLocaleDateString('fr-FR'),40,31);y=35;
 }
 function next(){doc.addPage();header();}
 function image(q,x,yy,w,h){const v=root.CiviSheetsVisual.pick(q),src=mono?root.CiviSheetsArtMono?.[v.key]:v.src;if(v.key==='repere')return;if(!src)throw Error('L’illustration adaptée au profil choisi n’est pas disponible.');const info=doc.getImageProperties(src),ratio=Math.min(w/info.width,h/info.height);doc.addImage(src,src.startsWith('data:image/jpeg')?'JPEG':'PNG',x+(w-info.width*ratio)/2,yy+(h-info.height*ratio)/2,info.width*ratio,info.height*ratio,v.key,'FAST');if(v.key==='camus'){const ax=x+(w-info.width*ratio)/2,ay=yy+(h-info.height*ratio)/2,book=String(q.question||'').match(/[«"]([^»"]+)[»"]/)?.[1]||'L’Étranger';font();doc.setFontSize(8);doc.setTextColor(...(exportProfile.ink||[25,34,46]));const lines=doc.splitTextToSize(book,info.width*ratio*.23);doc.text(lines,ax+info.width*ratio*.84,ay+info.height*ratio*.59,{align:'center'});}if(v.key==='interview'){const ax=x+(w-info.width*ratio)/2,ay=yy+(h-info.height*ratio)/2; font();doc.setFontSize(8);doc.setTextColor(...(exportProfile.ink||[32,36,41]));doc.text('Expérience ?',ax+info.width*ratio*.37,ay+info.height*ratio*.105,{align:'center'});doc.text('En équipe.',ax+info.width*ratio*.70,ay+info.height*ratio*.16,{align:'center'});}}
 function sketchContent(q,width){
  const model=root.CiviSheetsVisual.composition(q),facts=model.facts;
  if(facts.reduce((n,f)=>n+f.text.length,0)>650)return null;
  const title=wrap(model.subject,width-15,16,true),titleH=title.length*5.5+4;
  const v=root.CiviSheetsVisual.pick(q),art=!!v.src,scene=model.type==='dialogue'||v.key==='elysee',timeline=!!q.__timeline;
  const imageW=scene?width-10:art?(width>150?65:42):0;
  const main=facts.find(f=>f.label==='À retenir')||facts[0],flow=facts.find(f=>f.steps);
  const textW=scene?width-10:width-imageW-12;
  const mainLines=wrap(main.text,textW-4,bodySize,true),mainH=mainLines.length*lh+5;
  let sideH=mainH+2;const notes=[];
  for(const f of facts.filter(f=>f!==main&&f!==flow)){const label=['Mémo','Exemple concret','Repère'].includes(f.label)?f.label+' : ':'';const lines=wrap(label+f.text,textW-4,bodySize);const h=lines.length*lh+5;notes.push({f,lines,h,offset:sideH,tone:f.label==='Mémo'?2:1});sideH+=h+2;}
  const baseH=scene?36+sideH:Math.max(art?42:0,sideH);
  const flowSize=large?14:12,flowLines=flow?.steps.map(step=>wrap(step,(width-12-8)/flow.steps.length-3,flowSize));
  const flowH=flow?Math.max(...flowLines.map(l=>l.length))*lh+5:0;
  return {q,width,title,titleH,parts:[],model,art,imageW,mainLines,mainH,textW,notes,timeline,scene,flow,flowLines,flowSize,flowH,baseH,sketch:true,h:titleH+(timeline?9:0)+baseH+(flow?flowH+4:0)+3};
 }
 function drawSketch(item,x,yy,b){
  const ink=colour(b),pads=exportProfile.ink?[exportProfile.tint,exportProfile.tint,exportProfile.tint]:[[255,239,173],[250,217,225],[211,234,249]];
  font(true);doc.setTextColor(...ink);doc.setFontSize(16);doc.setFillColor(...ink);doc.circle(x+4,yy+3,3,'F');doc.setTextColor(255,255,255);doc.setFontSize(12);doc.text(String(item.number),x+4,yy+4.5,{align:'center'});doc.setTextColor(...ink);doc.setFontSize(16);doc.text(item.title,x+10,yy+5,{lineHeightFactor:1.05});let top=yy+item.titleH;
  if(item.timeline){const e=root.CiviSheetsVisual.event(item.q);doc.setFillColor(...pads[0]);doc.ellipse(x+item.width/2,top+3,item.width/2-5,4,'F');doc.setFontSize(18);doc.text(e.label,x+item.width/2,top+5,{align:'center'});top+=9;}
  const textX=item.scene?x+3:x+item.imageW+7,textTop=item.scene?top+36:top;
  if(item.art){const e=item.timeline?root.CiviSheetsVisual.event(item.q):null;image(e?.art?{theme:4,question:'école',correct:''}:item.q,x+3,top,item.imageW,item.scene?34:42);}
  function note(lines,nx,ny,w,h,tone,bold){doc.setFillColor(...pads[tone]);doc.lines([[w,-.6],[.6,h],[-w,.6],[-.6,-h]],nx,ny,[1,1],'F',true);font(bold);doc.setFontSize(bodySize);doc.setTextColor(...(exportProfile.ink||[25,34,46]));doc.text(lines,nx+2,ny+4.7,{lineHeightFactor:lh/(bodySize*25.4/72)});doc.setDrawColor(...ink);doc.setLineWidth(.5);doc.line(nx+w+1,ny+2,nx+w+2,ny);doc.line(nx+w+1,ny+4,nx+w+3,ny+3);}
  note(item.mainLines,textX,textTop,item.textW,item.mainH,0,true);if(item.art&&!item.scene){doc.setDrawColor(...ink);doc.setLineWidth(.5);const tx=textX-2,ty=textTop+item.mainH/2;doc.line(x+item.imageW-3,top+20,tx,ty);doc.line(tx-2,ty-1.5,tx,ty);doc.line(tx-2.5,ty+1,tx,ty);}
  for(const n of item.notes){const ny=textTop+n.offset;note(n.lines,textX+(n.tone===2?1:0),ny,item.textW-1,n.h,n.tone,n.f.label==='Mémo');if(item.art&&!item.scene){doc.setDrawColor(...ink);doc.setLineWidth(.5);const ax=x+item.imageW-4,ay=top+Math.min(40,n.offset+5);doc.line(ax,ay,textX-2,ny+5);doc.line(textX-4,ny+3,textX-2,ny+5);doc.line(textX-5,ny+6,textX-2,ny+5);}}
  if(item.flow){const py=top+item.baseH+3,bw=(item.width-12-4*(item.flowLines.length-1))/item.flowLines.length;for(let j=0;j<item.flowLines.length;j++){const xx=x+3+j*(bw+4);note(item.flowLines[j],xx,py,bw,item.flowH,j%3,true);if(j<item.flowLines.length-1){doc.setDrawColor(...ink);doc.line(xx+bw+.5,py+item.flowH/2,xx+bw+3.5,py+item.flowH/2);doc.line(xx+bw+2.3,py+item.flowH/2-1,xx+bw+3.5,py+item.flowH/2);}}}
 }
 function content(q,width){const sk=sketchContent(q,width);if(sk&&sk.h<=227)return sk;const full=width>150,timeline=!!q.__timeline,scene=root.CiviSheetsVisual.presentation(q)==='dialogue',stack=timeline||scene,iw=root.CiviSheetsVisual.pick(q).src&&!stack?(full?42:25):0,tw=width-iw-14;const title=wrap(root.CiviSheetsVisual.title(q),width-10,13,true),titleH=title.length*5.5+3+(timeline?38:scene?46:0);let parts=[],tone=0;

  for(const s of root.CiviSheetsVisual.sections(q)){
   const text=['Mémo','Exemple concret','Schéma','Repère'].includes(s.label)?s.label+' : '+s.text:s.text;
   if(s.steps){const bw=(width-12-4*(s.steps.length-1))/s.steps.length,flow=s.steps.map(step=>wrap(step,bw-2,10,true)),height=Math.max(...flow.map(lines=>lines.length))*4.6+8;const used=parts.reduce((n,p)=>n+(p.gap||p.height||p.lines.length*p.step+(p.note?4:0)),0);if(!stack&&used<35)parts.push({gap:35-used,lines:[]});parts.push({lines:[],flow,bw,height,step:height,size:11});parts.push({gap:3,lines:[]});continue;}
   parts.push({lines:wrap(text,tw,s.label==='Le repère'?12:bodySize,s.label==='À retenir'),size:s.label==='Le repère'?12:bodySize,step:s.label==='Le repère'?5:lh,bold:s.label==='À retenir',note:true,tone:s.label==='Mémo'?2:tone++%3});
   parts.push({gap:2,lines:[]});
  }
  const textH=parts.reduce((sum,p)=>sum+(p.gap||p.height||p.lines.length*p.step+(p.note?4:0)),0);return {q,width,iw,tw,title,titleH,parts,timeline,scene,h:titleH+Math.max(stack?0:30,textH)+6};
 }
 function frame(b,yy,h,continued=false){const ink=colour(b),titles={[b.id]:root.CiviSheetsVisual.groupTitle(b).toLocaleUpperCase('fr')};doc.setDrawColor(...ink);doc.setLineWidth(.4);doc.lines([[0, h-2],[1,2],[184,-.3],[1,-h+1],[-2,-1],[-183,.3]],12,yy,[1,1],'S',true);font(true);doc.setFontSize(20);const strokeW=Math.max(65,Math.min(178,doc.getTextWidth(titles[b.id])+14));doc.setFillColor(...ink);doc.rect(16,yy-2,strokeW,11,'F');doc.setLineWidth(.4);doc.lines([[2,-1],[3,.8],[2,-.5],[4,1],[1,7],[-3,1],[-2,-.5],[-3,.7],[-4,-1],[-1,-7]],16+strokeW-4,yy,[1,1],'F',true);font(true);doc.setTextColor(255,255,255);doc.setFontSize(20);doc.text(titles[b.id]+(continued?' · suite':''),20,yy+6);}
 function drawCard(item,x,yy,b,parts=item.parts,first=true){if(item.sketch){drawSketch(item,x,yy,b);return;}const ink=colour(b);font(true);doc.setTextColor(...ink);doc.setFontSize(13);if(item.number){doc.setFillColor(...ink);doc.circle(x+4,yy+3.8,3,'F');font(true);doc.setFontSize(8);doc.setTextColor(255,255,255);doc.text(String(item.number),x+4,yy+4.8,{align:'center'});doc.setTextColor(...ink);doc.setFontSize(13);}doc.text(item.title,x+10,yy+6,{lineHeightFactor:1.12});let py=yy+item.titleH;
  if(first){const top=yy+item.title.length*5.5+3;if(item.timeline){const e=root.CiviSheetsVisual.event(item.q);doc.setFillColor(...(exportProfile.ink?exportProfile.tint:[255,240,179]));doc.roundedRect(x+item.width/2-18,top,36,8,3,3,'F');font(true);doc.setFontSize(12);doc.setTextColor(...ink);doc.text(e.label,x+item.width/2,top+5.8,{align:'center'});image(e.art?{theme:4,question:'école',correct:''}:item.q,x+5,top+10,item.width-10,27);}else if(item.scene)image(item.q,x+5,top,item.width-10,45);else image(item.q,x+3,py,item.iw,35);}
  for(const p of parts){if(p.flow){for(let j=0;j<p.flow.length;j++){const xx=x+3+j*(p.bw+4);doc.setDrawColor(...ink);doc.setFillColor(...exportProfile.tint);doc.roundedRect(xx,py,p.bw,p.height,1,1,'FD');font(true);doc.setFontSize(10);doc.setTextColor(...ink);doc.text(p.flow[j],xx+2,py+5,{lineHeightFactor:1.2});if(j<p.flow.length-1)doc.text('→',xx+p.bw+.2,py+p.height/2+1);}py+=p.height;continue;}if(p.gap){py+=p.gap;continue;}if(p.note){doc.setFillColor(...(exportProfile.ink?exportProfile.tint:[[255,240,179],[248,226,232],[228,238,248]][p.tone]));doc.rect(x+item.iw+5,py,item.tw+2,p.lines.length*p.step+4,'F');}font(p.label||p.bold);doc.setFontSize(p.size);doc.setTextColor(...(p.label?ink:(exportProfile.ink||[36,54,72])));doc.text(p.lines,x+item.iw+8,py+4,{lineHeightFactor:p.step/(p.size*25.4/72)});py+=p.lines.length*p.step+(p.note?4:0);}
 }
 for(const [si,sheet] of model.sheets.entries()){
  if(si)doc.addPage();current=sheet;header();
  for(const b of sheet.blocks){
   for(const plannedRow of root.CiviSheetsVisual.rows(b)){const qs=plannedRow.notions.map(q=>({...q,__timeline:plannedRow.type==='timeline'}));
   for(let i=0;i<qs.length;){
    // Short knowledge notions share one horizontal themed block. Situations stay whole.
    const short=q=>{const sections=root.CiviSheetsVisual.sections(q);return sections.reduce((n,s)=>n+s.text.length,0)<420;};
    let pair=i+1<qs.length&&short(qs[i])&&short(qs[i+1]);let items=pair?[content(qs[i],88),content(qs[i+1],88)]:[content(qs[i],180)];
    if(pair&&Math.max(...items.map(p=>p.h))>190){pair=false;items=[content(qs[i],180)];}
    const h=10+Math.max(...items.map(p=>p.h));
    if(h<=241){if(y+h>280)next();frame(b,y,h);for(const [j,item] of items.entries()){item.number=serial+j+1;drawCard(item,15+j*92,y+12,b);}doc.__civiComposition.push({type:plannedRow.type,theme:b.id,count:items.length,height:h,top:y,page:doc.getNumberOfPages()});serial+=items.length;if(pair&&plannedRow.type==='timeline'){doc.setTextColor(...colour(b));doc.setFontSize(12);doc.text('→',104,y+31);}y+=h+3;}
    else{
     // Preserve every source condition even when a long explanation spans pages.
     const item=content(qs[i],180);item.number=++serial;let flat=[];for(const p of item.parts){if(p.gap)flat.push({gap:p.gap,lines:[]});else if(p.flow)for(const l of wrap(p.flow.map(lines=>lines.join(' ')).join(' → '),item.tw,11))flat.push({lines:[l],size:11,step:4.6});else for(const line of p.lines)flat.push({...p,lines:[line]});}
     let pos=0,first=true;while(pos<flat.length){if(y>45)next();const available=280-y-14-item.titleH-6;let used=0,chunk=[];while(pos<flat.length){const p=flat[pos],height=p.gap||p.step+(p.note?4:0);if(used+height>available&&chunk.length)break;chunk.push(p);used+=height;pos++;}
      const chunkItem={...item,h:item.titleH+Math.max(first?35:0,used)+6};const ch=14+chunkItem.h;frame(b,y,ch,!first);drawCard(chunkItem,15,y+12,b,chunk,first);y+=ch+8;first=false;if(pos<flat.length)next();}
    }
    i+=pair?2:1;
   }
   }
   const example=root.CiviSheetsVisual.lawExample(b);
   if(example){const h=100;if(y+h>280)next();frame(b,y,h);font(true);doc.setTextColor(...colour(b));doc.setFontSize(14);doc.text(wrap(example.title,172,12),19,y+18);
    for(const [j,step] of example.steps.entries()){const x=19+j*45;image({theme:2,question:'',correct:'',context:'',notion:'',...{question:step.key==='bins'?'poubelle':step.key==='president'?'président de la République':step.key==='government'?'gouvernement':'Assemblée nationale'}},x+6,y+28,30,25);font(true);doc.setFontSize(11);doc.text(step.label,x,y+55);font();doc.setTextColor(...(exportProfile.ink||[36,54,72]));doc.setFontSize(10);doc.text(wrap(step.text,40,10),x,y+62,{lineHeightFactor:1.25});if(j<3){doc.setDrawColor(...colour(b));doc.line(x+36,y+35,x+42,y+35);doc.line(x+40,y+33,x+42,y+35);doc.line(x+40,y+37,x+42,y+35);}}
    font();doc.setFontSize(8);doc.text(example.note,19,y+96);y+=h+3;}
  }
 }
 for(let p=1;p<=doc.getNumberOfPages();p++){doc.setPage(p);font();doc.setTextColor(...(mono?[80,80,80]:[80,85,95]));doc.setFontSize(8);doc.text('Frate Formation Conseil',12,290);doc.text(p+' / '+doc.getNumberOfPages(),198,290,{align:'right'});}
 return doc;
}
root.NovaSheetsRules={themes,normal,isSituation,explanation,plan,buildPdf};
})(window);
