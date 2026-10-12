'use strict';
(function(root){
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/œ/g,'oe').replace(/[^a-z0-9]+/g,' ').trim();
const portraits=[['camus','Albert Camus'],['napoleon','Napoléon'],['louis16','Louis XVI'],['moliere','Molière'],['baudelaire','Charles Baudelaire'],['sand','George Sand'],['beauvoir','Simone de Beauvoir'],['cezanne','Paul Cézanne'],['chagall','Marc Chagall'],['baker','Joséphine Baker'],['piaf','Édith Piaf'],['lafontaine','Jean de La Fontaine'],['moulin','Jean Moulin'],['yourcenar','Marguerite Yourcenar'],['rodin','Auguste Rodin'],['berlioz','Hector Berlioz'],['renoir','Auguste Renoir'],['hugo','Victor Hugo'],['curie','Marie Curie'],['ferry','Jules Ferry'],['schoelcher','Victor Schœlcher'],['rouget','Rouget de Lisle'],['degaulle','Charles de Gaulle'],['louis14','Louis XIV'],['voltaire','Voltaire'],['monet','Claude Monet'],['debussy','Claude Debussy'],['veil','Simone Veil'],['delacroix','Eugène Delacroix']];
const captions={president:'Le président de la République',government:'L’action du gouvernement',parliament:'L’Assemblée nationale',rights:'Les droits et le respect des autres',tax:'La déclaration des revenus',worker:'Le travail déclaré',vitale:'La carte Vitale et l’Assurance maladie',bins:'Le tri et les déchets',bastille:'La prise de la Bastille',education:'Apprendre et aller à l’école',geography:'Se repérer sur le territoire',vote:'Le vote et la démocratie',values:'Les symboles de la République',justice:'Le droit et la justice',daily:'La vie quotidienne',culture:'Le patrimoine et la culture',history:'Les repères historiques',health:'Les soins et la santé',europe:'Les institutions européennes'};
function pick(q){
 // Never match a name in distractors or an unrelated chapter example.
 const text=norm([q.question,q.context,q.correct].filter(Boolean).join(' '));let key;
 const matches=(value,name)=>value.includes(norm(name))||(name==='Claude Debussy'&&/\bdebussy\b/.test(value));
 const person=[norm(q.correct),norm(q.question),norm(q.context)].map(value=>portraits.find(([,name])=>matches(value,name))).find(Boolean);
 if(person)key=person[0];
 else if(/assurance maladie|carte vitale|cpam|remboursement.*soin/.test(text))key='vitale';
 else if(/medecin|medic|vaccin|hopital|sante|pmi|grossesse|soin/.test(text))key='health';
 else if(/dechet|poubelle|tri selectif|recycl/.test(text))key='bins';
 else if(/revenu|impot|fisc/.test(text))key='tax';
 else if(/bastille|1789/.test(text)&&!/declaration des droits/.test(text))key='bastille';
 else if(/union europeenne|parlement europeen|commission europeenne|conseil europeen|monnaie.*euro/.test(text))key='europe';
 else if(/president.*nomm|nomm.*premier ministre|president de la republique/.test(text))key='president';
 else if(/premier ministre|gouvernement|ministre/.test(text)&&!/assemblee|senat|parlement|depute/.test(text))key='government';
 else if(/assemblee|parlement|senat|depute/.test(text))key='parliament';
 else if(/vot|election|urne|democratie/.test(text))key='vote';
 else if(/ecole|scolar|education|enseign|enfant.*appr/.test(text))key='education';
 else if(/travail|salar|emploi|entreprise|contrat de travail|chomage/.test(text))key='worker';
 else if(/territoire|region|departement|continent|ocean|mer |fleuve|ville|montagne|frontiere|geograph/.test(text)&&Number(q.theme)===4)key='geography';
 else if(/justice|juge|tribunal|police|gendar|sanction|delit|crime/.test(text))key='justice';
 else if(/liberte|egalite|fraternite|marianne|drapeau|marseillaise|devise|symbole|laicite/.test(text))key=Number(q.theme)===3?'rights':'values';
 else key=({1:'values',2:'parliament',3:'rights',4:/histoire|revolution|guerre|siecle|annee/.test(text+' '+norm(q.chapterTitle))?'history':'culture',5:'daily'})[Number(q.theme)]||'daily';
 const label=person?'Portrait dessiné de '+person[1]:captions[key];
 return {key,label,src:root.CiviSheetsArt?.[key]||'assets/fiches/'+key+'.png',file:'assets/fiches/'+key+'.png',person:person?.[1]||null};
}
function memo(q){
 const v=pick(q),s=norm(q.question+' '+q.correct);
 if(v.key==='vitale')return 'CPAM = Caisse primaire d’assurance maladie.';
 if(v.key==='president'&&/nomm/.test(s))return 'N comme Nomme : le président nomme le Premier ministre.';
 if(v.key==='government'&&/dirige/.test(s))return 'D comme Dirige : le Premier ministre dirige l’action du gouvernement.';
 if(v.key==='parliament'&&/vote.*loi/.test(s))return 'V comme Vote : l’Assemblée nationale vote les lois.';
 // Avoid extra dates/biography and long restatements of the same answer.
 const m=String(q.memory||'').replace(/^Retenez\s*:?\s*/i,'').trim();
 if(v.person||m.length>70||norm(m).includes(norm(q.correct)))return '';
 return m;
}
function title(q){const p=pick(q);if(p.person)return p.person;const fallback=Number(q.theme)!==4&&/histoire|geographie/.test(norm(q.notion))?q.chapterTitle:q.notion;const text=String(fallback||q.chapterTitle||q.question||'Ma notion à revoir').replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu,'').trim();return text.charAt(0).toUpperCase()+text.slice(1);}
function sections(q){
 const situation=root.NovaSheetsRules.isSituation(q);const e=root.NovaSheetsRules.explanation(q).join('\n');
 if(situation)return [{label:'1. La situation',text:q.context||q.example?.question||q.question},{label:'2. La réponse adaptée',text:q.correct},{label:'3. Pourquoi cette réponse convient',text:e||'Le corrigé enregistré ne précise pas cette explication. Revoir la notion du chapitre « '+q.chapterTitle+' ».'}];
 const person=pick(q).person,answer=norm(q.correct),notion=norm(q.notion),chapter=norm(q.chapterTitle);
 const identity=person&&/^qui (etait|est) /.test(norm(q.question))&&norm(q.question).includes(norm(person));
 const contextNeeded=(person&&!identity)||/^(oui|non|il |elle |cela|cette )|^[0-9]/.test(answer)||!notion||notion===chapter||(!person&&/reperes de l histoire/.test(notion));
 const out=contextNeeded?[{label:'Le repère',text:q.question},{label:'À retenir',text:q.correct}]:[{label:'À retenir',text:q.correct}];
 if(e)out.push({label:'Comprendre simplement',text:e});const m=memo(q);if(m)out.push({label:'Mémo',text:m});
 // A source example always comes with its answer; no final question/quiz.
 if(q.example?.label==='Un exemple du chapitre'&&q.example.question!==q.question){const book=String(q.example.question).match(/«([^»]+)»/);out.push({label:'Exemple concret',text:book?book[1].trim()+' → '+q.example.answer:q.example.question+'\n'+q.example.answer});}
 return out.filter(x=>x.text);
}
function lawExample(block){
 if(Number(block.id)!==2)return null;
 const roles=new Set(block.notions.map(q=>pick(q).key).filter(key=>['president','government','parliament'].includes(key)));
 if(roles.size<2)return null;
 return {title:'Une loi fictive pour améliorer le tri des déchets',note:'Exemple fictif. Schéma simplifié : d’autres étapes et contrôles peuvent intervenir.',steps:[
 {key:'government',label:'1. Proposer',text:'Le gouvernement prépare un projet de loi.'},
 {key:'parliament',label:'2. Examiner et voter',text:'L’Assemblée nationale et le Sénat examinent et votent le texte.'},
 {key:'president',label:'3. Promulguer',text:'Après son adoption, le président promulgue la loi.'},
 {key:'bins',label:'4. Appliquer',text:'Le gouvernement organise son application.'}]};
}
function profile(settings=root.NovaAccess?.settings?.()||{}){
 const enabled=settings.markers!==false,id=enabled&&['deuteranopia','protanopia','tritanopia','achromatopsia'].includes(settings.colourProfile)?settings.colourProfile:'general';
 const presets={general:{label:'Couleurs habituelles',ink:null,tint:[250,250,247]},deuteranopia:{label:'Deutéranopie',ink:[18,60,120],tint:[231,238,251]},protanopia:{label:'Protanopie',ink:[54,34,104],tint:[238,232,250]},tritanopia:{label:'Tritanopie',ink:[104,22,45],tint:[248,232,237]},achromatopsia:{label:'Achromatopsie',ink:[32,32,32],tint:[238,238,238]}};
 const p={id,...presets[id],mono:id==='achromatopsia',contrast:!!settings.contrast};if(p.contrast){p.ink=[17,17,17];p.tint=[255,255,255];}return p;
}
root.CiviSheetsVisual={pick,memo,title,sections,lawExample,profile,portraits,captions};
})(window);
