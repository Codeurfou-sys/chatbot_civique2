"""Adapte l'artefact publié au dépôt courant, y compris les anciens liens absolus."""
from pathlib import Path
from urllib.parse import urlparse
import os,re
OLD='https://codeurfou-sys.github.io/chatbot_civique2/'
def adapt(directory,repository,site_url=None):
 if not re.fullmatch(r'[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+',repository):raise ValueError('Dépôt attendu : propriétaire/nom')
 owner,repo=repository.split('/')
 base=site_url or ('https://'+owner.lower()+'.github.io/'+('' if repo.lower()==owner.lower()+'.github.io' else repo+'/'))
 if urlparse(base).scheme!='https' or not urlparse(base).netloc:raise ValueError('L’URL du site doit être une adresse HTTPS complète.')
 base=base.rstrip('/')+'/';count=0
 for p in directory.rglob('*'):
  if p.is_file() and p.suffix in {'.html','.js','.md','.css','.json','.svg'}:
   s=p.read_text();s2=s.replace(OLD,base).replace('https://raw.githubusercontent.com/Codeurfou-sys/chatbot_civique2/main/','https://raw.githubusercontent.com/'+repository+'/main/').replace('https://raw.githubusercontent.com/codeurfou-sys/chatbot_civique2/main/','https://raw.githubusercontent.com/'+repository+'/main/')
   if s2!=s:p.write_text(s2);count+=1
 # Les exemples Moodle (hors site) restent des modèles à personnaliser manuellement.
 print(f'URLs adaptées dans {count} fichiers pour {base}')
 return base
if __name__=='__main__':
 import argparse
 a=argparse.ArgumentParser();a.add_argument('directory',type=Path);a.add_argument('--repository',default=os.environ.get('GITHUB_REPOSITORY'));a.add_argument('--site-url',default=os.environ.get('CIVICOACH_SITE_URL') or None);x=a.parse_args()
 if not x.repository:a.error('--repository propriétaire/nom est nécessaire')
 adapt(x.directory,x.repository,x.site_url)
