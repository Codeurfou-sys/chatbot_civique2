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
 else if(/tour eiffel/.test(norm(q.correct))||/tour eiffel/.test(text)&&!/symbole.*officiel|symboles officiels/.test(text))key='eiffel';
 else if(/suisse/.test(norm(q.correct)))key='swissflag';
 else if(/drapeau europeen/.test(text))key='europe';
 else if(/drapeau francais|drapeau tricolore|bleu blanc rouge/.test(text))key='frenchflag';
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
 else if(/creer.*entreprise|creation.*entreprise|entrepreneur/.test(text))key='business';
 else if(/duree.*travail|temps de travail|35 heures|usine|salarie|travail non declare|emploi/.test(text))key='factory';
 else if(/travail|salar|emploi|entreprise|contrat de travail|chomage/.test(text))key='worker';
 else if(/territoire|region|departement|continent|ocean|mer |fleuve|ville|montagne|frontiere|geograph/.test(text)&&Number(q.theme)===4)key='geography';
 else if(/justice|juge|tribunal|police|gendar|sanction|delit|crime/.test(text))key='justice';
 else if(/liberte|egalite|fraternite|marianne|drapeau|marseillaise|devise|symbole|laicite/.test(text))key=Number(q.theme)===3?'rights':'values';
 else if(/droits|devoirs|respect|discrimination|solidarite/.test(text))key='rights';
 else key='repere';
 const label=key==='factory'?'Une personne au travail dans un atelier':key==='business'?'Une personne dans son entreprise':key==='eiffel'?'La tour Eiffel':key==='swissflag'?'Le drapeau suisse':key==='frenchflag'?'Le drapeau français':person?'Portrait dessiné de '+person[1]:captions[key];
 return {key,label,src:key==='repere'?null:root.CiviSheetsArt?.[key]||'assets/fiches/'+key+'.png',file:'assets/fiches/'+key+'.png',person:person?.[1]||null};
}
function memo(q){
 const v=pick(q),s=norm(q.question+' '+q.correct);
 if(v.key==='vitale')return 'CPAM = Caisse primaire d’assurance maladie.';
 if(v.key==='president'&&/nomm/.test(s))return 'N comme Nomme : le président nomme le Premier ministre.';
 if(v.key==='government'&&/dirige/.test(s))return 'D comme Dirige : le Premier ministre dirige l’action du gouvernement.';
 if(v.key==='parliament'&&/vote.*loi/.test(s))return 'V comme Vote : l’Assemblée nationale vote les lois.';
 // Avoid extra dates/biography and long restatements of the same answer.
 const m=String(q.memory||'').replace(/^Retenez\s*:?\s*/i,'').trim();
 if(v.person||m.length>100||norm(m).includes(norm(q.correct))||!/[A-ZÀ-Ý]{2,}|\d{4}/.test(m))return '';
 return m;
}
function title(q){const p=pick(q);if(p.key==='eiffel')return 'La tour Eiffel';if(p.key==='swissflag')return 'La Suisse';if(p.key==='frenchflag')return 'Le drapeau français';if(p.key==='europe'&&/drapeau/.test(norm(q.question)))return 'Le drapeau européen';if(p.person)return p.person;const fallback=Number(q.theme)!==4&&/histoire|geographie/.test(norm(q.notion))?q.chapterTitle:q.notion;const text=String(fallback||q.chapterTitle||q.question||'Ma notion à revoir').replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu,'').trim();return text.charAt(0).toUpperCase()+text.slice(1);}
function sections(q){
 const v=pick(q),text=norm(q.question+' '+q.correct),out=[];
 const curated={
 eiffel:[['À retenir','Tour Eiffel → Paris.'],['Repère','1889 : inauguration pour l’Exposition universelle.']],
 swissflag:[['À retenir',/union europeenne/.test(text)?'Suisse ≠ Union européenne.':'La Suisse.'],['Mémo','Drapeau suisse : croix blanche sur fond rouge.']],
 frenchflag:[['À retenir','Drapeau français : bleu → blanc → rouge.'],['Mémo','BBR = Bleu, Blanc, Rouge. Trois bandes verticales.']]
 };
 // These short facts are grounded in the existing bank; no attempt or wrong answer is shown.
 if(curated[v.key]&&(v.key!=='swissflag'||String(q.correct).length<25)){const facts=curated[v.key].map(([label,text])=>({label,text}));if(v.key==='frenchflag'&&/marianne|marseillaise|devise/.test(norm(q.correct)))facts.unshift({label:'Les symboles',text:q.correct});const sourceAnswer=norm(q.correct).replace(/^(la|le|les|un|une) /,'');if(sourceAnswer&&!norm(facts.map(x=>x.text).join(' ')).includes(sourceAnswer)&&!(/drapeau tricolore/.test(sourceAnswer)&&v.key==='frenchflag'))facts.push({label:'Repère',text:q.correct});return facts;}
 if(/revolution francaise/.test(text)&&/1789/.test(text)&&!/declaration/.test(text))return [{label:'À retenir',text:'1789 → début de la Révolution française.'},{label:'Repère',text:'14 juillet 1789 → prise de la Bastille.'}];
 if(/declaration des droits/.test(text)&&/1789/.test(text))out.push({label:'Mémo',text:'DDHC = Déclaration des droits de l’homme et du citoyen.\n1789 → texte fondateur des droits.'});
 let correct=String(q.correct||'').trim();
 if(/^\d{4}\.?$/.test(correct))correct=title(q)+' → '+correct;
 else if(/^(oui|non)[,.]/i.test(correct))correct=title(q)+' : '+correct;
 out.unshift({label:'À retenir',text:correct});
 if(/^(oui|non)[,.]/i.test(q.correct)||/^\d+(?:\s|[.,])/u.test(q.correct)&&!/^\d{4}\.?$/.test(q.correct))out.splice(1,0,{label:'Repère',text:String(q.question||'').replace(/\s*\?$/,'').replace(/^Doit-on /,'Obligation de ').replace(/^Peut-on /,'Possibilité de ')});
 const answer=norm(q.correct),seen=new Set([answer]);
 const explanations=root.NovaSheetsRules.explanation(q).filter(x=>{const n=norm(x);if(!n||seen.has(n)||n===answer)return false;seen.add(n);return true;});
 // Keep whole sentences and legal qualifications; shorten only redundant biography.
 const primary=explanations.filter(x=>!norm(x).includes(answer)||answer.length<20);if(primary[0]&&(/^(oui|non)[,.]/i.test(q.correct)||String(q.correct).length<35)){out[0]={label:'À retenir',text:primary.shift()};const contextIndex=out.findIndex(x=>x.label==='Repère');if(contextIndex>=0)out.splice(contextIndex,1);}const concise=primary.filter((x,i)=>i<2||/si |lorsque|condition|sauf|uniquement|partie|partiel|permet|ne .*pas|interdit|autorise/i.test(x));
 if(concise.length)out.push({label:'Repères',text:concise.join('\n')});
 const m=memo(q);if(m&&!out.some(x=>norm(x.text).includes(norm(m))))out.push({label:'Mémo',text:m});
 const schema=diagram(q);if(schema)out.push({label:'Schéma',text:schema.join(' → '),steps:schema});
 // A book/author association is a useful example, without replaying a question.
 const book=String(q.question||'').match(/«([^»]+)»/);
 if(book&&v.person)out.push({label:'Repère',text:book[1].trim()+' → '+v.person});
 return out.filter(x=>x.text);
}
function diagram(q){const v=pick(q),t=norm(q.question+' '+q.correct+' '+(q.explanation||[]).join(' '));
 if(v.key==='vitale')return ['Soins','Carte Vitale','Remb. selon les droits'];
 if(v.key==='tax'&&/declare|declaration/.test(t))return ['Revenus','Déclaration','Calcul de l’impôt'];
 if(v.key==='president'&&/nomm/.test(t))return ['Président','Nomme','Premier ministre'];
 if(v.key==='government'&&/dirige/.test(t))return ['Premier ministre','Dirige','Action du gouvernement'];
 if(v.key==='parliament'&&/vote.*loi/.test(t))return ['Parlement','Vote','Lois'];
 return null;
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
root.CiviSheetsVisual={pick,memo,title,sections,diagram,lawExample,profile,portraits,captions};
})(window);
