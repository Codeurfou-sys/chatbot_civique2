"""Glossaire enrichi des mots-clés des six banques et filtre progressif natif ChatMD."""
from pathlib import Path
import sys,re,json,string,collections
sys.path.insert(0,str(Path(__file__).resolve().parent));from ameliorations_v6 import ROOT,norm,blocks,join,link,THEMES
sys.path.insert(0,str(ROOT));from synchroniser_banques_examens import read_rows,EXAM_CONFIGS,clean
# Définitions pédagogiques sans montants ni titulaires susceptibles de changer.
ADDITIONS='''SMIC|5|Salaire minimum légal : un employeur doit respecter ce minimum pour rémunérer le travail de son salarié.
Salaire brut|5|Rémunération avant le prélèvement des cotisations sociales à la charge du salarié.
Salaire net|5|Rémunération après déduction des cotisations salariales ; le montant versé peut aussi tenir compte du prélèvement de l’impôt.
Cotisations sociales|5|Sommes versées par les salariés et les employeurs pour financer la protection sociale, notamment la maladie et la retraite.
Employeur|5|Personne ou organisation qui embauche un salarié et lui verse une rémunération pour son travail.
Salarié|5|Personne qui travaille pour un employeur dans le cadre d’un contrat de travail et reçoit un salaire.
Entreprise|5|Organisation qui produit des biens ou fournit des services. Elle peut employer des salariés.
Travail dissimulé|5|Travail ou activité qui n’est pas déclaré comme la loi l’exige. Cela prive notamment le salarié de certaines protections.
Bénévolat|5|Activité réalisée librement sans rémunération, par exemple pour aider une association.
Grève|3|Arrêt collectif du travail destiné à défendre des revendications professionnelles. Ce droit s’exerce dans un cadre légal.
Handicap|5|Limitation d’activité ou difficulté de participation à la vie sociale liée notamment à une altération physique, sensorielle ou mentale.
Mutuelle|5|Organisme de complémentaire santé qui peut prendre en charge une partie des dépenses restant après le remboursement de l’Assurance maladie.
Prévention|5|Actions destinées à éviter un risque ou à limiter ses conséquences, par exemple la vaccination ou le dépistage.
Protection sociale|5|Ensemble des dispositifs qui aident les personnes face à certains risques de la vie, comme la maladie, la vieillesse ou la perte d’emploi.
Urgence|5|Situation qui nécessite une intervention rapide, notamment lorsqu’une vie ou la sécurité d’une personne est en danger.
Secours|5|Aide apportée à une personne en danger ou en difficulté ; elle peut nécessiter de prévenir les services d’urgence.
SAMU|5|Service d’aide médicale urgente : il organise la réponse médicale aux urgences et oriente vers les soins adaptés.
CPAM|5|Caisse primaire d’assurance maladie : organisme qui gère notamment les droits à l’Assurance maladie et les remboursements de soins.
Mairie|2|Lieu où travaillent le maire et les services de la commune. On peut y effectuer des démarches comme celles liées à l’état civil.
Conseil municipal|2|Assemblée des élus d’une commune. Il délibère sur les affaires locales, comme les équipements ou le budget communal.
Mandat|2|Mission confiée à une personne, notamment à un élu, pour une durée déterminée.
Quinquennat|2|Mandat de cinq ans. Le mandat du président de la République française est un quinquennat.
Parti politique|2|Organisation qui rassemble des personnes autour d’idées politiques et participe à la vie démocratique, notamment aux élections.
Sénateur|2|Membre du Sénat, l’une des deux assemblées du Parlement. Il participe à l’examen et au vote des lois.
Éligibilité|2|Possibilité de se présenter à une élection lorsque les conditions prévues par la loi sont remplies.
Listes électorales|2|Listes des personnes inscrites pour voter dans une commune ou dans une circonscription.
Élections municipales|2|Élections qui permettent de choisir les conseillers municipaux. Ceux-ci élisent ensuite le maire.
Élections européennes|2|Élections par lesquelles les citoyens de l’Union européenne choisissent leurs députés au Parlement européen.
Pouvoir exécutif|2|Pouvoir chargé de conduire la politique et de faire appliquer les lois. En France, il est exercé par le président de la République et le Gouvernement.
Pouvoir législatif|2|Pouvoir qui discute et vote les lois. En France, il est exercé par le Parlement.
Pouvoir judiciaire|2|Fonction de la justice qui tranche les litiges et sanctionne les infractions selon la loi, en toute indépendance.
Chef de l’État|2|Personne qui représente l’État au plus haut niveau. En France, le chef de l’État est le président de la République.
Collectivités territoriales|2|Structures qui gèrent des affaires locales grâce à des élus, par exemple les communes, les départements et les régions.
État civil|5|Enregistrement officiel des événements importants de la vie d’une personne, notamment sa naissance, son mariage et son décès.
Naissance|5|Venue au monde d’un enfant. Elle doit être déclarée à l’état civil dans les conditions prévues par la loi.
Divorce|5|Fin d’un mariage prononcée ou constatée selon une procédure légale.
Polygamie|3|Situation dans laquelle une personne est mariée à plusieurs conjoints en même temps. Elle est interdite en France.
Autorité parentale|5|Ensemble des droits et des devoirs des parents pour protéger, éduquer et accompagner leur enfant dans son intérêt.
Instruction obligatoire|5|Obligation de donner à chaque enfant une instruction. Elle peut être assurée à l’école ou, sous conditions, dans la famille.
Agents publics|2|Personnes qui travaillent pour une administration ou un service public. Elles doivent respecter notamment la neutralité et l’égalité de traitement.
Intérêt général|1|Ce qui sert le bien commun, au-delà des intérêts particuliers d’une personne ou d’un groupe.
Respect|1|Attitude qui consiste à reconnaître la dignité et les droits d’autrui, même lorsque ses opinions diffèrent des nôtres.
Religion|1|Ensemble de croyances et de pratiques liées à une foi. Chacun est libre de croire, de changer de religion ou de ne pas croire.
Opinion|1|Idée ou point de vue personnel sur un sujet. La liberté d’opinion est protégée, dans le respect de la loi et des droits d’autrui.
Ordre public|3|Conditions nécessaires à la sécurité, à la tranquillité et au bon fonctionnement de la vie collective.
Droits civiques|3|Droits qui permettent de participer à la vie citoyenne, notamment le droit de vote, selon les conditions prévues par la loi.
Infraction|3|Comportement interdit par la loi et passible d’une sanction. On distingue les contraventions, les délits et les crimes.
Contravention|3|Catégorie d’infraction généralement sanctionnée par une amende.
Délit|3|Catégorie d’infraction plus grave qu’une contravention et moins grave qu’un crime.
Crime|3|Catégorie des infractions les plus graves, jugées selon une procédure adaptée à leur gravité.
Amende|3|Somme d’argent qu’une personne doit payer lorsqu’une sanction pécuniaire est prononcée à son encontre.
Plainte|3|Démarche par laquelle une personne signale aux autorités une infraction dont elle estime être victime.
Juge|2|Professionnel de la justice qui applique la loi et rend des décisions pour trancher des litiges ou juger des infractions.
Avocat|3|Professionnel du droit qui conseille une personne, défend ses intérêts et peut la représenter devant la justice.
Juré|3|Citoyen appelé à participer à un jury et à juger certaines affaires aux côtés de magistrats.
Cour d’assises|3|Juridiction qui juge certains crimes avec des magistrats et un jury de citoyens.
Peine de mort|3|Sanction qui consiste à exécuter une personne condamnée. Elle a été abolie en France en 1981.
IVG|3|Interruption volontaire de grossesse : démarche permettant de mettre fin à une grossesse dans le cadre prévu par la loi.
Déchets|5|Objets ou matières dont on se débarrasse. Il faut respecter les règles de collecte, de tri et de traitement.
Recyclage|5|Transformation de déchets pour réutiliser leurs matériaux et réduire le gaspillage des ressources.
Déchèterie|5|Lieu où l’on dépose certains déchets qui ne doivent pas être mis dans les poubelles ordinaires.
Tri des déchets|5|Séparation des déchets selon leur nature pour permettre leur collecte et leur traitement adaptés.
Sécurité routière|3|Ensemble des règles et des comportements qui limitent les accidents sur la route et protègent tous les usagers.
Réseaux sociaux|3|Services en ligne permettant de publier et d’échanger des contenus. Les règles de droit et le respect d’autrui s’y appliquent aussi.
Armistice|4|Accord qui suspend les combats entre des forces en guerre. Il ne signifie pas nécessairement la fin définitive de la guerre.
Résistance|4|Actions menées contre l’occupation et les régimes oppressifs ; en France, le terme renvoie notamment à la lutte contre l’occupation nazie pendant la Seconde Guerre mondiale.
Shoah|4|Génocide des Juifs d’Europe perpétré par les nazis et leurs complices pendant la Seconde Guerre mondiale.
Génocide|4|Actes commis avec l’intention de détruire, en tout ou en partie, un groupe national, ethnique, racial ou religieux.
Esclavage|4|Situation dans laquelle des personnes sont privées de leur liberté et traitées comme la propriété d’autrui.
Abolition|4|Suppression officielle d’une règle, d’une pratique ou d’une peine, par exemple l’abolition de l’esclavage ou de la peine de mort.
Colonisation|4|Prise de contrôle d’un territoire et de sa population par une puissance extérieure.
Monarchie|4|Régime politique dans lequel le chef de l’État est un roi ou une reine.
Patrimoine|4|Ensemble des biens, lieux, traditions et œuvres transmis par les générations précédentes et considérés comme importants à préserver.
Impressionnisme|4|Courant artistique du XIXe siècle qui représente notamment les impressions de lumière et de couleur.
Littérature|4|Ensemble des œuvres écrites, comme les romans, la poésie ou le théâtre.
Fleuve|4|Cours d’eau qui se jette dans la mer ou dans l’océan.
Méditerranée|4|Mer située au sud de la France, entre l’Europe, l’Afrique du Nord et le Proche-Orient.
Outre-mer|4|Territoires français situés hors de la France métropolitaine, dans plusieurs régions du monde.
DROM|4|Départements et régions d’outre-mer : territoires français ayant ce statut administratif.
CECA|2|Communauté européenne du charbon et de l’acier : projet de coopération européen qui a précédé l’Union européenne.
Traité de Maastricht|2|Traité signé en 1992 qui a créé l’Union européenne et renforcé la coopération entre ses États membres.
Journée de l’Europe|2|Journée célébrée le 9 mai pour rappeler le projet de coopération européenne et la déclaration de Robert Schuman.
Euro|2|Monnaie commune utilisée par les États membres de la zone euro.
Majorité|3|Âge à partir duquel une personne devient juridiquement adulte. Le mot désigne aussi le plus grand nombre de voix dans un vote.
Devoir|3|Obligation à respecter pour vivre dans la société, notamment respecter la loi et les droits d’autrui.
Discrimination|3|Traitement défavorable fondé sur un critère interdit par la loi, comme l’origine, le sexe ou le handicap.
Séparation des pouvoirs|2|Principe qui distingue les fonctions de faire la loi, de l’appliquer et de rendre la justice afin de limiter les abus de pouvoir.'''
def quote(x):return json.dumps(x,ensure_ascii=False)
def native_norm(var):return f'normalizeText({var}).replaceAll("œ","oe").replaceAll("’","\'").trim()'
def generate():
 p=ROOT/'modules/04_glossaire.md';old=blocks(p.read_text());data=json.loads((ROOT/'data/question_libre.json').read_text());entries=json.loads((ROOT/'data/glossaire_v6.json').read_text()) if (ROOT/'data/glossaire_v6.json').exists() else [];known={norm(n['title']) for n in entries}
 for n in data['notions']:
  if n['id'].startswith('SCR_QL_GLO') and norm(n['title']) not in known:
   entries.append(dict(id='SCR_GLO_'+n['id'][-4:],title=n['title'],aliases=n['aliases'],definition=n['answer'],theme=int(re.search(r'T(\d)',n['course'])[1])));known.add(norm(n['title']))
 keywords=collections.defaultdict(list)
 for exam,cfg in EXAM_CONFIGS.items():
  for typ in ['questions','situations']:
   for row in read_rows(ROOT/'sources'/cfg[typ+'_file'],cfg[typ+'_sheet']):
    for term in re.split('[;,|]',str(row.get('Mots-clés') or '')):
     if term.strip():keywords[norm(term)].append(dict(exam=exam,bank=cfg[typ+'_file'],id=row['ID']))
 additions=[]
 for line in ADDITIONS.splitlines():
  title,theme,definition=line.split('|',2)
  if norm(title) in known:continue
  i=f'SCR_GLO_{max([int(n["id"][-4:]) for n in entries],default=137)+1:04d}';aliases=[norm(title)];short={'smic':['smik','salaire minimum','salaire minimum interprofessionnel de croissance'],'cotisations sociales':['cotisation','cotisations','contributions sociales'],'salaire brut':['brut'],'salaire net':['net'],'sénateur':['senateurs'],'tri des déchets':['tri','tri des dechets'],'traité de maastricht':['maastricht'],'cour d’assises':['cour d assises']}.get(title.lower(),[])
  aliases+=short;entry=dict(id=i,title=title,aliases=aliases,definition=definition,theme=int(theme));entries.append(entry);additions.append(entry);known.add(norm(title))
 entries.sort(key=lambda n:norm(n['title']));byid={n['id']:n for n in entries};b={i:v for i,v in old.items() if re.fullmatch(r'SCR_GLO_\d{4}',i)}
 for n in entries:
  if n['id'] not in b:b[n['id']]=f'- {n["title"]}\n'+'\n'.join('- '+a for a in n['aliases'] if a!=n['title'])+f'\n\n### 📘 {n["title"]}\n\n**Définition simple :** {n["definition"]}\n\n'+link('📚 Réviser cette thématique',f'SCR_REV_T{n["theme"]}_MENU')+'\n'+link('🔤 Reprendre le filtre de CiviCoach','SCR_GLO_FILTER')+'\n'+link('↩️ Retour au glossaire','SCR_GLO_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
 b['SCR_GLO_MENU']='### 📖 Glossaire civique\n\nRetrouvez des définitions simples des notions du programme.\n\n'+link('🔍 Rechercher un mot','SCR_GLO_SEARCH')+'\n'+link('🔤 Rechercher à l’aide du filtre de CiviCoach','SCR_GLO_FILTER_RESET')+'\n'+link('🔠 Parcourir par ordre alphabétique','SCR_GLO_ALPHA_MENU')+'\n'+link('📚 Parcourir par thème','SCR_GLO_THEME_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
 b['SCR_GLO_ALPHA_MENU']='### 🔠 Parcourir par ordre alphabétique\n\n'+'\n'.join(link(label,'SCR_GLO_ALPHA_'+key) for label,key in [('A–C','AC'),('D–F','DF'),('G–L','GL'),('M–P','MP'),('Q–S','QS'),('T–Z','TZ')])+'\n'+link('↩️ Retour au glossaire','SCR_GLO_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
 for key,start,end in [('AC','a','c'),('DF','d','f'),('GL','g','l'),('MP','m','p'),('QS','q','s'),('TZ','t','z')]:b['SCR_GLO_ALPHA_'+key]='### 🔠 '+start.upper()+'–'+end.upper()+'\n\n'+'\n'.join(link('📘 '+n['title'],n['id']) for n in entries if start<=norm(n['title'])[0]<=end)+'\n'+link('↩️ Retour à l’alphabet','SCR_GLO_ALPHA_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
 b['SCR_GLO_THEME_MENU']='### 📚 Choisir une thématique\n\n'+'\n'.join(link('📚 '+t,f'SCR_GLO_THEME_T{i}') for i,t in enumerate(THEMES,1))+'\n'+link('↩️ Retour au glossaire','SCR_GLO_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
 for theme,title in enumerate(THEMES,1):b[f'SCR_GLO_THEME_T{theme}']='### 📚 '+title+'\n\n'+'\n'.join(link('📘 '+n['title'],n['id']) for n in entries if n['theme']==theme)+'\n'+link('↩️ Retour aux thèmes','SCR_GLO_THEME_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
 # Routage invisible : un contenu HTML minimal permet à ChatMD d’exécuter SelectNext.
 route='!Typewriter: false\n<span class="civicoach-route" aria-hidden="true"></span>\n'
 b['SCR_GLO_FILTER_RESET']=route+'`@gloPrefix = calc("")`\n!SelectNext: SCR_GLO_FILTER'
 b['SCR_GLO_FILTER_BACK']=route+'`@gloPrefix = calc(@gloPrefix.slice(0,-1))`\n!SelectNext: SCR_GLO_FILTER'
 # Conditions stables : les boutons sont évalués après le corps du message.
 body='### 🔤 Le filtre de CiviCoach\n\nChoisissez la première lettre du mot, puis la suivante. Je conserve uniquement les mots qui commencent par les lettres choisies. Les lettres grisées ne correspondent à aucune suite possible. Vous pouvez revenir d’une lettre ou recommencer.\n\n`if @gloPrefix == undefined`\n`@gloPrefix = calc("")`\n`endif`\n\n**Début du mot :** `@gloPrefix`\n\n'
 for letter in string.ascii_lowercase:
  cond=' || '.join(quote(norm(n['title']))+f'.startsWith(@gloPrefix+"{letter}")' for n in entries)
  body+=f'`@gloNext{letter.upper()} = calc({cond})`\n'
 # HTML anchors use the same encoded target as ChatMD (obfuscate true).
 import base64
 body+='\n<div class="glo-keyboard" role="group" aria-label="Lettres possibles">\n'
 for letter in string.ascii_uppercase:
  target=base64.b64encode(('SCR_GLO_FILTER_NEXT_'+letter).encode()).decode();body+=f'`if @gloNext{letter}`\n<a class="glo-key" href="#{target}" aria-label="Ajouter la lettre {letter}">{letter}</a>\n`endif`\n`if !@gloNext{letter}`\n<span class="glo-key disabled" aria-disabled="true">{letter}</span>\n`endif`\n'
 body+='</div>\n\n`if @gloPrefix != ""`\n### 📘 Mots correspondants\n'
 for n in entries:body+=f'`if {quote(norm(n["title"]))}.startsWith(@gloPrefix)`\n'+link('📘 '+n['title'],n['id'])+'\n`endif`\n'
 body+='`endif`\n\n`if @gloPrefix != ""`\n'+link('↩️ Retirer la dernière lettre','SCR_GLO_FILTER_BACK')+'\n`endif`\n'+link('🔄 Recommencer le filtre','SCR_GLO_FILTER_RESET')+'\n'+link('↩️ Retour au glossaire','SCR_GLO_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL');b['SCR_GLO_FILTER']=body
 for letter in string.ascii_uppercase:b['SCR_GLO_FILTER_NEXT_'+letter]=route+f'`@gloPrefix = calc(@gloPrefix+"{letter.lower()}")`\n!SelectNext: SCR_GLO_FILTER'
 # Recherche explicite, accents/casse normalisés, priorité aux titres/alias exacts.
 b['SCR_GLO_SEARCH']='''### 🔍 Rechercher un mot

Saisissez un mot ou une expression, même sans accents ou avec une petite faute de frappe. Je vous proposerai les fiches les plus proches. Pour une question complète, utilisez « Poser une question ».

`@gloQuery = @INPUT : SCR_GLO_SEARCH_RESULT`

'''+link('🔤 Utiliser le filtre de CiviCoach','SCR_GLO_FILTER_RESET')+'\n'+link('↩️ Retour au glossaire','SCR_GLO_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
 body='!Keyboard: false\n### 🔍 Résultats de votre recherche\n\n`@gloQueryNorm = calc('+native_norm('@gloQuery')+')`\n`@gloExact = false`\n`@gloBest = 0`\n`@gloNear = false`\n'
 for n in entries:
  exact=' || '.join('@gloQueryNorm == '+quote(norm(a)) for a in [n['title']]+n['aliases'])
  body+=f'`@gloExact{n["id"][-4:]} = calc({exact})`\n`if @gloExact{n["id"][-4:]}`\n`@gloExact = true`\n`endif`\n'
  # Tolérance à une insertion, suppression, substitution ou inversion adjacente.
  word=norm(n['title']);q='@gloQueryNorm';variants={word[:j]+word[j+1:] for j in range(len(word))}|{word[:j]+word[j+1]+word[j]+word[j+2:] for j in range(len(word)-1)}
  near=[quote('|'+ '|'.join(sorted(variants))+'|')+'.includes("|"+'+q+'+"|")']
  near += [f'({q}.length == {len(word)} && {q}.slice(0,{j})+{q}.slice({j+1}) == {quote(word[:j]+word[j+1:])})' for j in range(len(word))]
  near += [f'({q}.length == {len(word)+1} && {q}.slice(0,{j})+{q}.slice({j+1}) == {quote(word)})' for j in range(len(word)+1)]
  body+=f'`@gloNear{n["id"][-4:]} = calc('+ ' || '.join(near)+')`\n'+f'`if @gloNear{n["id"][-4:]}`\n`@gloNear = true`\n`endif`\n'
  # SearchScore is ChatMD’s own fuzzy-search helper. Use title alone so aliases do not dilute similarity.
  body+=f'`@gloScore{n["id"][-4:]} = calc(searchScore({quote(norm(n["title"]))},@gloQueryNorm))`\n`@gloBest = calc(Math.max(@gloBest,@gloScore{n["id"][-4:]}))`\n'
 body+='\n`if @gloExact`\nVoici la fiche correspondant à votre mot.\n`endif`\n`if !@gloExact && (@gloNear || @gloBest >= 0.35)`\nVoici les notions les plus proches. Choisissez la fiche qui correspond à votre recherche.\n`endif`\n`if !@gloExact && !@gloNear && @gloBest < 0.35`\nJe n’ai pas trouvé de notion suffisamment proche. Essayez un mot plus court ou le filtre par lettres.\n`endif`\n'
 for n in entries:
  suffix=n['id'][-4:];body+=f'`if @gloExact{suffix} || (!@gloExact && @gloNear && @gloNear{suffix}) || (!@gloExact && !@gloNear && @gloBest >= 0.35 && @gloScore{suffix} >= @gloBest-0.08)`\n'+link('📘 '+n['title'],n['id'])+'\n`endif`\n'
 body+='\n'+link('🔍 Rechercher un autre mot','SCR_GLO_SEARCH')+'\n'+link('🔤 Utiliser le filtre de CiviCoach','SCR_GLO_FILTER_RESET')+'\n'+link('↩️ Retour au glossaire','SCR_GLO_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL');b['SCR_GLO_SEARCH_RESULT']=body
 # Put menu first, preserve original definition IDs for links from the rest of the project.
 ordered={i:b[i] for i in b if not re.fullmatch(r'SCR_GLO_\d{4}',i)};ordered.update({n['id']:b[n['id']] for n in entries});p.write_text(join(ordered))
 (ROOT/'data/glossaire_v6.json').write_text(json.dumps(entries,ensure_ascii=False,indent=2))
 mapped={}
 for term,refs in keywords.items():
  matches=[n['id'] for n in entries if term in [norm(n['title'])]+[norm(a) for a in n['aliases']]]
  mapped[term]=dict(fiches=matches,sources=refs)
 (ROOT/'reports/glossaire_sources.json').write_text(json.dumps(dict(fiches=len(entries),ajouts=len(entries)-137,mots_cles=mapped),ensure_ascii=False,indent=2))
 print(f'Glossaire : {len(entries)} fiches, {len(entries)-137} nouvelles notions, {len(keywords)} mots-clés analysés dans les six banques.')
if __name__=='__main__':generate()
