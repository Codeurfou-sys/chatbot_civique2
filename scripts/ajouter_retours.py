from pathlib import Path
import re
MENUS={'02_bilan.md':'SCR_BIL_MENU','03_revisions.md':'SCR_REV_MENU','04_glossaire.md':'SCR_GLO_MENU','05_preparer_examen.md':'SCR_PREP_MENU','06_entrainement.md':'SCR_ENT_MENU','07_passer_examen.md':'SCR_PASS_MENU','08_conseils.md':'SCR_CONS_MENU','09_faq.md':'SCR_FAQ_MENU','10_question_libre.md':'SCR_QL_MENU'}
def update(text,menu):
 def amend(match):
  id,body=match.group(1),match.group(2)
  if id=='MENU_PRINCIPAL':return match.group(0)
  target=menu
  if menu=='SCR_REV_MENU':
   theme=re.search(r'SCR_REV_T(\d)',id)
   if theme and id!=f'SCR_REV_T{theme[1]}_MENU':target=f'SCR_REV_T{theme[1]}_MENU'
  if menu=='SCR_ENT_MENU':return match.group(0)
  if id!=target and not re.search(r'\]\('+re.escape(target)+r'\)',body):body+='\n1. [↩️ Retour au menu du module]('+target+')\n'
  if not re.search(r'\]\(MENU_PRINCIPAL\)',body):body+='\n1. [🏠 Menu principal](MENU_PRINCIPAL)\n'
  return '## '+id+'\n'+body+'\n'
 return re.sub(r'(?ms)^## (\w+)\s*$\n(.*?)(?=^## |\Z)',amend,text)
def main():
 for name,menu in MENUS.items():
  p=Path('modules')/name;p.write_text(update(p.read_text(),menu))
if __name__=='__main__':
 import argparse
 parser=argparse.ArgumentParser();parser.add_argument('--module');parser.add_argument('--menu',default='SCR_PASS_MENU');args=parser.parse_args()
 if args.module:
  p=Path(args.module);p.write_text(update(p.read_text(),args.menu))
 else:main()
