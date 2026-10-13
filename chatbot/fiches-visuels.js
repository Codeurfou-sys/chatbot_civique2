'use strict';
(function(root){
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/œ/g,'oe').replace(/[^a-z0-9]+/g,' ').trim();
const portraits=[['mitterrand','François Mitterrand'],['pompidou','Georges Pompidou'],['camus','Albert Camus'],['napoleon','Napoléon'],['louis16','Louis XVI'],['moliere','Molière'],['baudelaire','Charles Baudelaire'],['sand','George Sand'],['beauvoir','Simone de Beauvoir'],['cezanne','Paul Cézanne'],['chagall','Marc Chagall'],['baker','Joséphine Baker'],['piaf','Édith Piaf'],['lafontaine','Jean de La Fontaine'],['moulin','Jean Moulin'],['yourcenar','Marguerite Yourcenar'],['rodin','Auguste Rodin'],['berlioz','Hector Berlioz'],['renoir','Auguste Renoir'],['hugo','Victor Hugo'],['curie','Marie Curie'],['ferry','Jules Ferry'],['schoelcher','Victor Schœlcher'],['rouget','Rouget de Lisle'],['degaulle','Charles de Gaulle'],['louis14','Louis XIV'],['voltaire','Voltaire'],['monet','Claude Monet'],['debussy','Claude Debussy'],['veil','Simone Veil'],['delacroix','Eugène Delacroix']];
const captions={president:'Le président de la République',government:'L’action du gouvernement',parliament:'L’Assemblée nationale',rights:'Les droits et le respect des autres',tax:'La déclaration des revenus',worker:'Le travail déclaré',vitale:'La carte Vitale et l’Assurance maladie',bins:'Le tri et les déchets',bastille:'La prise de la Bastille',education:'Apprendre et aller à l’école',geography:'Se repérer sur le territoire',vote:'Le vote et la démocratie',values:'Les symboles de la République',justice:'Le droit et la justice',daily:'La vie quotidienne',culture:'Le patrimoine et la culture',history:'Les repères historiques',health:'Les soins et la santé',europe:'Les institutions européennes'};
Object.assign(captions,{"matignon": "L’hôtel de Matignon", "senate": "Le palais du Luxembourg, siège du Sénat", "constitution": "Un livre représentant la Constitution", "townhall": "Une mairie", "prefect": "Un préfet dans son bureau", "language": "Deux personnes échangent autour d’un livre", "emergency": "Appeler les secours", "family": "Des parents et leur enfant", "housing": "Signer un bail locatif", "driving": "Un conducteur portant sa ceinture", "war": "Un monument de commémoration", "abolition": "Des chaînes brisées", "louvre": "Le musée du Louvre", "notredame": "Notre-Dame de Paris", "internet": "Une personne utilise son téléphone", "euro": "La monnaie en euros", "environment": "Planter un arbre", "pay": "Un bulletin de salaire", "gastronomy": "Des spécialités françaises", "lascaux": "Des peintures préhistoriques", "sports": "Des joueurs de football", "nationalday": "Le drapeau français et une fête nationale", "equality": "Une femme et un homme représentés à égalité", "babycare": "Un parent et son bébé", "digitalservice": "Une démarche sur ordinateur", "residence": "Un titre de séjour anonyme", "association": "Des bénévoles dans une association", "christmas": "Un arbre de Noël", "hymn": "Une partition représentant l’hymne national"});

function legacyPick(q){
 // Never match a name in distractors or an unrelated chapter example.
 const core=norm([q.question,q.correct].filter(Boolean).join(' ')),generic=!core||/^(qui (est|etait).* (il|elle)|quel est ce|quel est cet|laquelle|lequel|que faites|que fait|que lui|que repond|quelle attitude|quelle reponse|comment reag)/.test(norm(q.question)),text=core+(generic?' '+norm(q.context):'');let key;
 const matches=(value,name)=>value.includes(norm(name))||(name.split(' ').length>1&&new RegExp('\\b'+norm(name).split(' ').at(-1)+'\\b').test(value));
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
 // Resolve the actual subject before any broad thematic fallback.
 const detail=norm([q.question,q.correct,q.context,q.notion].filter(Boolean).join(' '));
 const semantic=[
 ['matignon',/matignon/],['senate',/senat|senateur/],['townhall',/maire|mairie|commune|municipal/],['prefect',/prefet/],
 ['emergency',/samu|pompier|urgence|secours|personne en danger|assistance.*danger/],
 ['constitution',/constitution|republique indivisible|ve republique|separation des pouvoirs|regime politique/],
 ['christmas',/noel|25 decembre/],['hymn',/marseillaise|hymne/],['nationalday',/14 juillet|fete nationale|defile militaire/],['war',/guerre mondiale|shoah|armistice|debarquement|8 mai|11 novembre|nazisme|resistance/],
 ['abolition',/esclavage|traite des.*humain|abolition|peine de mort|torture/],
 ['louvre',/louvre|joconde/],['notredame',/notre dame/],['lascaux',/lascaux|prehistoi/],
 ['language',/langue|francophonie|francais.*officiel/],['euro',/euro|monnaie/],
 ['internet',/reseaux sociaux|internet|numerique|cyber/],['housing',/bail|locatai|proprietai|logement|loyer/],
 ['driving',/condui|voiture|automobile|ceinture|stationnement|permis/],['residence',/titre de sejour|naturalisation|nationalite|engagement.*contrat/],
 ['marriage',/marie|maries|divorce|repudiation|polygam/],['family',/naissance|etat civil|parents|parentalite|enfant|famille|paternite/],
 ['health',/avort|ivg|grossesse|vaccin|sante|medecin|soin/],['pay',/smic|bulletin|salaire|paie|cotisation/],
 ['environment',/environnement|arbre|nature|preserv|biodiversite/],['association',/association|benevol|solidar/],
 ['sports',/sport|football/],['gastronomy',/gastronomie|specialite.*regional|plat traditionnel|cassoulet|choucroute|boeuf bourguignon|bouillabaisse|quiche|tarte|brie|fromage/],
 ['education',/brevet|baccalaureat|diplome|colleg|lycee|maternelle|scolar|instruction|cantine|ecole/],
 ['geography',/nations unies|\bonu\b|region|departement|fleuve|massif|montagne|territoire|continent|ocean|capitale|paris|marseille|reunion|colonisation|algerie/],
 ['vote',/elect|suffrage|souverain|peuple|parti politique|referendum|urne|bulletins|isoloir/],
 ['bins',/dechet|encombrant|carton|recycl|emballage|machine a laver/],
 ['conscience',/laique|laicite|neutralite|religion|eglise|conviction|conscience/],
 ['justice',/tribunal|judiciaire|infractions|contravention|delit|crime|violence|avocat|juridiction|vol /],
 ['europe',/europeen|cee|ceca|maastricht|bruxelles|traite.*rome/],['equality',/egalite|discrimin|egal|femme.*homme/],
 ['daily',/demarche|service public|administrati/]
 ];
 // Specific missing subjects also override a generic illustration selected earlier.
 const overrides=new Set(['repere','rights','values','daily','history','culture']);
 if(overrides.has(key)){const match=semantic.find(([,test])=>test.test(detail));key=match?.[0]||({1:'values',2:'constitution',3:'rights',4:'history',5:'daily'})[Number(q.theme)]||'daily';}
 if(/matignon/.test(detail))key='matignon';
 if(/senat|senateur/.test(detail)&&!/assemblee nationale/.test(norm(q.question+' '+q.correct)))key='senate';
 const label=({solidarity:'Des voisins s’entraident au quotidien',marriage:'Un marié et une mariée en tenue de cérémonie',conscience:'Deux personnes échangent et respectent leurs convictions',elysee:'Le palais de l’Élysée',interview:'Un employeur et un candidat en entretien',ddhc:'La Déclaration des droits de l’homme et du citoyen',marianne:'Un buste de Marianne'})[key]||(key==='factory'?'Une personne au travail dans un atelier':key==='business'?'Une personne dans son entreprise':key==='eiffel'?'La tour Eiffel':key==='swissflag'?'Le drapeau suisse':key==='frenchflag'?'Le drapeau français':person?'Portrait dessiné de '+person[1]:captions[key]);
 return {key,label:label||'Repère pédagogique',src:root.CiviSheetsArt?.[key]||'assets/fiches/'+key+'.png',file:'assets/fiches/'+key+'.png',person:person?.[1]||null};
}
const works={"debussy": {"title": "Clair de lune", "note": "Pièce pour piano de la Suite bergamasque. Le titre reprend celui d’un poème de Verlaine.", "art": "piano", "source": "https://mediatheque.philharmoniedeparis.fr/catalogue/doc/ALOES/0083839", "role": "Compositeur français."}, "berlioz": {"title": "Symphonie fantastique", "note": "Une œuvre pour orchestre en cinq mouvements.", "art": "orchestra", "source": "https://philharmoniedeparis.fr/fr/magazine/series/les-cles-du-classique/les-cles-du-classique-12-la-symphonie-fantastique-de-berlioz", "role": "Compositeur français."}, "camus": {"title": "L’Étranger", "note": "Roman publié en 1942.", "art": null, "source": "https://catalogue.bnf.fr/ark:/12148/cb31902899n", "role": "Écrivain et philosophe."}, "hugo": {"title": "Notre-Dame de Paris", "note": "Roman publié en 1831.", "art": "notredame", "source": "https://catalogue.bnf.fr/ark:/12148/cb119675961", "role": "Écrivain français."}, "moliere": {"title": "Le Malade imaginaire", "note": "Comédie-ballet : texte de Molière, musique de Marc-Antoine Charpentier.", "art": "theatre", "source": "https://www.comedie-francaise.fr/actualites/historique-du-malade-imaginaire", "role": "Écrivain et dramaturge."}, "baudelaire": {"title": "Les Fleurs du mal", "note": "Recueil de poèmes publié en 1857.", "art": null, "source": "https://catalogue.bnf.fr/ark:/12148/cb11947965f", "role": "Poète."}, "lafontaine": {"title": "Les Fables", "note": "Exemple : Le Corbeau et le Renard.", "art": "crowfox", "source": "https://salleovale.bnf.fr/fr/selections-thematiques/le-corbeau-et-le-renard-et-autres-fables-nouv-ed-jean-de-la-fontaine-mises", "role": "Poète et auteur de fables."}, "sand": {"title": "La Mare au diable", "note": "Roman publié en 1846.", "art": null, "source": "https://catalogue.bnf.fr/ark:/12148/cb12101484t", "role": "Écrivaine."}, "beauvoir": {"title": "Le Deuxième Sexe", "note": "Essai publié en 1949.", "art": null, "source": "https://catalogue.bnf.fr/ark:/12148/cb12048552t", "role": "Écrivaine et philosophe."}, "yourcenar": {"title": "Mémoires d’Hadrien", "note": "Roman publié en 1951.", "art": null, "source": "https://catalogue.bnf.fr/ark:/12148/cb12244910c", "role": "Écrivaine."}, "voltaire": {"title": "Candide", "note": "Conte philosophique publié en 1759.", "art": null, "source": "https://catalogue.bnf.fr/ark:/12148/cb11957478m.public", "role": "Écrivain et philosophe."}, "piaf": {"title": "La Vie en rose", "note": "Paroles d’Édith Piaf ; musique de Louiguy.", "art": null, "source": "https://catalogue.bnf.fr/ark:/12148/cb39608928f", "role": "Chanteuse."}, "baker": {"title": "J’ai deux amours", "note": "Joséphine Baker interprète cette chanson ; elle n’en est pas la compositrice.", "art": null, "source": "https://catalogue.bnf.fr/ark:/12148/cb476443003", "role": "Artiste de scène."}, "monet": {"title": "Les Nymphéas", "note": "De grandes compositions de Monet sont conservées au musée de l’Orangerie.", "art": "nympheas", "source": "https://www.musee-orangerie.fr/fr/collection/les-nympheas-de-claude-monet/histoire-du-cycle-des-nympheas", "role": "Peintre."}, "rodin": {"title": "Le Penseur", "note": "Une sculpture d’Auguste Rodin.", "art": "penseur", "source": "https://www.musee-rodin.fr/musee/collections/oeuvres/penseur", "role": "Sculpteur."}, "chagall": {"title": "Le plafond du palais Garnier", "note": "Le plafond peint par Chagall est inauguré en 1964.", "art": "garnier", "source": "https://www.operadeparis.fr/visites/palais-garnier/individuels", "role": "Peintre."}, "delacroix": {"title": "La Liberté guidant le peuple", "note": "Tableau lié à la révolution de juillet 1830, pas à 1789.", "art": "liberty1830", "source": "https://www.louvre.fr/decouvrir/les-parcours-de-visite/chefs-d-oeuvre-du-louvre/romantisme-actualite-et-sensualite", "role": "Peintre."}, "cezanne": {"title": "La Montagne Sainte-Victoire", "note": "Un paysage peint par Paul Cézanne.", "art": "saintevictoire", "source": "https://www.musee-orsay.fr/fr/oeuvres/la-montagne-sainte-victoire-201060", "role": "Peintre."}, "renoir": {"title": "Bal du moulin de la Galette", "note": "Tableau peint en 1876.", "art": "galette", "source": "https://www.musee-orsay.fr/fr/oeuvres/bal-du-moulin-de-la-galette-497", "role": "Peintre."}, "rouget": {"title": "La Marseillaise", "note": "Composée en 1792 sous le titre Chant de guerre pour l’armée du Rhin.", "art": "hymn", "source": "https://www.elysee.fr/la-presidence/la-marseillaise-de-rouget-de-lisle", "role": "Compositeur."}};
const regionSubjects=[{"key": "region-11", "name": "Île-de-France", "norm": "ile de france"}, {"key": "region-24", "name": "Centre-Val de Loire", "norm": "centre val de loire"}, {"key": "region-27", "name": "Bourgogne-Franche-Comté", "norm": "bourgogne franche comte"}, {"key": "region-28", "name": "Normandie", "norm": "normandie"}, {"key": "region-32", "name": "Hauts-de-France", "norm": "hauts de france"}, {"key": "region-44", "name": "Grand Est", "norm": "grand est"}, {"key": "region-52", "name": "Pays de la Loire", "norm": "pays de la loire"}, {"key": "region-53", "name": "Bretagne", "norm": "bretagne"}, {"key": "region-75", "name": "Nouvelle-Aquitaine", "norm": "nouvelle aquitaine"}, {"key": "region-76", "name": "Occitanie", "norm": "occitanie"}, {"key": "region-84", "name": "Auvergne-Rhône-Alpes", "norm": "auvergne rhone alpes"}, {"key": "region-93", "name": "Provence-Alpes-Côte d'Azur", "norm": "provence alpes cote d azur"}, {"key": "region-94", "name": "Corse", "norm": "corse"}, {"key": "region-971", "name": "Guadeloupe", "norm": "guadeloupe"}, {"key": "region-972", "name": "Martinique", "norm": "martinique"}, {"key": "region-973", "name": "Guyane", "norm": "guyane"}, {"key": "region-974", "name": "La Réunion", "norm": "la reunion"}, {"key": "region-976", "name": "Mayotte", "norm": "mayotte"}];

const preciseTitles={montmichel:'Le Mont-Saint-Michel',deathpenalty:'Peine de mort : abolie',jurors:'Les jurés d’assises',euconstruction:'Construire l’Europe',eutreaty:'Le traité de Maastricht',eucitizenship:'La citoyenneté européenne',press:'La liberté de la presse',expression:'La liberté d’expression',divorce:'Parents séparés et enfants',secularagent:'Un service public neutre',un:'L’ONU',rivers:'Les fleuves français',mountains:'Les montagnes françaises',travel:'La liberté de circulation',euparliament:'Le Parlement européen',eucommission:'La Commission européenne',ecb:'La Banque centrale européenne','marriage-men':'Le mariage civil','marriage-women':'Le mariage civil',francemap:'Les régions françaises'};
function target(q){const question=norm(q.question),answer=norm(q.correct),generic=!question||/^(qui (est|etait) (il|elle)|quel est (ce|cet|le nom de ce)|quelle est (cette|la)|de quelle|lequel|laquelle|que |comment |quelle (attitude|reponse|sanction)|peut (il|elle)|doit (il|elle))/.test(question);return {question,answer,core:(question+' '+answer).trim(),context:generic?norm(q.context||q.example?.question):''};}
function personFor(q){const t=target(q),aliases={louis16:['louis xvi','louis 16'],louis14:['louis xiv','louis 14'],lafontaine:['jean de la fontaine','la fontaine'],rouget:['rouget de lisle'],moulin:['jean moulin'],sand:['george sand'],degaulle:['charles de gaulle','de gaulle'],beauvoir:['simone de beauvoir','beauvoir']};for(const value of [t.answer,t.question,t.context])for(const p of portraits){const terms=aliases[p[0]]||[norm(p[1]),norm(p[1]).split(' ').at(-1)];if(terms.some(a=>(' '+value+' ').includes(' '+a+' ')))return p;}return null;}
function pick(q){const t=target(q),person=personFor(q);let key=null;const resolve=value=>{const rules=[
 ['travel',/liberte de circulation|se deplacer librement/],['euparliament',/siege.*parlement europeen|parlement europeen.*siege/],['eucommission',/siege.*commission europeenne|commission europeenne.*siege/],['ecb',/banque centrale europeenne|\bbce\b/],
 ['montmichel',/mont saint michel/],['deathpenalty',/peine de mort|guillotine/],['abolition',/esclavage|traite des.*humain/],['jurors',/jure|jury|cour d assises/],['elysee',/palais de l elysee|residence.*president|president.*residence/],['matignon',/matignon/],
 ['orchestra',/hymne.*europe|ode a la joie/],['eucitizenship',/citoyennete europeenne|citoyen.*union europeenne|citoyen europeen/],['eutreaty',/maastricht/],['euconstruction',/construction.*europe|pays.*fondateur|fondateur.*pays|traite.*rome|\bceca\b|\bcee\b/],['un',/nations unies|\bonu\b/],['euro',/\beuros?\b|monnaie unique/],
 ['divorce',/divorc|garde.*enfant|residence.*enfant|autorite parentale/],['press',/liberte de la presse|journalis|liberte.*presse/],['expression',/liberte d expression/],['secularagent',/neutralite.*agent|agent.*neutralite|agent public|fonctionnaire.*religion/],['police',/police|policier|gendarme/],['emergency',/numero.*(urgence|secours|pompier|samu)|\b112\b/],['rivers',/fleuve|\bloire\b|\bseine\b|\brhone\b|\bgaronne\b|\brhin\b/],['mountains',/massif|chaine.*montagne|pyrenees|alpes|vosges|jura/],['coq',/coq gaulois|\ble coq\b/],['arctriomphe',/arc de triomphe/]];return rules.find(([,r])=>r.test(value))?.[0]||null;};
const directRegion=regionSubjects.find(r=>(' '+t.answer+' ').includes(' '+r.norm+' ')&&(/region/.test(t.question)||t.answer===r.norm||t.answer==='la '+r.norm||t.answer==='en '+r.norm));key=directRegion?directRegion.key:resolve(t.core);if(directRegion)preciseTitles[key]=directRegion.name;if(person&&(!key||(/^(qui|quel.*(president|ministre|personnage|auteur|compositeur|artiste))/.test(t.question)&&personFor({correct:q.correct})?.[0]===person[0])))key=person[0];if(!key&&t.context)key=resolve(t.context);if(!key&&person)key=person[0];if(!key)key=legacyPick({...q,context:t.context}).key;
if(key==='geography'&&/loi|liberte|droit|interdi|autorise/.test(t.core)&&!/(fleuve|massif|region|departement|continent|geograph|ile|ocean|capitale)/.test(t.core))key='justice';
if(key==='euro'&&!/\beuros?\b|monnaie/.test(t.core+' '+t.context))key='europe';
if(key==='marriage'&&/divorc|autorite parentale|garde.*enfant/.test(t.core+' '+t.context))key='divorce';
if(key==='marriage'&&/deux hommes|homme.*homme/.test(t.core+' '+t.context))key='marriage-men';if(key==='marriage'&&/deux femmes|femme.*femme/.test(t.core+' '+t.context))key='marriage-women';
if(key==='geography'){const r=regionSubjects.find(r=>(' '+t.answer+' ').includes(' '+r.norm+' '));if(r){key=r.key;preciseTitles[key]=r.name;}else if(Number(q.theme)===4&&/france|francais|region|departement|territoire national/.test(t.core))key='francemap';}
const p=portraits.find(p=>p[0]===key),base=legacyPick({...q,context:''});return {key,label:p?'Portrait dessiné de '+p[1]:preciseTitles[key]||captions[key]||(key===base.key?base.label:'Repère pédagogique'),src:root.CiviSheetsArt?.[key]||'assets/fiches/'+key+'.png',file:'assets/fiches/'+key+'.png',person:p?.[1]||null};}
function artwork(q){const p=pick(q),w=works[p.key];if(!w)return null;const quoted=String(q.question||'').match(/[«"]([^»"]+)[»"]/)?.[1]||['Les Misérables','La Peste','L’Avare','Le Misanthrope','Le Bourgeois gentilhomme','Moi et le village'].find(t=>norm(q.question+' '+q.correct).includes(norm(t)));if(quoted&&norm(quoted)!==norm(w.title))return {title:quoted.trim(),note:'Œuvre de '+p.person,source:null,art:null,role:w.role};return {...w};}
function sections(q){const v=pick(q),w=artwork(q),t=target(q).core;if(w){const explicitName=personFor({correct:q.correct});return [{label:'À retenir',text:explicitName?w.role:q.correct},{label:'Œuvre repère',text:w.title},{label:'Repère',text:w.note}].filter(f=>f.text);}
if(v.key==='montmichel')return [{label:'À retenir',text:'Mont-Saint-Michel → Manche, en Normandie.'},{label:'Repère',text:'Un îlot rocheux, un village et une abbaye au sommet.'}];
const out=legacySections(q);if(v.key==='eutreaty')return [{label:'À retenir',text:q.correct},{label:'Repère',text:'1992 → signature du traité de Maastricht.\n1993 → entrée en vigueur : création de l’Union européenne.'}];
if(v.key==='euconstruction'&&/fondateur|rome|1957/.test(t))out.push({label:'Les six pays',text:'Allemagne (RFA en 1957), Belgique, France, Italie, Luxembourg, Pays-Bas.'});
if(v.key==='eucitizenship'){out.push({label:'Schéma',text:'Nationalité d’un État membre → citoyenneté de l’UE',steps:['Nationalité d’un État membre','Citoyenneté de l’UE']},{label:'Repère',text:'La citoyenneté européenne s’ajoute à la citoyenneté nationale.'});if(/1992/.test(t))out.push({label:'Repère',text:'Le traité de Maastricht est signé en 1992 et entre en vigueur en 1993.'});}
if(v.key==='jurors')out.push({label:'Schéma',text:'Tirage au sort → convocation → participation sous conditions',steps:['Tirage au sort','Convocation','Participation sous conditions']});return out;}

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
function title(q){const p=pick(q),core=norm(q.question+' '+q.correct);if(preciseTitles[p.key])return preciseTitles[p.key];if(p.key==='ferry'&&/ecole|loi|enseignement|instruction/.test(core))return 'Lois Ferry';if(p.key==='marriage')return /polygam/.test(core)?'Un seul mariage à la fois':/repudiation/.test(core)?'Mariage et droits égaux':'Le mariage';if(p.key==='conscience')return /liberte.*conscience/.test(core)?'La liberté de conscience':'La laïcité et les convictions';if(/matignon/.test(core))return 'L’hôtel de Matignon';if(/senat/.test(core)&&!/assemblee nationale/.test(core))return 'Le Sénat';if(p.key==='elysee')return 'Résidence du président';if(p.key==='interview')return 'Entretien d’embauche';if(p.key==='marianne')return 'Marianne';if(p.key==='ddhc')return 'Les droits fondamentaux';if(p.key==='president'&&/nomm/.test(norm(q.question+' '+q.correct)))return 'Rôle du président';if(p.key==='tax')return 'Déclarer ses revenus';if(p.key==='vitale')return 'L’Assurance maladie';if(p.key==='factory'&&/non declare/.test(norm(q.question+' '+q.correct)))return 'Travail déclaré';if(p.key==='factory'&&/duree|35 heures/.test(norm(q.question+' '+q.correct)))return 'Temps de travail';if(p.key==='business')return 'Créer son entreprise';if(p.key==='eiffel')return 'La tour Eiffel';if(p.key==='swissflag')return 'La Suisse';if(p.key==='frenchflag')return 'Le drapeau français';if(p.key==='europe'&&/drapeau/.test(norm(q.question)))return 'Le drapeau européen';if(p.person)return p.person;const fallback=Number(q.theme)!==4&&/histoire|geographie/.test(norm(q.notion))?q.chapterTitle:q.notion;const text=String(fallback||q.chapterTitle||q.question||'Ma notion à revoir').replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu,'').trim();return text.charAt(0).toUpperCase()+text.slice(1);}
function legacySections(q){
 const v=pick(q),text=norm(q.question+' '+q.correct),out=[];
 if(v.key==='vitale'&&/assurance maladie|caisse primaire|cpam/.test(norm(q.correct))&&/organisme|rembourse|cpam|caisse/.test(norm(q.question)))return [{label:'À retenir',text:'Rembourse une partie des frais de santé.'},{label:'Mémo',text:'CPAM = Caisse primaire d’assurance maladie.'}];
 if(v.key==='interview'&&/uniquement.*questions.*emploi|questions.*lien.*emploi/i.test(q.correct||''))return [{label:'À retenir',text:q.correct},...root.NovaSheetsRules.explanation(q).filter(t=>/discrimination/i.test(t)).map(text=>({label:'Repère',text}))];
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
 if(v.key==='president'&&/nomm.*premier ministre|premier ministre.*nomm/.test(t)&&/president/.test(norm(q.correct)))facts[0]={label:'À retenir',text:'Nomme le Premier ministre.'};
 const type=event(q)?'timeline':flow?'process':v.key==='interview'?'dialogue':/mariage|polygam|repudiation/.test(t)?'relationship':/laicite|conscience|religion/.test(t)?'freedom':/egalite|discrimination|interdit|autorise/.test(t)?'rule':v.key==='elysee'||v.key==='eiffel'||v.key==='geography'?'place':/\d/.test(q.correct||'')?'number':isAction(q)?'action':'mindmap';
 if(v.key==='president'&&/nomm/.test(t)){for(let i=facts.length-1;i>=0;i--)if(facts[i].label==='Mémo'&&/^PR =/.test(facts[i].text))facts.splice(i,1);}
 return {type,subject:title(q),facts,visual:v.key,sourceOnly:true};
}
function isAction(q){return root.NovaSheetsRules.isSituation(q);}
function rows(block){
 const dated=block.notions.filter(q=>event(q)),timed=Number(block.id)===4&&dated.length>=2?dated:[],rest=block.notions.filter(q=>!timed.includes(q)),out=[];
 if(timed.length){const ordered=[...timed].sort((a,b)=>event(a).year-event(b).year);for(let i=0;i<ordered.length;i+=2)out.push({type:'timeline',notions:ordered.slice(i,i+2)});}
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
root.CiviSheetsVisual={pick,memo,title,sections,diagram,event,presentation,composition,rows,groupTitle,lawExample,profile,portraits,captions,artwork,works};
})(window);
