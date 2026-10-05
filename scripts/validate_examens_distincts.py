"""Vérifie toutes les séries : aucun rappel direct de la partie 1."""
from pathlib import Path
from collections import Counter
import sys,re,json
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT))
import synchroniser_banques_examens as m
from synchroniser_entrainements import split
b=split((ROOT/'modules/05_preparer_examen.md').read_text())
report=json.loads((ROOT/'reports/examens_distincts_v12.json').read_text());assert len(report)==30
for exam,cfg in m.EXAM_CONFIGS.items():
    q=m.read_rows(ROOT/'sources'/cfg['questions_file'],cfg['questions_sheet']);by={r['ID']:r for r in q}
    ms={r['ID']:{**by[r['ID question source']],**r} for r in m.read_rows(ROOT/'sources'/cfg['situations_file'],cfg['situations_sheet'])}
    old=split((ROOT.parent/'work_v11/modules/05_preparer_examen.md').read_text()) if (ROOT.parent/'work_v11').exists() else None
    for v in range(1,11):
        base=f'EXAM_{exam}_V{v:02d}';ids=[]
        for i in range(1,41):
            body=b[f'{base}_Q{i:02d}'];ids.append(re.search(r'<!-- Source '+exam.lower()+r' : (.*?) -->',body)[1])
            assert not re.search(r'(?m)^\d+\)',body)
            if i<=28 and old:assert body==old[f'{base}_Q{i:02d}'],'Connaissance modifiée'
        knowledge=[by[i] for i in ids[:28]];situations=[ms[i] for i in ids[28:]]
        assert len(set(ids))==40
        assert not set(ids[:28]) & {r['ID question source'] for r in situations}
        assert len({r['ID question source'] for r in situations})==12
        correct={m.canonical(r['Réponse '+m.clean(r['Bonne réponse']).upper()]) for r in knowledge}
        ms_answers=[m.canonical(r['Réponse '+m.clean(r['Bonne réponse']).upper()]) for r in situations]
        assert not correct & set(ms_answers);assert len(set(ms_answers))==12
        source_answers={m.canonical(by[r['ID question source']]['Réponse '+m.clean(by[r['ID question source']]['Bonne réponse']).upper()]) for r in situations}
        assert not correct & source_answers,'Réponse factuelle de la question source déjà présente dans les connaissances'
        assert Counter(int(r['N° thématique']) for r in situations)==m.SITUATIONS_PER_VARIANT
        for n,row in enumerate(situations,29):
            assert not any(m.close_question(row['Question'],k['Question']) or m.close_question(row['Question posée'],k['Question']) for k in knowledge)
            sid=f'{base}_Q{n:02d}'
            assert f'@exam_t{row["N° thématique"]} = calc' in b[sid+'_VRAI']
            assert '@errchap_'+m.chapter_key(row,cfg['chapter_col']) in b[sid+'_FAUX']
            assert m.clean(row['Mise en situation']) in b[sid]
            assert m.clean(row['Réponse '+m.clean(row['Bonne réponse']).upper()]) in b[base+'_CORRIGE']
    print(f'OK {exam}: dix séries, aucune source ou formulation proche reprise, aucune bonne réponse identique aux connaissances, douze situations distinctes.')
print('OK — 30 examens blancs, connaissances préservées, 360 mises en situation, répartition, bonnes réponses, compteurs et corrigés cohérents.')
