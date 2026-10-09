"""Synchronise les adresses et les centres des deux modes de recherche."""
from pathlib import Path
from datetime import datetime
from zoneinfo import ZoneInfo
import json,re,html,subprocess,sys
ROOT=Path(__file__).resolve().parents[1]

def main():
 data=ROOT/'recherche-centres/data'
 addresses=json.loads((data/'adresses_centres.json').read_text())
 doc=json.loads((data/'sessions.json').read_text())
 centres={row['code_centre']:row for row in doc['centres'] if row.get('actif')=='Oui'}
 today=datetime.now(ZoneInfo('Europe/Paris')).date().isoformat()
 path=ROOT/'modules/07_passer_examen.md';text=path.read_text()
 if '## SCR_PASS_CITY_MONTLUEL\n' not in text:
  centre=centres['MONTLUEL']
  text+='\n## SCR_PASS_CITY_MONTLUEL\n### 📍 Montluel (01)\n\n#### 📅 Prochaines sessions disponibles\n\n<ul class="messageOptions">\n<li><a href="'+html.escape(centre['lien_forms'],quote=True)+'" target="_blank" rel="noopener noreferrer">📝 S’inscrire à une session</a></li>\n</ul>\n\n1. [📍 Voir un autre centre de la région](SCR_PASS_REGION_RHONE_ALPES)\n2. [📍 Trouver les centres proches de moi](SCR_PASS_INPUT_COMMUNE)\n3. [↩️ Retour au module](SCR_PASS_MENU)\n4. [🏠 Menu principal](MENU_PRINCIPAL)\n'
 def update_city(match):
  code,body=match[1],match[2]
  if code not in centres:return match[0]
  body=re.sub(r'\n<!-- Adresse centre -->.*?<!-- Fin adresse centre -->\n+','\n',body,flags=re.S)
  if code in addresses:
   address=addresses[code]
   notice=' — à confirmer sur votre convocation.' if address.get('a_confirmer') else ''
   block='\n<!-- Adresse centre -->\n**Adresse :** '+html.escape(address['adresse'])+notice+'\n<!-- Fin adresse centre -->\n'
   body=re.sub(r'(^### [^\n]+\n)',lambda m:m[0]+block,body,count=1,flags=re.M)
  dates=sorted({s['date_session'] for s in doc['sessions'] if s['code_centre']==code and s.get('actif')=='Oui' and s.get('statut')=='À venir' and s['date_session']>=today})[:3]
  months=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre']
  lines=[]
  for date in dates:
   y,m,d=map(int,date.split('-'));lines.append(f'- {d} {months[m-1]} {y}')
  listing='\n'.join(lines) if lines else 'Consultez le formulaire pour connaître les prochaines dates.'
  body=re.sub(r'(#### 📅 Prochaines sessions disponibles\n).*?(?=<!-- Condition métier|<ul class="messageOptions">)',lambda m:m[1]+'\n'+listing+'\n\n',body,count=1,flags=re.S)
  return '## SCR_PASS_CITY_'+code+'\n'+body
 text=re.sub(r'^## SCR_PASS_CITY_([A-Z_]+)\n(.*?)(?=^## |\Z)',update_city,text,flags=re.M|re.S)
 def update_region(match):
  body=match[0]
  if match[1]=='RHONE_ALPES' and '](SCR_PASS_CITY_MONTLUEL)' not in body:
   body=body.replace('4. [📍 Valserhône (01)]','4. [📍 Montluel (01)](SCR_PASS_CITY_MONTLUEL)\n5. [📍 Valserhône (01)]')
   body=body.replace('5. [📍 Choisir une autre région]','6. [📍 Choisir une autre région]').replace('6. [↩️ Retour au module]','7. [↩️ Retour au module]').replace('Afficher les 4 centres','Afficher les 5 centres')
  def label(m):
   address=addresses.get(m[4]);label=re.sub(r'<small class="civi-centre-address">.*?</small>','',m[2])
   if address:label+='<small class="civi-centre-address">'+html.escape(address['adresse'])+'</small>'
   return m[1]+label+m[3]
  return re.sub(r'^(\d+\. \[)(.*?)(\]\(SCR_PASS_CITY_([A-Z_]+)\))$',label,body,flags=re.M)
 text=re.sub(r'^## SCR_PASS_REGION_([A-Z_]+)\n.*?(?=^## |\Z)',update_region,text,flags=re.M|re.S)
 path.write_text(text)
 subprocess.run([sys.executable,str(ROOT/'scripts/sync_module_into_chatbot.py'),str(ROOT/'chat_bot.md'),str(path)],check=True)
 print(f'Adresses synchronisées ; {len(centres)} centres actifs, dont Montluel.')

if __name__=='__main__':main()
