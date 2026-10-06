"""Feedbacks validés et corrigé compact du document Chat bot V6."""
from pathlib import Path
from collections import Counter
import sys,re,json,html,base64
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT));sys.path.insert(0,str(ROOT/'scripts'))
import synchroniser_banques_examens as m
from ameliorations_v6 import blocks,join,THEMES,link
ICONS=['🇫🇷','🏛️','⚖️','🗺️','🤝']
LABELS=['Commencer par les repères essentiels','Clarifier les confusions','Consolider les connaissances','Stabiliser les acquis','Confirmer la maîtrise','Approfondir les acquis']
DATA=json.loads((ROOT/'data/feedbacks_examens_v13.json').read_text())
GLOSS=json.loads((ROOT/'data/glossaire_v6.json').read_text())
def esc(s):return html.escape(m.clean(s))
def anchor(label,target):return '<a href="#'+base64.b64encode(target.encode()).decode()+'">'+html.escape(label)+'</a>'
def read(name):return blocks((ROOT/'modules'/name).read_text())
def write(name,b):(ROOT/'modules'/name).write_text(join(b))
def glossary(row):
    keys=m.canonical(row.get('Mots-clés',''));question=m.canonical(row.get('Question',''));asked=m.canonical(row.get('Question posée',''));answer=m.canonical(row['Réponse '+m.clean(row['Bonne réponse']).upper()])
    found=[];generic={'france','republique','examen civique','citoyen','etat','loi','droit','liberte','responsabilite'}
    for entry in GLOSS:
        name=m.canonical(entry['title'])
        if name in generic:continue
        score=0
        for alias in [entry['title']]+entry.get('aliases',[]):
            term=m.canonical(alias)
            if len(term)<3:continue
            for text,weight in [(keys,8),(question,6),(asked,5),(answer,4)]:
                if (' '+term+' ') in (' '+text+' '):score=max(score,weight+min(3,len(term.split())))
        if score:found.append((score,entry))
    found.sort(key=lambda x:(-x[0],x[1]['title']))
    return [e for _,e in found[:2]]
def notion_title(row,entries):
    combined=m.canonical(' '.join(str(row.get(k,'')) for k in ['Question','Question posée','Mots-clés']))
    if 'confidentialite' in combined or 'secret medical' in combined:return 'Confidentialité des informations médicales'
    if entries:return entries[0]['title']
    tip=m.clean(row.get('Astuce mémoire',''))
    if '=' in tip:
        title=re.sub(r'^Retenez\s*(?:le mot.clé)?\s*:\s*','',tip.split('=')[0],flags=re.I).strip()
        if 3<len(title)<90:return title[0].upper()+title[1:]
    return m.clean(row.get('Question posée') or row['Question'])
def small_explanation(row,situation):
    text=m.clean(row['Feedback pédagogique'] if situation else row['Explication pédagogique'])
    parts=re.split(r'(?<=[.!?])\s+(?=[A-ZÀÂÉÈÊÎÔÙÇ])',text)
    first=parts[0]
    # Preserve qualifications such as an exception instead of dropping them.
    if len(text.split())<=35 or any(w in text.lower() for w in ['sauf','exception','condition','limite']):return text
    return first
def ranks(totals,saved=False):
    prefix='@lastT' if saved else '@exam_t';v=''
    for t,n in totals.items():
        v+=f'`@r13Pct{t} = calc(Math.round({prefix}{t}/{n}*1000)/10)`\n'
        terms=[f'({prefix}{u}/{totals[u]} < {prefix}{t}/{n} || ({prefix}{u}/{totals[u]} == {prefix}{t}/{n} && {u} < {t}) ? 1 : 0)' for u in totals if u!=t]
        v+=f'`@r13Rank{t} = calc('+ ' + '.join(terms)+')`\n'
    return v
def theme_feedback(t,rows,saved=False):
    err=lambda n:f'@lastErr{n}' if saved else rows[n-1]['_err']
    text=''
    for band,(low,high) in enumerate(DATA['bands']):
        text+=f'`if @r13Pct{t} >= {low} && @r13Pct{t} < {high}`\n**{LABELS[band]} :** '+DATA['themes'][str(t)][band]+'\n`endif`\n'
    seen=set();notions=[]
    for i,row in enumerate(rows,1):
        if int(row['N° thématique'])!=t:continue
        name=row['_title']
        if name in seen:continue
        seen.add(name)
        indexes=[j for j,r in enumerate(rows,1) if int(r['N° thématique'])==t and r['_title']==name]
        condition=' || '.join(err(j)+' == 1' for j in indexes)
        notions.append(f'`if {condition}`\n- '+name+'\n`endif`\n')
    if notions:
        conditions=' || '.join(err(i)+' == 1' for i,r in enumerate(rows,1) if int(r['N° thématique'])==t)
        compact=[]
        for item in notions:
            condition,rest=item.split('`\n',1)
            compact.append('`if ('+condition[4:]+') && @r13NotionCount < 3`\n'+rest.replace('`endif`','`@r13NotionCount = calc(@r13NotionCount+1)`\n`endif`'))
        text+=f'`if {conditions}`\n**Commencez par ces notions manquées :**\n`@r13NotionCount = 0`\n'+''.join(compact)+'`endif`\n'
    return text
def results(code,rows,saved=False,all_feedback=False):
    exam=code.split('_')[0];totals=Counter(int(r['N° thématique']) for r in rows)
    score='@lastExamScore' if saved else '@exam_score';knowledge='@lastKnowledge' if saved else '@exam_connaissances';situations='@lastSituations' if saved else '@exam_situations';prefix='@lastT' if saved else '@exam_t'
    rid='SCR_LAST_EXAM_RESULT' if saved else 'EXAM_'+code+'_RESULT';corr='SCR_LAST_CORR_'+code if saved else 'EXAM_'+code+'_CORRIGE';cons='SCR_LAST_CONSEILS_'+code if saved else 'SCR_EXAM_CONSEILS_'+code
    if all_feedback:
        v='### 🧭 Mes conseils par thématique\n\nLes conseils correspondent à votre résultat et aux notions réellement manquées.\n'+ranks(totals,saved)
        for rank in range(5):
            for t in range(1,6):v+=f'`if @r13Rank{t} == {rank}`\n#### {ICONS[t-1]} {THEMES[t-1]} — `{prefix}{t}`/{totals[t]} · `@r13Pct{t}` %\n'+theme_feedback(t,rows,saved)+'`endif`\n'
        return v+'\n'+link('📊 Revoir mes résultats',rid)+'\n'+link('📘 Corrigé de mes erreurs',corr)+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
    v='### 📊 Mon résultat — '+{'CSP':'Carte de séjour pluriannuelle','CR':'Carte de résident','NAT':'Naturalisation'}[exam]+'\n\n'+ranks(totals,saved)
    for t in range(1,6):
        for typ,start,end in [('K',1,28),('M',29,40)]:
            indexes=[i for i in range(start,end+1) if int(rows[i-1]['N° thématique'])==t]
            terms=[f'(@lastErr{i} == 1 ? 1 : 0)' if saved else '('+rows[i-1]['_err']+' == 1 ? 1 : 0)' for i in indexes]
            v+=f'`@r13{typ}pct{t} = calc(({len(indexes)} - ('+' + '.join(terms)+f'))/{len(indexes)}*100)`\n'
    v+=f'`@r13Global = calc({score}*2.5)`\n`@r13Knowledge = calc(Math.round({knowledge}/28*1000)/10)`\n`@r13Situations = calc(Math.round({situations}/12*1000)/10)`\n`@r13Gap = calc(Math.max(0,32-{score}))`\n'
    v+=f'**Score global : `{score}`/40 — `@r13Global` %.**\n<progress class="v9-progress" max="40" value="`{score}`" aria-label="Score global"></progress>\n'
    v+=f'📘 **Connaissances : `{knowledge}`/28 · `@r13Knowledge` %**\n\n🎭 **Mises en situation : `{situations}`/12 · `@r13Situations` %**\n\n'
    global_messages=[(0,8,'Ce résultat vous indique par où commencer. Choisissez une seule priorité ci-dessous ; travaillez quelques notions à la fois, puis visez 6/10 sur un entraînement ciblé.'),(8,16,'Vous avez déjà reconnu plusieurs notions. Reprenez vos erreurs dans la première priorité, associez chaque règle à un exemple puis vérifiez-la dans un entraînement.'),(16,24,'Vous disposez de premiers repères utiles. Travaillez les confusions de vos deux priorités et visez 8/10 sur deux entraînements avant de repasser un examen blanc.'),(24,32,'Vous approchez du seuil de réussite. Concentrez-vous sur les notions manquées dans vos deux priorités, puis confirmez-les avec deux entraînements à au moins 8/10.'),(32,40,'L’objectif de 32/40 est atteint : félicitations ! Corrigez les dernières erreurs, puis confirmez ce résultat sur une autre série quelques jours plus tard.'),(40,41,'Toutes vos réponses sont correctes : félicitations pour ce score parfait ! Confirmez ces acquis avec une autre série en conditions réelles.')]
    for low,high,message in global_messages:v+=f'`if {score} >= {low} && {score} < {high}`\n'+message+'\n`endif`\n'
    v+=f'`if {score} < 32`\n**Il vous manque `@r13Gap` bonnes réponses pour atteindre 32/40.**\n`endif`\n'
    v+='<table class="v13-summary"><thead><tr><th>Thématique</th><th>Résultat</th></tr></thead><tbody>\n'
    for rank in range(5):
        for t in range(1,6):v+=f'`if @r13Rank{t} == {rank}`\n<tr><td>{ICONS[t-1]} {THEMES[t-1]}</td><td>`{prefix}{t}`/{totals[t]} · <strong>`@r13Pct{t}` %</strong></td></tr>\n`endif`\n'
    v+='</tbody></table>\n\n'
    for rank in [0,1]:
        for t in range(1,6):v+=f'`if @r13Rank{t} == {rank} && {prefix}{t} < {totals[t]}`\n#### 🎯 Priorité {rank+1} — {THEMES[t-1]}\n'+theme_feedback(t,rows,saved)+'`endif`\n'
    v+=link('📘 Corrigé de mes erreurs',corr)+'\n'
    for t in range(1,6):
        v+=f'`if @r13Rank{t} == 0 && {score} < 40`\n`if @r13Mpct{t} < @r13Kpct{t}`\n'+link('🎯 Travailler ma première priorité',f'SCR_ENT_{exam}_T{t}_MIS_LAUNCH')+'\n`endif`\n'
        v+=f'`if @r13Mpct{t} >= @r13Kpct{t}`\n'+link('🎯 Travailler ma première priorité',f'SCR_ENT_{exam}_T{t}_Q_LAUNCH')+'\n`endif`\n`endif`\n'
    v+=link('🧭 Voir mes conseils par thématique',cons)+'\n'+link('🔄 Passer un nouvel examen','SCR_EXAM_START')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
    return v
def main():
    p=ROOT/'modules/06_entrainement.md';s=p.read_text()
    s=re.sub(r'(?m)^(?:✅ \*\*Un repère à conserver :\*\*|💡 \*\*Pour progresser :\*\*)[^\n]*\n?','',s)
    p.write_text(s)
    ex=read('05_preparer_examen.md');rev=read('03_revisions.md');report=[]
    for exam,cfg in m.EXAM_CONFIGS.items():
        q=m.read_rows(ROOT/'sources'/cfg['questions_file'],cfg['questions_sheet']);by={r['ID']:r for r in q}
        by.update({r['ID']:{**by[r['ID question source']],**r} for r in m.read_rows(ROOT/'sources'/cfg['situations_file'],cfg['situations_sheet'])})
        for variant in range(1,11):
            code=f'{exam}_V{variant:02d}';base='EXAM_'+code;rows=[]
            for i in range(1,41):
                source=re.search(r'<!-- Source '+exam.lower()+r' : (.*?) -->',ex[f'{base}_Q{i:02d}'])[1]
                row=dict(by[source]);entries=glossary(row);row.update(_title=notion_title(row,entries),_entries=entries,_err=f'@err_{code}_Q{i:02d}');rows.append(row)
            old=ex[base+'_RESULT'];snapshot=old[:old.index('`endif`')+len('`endif`')]+'\n'
            ex[base+'_RESULT']=snapshot+results(code,rows)
            ex['SCR_EXAM_CONSEILS_'+code]=results(code,rows,all_feedback=True)
            ex['SCR_LAST_CONSEILS_'+code]=results(code,rows,saved=True,all_feedback=True)
            # Compact errors, with inline navigation instead of dozens of bottom buttons.
            for saved in [False,True]:
                cid='SCR_LAST_CORR_'+code if saved else base+'_CORRIGE';rid='SCR_LAST_EXAM_RESULT' if saved else base+'_RESULT';score='@lastExamScore' if saved else '@exam_score'
                corr='### 📘 Corrigé de mes erreurs\n\nSeules vos réponses incorrectes sont affichées. Ouvrez « Détails » pour retrouver la situation et l’explication complète.\n'
                corr+=f'`if {score} == 40`\n✅ Aucune erreur : toutes vos réponses sont correctes.\n`endif`\n'
                for start,end,title in [(1,28,'Connaissances'),(29,40,'Mises en situation')]:
                    error_terms=[(f'@lastErr{i}' if saved else rows[i-1]['_err'])+' == 1' for i in range(start,end+1)]
                    corr+='`if '+ ' || '.join(error_terms)+'`\n#### '+title+'\n<table class="v13-errors"><thead><tr><th>Question</th><th>Réponse correcte</th><th>Explication courte</th><th>Notion à revoir</th></tr></thead><tbody>\n'
                    for i in range(start,end+1):
                        row=rows[i-1];sit=i>28;err=f'@lastErr{i}' if saved else row['_err'];letter=m.clean(row['Bonne réponse']).upper()
                        details=f'SCR_CORR_DETAIL_{code}_Q{i:02d}'+('_LAST' if saved else '');point=f'SCR_REV_POINT_{code}_Q{i:02d}'+('_LAST' if saved else '')
                        question=m.clean(row['Question posée'] if sit else row['Question']);answer=m.clean(row['Réponse '+letter]);explanation=m.clean(row['Feedback pédagogique'] if sit else row['Explication pédagogique']);key=m.chapter_key(row,cfg['chapter_col']);chapter,chapter_target=m.CHAPTERS[key]
                        refs=anchor('Cours : '+row['_title'],point)
                        for entry in row['_entries']:refs+='<br>'+anchor('Glossaire : '+entry['title'],entry['id'])
                        corr+=f'`if {err} == 1`\n<tr><td data-label="Question"><strong>{i}.</strong> {esc(question)}<br>'+anchor('Détails',details)+'</td><td data-label="Réponse correcte"><strong>'+letter+'</strong> — '+esc(answer)+'</td><td data-label="Explication courte">'+esc(small_explanation(row,sit))+'</td><td data-label="Notion à revoir">'+refs+'</td></tr>\n`endif`\n'
                        detail='### 📘 Votre erreur — Question '+str(i)+'\n\n'+(m.clean(row['Mise en situation'])+'\n\n' if sit else '')+'**'+question+'**\n\n'
                        detail+='\n'.join(l+'. '+m.clean(row['Réponse '+l]) for l in 'ABCD')+'\n\n**Réponse correcte : '+letter+' — '+answer+'**\n\n'+explanation+'\n\n'+link('📖 Revoir la notion précise',point)+'\n'
                        for entry in row['_entries']:detail+=link('📘 '+entry['title'],entry['id'])+'\n'
                        detail+=link('↩️ Revenir au tableau de mes erreurs',cid)+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL');ex[details]=detail
                        # This screen is a direct signpost to the specific notion, not a generic chapter landing.
                        focus='### 📖 '+row['_title']+'\n\n**La notion en contexte**\n\n'+question+'\n\n**'+answer+'**\n\n'+explanation+'\n\n'
                        tip=m.clean(row.get('Astuce mémoire',''))
                        if tip and not sit:focus+='💡 '+tip+'\n\n'
                        for entry in row['_entries']:focus+=link('📘 Consulter '+entry['title'],entry['id'])+'\n'
                        focus+=link('📖 Lire le chapitre : '+chapter,chapter_target)+'\n'+link('↩️ Revenir à mon erreur',details)+'\n'+link('↩️ Revenir au tableau de mes erreurs',cid)+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL');rev[point]=focus
                        if not saved:report.append(dict(screen=base+f'_Q{i:02d}',source=row['ID'],theme=int(row['N° thématique']),notion=row['_title'],glossary=[e['id'] for e in row['_entries']],course=point,details=details))
                    corr+='</tbody></table>\n`endif`\n'
                corr+=link('📊 Revoir mes résultats',rid)+'\n'+link('🧭 Voir mes conseils par thématique','SCR_LAST_CONSEILS_'+code if saved else 'SCR_EXAM_CONSEILS_'+code)+'\n'+link('🔄 Passer un nouvel examen','SCR_EXAM_START')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL');ex[cid]=corr
            # Saved result branches use immutable last-exam counters and updated inline correction targets.
            ex['SCR_LAST_EXAM_RESULT']=ex.get('SCR_LAST_EXAM_RESULT','')
            ex['_V13_SAVED_'+code]=results(code,rows,saved=True)
    last='### 📊 Mon dernier examen blanc\n\n`if !@lastExamDisponible`\nVous n’avez pas encore terminé d’examen blanc dans cette session.\n'+link('🎯 Passer un examen blanc','SCR_PREP_MENU')+'\n`endif`\n'
    for code in [f'{e}_V{v:02d}' for e in m.EXAM_CONFIGS for v in range(1,11)]:last+=f'`if @lastExamDisponible && @lastExamCode == "{code}"`\n'+ex.pop('_V13_SAVED_'+code)+'\n`endif`\n'
    last+='\nLes résultats sont conservés dans la session en cours. Une actualisation ou une fermeture peut les réinitialiser.\n`if @lastRetour == "SCR_ENT_PLAN_MENU"`\n'+link('↩️ Revenir à mon parcours','SCR_ENT_PLAN_MENU')+'\n`endif`\n`if @lastRetour != "SCR_ENT_PLAN_MENU"`\n'+link('↩️ Revenir à mon parcours','SCR_PARCOURS_MENU')+'\n`endif`\n'+link('🏠 Menu principal','MENU_PRINCIPAL');ex['SCR_LAST_EXAM_RESULT']=last
    write('05_preparer_examen.md',ex);write('03_revisions.md',rev)
    (ROOT/'reports/notions_examens_v13.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
    css='''
  /* Corrigé v13 : liens intégrés et cartes sur mobile */
  #chat .v13-errors { table-layout:fixed; font-size:15px; margin:14px 0; }
  #chat .v13-errors th:nth-child(1){width:25%}
  #chat .v13-errors th:nth-child(2){width:25%}
  #chat .v13-errors th:nth-child(3){width:27%}
  #chat .v13-errors th:nth-child(4){width:23%}
  #chat .v13-errors td{padding:12px;overflow-wrap:anywhere;line-height:1.5}
  #chat .v13-errors a{display:inline;color:#8b2444!important;text-decoration:underline;font-weight:600}
  #chat .v13-summary{margin:14px 0}
  @media(max-width:700px){
    #chat .v13-errors,#chat .v13-errors tbody,#chat .v13-errors tr,#chat .v13-errors td{display:block;width:100%;}
    #chat .v13-errors thead{display:none}
    #chat .v13-errors tr{background:white;margin:14px 0;border:1px solid #d8a9b4;border-radius:12px;padding:8px;}
    #chat .v13-errors td{border:0;padding:8px}
    #chat .v13-errors td:before{content:attr(data-label) " : ";font-weight:700;display:block;}
  }
'''
    p=ROOT/'chat_bot.md';s=p.read_text()
    if '/* Corrigé v13' not in s:s=s.replace('\n---\n','\n'+css+'---\n',1)
    p.write_text(s)
    # Keep v13 CSS when the standard compiler replaces its presentation block.
    p=ROOT/'scripts/ameliorer_presentation.py';s=p.read_text()
    if '/* Corrigé v13' not in s:s=s.replace("\n'''\n if '/* Présentation NovaFrate'",'\n'+css+"'''\n if '/* Présentation NovaFrate'",1)
    p.write_text(s)
    print('v13 : 30 feedbacks, deux priorités, 1200 erreurs reliées à leur notion, tableaux et détails mobiles.')
if __name__=='__main__':main()
