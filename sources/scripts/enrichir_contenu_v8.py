from pathlib import Path
import json,re,sys
r=Path(__file__).resolve().parents[1];sys.path.insert(0,str(r/'scripts'));from ameliorations_v6 import blocks,join,norm
p=r/'data/glossaire_v6.json';entries=json.loads(p.read_text());known={norm(n['title']):n for n in entries}
add='''Carte de séjour pluriannuelle|3|Titre de séjour permettant à une personne étrangère de rester en France pendant plusieurs années, selon sa situation et les conditions du titre.
Liberté de conscience|1|Liberté de choisir ses convictions, de croire, de changer de religion ou de ne pas croire. Elle est protégée par la laïcité.
Liberté d’expression|1|Droit de communiquer ses idées et ses opinions, dans les limites prévues par la loi, notamment pour protéger les droits des autres.
Liberté d’association|1|Droit de se réunir avec d’autres personnes pour créer une association et mener un projet commun dans le respect de la loi.
Liberté de circulation|3|Possibilité de se déplacer, dans les conditions prévues par la loi. Certaines restrictions peuvent protéger la sécurité ou les droits d’autrui.
Mixité|1|Présence et participation de femmes et d’hommes dans un même espace ou une même activité, avec les mêmes droits.
Devise|1|Formule qui exprime des valeurs communes. La devise de la République française est « Liberté, Égalité, Fraternité ».
Coq gaulois|1|Animal utilisé comme symbole de la France, notamment dans le sport. Il ne remplace pas le drapeau tricolore.
Bloc de constitutionnalité|2|Ensemble des textes et principes de valeur constitutionnelle utilisés pour vérifier que les lois respectent la Constitution. Il comprend notamment la Constitution de 1958, la Déclaration de 1789 et la Charte de l’environnement.
Conseiller municipal|2|Personne élue au conseil municipal pour participer aux décisions de la commune. Les conseillers municipaux élisent le maire.
Juge|2|Magistrat chargé de rendre une décision de justice en appliquant le droit à une situation.
Élection présidentielle|2|Vote permettant de choisir le président de la République française. Les citoyens français remplissant les conditions de vote y participent.
Projet de loi|2|Texte de loi proposé par le Gouvernement et soumis au Parlement.
Proposition de loi|2|Texte de loi proposé par un député ou un sénateur.
Procès équitable|3|Procès dans lequel chacun peut faire valoir ses arguments devant une juridiction indépendante et impartiale, avec le respect des droits de la défense.
Droits de la défense|3|Garanties permettant à une personne de connaître ce qui lui est reproché, de se défendre et de bénéficier de l’aide d’un avocat.
Sanction|3|Conséquence prévue lorsqu’une règle ou une loi n’est pas respectée. Sa nature dépend de la faute ou de l’infraction.
Responsabilité|3|Obligation de répondre de ses actes et, selon les cas, de réparer les dommages causés ou d’accepter une sanction.
Révolution|4|Changement profond et rapide de l’organisation politique ou sociale. La Révolution française commence en 1789.
Bastille|4|Ancienne forteresse et prison de Paris prise le 14 juillet 1789. Cet événement est un repère de la Révolution française.
Charles de Gaulle|4|Dirigeant de la France libre pendant la Seconde Guerre mondiale, puis premier président de la Ve République, instaurée en 1958.
Napoléon Bonaparte|4|Dirigeant français devenu empereur en 1804. Son époque est notamment associée au Code civil.
Traité de Rome|4|Traité signé en 1957 créant la Communauté économique européenne, une étape importante de la construction européenne.
CEE|2|Communauté économique européenne, créée par le traité de Rome en 1957. Elle a précédé l’Union européenne.
Jules Ferry|4|Responsable politique associé aux lois de 1881 et 1882 rendant l’école primaire publique gratuite, puis l’instruction obligatoire et l’enseignement public laïque.
Louis XVI|4|Roi de France au début de la Révolution française. Il est exécuté en 1793.
Loire|4|Plus long fleuve de France. Il se jette dans l’océan Atlantique.
Rhône|4|Fleuve qui traverse notamment Lyon et se jette dans la mer Méditerranée.
Jour férié|5|Jour lié à une fête ou à une commémoration. Un jour férié n’est pas toujours un jour sans travail : les règles dépendent de la situation.
Assiduité|5|Présence régulière et respect des horaires dans une activité, notamment à l’école ou en formation.
Vaccination|5|Moyen de protéger une personne contre certaines maladies et de limiter leur transmission.
Temps de travail|5|Durée pendant laquelle un salarié exerce son activité professionnelle. Les règles dépendent notamment du contrat et de la loi.
Demandeur d’emploi|5|Personne qui recherche un travail et peut bénéficier d’un accompagnement adapté.
Entrepreneuriat|5|Création et développement d’une activité ou d’une entreprise, dans le respect des obligations légales.
Inclusion|5|Organisation de la société pour permettre à chacun de participer, notamment aux personnes en situation de handicap.
'''
nextid=max(int(n['id'][-4:]) for n in entries)+1
for line in add.strip().splitlines():
 title,theme,definition=line.split('|',2)
 if norm(title) in known:continue
 n=dict(id=f'SCR_GLO_{nextid:04d}',title=title,theme=int(theme),aliases=[title],definition=definition);nextid+=1;entries.append(n);known[norm(title)]=n
fixes={'UNESCO':'Organisation des Nations unies pour l’éducation, la science et la culture. Elle contribue notamment à la protection du patrimoine mondial. Le Mont-Saint-Michel et sa baie sont inscrits sur la Liste du patrimoine mondial.', 'Prostitution':'Échange d’un acte sexuel contre une rémunération. En France, l’achat d’un acte sexuel est interdit ; le proxénétisme est également puni par la loi.', 'Traite des êtres humains':'Recrutement, transport ou accueil d’une personne pour l’exploiter, notamment par la contrainte ou la tromperie. C’est une infraction pénale grave.', 'Clovis':'Roi des Francs associé à la dynastie mérovingienne et à sa conversion au christianisme. Il a régné bien avant Charlemagne.', 'Citoyen':'Personne qui possède la nationalité d’un État et les droits et devoirs qui s’y rattachent. En France, le droit de vote dépend notamment de la nationalité, de l’âge et du type d’élection.'}
for title,d in fixes.items():known[norm(title)]['definition']=d
# Ajoute des variantes courantes et fautes usuelles ; elles restent limitées aux notions civiques.
for title,aliases in {'Parlement':['parlemant','parllement'],'Gouvernement':['gouvernment','gouvernemant','gouv'],'Carte de séjour pluriannuelle':['carte pluriannuelle','titre pluriannuel','csp'],'Naturalisation':['nationalité française','devenir français'],'Laïcité':['laicite','laicité'],'Liberté d’expression':['liberte expression']}.items():
 known[norm(title)]['aliases']=list(dict.fromkeys(known[norm(title)]['aliases']+aliases))
p.write_text(json.dumps(entries,ensure_ascii=False,indent=2))
# Liens explicites, contrôlés par thème et rôle. Préserver les identifiants utilisés ailleurs.
relations={'Mont-Saint-Michel':['UNESCO','Patrimoine'],'UNESCO':['Patrimoine','Mont-Saint-Michel'],'Prostitution':['Traite des êtres humains','Consentement'],'Clovis':['Gaule','Moyen Âge'],'Citoyen':['Citoyenneté','Nationalité','Vote'],'Carte de séjour pluriannuelle':['Titre de séjour','Carte de résident','Naturalisation'],'Carte de résident':['Titre de séjour','Carte de séjour pluriannuelle','Naturalisation'],'Naturalisation':['Nationalité','Citoyenneté','Carte de séjour pluriannuelle'],'Projet de loi':['Gouvernement','Parlement','Proposition de loi'],'Proposition de loi':['Député','Sénateur','Projet de loi'],'Bloc de constitutionnalité':['Constitution','Conseil constitutionnel','Charte de l’environnement'],'Bastille':['Révolution française','Fête nationale'],'CEE':['Union européenne','Traité de Rome']}
b=blocks((r/'modules/04_glossaire.md').read_text())
for n in entries:
 definition=n['definition'];parts=re.split(r'\*\*(À retenir|Attention à ne pas confondre|Voir aussi)\s*:\*\*',definition)
 body='\n'.join('- '+a for a in dict.fromkeys([n['title']]+n['aliases']))+'\n\n### 📘 '+n['title']+'\n\n**Définition simple :** '+parts[0].strip()+'\n\n'
 rel=[]
 for i in range(1,len(parts),2):
  label,content=parts[i],parts[i+1].strip()
  if label=='Voir aussi':
   rel=[x.strip().rstrip('.') for x in content.split(';')]
  else: body+=('💡 Retenez : ' if label=='À retenir' else '⚠️ À distinguer : ')+content+'\n\n'
 if n['title'] in relations:rel=relations[n['title']]
 matched=[known[norm(x)] for x in rel if norm(x) in known and known[norm(x)]['id']!=n['id']]
 if matched:body+='**Voir aussi :**\n'+''.join(f'1. [📘 {x["title"]}]({x["id"]})\n' for x in matched)+'\n'
 body+=f'1. [📚 Réviser cette thématique](SCR_REV_T{n["theme"]}_MENU)\n1. [↩️ Retour au glossaire](SCR_GLO_MENU)\n1. [🏠 Menu principal](MENU_PRINCIPAL)\n';b[n['id']]=body
(r/'modules/04_glossaire.md').write_text(join(b))
d=json.loads((r/'data/question_libre.json').read_text());byid={n['id']:n for n in d['notions']}
for n in entries:
 qid='SCR_QL_GLO'+n['id'][-4:]
 if qid in byid:byid[qid].update(answer=n['definition'],aliases=n['aliases'])
 else:d['notions'].append(dict(id=qid,title=n['title'],answer=n['definition'],aliases=n['aliases'],course=f'SCR_REV_T{n["theme"]}_MENU'))
unique={}
for n in d['notions']:
 key=norm(n['title'])
 if key in unique:unique[key]['aliases']=list(dict.fromkeys(unique[key]['aliases']+n['aliases']))
 else:unique[key]=n
d['notions']=list(unique.values())
(r/'data/question_libre.json').write_text(json.dumps(d,ensure_ascii=False,indent=2));print(len(entries),'notions glossaire')
