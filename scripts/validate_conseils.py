from pathlib import Path
import sys,re,json
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from synchroniser_entrainements import split
from scripts.conseils_entrainement import ROLES,STORIES,target
blocks=split(Path('modules/06_entrainement.md').read_text())
manifest=json.loads(Path('reports/entrainements_sources.json').read_text())
assert sum(len(x) for x in ROLES.values())==30
assert len({role for roles in ROLES.values() for role in roles})==30
assert all(len(STORIES[t])==6 for t in ROLES)
for item in manifest:
 base=f'ENT_{item["exam"]}_{item["route"]}_V{item["variant"]:02d}'
 body=blocks[base+'_RESULT'];n=len(item['questions'])
 assert 'Construire les bases' not in body and 'Mises en situation : **' not in body
 assert 'Votre défi pour la prochaine séance' in body
 for score in range(n+1):
  assert f'Votre score est de **{score}/{n}**' in body
  if score<n:assert score<target(score,n)<=n
  assert body.count(f'`if @score == {score}`')==(3 if score==n else 2)
 if item['route'].startswith('T'):
  theme=item['questions'][0]['theme']
  assert all(role in body for role in ROLES[theme])
  assert 'visez **6/10**' in body and '**8/10 à deux reprises**' in body
 if any(x['situation'] for x in item['questions']):assert 'Quel principe civique faut-il identifier ?' in body
published=Path('chat_bot.md').read_text()
assert 'flex-direction: column; align-items: flex-start' in published
for name in ['csp','resident','naturalisation','cigogne']:
 assert f'assets/icons/{name}.svg' in published
 assert Path(f'assets/icons/{name}.svg').exists()
assert '[🌋 Auvergne](SCR_PASS_REGION_AUVERGNE)' in published
print('OK — 480 résultats, tous les scores, objectifs progressifs, 30 paliers, icônes et boutons en colonne.')
