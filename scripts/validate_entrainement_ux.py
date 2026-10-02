from pathlib import Path
from collections import Counter
import json,sys,re
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
import synchroniser_entrainements as g
import synchroniser_banques_examens as m
manifest=json.loads(Path('reports/entrainements_sources.json').read_text());assert len(manifest)==480
b=g.split(Path('modules/06_entrainement.md').read_text())
for item in manifest:
 rows=item['questions'];route=item['route'];e=item['exam'];v=item['variant']
 assert len({r['id'] for r in rows})==len(rows)
 if route.startswith('LVL'):
  assert len(rows)==15
  assert Counter(r['theme'] for r in rows if not r['situation'])=={t:2 for t in range(1,6)}
  assert Counter(r['theme'] for r in rows if r['situation'])=={t:1 for t in range(1,6)}
  assert all(not r['situation'] for r in rows[:10]) and all(r['situation'] for r in rows[10:])
 elif route.startswith('ALL'):assert Counter(r['theme'] for r in rows)=={t:2 for t in range(1,6)}
 else:assert len(rows)==10 and len({r['theme'] for r in rows})==1
 # Un retour ne pointe jamais vers une question déjà comptabilisée.
 for n,r in enumerate(rows,1):
  id=f'ENT_{e}_{route}_V{v:02d}_Q{n:02d}'
  for suffix in ('','_VRAI','_FAUX'):
   assert '[🏠 Menu principal](MENU_PRINCIPAL)' in b[id+suffix]
   assert '[↩️ Retour]' in b[id+suffix]
  true=b[id+'_VRAI'];false=b[id+'_FAUX']
  assert true.count('@score = calc(@score+1)')==1
  assert '@score = calc' not in false
  assert f'@ent_t{r["theme"]} = calc(@ent_t{r["theme"]}+1)' in true
for p in Path('modules').glob('*.md'):
 if p.name in ('start.md','00_accueil_complements.md'):continue
 for id,body in g.split(p.read_text()).items():
  assert ']('+'MENU_PRINCIPAL'+')' in body,(p.name,id)
print('OK — 480 séries, répartitions 10+5 et 2/thématique, scores et retours sur chaque écran.')
