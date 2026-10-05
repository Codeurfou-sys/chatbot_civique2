"""Sépare les 28 connaissances et 12 cas sans remplacer l'UX v11."""
from pathlib import Path
from collections import Counter
import re,sys,json
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT));sys.path.insert(0,str(ROOT/'scripts'))
import synchroniser_banques_examens as m
from ameliorations_v6 import blocks,join,link

def main():
    path=ROOT/'modules/05_preparer_examen.md';b=blocks(path.read_text());report=[]
    for exam,cfg in m.EXAM_CONFIGS.items():
        q=m.read_rows(ROOT/'sources'/cfg['questions_file'],cfg['questions_sheet']);by={r['ID']:r for r in q}
        ms=[{**by[r['ID question source']],**r,'_source_correct_answer':by[r['ID question source']]['Réponse '+m.clean(by[r['ID question source']]['Bonne réponse']).upper()]} for r in m.read_rows(ROOT/'sources'/cfg['situations_file'],cfg['situations_sheet'])]
        knowledge=[]
        for v in range(1,11):
            knowledge.append([by[re.search(r'<!-- Source '+exam.lower()+r' : (.*?) -->',b[f'EXAM_{exam}_V{v:02d}_Q{i:02d}'])[1]] for i in range(1,29)])
        selected=m.select_distinct_situations(ms,knowledge,exam)
        for v,rows in enumerate(selected,1):
            code=f'{exam}_V{v:02d}';base='EXAM_'+code;corrid=base+'_CORRIGE';corr=b[corrid]
            assert Counter(int(r['N° thématique']) for r in rows)==m.SITUATIONS_PER_VARIANT
            old=[]
            for i,row in enumerate(rows,29):
                sid=f'{base}_Q{i:02d}';old.append(re.search(r'<!-- Source '+exam.lower()+r' : (.*?) -->',b[sid])[1])
                body=m.question_body(exam,sid,i,row,True)
                body=re.sub(r'(?m)^`@err_[^\n]+ = 0`','',body)
                index=0
                def option(match):
                    nonlocal index
                    letter='ABCD'[index];index+=1
                    return f'{index}. [<span class="qcm-letter">{letter}</span> '+match[1]+']('+match[2]+')'
                body=re.sub(r'(?m)^\d+\) \[(.+)\]\(([^)]+)\)$',option,body)
                body+='\n\n'+link('↩️ Retour au choix de l’examen','SCR_PREP_MENU')+'\n'+link('🏠 Menu principal','MENU_PRINCIPAL')
                b[sid]=body
                theme=int(row['N° thématique']);key=m.chapter_key(row,cfg['chapter_col'])
                b[sid+'_VRAI']=re.sub(r'@exam_t\d',f'@exam_t{theme}',b[sid+'_VRAI'])
                b[sid+'_FAUX']=re.sub(r'@errchap_T\d_CH\d{2}',f'@errchap_{key}',b[sid+'_FAUX'])
                title,target=m.CHAPTERS[key]
                replacement=m.correction(i,row,True)+'\n\n📍 **À revoir :** '+title+'. Identifiez la règle appliquée dans ce cas, expliquez pourquoi la réponse convient et donnez un autre exemple.\n'+link('📖 Revoir la notion : '+title,target)
                pat=rf'(`if @err_{code}_Q{i:02d} == 1`\n).*?(\n`endif`)'
                corr,n=re.subn(pat,lambda match:match[1]+replacement+match[2],corr,flags=re.S,count=1)
                assert n==1,(code,i)
            b[corrid]=corr
            last=corr
            for i in range(1,41):last=last.replace(f'@err_{code}_Q{i:02d}',f'@lastErr{i}')
            last=last.replace('@exam_connaissances','@lastKnowledge').replace('@exam_situations','@lastSituations').replace(f']({base}_RESULT)','](SCR_LAST_EXAM_RESULT)')
            b[f'SCR_LAST_CORR_{code}']=last
            report.append(dict(exam=exam,variant=v,knowledge=[r['ID'] for r in knowledge[v-1]],situations=[dict(id=r['ID'],source=r['ID question source'],theme=int(r['N° thématique'])) for r in rows],previous_situations=old))
    path.write_text(join(b));(ROOT/'reports/examens_distincts_v12.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
    print('30 séries corrigées : 28 connaissances conservées, 12 situations distinctes par série.')
if __name__=='__main__':main()
