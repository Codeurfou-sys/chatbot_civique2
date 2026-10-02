from pathlib import Path
import re,random,json
from collections import Counter
import synchroniser_banques_examens as m
T={1:'Principes et valeurs',2:'Institutions et système politique',3:'Droits et devoirs',4:'Histoire, géographie et culture',5:'Vivre dans la société française'}
E={'CSP':'Carte de séjour pluriannuelle','CR':'Carte de résident','NAT':'Naturalisation'}
L={'FAC':'Facile','INT':'Intermédiaire','DIF':'Difficile','TOUS':'Tous niveaux confondus'}
W=':::warning ⚠️ Des situations pour vous entraîner\nCes mises en situation sont des exercices pédagogiques. Elles ne reproduisent pas les mises en situation officielles de l’examen. Elles vous aident à comprendre les principes civiques, à analyser une situation et à choisir une réponse adaptée.\n:::'
def split(text):
 a=list(re.finditer(r'(?m)^## (\w+)\s*$',text));return {x[1]:text[x.end():a[i+1].start() if i+1<len(a) else len(text)].strip() for i,x in enumerate(a)}
def generate():
 b={};report=[]
 def link(s,id):return f'1. [{s}]({id})'
 def add(id,text,parent='SCR_ENT_MENU'):
  b[id]=text+'\n\n'+link('↩️ Retour',parent)+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')+'\n'+link('❓ Poser une question @qlOrigine=SCR_ENT_MENU','SCR_QL_RESET')
 add('SCR_ENT_MENU','### 🎯 M’entraîner\n\n'+link('📚 Entraînement par examen','SCR_ENT_THEME_EXAM')+'\n'+link('🎚️ Entraînement complet par niveau','SCR_ENT_LEVEL_EXAM'),'MENU_PRINCIPAL')
 for mode in ('THEME','LEVEL'):
  add('SCR_ENT_'+mode+'_EXAM','### Choisissez votre examen\n\n'+'\n'.join(link(s,'SCR_ENT_'+mode+'_'+e) for e,s in E.items()))
 for e,label in E.items():
  c=m.EXAM_CONFIGS[e];q=m.read_rows(Path('sources')/c['questions_file'],c['questions_sheet']);by={r['ID']:r for r in q};ms=[{**by[r['ID question source']],**r} for r in m.read_rows(Path('sources')/c['situations_file'],c['situations_sheet'])]
  add('SCR_ENT_THEME_'+e,'### '+label+'\n\n'+link('📘 Questions officielles',f'SCR_ENT_{e}_Q_MENU')+'\n'+link('🎭 Mises en situation',f'SCR_ENT_{e}_MIS_MENU'),'SCR_ENT_THEME_EXAM')
  add('SCR_ENT_LEVEL_'+e,'### '+label+' — Choisissez un niveau\n\n10 questions de connaissances, puis 5 mises en situation.\n\n'+'\n'.join(link(s,f'SCR_ENT_{e}_LVL_{l}_LAUNCH') for l,s in L.items()),'SCR_ENT_LEVEL_EXAM')
  for typ in ('Q','MIS'):
   add(f'SCR_ENT_{e}_{typ}_MENU','### '+('Questions officielles' if typ=='Q' else 'Mises en situation')+'\n\n'+(W+'\n\n' if typ=='MIS' else '')+'\n'.join(link(s,f'SCR_ENT_{e}_T{t}_{typ}_LAUNCH') for t,s in T.items())+'\n'+link('Toutes les thématiques',f'SCR_ENT_{e}_ALL_{typ}_LAUNCH'),'SCR_ENT_THEME_'+e)
  for t in T:add(f'SCR_ENT_{e}_T{t}_TYPE','### '+T[t]+'\n\n'+link('Questions officielles',f'SCR_ENT_{e}_T{t}_Q_LAUNCH')+'\n'+link('Mises en situation',f'SCR_ENT_{e}_T{t}_MIS_LAUNCH'),'SCR_ENT_THEME_'+e)
  def pick(bank,t,n,level,rng):
   pool=[r for r in bank if int(r['N° thématique'])==t];rng.shuffle(pool)
   if level in ('FAC','INT','DIF'):
    target={'FAC':0,'INT':1,'DIF':2}[level]
    def rank(r):
     s=str(r['Difficulté']).lower();return abs((0 if 'facile' in s else 1 if 'interm' in s else 2)-target)
    pool.sort(key=rank)
   assert len(pool)>=n,(e,t,n,len(pool));return pool[:n]
  routes=[(f'T{t}_{k}',k,t,None) for k in ('Q','MIS') for t in T]+[(f'ALL_{k}',k,None,None) for k in ('Q','MIS')]+[(f'LVL_{l}','MIX',None,l) for l in L]
  for route,typ,theme,level in routes:
   base=f'ENT_{e}_{route}';launch=f'SCR_ENT_{e}_{route}_LAUNCH';start=launch+'_START';n=15 if typ=='MIX' else 10;parent='SCR_ENT_LEVEL_'+e if typ=='MIX' else f'SCR_ENT_{e}_{typ}_MENU'
   add(launch,f'### {label} — '+(L[level] if level else T.get(theme,'Toutes les thématiques'))+f'\n\nVous allez répondre à **{n} questions**, avec une correction après chaque réponse.\n\n'+(W+'\n\n' if typ!='Q' else '')+link('▶️ Démarrer l’entraînement',start),parent)
   add(start,'`@score = 0`\n`@ent_q = 0`\n`@ent_ms = 0`\n'+'\n'.join(f'`@ent_t{t} = 0`' for t in T)+'\n\n!SelectNext: '+' / '.join(f'{base}_V{v:02d}_Q01' for v in range(1,11)),parent)
   for v in range(1,11):
    rng=random.Random(f'{e}/{route}/{v}')
    if typ=='MIX':rows=[(r,False) for t in T for r in pick(q,t,2,level,rng)]+[(r,True) for t in T for r in pick(ms,t,1,level,rng)]
    else:rows=[(r,typ=='MIS') for t in ([theme] if theme else T) for r in pick(ms if typ=='MIS' else q,t,10 if theme else 2,None,rng)]
    assert len({r['ID'] for r,s in rows})==n
    result=f'{base}_V{v:02d}_RESULT'
    for num,(r,sit) in enumerate(rows,1):
     id=f'{base}_V{v:02d}_Q{num:02d}';correct=m.clean(r['Bonne réponse']).upper();t=int(r['N° thématique']);question=m.clean(r['Question posée'] if sit else r['Question']);context=m.clean(r['Mise en situation'])+'\n\n' if sit else ''
     add(id,f'### Question {num} sur {n}\n\n'+('### 🎭 Mises en situation\n\n' if num==11 else '')+f'<!-- Source {e.lower()} : {r["ID"]} -->\n\n{context}**{question}**\n\n'+'\n'.join(link(m.link_text(r['Réponse '+l]),id+('_VRAI' if l==correct else '_FAUX')) for l in 'ABCD'),parent)
     nxt=f'{base}_V{v:02d}_Q{num+1:02d}' if num<n else result
     for suffix in ('VRAI','FAUX'):
      vars=f'`@score = calc(@score+1)`\n`@ent_t{t} = calc(@ent_t{t}+1)`\n`@ent_{"ms" if sit else "q"} = calc(@ent_{"ms" if sit else "q"}+1)`\n\n' if suffix=='VRAI' else ''
      explanation=m.clean(r['Feedback pédagogique'] if sit else r['Explication pédagogique'])
      add(id+'_'+suffix,vars+('### ✅ Bonne réponse' if suffix=='VRAI' else '### ❌ Réponse incorrecte')+f'\n\n**Réponse correcte : {correct} — {m.clean(r["Réponse "+correct])}**\n\n{explanation}\n\n'+link('➡️ Question suivante' if num<n else '📊 Voir mes résultats',nxt),parent)
    counts=Counter(int(r['N° thématique']) for r,s in rows);nq=sum(not s for r,s in rows);ns=n-nq
    body=f'### 📊 Vos résultats\n\n**Score : `@score` / {n}**\n\n`@ent_pct = calc(round(@score/{n}*1000)/10)`\n\n**Réussite : `@ent_pct` %**\n\n'+(f'Questions officielles : **`@ent_q` / {nq}**\n\n' if nq else '')+(f'Mises en situation : **`@ent_ms` / {ns}**\n\n' if ns else '')+'### 🎯 Vos priorités de révision\n\n'
    for t,count in counts.items():body+=f'`if @ent_t{t} < {count}`\n'+link('📘 Revoir : '+T[t],f'SCR_REV_T{t}_MENU')+'\n`endif`\n'
    body+=f'\n`if @score == {n}`\n✅ Toutes vos réponses sont correctes.\n`endif`\n\n'+link('🔄 Nouvel entraînement',launch)
    add(result,body,parent);report.append(dict(exam=e,route=route,variant=v,level=level,questions=[dict(id=r['ID'],theme=int(r['N° thématique']),situation=s,difficulty=m.clean(r['Difficulté'])) for r,s in rows]))
 Path('modules/06_entrainement.md').write_text('\n\n'.join('## '+id+'\n\n'+text for id,text in b.items())+'\n');Path('reports').mkdir(exist_ok=True);Path('reports/entrainements_sources.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));print(len(report),'séries générées')
if __name__=='__main__':generate()
