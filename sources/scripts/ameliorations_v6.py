"""Améliorations v6 : bilans, réponses de révision et transitions ChatMD."""
from pathlib import Path
import re,json,random,unicodedata,sys
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from synchroniser_banques_examens import read_rows,EXAM_CONFIGS,clean
ROOT=Path(__file__).resolve().parents[1]
def norm(s):return re.sub(r'\s+',' ',''.join(c for c in unicodedata.normalize('NFD',str(s).lower().replace('œ','oe').replace('’',"'")) if not unicodedata.combining(c)).strip())
def blocks(s):return dict(re.findall(r'(?ms)^## (\w+)\s*$\n(.*?)(?=^## |\Z)',s))
def join(b):return '\n\n'.join('## '+i+'\n'+v.strip() for i,v in b.items())+'\n'
def link(label,target):return f'1. [{label}]({target})'
def nav():return '\n'+link('↩️ Retour au choix des bilans','SCR_BIL_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')+'\n'
THEMES=['Principes et valeurs de la République','Institutions et système politique','Droits et devoirs','Histoire, géographie et culture','Vivre dans la société française']
FOCUS=['les libertés, l’égalité, la fraternité et la laïcité','le rôle du président, du Gouvernement, du Parlement et des collectivités','les droits fondamentaux et les obligations de chacun','les repères historiques, les territoires et le patrimoine','les démarches, la santé, le travail et l’éducation']
def bar(var,total):return '\n'.join(f'`if {var} == {n}`\n'+('🟩'*n+'⬜'*(total-n))+f' **{n}/{total} · {round(n*100/total)} %**\n`endif`' for n in range(total+1))
def bilans():
 p=ROOT/'modules/02_bilan.md';b={i:v for i,v in blocks(p.read_text()).items() if i.startswith('SCR_')}
 for i,v in b.items():
  v=re.sub(r'(?m)^\d+[.)] .*Poser une question.*\n?','',v).replace('Retour au menu du module','Retour au choix des bilans').replace('Retour au bilan','Retour au choix des bilans')
  for phrase,icon in [('Dans une semaine ou moins','🔴'),('Dans deux semaines','<span class="deadline-orange" aria-hidden="true"></span>'),('Dans un mois','🟡'),('Plus tard','🟢')]:v=re.sub(r'\[[^\]\n]*?'+re.escape(phrase),'['+icon+' '+phrase,v)
  b[i]=v
 manifest=[]
 for exam,cfg in EXAM_CONFIGS.items():
  source=read_rows(ROOT/'sources'/cfg['questions_file'],cfg['questions_sheet'])
  for profile,wanted in [('DEC',0),('EQ',1),('INT',2)]:
   for variant in range(1,11):
    rng=random.Random(f'v6:{exam}:{profile}:{variant}');selected=[];seen=set()
    for theme in range(1,6):
     pool=[r for r in source if int(r['N° thématique'])==theme];rng.shuffle(pool)
     def difficulty(r):
      d=norm(r.get('Difficulté',''));return 2 if 'diffic' in d else 1 if 'interm' in d else 0
     pool.sort(key=lambda r:abs(difficulty(r)-wanted));count=0
     for row in pool:
      key=norm(row['Question'])
      if key in seen:continue
      seen.add(key);selected.append(row);count+=1
      if count==5:break
     if count!=5:raise ValueError(f'{exam}/{theme}: questions distinctes insuffisantes')
    rng.shuffle(selected);prefix=f'BIL_{exam}_{profile}_V{variant:02d}'
    manifest.append(dict(exam=exam,profile=profile,variant=variant,questions=[dict(id=r['ID'],question=r['Question'],theme=int(r['N° thématique']),difficulty=r['Difficulté']) for r in selected]))
    for n,r in enumerate(selected,1):
     q=f'{prefix}_Q{n:02d}';theme=int(r['N° thématique']);good=clean(r['Bonne réponse']).upper()[0]
     progress=f'📍 **{n-1}/25 questions terminées · {(n-1)*4} %**\n\n'+('🟦'*(n-1)+'⬜'*(26-n))
     b[q]=f'!Keyboard: false\n### Question {n} sur 25\n\n{progress}\n\n**{clean(r["Question"])}**\n\n'+'\n'.join(link('🔘 '+clean(r['Réponse '+letter]).replace('[','(').replace(']',')'),q+('_VRAI' if letter==good else '_FAUX')) for letter in 'ABCD')+nav()
     for correct in (True,False):
      body=(f'`@score = calc(@score+1)`\n`@score_t{theme} = calc(@score_t{theme}+1)`\n' if correct else '')+'### '+('✅ Bonne réponse' if correct else '🟠 À revoir')+'\n\n'
      body+='**Réponse correcte :** '+clean(r['Réponse '+good])+'\n\n'+clean(r['Explication pédagogique'])+'\n\n'
      if r.get('Astuce mémoire'):body+='💡 **Pour retenir :** '+clean(r['Astuce mémoire'])+'\n\n'
      body+=f'📍 **{n}/25 questions terminées · {n*4} %**\n\n'+('🟦'*n+'⬜'*(25-n))+'\n\n'+link('📊 Voir mes résultats' if n==25 else '➡️ Question suivante',prefix+'_RESULT' if n==25 else f'{prefix}_Q{n+1:02d}')+nav()
      b[q+('_VRAI' if correct else '_FAUX')]=body
    body='### 📊 Votre bilan est terminé\n\n**Votre score : `@score`/25**\n\n'+bar('@score',25)+'\n\n'
    body+='`if @mode_bilan == "PROG" && @score_precedent != "" && @score_precedent != "NON_RETENU_PROG" && @score_precedent != "NON_RETENU_INIT"`\n`@evolution = calc(@score-@score_precedent)`\nVotre score précédent était de **`@score_precedent`/25**.\n`if @evolution > 0`\n📈 Vous avez gagné **`@evolution` point(s)**. Votre travail porte ses fruits.\n`endif`\n`if @evolution == 0`\nVotre score est stable. Les résultats par thématique vous aideront à cibler vos prochaines révisions.\n`endif`\n`if @evolution < 0`\nCette série met en évidence des notions à consolider. Comparez vos erreurs avant de choisir votre prochain entraînement.\n`endif`\n`endif`\n'
    body+='`if @mode_bilan == "PROG" && (@score_precedent == "" || @score_precedent == "NON_RETENU_PROG" || @score_precedent == "NON_RETENU_INIT")`\nNotez ce nouveau score : il servira de référence pour votre prochain bilan.\n`endif`\n'
    for cond,text in [('@score <= 9','Vous avez identifié vos premières connaissances. Commencez par les thématiques classées en priorité très haute et avancez par petites séances régulières.'),('@score >= 10 && @score <= 19','Vous disposez déjà de plusieurs acquis. Travaillez d’abord les notions fragiles, puis vérifiez votre progression avec un nouvel entraînement.'),('@score >= 20','Vous avez obtenu au moins 80 % de bonnes réponses dans ce bilan. Consolidez vos dernières erreurs et poursuivez avec des questions plus difficiles.')]:body+=f'\n`if {cond}`\n{text}\n`endif`\n'
    b[prefix+'_RESULT']=body+'\n'+link('📚 Voir mes résultats par thématique',prefix+'_THEMES')+'\n'+link('💡 Consulter mes conseils personnalisés',prefix+'_RECO')+nav()
    b[prefix+'_THEMES']='### 📚 Vos résultats par thématique\n\n'+'\n\n'.join(f'#### {t}\n'+bar(f'@score_t{i}',5) for i,t in enumerate(THEMES,1))+'\n\n'+link('💡 Mes prochaines étapes',prefix+'_RECO')+'\n'+link('📊 Revoir mon score global',prefix+'_RESULT')+nav()
    body='### 💡 Votre plan de révision personnalisé\n\nLes conseils sont classés de la priorité la plus élevée à la plus faible. Chaque thématique a été évaluée sur **5 questions**.\n\n'
    for low,high,priority,icon in [(0,1,'très haute','🔴'),(2,2,'haute','🟠'),(3,3,'moyenne','🟡'),(4,5,'faible','🟢')]:
     for theme,title in enumerate(THEMES,1):
      var=f'@score_t{theme}';body+=f'`if {var} >= {low} && {var} <= {high}`\n#### {icon} {title} — priorité {priority}\n\n**Votre résultat : `{var}`/5.**\n\n'
      if low==0:body+=f'Cette thématique mérite votre attention en premier. Relisez le cours sur {FOCUS[theme-1]}. Reformulez chaque idée avec vos propres mots et notez un exemple concret. Entraînez-vous ensuite pour viser 6/10, puis 8/10 à deux reprises.\n'
      elif low==2:body+=f'Vous reconnaissez certaines notions de cette thématique. Revoyez particulièrement {FOCUS[theme-1]} et les explications des réponses manquées. Un entraînement ciblé vous aidera à atteindre 6/10, puis 8/10 deux fois.\n'
      elif low==3:body+=f'Vous avez compris une bonne partie de cette thématique. Repérez les confusions concernant {FOCUS[theme-1]}. Après une courte révision, visez au moins 8/10 à deux reprises en entraînement.\n'
      else:body+=f'Vous maîtrisez presque cette thématique : vous avez atteint au moins **80 % sur les 5 questions de ce bilan**. Relisez vos éventuelles erreurs concernant {FOCUS[theme-1]}. Pour confirmer ces acquis, entraînez-vous sur cette thématique puis essayez un entraînement complet difficile.\n'
      body+='\n'+link('📖 Réviser cette thématique',f'SCR_REV_T{theme}_MENU')+'\n'+link('📘 M’entraîner aux questions de cette thématique',f'SCR_ENT_{exam}_T{theme}_Q_LAUNCH')+'\n'+link('🎭 M’entraîner aux mises en situation de cette thématique',f'SCR_ENT_{exam}_T{theme}_MIS_LAUNCH')+'\n'
      if low==4:body+=link('🔴 Faire un entraînement complet difficile',f'SCR_ENT_{exam}_LVL_DIF_LAUNCH')+'\n'
      body+='`endif`\n\n'
    b[prefix+'_RECO']=body+link('💡 Mémoriser efficacement','SCR_CONS_MEMOIRE_MENU')+'\n'+link('🎭 Réussir les mises en situation','SCR_CONS_SITUATIONS_MENU')+'\n'+link('📊 Revoir mes résultats',prefix+'_RESULT')+nav()
 p.write_text(join(b));(ROOT/'reports/bilans_sources.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2))
def revisions():
 p=ROOT/'modules/03_revisions.md';s=p.read_text()
 if '.toLowerCase().includes(' not in s:return
 s=re.sub(r'(@rep_\w+)\.toLowerCase\(\)\.includes\("([^"\n]*)"\)',lambda m:f'normalizeText({m[1]}).replaceAll("œ","oe").includes({json.dumps(norm(m[2]),ensure_ascii=False)})',s)
 b=blocks(s);i='SCR_REV_T5_CH03_VERIF_Q02_RESULT';v=b[i];var='@rep_t5_ch3_q2';expr=lambda x:f'normalizeText({var}).includes("{x}")'
 full=' && '.join('('+' || '.join(expr(x) for x in group)+')' for group in [('brut',),('net',),('cotisation','contribution','prelevement')])
 partial=' || '.join(expr(x) for x in ['salaire','remuneration','brut','net','cotisation','contribution','prelevement','fiche de paie','fiche de paye','bulletin','conge paye']);it=iter([full,f'!({full}) && ({partial})',f'!({partial})']);b[i]=re.sub(r'(?m)^`if .+`$',lambda m:'`if '+next(it)+'`',v);s=join(b)
 synonyms={'vote':['voter','suffrage'],'gratuit':['sans frais'],'obligatoire':['impose'],'egalite':['memes droits'],'fraternite':['entraide','solidarite'],'cotisation':['contribution'],'employeur':['patron'],'independant':['autonome'],'municipal':['de la commune'],'laicite':['laic'],'citoyen':['citoyenne']}
 def expand(m):
  alts=synonyms.get(m[2],[]);return '('+' || '.join([m[0]]+[f'normalizeText({m[1]}).replaceAll("œ","oe").includes("{a}")' for a in alts])+')' if alts else m[0]
 s=re.sub(r'normalizeText\((@rep_\w+)\)\.replaceAll\("œ","oe"\)\.includes\("([^"\n]*)"\)',expand,s).replace('Votre réponse ne contient aucun des mots-clés attendus.','Je n’ai pas identifié les notions attendues dans cette réponse. Comparez-la avec l’explication ci-dessous, puis reformulez votre réponse avec vos propres mots.');p.write_text(s)
def transitions():
 for p in (ROOT/'modules').glob('*.md'):
  b=blocks(p.read_text());changed=False
  for i,v in b.items():
   if '!SelectNext:' in v:
    v=re.sub(r'(?m)^\d+[.)] \[.*\]\([^\n]+\)\s*$','',v)
    if 'civicoach-route' not in v:v='!Typewriter: false\n<span class="civicoach-route" aria-hidden="true"></span>\n'+v
    b[i]=v;changed=True
  if changed:p.write_text(join(b))
def main():
 bilans();revisions();transitions();p=ROOT/'modules/start.md';s=p.read_text();s=re.sub(r'### .*?\n\n👋 Vous êtes de retour sur le menu principal\.', '### C’est CiviCoach, je suis de retour, que souhaitez-vous faire ?',s,count=1);p.write_text(s)
if __name__=='__main__':main()
