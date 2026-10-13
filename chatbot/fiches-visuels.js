'use strict';
(function(root){
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/œ/g,'oe').replace(/[^a-z0-9]+/g,' ').trim();
const portraits=[['camus','Albert Camus'],['napoleon','Napoléon'],['louis16','Louis XVI'],['moliere','Molière'],['baudelaire','Charles Baudelaire'],['sand','George Sand'],['beauvoir','Simone de Beauvoir'],['cezanne','Paul Cézanne'],['chagall','Marc Chagall'],['baker','Joséphine Baker'],['piaf','Édith Piaf'],['lafontaine','Jean de La Fontaine'],['moulin','Jean Moulin'],['yourcenar','Marguerite Yourcenar'],['rodin','Auguste Rodin'],['berlioz','Hector Berlioz'],['renoir','Auguste Renoir'],['hugo','Victor Hugo'],['curie','Marie Curie'],['ferry','Jules Ferry'],['schoelcher','Victor Schœlcher'],['rouget','Rouget de Lisle'],['degaulle','Charles de Gaulle'],['louis14','Louis XIV'],['voltaire','Voltaire'],['monet','Claude Monet'],['debussy','Claude Debussy'],['veil','Simone Veil'],['delacroix','Eugène Delacroix']];
const captions={president:'Le président de la République',government:'L’action du gouvernement',parliament:'L’Assemblée nationale',rights:'Les droits et le respect des autres',tax:'La déclaration des revenus',worker:'Le travail déclaré',vitale:'La carte Vitale et l’Assurance maladie',bins:'Le tri et les déchets',bastille:'La prise de la Bastille',education:'Apprendre et aller à l’école',geography:'Se repérer sur le territoire',vote:'Le vote et la démocratie',values:'Les symboles de la République',justice:'Le droit et la justice',daily:'La vie quotidienne',culture:'Le patrimoine et la culture',history:'Les repères historiques',health:'Les soins et la santé',europe:'Les institutions européennes'};
function pick(q){
 // Never match a name in distractors or an unrelated chapter example.
 const core=norm([q.question,q.correct].filter(Boolean).join(' ')),generic=!core||/^(que faites|que fait|que lui|que repond|quelle attitude|quelle reponse|comment reag)/.test(norm(q.question)),text=core+(generic?' '+norm(q.context):'');let key;
 const matches=(value,name)=>value.includes(norm(name))||(name==='Claude Debussy'&&/\bdebussy\b/.test(value));
 const person=[norm(q.correct),norm(q.question),generic?norm(q.context):''].map(value=>portraits.find(([,name])=>matches(value,name))).find(Boolean);
 if(/elysee/.test(text)&&/site|internet/.test(text)||/matignon/.test(text)||/senat/.test(text)&&!/assemblee nationale/.test(text))key='repere';
 else if(!/champs elysees/.test(text)&&/elysee|residence.*president|president.*residence/.test(text))key='elysee';
 else if(/entraide|solidarite|benevol|aider.*voisin|fraternite/.test(text)&&!/devise|liberte egalite fraternite/.test(text))key='solidarity';
 else if(/mariage|marier|polygam|repudiation|epoux|epouse/.test(text))key='marriage';
 else if(/laicite|liberte de conscience|religion|croyance|croire|conviction/.test(text))key='conscience';
 else if(/entretien.*embauche|recruteur|recrutement|candidat.*entretien/.test(text))key='interview';
 else if(/declaration des droits|\bddhc\b/.test(text))key='ddhc';
 else if(/marianne/.test(text)&&!/drapeau|marseillaise|devise/.test(norm(q.correct)))key='marianne';
 else if(person)key=person[0];
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
 const label=({solidarity:'Des voisins s’entraident au quotidien',marriage:'Un marié et une mariée en tenue de cérémonie',conscience:'Deux personnes échangent et respectent leurs convictions',elysee:'Le palais de l’Élysée',interview:'Un employeur et un candidat en entretien',ddhc:'La Déclaration des droits de l’homme et du citoyen',marianne:'Un buste de Marianne'})[key]||(key==='factory'?'Une personne au travail dans un atelier':key==='business'?'Une personne dans son entreprise':key==='eiffel'?'La tour Eiffel':key==='swissflag'?'Le drapeau suisse':key==='frenchflag'?'Le drapeau français':person?'Portrait dessiné de '+person[1]:captions[key]);
 return {key,label:label||'Repère pédagogique',src:key==='repere'?null:root.CiviSheetsArt?.[key]||'assets/fiches/'+key+'.png',file:'assets/fiches/'+key+'.png',person:person?.[1]||null};
}
function memo(q){
 const v=pick(q),s=norm(q.question+' '+q.correct);
 if(v.key==='vitale')return 'CPAM = Caisse primaire d’assurance maladie.';
 if(v.key==='president'&&/nomm/.test(s))return 'PR = président de la République.';
 if(v.key==='government'&&/dirige/.test(s))return 'PM = Premier ministre.';
 if(v.key==='parliament'&&/vote.*loi/.test(s))return 'AN = Assemblée nationale.';
 // Avoid extra dates/biography and long restatements of the same answer.
 const m=String(q.memory||'').replace(/^Retenez\s*:?\s*/i,'').trim();
 if(v.person||m.length>100||norm(m).includes(norm(q.correct))||!/[A-ZÀ-Ý]{2,}|\d{4}/.test(m))return '';
 return m;
}
function title(q){const p=pick(q),core=norm(q.question+' '+q.correct);if(p.key==='ferry'&&/ecole|loi|enseignement|instruction/.test(core))return 'Lois Ferry';if(p.key==='marriage')return /polygam/.test(core)?'Un seul mariage à la fois':/repudiation/.test(core)?'Mariage et droits égaux':'Le mariage';if(p.key==='conscience')return /liberte.*conscience/.test(core)?'La liberté de conscience':'La laïcité et les convictions';if(/matignon/.test(core))return 'L’hôtel de Matignon';if(/senat/.test(core)&&!/assemblee nationale/.test(core))return 'Le Sénat';if(p.key==='elysee')return 'Résidence du président';if(p.key==='interview')return 'Entretien d’embauche';if(p.key==='marianne')return 'Marianne';if(p.key==='ddhc')return 'Les droits fondamentaux';if(p.key==='president'&&/nomm/.test(norm(q.question+' '+q.correct)))return 'Rôle du président';if(p.key==='tax')return 'Déclarer ses revenus';if(p.key==='vitale')return 'L’Assurance maladie';if(p.key==='factory'&&/non declare/.test(norm(q.question+' '+q.correct)))return 'Travail déclaré';if(p.key==='factory'&&/duree|35 heures/.test(norm(q.question+' '+q.correct)))return 'Temps de travail';if(p.key==='business')return 'Créer son entreprise';if(p.key==='eiffel')return 'La tour Eiffel';if(p.key==='swissflag')return 'La Suisse';if(p.key==='frenchflag')return 'Le drapeau français';if(p.key==='europe'&&/drapeau/.test(norm(q.question)))return 'Le drapeau européen';if(p.person)return p.person;const fallback=Number(q.theme)!==4&&/histoire|geographie/.test(norm(q.notion))?q.chapterTitle:q.notion;const text=String(fallback||q.chapterTitle||q.question||'Ma notion à revoir').replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu,'').trim();return text.charAt(0).toUpperCase()+text.slice(1);}
function sections(q){
 const v=pick(q),text=norm(q.question+' '+q.correct),out=[];
 if(v.key==='vitale'&&/assurance maladie|caisse primaire|cpam/.test(norm(q.correct))&&/organisme|rembourse|cpam|caisse/.test(norm(q.question)))return [{label:'À retenir',text:'Rembourse une partie des frais de santé.'},{label:'Mémo',text:'CPAM = Caisse primaire d’assurance maladie.'}];
 if(v.key==='camus'&&/écrivain|philosophe/i.test(q.correct||'')&&!/[«"]/.test(q.question||''))return [{label:'À retenir',text:q.correct},{label:'Repère',text:'L’Étranger : un roman d’Albert Camus.'}];
 if(v.key==='ferry'&&/ecole.*(gratuit|laique|oblig)|enseignement/.test(text))return [{label:'À retenir',text:'G = gratuit (1881)\nL = laïque (1882)\nO = instruction obligatoire (1882)'},{label:'Repère',text:'École primaire publique.'}];
 if(v.key==='tax'&&/declar/.test(text)&&/revenu/.test(text)&&/^(oui)|obligation|declar.*chaque|declare.*annee/.test(norm(q.correct)))return [{label:'À retenir',text:'Toute personne concernée déclare ses revenus chaque année.'},{label:'Repère',text:'Déclarer ne signifie pas forcément payer un impôt.'},{label:'Schéma',text:'Revenus → Déclaration → Calcul de l’impôt',steps:['Revenus','Déclaration','Calcul de l’impôt']}];
 const curated={
 ddhc:[['Mémo','DDHC = Déclaration des droits de l’homme et du citoyen.'],['Repère','1789 → texte fondateur des droits.']],
 elysee:[['À retenir','Palais de l’Élysée = résidence officielle du président.']],
 marianne:[['À retenir','Marianne représente la République.']],
 eiffel:[['À retenir','Tour Eiffel → Paris.'],['Repère','1889 : inauguration pour l’Exposition universelle.']],
 swissflag:[['À retenir',/union europeenne/.test(text)?'Suisse ≠ Union européenne.':'La Suisse.'],['Mémo','Drapeau suisse : croix blanche sur fond rouge.']],
 frenchflag:[['À retenir','Drapeau français : bleu → blanc → rouge.'],['Mémo','BBR = Bleu, Blanc, Rouge. Trois bandes verticales.']]
 };
 // These short facts are grounded in the existing bank; no attempt or wrong answer is shown.
 if(curated[v.key]&&(v.key!=='swissflag'||String(q.correct).length<25)){const facts=curated[v.key].map(([label,text])=>({label,text}));if(v.key==='frenchflag'&&/marianne|marseillaise|devise/.test(norm(q.correct)))facts.unshift({label:'Les symboles',text:q.correct});const light=value=>norm(value).replace(/\b(la|le|les|l|un|une|de|du|des|et)\b/g,'').replace(/\s+/g,' ').trim(),sourceAnswer=light(q.correct);if(sourceAnswer&&!(v.key==='elysee'&&/^(le president de la republique|au palais de l elysee|le palais de l elysee|palais de l elysee)$/.test(norm(q.correct)))&&!light(facts.map(x=>x.text).join(' ')).includes(sourceAnswer)&&!(/drapeau tricolore/.test(sourceAnswer)&&v.key==='frenchflag'))facts.push({label:'Repère',text:q.correct});return facts;}
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
 if(v.key==='vitale'&&/carte vitale/.test(norm(q.question)))return ['Soins','Carte Vitale','Remb. selon les droits'];
 if(v.key==='tax'&&/declare|declaration/.test(t))return ['Revenus','Déclaration','Calcul de l’impôt'];
 if(v.key==='president'&&/nomm/.test(t))return null;
 if(v.key==='government'&&/dirige/.test(t))return ['Premier ministre','Dirige','Action du gouvernement'];
 if(v.key==='parliament'&&/vote.*loi/.test(t))return ['Parlement','Vote','Lois'];
 return null;
}
function event(q){
 const v=pick(q),t=norm(q.question+' '+q.correct);if(root.NovaSheetsRules.isSituation(q))return null;
 if(v.key==='bastille'&&/1789/.test(t))return {year:1789,label:'1789'};
 if(v.key==='ferry'&&/loi|ecole|enseignement|instruction/.test(t))return {year:1881,label:'1881-1882',art:'education'};
 if(v.person||Number(q.theme)!==4)return null;const m=String(q.correct||'').match(/\b(1[0-9]{3}|20[0-9]{2})\b/);return m?{year:Number(m[1]),label:m[1]}:null;
}
function presentation(q){const v=pick(q);return v.key==='interview'?'dialogue':v.person||['president','government'].includes(v.key)?'person':v.key==='elysee'?'place':event(q)?'event':v.src?'object':'notes';}
// Every notion receives a semantic composition, independent of the assessment.
// Text comes from the answer and its source explanation; connecting lines are
// associations, never invented causal relationships or additional legal rules.
function composition(q){
 const v=pick(q),facts=sections(q).map(f=>({...f})),t=norm(q.question+' '+q.correct);
 // Fill terse answers with a related complete statement from the same bank,
 // only for tightly identified concepts. Never mix situation-specific rules.
 if(facts.reduce((n,f)=>n+f.text.length,0)<100&&['conscience','marriage'].includes(v.key)){const peers=Object.values(root.CiviSheetsData?.questions||{}).filter(p=>p.notion===q.notion&&!root.NovaSheetsRules.isSituation(p)&&p.correct&&p.correct.length>35&&p.correct.length<180&&pick(p).key===v.key);let joined=norm(facts.map(f=>f.text).join(' '));for(const peer of peers){const note=norm(peer.correct);if(!joined.includes(note)&&!note.includes(norm(q.correct))){facts.push({label:'Repère',text:peer.correct});break;}if(note.includes(norm(q.correct))&&peer.correct.length>String(q.correct).length+20){facts[0]={label:'À retenir',text:peer.correct};break;}}}
 for(const f of facts){const prefix=title(q)+' : ';if(f.text.startsWith(prefix))f.text=f.text.slice(prefix.length);if(/^(Oui|Non),\s/i.test(f.text))f.text=f.text.replace(/^(Oui|Non),\s*/i,'').replace(/^./,c=>c.toUpperCase());}
 // Question restatements are not revision notes. Keep the answer, conditions and explanations.
 for(let i=facts.length-1;i>=1;i--)if(facts[i].label==='Repère'&&norm(facts[i].text)===norm(String(q.question||'').replace(/\s*\?$/,'')))facts.splice(i,1);
 const flow=facts.find(s=>s.steps);
 if(v.key==='president'&&/nomm.*premier ministre|premier ministre.*nomm/.test(t)&&/president/.test(norm(q.correct)))facts[0]={label:'À retenir',text:'Le président de la République nomme le Premier ministre.'};
 const type=event(q)?'timeline':flow?'process':v.key==='interview'?'dialogue':/mariage|polygam|repudiation/.test(t)?'relationship':/laicite|conscience|religion/.test(t)?'freedom':/egalite|discrimination|interdit|autorise/.test(t)?'rule':v.key==='elysee'||v.key==='eiffel'||v.key==='geography'?'place':/\d/.test(q.correct||'')?'number':isAction(q)?'action':'mindmap';
 if(v.key==='president'&&/nomm/.test(t)){for(let i=facts.length-1;i>=0;i--)if(facts[i].label==='Mémo'&&/^PR =/.test(facts[i].text))facts.splice(i,1);}
 return {type,subject:title(q),facts,visual:v.key,sourceOnly:true};
}
function isAction(q){return root.NovaSheetsRules.isSituation(q);}
function rows(block){
 const dated=block.notions.filter(q=>event(q)),timed=Number(block.id)===4&&dated.length>=2?dated:[],rest=block.notions.filter(q=>!timed.includes(q)),out=[];
 if(timed.length){const ordered=[...timed].sort((a,b)=>event(a).year-event(b).year);for(let i=0;i<ordered.length;i+=3)out.push({type:'timeline',notions:ordered.slice(i,i+3)});}
 for(let i=0;i<rest.length;){const short=q=>sections(q).reduce((n,s)=>n+s.text.length,0)<=420&&title(q).length<=65,pair=i+1<rest.length&&short(rest[i])&&short(rest[i+1]);out.push({type:'notes',notions:rest.slice(i,i+(pair?2:1))});i+=pair?2:1;}
 return out;
}
function groupTitle(block){
 const keys=block.notions.map(q=>pick(q).key);
 if(block.id===1&&keys.every(k=>['marianne','frenchflag','values'].includes(k)))return 'Symboles de la République';
 if(block.id===2&&keys.every(k=>['europe','swissflag'].includes(k)))return 'L’Europe';
 if(block.id===4&&block.notions.every(q=>event(q)))return 'Histoire';
 if(block.id===4&&keys.every(k=>k==='eiffel'||k==='culture'||portraits.some(p=>p[0]===k)))return 'Culture et patrimoine';
 return ({1:'Valeurs de la République',2:'Institutions',3:'Droits et devoirs',4:'Histoire, géographie et culture',5:'Vie en société'})[block.id];
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
root.CiviSheetsVisual={pick,memo,title,sections,diagram,event,presentation,composition,rows,groupTitle,lawExample,profile,portraits,captions};
})(window);
