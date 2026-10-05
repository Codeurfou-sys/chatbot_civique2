from pathlib import Path
import json,re,sys
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT/'scripts'))
from ameliorations_v6 import blocks,join,THEMES,FOCUS,link
URL='https://frateformation.net/formation/examen-civique/'
ICONS=['🇫🇷','🏛️','⚖️','🗺️','🤝']
def main():
 for p in (ROOT/'modules').glob('*.md'):
  b=blocks(p.read_text())
  for sid in list(b):
   v=b[sid];v=re.sub(r'(?m)^💡\s*(?:\*{0,2}\s*Retenez\s*:\s*\*{0,2}\s*)+', '💡 Retenez : ',v)
   matches=list(re.finditer(r'(?m)^(\d+[.)] )\[(?:🔘 |<span class="qcm-letter">[ABCD]</span> )?(.+)\]\(([^)]+_(?:VRAI|FAUX))\)$',v))
   if len(matches)==4:
    correct=next((chr(65+i) for i,m in enumerate(matches) if m[3].endswith('_VRAI')),None)
    for i,m in reversed(list(enumerate(matches))):v=v[:m.start()]+m[1]+'[<span class="qcm-letter">'+chr(65+i)+'</span> '+m[2]+']('+m[3]+')'+v[m.end():]
    if correct:
     for suffix in ['_VRAI','_FAUX']:
      target=sid+suffix
      if target in b:b[target]=re.sub(r'(Réponse correcte\s*:\s*(?:\*\*)?)(?:[ABCD] — )?',lambda m:m[1]+correct+' — ',b[target])
   b[sid]=v
  p.write_text(join(b))
 p=ROOT/'modules/02_bilan.md';b=blocks(p.read_text())
 for sid in list(b):
  if not sid.endswith('_RECO'):continue
  v='### 💡 Vos conseils personnalisés\n\nLes thématiques sont présentées du score le plus faible au plus élevé.\n\n'+link('🧭 Mon parcours personnalisé','SCR_PARCOURS_MENU')+'\n'
  for score in range(6):
   for t,title in enumerate(THEMES,1):
    text=[f'Vous découvrez cette thématique. Commencez par {FOCUS[t-1]} : lisez une courte partie du cours, puis expliquez une notion avec vos mots.',f'Vous avez reconnu un premier repère. Reprenez {FOCUS[t-1]}, en reliant chaque notion à un exemple concret.',f'Vous avez déjà quelques acquis. Pour progresser, travaillez {FOCUS[t-1]} et notez les différences entre les notions que vous confondez.',f'Vous avez compris une bonne partie de cette thématique. Consolidez {FOCUS[t-1]} : relisez les corrections des deux réponses manquées et testez-vous à nouveau.',f'Vous maîtrisez largement cette thématique. Revoyez la notion liée à votre réponse manquée concernant {FOCUS[t-1]}. Entraînez-vous ensuite aux mises en situation pour appliquer ces acquis.',f'Vous maîtrisez cette thématique dans ce bilan et avez obtenu un **score parfait : félicitations !** Vous avez bien mobilisé vos connaissances sur {FOCUS[t-1]}. Si vous ne l’avez pas encore fait, passez un examen blanc chronométré pour tester vos connaissances dans les conditions de l’examen.'][score]
    v+=f'`if @score_t{t} == {score}`\n#### {ICONS[t-1]} {title}\n**Votre résultat : {score}/5.**\n\n{text}\n'
    if score<5:v+=link('📖 Relire cette thématique',f'SCR_REV_T{t}_MENU')+'\n'
    if score in [4,5]:v+=link('🎭 Réussir les mises en situation','SCR_CONS_SITUATIONS_MENU')+'\n'
    if score==5:v+=link('🎯 Passer un examen blanc','SCR_PREP_MENU')+'\n'
    v+='`endif`\n\n'
  v+=link('💡 Mémoriser efficacement','SCR_CONS_MEMOIRE_MENU')+'\n'+link('📊 Revoir mes résultats',sid.replace('_RECO','_RESULT'))+'\n'+link('↩️ Retour au choix des bilans','SCR_BIL_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL');b[sid]=v
 p.write_text(join(b))
 p=ROOT/'modules/11_parcours.md';b=blocks(p.read_text());v=b['SCR_PARCOURS_MENU'];v=re.sub(r'`if @parcoursT(\d) >= 4 && @parcoursT\1 <= 5`(.*?)`endif`',lambda m:f'`if @parcoursT{m[1]} == 4`'+m[2]+'`endif`',v,flags=re.S)
 pos=v.rfind('`endif`');addition=''.join(f'`if @parcoursT{t} == 5`\n'+link(ICONS[t-1]+' '+title+f' — `@parcoursT{t}`/5',f'SCR_PARCOURS_T{t}')+'\n`endif`\n' for t,title in enumerate(THEMES,1))
 if not re.search(r'`if @parcoursT1 == 5`',v):v=v[:pos]+addition+v[pos:]
 b['SCR_PARCOURS_MENU']=v
 for t in range(1,6):
  sid=f'SCR_PARCOURS_T{t}';v=b[sid];v=v.replace('#### Étape 2 — Réaliser deux entraînements ciblés',f'`@parEtape = calc(@parcoursT{t} < 4 ? 2 : 1)`\n#### Étape `@parEtape` — Réaliser deux entraînements ciblés').replace('#### Étape 3 —',f'`@parEtape = calc(@parcoursT{t} < 4 ? 3 : 2)`\n#### Étape `@parEtape` —').replace('#### Étape 4 —',f'`@parEtape = calc(@parcoursT{t} < 4 ? 4 : 3)`\n#### Étape `@parEtape` —')
  if 'score parfait' not in v:v=v.replace(f'**Votre résultat au dernier bilan : `@parcoursT{t}`/5.**',f'**Votre résultat au dernier bilan : `@parcoursT{t}`/5.**\n`if @parcoursT{t} == 5`\nFélicitations pour ce score parfait ! Vous pouvez maintenant vérifier ces acquis dans un examen blanc chronométré.\n1. [🎯 Passer un examen blanc](SCR_PREP_MENU)\n`endif`')
  b[sid]=v
 p.write_text(join(b))
 p=ROOT/'modules/06_entrainement.md';b=blocks(p.read_text());manifest=json.loads((ROOT/'reports/entrainements_sources.json').read_text())
 for sid,v in b.items():
  if sid.endswith('_START') and '@ent_k1 = 0' not in v:v=''.join(f'`@ent_{typ}{t} = 0`\n' for typ in ['k','m'] for t in range(1,6))+v
  b[sid]=v
 for item in manifest:
  base=f'ENT_{item["exam"]}_{item["route"]}_V{item["variant"]:02d}'
  for i,q in enumerate(item['questions'],1):
   sid=f'{base}_Q{i:02d}_VRAI';counter=f'@ent_{"m" if q["situation"] else "k"}{q["theme"]}';v=b[sid]
   if counter+' = calc' not in v:v=f'`{counter} = calc({counter}+1)`\n'+v
   b[sid]=v
   if i<len(item['questions']) and not q['situation'] and item['questions'][i]['situation']:
    for suffix in ['_VRAI','_FAUX']:b[f'{base}_Q{i:02d}'+suffix]=b[f'{base}_Q{i:02d}'+suffix].replace('Question suivante','Accéder aux mises en situation')
  if len(item['questions'])!=15:continue
  sid=base+'_RESULT';v='### 📊 Vos résultats\n\n**Score total : `@score`/15.**\n<progress class="v9-progress" max="15" value="`@score`" aria-label="Score global"></progress>\n\n### 📘 Connaissances officielles\n**Score : `@ent_q`/10.** Deux questions par thématique.\n\n'
  for score in range(3):
   for t,title in enumerate(THEMES,1):
    v+=f'`if @ent_k{t} == {score}`\n#### {ICONS[t-1]} {title} — {score}/2\n'+[f'📍 **Priorité :** reprenez {FOCUS[t-1]} dans le cours avant un nouvel entraînement.',f'📍 **À consolider :** relisez la correction de la réponse manquée concernant {FOCUS[t-1]}, puis vérifiez la notion.','✅ **Deux bonnes réponses :** confirmez ces acquis avec d’autres questions.'][score]+'\n'
    if score<2:v+=link('📖 Relire le cours',f'SCR_REV_T{t}_MENU')+'\n'+link('📘 M’entraîner sur cette thématique',f'SCR_ENT_{item["exam"]}_T{t}_Q_LAUNCH')+'\n'
    v+='`endif`\n\n'
  v+='### 🎭 Mises en situation\n**Score : `@ent_ms`/5.** Une situation par thématique.\n\nPour chaque cas, identifiez le principe civique recherché et comparez toutes les réponses avant de choisir.\n\n'
  for score in [0,1]:
   for t,title in enumerate(THEMES,1):
    v+=f'`if @ent_m{t} == {score}`\n#### {ICONS[t-1]} {title} — {score}/1\n'
    if score==0:v+='📍 **À travailler :** revoyez la règle du cas rencontré, puis appliquez-la dans une nouvelle situation.\n'+link('🎭 M’entraîner aux mises en situation de ce thème',f'SCR_ENT_{item["exam"]}_T{t}_MIS_LAUNCH')+'\n'+link('📖 Relire le cours',f'SCR_REV_T{t}_MENU')+'\n'
    else:v+='✅ Vous avez choisi la réponse adaptée à cette situation.\n'
    v+='`endif`\n\n'
  v+=link('🎭 Comment réussir les mises en situation','SCR_CONS_SITUATIONS_MENU')+'\n'+link('🔄 Faire un nouvel entraînement','SCR_ENT_MENU')+'\n'+link('🎯 Passer un examen blanc','SCR_PREP_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL');v=re.sub(r'(`if @ent_([km])(\d) == (\d)`\n)(#### [^\n]+)\n',lambda m:m[1]+m[5]+'\n<progress class="v9-progress" max="'+('2' if m[2]=='k' else '1')+'" value="'+m[4]+'" aria-label="Score de la thématique"></progress>\n',v);b[sid]=v
 p.write_text(join(b))
 p=ROOT/'modules/04_glossaire.md';b=blocks(p.read_text());b['SCR_GLO_SEARCH']=re.sub(r'Saisissez un mot.*?« Poser une question »\.', 'Saisissez un mot, même si vous n’êtes pas sûr de l’orthographe. Je vous proposerai les mots les plus proches que j’ai trouvés. Pour une question complète, utilisez « Poser une question ».',b['SCR_GLO_SEARCH'],flags=re.S);p.write_text(join(b))
 p=ROOT/'modules/08_conseils.md';b=blocks(p.read_text())
 for sid,v in b.items():
  v=v.replace('Refaire un entraînement','Faire un entraînement');v=re.sub(r'^### .*Pourquoi oublie-t-on \?', '### 🔎 Pourquoi oublie-t-on ?',v,flags=re.M)
  if sid=='SCR_CONS_ENTRETIEN_MENU':
   v=re.sub(r'(?m)^\d+\. \[.*\]\(SCR_REV_T[1-5]_MENU\)\n','',v);pos=v.find('3. [🎯')
   if pos<0:pos=v.find('1. [🎯')
   v=v[:pos]+''.join(link(ICONS[t-1]+' '+title,f'SCR_REV_T{t}_MENU')+'\n' for t,title in enumerate(THEMES,1))+v[pos:]
  if sid=='SCR_CONS_MEMOIRE_02' and 'Ebbinghaus' not in v:
   v=v.replace(':::info 📉 La courbe de l’oubli',':::info 📉 La courbe de l’oubli — Hermann Ebbinghaus (1885)');pos=v.find(':::',v.find(':::info')+3)+3
   v=v[:pos]+'\n\n![Courbe pédagogique : les rappels espacés aident à retrouver les connaissances](https://codeurfou-sys.github.io/chatbot_civique2/assets/courbe-oubli-v9.svg)\n\n**Comment lire le schéma ?** Sans rappel, une partie des connaissances devient plus difficile à retrouver. À chaque révision active, essayez de répondre sans regarder le cours, puis vérifiez. Répétez après un délai plus long. Les courbes sont illustratives : elles ne prédisent pas votre mémoire personnelle.\n\nSource : [Murre et Dros, étude de réplication (2015)](https://doi.org/10.1371/journal.pone.0120644).\n'+v[pos:]
  b[sid]=v
 p.write_text(join(b))
 p=ROOT/'modules/09_faq.md';b=blocks(p.read_text())
 for sid,v in b.items():
  v=re.sub(r'Il[ \t]*\n+\s*permet', 'Il permet',v);v=re.sub(r'(?m)^- des fiches de (?:synthèse|révision)[^\n]*\n','',v)
  v=v.replace('ou le site officiel de.','ou le site officiel de [Frate Formation]('+URL+').').replace('ou consulter.','ou consulter [la page Examen civique de Frate Formation]('+URL+').').replace('consulter la page de,','consulter [la page Examen civique de Frate Formation]('+URL+'),').replace('le site de **FRATE Formation**','le site de **[FRATE Formation]('+URL+')**')
  if sid=='SCR_FAQ_019':v=re.sub(r'Les frais d.inscription.*?(?=\n:::)','Le tarif applicable est de **80 € chez Frate Formation**. Il vous sera demandé au moment de votre inscription. Le paiement s’effectue en ligne lors de la réservation. Ce montant n’est pas remboursable si vous changez d’avis ou si vous ne réussissez pas l’examen.',v,flags=re.S)
  v=re.sub(r'<img[^>]+>\s*(Carte de résident[^\]\n]*)',r'📘 \1',v)
  b[sid]=v
 p.write_text(join(b))
 p=ROOT/'scripts/ameliorer_presentation.py';s=p.read_text().replace("('SCR_GLO_', 'SCR_QL_')","('SCR_GLO_', 'SCR_QL_', 'SCR_FAQ_')").replace("label.startswith('🔘 ')","(label.startswith('🔘 ') or 'qcm-letter' in label)")
 if '.qcm-letter {' not in s:s=s.replace('  #chat .warning {','  .qcm-letter { display:inline-flex; align-items:center; justify-content:center; width:22px; height:22px; border-radius:50%; background:#777; color:#fff; font-weight:700; margin-right:7px; flex-shrink:0; }\n  #chat .warning {')
 p.write_text(s)
 p=ROOT/'modules/03_revisions.md';b=blocks(p.read_text());v=b['SCR_REV_T4_CH02_COURS'].replace('Carte schématique des','Carte de France —').replace('fleuves-france.svg','fleuves-france-v9.svg').replace('massifs-france.svg','massifs-france-v9.svg')
 if 'SCR_REV_GEO_EXERCICES' not in v:v+='\n\n1. [🗺️ Faire les deux activités sur carte](SCR_REV_GEO_EXERCICES)\n'
 b['SCR_REV_T4_CH02_COURS']=v;b['SCR_REV_GEO_EXERCICES']='### 🗺️ Repérer les fleuves et les montagnes\n\nDeux activités pour appliquer vos connaissances : choisissez le fleuve ou le massif demandé en cliquant sur la carte. Vous pouvez aussi utiliser Tab puis Entrée. Une correction explique chaque réponse.\n\n<iframe title="Activités sur une carte de France" src="https://codeurfou-sys.github.io/chatbot_civique2/activites-geographie/" width="100%" height="780" loading="lazy"></iframe>\n\n1. [🗺️ Ouvrir les activités dans une nouvelle page](https://codeurfou-sys.github.io/chatbot_civique2/activites-geographie/)\n1. [📖 Retour au cours](SCR_REV_T4_CH02_COURS)\n1. [🏠 Menu principal](MENU_PRINCIPAL)\n';p.write_text(join(b))
 # Répercuter les réponses FAQ dans la base des questions libres, sans modifier la saisie.
 p=ROOT/'data/question_libre.json';data=json.loads(p.read_text());faq=blocks((ROOT/'modules/09_faq.md').read_text())
 for intent in data['intents']:
  if not intent['id'].startswith('FAQ_'):continue
  target=next((x[1] for x in intent['links'] if x[1].startswith('SCR_FAQ_')),None)
  if target and target in faq:
   match=re.search(r':::info[^\n]*\n(.*?)\n:::',faq[target],re.S)
   if match:intent['answer']=match[1].strip()
 p.write_text(json.dumps(data,ensure_ascii=False,indent=2))
 from enrichir_questions_libres import ordered_rules,predicate
 qb=blocks((ROOT/'modules/10_question_libre.md').read_text());rules=ordered_rules(data);answer='!Keyboard: false\n`if @qlQuestion`\n'+re.search(r'`@qlNormalisee = calc\(.*?\)`',qb['SCR_QL_ANSWER'])[0]+'\n`@qlTrouvee = false`\n`@qlReponse = undefined`\n'
 for rule in rules:
  answer+=f'<!-- Réponse : {rule["id"]} -->\n`if !@qlTrouvee && ({predicate(rule["groups"])})`\n'+rule['answer']+f'\n`@qlReponse = {rule["id"]}`\n`@qlTrouvee = true`\n`endif`\n'
 for rule in rules:answer+=f'`if @qlReponse == "{rule["id"]}"`\n'+'\n'.join(link(label,target) for label,target in rule['links'])+'\n'+link('❓ Poser une autre question','SCR_QL_RESET')+'\n`endif`\n'
 answer+='`if !@qlTrouvee`\nJe n’ai pas identifié le sujet de votre question. Essayez un mot plus précis ou cherchez une notion.\n1. [❓ Reformuler ma question](SCR_QL_RESET)\n1. [📖 Chercher une notion](SCR_GLO_SEARCH)\n`endif`\n`endif`\n1. [🏠 Menu principal](MENU_PRINCIPAL)\n'
 qb['SCR_QL_ANSWER']=answer;(ROOT/'modules/10_question_libre.md').write_text(join(qb));(ROOT/'reports/questions_libres_regles.json').write_text(json.dumps(rules,ensure_ascii=False,indent=2))

if __name__=='__main__':main()
