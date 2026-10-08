"""Demandes du document Chat bot v5, appliquées à la version v10."""
from pathlib import Path
import re,json,sys
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'scripts'));sys.path.insert(0,str(ROOT))
from ameliorations_v6 import blocks,join,THEMES,FOCUS,link
import synchroniser_banques_examens as bank
ICONS=['🇫🇷','🏛️','⚖️','🗺️','🤝']
E={'CSP':'Carte de séjour pluriannuelle','CR':'Carte de résident','NAT':'Naturalisation'}
ROUTE='!Typewriter: false\n<span class="civicoach-route" aria-hidden="true"></span>\n'
def read(name):return blocks((ROOT/'modules'/name).read_text())
def save(name,b):(ROOT/'modules'/name).write_text(join(b))
def opts(body):return re.sub(r'(?m)^\d+[.)] \[.*\]\([^\n]*\)\n?','',body)
def ordered_cards(values,contents):
    # Tri stable par comparaison des valeurs, sans arrondir avant le tri.
    out=''
    for rank in range(5):
        for t in range(1,6):
            terms=[f'({values[u]} < {values[t]} || ({values[u]} == {values[t]} && {u} < {t}) ? 1 : 0)' for u in range(1,6) if u!=t]
            out+=f'`if '+ ' + '.join(terms)+f' == {rank}`\n'+contents[t]+'\n`endif`\n'
    return out
def feedback(t,var):
    focus=FOCUS[t-1]
    return f'''`if {var} < 40`
**Votre priorité : comprendre les repères essentiels.** Travaillez {focus}, une notion à la fois. Pour chaque erreur, expliquez la bonne réponse avec vos propres mots et donnez un exemple concret. Faites ensuite un entraînement de dix questions : visez d’abord 6/10, puis 8/10 deux fois. Ce résultat vous donne un point de départ précis pour progresser.
`endif`
`if {var} >= 40 && {var} < 80`
**Vos acquis se construisent : consolidez les points encore hésitants.** Repérez dans le corrigé la règle qui vous a manqué concernant {focus}. Reformulez-la, puis vérifiez-la dans une nouvelle question. Visez 8/10 sur deux entraînements distincts ; espacez les essais pour vérifier que vous retenez la notion.
`endif`
`if {var} >= 80 && {var} < 100`
**Vous disposez de bons repères : confirmez-les.** Revenez uniquement sur les réponses manquées concernant {focus}. Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. En mises en situation, identifiez le principe civique recherché avant de comparer toutes les réponses.
`endif`
`if {var} == 100`
**Félicitations, toutes les réponses de cette thématique sont correctes !** Confirmez ces acquis avec deux entraînements difficiles, puis appliquez {focus} dans trois entraînements de mises en situation. Visez au moins 8/10 deux fois avant de vous tester en conditions chronométrées.
`endif`
'''
def plan(t,training=False):
    prefix='train' if training else 'parcours';available='trainDisponible' if training else 'parcoursDisponible';menu='SCR_ENT_PLAN_MENU' if training else 'SCR_PARCOURS_MENU'
    v=f'### 🧭 Votre plan — {THEMES[t-1]}\n\n`if !@{available}`\nTerminez '+('un entraînement' if training else 'un bilan')+' pour obtenir un plan adapté.\n'+link('🎯 M’entraîner' if training else '🧭 Faire mon bilan','SCR_ENT_MENU' if training else 'SCR_BIL_MENU')+'\n`endif`\n'
    pct=f'@trainPct{t}' if training else f'@planPct{t}'
    v+=f'`if @{available}`\n'
    if not training:v+=f'`{pct} = calc(@parcoursT{t}*20)`\n**Dernier bilan : `@parcoursT{t}`/5 — `{pct}` %.**\n'
    else:v+=f'`if @trainTotal{t} > 0`\n**Dernier entraînement : `@trainT{t}`/`@trainTotal{t}` — `{pct}` %.**\n'
    v+=feedback(t,pct)
    v+=f'''`if {pct} < 40`
#### Étape 1 — Comprendre et reformuler
Reprenez les notions de {FOCUS[t-1]}. Utilisez le corrigé pour retrouver la règle et un exemple ; évitez de mémoriser seulement la lettre de la réponse.
#### Étape 2 — Progresser avec les questions
Entraînez-vous sur dix questions. Visez 6/10, puis 8/10 deux fois en corrigeant vos erreurs entre les essais.
#### Étape 3 — Appliquer les principes
Réalisez au moins trois entraînements de mises en situation ; cherchez la règle civique visée et obtenez au moins 8/10 deux fois.
#### Étape 4 — Vérifier et ajuster
Lorsque ces objectifs sont atteints, passez un examen blanc. Analysez les erreurs conservées dans votre dernier résultat, puis refaites une série.
`endif`
`if {pct} >= 40 && {pct} < 80`
#### Étape 1 — Corriger les notions fragiles
Relisez vos erreurs sur {FOCUS[t-1]}. Pour chacune, expliquez pourquoi la réponse correcte convient et pourquoi votre choix ne convient pas.
#### Étape 2 — Stabiliser vos connaissances
Réalisez deux entraînements de cette thématique et visez au moins 8/10 sur chacun.
#### Étape 3 — Exercer votre raisonnement
Réalisez au moins trois entraînements de mises en situation, avec au moins 8/10 à deux reprises. Lisez toutes les propositions avant de choisir.
#### Étape 4 — Mesurer les progrès
Passez un examen blanc, analysez les erreurs, travaillez les deux priorités les plus faibles puis recommencez en conditions réelles.
`endif`
`if {pct} >= 80 && {pct} < 100`
#### Étape 1 — Confirmer les acquis
Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. Commencez par la notion qui a provoqué votre dernière erreur.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement avec au moins trois entraînements ; obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter le cours.
#### Étape 4 — Corriger et ajuster
Analysez votre dernier examen blanc et expliquez chaque erreur. Travaillez les notions concernées puis repassez un examen blanc.
`endif`
`if {pct} == 100`
#### Étape 1 — Confirmer votre score
Réalisez deux entraînements de cette thématique en mode difficile et obtenez au moins 8/10 à chaque fois.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement en réalisant au moins trois entraînements de mises en situation. Obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter les ressources.
#### Étape 4 — Corriger et ajuster
Analysez vos réponses et comprenez vos erreurs à l’aide du corrigé de votre dernier examen blanc. Travaillez les notions concernées, puis repassez un examen blanc pour améliorer ou confirmer votre score.
`endif`
'''
    if training:v+='`endif`\n'+f'`if @trainTotal{t} == 0`\nCette thématique ne figurait pas dans votre dernier entraînement. Réalisez un entraînement pour obtenir un plan fondé sur vos réponses.\n`endif`\n'
    for e in E:
        v+=f'`if @{prefix}Exam == "{e}"`\n'
        v+=f'`if {pct} == 100`\n'+link('📘 Questions de cette thématique',f'SCR_ENT_{e}_T{t}_Q_DIF_LAUNCH')+'\n`endif`\n'
        v+=f'`if {pct} != 100`\n'+link('📘 Questions de cette thématique',f'SCR_ENT_{e}_T{t}_Q_LAUNCH')+'\n`endif`\n'
        v+=link('🎭 Mises en situation de cette thématique',f'SCR_ENT_{e}_T{t}_MIS_LAUNCH')+'\n`endif`\n'
    v+=link('🎯 Passer un examen blanc','SCR_PREP_MENU')+'\n'+link('📊 Voir les résultats de mon dernier examen blanc','SCR_LAST_EXAM_RESULT')+'\n`endif`\n'+link('↩️ Revenir à mon parcours',menu)+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
    return v
def main():
    # 1) signifie tirage des boutons dans ChatMD ; 1. conserve A, B, C, D.
    for p in (ROOT/'modules').glob('*.md'):
        s=p.read_text();s=re.sub(r'(?m)^(\d+)\)( \[<span class="qcm-letter">)',r'\1.\2',s);p.write_text(s)
    b=read('02_bilan.md')
    for sid,v in list(b.items()):
        if not sid.endswith('_RECO'):continue
        result=sid[:-5]+'_RESULT';v=opts(v)
        b[sid]=v+'\n'+link('🧭 Mon parcours personnalisé','SCR_PARCOURS_MENU')+'\n'+link('📊 Revoir mes résultats',result)+'\n'+link('↩️ Retour au choix des bilans','SCR_BIL_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
    save('02_bilan.md',b)
    par=read('11_parcours.md')
    for t in range(1,6):par[f'SCR_PARCOURS_T{t}']=plan(t)
    # Une connaissance faible se travaille avant une connaissance bien maîtrisée.
    vals={t:f'@parcoursT{t}' for t in range(1,6)}
    menu='### 🧭 Mon parcours personnalisé\n\n`if !@parcoursDisponible`\nTerminez un bilan pour obtenir votre parcours.\n'+link('🧭 Faire mon bilan','SCR_BIL_MENU')+'\n`endif`\n`if @parcoursDisponible`\n**Votre dernier bilan : `@parcoursScore`/25.** Les thématiques sont classées de la plus faible à la plus forte.\n'
    menu+=ordered_cards(vals,{t:link(ICONS[t-1]+' '+THEMES[t-1]+f' — `@parcoursT{t}`/5',f'SCR_PARCOURS_T{t}') for t in vals})+'`endif`\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
    par['SCR_PARCOURS_MENU']=menu
    # Entraînements : photo du dernier résultat, distincte du bilan.
    ent=read('06_entrainement.md');manifest=json.loads((ROOT/'reports/entrainements_sources.json').read_text())
    for sid,v in list(ent.items()):
        v=re.sub(r'(?m)^\d+\. \[❓ Poser une question[^\n]*\]\(SCR_QL_RESET\)\n?','',v)
        if sid.endswith('_START') and '!SelectNext:' in v:
            v=ROUTE+'`@entRun = calc((@entRun || 0)+1)`\n'+v
            v=opts(v)
        ent[sid]=v
    for item in manifest:
        e=item['exam'];route=item['route'];base=f'ENT_{e}_{route}_V{item["variant"]:02d}';sid=base+'_RESULT';rows=item['questions'];n=len(rows)
        totals={t:sum(q['theme']==t for q in rows) for t in range(1,6)}
        snap='`if @trainRun != @entRun`\n`@trainDisponible = true`\n'+f'`@trainExam = {e}`\n`@trainScore = calc(@score)`\n`@trainRun = calc(@entRun)`\n'
        for t in totals:snap+=f'`@trainT{t} = calc(@ent_t{t})`\n`@trainTotal{t} = {totals[t]}`\n`@trainPct{t} = calc('+ (f'@ent_t{t}/{totals[t]}*100' if totals[t] else '0')+')`\n'
        snap+='`endif`\n'
        v=opts(ent[sid]);v=re.sub(r'\n{3,}','\n\n',v)
        ent[sid]=snap+v+'\n**Votre prochaine action :** ouvrez votre parcours pour travailler les thématiques prioritaires, avec un objectif précis pour chaque étape.\n'+link('🧭 Mon parcours personnalisé','SCR_ENT_PLAN_MENU')+'\n'+link('🔄 Faire un nouvel entraînement','SCR_ENT_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
        # Une indication après chaque erreur aide à transformer le corrigé en action.
        for i,q in enumerate(rows,1):
            target=f'{base}_Q{i:02d}_FAUX';body=ent[target];note='\n💡 **Pour progresser :** '
            note+=('Cherchez le principe civique visé, puis expliquez pourquoi la bonne réponse respecte ce principe. Comparez-la aux trois autres propositions.' if q['situation'] else f'Reformulez la notion concernant {FOCUS[q["theme"]-1]} avec vos propres mots. Donnez un exemple concret, puis vérifiez-la lors du prochain entraînement.')
            body=body.replace('\n1. [➡️',note+'\n\n1. [➡️',1);ent[target]=body
    # Deux questions supplémentaires, accessibles depuis les connaissances de géographie.
    for e in E:
        for suffix in ['T4_Q_LAUNCH','T4_Q_DIF_LAUNCH']:
            sid=f'SCR_ENT_{e}_{suffix}';ent[sid]+='\n'+link('🗺️ Deux questions sur carte : fleuves et montagnes','SCR_GEO_CONNAISSANCES')
        ent[f'SCR_ENT_{e}_Q_MENU']+='\n'+link('🗺️ Questions de géographie sur carte','SCR_GEO_CONNAISSANCES')
    save('06_entrainement.md',ent)
    tm='### 🧭 Mon parcours après entraînement\n\n`if !@trainDisponible`\nTerminez un entraînement pour obtenir votre plan.\n'+link('🎯 M’entraîner','SCR_ENT_MENU')+'\n`endif`\n`if @trainDisponible`\nVotre parcours reprend votre dernier entraînement terminé dans cette session. Les thématiques évaluées sont classées par pourcentage croissant. Une ou deux réponses ne suffisent pas à garantir la maîtrise : confirmez vos acquis avec d’autres séries.\n'
    # Thématiques absentes après celles qui ont été évaluées.
    for t in range(1,6):tm+=f'`@trainOrder{t} = calc(@trainTotal{t} > 0 ? @trainPct{t} : 101)`\n'
    tm+=ordered_cards({t:f'@trainOrder{t}' for t in range(1,6)},{t:f'`if @trainTotal{t} > 0`\n'+link(ICONS[t-1]+' '+THEMES[t-1]+f' — `@trainPct{t}` %',f'SCR_ENT_PLAN_T{t}')+'\n`endif`\n'+f'`if @trainTotal{t} == 0`\n'+link(ICONS[t-1]+' '+THEMES[t-1]+' — à évaluer',f'SCR_ENT_PLAN_T{t}')+'\n`endif`' for t in range(1,6)})
    par['SCR_ENT_PLAN_MENU']=tm+'`endif`\n'+link('↩️ Retour aux entraînements','SCR_ENT_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
    for t in range(1,6):par[f'SCR_ENT_PLAN_T{t}']=plan(t,True)
    # Examens blancs : résultats et erreurs conservés indépendamment des exercices.
    ex=read('05_preparer_examen.md');lastresults={};lastcorr={}
    for sid,v in list(ex.items()):ex[sid]=v.replace('Retour au menu du module','Retour au choix de l’examen')
    for e in E:
        cfg=bank.EXAM_CONFIGS[e];q=bank.read_rows(ROOT/'sources'/cfg['questions_file'],cfg['questions_sheet']);ms=bank.read_rows(ROOT/'sources'/cfg['situations_file'],cfg['situations_sheet']);by={r['ID']:r for r in q};by.update({r['ID']:{**by[r['ID question source']],**r} for r in ms})
        for variant in range(1,11):
            code=f'{e}_V{variant:02d}';base='EXAM_'+code;rid=base+'_RESULT';cid=base+'_CORRIGE';part=base+'_PART1'
            ex[part]='`@examRun = calc((@examRun || 0)+1)`\n'+f'`@examActive = {code}`\n'+ex[part]
            totals={t:0 for t in range(1,6)};sources=[]
            for i in range(1,41):
                body=ex[f'{base}_Q{i:02d}'];source=re.search(r'<!-- Source '+e.lower()+r' : (.*?) -->',body)[1];r=by[source];sources.append(r);totals[int(r['N° thématique'])]+=1
            v=ex[rid];v=v[:v.index('#### Détail par thématique')]
            # Snapshot is written only on completion of the matching active run.
            snap=f'`if @examRun > 0 && @lastSavedRun != @examRun && @examActive == "{code}"`\n`@lastExamDisponible = true`\n`@lastSavedRun = calc(@examRun)`\n`@lastExamCode = {code}`\n`@lastExamScore = calc(@exam_score)`\n`@lastKnowledge = calc(@exam_connaissances)`\n`@lastSituations = calc(@exam_situations)`\n'
            snap+=''.join(f'`@lastT{t} = calc(@exam_t{t})`\n`@lastTotal{t} = {totals[t]}`\n' for t in totals)
            snap+=''.join(f'`@lastErr{i} = calc(@err_{code}_Q{i:02d})`\n' for i in range(1,41))+'`endif`\n'
            # Compact global feedback followed by action-oriented thematic priorities.
            advice='''`if @exam_score == 40`
### ✅ Félicitations pour ce score parfait
Vous avez répondu correctement à toutes les questions. Confirmez ce résultat sur une autre série quelques jours plus tard, sans consulter les ressources.
`endif`
`if @exam_score >= 32 && @exam_score < 40`
### ✅ Objectif atteint : confirmez vos acquis
Vous avez atteint 32/40 ou davantage. Analysez les réponses manquées, expliquez les règles concernées, puis passez une nouvelle série pour vérifier que ces acquis restent solides.
`endif`
`if @exam_score >= 28 && @exam_score < 32`
### 🌱 Vous approchez de l’objectif
Quelques bonnes réponses supplémentaires vous permettront d’atteindre 32/40. Travaillez d’abord les deux thématiques les moins maîtrisées ci-dessous. Corrigez chaque erreur, puis visez 8/10 sur deux entraînements avant de repasser un examen blanc.
`endif`
`if @exam_score < 28`
### 🌱 Un point de départ pour progresser
Chaque erreur vous indique une notion à travailler. Commencez par une seule thématique prioritaire : comprenez les corrections, reformulez les règles, puis entraînez-vous jusqu’à 6/10 et ensuite 8/10 deux fois. Revenez à l’examen blanc lorsque ces repères sont plus stables.
`endif`
### 📊 Vos thématiques et vos prochaines actions
Les pourcentages sont classés du plus faible au plus élevé. Les nombres de questions diffèrent selon les thématiques ; les pourcentages permettent de comparer vos résultats.
'''
            vals={t:f'(@exam_t{t}/{totals[t]})' for t in totals};cards={}
            for t in totals:
                pct=f'@examPct{t}';advice+=f'`{pct} = calc(Math.round(@exam_t{t}/{totals[t]}*1000)/10)`\n'
                cards[t]=f'#### {ICONS[t-1]} {THEMES[t-1]}\n**`@exam_t{t}`/{totals[t]} — `{pct}` %.**\n<progress class="v9-progress" max="{totals[t]}" value="`@exam_t{t}`" aria-label="Réussite de la thématique"></progress>\n'+feedback(t,pct)
            advice+=ordered_cards(vals,cards)
            buttons=link('📘 Voir uniquement le corrigé de mes erreurs',cid)+'\n'+link('🔄 Passer un nouvel examen','SCR_EXAM_START')+'\n'+link('🎯 M’entraîner','SCR_ENT_MENU')+'\n'+link('🏠 Retour au menu principal','MENU_PRINCIPAL')
            ex[rid]=snap+v+advice+buttons
            # Copy the result text using immutable last-exam variables.
            last=v+advice+link('📘 Voir uniquement le corrigé de mes erreurs',f'SCR_LAST_CORR_{code}')+'\n'+link('🧭 Revenir à mon parcours','SCR_PARCOURS_MENU')+'\n'+link('🎯 M’entraîner','SCR_ENT_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
            last=last.replace('@exam_score','@lastExamScore').replace('@exam_connaissances','@lastKnowledge').replace('@exam_situations','@lastSituations')
            for t in totals:last=last.replace(f'@exam_t{t}',f'@lastT{t}')
            lastresults[code]=last
            corr=ex[cid]
            # Associate every individual mistake with its source chapter.
            for i,r in enumerate(sources,1):
                pat=rf'(`if @err_{code}_Q{i:02d} == 1`\n)(.*?)(\n`endif`)'
                key=bank.chapter_key(r,cfg['chapter_col']);title,target=bank.CHAPTERS[key]
                corr=re.sub(pat,lambda m:m[1]+m[2]+'\n\n📍 **À revoir :** '+title+'. Relisez cette notion, reformulez la règle et trouvez un exemple avant de refaire un entraînement.\n'+link('📖 Revoir la notion : '+title,target)+m[3],corr,flags=re.S,count=1)
            # Existing end buttons are replaced, conditional notion links retained.
            tail=corr.rfind('`endif`')+len('`endif`');corr=corr[:tail]+'\n\n'+link('📊 Revoir mes résultats',rid)+'\n'+link('🔄 Passer un nouvel examen','SCR_EXAM_START')+'\n'+link('🎯 M’entraîner','SCR_ENT_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
            ex[cid]=corr
            oldcorr=corr
            for i in range(1,41):oldcorr=oldcorr.replace(f'@err_{code}_Q{i:02d}',f'@lastErr{i}')
            oldcorr=oldcorr.replace('@exam_connaissances','@lastKnowledge').replace('@exam_situations','@lastSituations').replace(f']({rid})','](SCR_LAST_EXAM_RESULT)')
            lastcorr[code]=oldcorr
    ex['SCR_LAST_EXAM_RESULT']='### 📊 Mon dernier examen blanc\n\n`if !@lastExamDisponible`\nVous n’avez pas encore terminé d’examen blanc dans cette session.\n'+link('🎯 Passer un examen blanc','SCR_PREP_MENU')+'\n`endif`\n'
    ex['SCR_LAST_EXAM_RESULT']+=''.join(f'`if @lastExamDisponible && @lastExamCode == "{code}"`\n'+v+'\n`endif`\n' for code,v in lastresults.items())
    ex['SCR_LAST_EXAM_RESULT']+='\nLes résultats sont conservés pendant la session en cours. Une fermeture ou une actualisation de la page peut les réinitialiser.\n'+link('↩️ Revenir à mon parcours','SCR_PARCOURS_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
    for code,v in lastcorr.items():ex[f'SCR_LAST_CORR_{code}']=v
    save('05_preparer_examen.md',ex)
    rev=read('03_revisions.md');rev['SCR_GEO_CONNAISSANCES']='''### 🗺️ Deux questions de connaissances sur carte
Repérez un fleuve, puis un massif montagneux. Cliquez sur la zone qui correspond à la consigne ; au clavier, utilisez Tab puis Entrée. Chaque première réponse compte pour le score de cette activité, sur 2. La correction vous aide à situer le repère et à comprendre votre erreur.

<iframe src="https://codeurfou-sys.github.io/chatbot_civique2/activites-geographie/questions.html" title="Deux questions de géographie : fleuve et montagne" width="100%" height="830" loading="eager" style="border:0;border-radius:14px"></iframe>

Ces deux questions pédagogiques complètent les banques de questions de l’examen. Leur score sur 2 est affiché dans la carte.

[Ouvrir les deux questions sur carte](https://codeurfou-sys.github.io/chatbot_civique2/activites-geographie/questions.html)

1. [↩️ Retour aux questions de connaissances](SCR_ENT_THEME_EXAM)
1. [📖 Revenir au cours de géographie](SCR_REV_T4_CH02_COURS)
1. [🏠 Menu principal](MENU_PRINCIPAL)
'''
    save('03_revisions.md',rev)
    faq=read('09_faq.md')
    for sid,v in faq.items():faq[sid]=re.sub(r'(?m)^(\d+\. )\[[^\n]*?Carte de résident et Naturalisation \?\]\(([^)]+)\)',r'\1[➡️ Carte de résident et Naturalisation ?](\2)',v)
    save('09_faq.md',faq);save('11_parcours.md',par)
    print('v11 : parcours, résultats mémorisés, 630 séries et navigation intégrés.')
if __name__=='__main__':main()
