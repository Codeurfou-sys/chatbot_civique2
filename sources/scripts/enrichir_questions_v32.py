"""Build a local, reviewed-answer question bank and intention router. No remote AI."""
from pathlib import Path
import json,re,unicodedata
ROOT=Path(__file__).resolve().parent.parent
source=ROOT/'modules/10_question_libre.md';text=source.read_text();data=json.loads((ROOT/'data/question_libre.json').read_text())
if '@qlRoute' in text:
 print('Banque v32 déjà compilée. Modifiez data/questions_apprenants_v32.json et utilisez les scripts de validation et de synchronisation.');raise SystemExit(0)
# Keep the validated answers and their exact in-chat destinations.
a=text.index('## SCR_QL_ANSWER');b=text.find('\n## ',a+5);screen=text[a:b]
rules=[]
for m in re.finditer(r'<!-- Réponse : ([A-Z0-9_]+) -->\n`if (.*?)`\n(.*?)\n`@qlReponse =',screen,re.S):
 key,cond,answer=m.groups()
 cond=cond.replace('!@qlTrouvee && ','',1).replace('@qlDefinitionDemandee && ','')
 link=re.search(r'`if @qlReponse == "'+re.escape(key)+r'"`\n(.*?)`endif`',screen,re.S)
 links=re.findall(r'^1\. \[(.*?)\]\((.*?)\)',link[1],re.M) if link else []
 rules.append({'id':key,'condition':cond,'answer':answer.strip(),'links':links,'source':'modules/10_question_libre.md#SCR_QL_ANSWER'})
custom=[
 ('INTENT_USAGE_PDF', [['pdf','telecharger','exporter'],['parcours','resultats','bilan','progression']], 'Ouvrez **Mes résultats sauvegardés**, puis cliquez sur **Télécharger mon parcours en PDF**. Ce document regroupe les tentatives enregistrées et les conseils associés. Si une tentative manque, vérifiez que vous avez terminé l’activité et atteint son écran de résultats.', [('📄 Ouvrir mes résultats sauvegardés','SCR_SAVE_MENU')],['Comment télécharger mon bilan en PDF ?','Je veux exporter les résultats de mes entraînements','Où télécharger mon parcours ?','Je voudrais imprimer mes résultats']),
 ('INTENT_USAGE_RESULTATS', [['retrouver','consulter','voir','sauvegardes','enregistres'],['resultats','tentatives','progression','parcours','scores']], 'Vous pouvez retrouver vos bilans, entraînements et examens blancs dans **Mon parcours personnalisé**. **Mes résultats sauvegardés** permet aussi de consulter les tentatives enregistrées et de télécharger votre parcours en PDF.', [('🧭 Mon parcours personnalisé','SCR_PARCOURS_MENU'),('📄 Mes résultats sauvegardés','SCR_SAVE_MENU')],['Où retrouver mes résultats ?','Comment consulter mes anciens scores ?','Je veux voir mes tentatives enregistrées','Mes entraînements sont-ils sauvegardés ?']),
 ('INTENT_USAGE_EFFACER', [['effacer','supprimer','reinitialiser'],['progression','resultats','tentatives','parcours']], 'Dans **Mes résultats sauvegardés**, cliquez sur **Effacer ma progression**, puis confirmez avec **Oui, effacer ma progression**. Vos tentatives et votre progression seront supprimées dans les fenêtres CiviCoach liées. Vous pouvez annuler avant de confirmer. Cette réponse ne déclenche aucune suppression.', [('📄 Mes résultats sauvegardés','SCR_SAVE_MENU')],['Comment effacer ma progression ?','Je veux supprimer toutes mes tentatives','Où remettre mes résultats à zéro ?']),
 ('INTENT_USAGE_REPRENDRE', [['reprendre','continuer','arrete','interrompu'],['parcours','exercice','activite','entrainement','revision']], 'Pour retrouver vos résultats et choisir la suite, ouvrez **Mon parcours personnalisé**. Les activités de révision enregistrent leur avancement sur ce navigateur : revenez au même chapitre pour les reprendre. Vous pouvez aussi retrouver les révisions depuis le menu principal.', [('🧭 Mon parcours personnalisé','SCR_PARCOURS_MENU'),('📚 Mes révisions','SCR_REV_MENU')],['Comment reprendre une activité interrompue ?','Je veux continuer mes révisions','Où reprendre mon parcours ?']),
 ('INTENT_USAGE_GRAND', [['grand','plein ecran','agrandir'],['chatbot','civicoach','activite','exercice']], 'Utilisez **Ouvrir CiviCoach en grand** depuis l’accueil pour ouvrir le chatbot dans un nouvel onglet. Pour une activité, utilisez son bouton d’ouverture en grand : vous pourrez l’afficher dans une fenêtre plus confortable.', [('🏠 Accueil de CiviCoach','MENU_PRINCIPAL')],['Comment ouvrir Civicoach en plein écran ?','Je veux afficher mon activité en grand','Comment agrandir le chatbot ?']),
 ('INTENT_USAGE_QUESTION', [['autre question','plusieurs questions','nouvelle question']], 'Après une réponse, cliquez sur **Poser une autre question**, puis écrivez votre nouvelle demande. Attendez que la réponse et les suggestions soient entièrement affichées avant de choisir un bouton.', [('❓ Poser une autre question','SCR_QL_AGAIN')],['Comment poser plusieurs questions ?','Je veux poser une autre question','Où écrire une nouvelle question ?']),
 ('INTENT_CHOIX_EXERCICE', [['questions officielles','mises en situation'],['difference','choisir','comparaison']], 'Les **questions officielles** vous permettent de vérifier vos connaissances à partir de la banque de votre examen. Les **mises en situation d’entraînement** vous aident à appliquer un principe civique à une situation concrète ; elles ne sont pas des sujets officiels. Travaillez les deux, puis utilisez un examen blanc pour vous exercer sur l’ensemble.', [('📝 Choisir mon entraînement','SCR_ENT_THEME_EXAM'),('💡 Réussir les mises en situation','SCR_CONS_SITUATIONS_MENU')],['Quelle différence entre questions officielles et mises en situation ?','Dois-je choisir les questions officielles ou les mises en situation ?']),
 ('INTENT_SITUATIONS_NON_OFFICIELLES', [['mises en situation','situations'],['officielles','vraies','examen']], 'Les mises en situation proposées dans ces entraînements sont des exercices pédagogiques. Elles servent à développer votre réflexion et ne constituent pas une banque de mises en situation officielles de l’examen.', [('💡 Réussir les mises en situation','SCR_CONS_SITUATIONS_MENU'),('📝 Choisir mon entraînement','SCR_ENT_THEME_EXAM')],['Les mises en situation sont-elles officielles ?','Ces situations sont-elles les vraies questions de l’examen ?']),
]
def predicate(groups):return ' && '.join('('+' || '.join('@qlNormalisee.includes('+json.dumps(' '+w+' ')+')' for w in group)+')' for group in groups)
new=[]
for key,groups,answer,links,examples in custom:new.append({'id':key,'condition':predicate(groups),'answer':answer,'links':links,'examples':examples,'source':'contenu pédagogique CiviCoach v32'})
# Generic exercise guidance must not override specific revision/counsel requests.
generic=next((r for r in rules if r['id']=='INTENT_EXERCICES_A_PRECISER'),None)
if generic:rules.remove(generic);generic['condition']=predicate([['exercice','exercices','entrainement','entrainements','entrainer','quiz']]);rules.append(generic)
rules=new+rules
bank=[]
for r in rules:
 if r['id'].startswith('SCR_QL_GLO'):
  n=next(n for n in data['notions'] if n['id']==r['id']);name=n['title'];examples=[f'Qu’est-ce que {name} ?',f'Explique-moi {name} simplement.',f'Je ne comprends pas {name}.',f'Que signifie {name} ?',f'Peux-tu définir {name} ?',f'Peux-tu expliquer {name} avec des mots simples ?',f'{name}, ça veut dire quoi ?',f'Je voudrais comprendre la notion de {name}.']
  r['aliases']=n['aliases'];r['title']=name
 else:
  examples=r.get('examples',[]);d=next((i for i in data['intents'] if 'INTENT_'+i['id']==r['id']),None)
  if d:
   for group in d.get('groups',[]):
    for phrase in group[:5]:examples.extend([f'J’ai besoin d’aide pour {phrase}.',f'Pouvez-vous m’aider : {phrase} ?'])
  # These candidate paraphrases are filtered through the router before inclusion.
 r['examples']=examples
 bank.append(r)
# Static trusted rules only. Learner input is passed as data, never as executable code.
(ROOT/'data/questions_apprenants_v32.json').write_text(json.dumps({'version':32,'description':'Réponses issues des contenus CiviCoach ; formulations pédagogiques et demandes d’orientation.','entries':bank},ensure_ascii=False,indent=2)+'\n')
(ROOT/'chatbot/questions-banque.js').write_text('window.CiviQuestionsBank='+json.dumps(bank,ensure_ascii=False,separators=(',',':'))+';\n')
# Rebuild response screen using the router-selected ID, preserving native ChatMD rendering.
normal=re.search(r'`@qlNormalisee = calc\(.*?\)`',screen).group()
out='## SCR_QL_ANSWER\n<span class="nova-question-answer" aria-hidden="true"></span>\n!Keyboard: false\n`if @qlQuestion`\n'+normal+'\n`@qlTrouvee = false`\n`@qlReponse = undefined`\n'
for r in bank:out+='<!-- Réponse : '+r['id']+' -->\n`if @qlRoute == "'+r['id']+'"`\n'+r['answer']+'\n`@qlReponse = '+r['id']+'`\n`@qlTrouvee = true`\n`endif`\n'
for r in bank:out+='`if @qlReponse == "'+r['id']+'"`\n'+'\n'.join('1. ['+l+']('+t+')' for l,t in r['links'])+'\n1. [❓ Poser une autre question](SCR_QL_AGAIN)\n`endif`\n'
out+='''`if !@qlTrouvee`
Je ne suis pas sûr de ce que vous souhaitez savoir. Souhaitez-vous **comprendre une notion**, **vous entraîner**, **mieux mémoriser** ou **obtenir des informations sur l’examen** ? Précisez votre demande ou choisissez une rubrique ci-dessous.
1. [❓ Préciser ma question](SCR_QL_AGAIN)
1. [📖 Chercher une notion](SCR_GLO_SEARCH)
1. [📝 Choisir un entraînement](SCR_ENT_THEME_EXAM)
1. [💡 Consulter les conseils](SCR_CONS_MENU)
1. [🏛️ Informations sur l’inscription](SCR_PASS_MENU)
`endif`
`endif`
1. [🏠 Menu principal](MENU_PRINCIPAL)
'''
source.write_text(text[:a]+out+text[b:])
print(len(bank),'demandes types ;',sum(len(r['examples']) for r in bank),'formulations candidates')
