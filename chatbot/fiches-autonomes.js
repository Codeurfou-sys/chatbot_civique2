/* v65 : une fiche de connaissance autonome, jamais un corrigé du QCM. */
(function(root){
'use strict';
const V=root.CiviSheetsVisual,n=root.NovaSheetsRules.normal,pick=V.pick,title=V.title,sections=V.sections,work=V.artwork,theme=V.revisionTheme,rows=V.rows;
const pair=(a,b)=>[{label:'À retenir',text:a},{label:'Exemple ou détail',text:b}];
function focus(q){
 const core=n(q.question+' '+q.correct),generic=!!q.context&&q.context!==q.question;
 return {core,all:core+' '+(generic?n(q.context):'')+' '+n((q.explanation||[]).join(' '))};
}
function resolve(q){
 const {core,all}=focus(q),answer=n(q.correct),person=V.portraits.find(([,p])=>answer.includes(n(p))||/qui|auteur|compositeur|portrait|personnage/.test(n(q.question))&&core.includes(n(p)));
 const regime=String(q.key||'').match(/^SCR_REV_T4_CH01:0:(\d+)$/);if(regime)return {key:'regime-'+regime[1],title:q.question,theme:4};
 if(person&&/qui|auteur|compositeur|portrait|personnage/.test(n(q.question)))return null;
 if(/mutuelle|complementaire sante/.test(core)||/mutuelle|complementaire sante/.test(all)&&!/cpam|assurance maladie/.test(answer))return {key:'mutuelle',title:'La complémentaire santé',theme:5};
 if(/cantine|restauration scolaire/.test(core))return {key:'canteen',title:'La cantine scolaire',theme:5};
 if(/\bivg\b|interruption volontaire de grossesse|avort/.test(all)&&!/simone veil/.test(answer))return {key:'ivg',title:'L’interruption volontaire de grossesse',theme:3};
 if(/port|maritime/.test(core)&&/traite|negriere|xviii/.test(all))return {key:'ports-nantes',title:'Nantes et la traite atlantique',theme:4};
 if(/ports? maritime|grand port|grands ports/.test(all)&&!/traite|negriere/.test(all))return {key:'ports',title:'Les grands ports français',theme:4};
 if(/code de la route|infraction routiere/.test(core))return {key:'driving',title:'Respecter le Code de la route',theme:3};
 if((/categories? d infraction|infraction|exemple de crime|exemple.*contravention/.test(core)||/^(un |une |le |la )?(crime|delit|contravention)$/.test(answer))&&!/shoah|humanite/.test(core))return {key:'infractions',title:'Les catégories d’infractions',theme:3};
 if(/titre de sejour/.test(core))return {key:'residence',title:'Le titre de séjour',theme:5};
 if(/separation.*pouvoir|separer.*pouvoir/.test(core))return {key:'constitution',title:'La séparation des pouvoirs',theme:2};
 if(/montant de l impot preleve a la source|impot preleve a la source/.test(core)&&/t5 ch03/.test(n(q.chapter)))return {key:'pay',title:'Le prélèvement à la source',theme:5};
 if(Number(q.theme)===4&&/(combien|nombre).*departement|regions? en france|regions? compte la france/.test(core))return {key:'francemap',title:'L’organisation du territoire français',theme:4};
 if(Number(q.theme)===4&&/\bmarseille\b/.test(core))return {key:'ports-marseille',title:'Marseille et la Méditerranée',theme:4};
 return null;
}
V.pick=q=>{const s=resolve(q);if(!s)return pick(q);return {key:s.key,label:s.title,src:root.CiviSheetsArt?.[s.key]||'assets/fiches/'+s.key+'.png',file:'assets/fiches/'+s.key+'.png',selectionReason:'notion autonome v65'};};
V.title=q=>resolve(q)?.title||title(q);
V.revisionTheme=q=>resolve(q)?.theme||(V.pick(q).key==='napoleon'?4:theme(q));
V.artwork=q=>{const w=work(q),k=V.pick(q).key;if(!w)return null;
 if(k==='lafontaine')return {...w,note:'Mémo : fable = récit court + morale. Dans Le Corbeau et le Renard, la flatterie permet au renard d’obtenir le fromage.',source:'https://www.institutdefrance.fr/publications/le-corbeau-et-le-renard/'};
 if(k==='cezanne'&&/sainte victoire/.test(n(w.title)))return {...w,note:'Cette montagne se trouve près d’Aix-en-Provence. Cézanne la représente dans plusieurs œuvres.',source:'https://www.musee-orsay.fr/fr/oeuvres/montagne-sainte-victoire-1469'};
 if(/^oeuvre de/.test(n(w.note))){const base=V.works[k];if(base&&n(base.title)!==n(w.title))return {...w,note:'Autre œuvre repère : « '+base.title+' ». '+base.note,source:base.source};}
 return w;
};
const removeCorrection=text=>String(text||'')
 .replace(/\s*(?:Les autres (?:personnages|propositions|choix)[^.]*\.|[^.]*à l’inverse des autres propositions[^.]*\.|[^.]*à l'inverse des autres propositions[^.]*\.)/gi,' ')
 .replace(/,?\s*contrairement aux autres (?:pratiques|propositions)[^.]*\.?/gi,'.')
 .replace(/Sur la carte,[^.]*\.|La carte situe[^.]*\.|Repère : (?:cherchez|la région concernée)[^.]*\.[^.]*\./gi,'')
 .replace(/Mémo : métropole et outre-mer[^.]*\./gi,'')
 .replace(/(?:Œuvre|Oeuvre) (?:la plus célèbre|la plus connue)[^.]*\./gi,'')
 .replace(/[→←↑↓↔➜➔]/g,' : ').replace(/\s+/g,' ').trim();
const detailByKey={
 bins:'Exemple : les emballages recyclables sont séparés des autres déchets, selon les consignes locales.',
 education:'L’école aide les enfants à acquérir des connaissances et à vivre avec les autres.',
 rights:'Les libertés s’exercent dans le respect de la loi et des droits des autres.',
 justice:'Crime > délit > contravention : ordre de gravité décroissant.',
 expression:'Exprimer une opinion n’autorise pas la diffamation ou les appels à la haine.',
 nationalday:'Le 14 juillet est la fête nationale française. Il évoque la prise de la Bastille et la fête de la Fédération.',
 geography:'La commune, le département et la région sont des niveaux d’organisation du territoire français.',
 francemap:'Une région regroupe plusieurs départements ; un département regroupe plusieurs communes.',
 health:'Un professionnel de santé explique les soins proposés et répond aux questions de la personne.',
 louvre:'Le musée du Louvre se situe à Paris. Il conserve des œuvres de différentes époques et civilisations.',
 townhall:'La mairie gère notamment l’état civil : naissances, mariages et décès.',
 daily:'Les services publics accompagnent les habitants dans leurs démarches administratives.',
 conscience:'La laïcité permet de croire, de ne pas croire ou de changer de religion.',
 parliament:'AN = Assemblée nationale. Avec le Sénat, elle forme le Parlement français.',
 worker:'La liberté syndicale permet d’adhérer ou non à un syndicat.',
 defense:'Exemple : une personne accusée peut préparer sa défense et être assistée par un avocat.',
 tax:'Le prélèvement à la source est un mode de paiement de l’impôt sur le revenu.',
 vote:'L’isoloir protège le secret du vote ; l’urne reçoit les bulletins dans leurs enveloppes.'
};
function complete(q,f,k){
 let main=removeCorrection(f[0].text),detail=removeCorrection(f[1].text);
 // Supprimer les fragments de réponse en utilisant leur explication source complète.
 if(/^(À |Au |Aux |De |Pour (?:garantir|protéger|éviter)|Il[s]? |Elle[s]? |Oui[, .]|Non[, .]|Cette journée|Le droit à)/.test(main)){
  const candidate=[...(q.explanation||[]),...detail.split(/(?<=[.!])\s+/)].map(removeCorrection).find(x=>x.length>35&&!/^(À |De |Pour |Il[s]? |Elle[s]? |Repère :|Exemple :|Mémo :)/.test(x));
  if(candidate)main=candidate;
 }
 if(k==='vitale'&&/carte vitale/.test(n(q.question+' '+q.correct+' '+detail)))return pair('La carte Vitale transmet les informations nécessaires au remboursement des soins par l’Assurance maladie.','Elle n’est pas une carte de paiement. Le remboursement dépend des droits de l’assuré et des règles de prise en charge.');
 if(k==='parliament'&&/assemblee nationale.*senat/.test(n(main)))return pair('Le Parlement français réunit l’Assemblée nationale et le Sénat.','Les deux chambres examinent et votent les lois. Elles contrôlent aussi l’action du gouvernement.');
 if(k==='conscience'&&/ecole/.test(n(q.question+' '+main)))return pair('À l’école publique, la laïcité protège la liberté de conscience et la neutralité du service public.','Tous les élèves sont accueillis sans distinction de religion ou de conviction.');
 const mn=n(main);
 const remaining=detail.split(/(?<=[.!])\s+/).filter(s=>n(s)&&!mn.includes(n(s))&&n(s)!==mn);
 detail=remaining.join(' ');
 if(!detail)detail=detailByKey[k]||String(q.memory||'').trim();
 detail=detail.split(/(?<=[.!])\s+/).filter(s=>!n(main).includes(n(s))).join(' ');
 if(!detail||n(main).includes(n(detail))){
  const sentences=main.split(/(?<=[.!])\s+/);
  if(sentences.length>1){detail=sentences.pop();main=sentences.join(' ');}
 }
 if(!detail)detail=detailByKey[k]||'Cette notion s’applique dans le cadre des règles et des conditions indiquées ci-dessus.';
 return pair(main,detail);
}
function autonomous(q){
 const {core,all}=focus(q),k=V.pick(q).key;
 if(k.startsWith('regime-')){
  const text=(q.explanation||[]).join(' ').replace(/^Elle est proclamée/,'La Deuxième République est proclamée');
  return pair(q.question+' : '+q.correct+'.',text);
 }
 if(k==='mutuelle')return pair('La complémentaire santé, souvent appelée mutuelle, complète les remboursements de l’Assurance maladie selon le contrat souscrit.','Exemple : elle peut prendre en charge une partie des frais de lunettes ou de soins dentaires. Les garanties et les montants dépendent du contrat.');
 if(k==='canteen')return pair('Lorsqu’une cantine existe, l’accès ne doit pas dépendre de la situation sociale de la famille.','Exemple : un enfant ne peut pas être refusé uniquement parce que ses parents ne travaillent pas. Des aides peuvent contribuer au paiement des repas.');
 if(k==='infractions')return pair('Les infractions ont trois niveaux de gravité. Du plus grave au moins grave : crime > délit > contravention.','Exemples : meurtre = crime ; vol simple = délit ; stationnement interdit = contravention.');
 if(k==='driving'&&/code de la route|infraction routiere/.test(core))return pair('Le Code de la route fixe les règles de circulation. Leur non-respect peut être sanctionné selon la nature de l’infraction.','Exemples : stationnement interdit = contravention ; conduire une voiture sans avoir le permis nécessaire = délit.');
 if(k==='ports')return pair('Les grands ports français comprennent Marseille-Fos, Le Havre, Dunkerque et Nantes-Saint-Nazaire. Ils permettent le transport maritime de marchandises et de passagers.','Le saviez-vous ? Marseille-Fos est le premier port de croisière de France. Il a accueilli plus de 2,6 millions de croisiéristes en 2025.');
 if(k==='ports-nantes')return pair('Aux XVIIIe et XIXe siècles, Nantes est le premier port français de la traite atlantique.','Un mémorial de l’abolition de l’esclavage a ouvert à Nantes en 2012 pour transmettre cette histoire et honorer les luttes contre l’esclavage.');
 if(k==='ports-marseille')return pair('Marseille se situe dans le sud de la France, au bord de la mer Méditerranée.','Son port accueille des navires de marchandises, des ferries et des navires de croisière.');
 if(k==='napoleon')return pair('Napoléon Bonaparte est un chef militaire français devenu empereur des Français en 1804.','Son sacre a lieu à Notre-Dame de Paris le 2 décembre 1804. Jacques-Louis David représente la cérémonie dans un tableau.');
 if(k==='ivg')return pair('IVG = interruption volontaire de grossesse. Une femme enceinte peut décider d’interrompre sa grossesse dans les conditions prévues par la loi.','Depuis mars 2024, la liberté de recourir à l’IVG est garantie par la Constitution. Un médecin ou une sage-femme informe et accompagne la femme.');
 if(k==='decolonization')return pair('L’Algérie a été colonisée par la France. Elle devient indépendante en 1962.','La décolonisation désigne l’accès à l’indépendance de territoires colonisés. Elle transforme notamment l’Afrique après la Seconde Guerre mondiale.');
 if(k==='residence'&&/titre de sejour/.test(core))return pair('Un titre de séjour autorise une personne étrangère à résider en France dans les conditions prévues par la loi.','Sa durée et les droits associés dépendent de sa catégorie. Un titre de séjour n’est pas une carte nationale d’identité.');
 if(k==='constitution'&&/separation.*pouvoir|separer.*pouvoir/.test(core))return pair('La séparation des pouvoirs distingue le pouvoir exécutif, le pouvoir législatif et le pouvoir judiciaire.','Mémo : exécutif = conduit l’action publique ; législatif = vote les lois ; judiciaire = rend la justice. Cette séparation limite la concentration du pouvoir.');
 if(k==='pay'&&/impot preleve a la source/.test(core))return pair('Le prélèvement à la source permet de payer l’impôt sur le revenu au moment du versement du salaire, selon le taux applicable.','Exemple fictif du bulletin : base de 1 650 € × taux de 5 % = 82,50 € d’impôt prélevé. Les montants de cet exemple ne sont pas une règle générale.');
 if(k==='expression')return pair('La liberté d’expression permet de partager ses idées et ses opinions dans le respect de la loi.','Exemple : chacun peut exprimer un désaccord. Cette liberté n’autorise pas la diffamation ou les appels à la haine.');
 if(k==='values'&&/liberte egalite fraternite|devise officielle/.test(core))return pair('La devise de la République française est « Liberté, Égalité, Fraternité ».','Mémo : liberté = faire des choix dans le respect de la loi ; égalité = mêmes droits ; fraternité = solidarité.');
 if(k==='values'&&/il fallait citer|sept principes/.test(core))return pair('Les principes à respecter comprennent : liberté personnelle ; liberté d’expression et de conscience ; égalité entre les femmes et les hommes ; dignité humaine ; devise et symboles de la République ; intégrité territoriale ; laïcité.','Exemple : respecter l’égalité entre les femmes et les hommes signifie reconnaître les mêmes droits à chacune et à chacun.');
 if(k.startsWith('region-')){
  const d=root.CiviSheetTerritories?.[k];if(d){
   const special=k==='region-974'?'Le Piton de la Fournaise est un volcan actif.':`La région compte ${d.departments} département${d.departments>1?'s':''}.`;
   const place=['region-971','region-972'].includes(k)?'dans les Caraïbes':k==='region-973'?'en Amérique du Sud':['region-974','region-976'].includes(k)?'dans l’océan Indien':k==='region-94'?'en mer Méditerranée':'en France métropolitaine';
   const site=n(special).includes(n(d.site))?'':` Repère du patrimoine : ${d.site}.`;
   return pair(`${d.name} se situe ${place}. Son chef-lieu est ${d.capital}.`,`${special}${site} Spécialité culinaire : ${d.food}.`);
  }
 }
 if(k==='river-seine')return pair('La Seine traverse Paris puis rejoint la Manche.','Son estuaire se situe près du Havre et de Honfleur, sur la côte normande.');
 if(k==='river-rhone')return pair('Le Rhône traverse Lyon puis rejoint la mer Méditerranée.','Il forme un delta en Camargue, dans le sud de la France.');
 if(k==='hymn')return pair('La Marseillaise est l’hymne national français, composé par Rouget de Lisle en 1792.','Début : « Allons enfants de la Patrie, le jour de gloire est arrivé ! »');
 const w=V.artwork(q);
 if(w&&k!=='rodin'){
  const p=V.pick(q).person||V.title(q),role=w.role.replace(/\.$/,'');
  return pair(p+' : '+role+'. Œuvre repère : « '+w.title+' ».',w.note);
 }
 return complete(q,sections(q),k);
}
const cache=new WeakMap();
V.sections=q=>{
 const sig=JSON.stringify([q.question,q.correct,q.context,q.explanation,(q.variants||[]).map(v=>[v.question,v.correct])]),old=cache.get(q);
 if(old?.sig===sig)return old.facts.map(f=>({...f}));
 let facts=autonomous(q);const k=V.pick(q).key;
 if(V.works[k]&&q.variants?.length>1){
  const works=[...new Map(q.variants.map(v=>V.artwork(v)).filter(Boolean).map(w=>[n(w.title),w])).values()];
  if(works.length>1){const who=V.pick(q).person||V.title(q),names=works.map(w=>'« '+w.title+' »').join(', '),notes=[...new Set(works.map(w=>w.note))];facts=pair(who+' : '+works[0].role+' Œuvres repères : '+names+'.',notes.join(' '));}
 }
 cache.set(q,{sig,facts});return facts.map(f=>({...f}));
};
V.composition=q=>({type:V.event(q)?'timeline':V.pick(q).key==='interview'?'dialogue':'mindmap',subject:V.title(q),facts:V.sections(q),visual:V.pick(q).key,sourceOnly:true});
V.semanticSelection=q=>resolve(q)||{key:V.pick(q).key,reason:'connaissance autonome'};
V.notationKey=q=>{const k=V.pick(q).key;return V.works[k]?'artist|'+k:k+'|'+V.sections(q).map(f=>n(f.text)).join('|');};
// Les œuvres gardent assez de place pour deux images non déformées.
V.rows=b=>rows(b).flatMap(row=>row.notions.length>1&&row.notions.some(q=>V.artwork(q)?.art||/^ports/.test(V.pick(q).key)||V.pick(q).key==='infractions')?row.notions.map(q=>({...row,notions:[q]})):[row]);
})(window);
