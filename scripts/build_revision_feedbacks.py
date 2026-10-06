from pathlib import Path
import json,re,itertools
b=Path(__file__).resolve().parents[1];p=b/'modules/03_revisions.md';text=p.read_text();original=json.loads((b/'data/revision_questions_originales.json').read_text());rules={}
def idof(k):
 t,c,q=map(int,k.split('.'));return f'SCR_REV_T{t}_CH{c:02d}_VERIF_Q{q:02d}'
rules=json.loads((b/'data/revision_reconnaissance_v18.json').read_text())
assert len(rules)==62
def norm(var):
 s='normalizeText(@'+var+').replaceAll("œ","oe")'
 for a in ["’","'","-",",",".",";",":","!","?","(",")"]:s+='.replaceAll('+json.dumps(a,ensure_ascii=False)+'," ")'
 return s

def conditions(q,r):
 n=norm(q['variable'])
 if 'numbers' in r:
  terms=[]
  for num in r['numbers']:
   terms+=[f'@{q["variable"]} == "{num}"',f'{n}.split(" ").includes("{num}")']
  if q['id']==idof('5.4.1'):terms+=[f'{n}.trim() == "3ans"',f'{n}.trim() == "troisans"']
  good='('+' || '.join(terms)+')'
  if q['id']==idof('5.4.1'):good+=' && !('+ ' || '.join(f'{n}.includes("{s}")' for s in ['6 ans','six ans','16 ans','seize ans','13 ans','treize ans','30 ans','trente ans'])+')'
  return good,None
 tests=['('+' || '.join(n+'.includes('+json.dumps(x,ensure_ascii=False)+')' for x in group)+')' for group in r['groups']]
 full='('+' || '.join('('+' && '.join(tests[i] for i in combo)+')' for combo in itertools.combinations(range(len(tests)),r['minimum']))+')'
 if r['forbid']:full+=' && !('+' || '.join(n+'.includes('+json.dumps(x,ensure_ascii=False)+')' for x in r['forbid'])+')'
 some='('+' || '.join(tests)+')'
 if r['forbid']:some+=' && !('+' || '.join(n+'.includes('+json.dumps(x,ensure_ascii=False)+')' for x in r['forbid'])+')'
 return full,some
# One ambiguous question is clarified; subjects and number of questions are preserved.
old="Le coq est-il un symbole officiel de la République ?";new="Le coq est-il l’emblème national défini par la Constitution ?";text=text.replace(old,new)
for q in original:
 if q['id']==idof('1.3.4'):
  q['question']=new;q['answer']='Non. L’emblème national défini par la Constitution est le drapeau bleu, blanc, rouge. Le coq est un emblème historique de la France, également présenté parmi les symboles républicains par l’Élysée.'
 r=rules[q['id']];good,some=conditions(q,r);model=q['answer'];body='!Keyboard: false\n### Votre réponse\n\n> `@'+q['variable']+'`\n\n'
 route=re.search(r'(?ms)^## '+q['id']+'_RESULT\s*\n(.*?)(?=^## |\Z)',text)[1]
 m=re.search(r'^\d+\. \[(?:[^\n]*Question suivante|[^\n]*Terminer[^\n]*)\]\(([^)]+)\)',route,re.M)
 dest=m[1] if m else q['id'].rsplit('_Q',1)[0]+'_END'
 chapter=q['id'].rsplit('_VERIF_Q',1)[0];theme=re.search(r'SCR_REV_T\d',chapter)[0]+'_MENU'
 def feedback(cond,kind,title,lead=''):
  return f'`if {cond}`\n\n:::{kind} {title}\n'+(lead+'\n\n' if lead else '')+'**Réponse attendue :**\n\n'+model+'\n:::\n\n`endif`\n\n'
 body+=feedback(good,'success','🌱 ✅ Bonne réponse')
 if some:body+=feedback('!('+good+') && '+some,'warning','🟠 Réponse partielle','Vous avez identifié une partie des notions attendues. Complétez votre réponse à l’aide du corrigé.')
 body+=feedback('!('+good+')'+(' && !'+some if some else ''),'danger','🔴 Réponse à revoir','Cette réponse ne correspond pas encore aux notions recherchées. Comparez-la avec le corrigé, puis reformulez avec vos propres mots.')
 body+=f'1. [➡️ '+('Question suivante' if '_Q' in dest else 'Terminer les questions')+f']({dest})\n2. [📖 Revoir les notions utiles]({chapter}_GLO)\n3. [↩️ Retour aux chapitres]({theme})\n4. [🏠 Menu principal](MENU_PRINCIPAL)\n\n'
 text=re.sub(r'(?ms)(^## '+q['id']+r'_RESULT\s*\n).*?(?=^## |\Z)',lambda m:m[1]+body,text)
p.write_text(text)
(b/'data/revision_questions_originales.json').write_text(json.dumps(original,ensure_ascii=False,indent=2)+'\n')
(b/'data/revision_reconnaissance_v18.json').write_text(json.dumps(rules,ensure_ascii=False,indent=2)+'\n')
print('62 critères adaptés, quatre comparaisons numériques sur nombres entiers ou mots.')
