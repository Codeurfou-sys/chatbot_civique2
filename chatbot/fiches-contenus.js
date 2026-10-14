(function(root){
const V=root.CiviSheetsVisual, old=V.sections, norm=root.NovaSheetsRules.normal;
const all=Object.values(root.CiviSheetsData.questions);const peers=new Map();for(const p of all){const k=norm(p.correct);if(!peers.has(k))peers.set(k,[]);if(p.explanation?.length)peers.get(k).push(p);}const two=(a,b)=>[{label:'À retenir',text:a},{label:'Exemple ou détail',text:b}];
const clean=x=>String(x||'').replace(/[→←↑↓↔➜➔]/g,' : ').trim();
V.sections=function(q){const t=norm(q.question+' '+q.correct),v=V.pick(q),w=V.artwork(q);
if(/marseillaise/.test(t)&&/symboles/.test(norm(q.question))&&/drapeau.*marianne/.test(norm(q.correct)))return two('Les symboles officiels comprennent le drapeau tricolore, Marianne, La Marseillaise et la devise.','Devise : Liberté, Égalité, Fraternité. La Marseillaise est l’hymne national français.');
if(/marseillaise|rouget de lisle/.test(t)){
 if(/parole|complete|couplet/.test(norm(q.question)))return two('La Marseillaise est l’hymne national français.',/aux armes/.test(t)?'Refrain : « Aux armes, citoyens ! »':'Début : « Allons enfants de la Patrie, le jour de gloire est arrivé ! »');
 if(/1795|1879|1958/.test(norm(q.correct)))return old(q).map((f,i)=>({label:i?'Exemple ou détail':'À retenir',text:clean(f.text)})).slice(0,2);
 if(v.key==='rouget')return two('Rouget de Lisle compose La Marseillaise en 1792.','À Strasbourg, il crée le « Chant de guerre pour l’armée du Rhin », devenu La Marseillaise.');
 return two('La Marseillaise est l’hymne national français.','Exemple : on l’entend lors des cérémonies officielles. Elle fait partie des symboles de la République.');
}
if(/infraction|contravention.*delit|crime.*terrorisme.*corruption/.test(t))return two('Les infractions ont trois niveaux de gravité. Du plus grave au moins grave : crime > délit > contravention.','Exemples : meurtre = crime ; vol simple = délit ; stationnement interdit = contravention.');
if(/refus.*inscri|inscri.*refus/.test(t)&&/enfant|ecole|scolar/.test(t))return two('Les parents doivent respecter l’instruction obligatoire. Refuser d’inscrire un enfant après une mise en demeure du Dasen peut entraîner une sanction pénale.','Après cette mise en demeure, les parents risquent jusqu’à 6 mois de prison et 7 500 € d’amende. Dasen = directeur académique des services de l’Éducation nationale.');
if(/frontiere|pays.*limitrophe|pays.*voisin.*france/.test(t))return two('La France métropolitaine a 8 pays voisins par voie terrestre : Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Espagne et Andorre.','Le saviez-vous ? En Amérique du Sud, la Guyane française partage des frontières terrestres avec le Brésil et le Suriname. En mer, la France est aussi voisine du Royaume-Uni, notamment dans la Manche.');
if(/indivisible|laique democratique et sociale/.test(t))return two('L’article 1 de la Constitution définit la France comme une République indivisible, laïque, démocratique et sociale.','Indivisible = une même République pour tous. Laïque = l’État est neutre envers les religions. Démocratique = le peuple exerce le pouvoir, notamment par le vote. Sociale = la solidarité aide à protéger chacun. La Constitution est le texte suprême du droit national ; sa modification suit une procédure particulière.');
if(v.key==='eucitizenship')return two('Toute personne ayant la nationalité d’un pays de l’Union européenne est aussi citoyenne de l’UE. Cette citoyenneté s’ajoute à la citoyenneté nationale.','Exemple : une citoyenne espagnole résidant en France peut, sous conditions, voter aux élections municipales et européennes en France. Cette citoyenneté ne lui donne pas le droit de voter à l’élection présidentielle française.');
if(/beethoven|ode a la joie|hymne.*europe/.test(t))return two('Ludwig van Beethoven est un compositeur allemand, connu notamment pour sa Neuvième Symphonie et l’Ode à la joie.','Le saviez-vous ? La mélodie de l’Ode à la joie a été choisie en 1985 comme hymne européen par les dirigeants de l’Union européenne. Le Conseil de l’Europe l’avait adoptée en 1972.');
if(/contracept|procreation|disposer.*corps|choisir.*avoir.*enfant/.test(t))return two('Chacun est libre de disposer de son corps et de choisir d’avoir ou non un enfant. La contraception permet d’éviter une grossesse.','Avant 26 ans, certains contraceptifs sont pris en charge à 100 %, sous conditions. Exemple : certaines pilules sur ordonnance. Cela ne concerne pas toutes les méthodes contraceptives.');
if(v.key==='debussy')return two('Claude Debussy est un compositeur français, connu notamment pour « Clair de lune ».','Cette pièce pour piano appartient à la Suite bergamasque. Son titre reprend celui d’un poème de Verlaine.');
if(w)return two((v.person||V.title(q))+' : '+w.role+' Œuvre repère : « '+w.title+' ».',w.note);
if(v.key==='vitale'&&/organisme|rembourse|cpam|caisse/.test(norm(q.question)))return two('L’Assurance maladie rembourse une partie des frais de santé selon les droits de la personne.','CPAM = Caisse primaire d’assurance maladie. La carte Vitale permet de transmettre les informations nécessaires au remboursement.');
if(v.key==='president'&&/nomm.*premier ministre|premier ministre.*nomm/.test(t))return two('Le président de la République nomme le Premier ministre.','Le Premier ministre dirige l’action du gouvernement. PR = président de la République ; PM = Premier ministre.');
if(v.key==='ferry'&&/ecole|enseignement|instruction/.test(t))return two('Les lois Ferry rendent l’école primaire publique gratuite en 1881, puis laïque en 1882. L’instruction devient obligatoire en 1882.','Mémo GLO : G = gratuit ; L = laïque ; O = obligatoire. L’obligation concerne l’instruction, pas seulement l’école publique.');
if(v.key==='marianne')return two('Marianne est un symbole de la République française.','Son buste se trouve notamment dans les mairies.');
if(v.key==='eiffel')return two('La tour Eiffel se trouve à Paris.','Elle est inaugurée en 1889 pour l’Exposition universelle.');
if(v.key==='frenchflag')return two('Le drapeau français comporte trois bandes verticales : bleu, blanc et rouge.','Mémo BBR : bleu, blanc, rouge, de gauche à droite lorsque le bleu est près du mât.');
if(v.key==='elysee')return two('Le palais de l’Élysée est la résidence officielle du président de la République.','À distinguer : l’hôtel de Matignon est la résidence officielle du Premier ministre.');
if(v.key==='interview'&&/questions/.test(t))return two('Pendant un entretien d’embauche, les questions doivent avoir un lien avec l’emploi proposé et les compétences du candidat.','Exemple : le recruteur peut demander quelles expériences professionnelles sont utiles au poste. Les discriminations sont interdites.');
if(/revolution francaise/.test(t)&&/1789/.test(t)&&!/declaration/.test(t))return two('La Révolution française commence en 1789.','Le 14 juillet 1789, la prise de la Bastille devient un événement marquant de la Révolution.');
if(v.key==='montmichel')return two('Le Mont-Saint-Michel se trouve dans la Manche, en Normandie.','Un îlot rocheux porte un village et une abbaye au sommet.');
let facts=old(q).map(x=>x.steps?x.steps.map((step,i)=>(i+1)+'. '+clean(step)).join(' ; '):clean(x.text));let main=facts.shift()||clean(q.correct);
if(main.length<35||/^(Ils|Elles|Il|Elle|Nomme|Rembourse)/.test(main)){const e=root.NovaSheetsRules.explanation(q).find(x=>x.length>35);if(e)main=clean(e);else main=V.title(q)+' : '+main;}
let detail=[...new Set(facts)].filter(x=>norm(x)!==norm(main)&&norm(x)!==norm(q.question));
if(!detail.length){const extra=(q.explanation||[]).map(clean).find(x=>norm(x)!==norm(main)&&norm(x)!==norm(q.correct));const peer=(peers.get(norm(q.correct))||[]).find(p=>norm(p.question)===norm(q.question));const support=peer?.explanation?.map(clean).filter(x=>norm(x)!==norm(main)).join(' ');detail=[extra||support||(q.context&&q.context!==q.question?'Situation : '+clean(q.context):'Pour mémoriser : expliquez cette notion avec vos propres mots, puis comparez votre explication au repère ci-dessus.')];}
return two(main,detail.join('\n'));
};
V.composition=q=>({type:V.event(q)?'timeline':V.pick(q).key==='interview'?'dialogue':'mindmap',subject:V.title(q),facts:V.sections(q),visual:V.pick(q).key,sourceOnly:true});
const originalPick=V.pick;V.pick=q=>{const t=norm(q.question+' '+q.correct);const key=/frontiere|pays.*limitrophe|pays.*voisin.*france/.test(t)?'frontiers':/beethoven|ode a la joie|hymne.*europe/.test(t)?'beethoven':/contracept|procreation|disposer.*corps|choisir.*avoir.*enfant/.test(t)?'contraception':null;return key?{key,label:V.title(q),src:root.CiviSheetsArt?.[key]||'assets/fiches/'+key+'.png',file:'assets/fiches/'+key+'.png'}:originalPick(q);};
const title=V.title;V.title=q=>/frontiere|pays.*limitrophe/.test(norm(q.question+' '+q.correct))?'Les frontières de la France':/beethoven|ode a la joie|hymne.*europe/.test(norm(q.question+' '+q.correct))?'Beethoven et l’hymne européen':/contracept|procreation|disposer.*corps/.test(norm(q.question+' '+q.correct))?'Choisir d’avoir un enfant':title(q);
V.lawExample=()=>null;
const originalRows=V.rows;V.rows=b=>originalRows(b).flatMap(row=>row.notions.length>1&&row.notions.some(q=>root.CiviSheetAudio?.track(q)?.id==='marseillaise')?row.notions.map(q=>({...row,notions:[q]})):[row]);
})(window);

/* v63 : le droit ou la notion enseignée prime sur le décor du chapitre. */
(function(root){
const V=root.CiviSheetsVisual,n=root.NovaSheetsRules.normal,previousPick=V.pick,previousTitle=V.title,previousSections=V.sections;
function resolve(q){
 const a=n(q.correct),question=n(q.question),ex=n((q.explanation||[]).join(' '));
 const whole=a+' '+question+' '+ex,focus=a+' '+question;
 const chosen=(key,title,reason='notion précise')=>({key,title,reason});
 if(/frontiere|pays.*limitrophe|pays.*voisin.*france/.test(a+' '+question))return {key:'frontiers',title:'Les frontières de la France',reason:'sujet spécifique'};
 if(/beethoven|ode a la joie|hymne.*europe/.test(a+' '+question))return {key:'beethoven',title:'Beethoven et l’hymne européen',reason:'sujet spécifique'};
 if(/contracept|procreation|disposer.*corps|choisir.*avoir.*enfant/.test(a+' '+question))return {key:'contraception',title:'Choisir d’avoir un enfant',reason:'sujet spécifique'};
 // Composite lists retain a general rights illustration instead of one isolated right.
 if(/par exemple/.test(a)&&/education/.test(a)&&/expression/.test(a)&&/vie privee/.test(a))return {key:'rights',reason:'droits multiples'};
 if(/principes parmi/.test(a)&&/dignite/.test(a)&&/laicite/.test(a))return chosen('values','Les principes de la République','principes multiples');
 const person=V.portraits.find(([key,name])=>a.includes(n(name))||a===n(name).split(' ').at(-1));
 if(person&&/qui|auteur|compositeur|personnage|portrait|peintre|ecrivain|associe/.test(question))return {key:person[0],reason:'personnage nommé'};
 const known=previousPick(q);
 if(/citoyennete numerique/.test(question))return chosen(known.key,null,'notion numérique globale');
 if(/^region-/.test(known.key))return chosen(known.key,null,'carte régionale');
 if(!/langue|linguistique/.test(focus)&&/secret medical|confidential|donnees (personnelles|medicales)|respect de la vie privee|vie privee.*(protege|donnees)|informations medicales.*(protege|publ|accord)|photo.*(accord|consent|autorisa)/.test(whole))return chosen('privacy','La vie privée');
 if(/droits de la defense|assistance.*avocat|aide.*avocat|proces equitable|aide juridictionnelle/.test(focus)||/^(droit respecte|droit menace)/.test(a)&&/avocat|defense/.test(question))return chosen('defense','Les droits de la défense');
 if(/discrimin|egalite.*femmes|femmes.*hommes.*(memes droits|egal)|egalite devant la loi/.test(a)||/discrimin|refus.*origine|insult.*(handicap|different)/.test(question))return chosen('equality','Égalité et discriminations');
 if(/stationnement|place reservee/.test(question)&&/handicap|carte de stationnement|\bcmi\b/.test(focus))return chosen('accessible-parking','Le stationnement réservé');
 if(/handicap|fauteuil roulant|accessibilite/.test(focus))return chosen('accessibility','L’accessibilité et l’inclusion');
 if(/bulletin de (paie|salaire)|net (paye|avant impot)|brut.*cotisation|cotisations salariales|prelevement.*(salaire|brut|net)|fiche de paie/.test(focus))return chosen('pay','Le bulletin de salaire');
 if(/chef lieu.*auvergne rhone alpes/.test(question))return chosen('region-84','Auvergne-Rhône-Alpes');
 if(/vosges|pyrenees|massif|chaine.*montagne/.test(question)&&!/^region-/.test(known.key))return chosen('mountains','Les montagnes françaises');
 if(/contravention|delit|crime/.test(a)&&/^(contravention|delit|crime)$/.test(a))return chosen('justice','Les catégories d’infractions');
 if(/titre de sejour|prefecture/.test(question)&&/prefecture/.test(a))return chosen('prefect','La préfecture');
 if(/constitution|indivisible/.test(question)&&/indivisible|laique democratique/.test(whole))return chosen('constitution','Les principes de la République');
 if(/^(la )?marseillaise$/.test(question)||/marseillaise/.test(focus)&&!V.portraits.some(([key])=>known.key===key))return chosen(/drapeau.*marianne/.test(a)?'values':'hymn',/drapeau.*marianne/.test(a)?'Les symboles de la République':'La Marseillaise');
 if(/^(le )?drapeau tricolore$|coloriez le drapeau francais/.test(question))return chosen('frenchflag','Le drapeau français');
 if(/^marianne$/.test(question))return chosen('marianne','Marianne');
 if(/^(le )?coq$/.test(question))return chosen('coq','Le coq');
 if(/^la tour eiffel$/.test(question))return chosen('eiffel','La tour Eiffel');
 if(/^(le |la )?(baguette|croissant)$/.test(question))return chosen('gastronomy','La gastronomie');
 if(/^liberte egalite fraternite$/.test(question)||/^liberte egalite fraternite$/.test(a))return chosen('values','La devise de la République');
 if(/parlement europeen/.test(question)&&!/qui.*(elit|vote.*elire)|siege/.test(question))return chosen('euparliament','Le Parlement européen');
 if(/commission europeenne/.test(question))return chosen('eucommission','La Commission européenne');
 if(/tiers payant|remboursement.*sante/.test(focus)&&!known.person)return chosen('vitale','La prise en charge des soins');
 if(/je suis malade/.test(n(q.notion)))return chosen(/carte vitale|rembourse|paiement/.test(focus)?'vitale':'health','Le parcours de soins');
 if(/consignes.*securite|equipements.*protection|protections adaptees/.test(focus))return chosen('worker','La sécurité au travail');
 return {key:known.key,reason:'illustration thématique'};
}
V.pick=q=>{const found=resolve(q),old=previousPick(q);if(old.key===found.key)return {...old,selectionReason:found.reason};return {key:found.key,label:found.title||V.captions[found.key]||'Illustration de la notion',src:root.CiviSheetsArt?.[found.key]||'assets/fiches/'+found.key+'.png',file:'assets/fiches/'+found.key+'.png',selectionReason:found.reason};};
V.title=q=>resolve(q).title||previousTitle(q);
V.sections=q=>{
 const k=V.pick(q).key,t=n(q.question+' '+q.correct+' '+(q.explanation||[]).join(' '));
 if(k==='pay'&&/calculez/.test(n(q.question))&&q.explanation?.some(x=>/[=]/.test(x))){const math=q.explanation.find(x=>/[=]/.test(x));return [{label:'À retenir',text:'Exemple de calcul du salaire : '+math},{label:'Exemple ou détail',text:q.explanation.filter(x=>x!==math).join(' ')||'Ces montants correspondent au bulletin de paie utilisé dans cet exemple.'}];}
 if(k==='privacy'){
  if(/\d+ ans/.test(n(q.correct)))return previousSections(q);
  const medical=/medical|sante|secret medical/.test(t);
  return [{label:'À retenir',text:medical?'Les informations de santé relèvent de la vie privée. Elles doivent être protégées ; le secret médical prévoit des exceptions définies par la loi.':'La vie privée et les données personnelles doivent être protégées.'},{label:'Exemple ou détail',text:medical?'Exemple : un dossier médical ne doit pas être publié librement sur Internet.':'Exemple : demandez l’accord d’une personne avant de publier une photo où elle est reconnaissable.'}];
 }
 return previousSections(q);
};
V.semanticSelection=resolve;
})(window);
