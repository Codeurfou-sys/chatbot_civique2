"""Simule des cellules modifiées à la sortie du lecteur Excel. Restaure tous les fichiers."""
from pathlib import Path
import copy,json,sys
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT))
from scripts import actualiser_bases as build
paths=[ROOT/'chat_bot.md',ROOT/'modules/02_bilan.md',ROOT/'modules/05_preparer_examen.md',ROOT/'modules/06_entrainement.md',ROOT/'chatbot/feedback-data.js',ROOT/'chatbot/tirages-data.js',ROOT/'chatbot/index.html',ROOT/'reports/bilans_tirage_v7.json',ROOT/'reports/entrainements_sources.json',ROOT/'reports/examens_sources.json',ROOT/'reports/bases_excel.json']
original={p:p.read_bytes() for p in paths};read=build.source.read_rows
try:
 build.build();once={p:p.read_bytes() for p in paths};build.build();assert all(p.read_bytes()==value for p,value in once.items()),'Generation non idempotente'
 exam=json.loads((ROOT/'reports/examens_sources.json').read_text());nat=next(r for r in exam if r['exam']=='NAT');qid=nat['questions'][0];msid=nat['questions'][28];flags=set()
 def changed(path,sheet):
  rows=copy.deepcopy(read(path,sheet))
  for r in rows:
   if r.get('ID')==qid:
    r['Question']='QUESTION_TEST_ACTUALISATION';r['Réponse A']='CHOIX_A_TEST_ACTUALISATION';r['Bonne réponse']='A';r['Explication pédagogique']='EXPLICATION_TEST_ACTUALISATION';r['Notion']='NOTION_TEST_ACTUALISATION';flags.add('question')
   if r.get('ID')==msid:
    r['Mise en situation']='CONTEXTE_TEST_ACTUALISATION';r['Question posée']='SITUATION_TEST_ACTUALISATION';r['Réponse B']='CHOIX_B_TEST_ACTUALISATION';r['Bonne réponse']='B';r['Feedback pédagogique']='FEEDBACK_TEST_ACTUALISATION';flags.add('situation')
  return rows
 build.source.read_rows=changed;build.build();assert flags=={'question','situation'}
 b=build.blocks((ROOT/'chat_bot.md').read_text());used={'question':set(),'situation':set()}
 for screen,body in b.items():
  for ident,kind in [(qid,'question'),(msid,'situation')]:
   if '<!-- Source nat : '+ident+' -->' not in body:continue
   used[kind].add(screen.split('_')[0]);letter='A' if kind=='question' else 'B';assert ']('+screen+'_VRAI)' in body
   assert ('CHOIX_A_TEST_ACTUALISATION' if kind=='question' else 'CHOIX_B_TEST_ACTUALISATION') in body
   if not screen.startswith('EXAM_'):assert ('EXPLICATION_TEST_ACTUALISATION' if kind=='question' else 'FEEDBACK_TEST_ACTUALISATION') in b[screen+'_FAUX']
 assert used['question']=={'BIL','ENT','EXAM'},used
 assert 'ENT' in used['situation'],used
 assert 'CONTEXTE_TEST_ACTUALISATION' not in original[ROOT/'chat_bot.md'].decode()
 # A modified scenario may be replaced in mock exams to preserve distinct knowledge/situation content.
 assert 'CHOIX_B_TEST_ACTUALISATION' in (ROOT/'chatbot/feedback-data.js').read_text()
 assert 'CONTEXTE_TEST_ACTUALISATION' in (ROOT/'chatbot/feedback-data.js').read_text()
 assert 'NOTION_TEST_ACTUALISATION' in (ROOT/'chatbot/feedback-data.js').read_text()
 # An invalid key prevents build instead of publishing an incorrect answer.
 def invalid(path,sheet):
  rows=read(path,sheet)
  if path.name==build.source.EXAM_CONFIGS['NAT']['questions_file']:rows[0]['Bonne réponse']='Z'
  return rows
 build.source.read_rows=invalid
 try:build.load_banks();raise AssertionError('Bonne réponse invalide acceptée')
 except ValueError:pass
 print('PASS generation deterministe ; libelle, choix, bonne reponse, explication, contexte et notion propages dans bilans/entrainements/examens/feedbacks ; donnees invalides refusees')
finally:
 build.source.read_rows=read
 for p,value in original.items():p.write_bytes(value)
