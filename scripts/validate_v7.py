"""Contrôles structurels de l’expérience v7 et du tirage natif ChatMD."""
from pathlib import Path
import json,re,sys
from collections import Counter
sys.path.insert(0,str(Path(__file__).resolve().parent));from ameliorations_v6 import blocks,norm
compiled=Path('chat_bot.md').read_text();ids=set(re.findall(r'(?m)^## (\w+)\s*$',compiled));bil=blocks(Path('modules/02_bilan.md').read_text());catalog=json.loads(Path('reports/bilans_tirage_v7.json').read_text())
for exam in ['CSP','CR','NAT']:
 rows=[r for r in catalog if r['exam']==exam];assert len({r['key'] for r in rows})==len(rows);assert len({norm(r['question']) for r in rows})==len(rows)
 for theme in range(1,6):
  pool=[r for r in rows if r['theme']==theme];assert len(pool)>=10
  router=bil[f'BIL_DRAW_{exam}_T{theme}'];assert '@bilUseHistory' in router and 'Math.random()' in router
  assert f'@bilSeen_{exam}.includes' in router
 for r in rows:
  q=r['screen'];assert r['question'] in bil[q];assert bil[q].count('class="qcm-letter"')==4
  for suffix in ['_VRAI','_FAUX']:
   body=bil[q+suffix];assert '@bilAnswerKeys.includes' in body;assert 'Question suivante' in body and 'Voir mes résultats' in body
  assert f'@score_t{r["theme"]} = calc(@score_t{r["theme"]}+1)' in bil[q+'_VRAI'];assert '@score = calc' not in bil[q+'_FAUX']
for name in ['02_bilan.md','06_entrainement.md','08_conseils.md','09_faq.md']:
 assert not re.search(r'(?m)^\d+[.)] \[[^\n]*\]\(SCR_QL_RESET\)',Path('modules',name).read_text()),name
faq=Path('modules/09_faq.md').read_text();assert '75 €' not in faq and '80 €' in faq;assert faq.count('civi-faq-title')==71;assert 'Retour au menu du module' not in faq
assert 'Retour aux questions du thème' in faq
assert '#b83a64' in Path('assets/icons/csp-v7.svg').read_text();assert '#2673bf' in Path('assets/icons/naturalisation-v7.svg').read_text()
assert '[🧭 Consulter mon parcours personnalisé](SCR_PARCOURS_MENU)' in Path('modules/start.md').read_text()
assert 'SCR_PARCOURS_FAIBLES' in Path('modules/08_conseils.md').read_text()
assert 'civi-progress-row' in compiled and 'white-space: nowrap' in compiled
assert '#controls { bottom: 26px' in compiled and '#footer { bottom: 3px' in compiled
assert 'Réponse claire' not in faq
for name in Path('modules').glob('*.md'):
 for i,body in blocks(name.read_text()).items():
  if '!SelectNext:' in body:
   assert 'civicoach-route' in body and '!Typewriter: false' in body
   assert not re.search(r'(?m)^\d+[.)] \[',body)
   for line in re.findall(r'(?m)^!SelectNext: (.+)$',body):
    for target in line.split(' / '):assert target.strip() in ids,(i,target)
print(f'OK v7 — {len(catalog)} questions distinctes réparties entre les trois banques, routes de tirage, compteurs, parcours, navigation et FAQ.')
