"""Contrôle les sources Excel des examens et entraînements générés CSP/NAT."""
from pathlib import Path
import sys,re
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
import synchroniser_banques_examens as m
from synchroniser_entrainements import split
from collections import Counter

exam_blocks=split(Path('modules/05_preparer_examen.md').read_text())
training_blocks=split(Path('modules/06_entrainement.md').read_text())
chatbot=Path('chat_bot.md').read_text()
for path in ('modules/05_preparer_examen.md','modules/06_entrainement.md'):
    assert Path(path).read_text().strip() in chatbot, f'Module non synchronisé: {path}'
for exam in ('CSP','NAT'):
    c=m.EXAM_CONFIGS[exam]
    q=m.read_rows(Path('sources')/c['questions_file'],c['questions_sheet'])
    ms=m.read_rows(Path('sources')/c['situations_file'],c['situations_sheet'])
    banks={r['ID']:r for r in q+ms}
    seen={}
    for blocks,pattern in ((exam_blocks,rf'EXAM_{exam}_V\d{{2}}_Q\d{{2}}'),(training_blocks,rf'ENT_{exam}_.+_V\d{{2}}_Q\d{{2}}')):
        groups={}
        for ident,body in blocks.items():
            if not re.fullmatch(pattern,ident): continue
            source=re.search(r'<!-- Source '+exam.lower()+r' : (.+?) -->',body)
            assert source, f'Source absente: {ident}'
            row=banks[source.group(1)]
            situation='Question posée' in row
            assert '**'+m.clean(row['Question posée'] if situation else row['Question'])+'**' in body,ident
            if situation: assert m.clean(row['Mise en situation']) in body,ident
            for letter in 'ABCD':
                suffix='VRAI' if letter==m.clean(row['Bonne réponse']).upper() else 'FAUX'
                assert f"[{m.link_text(row['Réponse '+letter])}]({ident}_{suffix})" in body,ident
            groups.setdefault(ident.rsplit('_Q',1)[0],[]).append(source.group(1))
        for group,ids in groups.items():
            assert len(ids)==(40 if group.startswith('EXAM') else 15 if '_LVL_' in group else 10),(group,len(ids))
            assert len(ids)==len(set(ids)),f'Doublons: {group}'
        seen['examens' if pattern.startswith('EXAM') else 'entraînements']=len(groups)
    print(f'OK {exam}: {len(q)} questions, {len(ms)} situations; {seen}')
print('OK — libellés, choix, bonnes réponses, sources, absence de doublons et compilation.')
