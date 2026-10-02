"""Présentation et intitulés ; à relancer après régénération des modules."""
from pathlib import Path
import re
ICON_BASE='https://raw.githubusercontent.com/Codeurfou-sys/chatbot_civique2/main/assets/icons/'
def pictogram(name,alt):return f'<img class="civic-icon" src="{ICON_BASE}{name}.svg" alt="{alt}" width="30" height="24">'
ICONS={'SCR_PREP_MENU':'🎯','SCR_PASS_MENU':'🗓️','MENU_PRINCIPAL':'🏠'}
def presentation(text):
 text=text.replace('[🏡 ', '[➡️ ').replace('[➡️ ℹ️ ', '[ℹ️ ')
 text=text.replace('[➡️ ↩️ ', '[↩️ ').replace('[➡️ ➡️ ', '[➡️ ')
 text=text.replace('Préparer mon examen','Passer un examen blanc').replace('Préparer un examen blanc','Passer un examen blanc').replace('préparer un examen blanc','passer un examen blanc').replace('Passer mon examen civique','S’inscrire à l’examen civique').replace('Passer mon examen','S’inscrire à l’examen civique')
 def icon(m):
  label,target=m[2],m[3]
  for title,asset in [('Carte de séjour pluriannuelle','csp'),('Carte de résident','resident'),('Naturalisation','naturalisation')]:
   if title in label:
    # Préserver les variables éventuelles portées par le libellé.
    clean=label[label.index(title):]
    return m[1]+'['+pictogram(asset,'')+' '+clean+']('+target+')'
  if target=='SCR_PASS_REGION_GRAND_EST':return m[1]+'['+pictogram('cigogne','')+' Grand Est]('+target+')'
  if target=='SCR_PASS_REGION_AUVERGNE':return m[1]+'[🌋 Auvergne]('+target+')'
  if re.fullmatch(r'SCR_ENT_(CSP|CR|NAT)_T[1-5]_(Q|MIS)_LAUNCH',target):
   for title in ['Principes et valeurs','Institutions et système politique','Droits et devoirs','Histoire, géographie et culture','Vivre dans la société française']:
    if title in label:return m[1]+'['+('📘' if '_Q_LAUNCH' in target else '🎭')+' '+label[label.index(title):]+']('+target+')'
  if '<span ' in label or '<img ' in label or (label and ord(label[0])>8000):return m[0]
  if target.startswith(('ENT_','EXAM_','BIL_')) and target.endswith(('_VRAI','_FAUX')):symbol='🔘'
  elif 'RETOUR' in target or label.lower().startswith('retour'):symbol='↩️'
  elif 'MIS' in target:symbol='🎭'
  elif 'FAC' in target:symbol='🟢'
  elif 'INT' in target:symbol='🟡'
  elif 'DIF' in target:symbol='🔴'
  elif 'TOUS' in target or 'ALL' in target:symbol='🌐'
  elif 'CSP' in target:symbol='🪪'
  elif '_CR_' in target or target.endswith('_CR'):symbol='🪪'
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
  .messageOptions { padding-left: 0 !important; display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
  .messageOptions li { list-style: none; margin: 0 !important; }
  .messageOptions a, .button, a.btn {
    display: inline-block; background: #fff !important; border: 1px solid #d8a9b4 !important;
    border-radius: 14px !important; padding: 12px 18px !important; line-height: 1.45;
    box-shadow: 0 3px 10px rgba(100,30,50,.08) !important; text-decoration: none !important;
    transition: background .15s, box-shadow .15s;
  }
  .messageOptions a:hover { background: #fff5f7 !important; box-shadow: 0 5px 14px rgba(100,30,50,.16) !important; }
  .messageOptions a:focus-visible, button:focus-visible { outline: 3px solid #a61c3c !important; outline-offset: 3px; }
  /* Le bouton d'envoi garde sa propre géométrie, distincte des choix. */
  #controls { align-items: flex-start !important; flex-direction: row !important;
    gap: 10px !important; box-sizing: border-box; padding-left: 10px !important; padding-right: 10px !important; }
  #input-container { box-sizing: border-box; min-height: 42px; min-width: 0; flex: 1 1 auto; width: auto !important; }
  #send-button {
    box-sizing: border-box !important; display: inline-flex !important;
    align-items: center !important; justify-content: center !important;
    height: 42px !important; min-height: 42px !important; padding: 0 14px !important;
    line-height: 1.2 !important; margin: 0 !important; flex: 0 0 auto;
    white-space: nowrap; border-radius: 12px !important;
  }
  .message:has(.civicoach-route) { display: none !important; }
  .glo-keyboard { display: grid; grid-template-columns: repeat(7, minmax(30px, 1fr)); gap: 8px; max-width: 400px; margin: 14px 0; }
  .glo-key { display: inline-flex; align-items: center; justify-content: center; min-height: 40px; border: 1px solid #a61c3c; border-radius: 8px; background: #fff; text-decoration: none; font-weight: bold; }
  .glo-key.disabled { color: #7b7b7b; background: #eee; border-color: #ddd; }
  .glo-key:focus-visible { outline: 3px solid #a61c3c; outline-offset: 3px; }
  .deadline-orange { display: inline-block; width: 14px; height: 14px; background: #c65d00; border-radius: 50%; vertical-align: middle; margin-right: 5px; }
  .civic-icon { vertical-align: middle; object-fit: contain; margin-right: 5px; }
  #chat h3 { margin-top: 24px; margin-bottom: 14px; line-height: 1.4; }
  #chat p { line-height: 1.65; }
  #chat .warning { background: #fff8e6; border-left: 4px solid #d99c20; padding: 16px; border-radius: 12px; }
  @media (max-width: 600px) { .messageOptions { flex-direction: column; } .messageOptions a { box-sizing: border-box; width: 100%; } }
'''
 if '/* Présentation NovaFrate' in text:
  text=re.sub(r'\n  /\* Présentation NovaFrate.*?(?=\n---\n)',lambda m:css,text,count=1,flags=re.S)
 else:text=text.replace('\n---\n\n# Coach',css+'\n---\n\n# Coach',1)
 for mod in Path('modules').glob('*.md'):
  begin=f'<!-- Début du fichier source : modules/{mod.name} -->';end=f'<!-- Fin du fichier source : modules/{mod.name} -->'
  if begin in text:text=re.sub(re.escape(begin)+r'.*?'+re.escape(end),lambda m:begin+'\n\n'+mod.read_text().strip()+'\n\n'+end,text,flags=re.S)
 p.write_text(text)
if __name__=='__main__':main()
