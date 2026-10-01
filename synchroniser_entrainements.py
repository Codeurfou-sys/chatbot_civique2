"""Régénère les entraînements CSP/NAT depuis les Excel, sans changer CR."""
from pathlib import Path
import re
import random
import synchroniser_banques_examens as m


def split(text):
    matches=list(re.finditer(r'(?m)^## ([A-Za-z0-9_]+)\s*$',text))
    return {x.group(1): text[x.end():matches[i+1].start() if i+1<len(matches) else len(text)].strip() for i,x in enumerate(matches)}


def generate():
    path=Path('modules/06_entrainement.md')
    blocks=split(path.read_text())
    # Reprendre la navigation CR pour les parcours Naturalisation manquants.
    for ident,body in list(blocks.items()):
        if ident.startswith(('ENT_CR_', 'SCR_ENT_CR_')):
            target=ident.replace('_CR_', '_NAT_')
            if target not in blocks:
                blocks[target]=body.replace('_CR_', '_NAT_').replace('Carte de résident','Naturalisation').replace('🏡','🇫🇷')
    blocks['SCR_ENT_THEME_NAT']=blocks['SCR_ENT_THEME_CR'].replace('_CR','_NAT').replace('Carte de résident','Naturalisation').replace('🏡','🇫🇷')
    for theme in range(1,6):
        blocks[f'SCR_ENT_NAT_T{theme}_TYPE']=blocks[f'SCR_ENT_CR_T{theme}_TYPE'].replace('_CR','_NAT')
    reports=[]
    for exam in ('CSP','NAT'):
        c=m.EXAM_CONFIGS[exam]
        questions=m.read_rows(Path('sources')/c['questions_file'],c['questions_sheet'])
        situations=m.read_rows(Path('sources')/c['situations_file'],c['situations_sheet'])
        by_id={m.clean(r['ID']):r for r in questions}
        situations=[{**by_id[m.clean(r['ID question source'])],**r} for r in situations]
        routes=sorted({re.match(r'(ENT_'+exam+r'_.+)_V\d{2}_Q\d{2}$',id).group(1) for id in blocks if re.match(r'ENT_'+exam+r'_.+_V\d{2}_Q\d{2}$',id)})
        for route in routes:
            thematic=re.search(r'_T(\d)_(Q|MIS)$',route)
            level=re.search(r'_LVL_(FAC|INT|DIF|TOUS)$',route)
            situation=bool(thematic and thematic.group(2)=='MIS')
            pool=situations if situation else questions
            if thematic: pool=[r for r in pool if int(r['N° thématique'])==int(thematic.group(1))]
            if level and level.group(1)!='TOUS':
                label={'FAC':'facile','INT':'intermédiaire','DIF':'difficile'}[level.group(1)]
                pool=[r for r in pool if label in m.clean(r['Difficulté']).lower()]
            if len(pool)<10: raise ValueError(f'{route}: banque insuffisante ({len(pool)})')
            random.Random(route).shuffle(pool)
            for variant in range(1,11):
                rows=[pool[((variant-1)*10+i)%len(pool)] for i in range(10)]
                assert len({r['ID'] for r in rows})==10
                for number,row in enumerate(rows,1):
                    id=f'{route}_V{variant:02d}_Q{number:02d}'
                    origin='1. [❓ Poser une question @qlOrigine=SCR_ENT_MENU](SCR_QL_RESET)'
                    question=m.clean(row['Question posée'] if situation else row['Question'])
                    context=m.clean(row['Mise en situation'])+'\n\n' if situation else ''
                    correct=m.clean(row['Bonne réponse']).upper()
                    opts='\n'.join(f"1. [{m.link_text(row[f'Réponse {l}'])}]({id}_{'VRAI' if l==correct else 'FAUX'})" for l in 'ABCD')
                    blocks[id]=f"### Question {number} sur 10\n\n<!-- Source {exam.lower()} : {row['ID']} -->\n\n{context}**{question}**\n\n{opts}\n\n{origin}"
                    explanation=m.clean(row['Feedback pédagogique'] if situation else row['Explication pédagogique'])
                    tip='' if situation or not m.clean(row.get('Astuce mémoire')) else '\n\n💡 **Astuce mémoire :** '+m.clean(row['Astuce mémoire'])
                    for suffix in ('VRAI','FAUX'):
                        old=blocks[id+'_'+suffix]
                        # Conserver les boutons et variables de progression du parcours validé.
                        next_link=re.search(r'(?m)^1\. \[(?!❓).+?\]\(.+?\)$',old)
                        if not next_link: raise ValueError(f'Navigation absente: {id}_{suffix}')
                        score='`@score = calc(@score+1)`\n\n' if suffix=='VRAI' else ''
                        title='✅ Bonne réponse' if suffix=='VRAI' else '❌ Réponse incorrecte'
                        blocks[id+'_'+suffix]=f"{score}### {title}\n\n**Réponse correcte : {correct} — {m.clean(row['Réponse '+correct])}**\n\n{explanation}{tip}\n\n{next_link.group(0)}\n\n{origin}"
            reports.append((route,len(pool)))
    path.write_text('\n\n'.join('## '+id+'\n\n'+body for id,body in blocks.items())+'\n')
    print(f'OK — {len(reports)} parcours CSP/NAT, 10 séries de 10 questions chacun; CR conservé.')

if __name__=='__main__': generate()
