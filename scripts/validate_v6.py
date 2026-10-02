"""Vérifie les invariants pédagogiques et les routes ajoutés en v6."""
import json,re,base64,unicodedata
from pathlib import Path
from collections import Counter
import sys
sys.path.insert(0,str(Path(__file__).resolve().parent));from ameliorations_v6 import norm,blocks
b=blocks(Path('modules/02_bilan.md').read_text());manifest=json.loads(Path('reports/bilans_sources.json').read_text());assert len(manifest)==90
for series in manifest:
 rows=series['questions'];assert len(rows)==25;assert len({norm(r['question']) for r in rows})==25;assert len({r['id'] for r in rows})==25
 assert Counter(r['theme'] for r in rows)=={i:5 for i in range(1,6)}
 prefix=f'BIL_{series["exam"]}_{series["profile"]}_V{series["variant"]:02d}'
 for n,row in enumerate(rows,1):
  q=f'{prefix}_Q{n:02d}';assert ' '.join(row['question'].split()) in b[q];assert b[q].count('[🔘 ')==4
  assert f'{n-1}/25 questions terminées' in b[q]
  true=b[q+'_VRAI'];false=b[q+'_FAUX'];assert true.count('@score = calc(@score+1)')==1;assert '@score = calc' not in false
  assert f'@score_t{row["theme"]} = calc(@score_t{row["theme"]}+1)' in true
  for v in [true,false]:
   if n==25:assert '[📊 Voir mes résultats]' in v and 'Question suivante' not in v
  assert 'Retour au choix des bilans' in b[q]
 assert all(f'@score_t{i} == 5' in b[prefix+'_THEMES'] for i in range(1,6))
 priorities=re.findall(r'— priorité (très haute|haute|moyenne|faible)',b[prefix+'_RECO']);assert priorities==['très haute']*5+['haute']*5+['moyenne']*5+['faible']*5
 assert 'primordiale' not in b[prefix+'_RECO']
 assert f'SCR_ENT_{series["exam"]}_LVL_DIF_LAUNCH' in b[prefix+'_RECO']
assert 'Poser une question' not in Path('modules/02_bilan.md').read_text()
entries=json.loads(Path('data/glossaire_v6.json').read_text());assert len({norm(n['title']) for n in entries})==len(entries)==211
assert any(n['title']=='SMIC' for n in entries)
g=blocks(Path('modules/04_glossaire.md').read_text());compiled=Path('chat_bot.md').read_text();ids=set(re.findall(r'(?m)^## (\w+)\s*$',compiled))
for m in re.finditer(r'href="#([A-Za-z0-9+/=]+)"',g['SCR_GLO_FILTER']):assert base64.b64decode(m[1]).decode() in ids
routes=0
for p in Path('modules').glob('*.md'):
 for key,body in blocks(p.read_text()).items():
  if '!SelectNext:' not in body:continue
  routes+=1;assert 'civicoach-route' in body and '!Typewriter: false' in body;assert not re.search(r'(?m)^\d+[.)] \[',body)
  for line in re.findall(r'(?m)^!SelectNext: (.+)$',body):
   for dest in line.split(' / '):assert dest.strip() in ids,(key,dest)
print(f'OK v6 — 90 bilans distincts, 211 fiches sans doublon de titre, {routes} transitions directes, priorités, scores et retours.')
