"""Controle des bilans, explications, corrections, feedbacks et chargement de la page."""
from pathlib import Path
import json,re,sys
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT))
from scripts.actualiser_bases import load_banks,blocks,clean,key_for
banks,_=load_banks();text=(ROOT/'chat_bot.md').read_text();b=blocks(text);s=(ROOT/'chatbot/feedback-data.js').read_text();data=json.loads(s[s.index('{'):s.rindex('}')+1]);manifest=json.loads((ROOT/'reports/bilans_tirage_v7.json').read_text());checks=0
for exam,(q,ms) in banks.items():
 by={clean(r['ID']):r for r in q+ms};seen_sources=set();items=[r for r in manifest if r['exam']==exam]
 assert {r['id'] for r in items}=={clean(r['ID']) for r in q},exam+' couverture bilan incomplète'
 for entry in items:
  row=by[entry['id']];screen=entry['screen'];body=b[screen]
  assert '**'+clean(row['Question'])+'**' in body,screen
  for letter in 'ABCD':assert clean(row['Réponse '+letter]) in body,screen
  assert screen in b[f'BIL_DRAW_{exam}_T{row["N° thématique"]}'],screen
 for screen,body in b.items():
  tag=re.search(r'<!-- Source '+exam.lower()+r' : (.+?) -->',body)
  if not tag or not screen.startswith(('BIL_ITEM_','ENT_','EXAM_')):continue
  seen_sources.add(tag[1]);row=by[tag[1]];key=key_for(row);assert 'data-civi-question="'+key+'"' in body,screen
  assert data['questions'][key]['correct']==clean(row['Réponse '+clean(row['Bonne réponse']).upper()]),screen
  if screen.startswith('EXAM_'):assert data['exam'][screen]==key,screen
  else:
   explanation=clean(row['Feedback pédagogique'] if row.get('_situation') else row['Explication pédagogique'])
   for suffix in ['VRAI','FAUX']:assert explanation in b[screen+'_'+suffix],screen
   assert '|'+key+'|' in b[screen+'_FAUX'],screen
  checks+=1
 assert set(by)==seen_sources,exam+' sources absentes des parcours : '+str(set(by)-seen_sources)
page=(ROOT/'chatbot/index.html').read_text();assert 'src="bilan-precedent.js?' in page
assert not re.search(r"a.textContent='📖 Relire le chapitre",(ROOT/'chatbot/feedbacks.js').read_text())
print('OK —',checks,'questions, feedbacks et corrections issus des Excel ; tous les bilans couverts ; scripts chargés.')
