"""Évolution v7 : parcours de session, tirage à chaque question et navigation simplifiée."""
from pathlib import Path
import re,json,sys,hashlib
sys.path.insert(0,str(Path(__file__).resolve().parent));from ameliorations_v6 import ROOT,blocks,join,link,norm,THEMES,FOCUS
sys.path.insert(0,str(ROOT));from synchroniser_banques_examens import read_rows,EXAM_CONFIGS,clean
ROUTE='!Typewriter: false\n<span class="civicoach-route" aria-hidden="true"></span>\n'
NAV='\n'+link('↩️ Retour au choix des bilans','SCR_BIL_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
def progress(n,total=25):
 pct=round(n*100/total);return f'<div class="civi-progress-row"><div class="civi-progress-track" role="progressbar" aria-label="Progression" aria-valuemin="0" aria-valuemax="{total}" aria-valuenow="{n}"><span style="width:{pct}%"></span></div><span class="civi-progress-label">{n}/{total} · {pct} %</span></div>'
def dynamic_progress():return '`@bilPercent = calc(@bilAnswered*4)`\n<div class="civi-progress-row"><div class="civi-progress-track" role="progressbar" aria-label="Progression" aria-valuemin="0" aria-valuemax="25" aria-valuenow="`@bilAnswered`"><span style="width:`@bilPercent`%"></span></div><span class="civi-progress-label">`@bilAnswered`/25 · `@bilPercent` %</span></div>'
def strip_question(s):return re.sub(r'(?m)^\d+[.)] \[[^\n]*\]\(SCR_QL_RESET\)\s*\n?','',s)
def bilans():
 p=ROOT/'modules/02_bilan.md';old=blocks(p.read_text());b={i:v for i,v in old.items() if i.startswith('SCR_') or re.fullmatch(r'BIL_(CSP|CR|NAT)_(DEC|EQ|INT)_V01_(RESULT|THEMES|RECO)',i)}
 for i,v in list(b.items()):
  if re.fullmatch(r'SCR_BIL_(PROG_)?START_(DEC|EQ|INT)',i):
   profile=i.rsplit('_',1)[1];v=ROUTE+f'`@bilProfile = {profile}`\n`@bilExam = calc(@type_examen)`\n`if @bilRun == undefined`\n`@bilRun = 0`\n`endif`\n`@bilRun = calc(@bilRun+1)`\n`@bilAnswered = 0`\n`@bilPos = 1`\n`@bilCurrentSeen = calc("")`\n`@bilAnswerKeys = calc("")`\n'+''.join(f'`@score_t{t} = 0`\n' for t in range(1,6))+'`@score = 0`\n'
   for exam in EXAM_CONFIGS:v+=f'`if @bilSeen_{exam} == undefined`\n`@bilSeen_{exam} = calc("")`\n`endif`\n'
   v+='!SelectNext: BIL_DRAW_NEXT\n'
  if i=='SCR_BIL_PROG_DELAI':
   v=v.replace('➡️ Moins d\'une semaine','🟢 Moins d\'une semaine').replace('➡️ Entre une et deux semaines','🟠 Entre une et deux semaines').replace('🟡 Plus de deux semaines','🔴 Plus de deux semaines')
  if i.endswith('_RESULT'):
   v=v[v.index('### 📊'):]
   snapshot='`@parcoursDisponible = true`\n`@parcoursExam = calc(@bilExam)`\n`@parcoursMode = calc(@mode_bilan)`\n`@parcoursScore = calc(@score)`\n'+''.join(f'`@parcoursT{t} = calc(@score_t{t})`\n' for t in range(1,6))
   v='`if @parcoursRun != @bilRun`\n'+snapshot+'`@parcoursRun = calc(@bilRun)`\n`endif`\n'+v;v=re.sub(r'(?m)^\d+\. \[💡 Consulter mes conseils personnalisés\].*\n','',v)
  if i.endswith('_THEMES'):v=v.replace('Mes prochaines étapes','Mes conseils personnalisés')
  if i.endswith('_RECO'):
   # Les conseils restent lisibles : les actions détaillées sont dans le parcours.
   v=re.sub(r'(?m)^\d+\. \[(?:📖 Réviser cette thématique|📘 M’entraîner aux questions de cette thématique|🎭 M’entraîner aux mises en situation de cette thématique|🔴 Faire un entraînement complet difficile)\].*\n','',v)
   v=v.replace('### 💡 Votre plan de révision personnalisé','### 💡 Mes conseils personnalisés')
   if '(SCR_PARCOURS_MENU)' not in v:v+='\n'+link('🧭 Mon parcours personnalisé','SCR_PARCOURS_MENU')+'\n'
  # Le pourcentage ne doit pas se retrouver seul sur la ligne suivante.
  v=re.sub(r'[🟩⬜]+ \*\*(\d+)/(\d+) · \d+ %\*\*',lambda m:progress(int(m[1]),int(m[2])),v)
  b[i]=v
 b['BIL_DRAW_NEXT']=ROUTE+'`@bilPos = calc(@bilAnswered+1)`\n`@bilTheme = calc(@bilAnswered%5+1)`\n'+''.join(f'`if @bilExam == "{e}" && @bilTheme == {t}`\n!SelectNext: BIL_DRAW_{e}_T{t}\n`endif`\n' for e in EXAM_CONFIGS for t in range(1,6))
 b['BIL_FINISH']=ROUTE+''.join(f'`if @bilExam == "{e}" && @bilProfile == "{prof}"`\n!SelectNext: BIL_{e}_{prof}_V01_RESULT\n`endif`\n' for e in EXAM_CONFIGS for prof in ['DEC','EQ','INT'])
 manifest=[]
 for exam,cfg in EXAM_CONFIGS.items():
  raw=read_rows(ROOT/'sources'/cfg['questions_file'],cfg['questions_sheet']);seen=set();rows=[]
  for r in raw:
   canonical=norm(r['Question'])
   if canonical in seen:continue
   seen.add(canonical);r=dict(r);r['_key']=hashlib.sha256(canonical.encode()).hexdigest()[:12];r['_screen']=f'BIL_ITEM_{exam}_{len(rows)+1:03d}';d=norm(r.get('Difficulté',''));r['_level']=2 if 'diffic' in d else 1 if 'interm' in d else 0;rows.append(r)
  for theme in range(1,6):
   pool=[r for r in rows if int(r['N° thématique'])==theme];assert len(pool)>=10
   current=lambda r:f'!@bilCurrentSeen.includes("|{r["_key"]}|")'
   unseen=lambda r:f'!@bilSeen_{exam}.includes("|{r["_key"]}|")'
   body=ROUTE
   available=' + '.join(f'(({current(r)} && {unseen(r)}) ? 1 : 0)' for r in pool)
   body+=f'`@bilUseHistory = calc(({available}) > 0)`\n'
   condition=lambda r:f'({current(r)} && (!@bilUseHistory || {unseen(r)}))'
   for lvl in range(3):body+=f'`@bilCount{lvl} = calc('+(' + '.join(f'({condition(r)} ? 1 : 0)' for r in pool if r['_level']==lvl) or '0')+')`\n'
   for prof,order in [('DEC',[0,1,2]),('EQ',[1,0,2]),('INT',[2,1,0])]:
    a,c,d=order;body+=f'`if @bilProfile == "{prof}"`\n`@bilLevel = calc(@bilCount{a} > 0 ? {a} : (@bilCount{c} > 0 ? {c} : {d}))`\n`endif`\n'
   body+='`@bilCount = calc(@bilLevel == 0 ? @bilCount0 : (@bilLevel == 1 ? @bilCount1 : @bilCount2))`\n`@bilRoll = calc(Math.floor(Math.random()*@bilCount))`\n`@bilIndex = 0`\n'
   for r in pool:
    body+=f'`if {condition(r)} && @bilLevel == {r["_level"]}`\n`if @bilIndex == @bilRoll`\n!SelectNext: {r["_screen"]}\n`endif`\n`@bilIndex = calc(@bilIndex+1)`\n`endif`\n'
   b[f'BIL_DRAW_{exam}_T{theme}']=body
  for r in rows:
   q=r['_screen'];key='|'+r['_key']+'|';theme=int(r['N° thématique']);good=clean(r['Bonne réponse']).upper()[0]
   body=f'!Keyboard: false\n`@bilCurrentSeen = calc(@bilCurrentSeen+"{key}")`\n`@bilSeen_{exam} = calc(@bilSeen_{exam}+"{key}")`\n### Question `@bilPos` sur 25\n\n'+dynamic_progress()+'\n\n**'+clean(r['Question'])+'**\n\n'
   body+='\n'.join(link('🔘 '+clean(r['Réponse '+letter]).replace('[','(').replace(']',')'),q+('_VRAI' if letter==good else '_FAUX')) for letter in 'ABCD')+NAV;b[q]=body
   for correct in [True,False]:
    body=f'`if !@bilAnswerKeys.includes("{key}")`\n`@bilAnswerKeys = calc(@bilAnswerKeys+"{key}")`\n`@bilAnswered = calc(@bilAnswered+1)`\n'
    if correct:body+=f'`@score = calc(@score+1)`\n`@score_t{theme} = calc(@score_t{theme}+1)`\n'
    body+='`endif`\n### '+('✅ Bonne réponse' if correct else '🟠 À revoir')+'\n\n**Réponse correcte :** '+clean(r['Réponse '+good])+'\n\n'+clean(r['Explication pédagogique'])+'\n\n'
    if r.get('Astuce mémoire'):body+='💡 **Pour retenir :** '+clean(r['Astuce mémoire'])+'\n\n'
    body+=dynamic_progress()+'\n\n`if @bilAnswered < 25`\n'+link('➡️ Question suivante','BIL_DRAW_NEXT')+'\n`endif`\n`if @bilAnswered == 25`\n'+link('📊 Voir mes résultats','BIL_FINISH')+'\n`endif`'+NAV;b[q+('_VRAI' if correct else '_FAUX')]=body
   manifest.append(dict(exam=exam,id=r['ID'],key=r['_key'],screen=q,theme=theme,level=r['_level'],question=clean(r['Question'])))
 p.write_text(join(b));(ROOT/'reports/bilans_tirage_v7.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2))
def parcours():
 b={};b['SCR_PARCOURS_MENU']='### 🧭 Mon parcours personnalisé\n\n`if !@parcoursDisponible`\nVous n’avez pas encore terminé de bilan dans cette session. Réalisez un premier bilan pour obtenir un parcours adapté à vos résultats.\n'+link('🧭 Faire mon bilan','SCR_BIL_MENU')+'\n`endif`\n`if @parcoursDisponible`\nVotre parcours reprend votre dernier bilan terminé dans cette session. Vous pouvez le retrouver après chaque révision ou entraînement. Il sera remplacé lorsque vous terminerez un nouveau bilan.\n\n**Score du bilan : `@parcoursScore`/25.**\n\n'
 for e,label in [('CSP','Carte de séjour pluriannuelle'),('CR','Carte de résident'),('NAT','Naturalisation')]:b['SCR_PARCOURS_MENU']+=f'`if @parcoursExam == "{e}"`\n**Examen : {label}.**\n`endif`\n'
 for low,high in [(0,1),(2,2),(3,3),(4,5)]:
  for t,title in enumerate(THEMES,1):b['SCR_PARCOURS_MENU']+=f'`if @parcoursT{t} >= {low} && @parcoursT{t} <= {high}`\n'+link('📚 '+title+f' — `@parcoursT{t}`/5',f'SCR_PARCOURS_T{t}')+'\n`endif`\n'
 b['SCR_PARCOURS_MENU']+='`endif`\n\nVotre parcours reste disponible pendant la session en cours. Fermer ou actualiser la page peut le réinitialiser.\n\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
 for t,title in enumerate(THEMES,1):
  body='### 🧭 '+title+'\n\n`if !@parcoursDisponible`\nTerminez un bilan pour obtenir vos étapes personnalisées.\n'+link('🧭 Faire mon bilan','SCR_BIL_MENU')+'\n`endif`\n`if @parcoursDisponible`\n**Votre résultat au dernier bilan : `@parcoursT'+str(t)+'`/5.**\n\n'
  body+=f'`if @parcoursT{t} < 4`\n#### Étape 1 — Réviser le cours\nRelisez {FOCUS[t-1]}. Notez les notions difficiles et reformulez-les avec vos propres mots.\n'+link('📖 Réviser '+title,f'SCR_REV_T{t}_MENU')+'\n`endif`\n'
  body+='#### Étape 2 — Réaliser deux entraînements ciblés\nCommencez par les questions, puis entraînez votre raisonnement avec les mises en situation.\n'
  for e in EXAM_CONFIGS:body+=f'`if @parcoursExam == "{e}"`\n'+link('📘 Questions de cette thématique',f'SCR_ENT_{e}_T{t}_Q_LAUNCH')+'\n'+link('🎭 Mises en situation de cette thématique',f'SCR_ENT_{e}_T{t}_MIS_LAUNCH')+'\n`endif`\n'
  body+=f'`if @parcoursT{t} <= 2`\n#### Étape 3 — Atteindre votre objectif\nVisez d’abord 6/10, puis 8/10 à deux reprises. Entre les essais, revoyez les erreurs.\n`endif`\n`if @parcoursT{t} == 3`\n#### Étape 3 — Confirmer les progrès\nVisez 8/10 à deux reprises. Comparez les corrections et reprenez les notions encore fragiles.\n`endif`\n`if @parcoursT{t} >= 4`\n#### Étape 3 — Approfondir\nEssayez un entraînement complet difficile et vérifiez que vos acquis restent solides.\n'
  for e in EXAM_CONFIGS:body+=f'`if @parcoursExam == "{e}"`\n'+link('🔴 Entraînement complet difficile',f'SCR_ENT_{e}_LVL_DIF_LAUNCH')+'\n`endif`\n'
  body+='`endif`\n\n#### Étape 4 — Mesurer votre évolution\nAprès avoir travaillé vos priorités, réalisez un bilan de progression.\n'+link('📈 Faire mon bilan de progression @mode_bilan=PROG','SCR_BIL_PROG_EXAMEN')+'\n`endif`\n'+link('↩️ Revenir à mon parcours','SCR_PARCOURS_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL');b[f'SCR_PARCOURS_T{t}']=body
 b['SCR_PARCOURS_FAIBLES']='### 📚 Réviser mes points faibles\n\n`if !@parcoursDisponible`\nRéalisez un bilan pour repérer les thématiques à travailler.\n'+link('🧭 Faire mon bilan','SCR_BIL_MENU')+'\n`endif`\n`if @parcoursDisponible`\nVoici les thématiques dont le score est inférieur à 4/5 lors de votre dernier bilan.\n'
 for t,title in enumerate(THEMES,1):b['SCR_PARCOURS_FAIBLES']+=f'`if @parcoursT{t} < 4`\n'+link('📚 '+title,f'SCR_PARCOURS_T{t}')+'\n`endif`\n'
 b['SCR_PARCOURS_FAIBLES']+='`if @parcoursT1 >= 4 && @parcoursT2 >= 4 && @parcoursT3 >= 4 && @parcoursT4 >= 4 && @parcoursT5 >= 4`\nAucune thématique n’est en dessous de 4/5. Votre parcours vous propose de confirmer et d’approfondir ces acquis.\n`endif`\n`endif`\n'+link('🧭 Consulter mon parcours personnalisé','SCR_PARCOURS_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
 (ROOT/'modules/11_parcours.md').write_text(join(b));p=ROOT/'modules/start.md';s=p.read_text();
 if '(SCR_PARCOURS_MENU)' not in s:s+='\n'+link('🧭 Consulter mon parcours personnalisé','SCR_PARCOURS_MENU')+'\n'
 p.write_text(s)
def navigation():
 for name in ['06_entrainement.md','08_conseils.md']:
  p=ROOT/'modules'/name;s=strip_question(p.read_text())
  if name.startswith('08'):
   s=re.sub(r'\[([^\]\n]*Réviser mes points faibles[^\]\n]*)\]\([^\n)]+\)',r'[\1](SCR_PARCOURS_FAIBLES)',s)
   s=re.sub(r'(?m)^\d+\. \[[^\n]*Revoir les droits et devoirs[^\n]*\]\([^\n]+\)\s*\n?','',s)
  p.write_text(s)
 p=ROOT/'modules/04_glossaire.md';b=blocks(p.read_text());v=b['SCR_GLO_FILTER'];intro=re.search(r'(Choisissez la première lettre.*?)(?=\n\n)',v,re.S)
 if intro and '`if @gloPrefix == \"\" || @gloPrefix == undefined`' not in v:v=v.replace(intro[1],'`if @gloPrefix == "" || @gloPrefix == undefined`\n'+intro[1]+'\n`endif`',1)
 b['SCR_GLO_FILTER']=v
 for i in ['SCR_GLO_SEARCH','SCR_GLO_SEARCH_RESULT']:
  v=b[i].replace(' Pour une question complète, utilisez « Poser une question ».','')
  for label,target in [('🔠 Parcourir par ordre alphabétique','SCR_GLO_ALPHA_MENU'),('📚 Parcourir par thème','SCR_GLO_THEME_MENU')]:
   if ']('+target+')' not in v:v+='\n'+link(label,target)
  b[i]=v
 p.write_text(join(b))
 p=ROOT/'modules/09_faq.md';b=blocks(p.read_text())
 for i,v in b.items():
  v=v.replace('75 €','80 €').replace('75€','80 €').replace('Réponse claire ·','Thématique :').replace('Retour au thème','Retour aux questions du thème')
  v=strip_question(v)
  v=re.sub(r'(?m)^\d+\. \[[^\n]*Retour au menu du module[^\n]*\]\([^\n]+\)\s*\n?','',v)
  if i=='SCR_FAQ_CATEGORIES' or (i.endswith('_MENU') and i!='SCR_FAQ_MENU'):v=re.sub(r'(?m)^\d+\. \[[^\n]*Retour à la FAQ[^\n]*\]\([^\n]+\)\s*\n?','',v)
  v=v.replace(':::info 🧭 Dans ce thème',':::info <span class="civi-theme-title">🧭 Dans ce thème</span>')
  v=v.replace(':::info 💬 Thématique :',':::info <span class="civi-faq-title">💬 Thématique :</span>')
  b[i]=v
 p.write_text(join(b))
 # Couleurs conservées dans les fichiers vectoriels, sans dépendre du cache de l’ancienne URL.
 for name,old,new in [('csp','#2673bf','#b83a64'),('naturalisation','#b83a64','#2673bf')]:
  p=ROOT/f'assets/icons/{name}.svg';s=p.read_text().replace(old,new);p.write_text(s)
  (ROOT/f'assets/icons/{name}-v7.svg').write_text(s)
 for p in (ROOT/'modules').glob('*.md'):
  s=p.read_text().replace('/icons/csp.svg','/icons/csp-v7.svg').replace('/icons/naturalisation.svg','/icons/naturalisation-v7.svg');p.write_text(s)
 p=ROOT/'scripts/ameliorer_presentation.py';s=p.read_text().replace("('Carte de séjour pluriannuelle','csp')","('Carte de séjour pluriannuelle','csp-v7')").replace("('Naturalisation','naturalisation')","('Naturalisation','naturalisation-v7')");s=s if '  .civi-progress-row {' in s else s.replace('  .civic-icon {','''  .civi-progress-row { display: flex; align-items: center; gap: 10px; margin: 12px 0; max-width: 650px; }
  .civi-progress-track { flex: 1 1 auto; min-width: 35px; height: 15px; background: #e5dbe6; border-radius: 8px; overflow: hidden; }
  .civi-progress-track span { display: block; height: 100%; background: #37b97c; border-radius: inherit; }
  .civi-progress-label { flex: 0 0 auto; white-space: nowrap; font-weight: 600; }
  .admonitionTitle:has(.civi-faq-title):before, .admonitionTitle:has(.civi-theme-title):before { content: none !important; display: none !important; }
  #controls { bottom: 26px !important; padding-bottom: 8px !important; height: auto !important; min-height: 54px; }
  #footer { bottom: 3px !important; height: 19px; line-height: 19px; margin: 0 !important; font-size: 12px; }
  #chat { margin-bottom: 130px !important; }
  #chat table { border-collapse: collapse; width: 100%; }
  #chat th, #chat td { border: 1px solid #d8a9b4; padding: 12px; text-align: left; vertical-align: top; }
  #chat th { background: #f5e3e8; }
  #chat tbody tr:nth-child(even) { background: #fff8fa; }
  .civic-icon {''');p.write_text(s)
def main():bilans();parcours();navigation()
if __name__=='__main__':main()
