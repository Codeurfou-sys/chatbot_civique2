"""Contrôle ciblé : le traitement des dates ne modifie aucun autre module."""
from pathlib import Path
import argparse, hashlib, json, re
p=argparse.ArgumentParser();p.add_argument('--snapshot',action='store_true');a=p.parse_args()
def digest():
    result={str(f):hashlib.sha256(f.read_bytes()).hexdigest() for f in Path('modules').glob('*.md') if f.name!='07_passer_examen.md'}
    text=Path('chat_bot.md').read_text()
    text=re.sub(r'<!-- Début du fichier source : modules/07_passer_examen.md -->.*?<!-- Fin du fichier source : modules/07_passer_examen.md -->','MODULE07',text,flags=re.S)
    result['chat_bot.md hors module07']=hashlib.sha256(text.encode()).hexdigest()
    return result
checkpoint=Path('.build_chatmd/invariants.json')
if a.snapshot:
    checkpoint.parent.mkdir(exist_ok=True);checkpoint.write_text(json.dumps(digest()));print('Modules et chatbot hors dates protégés.');raise SystemExit()
assert json.loads(checkpoint.read_text())==digest(),'Un fichier hors module 07 a été modifié.'
text=Path('chat_bot.md').read_text();module=Path('modules/07_passer_examen.md').read_text().strip()
assert f'<!-- Début du fichier source : modules/07_passer_examen.md -->\n\n{module}\n\n<!-- Fin du fichier source : modules/07_passer_examen.md -->' in text
sessions=json.loads(Path('recherche-centres/data/sessions.json').read_text());assert sessions.get('generated_at') and sessions.get('centres')
assert isinstance(sessions.get('sessions'),list)
print('Dates contrôlées ; banques, révisions, entraînements et examens conservés à l’identique.')
