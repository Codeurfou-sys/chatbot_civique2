"""Synchronise the editable question bank, native answers and published bundle."""
from pathlib import Path
import json,re,subprocess,sys
root=Path(__file__).resolve().parent.parent
bank=json.loads((root/'data/questions_apprenants_v32.json').read_text())['entries']
p=root/'modules/10_question_libre.md';text=p.read_text()
for row in bank:
 key=row['id']
 if not re.fullmatch(r'[A-Z0-9_]+',key):raise ValueError('Identifiant invalide')
 pattern=r'(<!-- Réponse : '+re.escape(key)+r' -->\n`if @qlRoute == "'+re.escape(key)+r'"`\n).*?(\n`@qlReponse =)'
 text,count=re.subn(pattern,lambda m:m[1]+row['answer']+m[2],text,count=1,flags=re.S)
 if count!=1:raise ValueError('Réponse introuvable : '+key)
 links=[(l,t) for l,t in row['links'] if t!='SCR_QL_AGAIN']
 content='\n'.join('1. ['+l+']('+t+')' for l,t in links)+'\n1. [❓ Poser une autre question](SCR_QL_AGAIN)\n'
 text=re.sub(r'(`if @qlReponse == "'+re.escape(key)+r'"`\n).*?(`endif`)',lambda m:m[1]+content+m[2],text,count=1,flags=re.S)
p.write_text(text)
(root/'chatbot/questions-banque.js').write_text('window.CiviQuestionsBank='+json.dumps(bank,ensure_ascii=False,separators=(',',':'))+';\n')
subprocess.run([sys.executable,str(root/'scripts/sync_module_into_chatbot.py'),str(root/'chat_bot.md'),str(p)],check=True)
print('Banque, réponses et boutons synchronisés.')
