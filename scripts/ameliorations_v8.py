"""Demandes V3 : navigation, saisie, glossaire et communes. À lancer après les générateurs v7."""
from pathlib import Path
import json,re,sys
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'scripts'))
from ameliorations_v6 import blocks,join,THEMES

def main():
 for p in (ROOT/'modules').glob('*.md'):
  s=p.read_text();s=re.sub(r'Pour retenir\s*:\s*(?:Retenez\s*:?\s*)?', 'Retenez : ',s);s=s.replace('**Pour retenir**','**Retenez**');p.write_text(s)
 p=ROOT/'modules/02_bilan.md';b=blocks(p.read_text())
 for sid,v in b.items():
  if sid.endswith('_RECO') and 'Pour les thématiques où' not in v:
   v=re.sub(r'(?m)^1\. \[🧭 Mon parcours personnalisé\]\(SCR_PARCOURS_MENU\)\n?','',v)
   pos=v.find('1. [💡 Mémoriser efficacement]');v=v[:pos]+'1. [🧭 Mon parcours personnalisé](SCR_PARCOURS_MENU)\n'+v[pos:] if pos>=0 else v
   cond=' || '.join(f'@score_t{i} >= 4' for i in range(1,6))
   v=v.replace('1. [🎭 Réussir les mises en situation](SCR_CONS_SITUATIONS_MENU)',f'`if {cond}`\nPour les thématiques où vous obtenez **4/5 ou 5/5**, consultez « Réussir les mises en situation », puis entraînez-vous à appliquer vos connaissances avant de passer un examen blanc.\n1. [🎭 Réussir les mises en situation](SCR_CONS_SITUATIONS_MENU)\n`endif`')
  b[sid]=v
 p.write_text(join(b))
 p=ROOT/'modules/08_conseils.md';b=blocks(p.read_text());icons={i:re.search(r'^###\s+(\S+)',v,re.M)[1] for i,v in b.items() if re.search(r'^###\s+(\S+)',v,re.M)};icons['SCR_CONS_MEMOIRE_02']='🔎'
 for sid,v in b.items():
  v=v.replace('🌫️ Comprendre pourquoi','🔎 Comprendre pourquoi').replace('Retour au menu du module','Retour aux conseils')
  v=re.sub(r'\[(?:➡️|⬅️|↩️) ([^\]\n]+)\]\((SCR_CONS_MEMOIRE_\w+)\)',lambda m:'['+icons.get(m[2],'🧠')+' '+m[1]+']('+m[2]+')',v)
  if sid=='SCR_CONS_ENTRETIEN_MENU':
   v=re.sub(r'(?m)^\d+\. \[.*\]\(SCR_(?:REV_T1_MENU|GLO_MENU)\)\n','',v)
   pos=v.find('3. [🎯');v=v[:pos]+''.join(f'1. [{icon} {t}](SCR_REV_T{i}_MENU)\n' for i,(icon,t) in enumerate(zip(['🇫🇷','🏛️','⚖️','🗺️','🤝'],THEMES),1))+v[pos:]
  if sid=='SCR_CONS_MNEMO_MENU':
   v=re.sub(r'(?m)^\d+\. \[.*\]\(SCR_(?:REV_T4_MENU|GLO_MENU)\)\n','',v)
   v=v.replace('1. [🏠 Menu principal]', '1. [🏠 Menu principal]')
   v=v.replace(':::\n\n3. [↩️', ':::\n\n![Image mentale : en 1905, les Églises et l’État sont séparés](https://raw.githubusercontent.com/Codeurfou-sys/chatbot_civique2/main/assets/image-mentale-1905.png)\n\n**Essayez :** imaginez deux bâtiments, une église et un bâtiment public, séparés par un chemin portant « 1905 ». Fermez les yeux, retrouvez la scène puis expliquez : « La loi de 1905 sépare les Églises et l’État. » Cette séparation garantit la liberté de conscience ; chacun reste libre de croire ou de ne pas croire.\n\n3. [↩️')
  b[sid]=v
 p.write_text(join(b))
 # Les consignes du filtre ne s’affichent qu’au début.
 p=ROOT/'modules/04_glossaire.md';gb=blocks(p.read_text());v=gb['SCR_GLO_FILTER'];intro='Choisissez la première lettre du mot, puis la suivante. Je conserve uniquement les mots qui commencent par les lettres choisies. Les lettres grisées ne correspondent à aucune suite possible. Vous pouvez revenir d’une lettre ou recommencer.'
 if intro in v and '`if @gloPrefix == ""`\n'+intro not in v:
  v=v.replace(intro,'`if @gloPrefix == undefined || @gloPrefix == ""`\n'+intro+'\n`endif`')
 gb['SCR_GLO_FILTER']=v;p.write_text(join(gb))
 # @INPUT exige un identifiant d’écran, jamais un texte d’instruction.
 p=ROOT/'modules/10_question_libre.md';b=blocks(p.read_text());old=b['SCR_QL_INPUT']
 if '`if @qlQuestion`' in old:
  body=old[old.index('`if @qlQuestion`'):];body=body[:body.index('`if !@qlQuestion`')]+ '1. [🏠 Menu principal](MENU_PRINCIPAL)\n';b['SCR_QL_ANSWER']='!Keyboard: false\n'+body
 b['SCR_QL_INPUT']='!Keyboard: true\n### Posez votre question\n\nDans cette rubrique, vous pouvez demander une explication simple ou une aide pour préparer l’examen.\n\nÉcrivez votre question dans la barre de saisie, puis appuyez sur **Entrée** ou sur **Envoyer**. Par exemple : « Explique-moi le Parlement » ou « Combien coûte l’examen ? ».\n\n`@qlQuestion = @INPUT : SCR_QL_ANSWER`\n\n1. [🏠 Menu principal](MENU_PRINCIPAL)\n'
 p.write_text(join(b))
 # Le convertisseur ne doit pas transformer les mots du glossaire en cartes d’examen.
 p=ROOT/'scripts/ameliorer_presentation.py';s=p.read_text();s=s.replace("if title in label:","if title in label and not target.startswith(('SCR_GLO_', 'SCR_QL_')):");s=s.replace("text=text.replace('[🏡 '","text=re.sub(r'(?m)^(:::info|:::warning|:::success) ([^\\n]+)', lambda m: m[1]+' '+m[2], text)\n text=text.replace('[🏡 '")
 p.write_text(s)

if __name__=='__main__':main()
