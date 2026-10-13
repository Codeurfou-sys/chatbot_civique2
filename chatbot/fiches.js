'use strict';
(function(root){
const labels={bilan:'Bilan',examen:'Examen blanc',entrainement:'Entraînement',revision:'Révision'};
const parse=s=>{try{return JSON.parse(s||'{}');}catch(e){return {};}};
const bank=()=>root.CiviSheetsData||{questions:{},revision:{},activities:{},chapters:{}};
const el=(tag,text,cls)=>{const n=root.document.createElement(tag);if(text!=null)n.textContent=String(text);if(cls)n.className=cls;return n;};
function collect(state,context={}){
 const data=bank(),cards=[],notes=[],seen=new Set();
 function add(q,extra){if(!q)return;const id=q.key||extra.key;if(seen.has(id))return;seen.add(id);cards.push({...q,...extra,key:id});}
 const kinds=context.kind?[context.kind]:['bilan','entrainement','examen'];
 for(const kind of kinds){if(!labels[kind]||kind==='revision')continue;
  const live=state.variables||{},liveMax=kind==='bilan'?25:kind==='examen'?40:[1,2,3,4,5].reduce((n,t)=>n+Number(live['trainTotal'+t]||0),0),liveScore=live[kind==='bilan'?'parcoursScore':kind==='examen'?'lastExamScore':'trainScore'];
  const rows=context.current?[{variables:live,date:null,score:liveScore,max:liveMax}]:context.row?[context.row]:state.history?.[kind]||[];
  for(const row of rows){if(Number(row.max)>0&&Number(row.score)===Number(row.max))continue;let count=0;for(let t=1;t<=5;t++){if(context.theme&&Number(context.theme)!==t)continue;const v=row.variables||{},prefix=kind==='bilan'?'parcours':kind==='examen'?'last':'train',max=kind==='bilan'?5:Number(v[(kind==='examen'?'lastTotal':'trainTotal')+t]);if(v[prefix+'T'+t]!=null&&max>0&&Number(v[prefix+'T'+t])===max)continue;
   for(const q of root.NovaFeedback?.missed(kind,t,row.variables||{})||[]){count++;add(data.questions[q.key],{key:q.key,chosen:q.chosen,source:labels[kind],kind,date:row.date});}}
   if(!count&&Number(row.score)<Number(row.max))notes.push('Le détail des erreurs de cette ancienne tentative n’est pas disponible. Une nouvelle révision permettra de créer une fiche ciblée.');
  }
 }
 if(!context.kind||context.kind==='revision'){
  const v=state.variables||{},errors=parse(v.civiRevisionErrors);
  for(const [key,info] of Object.entries(errors)){const q=data.revision[key];if(!q||context.chapter&&q.chapter!==context.chapter)continue;add(q,{key,chosen:info.chosen,status:info.status,kind:'revision',source:'Questions de révision',date:info.date});}
  for(const [name,raw] of Object.entries(v)){if(!name.startsWith('atelier_'))continue;const chapter=name.slice(8);if(context.chapter&&context.chapter!==chapter)continue;
   const activity=parse(raw);if(Number(activity.total)>0&&Number(activity.score)===Number(activity.total))continue;for(const error of Array.isArray(activity.errors)?activity.errors:[]){const key=chapter+':'+error.step+':'+error.index;add(data.activities[key],{key,chosen:error.chosen,kind:'revision',source:'Activités de révision',date:activity.updated?new Date(activity.updated).toISOString():null});}
   if(Number(activity.score)<Number(activity.total)&&!Array.isArray(activity.errors))notes.push('Cette ancienne activité conserve le score, mais pas le détail des réponses.');
  }
 }
 return {cards,notes:[...new Set(notes)]};
}
function capture(node){
 const v=root.NovaSave?.exportData().variables||{},errors=parse(v.civiRevisionErrors);let changed=false;
 for(const marker of node.querySelectorAll('.civi-sheet-result')){if(marker.dataset.sheetCaptured)continue;marker.dataset.sheetCaptured='true';const key=marker.dataset.sheetQuestion,q=bank().revision[key];if(!q)continue;
  if(marker.dataset.sheetStatus==='correct'){if(errors[key]){delete errors[key];changed=true;}}
  else {const next={chosen:String(v[q.variable]||'').slice(0,1000),status:marker.dataset.sheetStatus,date:new Date().toISOString()};errors[key]=next;changed=true;}
 }
 if(changed)root.NovaSave?.updateVariables({civiRevisionErrors:JSON.stringify(errors)});
}
function button(text,action){const b=el('button',text,'civi-sheet-button');b.type='button';b.onclick=action;return b;}
function contextButton(text,context){const b=button(text,()=>{});b.onclick=null;b.dataset.civiSheetContext=JSON.stringify(context);return b;}
const renderedHubs=new WeakSet();
function attachChapter(host,chapter){if(host.querySelector('.civi-sheet-button'))return;if(!collect(root.NovaSave.exportData(),{kind:'revision',chapter}).cards.length)return;host.append(contextButton('📄 Ma fiche de révision',{kind:'revision',chapter,overview:true}));}
function render(node){if(!node||!root.NovaSave)return;capture(node);
 for(const host of node.querySelectorAll('.civi-feedback')){if(host.dataset.sheetReady)continue;host.dataset.sheetReady='true';const context={kind:host.dataset.kind,current:true,theme:host.dataset.theme==='all'?undefined:Number(host.dataset.theme)};
  const result=collect(root.NovaSave.exportData(),context);if(!result.cards.length)continue;const bar=el('div',null,'civi-sheet-invitation');bar.append(el('p','Votre fiche rassemble les repères essentiels à retenir, avec des illustrations et des mémos. Vous pouvez la retrouver à tout moment dans « Mon parcours personnalisé », puis « Mes fiches de révision ».'));bar.append(contextButton('📄 Consulter ma fiche de révision',context));host.append(bar);
 }
 for(const marker of node.querySelectorAll('.civi-sheet-result')){if(marker.dataset.sheetButton)continue;marker.dataset.sheetButton='true';const q=bank().revision[marker.dataset.sheetQuestion];if(!q||!collect(root.NovaSave.exportData(),{kind:'revision',chapter:q.chapter}).cards.length)continue;const wrap=el('div',null,'civi-sheet-invitation');wrap.append(contextButton('📄 Consulter ma fiche de révision',{kind:'revision',chapter:q.chapter,overview:true}),el('p','Retrouvez cette fiche dans « Mon parcours personnalisé », puis « Mes fiches de révision ».'));marker.closest('.bot-message')?.append(wrap);}
 for(const host of node.querySelectorAll('.civi-sheet-chapter'))attachChapter(host,host.dataset.sheetChapter);
 for(const host of node.querySelectorAll('.civi-sheets-hub'))hub(host);
}
function hub(host){if(renderedHubs.has(host))return;renderedHubs.add(host);host.replaceChildren();host.dataset.sheetReady='true';const state=root.NovaSave.exportData();host.append(el('p','Choisissez les erreurs à retravailler. Les notions proches sont regroupées. Les thématiques restent séparées par couleur et par titre. Vos fiches suivent les réponses sauvegardées sur ce navigateur.'));
 const lab=el('label','Choisir mes réponses : '),select=el('select');select.setAttribute('aria-label','Choisir la tentative pour mes fiches');const contexts=[{}];select.append(el('option','Toutes mes erreurs enregistrées'));
 for(const kind of ['bilan','entrainement','examen'])for(const row of state.history?.[kind]||[]){const option=el('option',labels[kind]+' · '+new Date(row.date).toLocaleDateString('fr-FR')+' · '+row.score+'/'+row.max);option.value=String(contexts.length);select.append(option);contexts.push({kind,row});}
 const rev=el('option','Mes révisions');rev.value=String(contexts.length);select.append(rev);contexts.push({kind:'revision'});select.options[0].value='0';lab.append(select);const launch=button('📄 Ouvrir mes fiches personnalisées',()=>open(contexts[Number(select.value)]||{})),status=el('p');status.setAttribute('role','status');function selection(){const r=collect(root.NovaSave.exportData(),contexts[Number(select.value)]||{});launch.hidden=!r.cards.length;status.textContent=r.cards.length?'':r.notes[0]||'Aucune erreur à retravailler pour cette sélection : aucune fiche de révision n’est proposée.';}select.addEventListener('change',event=>{event.stopImmediatePropagation();selection();},true);selection();host.append(lab,launch,status);

}
let dialog,focusReturn,page=0,result={cards:[],notes:[]};const PAGE=8;
function close(){root.NovaAudio?.stop();root.CiviSheetAudio?.stop();if(dialog?.close&&dialog.open)dialog.close();else{dialog?.removeAttribute('open');focusReturn?.focus({preventScroll:true});}}
function createDialog(){if(dialog)return;dialog=el('dialog',null,'civi-sheets-dialog');dialog.id='civi-sheets-dialog';dialog.setAttribute('aria-labelledby','civi-sheets-title');dialog.addEventListener('close',()=>{root.NovaAudio?.stop();root.CiviSheetAudio?.stop();focusReturn?.focus({preventScroll:true});});dialog.addEventListener('cancel',()=>{root.NovaAudio?.stop();root.CiviSheetAudio?.stop();});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}});
 dialog.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();close();}if(e.key==='Tab'){const controls=[...dialog.querySelectorAll('button,select,summary,[href]')].filter(n=>!n.disabled&&!n.hidden&&(!n.closest('details:not([open])')||n.tagName==='SUMMARY'));const first=controls[0],last=controls.at(-1);if(e.shiftKey&&root.document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&root.document.activeElement===last){e.preventDefault();first?.focus();}}});root.document.body.append(dialog);}
function cardView(q,i){const box=el('article',null,'civi-sheet');const heading=el('h4');heading.append(el('span',String(i+1),'civi-notion-number'),root.document.createTextNode(root.CiviSheetsVisual.title(q)));box.append(heading);box.dataset.presentation=root.CiviSheetsVisual.presentation(q);box.dataset.composition=root.CiviSheetsVisual.composition(q).type;
 const visual=root.CiviSheetsVisual.pick(q),situation=root.NovaSheetsRules.isSituation(q);
 box.dataset.visual=visual.key;if(!visual.src)box.classList.add('civi-sheet-text-only');const event=root.CiviSheetsVisual.event(q);if(event)box.append(el('p',event.label,'civi-event-date'));
 if(visual.src){const pic=el('img',null,'civi-sheet-art');pic.src=root.CiviSheetsVisual.profile().mono?(root.CiviSheetsArtMono?.[visual.key]||'assets/fiches/'+visual.key+'-mono.png'):visual.src;pic.alt=visual.label;pic.loading='lazy';if(visual.key==='interview'||visual.key==='camus'){const figure=el('figure',null,visual.key==='interview'?'civi-sheet-scene':'civi-sheet-book');figure.append(pic);if(visual.key==='interview'){figure.append(el('span','Votre expérience ?','civi-scene-employer'),el('span','J’ai travaillé en équipe.','civi-scene-candidate'));}else{const book=String(q.question||'').match(/[«"]([^»"]+)[»"]/)?.[1]||'L’Étranger';figure.append(el('span',book,'civi-scene-book-title'));}box.append(figure);}else box.append(pic);}
 const work=root.CiviSheetsVisual.artwork(q);if(work?.art){const prop=el('img',null,'civi-sheet-work-art');prop.src=root.CiviSheetsVisual.profile().mono?root.CiviSheetsArtMono?.[work.art]:root.CiviSheetsArt?.[work.art];prop.alt=work.title;box.append(prop);}

 const content=el('div',null,'civi-sheet-content');
 const sections=root.CiviSheetsVisual.composition(q).facts;
 for(const item of sections){const section=el('section',null,item.label==='Mémo'?'civi-sheet-memory':item.label==='À retenir'?'civi-sheet-remember':'civi-sheet-explain');section.append(el('h5',item.label));if(item.steps){const flow=el('ol',null,'civi-sheet-mini-flow');for(const step of item.steps)flow.append(el('li',step));section.append(flow);content.append(section);continue;}for(const line of item.text.split('\n'))section.append(el('p',line));content.append(section);}
 box.append(content);const track=root.CiviSheetAudio?.track(q);if(track)box.append(root.CiviSheetAudio.controls(track));return box;}
function lawView(example){const box=el('aside',null,'civi-sheet-law');box.append(el('h4',example.title));const steps=el('ol');for(const step of example.steps){const item=el('li'),img=el('img');img.src=root.CiviSheetsVisual.profile().mono&&root.CiviSheetsArtMono?.[step.key]?root.CiviSheetsArtMono[step.key]:root.CiviSheetsArt?.[step.key]||'assets/fiches/'+step.key+'.png';img.alt='';item.append(img,el('h5',step.label),el('p',step.text));steps.append(item);}box.append(steps,el('p',example.note,'civi-sheet-date'));return box;}
function paint(focus=true){dialog.replaceChildren();const model=root.NovaSheetsRules.plan(result.cards,result.context),head=el('header',null,'civi-sheets-heading'),title=el('h2',model.sheets.length===1?model.sheets[0].title:'Mes fiches de révision');title.id='civi-sheets-title';
 if(root.NovaFrateBrand?.logo){const logo=el('img',null,'civi-sheets-logo');logo.src=root.CiviSheetsVisual.profile().mono?(root.CiviMonoFrateLogo||'assets/fiches/logo-frate-mono.png'):root.NovaFrateBrand.logo;logo.alt='Frate Formation Conseil';head.append(logo);}
 const exit=button('Fermer et reprendre le chat',close);dialog.dataset.exportProfile=root.CiviSheetsVisual.profile().id;head.append(title,exit);dialog.append(head);dialog.append(el('p','Fiche du '+new Date(result.context.row?.date||Date.now()).toLocaleDateString('fr-FR'),'civi-sheets-intro'));
 const tools=el('div',null,'civi-sheets-tools');tools.append(button('⚙️ Réglages d’accessibilité',()=>root.document.getElementById('civi-settings-open')?.click()),button('🔊 Lire ma fiche',()=>root.NovaAudio?.speak(root.NovaAudio.content(dialog.querySelector('.civi-sheets-pages')),dialog)),button('⏸ Pause / reprendre',()=>{const s=root.speechSynthesis;if(s?.paused)s.resume();else if(s?.speaking)s.pause();}),button('⏹ Arrêter',()=>root.NovaAudio?.stop()));dialog.append(tools);
 for(const note of result.notes)dialog.append(el('p',note,'civi-sheet-note'));
 const pages=el('div',null,'civi-sheets-pages');let serial=0;
 for(const sheet of model.sheets){const sheetHost=el('section',null,'civi-grouped-sheet');sheetHost.append(el('h3',sheet.title));for(const block of sheet.blocks){const host=el('section',null,'civi-sheet-theme');host.dataset.theme=block.id;host.style.setProperty('--sheet-theme-colour',block.colour);host.append(el('h3',root.CiviSheetsVisual.groupTitle(block),'civi-sheet-theme-title'));for(const row of root.CiviSheetsVisual.rows(block)){const group=el('div',null,row.type==='timeline'?'civi-notion-row civi-timeline-row':'civi-notion-row');group.dataset.count=row.notions.length;group.setAttribute('aria-label',row.type==='timeline'?'Frise chronologique':'Notions à retenir');for(const q of row.notions)group.append(cardView(q,serial++));host.append(group);}const example=root.CiviSheetsVisual.lawExample(block);if(example)host.append(lawView(example));sheetHost.append(host);}pages.append(sheetHost);}
 if(!model.sheets.length)pages.append(el('p','Aucune erreur détaillée n’est enregistrée pour cette sélection. Aucune fiche de révision n’est proposée.'));dialog.append(pages);
 if(result.cards.length)dialog.append(button('📄 Télécharger mon document de révision (PDF)',()=>download(result.cards,result.context)));
 if(focus){dialog.scrollTop=0;exit.focus({preventScroll:true});}root.NovaAccess?.icons(dialog);}
function open(context={}){createDialog();focusReturn=root.document.activeElement;page=0;result={...collect(root.NovaSave.exportData(),context),context};root.NovaAudio?.stop();root.CiviSheetAudio?.stop();paint();if(!dialog.open){if(dialog.showModal)dialog.showModal();else dialog.setAttribute('open','');}dialog.querySelector('button')?.focus({preventScroll:true});}
function buildPdf(cards,context={}){return root.NovaSheetsRules.buildPdf(cards,context);}
function artReady(){if(root.CiviSheetsArt)return Promise.resolve();return new Promise((resolve,reject)=>{const done=()=>{clearTimeout(timer);root.removeEventListener('civicoach-art-ready',done);resolve();},timer=setTimeout(()=>{root.removeEventListener('civicoach-art-ready',done);reject(Error('Les illustrations ne sont pas encore chargées. Actualisez la page puis réessayez.'));},30000);root.addEventListener('civicoach-art-ready',done,{once:true});});}
function repaint(){if(!dialog?.open)return;root.CiviSheetAudio?.stop();const controls=[...dialog.querySelectorAll('button')],index=controls.indexOf(root.document.activeElement),scroll=dialog.scrollTop;paint(false);dialog.scrollTop=scroll;if(index>=0)dialog.querySelectorAll('button')[index]?.focus({preventScroll:true});}
root.addEventListener('civicoach-art-ready',repaint);
async function download(cards,context={}){try{await artReady();buildPdf(cards,context).save('mes-fiches-de-revision-civicoach.pdf');}catch(e){const status=el('p',e.message,'civi-sheet-note');status.setAttribute('role','alert');dialog?.append(status);}}
root.addEventListener('civicoach-accessibility-change',repaint);
async function downloadSaved(kind,row){const r=collect(root.NovaSave.exportData(),{kind,row});if(!r.cards.length)return false;try{await artReady();const stamp=String(row.date||'').slice(0,10);root.NovaSheets.buildPdf(r.cards,{kind,row}).save('mes-fiches-'+kind+'-'+stamp+'.pdf');const status=root.document.getElementById('save-status');if(status)status.textContent='Les fiches de cette tentative ont été téléchargées en PDF.';return true;}catch(e){const status=root.document.getElementById('save-status');if(status)status.textContent=e.message;return false;}}
root.NovaSheets={plan:(cards,context)=>root.NovaSheetsRules.plan(cards,context),collect,open,close,render,attachChapter,buildPdf,downloadSaved};
function init(){root.NovaSave?.history();root.document.addEventListener('click',e=>{const b=e.target.closest?.('[data-civi-sheet-context]');if(b){e.preventDefault();open(parse(b.dataset.civiSheetContext));}});const chat=root.document.getElementById('chat');if(chat&&root.MutationObserver){new root.MutationObserver(records=>{for(const record of records)for(const node of record.addedNodes)if(node.nodeType===1&&(node.classList.contains('bot-message')||node.querySelector('.bot-message')))render(node);}).observe(chat,{childList:true,subtree:true});for(const node of chat.querySelectorAll('.bot-message'))render(node);}const old=root.NovaBoot?.rendered;if(root.NovaBoot)root.NovaBoot.rendered=function(node){old?.call(this,node);render(node);};}
if(root.document.readyState==='loading')root.document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})(window);
