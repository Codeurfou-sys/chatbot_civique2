"""Compile les six bases Excel dans les parcours existants, sans refaire leur interface."""
from pathlib import Path
import argparse, hashlib, html, json, random, re, sys
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT))
import synchroniser_banques_examens as source

def blocks(text):return dict(re.findall(r'^## ([^\n]+)\n(.*?)(?=^## |\Z)',text,re.M|re.S))
def dump(value):return json.dumps(value,ensure_ascii=False,separators=(',',':'))
def clean(x):return source.clean(x)
def load_banks():
 banks={};audit=[]
 for exam,cfg in source.EXAM_CONFIGS.items():
  q=source.read_rows(ROOT/'sources'/cfg['questions_file'],cfg['questions_sheet']);ms=source.read_rows(ROOT/'sources'/cfg['situations_file'],cfg['situations_sheet']);by={clean(r['ID']):r for r in q}
  if len(by)!=len(q):raise ValueError(exam+': ID de question dupliqué')
  situations=[]
  for r in ms:
   origin=by.get(clean(r.get('ID question source')))
   if not origin:raise ValueError(exam+': source absente pour '+clean(r['ID']))
   if clean(origin.get('Bonne réponse')).upper() not in ['A','B','C','D']:raise ValueError(exam+': bonne réponse invalide '+clean(origin['ID']))
   situations.append({**origin,**r,'N° thématique':origin['N° thématique'],'Chapitre':origin.get('Chapitre'),'_source_correct_answer':origin['Réponse '+clean(origin['Bonne réponse']).upper()],'_situation':True})
  for rows,filename in [(q,cfg['questions_file']),(situations,cfg['situations_file'])]:
   seen=set()
   for r in rows:
    ident=clean(r.get('ID'));letter=clean(r.get('Bonne réponse')).upper()
    if not ident or ident in seen:raise ValueError(filename+': ID vide ou dupliqué '+ident)
    seen.add(ident)
    if letter not in 'ABCD' or len(letter)!=1:raise ValueError(filename+': bonne réponse invalide '+ident)
    if int(r['N° thématique']) not in range(1,6):raise ValueError(filename+': thématique invalide '+ident)
    required=['Question posée','Mise en situation','Feedback pédagogique'] if r.get('_situation') else ['Question','Explication pédagogique']
    if any(not clean(r.get(k)) for k in required+['Réponse '+a for a in 'ABCD']):raise ValueError(filename+': cellule requise vide '+ident)
   audit.append({'exam':exam,'file':filename,'rows':len(rows),'sha256':hashlib.sha256((ROOT/'sources'/filename).read_bytes()).hexdigest()})
  banks[exam]=(q,situations)
 return banks,audit

def prompt(r):return (clean(r['Mise en situation'])+'\n\n' if r.get('_situation') else '')+'**'+clean(r['Question posée'] if r.get('_situation') else r['Question'])+'**'
def question(body,screen,exam,r):
 marker=re.search(r'<!-- Source [^\n]+? -->',body)
 if marker:prefix=body[:marker.start()]+'<!-- Source '+exam.lower()+' : '+clean(r['ID'])+' -->\n\n'
 else:
  m=re.search(r'^\*\*[^\n]+\*\*\s*$',body,re.M)
  if not m:raise ValueError('Question introuvable '+screen)
  prefix=body[:m.start()]+'<!-- Source '+exam.lower()+' : '+clean(r['ID'])+' -->\n\n'
 option_matches=list(re.finditer(r'^\d+\. \[.*?\]\('+re.escape(screen)+r'_(?:VRAI|FAUX)\)\s*$',body,re.M))
 if len(option_matches)!=4:raise ValueError('Quatre choix attendus '+screen)
 suffix=body[option_matches[-1].end():]
 options=[]
 for a in 'ABCD':
  target=screen+('_VRAI' if a==clean(r['Bonne réponse']).upper() else '_FAUX')
  options.append('1. [<span class="qcm-letter">'+a+'</span> '+source.link_text(r['Réponse '+a])+']('+target+')')
 return prefix+prompt(r)+'\n\n'+'\n'.join(options)+suffix

def correction_body(body,r):
 heading=re.search(r'^### [^\n]+\n',body,re.M)
 if not heading:raise ValueError('Correction sans titre')
 start=heading.end();tail=re.search(r'(?:^`@bilPercent|^\d+\. \[)',body[start:],re.M)
 if not tail:raise ValueError('Navigation de correction absente')
 letter=clean(r['Bonne réponse']).upper();explanation=clean(r['Feedback pédagogique'] if r.get('_situation') else r['Explication pédagogique'])
 text='\n**Réponse correcte : '+letter+' — '+clean(r['Réponse '+letter])+'**\n\n'+explanation+'\n\n'
 if not r.get('_situation') and clean(r.get('Astuce mémoire')):text+='💡 '+clean(r['Astuce mémoire'])+'\n\n'
 body=body[:start]+text+body[start+tail.start():]
 t=int(r['N° thématique']);body=re.sub(r'@(score_t|ent_t|ent_k|ent_s)([1-5])(?=\b)',lambda m:'@'+m[1]+str(t),body)
 return body

def context(r):return (clean(r.get('Mise en situation'))+' ' if r.get('_situation') else '')+clean(r['Question posée'] if r.get('_situation') else r['Question'])
def key_for(r):return hashlib.sha256((str(int(r['N° thématique']))+'|'+context(r)+'|'+clean(r['Réponse '+clean(r['Bonne réponse']).upper()])).encode()).hexdigest()[:16]

NOTIONS={}
def feedback(body,screen,r,data,oldrow):
 key=key_for(r);theme=int(r['N° thématique']);course=source.CHAPTERS[source.chapter_key(r,'Chapitre')][1].replace('_ACC','_COURS')
 notion=clean(r.get('Notion')) or NOTIONS.get((theme,context(r),clean(r['Réponse '+clean(r['Bonne réponse']).upper()]))) or oldrow.get('notion') or source.CHAPTERS[source.chapter_key(r,'Chapitre')][0]
 data['questions'][key]={'theme':theme,'question':clean(r['Question posée'] if r.get('_situation') else r['Question']),'context':context(r),'correct':clean(r['Réponse '+clean(r['Bonne réponse']).upper()]),'notion':notion,'course':course,'sourceId':clean(r['ID'])}
 kind='bilan' if screen.startswith('BIL_') else 'examen' if screen.startswith('EXAM_') else 'entrainement'
 marker='<span hidden data-civi-question="'+key+'" data-kind="'+kind+'" data-screen="'+screen+'"></span>'
 body=re.sub(r'<span hidden data-civi-question="[^\n]+?</span>',marker,body,count=1)
 if marker not in body:body=marker+'\n'+body
 data.setdefault('screens',{})[screen]={'key':key,'kind':kind}
 if kind=='examen':data['exam'][screen]=key
 return body,key

def update_item(b,screen,exam,r,data):
 oldkey=re.search(r'data-civi-question="([a-f0-9]+)"',b[screen]);oldrow=data['questions'].get(oldkey[1],{}) if oldkey else {}
 # Preserve an editorial notion only when this is still the same source question.
 oldsource=re.search(r'<!-- Source [^:]+ : (.+?) -->',b[screen])
 if oldsource and clean(oldsource[1])!=clean(r['ID']):oldrow={}
 body,key=feedback(question(b[screen],screen,exam,r),screen,r,data,oldrow);b[screen]=body
 for correct in ['VRAI','FAUX']:
  target=screen+'_'+correct;value=b[target]
  if screen.startswith('EXAM_'):
   value=re.sub(r'@exam_t[1-5]', '@exam_t'+str(int(r['N° thématique'])),value)
   value=re.sub(r'@errchap_T[1-5]_CH\d+', '@errchap_'+source.chapter_key(r,'Chapitre'),value)
  else:value=correction_body(value,r)
  if correct=='FAUX' and not screen.startswith('EXAM_'):
   prefix='bil' if screen.startswith('BIL_') else 'ent'
   line='`@'+prefix+'Mistakes = calc((@'+prefix+'Mistakes || "")+"|'+key+'|")`'
   value=re.sub(r'^`@'+prefix+r'Mistakes[^\n]+',lambda m:line,value,count=1,flags=re.M)
   if line not in value:value=line+'\n'+value
  b[target]=value

def select_training(q,ms,report):
 exam,route,v=report['exam'],report['route'],report['variant'];rng=random.Random(f'{exam}/{route}/{v}');level=report.get('level')
 def pick(bank,t,n):
  pool=[r for r in bank if int(r['N° thématique'])==t];rng.shuffle(pool)
  if level in ('FAC','INT','DIF'):
   target={'FAC':0,'INT':1,'DIF':2}[level]
   def rank(r):
    s=clean(r['Difficulté']).lower();return abs((0 if 'facile' in s else 1 if 'interm' in s else 2)-target)
   pool.sort(key=rank)
  if len(pool)<n:raise ValueError(f'{exam} {route}: banque insuffisante thème {t}')
  if route.startswith('T') and level is None:
   # A shared permutation plus rotating windows covers the entire theme bank.
   if len(pool)>100:raise ValueError(f'{exam} {route}: plus de 100 lignes ; ajouter des variantes avant publication')
   pool=[r for r in bank if int(r['N° thématique'])==t];random.Random(f'{exam}/{route}/{t}/coverage').shuffle(pool)
   start=(v-1)*n;return [pool[(start+i)%len(pool)] for i in range(n)]
  return pool[:n]
 if route.startswith('LVL_'):return [r for t in range(1,6) for r in pick(q,t,2)]+[r for t in range(1,6) for r in pick(ms,t,1)]
 theme=re.match(r'T([1-5])_',route);themes=[int(theme[1])] if theme else range(1,6);bank=ms if '_MIS' in route else q
 return [r for t in themes for r in pick(bank,t,10 if theme else 2)]

def save_module(filename,b):
 p=ROOT/'modules'/filename;p.write_text('\n\n'.join('## '+ident+'\n'+body.strip() for ident,body in b.items())+'\n')
 compiled=(ROOT/'chat_bot.md').read_text();relative='modules/'+filename;pattern=r'(<!-- Début du fichier source : '+re.escape(relative)+r' -->).*?(<!-- Fin du fichier source : '+re.escape(relative)+r' -->)'
 compiled,n=re.subn(pattern,lambda m:m[1]+'\n\n'+p.read_text().strip()+'\n\n'+m[2],compiled,count=1,flags=re.S)
 if n!=1:raise ValueError('Module compilé introuvable '+filename)
 (ROOT/'chat_bot.md').write_text(compiled)

def build():
 banks,audit=load_banks();p=ROOT/'chatbot/feedback-data.js';s=p.read_text();data=json.loads(s[s.index('{'):s.rindex('}')+1]);series={}
 NOTIONS.clear()
 for value in data['questions'].values():
  if not value.get('ambiguousLegacy'):NOTIONS[(value['theme'],value.get('context') or value['question'],value.get('correct',''))]=value.get('notion')
 # Existing screen IDs/navigation remain stable; only source-dependent content is replaced.
 b=blocks((ROOT/'modules/05_preparer_examen.md').read_text());exam_report=[]
 for exam,(q,ms) in banks.items():
  kv=source.distribute(q,source.KNOWLEDGE_PER_VARIANT);sv=source.select_distinct_situations(ms,kv,exam)
  for v,(knowledge,situations) in enumerate(zip(kv,sv),1):
   rows=knowledge+situations;base=f'EXAM_{exam}_V{v:02d}';series[base+'_PART1']=[clean(r['ID']) for r in rows]
   for num,r in enumerate(rows,1):
    screen=base+f'_Q{num:02d}';update_item(b,screen,exam,r,data)
    pattern=r'(`if @err_'+re.escape(screen[5:])+r' == 1`\n).*?(\n`endif`)'
    corr,n=re.subn(pattern,lambda m:m[1]+source.correction(num,r,num>=29)+m[2],b[base+'_CORRIGE'],count=1,flags=re.S)
    if n!=1:raise ValueError('Corrigé absent '+screen)
    b[base+'_CORRIGE']=corr
   exam_report.append({'exam':exam,'variant':v,'questions':[clean(r['ID']) for r in rows]})
 save_module('05_preparer_examen.md',b)
 b=blocks((ROOT/'modules/06_entrainement.md').read_text());reports=json.loads((ROOT/'reports/entrainements_sources.json').read_text())
 for report in reports:
  exam=report['exam'];rows=select_training(*banks[exam],report);base=f'ENT_{exam}_{report["route"]}_V{report["variant"]:02d}';series[base+'_Q01']=[clean(r['ID']) for r in rows]
  for num,r in enumerate(rows,1):update_item(b,base+f'_Q{num:02d}',exam,r,data)
  report['questions']=[{'id':clean(r['ID']),'theme':int(r['N° thématique']),'situation':bool(r.get('_situation')),'difficulty':clean(r['Difficulté'])} for r in rows]
 save_module('06_entrainement.md',b);(ROOT/'reports/entrainements_sources.json').write_text(json.dumps(reports,ensure_ascii=False,indent=2)+'\n')
 # Bilans: every knowledge row stays available; stable IDs are preserved for saved sessions.
 b=blocks((ROOT/'modules/02_bilan.md').read_text());old=json.loads((ROOT/'reports/bilans_tirage_v7.json').read_text());manifest=[]
 for exam,(rows,_) in banks.items():
  prior={r['id']:r for r in old if r['exam']==exam};largest=max([int(r['screen'].rsplit('_',1)[1]) for r in prior.values()],default=0);template=next(iter(prior.values()))['screen'];items=[]
  for r in rows:
   ident=clean(r['ID']);entry=prior.get(ident)
   if entry:screen=entry['screen'];seenkey=entry['key']
   else:
    largest+=1;screen=f'BIL_ITEM_{exam}_{largest:03d}';seenkey=hashlib.sha256((exam+'|'+ident).encode()).hexdigest()[:12]
    for suffix in ['','_VRAI','_FAUX']:
     b[screen+suffix]=b[template+suffix].replace(template,screen);b[screen+suffix]=re.sub(r'\|[a-f0-9]{12}\|','|'+seenkey+'|',b[screen+suffix])
   update_item(b,screen,exam,r,data);difficulty=clean(r['Difficulté']).lower();level=2 if 'diffic' in difficulty else 1 if 'interm' in difficulty else 0
   entry={'exam':exam,'id':ident,'key':seenkey,'screen':screen,'theme':int(r['N° thématique']),'level':level,'question':clean(r['Question'])};manifest.append(entry);items.append(entry)
  for theme in range(1,6):
   pool=[r for r in items if r['theme']==theme]
   if len(pool)<5:raise ValueError('Bilan: moins de cinq questions pour '+exam+' thème '+str(theme))
   current=lambda r:f'!@bilCurrentSeen.includes("|{r["key"]}|")'
   unseen=lambda r:f'!@bilSeen_{exam}.includes("|{r["key"]}|")'
   available=' + '.join(f'(({current(r)} && {unseen(r)}) ? 1 : 0)' for r in pool)
   body='!Typewriter: false\n<span class="civicoach-route" aria-hidden="true"></span>\n'+f'`@bilUseHistory = calc(({available}) > 0)`\n'
   cond=lambda r:f'({current(r)} && (!@bilUseHistory || {unseen(r)}))'
   for level in range(3):body+=f'`@bilCount{level} = calc('+(' + '.join(f'({cond(r)} ? 1 : 0)' for r in pool if r['level']==level) or '0')+')`\n'
   for profile,order in [('DEC',[0,1,2]),('EQ',[1,0,2]),('INT',[2,1,0])]:
    a,c,d=order;body+=f'`if @bilProfile == "{profile}"`\n`@bilLevel = calc(@bilCount{a} > 0 ? {a} : (@bilCount{c} > 0 ? {c} : {d}))`\n`endif`\n'
   body+='`@bilCount = calc(@bilLevel == 0 ? @bilCount0 : (@bilLevel == 1 ? @bilCount1 : @bilCount2))`\n`@bilRoll = calc(Math.floor(Math.random()*@bilCount))`\n`@bilIndex = 0`\n'
   for r in pool:body+=f'`if {cond(r)} && @bilLevel == {r["level"]}`\n`if @bilIndex == @bilRoll`\n!SelectNext: {r["screen"]}\n`endif`\n`@bilIndex = calc(@bilIndex+1)`\n`endif`\n'
   b[f'BIL_DRAW_{exam}_T{theme}']=body
 save_module('02_bilan.md',b);(ROOT/'reports/bilans_tirage_v7.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
 for course in {q['course'] for q in data['questions'].values()}:
  section=blocks((ROOT/'modules/03_revisions.md').read_text()).get(course,'');m=re.search(r'^### (.+)',section,re.M)
  if m:data.setdefault('courseTitles',{})[course]=re.sub(r'^[^\wÀ-ÿ]+','',html.unescape(re.sub(r'<[^>]+>','',m[1]))).strip()
 p.write_text('window.CiviFeedbackData='+dump(data)+';\n');(ROOT/'chatbot/tirages-data.js').write_text('window.NovaSeries='+dump(series)+';\n')
 release=hashlib.sha256(dump(audit).encode())
 release.update((ROOT/'chat_bot.md').read_bytes())
 for asset in sorted((ROOT/'chatbot').glob('*')):
  if asset.is_file() and asset.suffix in {'.js','.css','.json'}:release.update(asset.name.encode()+asset.read_bytes())
 release.update(Path(__file__).read_bytes())
 fingerprint=release.hexdigest()[:16]
 (ROOT/'reports/bases_excel.json').write_text(json.dumps({'fingerprint':fingerprint,'sources':audit,'bilans':len(manifest),'examens':len(exam_report),'entrainements':len(reports)},ensure_ascii=False,indent=2)+'\n')
 (ROOT/'reports/examens_sources.json').write_text(json.dumps(exam_report,ensure_ascii=False,indent=2)+'\n')
 index=ROOT/'chatbot/index.html';page=index.read_text();page=re.sub(r'\?v=[a-zA-Z0-9_-]+', '?v='+fingerprint,page);index.write_text(page)
 print('Bases compilées :',fingerprint)

if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--validate-only',action='store_true');args=parser.parse_args()
 if args.validate_only:print(json.dumps(load_banks()[1],ensure_ascii=False,indent=2))
 else:build()
