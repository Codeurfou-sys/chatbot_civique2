"""Vérifie l'import corrigé, les réponses et l'intégrité des classeurs sources."""
import sys,json,hashlib,re
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parent.parent))
import synchroniser_banques_examens as source
from corrections_langue import corriger_texte
from openpyxl import load_workbook
root=Path(__file__).resolve().parent.parent
count=changed=0
for p in (root/'sources').glob('*.xlsx'):
 if p.name=='FICHIER_EXCEL_MOTEUR_CHAT_BOT.xlsx':continue
 w=load_workbook(p,read_only=True,data_only=True)
 for sheet in w:
  raw=list(sheet.values)
  if not raw or 'ID' not in raw[0]:continue
  headers=[source.clean(h) for h in raw[0]]
  original=[dict(zip(headers,row)) for row in raw[1:] if any(v is not None for v in row)]
  imported=source.read_rows(p,sheet.title)
  assert len(imported)==len(original)
  for before,after in zip(original,imported):
   for key in ['ID','ID question source','Bonne réponse','Mots-clés']:
    assert before.get(key)==after.get(key),(p.name,key)
   assert all(corriger_texte(after.get(key))==after.get(key) for key in ['Question','Mise en situation','Question posée','Réponse A','Réponse B','Réponse C','Réponse D','Explication pédagogique','Feedback pédagogique','Astuce mémoire'])
   count+=1;changed+=before!=after
 w.close()
previous=root.parent/'work_v48/sources'
if previous.exists():
 for p in (root/'sources').glob('*.xlsx'):
  assert hashlib.sha256(p.read_bytes()).digest()==hashlib.sha256((previous/p.name).read_bytes()).digest(),p.name
for sample in ['Elle est composée de 13 régions.', 'La rubrique **Mes résultats sauvegardés** vous permet de consulter les bilans.']:
 assert corriger_texte(sample)==sample
for section in ['words','phrases']:
 for original in json.loads((root/'data/corrections_langue_v49.json').read_text())[section]:
  corrected=corriger_texte(original)
  assert corriger_texte(corrected)==corrected,original
rules=json.loads((root/'data/corrections_langue_v49.json').read_text())
for p in (root/'modules').glob('*.md'):
 for line in p.read_text().splitlines():
  if line.startswith('`') or re.fullmatch(r'\s*- [\w -]+\s*',line):continue
  assert corriger_texte(line)==line,(p.name,line[:200])
print(f'Import vérifié : {count} lignes, {changed} lignes corrigées ; identifiants, bonnes réponses et classeurs préservés.')
