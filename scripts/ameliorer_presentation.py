"""Présentation et intitulés ; à relancer après régénération des modules."""
from pathlib import Path
import re
ICONS={'SCR_PREP_MENU':'🎯','SCR_PASS_MENU':'🗓️','MENU_PRINCIPAL':'🏠'}
def presentation(text):
 text=text.replace('[➡️ ↩️ ', '[↩️ ').replace('[➡️ ➡️ ', '[➡️ ')
 text=text.replace('Préparer mon examen','Passer un examen blanc').replace('Préparer un examen blanc','Passer un examen blanc').replace('préparer un examen blanc','passer un examen blanc').replace('Passer mon examen civique','S’inscrire à l’examen civique').replace('Passer mon examen','S’inscrire à l’examen civique')
 def icon(m):
  label,target=m[2],m[3]
  if label and ord(label[0])>8000:return m[0]
  if target.startswith(('ENT_','EXAM_','BIL_')) and target.endswith(('_VRAI','_FAUX')):symbol='🔘'
  elif 'RETOUR' in target or label.lower().startswith('retour'):symbol='↩️'
  elif 'MIS' in target:symbol='🎭'
  elif 'FAC' in target:symbol='🟢'
  elif 'INT' in target:symbol='🟡'
  elif 'DIF' in target:symbol='🔴'
  elif 'TOUS' in target or 'ALL' in target:symbol='🌐'
  elif 'CSP' in target:symbol='🪪'
  elif 'CR' in target:symbol='🏡'
  elif 'NAT' in target:symbol='🇫🇷'
  elif 'SCR_REV_T' in target or '_T' in target:symbol='📚'
  elif 'PASS' in target:symbol='📍'
  else:symbol='➡️'
  return m[1]+'['+symbol+' '+label+']('+target+')'
 return re.sub(r'(?m)^(\d+\. )\[([^\]\n]+)\]\(([^)\n]+)\)',icon,text)
def main():
 for p in Path('modules').glob('*.md'):p.write_text(presentation(p.read_text()))
 p=Path('chat_bot.md');text=presentation(p.read_text())
 css='''
  /* Présentation NovaFrate : boutons, cartes et accessibilité clavier */
  .messageOptions { padding-left: 0 !important; display: flex; flex-wrap: wrap; gap: 10px; }
  .messageOptions li { list-style: none; margin: 0 !important; }
  .messageOptions a, button, .button, a.btn {
    display: inline-block; background: #fff !important; border: 1px solid #d8a9b4 !important;
    border-radius: 14px !important; padding: 12px 18px !important; line-height: 1.45;
    box-shadow: 0 3px 10px rgba(100,30,50,.08) !important; text-decoration: none !important;
    transition: background .15s, box-shadow .15s;
  }
  .messageOptions a:hover { background: #fff5f7 !important; box-shadow: 0 5px 14px rgba(100,30,50,.16) !important; }
  .messageOptions a:focus-visible, button:focus-visible { outline: 3px solid #a61c3c !important; outline-offset: 3px; }
  #chat h3 { margin-top: 24px; margin-bottom: 14px; line-height: 1.4; }
  #chat p { line-height: 1.65; }
  #chat .warning { background: #fff8e6; border-left: 4px solid #d99c20; padding: 16px; border-radius: 12px; }
  @media (max-width: 600px) { .messageOptions { flex-direction: column; } .messageOptions a { box-sizing: border-box; width: 100%; } }
'''
 if '/* Présentation NovaFrate' not in text:text=text.replace('\n---\n\n# Coach',css+'\n---\n\n# Coach',1)
 for mod in Path('modules').glob('*.md'):
  begin=f'<!-- Début du fichier source : modules/{mod.name} -->';end=f'<!-- Fin du fichier source : modules/{mod.name} -->'
  if begin in text:text=re.sub(re.escape(begin)+r'.*?'+re.escape(end),lambda m:begin+'\n\n'+mod.read_text().strip()+'\n\n'+end,text,flags=re.S)
 p.write_text(text)
if __name__=='__main__':main()
