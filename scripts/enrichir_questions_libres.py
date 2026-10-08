"""Compile les réponses et les intentions déterministes de Poser une question."""
from pathlib import Path
import re,json,unicodedata

def normalise(s):
 s=''.join(c for c in unicodedata.normalize('NFD',s.lower()) if not unicodedata.combining(c))
 return re.sub(r'\s+',' ',re.sub(r'[^a-z0-9 ]',' ',s)).strip()
def pattern(aliases):
 words=sorted(set(normalise(x) for x in aliases),key=len,reverse=True)
 return r'(^| )('+ '|'.join(re.escape(x).replace(r'\ ',' ') for x in words)+r')( |$)'
def predicate(groups):return ' && '.join('('+' || '.join('@qlNormalisee.includes('+json.dumps(' '+normalise(alias)+' ',ensure_ascii=False)+')' for alias in group)+')' for group in groups)
def link(label,target):return f'1. [{label}]({target})'
def split(text):
 hits=list(re.finditer(r'(?m)^## (\w+)\s*$',text))
 return {x[1]:text[x.end():hits[i+1].start() if i+1<len(hits) else len(text)].strip() for i,x in enumerate(hits)}
def ordered_rules(data):
 rules=[dict(id='INTENT_'+i['id'],groups=i['groups'],condition=i.get('condition'),answer=i['answer'],links=i['links']) for i in data['intents'] if i['id'] not in ('CONSEILS','REVISIONS')]
 for notion in sorted(data['notions'],key=lambda n:(len(normalise(n['title'])),max(map(len,n['aliases']))),reverse=True):
  links=[]
  if notion['id'].startswith('SCR_QL_GLO'):links.append(['📖 Voir la fiche du glossaire','SCR_GLO_'+notion['id'][-4:]])
  links.append(['📚 Approfondir cette thématique',notion['course']])
  rules.append(dict(id=notion['id'],groups=[notion['aliases']],answer='### 📘 '+notion['title']+'\n\n'+notion['answer'],links=links))
 for i in data['intents']:
  if i['id'] in ('CONSEILS','REVISIONS'):rules.append(dict(id='INTENT_'+i['id'],groups=i['groups'],condition=i.get('condition'),answer=i['answer'],links=i['links']))
 return rules

def generate():
 if 'INTENT_PREPARER_NAT' in Path('modules/10_question_libre.md').read_text():
  print('Le moteur v31 est déjà compilé dans SCR_QL_ANSWER ; utilisez sync_module_into_chatbot.py pour synchroniser le module.');return
 p=Path('modules/10_question_libre.md');blocks=split(p.read_text());data=json.loads(Path('data/question_libre.json').read_text())
 intro='''### Que souhaitez-vous savoir ?

Écrivez votre question avec vos mots, par exemple : « Je ne comprends pas ce qu’est le gouvernement », « Comment mieux retenir les connaissances ? » ou « Comment réussir les mises en situation ? ».

`@qlQuestion = @INPUT : Écrivez votre question`

`if @qlQuestion`
`@qlNormalisee = calc(" "+normalizeText(@qlQuestion).replaceAll("œ","oe").replaceAll("æ","ae").replaceAll("«"," ").replaceAll("»"," ").replaceAll("’"," ").replaceAll("'"," ").replaceAll("-"," ").replaceAll("."," ").replaceAll("?"," ").replaceAll(","," ").replaceAll("!"," ").replaceAll(":"," ").replaceAll(";"," ").replaceAll("/"," ").replaceAll("("," ").replaceAll(")"," ").replaceAll("["," ").replaceAll("]"," ").replaceAll("\\n"," ").replaceAll("\\r"," ").replaceAll("\\t"," ").replaceAll(" "," ").replaceAll("  "," ").replaceAll("  "," ").replaceAll("  "," ").replaceAll("  "," ").replaceAll("  "," ").replaceAll("  "," ").trim()+" ")`
`@qlTrouvee = false`
`@qlReponse = undefined`

'''
 rules=ordered_rules(data)
 for rule in rules:
  intro+=f'<!-- Réponse : {rule["id"]} -->\n`if !@qlTrouvee && ({rule.get('condition') or predicate(rule["groups"])})`\n'+rule['answer']+'\n\n'
  intro+=f'`@qlReponse = {rule["id"]}`\n`@qlTrouvee = true`\n`endif`\n\n'
 # ChatMD place les boutons après le texte : ils utilisent une réponse stable,
 # et non le drapeau de recherche déjà passé à true.
 for rule in rules:
  intro+=f'`if @qlReponse == "{rule["id"]}"`\n'+'\n'.join(link(label,target) for label,target in rule['links'])+'\n'+link('❓ Poser une autre question','SCR_QL_RESET')+'\n`endif`\n\n'
 intro+='''`if !@qlTrouvee`
### Précisons votre demande

Je n’ai pas identifié le sujet de votre question. Vous pouvez préciser le mot à expliquer ou le type d’aide souhaité, par exemple « Explique le Parlement » ou « Comment mieux mémoriser ? ».

1. [❓ Reformuler ma question](SCR_QL_RESET)
1. [📚 Chercher une notion par thème](SCR_QL_THEMES)
1. [💡 Choisir un conseil](SCR_CONS_MENU)
1. [❔ Consulter la FAQ](SCR_FAQ_MENU)
`endif`
`endif`

`if !@qlQuestion`
Écrivez votre question dans la barre de saisie, puis cliquez sur **Envoyer** ou appuyez sur **Entrée**.
`endif`

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)
'''
 blocks['SCR_QL_INPUT']=intro
 if '@qlReponse = undefined' not in blocks['SCR_QL_RESET']:blocks['SCR_QL_RESET']='`@qlReponse = undefined`\n'+blocks['SCR_QL_RESET']
 for n in data['notions']:
  body='### 📘 '+n['title']+'\n\n'+n['answer']+'\n\n'
  if n['id'].startswith('SCR_QL_GLO'):body+=link('📖 Voir la fiche du glossaire','SCR_GLO_'+n['id'][-4:])+'\n'
  body+=link('📚 Approfondir cette thématique',n['course'])+'\n'+link('🎯 Reprendre un entraînement','SCR_ENT_MENU')+'\n'+link('❓ Poser une autre question','SCR_QL_RESET')+'\n'+link('↩️ Reprendre mon activité','SCR_QL_RETOUR')+'\n'+link('↩️ Retour aux questions','SCR_QL_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
  blocks[n['id']]=body
 blocks['SCR_QL_EXAMPLES']='''### Exemples de questions reconnues

- « Je ne comprends pas ce qu’est le gouvernement. »
- « Quelle est la différence entre le Gouvernement et le Parlement ? »
- « Comment puis-je mieux retenir les dates ? »
- « Comment réussir les mises en situation ? »
- « Je veux réviser les droits et les devoirs. »
- « Où puis-je m’inscrire à l’examen ? »

1. [❓ Poser ma question](SCR_QL_RESET)
1. [↩️ Retour aux questions](SCR_QL_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)
'''
 p.write_text('<!-- Module Question libre — réponses validées et intentions, sans IA générative -->\n\n'+'\n\n'.join('## '+id+'\n\n'+body for id,body in blocks.items())+'\n')
 Path('reports/questions_libres_regles.json').write_text(json.dumps(rules,ensure_ascii=False,indent=2)+'\n')
 print(f'{len(data["notions"])} notions, {len(data["intents"])} intentions, {sum(len(n["aliases"]) for n in data["notions"])} alias ; réponses directes et liens ciblés.')
if __name__=='__main__':generate()
