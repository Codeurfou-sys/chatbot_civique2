"""Construit les fiches avec les réponses et explications du corpus existant."""
from pathlib import Path
import json,re,html,sys
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT))
import synchroniser_banques_examens as source

def plain(value):
 s=html.unescape(re.sub('<[^>]+>',' ',str(value or '')))
 s=re.sub(r'\[([^\]]+)\]\([^)]+\)',r'\1',s)
 return re.sub(r'\s+',' ',s.replace('**','').replace('\n- ',' ; ')).strip()
def norm(s):
 import unicodedata
 return ''.join(c for c in unicodedata.normalize('NFD',s.lower()) if not unicodedata.combining(c))
def build():
 feedback=json.loads((ROOT/'chatbot/feedback-data.js').read_text().split('=',1)[1].rstrip(';\n'))
 lessons=json.loads((ROOT/'activites-revision/data.json').read_text())
 chapters=json.loads((ROOT/'chatbot/parcours-data.json').read_text())['chapters']
 regions={r['code']:r['name'] for r in json.loads((ROOT/'activites-revision/region-map.json').read_text())}
 geo=json.loads((ROOT/'activites-geographie/data.json').read_text())
 import ast
 geo_details=ast.literal_eval(re.search(r'const details=(\{[^\n]+\});',(ROOT/'activites-geographie/app.js').read_text())[1])
 def item_answer(a,item):
  if a['type']=='select-symbols':return 'À sélectionner.' if item.get('correct') else 'À ne pas sélectionner.'
  if a['type']=='payslip-click' and item.get('label'):return item['label']
  value=item.get('answer') if item.get('answer') is not None else item.get('target') or item.get('author') or item.get('explanation')
  if a['type'] in ['map','languages-map']:return ', '.join(regions.get(t,t) for t in item.get('targets',[value]))
  if a['type']=='flag':return {'0':'Bande gauche','1':'Bande centrale','2':'Bande droite'}.get(str(value),str(value))
  if a['type'] in ['scheme','care','cycle','order']:return 'Étape '+str(value)
  return value
 sources={}
 for cfg in source.EXAM_CONFIGS.values():
  for file,sheet in [(cfg['questions_file'],cfg['questions_sheet']),(cfg['situations_file'],cfg['situations_sheet'])]:
   for row in source.read_rows(ROOT/'sources'/file,sheet):sources[(row['ID'],file)]=row
 def reference(ident):return next((r for (k,f),r in sources.items() if k==ident),{})
 def scaffold(chapter):
  lesson=lessons.get(chapter,{})
  associations=[]
  for a in lesson.get('activities',[]):
   for item in a.get('items',[]):
    if not isinstance(item,dict):continue
    label=item.get('label') or item.get('prompt') or item.get('work')
    answer=item_answer(a,item)
    if label and answer and len(plain(label))<100 and len(plain(answer))<85:associations.append({'label':plain(label),'answer':plain(answer)})
   if associations:break
  return {'title':plain(chapters.get(chapter,lesson.get('title',chapter))),'map':associations[:6]}
 scenarios={}
 for example_q in feedback['questions'].values():
  context=plain(example_q.get('context'))
  if example_q.get('sourceId') and context and context!=plain(example_q.get('question')):
   words=set(re.findall(r'[a-z]{4,}',norm(context+' '+plain(example_q.get('notion')))))
   scenarios.setdefault((example_q['theme'],norm(plain(example_q.get('correct')))),[]).append((words,context,plain(example_q.get('correct'))))
 def card(q,explanation='',chapter=None):
  chapter=chapter or re.sub(r'_(ACC|COURS|GLO)$','',q.get('course',''))
  base=scaffold(chapter);words=set(re.findall(r'[a-z]{4,}',norm(plain(q.get('question'))+' '+plain(q.get('notion'))+' '+plain(q.get('correct')))))
  examples=[]
  for a in lessons.get(chapter,{}).get('activities',[]):
   for item in a.get('items',[]):
    if not isinstance(item,dict):continue
    prompt=item.get('prompt');answer=item.get('answer')
    if prompt and answer:
     overlap=len(words&set(re.findall(r'[a-z]{4,}',norm(prompt+' '+str(answer)))))
     examples.append((overlap,plain(prompt),plain(answer)))
  example=max(examples,default=None,key=lambda x:x[0])
  context=plain(q.get('context',''));question=plain(q.get('question',''))
  candidates=[(len(words&w),c,a) for w,c,a in scenarios.get((q['theme'],norm(plain(q.get('correct')))),[])]
  scenario=max(candidates,default=None,key=lambda x:(x[0],-len(x[1])))
  if context and context!=question:ex={'question':context,'answer':plain(q.get('correct')),'label':'La situation de votre question'}
  elif scenario and scenario[0]>=2:ex={'question':scenario[1],'answer':scenario[2],'label':'Une situation pour comprendre'}
  elif example and example[0]>1:ex={'question':example[1],'answer':example[2],'label':'Un exemple du chapitre'}
  else:ex={'question':question,'answer':plain(q.get('correct')),'label':'Un exemple : votre question'}
  stop={'quelle','quelles','quels','dans','pour','avec','france','francaise','francais','republique','doit','peut','sont','cette','personne','droit','question'}
  focus=words-stop
  related=[p for p in base['map'] if p['label']!=p['answer'] and focus&set(re.findall(r'[a-z]{4,}',norm(p['label']+' '+p['answer']))) and p['label']!=question]
  diagram=[{'label':question,'answer':plain(q.get('correct'))}]+related[:2]
  sentences=[s.strip() for s in re.split(r'(?<=[.!?])\s+',plain(explanation)) if s.strip()]
  if q.get('theme')==3 and 'droits individuels' in norm(question):
   q={**q,'notion':'Les droits individuels'}
  return {**q,'type':'situation' if q.get('type')=='situation' or str(q.get('sourceId','')).startswith('MS-') or (context and context!=question) else 'connaissance','chapter':chapter,'chapterTitle':base['title'],'question':question,'correct':plain(q.get('correct')),'explanation':sentences,'map':diagram,'example':ex}
 cards={}
 for key,q in feedback['questions'].items():
  r=reference(q.get('sourceId'));ex=r.get('Feedback pédagogique') or r.get('Explication pédagogique') or ''
  cards[key]=card(q,ex);cards[key]['memory']=plain(r.get('Astuce mémoire','')).replace('nomme 1er ministre','nomme le Premier ministre').replace('1er ministre','Premier ministre')
 revision={}
 for q in json.loads((ROOT/'data/revision_questions_originales.json').read_text()):
  chapter=q['id'].split('_VERIF')[0]
  revision[q['id']]=card({'key':q['id'],'question':q['question'],'correct':q['answer'],'notion':chapters.get(chapter,chapter),'theme':int(chapter.split('_T')[1][0]),'variable':q['variable']},chapter=chapter)
 activities={}
 for chapter,lesson in lessons.items():
  for step,a in enumerate(lesson['activities']):
   items=a.get('items',[])
   if a['type']=='memory':items=[{'label':pair[0],'answer':pair[1]} for pair in a['pairs']]
   if a['type']=='geo':items=[{'label':'Où se trouve '+g['name']+' ?','answer':geo_details[g['name']],'geoIndex':i} for i,g in enumerate(geo[a['mode']])]
   for i,item in enumerate(items):
    if not isinstance(item,dict):continue
    answer=item_answer(a,item) or item.get('author') or item.get('explanation')
    if a['type']=='symbols':answer='À sélectionner.' if item.get('correct') else 'À ne pas sélectionner.'
    if not answer:continue
    key=f'{chapter}:{step}:'+('geo' if a['type']=='geo' else '')+str(i)
    activities[key]=card({'key':key,'context':item.get('prompt') if a['type']=='cases' else None,'type':'situation' if a['type']=='cases' else 'connaissance','question':item.get('prompt') or item.get('label') or item.get('work') or a['title'],'correct':answer,'notion':a['title'],'theme':int(chapter.split('_T')[1][0])},item.get('explanation',''),chapter)
  # Les calculs utilisent seulement les valeurs fictives déjà présentes dans l'activité.
  for step,a in enumerate(lesson['activities']):
   if a['type']=='payment':
    for i,field in enumerate(['insurance','mutual','remainder']):
     key=f'{chapter}:{step}:pay{i}'
     activities[key]=card({'key':key,'question':['Part de l’Assurance maladie','Part de la complémentaire','Reste à payer'][i]+' dans cet exemple fictif','correct':str(a[field])+' €','notion':a['title'],'theme':5},'Ces montants concernent uniquement cet exercice. Les taux sont fictifs.',chapter)
 payload={'version':58,'questions':cards,'revision':revision,'activities':activities,'chapters':{k:scaffold(k) for k in chapters}}
 (ROOT/'chatbot/fiches-data.js').write_text('window.CiviSheetsData='+json.dumps(payload,ensure_ascii=False,separators=(',',':'))+';\n')
 print(f'Fiches construites : {len(cards)} références de questions, {len(revision)} questions libres, {len(activities)} repères d’activités.')
if __name__=='__main__':build()
