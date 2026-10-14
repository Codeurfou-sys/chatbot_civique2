'use strict';
(function(root){
const themes=[
 {id:1,title:'Les valeurs de la République',colour:'#a51636',rgb:[165,22,54],image:'values'},
 {id:2,title:'Les institutions : qui fait quoi ?',colour:'#a51636',rgb:[165,22,54],image:'president'},
 {id:3,title:'Les droits et les devoirs',colour:'#215f93',rgb:[33,95,147],image:'rights'},
 {id:4,title:'L’histoire, la géographie et la culture',colour:'#b47c12',rgb:[180,124,18],image:'history'},
 {id:5,title:'La vie en société',colour:'#215f93',rgb:[33,95,147],image:'daily'}];
const normal=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/œ/g,'oe').replace(/[^a-z0-9]+/g,' ').trim();
function isSituation(q){return q.type==='situation'||String(q.sourceId||'').startsWith('MS-')||!!(q.context&&q.context!==q.question);}
function explanation(q){
 const peer=!(q.explanation||[]).length?Object.values(root.CiviSheetsData?.questions||{}).find(p=>normal(p.question)===normal(q.question)&&normal(p.correct)===normal(q.correct)&&(p.explanation||[]).length):null;
 const sentences=q.explanation?.length?q.explanation:peer?.explanation||[];
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
  const key=Number(q.theme)+'|'+root.CiviSheetsVisual.sections(q).map(f=>normal(f.text)).join('|');
  if(!notions.has(key))notions.set(key,{...q,variants:[],kind:q.kind});
  notions.get(key).variants.push(q);
 }
 const revisionTheme=q=>{const explicit=root.CiviSheetsVisual.revisionTheme?.(q);if(explicit)return explicit;const k=root.CiviSheetsVisual.pick(q).key;return ['interview','vitale','health','factory','worker','business','bins','solidarity'].includes(k)?5:['president','government','parliament','elysee','matignon','senate','constitution','prefect','townhall','eutreaty','eucitizenship','euconstruction','euparliament','eucommission','ecb'].includes(k)?2:['ddhc','tax','marriage','marriage-men','marriage-women','divorce','justice','jurors','press','expression','police'].includes(k)?3:['marianne','frenchflag','values','conscience','secularagent'].includes(k)?1:Number(q.theme);};const blocks=themes.map(t=>({...t,notions:[...notions.values()].filter(q=>revisionTheme(q)===t.id)})).filter(t=>t.notions.length);
 const kinds=[...new Set(cards.map(q=>q.kind).filter(Boolean))],kind=context.kind||(kinds.length===1?kinds[0]:'ensemble');
 const long=kind==='examen'||kind==='bilan'||kind==='ensemble';
 const mode=!blocks.length?'empty':blocks.length===1?'thematique':long&&notions.size>6?'par-thematique':'synthese';
 const sheets=mode==='empty'?[]:[{title:'Mes repères pour réviser',blocks}];
 return {mode,kind,notionCount:notions.size,errorCount:cards.length,blocks,sheets};
}
function buildPdf(cards,context={}){
 const model=plan(cards,context);if(!model.sheets.length)throw Error('Aucune fiche à télécharger.');
 if(!root.jspdf?.jsPDF||!root.NovaPdfFont||!root.CiviSheetsVisual)throw Error('Le module PDF est indisponible. Actualisez la page puis réessayez.');
 if(!root.CiviHandFont)throw Error('Le modèle illustré n’est pas chargé. Actualisez la page puis réessayez.');
 if(!root.CiviSheetsArt)throw Error('Les illustrations sont encore en cours de chargement. Réessayez dans un instant.');
 const doc=new root.jspdf.jsPDF({orientation:'portrait',unit:'mm',format:'a4',compress:true});doc.addFileToVFS('NovaSans.ttf',root.NovaPdfFont);doc.addFont('NovaSans.ttf','NovaSans','normal');doc.setFont('NovaSans');if(root.NovaPdfFontBold){doc.addFileToVFS('NovaSansBold.ttf',root.NovaPdfFontBold);doc.addFont('NovaSansBold.ttf','NovaSans','bold');}
 if(root.CiviHandFont){doc.addFileToVFS('RepereHand.ttf',root.CiviHandFont);doc.addFont('RepereHand.ttf','RepereHand','normal');}if(root.CiviTitleFont){doc.addFileToVFS('RepereTitle.ttf',root.CiviTitleFont);doc.addFont('RepereTitle.ttf','RepereTitle','normal');}
 doc.setProperties({title:'Mes repères pour réviser',author:'Frate Formation Conseil'});
 const clean=s=>String(s||'').replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu,'');
 const exportProfile=root.CiviSheetsVisual.profile(),mono=exportProfile.mono,large=!!root.NovaAccess?.settings?.().large;const bodySize=large?19:12,lh=large?6.7:4.5;
 const colour=b=>exportProfile.ink||b.rgb;doc.__civiAccessibility={...exportProfile};
 let y,current,serial=0;doc.__civiComposition=[];
 function font(bold=false){doc.setFont(bold&&root.CiviTitleFont?'RepereTitle':root.CiviHandFont?'RepereHand':'NovaSans','normal');}
 function wrap(s,w,size=bodySize,bold=false){font(bold);doc.setFontSize(size);return doc.splitTextToSize(clean(s),w);}
 function brush(x,yy,w,h,c){doc.setFillColor(...c);doc.lines([[w*.12,-.6],[w*.18,.3],[w*.2,-.4],[w*.2,.5],[w*.18,-.2],[w*.12,.5],[.6,h-1],[-w*.15,.4],[-w*.22,-.2],[-w*.18,.5],[-w*.24,-.3],[-w*.21,.2],[-.6,-h]],x,yy,[1,1],'F',true);}
 function arrow(){}

 function header(){doc.setFillColor(255,255,253);doc.rect(0,0,210,297,'F');doc.setDrawColor(235,235,235);doc.setLineWidth(.12);for(let x=0;x<210;x+=8)doc.circle(x,4,.12,'F');for(let xx=4;xx<210;xx+=5)for(let yy=4;yy<297;yy+=5){doc.setFillColor(221,225,225);doc.circle(xx,yy,.1,'F')};
  if(root.NovaFrateBrand?.logo)doc.addImage(mono&&root.CiviMonoFrateLogo?root.CiviMonoFrateLogo:root.NovaFrateBrand.logo,'PNG',8,4,32,19);
  doc.setFillColor(...(exportProfile.ink?exportProfile.tint:[218,235,248]));brush(45,6,156,17,exportProfile.ink?exportProfile.tint:[218,235,248]);doc.setDrawColor(...(exportProfile.ink||[154,32,61]));doc.setLineWidth(.8);doc.line(44,21,195,20.5);font(true);doc.setTextColor(...(exportProfile.ink||[36,54,72]));doc.setFontSize(30);doc.text('MES REPÈRES POUR RÉVISER',46,17);
  font();doc.setFontSize(10);const label={bilan:'Bilan',examen:'Examen blanc',entrainement:'Entraînement',revision:'Révision'}[model.kind]||'Parcours';if(doc.getNumberOfPages()===1)doc.text('Fiche du '+new Date(context.row?.date||Date.now()).toLocaleDateString('fr-FR'),40,31);y=35;
 }
 function next(){doc.addPage();header();}
 function image(q,x,yy,w,h){const v=root.CiviSheetsVisual.pick(q),src=mono?root.CiviSheetsArtMono?.[v.key]:v.src;if(!src)throw Error('L’illustration adaptée au profil choisi n’est pas disponible.');if(v.key==='rodin'){
 const draw=(key,px,py,pw,ph)=>{const a=mono?root.CiviSheetsArtMono[key]:root.CiviSheetsArt[key],i=doc.getImageProperties(a),scale=Math.min(pw/i.width,ph/i.height);doc.addImage(a,'PNG',px+(pw-i.width*scale)/2,py+(ph-i.height*scale)/2,i.width*scale,i.height*scale,key,'FAST');};
 draw('rodin',x,yy+h*.45,w*.30,h*.48);draw('thinker',x+w*.31,yy,w*.69,h);return;
 }const info=doc.getImageProperties(src),ratio=Math.min(w/info.width,(root.CiviSheetsVisual.artwork(q)?.art?h*.65:h)/info.height);doc.addImage(src,src.startsWith('data:image/jpeg')?'JPEG':'PNG',x+(w-info.width*ratio)/2,yy+(h-info.height*ratio)/2,info.width*ratio,info.height*ratio,v.key,'FAST');const ax=x+(w-info.width*ratio)/2,ay=yy+(h-info.height*ratio)/2;
 if(v.key==='interview'){font();doc.setFontSize(8);doc.setTextColor(...(exportProfile.ink||[25,30,36]));doc.text(['Votre','expérience ?'],ax+info.width*ratio*.37,ay+info.height*ratio*.075,{align:'center'});doc.text(['J’ai travaillé','en équipe.'],ax+info.width*ratio*.70,ay+info.height*ratio*.105,{align:'center'});}
 if(v.key==='camus'){font();doc.setFontSize(7);doc.setTextColor(...(exportProfile.ink||[25,30,36]));const book=String(q.question||'').match(/[«"]([^»"]+)[»"]/)?.[1]||'L’Étranger';doc.text(doc.splitTextToSize(book,info.width*ratio*.27),ax+info.width*ratio*.84,ay+info.height*ratio*.59,{align:'center'});}
 const work=root.CiviSheetsVisual.artwork(q);if(work?.art&&root.CiviSheetsArt?.[work.art]){const prop=mono?root.CiviSheetsArtMono[work.art]:root.CiviSheetsArt[work.art];doc.addImage(prop,prop.startsWith('data:image/jpeg')?'JPEG':'PNG',x+w*.10,yy+h*.68,w*.80,h*.30,v.key+'-work','FAST');}
 }
 function sketchContent(q,width){
  const model=root.CiviSheetsVisual.composition(q),facts=model.facts;
  if(facts.reduce((n,f)=>n+f.text.length,0)>650)return null;
  const title=wrap(model.subject,width-15,14,true),titleH=title.length*5.5+4;
  const v=root.CiviSheetsVisual.pick(q),art=!!v.src,scene=model.type==='dialogue'||['elysee','matignon','senate','parliament'].includes(v.key),timeline=!!q.__timeline;
  const role=false;
  const music=root.CiviSheetAudio?.track(q)?.id==='marseillaise';
  const imageW=scene?width-10:art?(music?(width>150?44:24):role?width*.56:width>150?76:40):0;
  const main=facts.find(f=>f.label==='À retenir')||facts[0],flow=facts.find(f=>f.steps);
  const textW=scene?width-10:width-imageW-12;
  const mainLines=wrap(main.text,textW-4,bodySize,true),mainH=mainLines.length*lh+5;
  let sideH=mainH+2;const notes=[];
  for(const f of facts.filter(f=>f!==main&&f!==flow)){const label=f.label==='Exemple concret'?'Ex. : ':'';const lines=wrap(label+f.text,textW-4,bodySize);const h=lines.length*lh+5;notes.push({f,lines,h,offset:sideH,tone:f.label==='Mémo'?2:1});sideH+=h+2;}
  const baseH=scene?36+sideH:Math.max(art?(root.CiviSheetAudio?.track(q)?55:42):0,sideH);
  const flowSize=bodySize,flowLines=flow?.steps.map(step=>wrap(step,(width-12-8)/flow.steps.length-3,flowSize));
  const flowH=flow?Math.max(...flowLines.map(l=>l.length))*lh+5:0;
  return {q,width,title,titleH,parts:[],model,art,role,imageW,mainLines,mainH,textW,notes,timeline,scene,flow,flowLines,flowSize,flowH,baseH,sketch:true,h:titleH+(timeline?9:0)+baseH+(flow?flowH+4:0)+3};
 }
 function drawSketch(item,x,yy,b){
  const ink=colour(b),pads=exportProfile.ink?[exportProfile.tint,exportProfile.tint,exportProfile.tint]:[[255,239,173],[250,217,225],[211,234,249]];
  font(true);doc.setTextColor(...ink);doc.setFontSize(16);doc.setFillColor(...ink);doc.circle(x+4,yy+3,3,'F');doc.setTextColor(255,255,255);doc.setFontSize(12);doc.text(String(item.number),x+4,yy+4.5,{align:'center'});doc.setTextColor(...ink);doc.setFontSize(14);brush(x+9,yy-.5,item.width-11,item.titleH-2,pads[1]);doc.text(item.title,x+10,yy+5,{lineHeightFactor:1.05});let top=yy+item.titleH;
  if(item.timeline){const e=root.CiviSheetsVisual.event(item.q);doc.setFillColor(...pads[0]);doc.ellipse(x+item.width/2,top+3,item.width/2-5,4,'F');doc.setFontSize(18);doc.text(e.label,x+item.width/2,top+5,{align:'center'});top+=9;}
  const textX=item.scene?x+3:x+item.imageW+7,textTop=item.scene?top+36:top;
  if(root.CiviSheetAudio?.track(item.q)){const track=root.CiviSheetAudio.track(item.q),px=x+3,py=top+44;doc.setDrawColor(...ink);doc.setFillColor(...pads[0]);doc.setLineWidth(.45);doc.ellipse(px+4,py+3,4,4,'FD');doc.setFillColor(...ink);doc.triangle(px+3,py+1,px+3,py+5,px+6,py+3,'F');doc.link(px,py-1,8,8,{url:root.CiviSheetAudio.link(track.id)});font();doc.setFontSize(8);doc.setTextColor(...ink);doc.textWithLink('10 secondes',px+10,py+4,{url:root.CiviSheetAudio.link(track.id)});}
  if(item.art){const e=item.timeline?root.CiviSheetsVisual.event(item.q):null;image(e?.art?{theme:4,question:'école',correct:''}:item.q,x+3,top,item.imageW,item.scene?34:42);}
  function note(lines,nx,ny,w,h,tone,bold){if(tone===0){doc.setFillColor(221,218,200);doc.lines([[w,-.6],[.6,h],[-w,.6],[-.6,-h]],nx+.5,ny+.8,[1,1],'F',true);}doc.setFillColor(...pads[tone]);doc.lines([[w,-.6],[.6,h],[-w,.6],[-.6,-h]],nx,ny,[1,1],'F',true);font();doc.setFontSize(bodySize);doc.setTextColor(...(exportProfile.ink||[25,34,46]));doc.text(lines,nx+2,ny+4.7,{lineHeightFactor:lh/(bodySize*25.4/72)});doc.setDrawColor(...ink);doc.setLineWidth(.5);doc.line(nx+w+1,ny+2,nx+w+2,ny);doc.line(nx+w+1,ny+4,nx+w+3,ny+3);}
  note(item.mainLines,textX,textTop,item.textW,item.mainH,0,true);if(item.art&&!item.scene){doc.setDrawColor(...ink);doc.setLineWidth(.5);const tx=textX-2,ty=textTop+item.mainH/2;arrow(x+item.imageW-3,top+20,tx,ty,ink);}
  for(const n of item.notes){const ny=textTop+n.offset;note(n.lines,textX+(n.tone===2?1:0),ny,item.textW-1,n.h,n.tone,n.f.label==='Mémo');if(item.art&&!item.scene){doc.setDrawColor(...ink);doc.setLineWidth(.5);const ax=x+item.imageW-4,ay=top+Math.min(40,n.offset+5);arrow(ax,ay,textX-2,ny+5,ink);}}
  if(item.role){brush(x+3,top+42,item.imageW-2,10,pads[2]);font();doc.setTextColor(...(exportProfile.ink||[25,30,36]));doc.setFontSize(11);doc.text(['Président de','la République'],x+item.imageW/2,top+46,{align:'center',lineHeightFactor:1});const fx=textX,fy=top+Math.max(23,item.mainH+3),fw=item.textW-1;doc.setFillColor(...pads[2]);doc.setDrawColor(...ink);doc.roundedRect(fx+.8,fy-.8,fw,14,1,1,'FD');doc.setFillColor(255,255,253);doc.roundedRect(fx,fy,fw,14,1,1,'FD');font();doc.setFontSize(12);doc.text(['Premier','ministre'],fx+fw/2,fy+5,{align:'center',lineHeightFactor:1.05});arrow(x+item.imageW-6,top+29,fx-1,fy+7,ink);}
  if(item.flow){const py=top+item.baseH+3,bw=(item.width-12-4*(item.flowLines.length-1))/item.flowLines.length;for(let j=0;j<item.flowLines.length;j++){const xx=x+3+j*(bw+4);note(item.flowLines[j],xx,py,bw,item.flowH,j%3,true);if(j<item.flowLines.length-1){doc.setDrawColor(...ink);doc.line(xx+bw+.5,py+item.flowH/2,xx+bw+3.5,py+item.flowH/2);doc.line(xx+bw+2.3,py+item.flowH/2-1,xx+bw+3.5,py+item.flowH/2);}}}
 }
 function content(q,width){const sk=sketchContent(q,width);if(sk&&sk.h<=227)return sk;const full=width>150,timeline=!!q.__timeline,scene=root.CiviSheetsVisual.presentation(q)==='dialogue',stack=timeline||scene,iw=root.CiviSheetsVisual.pick(q).src&&!stack?(full?42:25):0,tw=width-iw-14;const title=wrap(root.CiviSheetsVisual.title(q),width-10,13,true),titleH=title.length*5.5+3+(timeline?38:scene?46:0);let parts=[],tone=0;

  for(const s of root.CiviSheetsVisual.sections(q)){
   const text=['Mémo','Exemple concret','Schéma','Repère'].includes(s.label)?s.label+' : '+s.text:s.text;
   if(s.steps){const bw=(width-12-4*(s.steps.length-1))/s.steps.length,flow=s.steps.map(step=>wrap(step,bw-2,10,true)),height=Math.max(...flow.map(lines=>lines.length))*4.6+8;const used=parts.reduce((n,p)=>n+(p.gap||p.height||p.lines.length*p.step+(p.note?4:0)),0);if(!stack&&used<35)parts.push({gap:35-used,lines:[]});parts.push({lines:[],flow,bw,height,step:height,size:11});parts.push({gap:3,lines:[]});continue;}
   parts.push({lines:wrap(text,tw,s.label==='Le repère'?12:bodySize,s.label==='À retenir'),size:s.label==='Le repère'?12:bodySize,step:s.label==='Le repère'?5:lh,bold:s.label==='À retenir',note:true,tone:tone++===0?0:1});
   parts.push({gap:2,lines:[]});
  }
  const textH=parts.reduce((sum,p)=>sum+(p.gap||p.height||p.lines.length*p.step+(p.note?4:0)),0);return {q,width,iw,tw,title,titleH,parts,timeline,scene,h:titleH+Math.max(stack?0:30,textH)+6};
 }
 function frame(b,yy,h,continued=false){const ink=colour(b),heading=root.CiviSheetsVisual.groupTitle(b).toLocaleUpperCase('fr')+(continued?' · suite':''),solid=/^(INSTITUTIONS|HISTOIRE|VIE EN SOCIÉTÉ)$/.test(heading.replace(' · suite','')),pale=exportProfile.ink?exportProfile.tint:b.id===4?[255,233,184]:b.id===3?[209,232,249]:[251,216,226];
 doc.setDrawColor(...ink);doc.setLineWidth(.4);doc.roundedRect(12,yy,186,h,3,3,'S');font(true);doc.setFontSize(20);const tw=doc.getTextWidth(heading),strokeW=Math.max(65,Math.min(180,tw+25));brush(16,yy-2,strokeW,11,solid?ink:pale);const titleInk=solid?[255,255,255]:(exportProfile.ink||[35,25,31]);doc.setTextColor(...titleInk);doc.setDrawColor(...titleInk);doc.setLineWidth(.65);
 if(b.id===2){doc.triangle(19,yy+1,23,yy-1,27,yy+1,'S');doc.line(19,yy+1,27,yy+1);for(const x of [20,23,26]){doc.line(x,yy+1,x,yy+5);}doc.line(19,yy+5,27,yy+5);doc.line(18.5,yy+6,27.5,yy+6);}
 else if(b.id===4){doc.lines([[4,.8],[4,-.8],[0,6],[-4,.8],[-4,-.8],[0,-6]],19,yy-1,[1,1],'S',true);doc.line(23,yy,23,yy+6);}
 else{doc.circle(21,yy,1.5,'S');doc.circle(25,yy+.4,1.2,'S');doc.roundedRect(19,yy+2,4,4,1,1,'S');doc.roundedRect(24,yy+2,3,4,1,1,'S');}
 doc.setFontSize(tw>155?18:20);doc.text(heading,30,yy+6);
 }

 function drawCard(item,x,yy,b,parts=item.parts,first=true){if(item.sketch){drawSketch(item,x,yy,b);return;}const ink=colour(b);font(true);doc.setTextColor(...ink);doc.setFontSize(13);if(item.number){doc.setFillColor(...ink);doc.circle(x+4,yy+3.8,3,'F');font(true);doc.setFontSize(8);doc.setTextColor(255,255,255);doc.text(String(item.number),x+4,yy+4.8,{align:'center'});doc.setTextColor(...ink);doc.setFontSize(13);}doc.text(item.title,x+10,yy+6,{lineHeightFactor:1.12});let py=yy+item.titleH;
  if(first){const top=yy+item.title.length*5.5+3;if(item.timeline){const e=root.CiviSheetsVisual.event(item.q);doc.setFillColor(...(exportProfile.ink?exportProfile.tint:[255,240,179]));doc.roundedRect(x+item.width/2-18,top,36,8,3,3,'F');font(true);doc.setFontSize(12);doc.setTextColor(...ink);doc.text(e.label,x+item.width/2,top+5.8,{align:'center'});image(e.art?{theme:4,question:'école',correct:''}:item.q,x+5,top+10,item.width-10,27);}else if(item.scene)image(item.q,x+5,top,item.width-10,45);else image(item.q,x+3,py,item.iw,35);}
  for(const p of parts){if(p.flow){for(let j=0;j<p.flow.length;j++){const xx=x+3+j*(p.bw+4);doc.setDrawColor(...ink);doc.setFillColor(...exportProfile.tint);doc.roundedRect(xx,py,p.bw,p.height,1,1,'FD');font(true);doc.setFontSize(10);doc.setTextColor(...ink);doc.text(p.flow[j],xx+2,py+5,{lineHeightFactor:1.2});if(j<p.flow.length-1)doc.text('',xx+p.bw+.2,py+p.height/2+1);}py+=p.height;continue;}if(p.gap){py+=p.gap;continue;}if(p.note){doc.setFillColor(...(exportProfile.ink?exportProfile.tint:[[255,240,179],[248,226,232],[228,238,248]][p.tone]));doc.rect(x+item.iw+5,py,item.tw+2,p.lines.length*p.step+4,'F');}font(p.label||p.bold);doc.setFontSize(p.size);doc.setTextColor(...(p.label?ink:(exportProfile.ink||[36,54,72])));doc.text(p.lines,x+item.iw+8,py+4,{lineHeightFactor:p.step/(p.size*25.4/72)});py+=p.lines.length*p.step+(p.note?4:0);}
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
    if(h<=241){if(y+h>280)next();frame(b,y,h);for(const [j,item] of items.entries()){item.number=serial+j+1;drawCard(item,15+j*92,y+12,b);}doc.__civiComposition.push({type:plannedRow.type,theme:b.id,count:items.length,height:h,top:y,page:doc.getNumberOfPages()});serial+=items.length;if(pair){doc.setDrawColor(...colour(b));doc.setLineDashPattern([.4,1.1],0);doc.line(105,y+13,105,y+h-3);doc.setLineDashPattern([],0);}if(pair&&plannedRow.type==='timeline'){doc.setTextColor(...colour(b));doc.setFontSize(12);doc.text('',104,y+31);}y+=h+3;}
    else{
     // Preserve every source condition even when a long explanation spans pages.
     const item=content(qs[i],180);item.number=++serial;let flat=[];for(const p of item.parts){if(p.gap)flat.push({gap:p.gap,lines:[]});else if(p.flow)for(const l of wrap(p.flow.map(lines=>lines.join(' ')).join(' ; '),item.tw,11))flat.push({lines:[l],size:11,step:4.6});else for(const line of p.lines)flat.push({...p,lines:[line]});}
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
