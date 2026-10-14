/* CiviCoach v64 : sélection de la notion avant son décor ; détails sourcés. */
(function(root){
'use strict';
const V=root.CiviSheetsVisual,n=s=>root.NovaSheetsRules.normal(s).replace(/œ/g,'oe'),oldPick=V.pick,oldTitle=V.title,oldSections=V.sections,oldWork=V.artwork;
const pair=(a,b)=>[{label:'À retenir',text:a},{label:'Exemple ou détail',text:b}];
const names=[['Seine','seine'],['Rhône','rhone'],['Rhin','rhin'],['Loire','loire'],['Garonne','garonne']];
function subject(q){
 const core=n(q.question+' '+q.correct),generic=/^(que |quelle reponse|quelle est cette|quel conseil|comment |qui (est|etait).*il)/.test(n(q.question));
 const context=generic?n(q.context||''):'';return {core,focus:core+' '+context,answer:n(q.correct)};
}
function resolve(q){
 const {core,focus,answer}=subject(q),person=V.portraits.find(([,name])=>answer.includes(n(name)));
 if(person&&/qui|auteur|compositeur|personnage|portrait|peintre|ecrivain/.test(n(q.question)))return null;
 const result=(key,title,theme,reason)=>({key,title,theme,reason});
 if(/declaration des droits|\bddhc\b/.test(core)||Number(q.theme)===3&&/texte/.test(core)&&/1789/.test(core))return result('ddhc','La Déclaration des droits de l’homme et du citoyen',3,'texte des droits de 1789');
 if(/abolition.*esclavage|esclavage.*aboli/.test(focus)&&!/schoelcher/.test(answer))return result('abolition','L’abolition de l’esclavage',4,'chaînes brisées');
 if(/citoyens s informent|candidats presentent|elus exercent|citoyens suivent/.test(core))return result('vote','La vie démocratique',1,'participation des citoyens');
 if(/vichy/.test(core))return result('war','Vichy et la Résistance',4,'histoire de la Seconde Guerre mondiale');
 if(/tricolore/.test(focus)&&/drapeau/.test(answer)||/^scr_rev_t1_ch03/.test(n(q.chapter).replace(/ /g,'_'))&&/^(bleu|blanc|rouge)$/.test(n(q.question)))return result('frenchflag','Le drapeau français',1,'bandes bleu blanc rouge');
 // Une chaîne de montagnes peut mentionner le Rhin sans être une fiche de fleuve.
 if(!/vosges|massif|montagne|pyrenees|alpes|jura/.test(core)){
  const mentioned=names.filter(([,key])=>new RegExp('\\b'+key+'\\b').test(core));
  if(mentioned.length===1&&(/fleuve|cours d eau|traverse paris|ou se trouve|mer du nord/.test(focus)||answer.replace(/^(le |la )/,'')===mentioned[0][1]))return result('river-'+mentioned[0][1],'Le '+mentioned[0][0],4,'fleuve identifié');
  if(mentioned.length>1&&/fleuve/.test(focus))return result('rivers','Les grands fleuves',4,'plusieurs fleuves');
 }
 if(/shoah|genocide.*juifs|extermination.*juifs/.test(focus))return result('shoah','La mémoire de la Shoah',4,'mémoire des victimes civiles');
 if(/ivg|interruption volontaire de grossesse|avortement/.test(focus))return result('ivg','L’interruption volontaire de grossesse',3,'information et accompagnement de la femme');
 if(/france travail|pole emploi/.test(focus))return result('france-travail','France Travail',5,'logo officiel');
 if(/droit de greve|\bgreve\b/.test(focus))return result('strike','Le droit de grève',3,'arrêt collectif du travail');
 if(/securite sociale/.test(core))return result('socialsecurity','La Sécurité sociale',5,'protection sociale');
 if(/decolonisation|colonis|colonie|protectorat/.test(core)&&Number(q.theme)===4)return result('decolonization','La colonisation et les indépendances',4,'carte des territoires concernés');
 if(/1905/.test(core)&&/separation|eglises|laicite/.test(focus))return result('separation1905','La séparation des Églises et de l’État',1,'séparation institutionnelle');
 if(/instruction|ecole/.test(core)&&/obligatoire|obligation|\b3 a 16\b/.test(focus)&&!/refus|sanction|amende|prison/.test(core))return result('education','L’instruction obligatoire',5,'enfant et école');
 if(/dignite humaine|chaque personne.*respect|respect.*chaque personne/.test(core)&&!/torture|esclavage|shoah/.test(core))return result('rights','Respecter chaque personne',1,'dignité humaine');
 if(/legislatives/.test(focus))return result('vote','Les élections législatives',2,'élection des députés français');
 if(/deputes|assemblee nationale/.test(core)&&/577|combien|nombre|sieges|hemicycle/.test(focus))return result('assembly-seats','Les députés de l’Assemblée nationale',2,'hémicycle vu de dessus');
 if(/premiere guerre mondiale|1914.*1918/.test(focus))return result('war','La Première Guerre mondiale',4,'histoire et commémoration');
 if(/seconde guerre mondiale|1939.*1945/.test(focus))return result('war','La Seconde Guerre mondiale',4,'histoire et commémoration');
 if(/11 novembre|8 mai|armistice|commemoration|devoir de memoire/.test(focus)&&!V.portraits.some(([,name])=>core.includes(n(name))))return result('war','Les commémorations',4,'monument et gerbe tricolore');
 return null;
}
const pickCache=new WeakMap();
V.pick=q=>{
 const signature=JSON.stringify([q.question,q.correct,q.context,q.explanation]),cached=pickCache.get(q);
 let p=cached?.signature===signature?cached.visual:null;
 if(!p){const s=resolve(q);p=s?{key:s.key,label:V.captions[s.key]||s.title,file:'assets/fiches/'+s.key+'.png',selectionReason:s.reason}:oldPick(q);pickCache.set(q,{signature,visual:p});}
 return {...p,src:root.CiviSheetsArt?.[p.key]||p.src||p.file};
};
V.title=q=>resolve(q)?.title||oldTitle(q);
V.revisionTheme=q=>resolve(q)?.theme;
Object.assign(V.captions,{'ivg':'Une femme échange avec une professionnelle de santé','strike':'Des salariés exercent pacifiquement leur droit de grève','shoah':'Une stèle, une bougie et un livre pour transmettre la mémoire des victimes de la Shoah','socialsecurity':'La protection sociale : santé, famille, retraite et risques professionnels','france-travail':'Le logo officiel de France Travail','assembly-seats':'L’hémicycle de l’Assemblée nationale vu de dessus','decolonization':'Une carte du monde situant notamment l’Algérie et l’Afrique','separation1905':'L’État et les cultes sont deux institutions distinctes'});
for(const [name,key] of names)V.captions['river-'+key]='Carte de France : le '+name+' est souligné par un tracé plus épais et son nom';
const artistic=[
 [/les miserables/,'Roman de Victor Hugo publié en 1862. Il raconte notamment le destin de Jean Valjean.','https://www.maisonsvictorhugo.paris.fr/sites/default/files/files/2022-08/dossier_presse_miserables012009_0.pdf'],
 [/tartuffe/,'Comédie de Molière sur l’hypocrisie. Une première version est jouée en 1664 ; la version autorisée est créée en 1669.','https://catalogue.bnf.fr/ark:/12148/cb11939541m'],
 [/corbeau et le renard/,'Le renard utilise la flatterie pour obtenir le fromage du corbeau. Cette fable invite à se méfier des compliments intéressés.','https://www.institutdefrance.fr/publications/le-corbeau-et-le-renard/'],
 [/joueurs de cartes/,'Cézanne représente deux hommes concentrés sur leur jeu. Il peint plusieurs tableaux sur ce thème.','https://www.musee-orsay.fr/fr/oeuvres/les-joueurs-de-cartes-1312']
];
V.artwork=q=>{
 const k=V.pick(q).key;
 if(k==='rodin')return {role:'Sculpteur français.',title:'Le Penseur',art:'thinker',note:'Créé pour La Porte de l’Enfer, Le Penseur s’appelait d’abord Le Poète et représentait Dante, auteur de La Divine Comédie.',source:'https://www.musee-rodin.fr/musee/collections/oeuvres/penseur'};
 const w=oldWork(q);if(!w)return null;const found=artistic.find(([r])=>r.test(n(q.question+' '+w.title)));return found?{...w,note:found[1],source:found[2]}:w;
};
const riverNotes={
 seine:['La Seine traverse Paris puis rejoint la Manche.','Repère : cherchez Paris, puis suivez le tracé mis en évidence vers la côte normande.'],
 loire:['La Loire traverse le centre de la France et rejoint l’océan Atlantique.','Repère : son estuaire se situe à l’ouest de Nantes, près de Saint-Nazaire.'],
 garonne:['La Garonne traverse notamment Toulouse et Bordeaux.','Avec la Dordogne, elle forme l’estuaire de la Gironde, ouvert sur l’océan Atlantique.'],
 rhone:['Le Rhône traverse Lyon et rejoint la mer Méditerranée.','Repère : son delta se situe en Camargue, dans le sud de la France.'],
 rhin:['Le Rhin longe une partie de la frontière entre la France et l’Allemagne.','Repère : il passe à l’est de l’Alsace et rejoint la mer du Nord par les Pays-Bas.']
};
function specific(q,k){
 const {core,focus}=subject(q);
 if(k==='ddhc')return pair('La Déclaration des droits de l’homme et du citoyen est adoptée en 1789, pendant la Révolution française.','DDHC = Déclaration des droits de l’homme et du citoyen. Elle affirme notamment la liberté et l’égalité en droits.');
 if(k==='abolition'&&/esclavage/.test(focus))return pair('En 1848, l’esclavage est définitivement aboli dans les colonies françaises.','Le décret du 27 avril 1848 est porté notamment par Victor Schœlcher. Les chaînes brisées représentent la fin de l’esclavage.');
 if(k==='frenchflag')return pair('Le drapeau français comporte trois bandes verticales : bleu, blanc et rouge.','Mémo BBR : bleu près du mât, blanc au centre, rouge à l’autre extrémité.');
 if(k==='vote'&&/citoyens s informent|candidats presentent|elus exercent|citoyens suivent/.test(core))return pair(q.question+'.','Exemple : les citoyens comparent les projets avant de voter, puis suivent l’action des représentants élus.');
 if(k==='war'&&/vichy/.test(core))return pair('De 1940 à 1944, le régime de Vichy collabore avec l’Allemagne nazie. Des résistants s’opposent à l’Occupation.','Repère : la Résistance rassemble des actions et des mouvements différents. Jean Moulin contribue à leur union.');
 if(k.startsWith('river-'))return pair(...riverNotes[k.slice(6)]);
 if(k==='rivers')return pair('Parmi les grands fleuves : la Seine, la Loire, la Garonne, le Rhône et le Rhin.','Un fleuve se jette dans la mer. La carte permet de comparer leurs tracés ; chaque nom est placé près du fleuve concerné.');
 if(k==='ivg'){
  if(/delai|semaine|mineure|autorisation|rembourse|consentement/.test(focus)){
   const source=(q.explanation||[]).join(' '),main=source||q.correct;
   return pair(main,'IVG = interruption volontaire de grossesse. Une professionnelle de santé peut informer la femme sur les conditions applicables à sa situation.');
  }
  return pair('IVG = interruption volontaire de grossesse. Une femme peut y recourir dans les conditions prévues par la loi.','Depuis mars 2024, la liberté de recourir à l’IVG est garantie par la Constitution. Une professionnelle de santé peut informer et accompagner la femme.');
 }
 if(k==='strike')return pair('La grève est un arrêt collectif et concerté du travail pour défendre des revendications professionnelles.','Exemple : des salariés cessent ensemble le travail pour demander de meilleures conditions de travail. Les règles varient selon le secteur.');
 if(k==='shoah')return pair('La Shoah est le génocide des Juifs d’Europe par le régime nazi et ses collaborateurs pendant la Seconde Guerre mondiale.','Étudier cette histoire permet de transmettre la mémoire des victimes et de lutter contre l’antisémitisme. Le Mémorial de la Shoah conserve notamment des archives et des noms de victimes.');
 if(k==='socialsecurity')return pair('La Sécurité sociale est créée en France en 1945. Elle protège contre différents risques au cours de la vie.','Exemples : maladie, vieillesse, charges familiales, accidents du travail. La solidarité participe au financement de cette protection.');
 if(k==='france-travail')return pair('France Travail accompagne les personnes dans leur recherche d’emploi et aide les entreprises à recruter.','Exemple : un conseiller aide à préparer une candidature ou à construire un projet de formation. Les allocations chômage dépendent de conditions particulières.');
 if(k==='decolonization'){
  if(/algerie/.test(focus))return pair('L’Algérie a été colonisée par la France. Elle devient indépendante en 1962.','La décolonisation désigne l’accès à l’indépendance de territoires colonisés. Sur la carte, l’Algérie est mise en évidence en Afrique du Nord.');
  return pair(String(q.correct).length>20?q.correct:'Après la Seconde Guerre mondiale, la décolonisation française concerne notamment l’Afrique.','Exemple : l’Algérie devient indépendante en 1962. La carte situe l’Afrique et l’Algérie ; les statuts et les dates diffèrent selon les territoires.');
 }
 if(k==='separation1905')return pair('La loi du 9 décembre 1905 organise la séparation des Églises et de l’État.','Elle garantit la liberté de conscience et le libre exercice des cultes dans le respect de l’ordre public. La séparation ne signifie pas que les religions sont interdites.');
 if(k==='assembly-seats')return pair('L’Assemblée nationale compte 577 députés élus au suffrage universel direct.','Les sièges sont disposés en hémicycle : une forme de demi-cercle. Les députés participent au vote des lois et au contrôle du gouvernement.');
 if(k==='vote'&&/legislatives/.test(focus))return pair('Les élections législatives servent à élire les députés de l’Assemblée nationale.','Le mandat est normalement de cinq ans, mais une dissolution peut l’écourter. À distinguer : les élections européennes élisent les députés du Parlement européen.');
 if(k==='education'&&/instruction|ecole/.test(core)&&/obligatoire|\b3 a 16\b/.test(focus)&&!/refus|amende/.test(core))return pair('En France, l’instruction est obligatoire de 3 à 16 ans pour les enfants qui y résident.','Instruction = apprendre. L’école est le mode habituel ; l’instruction dans la famille nécessite une autorisation et reste soumise à des conditions.');
 if(k==='rights'&&/dignite humaine|chaque personne.*respect|respect.*chaque personne/.test(core))return pair('La dignité humaine signifie que chaque personne mérite le respect.','Exemple : accueillir une personne avec respect, quelle que soit son origine, sa situation ou son handicap.');
 if(k==='war'){
  if(/11 novembre|armistice/.test(focus))return pair('Le 11 novembre commémore l’armistice de 1918, qui met fin aux combats de la Première Guerre mondiale.','Lors d’une cérémonie, une gerbe peut être déposée devant le monument aux morts. Cette date rend aussi hommage à tous les morts pour la France.');
  if(/8 mai/.test(focus))return pair('Le 8 mai 1945 marque la victoire des Alliés sur l’Allemagne nazie et la fin de la guerre en Europe.','La guerre mondiale continue en Asie jusqu’en septembre 1945. Le 8 mai est une journée de commémoration en France.');
  if(/premiere guerre mondiale|1914.*1918/.test(focus))return pair('La Première Guerre mondiale se déroule de 1914 à 1918.','Repère chronologique : 1914, début de la guerre ; 11 novembre 1918, armistice. Les monuments aux morts transmettent la mémoire des victimes.');
  if(/seconde guerre mondiale|1939.*1945/.test(focus))return pair('La Seconde Guerre mondiale se déroule de 1939 à 1945.','Repères : 8 mai 1945, fin de la guerre en Europe ; septembre 1945, fin de la guerre en Asie.');
 }
 if(k==='rodin')return pair('Auguste Rodin est un sculpteur français. Son Penseur représente un homme absorbé dans sa réflexion.','Créé pour La Porte de l’Enfer, Le Penseur s’appelait d’abord Le Poète. Il représentait Dante, auteur de La Divine Comédie.');
 const w=V.artwork(q);if(w&&w.note&&!/^oeuvre de/.test(n(w.note)))return pair((V.pick(q).person||V.title(q))+' : '+w.role+' Œuvre repère : « '+w.title+' ».',w.note);
 return null;
}
// Exemples pédagogiques explicitement signalés ; faits supplémentaires référencés.
const details={
 coq:'Le saviez-vous ? En latin, gallus signifie à la fois « coq » et « gaulois ». Ce jeu de mots explique l’association du coq à la France.',
 degaulle:'Repère : élu en 1958 par de grands électeurs, Charles de Gaulle est réélu en 1965 au suffrage universel direct.',
 louis16:'Repère : Louis XVI est exécuté à Paris le 21 janvier 1793, sur l’actuelle place de la Concorde.',
 napoleon:'Le sacre de Napoléon Ier a lieu à Notre-Dame de Paris le 2 décembre 1804. Jacques-Louis David représente cette cérémonie dans un tableau.',
 pompidou:'Repère : Georges Pompidou exerce la présidence de la République de 1969 à 1974.',
 schoelcher:'Le décret du 27 avril 1848 abolit l’esclavage dans les colonies et possessions françaises. Schœlcher participe à sa préparation comme sous-secrétaire d’État aux colonies.',
 mitterrand:'Repère : le garde des Sceaux Robert Badinter défend le projet d’abolition de la peine de mort en 1981.',
 un:'ONU = Organisation des Nations unies. Elle est officiellement instituée le 24 octobre 1945, après la Seconde Guerre mondiale.',
 ferry:'Mémo GLO : école primaire publique gratuite, laïque ; instruction obligatoire. Les principales lois Ferry datent de 1881 et 1882.',
 hymn:'Exemple : La Marseillaise est jouée lors de cérémonies officielles pour représenter la France.',
 values:'Exemple : fraternité = solidarité ; aider quelqu’un qui rencontre une difficulté en est une illustration.',
 accessibility:'Exemple : un accompagnement adapté peut aider un élève en situation de handicap à apprendre avec les autres.',
 education:'Exemple : un enfant apprend à lire, à écrire et à compter pendant sa scolarité.',
 conscience:'Exemple : une personne peut croire, ne pas croire ou changer de religion. Les convictions des autres doivent être respectées.',
 secularagent:'Exemple : un agent public accueille les usagers sans favoriser une religion.',
 vote:'Repère : l’isoloir protège le secret du vote ; l’urne reçoit le bulletin dans son enveloppe.',
 equality:'Exemple : un recrutement doit porter sur les compétences nécessaires au poste, sans discrimination.',
 defense:'Exemple : une personne peut être assistée par un avocat pour défendre ses droits, selon la procédure applicable.',
 privacy:'Exemple : ne publiez pas une photo reconnaissable d’une personne sans son accord.',
 tax:'Mémo : déclarer ses revenus permet à l’administration de calculer l’impôt selon la situation du foyer.',
 bins:'Exemple : séparez les emballages recyclables des autres déchets en suivant les consignes locales.',
 environment:'Exemple : réduire les déchets et préserver l’eau sont des gestes de protection de l’environnement.',
 euro:'Repère : les pièces et billets en euros sont mis en circulation le 1er janvier 2002.',
 constitution:'Repère : la Constitution organise les institutions et encadre leurs pouvoirs.',
 parliament:'AN = Assemblée nationale. Avec le Sénat, elle forme le Parlement français.',
 senate:'Le Sénat et l’Assemblée nationale forment les deux chambres du Parlement français.',
 president:'PR = président de la République. Il nomme le Premier ministre.',
 government:'PM = Premier ministre. Il dirige l’action du gouvernement.',
 townhall:'Exemple : la mairie intervient notamment pour l’état civil, comme l’enregistrement d’une naissance.',
 emergency:'Repère : le 112 est le numéro d’urgence européen. Donnez le lieu et décrivez la situation.',
 vitale:'CPAM = Caisse primaire d’assurance maladie. La carte Vitale facilite la transmission des informations nécessaires au remboursement.',
 pay:'Brut = avant les retenues ; net = après les retenues indiquées sur le bulletin de paie.',
 business:'Exemple : avant de créer une entreprise, vérifiez les démarches et les conditions liées à votre situation.',
 factory:'Exemple : employeur et salarié doivent respecter les règles applicables au travail et à la sécurité.',
 worker:'Exemple : pour travailler en sécurité, utilisez les équipements de protection requis pour votre poste.',
 marriage:'Exemple : chaque personne doit consentir librement au mariage. Le mariage forcé est interdit.',
 'marriage-men':'En France, le mariage civil est ouvert aux couples de même sexe dans les conditions prévues par la loi.',
 'marriage-women':'En France, le mariage civil est ouvert aux couples de même sexe dans les conditions prévues par la loi.',
 divorce:'Exemple : la séparation des parents ne supprime pas leurs responsabilités envers leur enfant.',
 family:'Exemple : les parents doivent protéger la santé, la sécurité et l’éducation de leur enfant.',
 justice:'Repère : les infractions se classent par gravité : crime > délit > contravention.',
 police:'Exemple : en cas de vol, une victime peut déposer plainte auprès de la police ou de la gendarmerie.',
 expression:'Exemple : exprimer une opinion est une liberté ; cela n’autorise pas la diffamation ou les appels à la haine.',
 press:'Exemple : un journaliste informe le public dans le respect de la loi.',
 jurors:'Repère : des citoyens tirés au sort peuvent être appelés à participer à un jury d’assises, sous conditions.',
 deathpenalty:'Repère : l’abolition de la peine de mort en France date de 1981.',
 abolition:'Exemple historique : en 1848, l’esclavage est aboli dans les colonies françaises.',
 solidarity:'Exemple : aider un voisin dans une difficulté concrète est un geste de solidarité.',
 association:'Exemple : des bénévoles peuvent s’organiser dans une association pour une action commune.',
 housing:'Exemple : un bail précise les engagements du locataire et du propriétaire.',
 driving:'Exemple : le conducteur et les passagers doivent respecter les règles de sécurité routière.',
 residence:'Exemple : avant une démarche administrative, vérifiez les documents nécessaires pour votre situation.',
 internet:'Exemple : vérifiez la source d’une information avant de la partager sur les réseaux sociaux.',
 language:'Repère : le français est la langue de la République, selon l’article 2 de la Constitution.',
 rights:'Exemple : les droits s’exercent dans le respect des droits des autres.',
 nationalday:'Repère : le 14 juillet est la fête nationale française.',
 geography:'Mémo : métropole et outre-mer forment le territoire français ; repérez d’abord le lieu nommé dans la notion.',
 francemap:'Mémo : une région regroupe plusieurs départements ; un département regroupe plusieurs communes.',
 mountains:'Repère : une chaîne de montagnes rassemble plusieurs reliefs ; situez celle qui est nommée dans la notion.',
 europe:'UE = Union européenne. Ses institutions ont des rôles différents.',
 euparliament:'Le Parlement européen est élu par les citoyens de l’Union européenne. Il participe à l’adoption des lois européennes.',
 eucommission:'La Commission européenne propose des textes et veille à l’application du droit de l’Union européenne.',
 history:'Repère : situez d’abord la date, puis l’événement associé dans une frise chronologique.',
 daily:'Exemple : pour une démarche, identifiez le service concerné et les pièces nécessaires.',
 health:'Exemple : une professionnelle ou un professionnel de santé peut expliquer le soin proposé et répondre aux questions.',
 louvre:'Repère : le Louvre est un musée situé à Paris ; il conserve notamment La Joconde.',
 sports:'Exemple : la pratique sportive respecte des règles communes et les autres participants.',
 gastronomy:'Repère : les spécialités culinaires varient selon les régions françaises.',
 travel:'Exemple : se déplacer librement implique aussi de respecter les règles applicables au voyage.'
};
function improve(q,f,k){
 const main=f[0].text.trim(),bad=/^Pour mémoriser|^Situation\s*:|^Œuvre de /i.test(f[1].text),duplicate=n(f[1].text).includes(n(main))&&n(main).length>20;
 if(!bad&&!duplicate)return f;
 // Une explication complète propre à cette question prime sur un exemple générique.
 const candidates=(q.explanation||[]).flatMap(x=>String(x).split(/(?<=[.!])\s+/)).filter(x=>x.length>25&&n(x)!==n(main)&&!n(main).includes(n(x))&&!n(x).includes(n(main))&&!/[?]/.test(x));
 if(candidates.length)return pair(main,candidates.slice(0,2).join(' '));
 const sentences=main.split(/(?<=[.!])\s+/);if(sentences.length>1&&sentences[0].length>35&&sentences.slice(1).join(' ').length>30)return pair(sentences[0],sentences.slice(1).join(' '));
 const d=details[k];if(d&&!n(main).includes(n(d)))return pair(main,d);
 // Dernier recours : utiliser le repère source, plutôt que recopier une question.
 const memory=String(q.memory||'').replace(/^Retenez\s*:?\s*/i,'').replace(/[→←↑↓↔➜➔]/g,' : ').trim();
 if(memory.length>20&&n(memory)!==n(main)&&!n(main).includes(n(memory)))return pair(main,'Mémo : '+memory);
 if(k.startsWith('region-'))return pair(main,'Repère : la région concernée est mise en évidence sur la carte. Situez-la par rapport aux régions voisines.');
 // Source explicite : conserver le fait donné, présenté comme une association utile.
 const answer=String(q.correct||'').replace(/[→←↑↓↔➜➔]/g,' : ').trim();
 return pair(main,'Repère associé : '+answer);
}
const sectionCache=new WeakMap();
V.sections=q=>{
 const signature=JSON.stringify([q.question,q.correct,q.context,q.explanation,q.memory]),cached=sectionCache.get(q);
 if(cached?.signature===signature)return cached.facts.map(f=>({...f}));
 const k=V.pick(q).key,facts=specific(q,k)||improve(q,oldSections(q),k);
 sectionCache.set(q,{signature,facts});return facts.map(f=>({...f}));
};
V.semanticSelection=q=>resolve(q)||{key:V.pick(q).key,reason:'sélection spécifique conservée'};
V.composition=q=>({type:V.event(q)?'timeline':V.pick(q).key==='interview'?'dialogue':'mindmap',subject:V.title(q),facts:V.sections(q),visual:V.pick(q).key,sourceOnly:true});
})(window);
