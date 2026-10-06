"""Reconstruit GitHub Pages après une mise à jour automatique des dates."""
import json,os,subprocess,time,urllib.request,urllib.error

def main():
    token=os.environ.get('GITHUB_TOKEN');repo=os.environ.get('GITHUB_REPOSITORY')
    if not token or not repo:raise SystemExit('GITHUB_TOKEN et GITHUB_REPOSITORY sont nécessaires.')
    base='https://api.github.com/repos/'+repo+'/pages/builds'
    headers={'Accept':'application/vnd.github+json','Authorization':'Bearer '+token,'X-GitHub-Api-Version':'2022-11-28','User-Agent':'NovaFrate-sessions'}
    def call(url,method='GET'):
        req=urllib.request.Request(url,headers=headers,method=method)
        try:
            with urllib.request.urlopen(req,timeout=30) as response:return json.load(response)
        except urllib.error.HTTPError as exc:raise SystemExit('Reconstruction GitHub Pages refusée (HTTP '+str(exc.code)+'). Vérifier Settings > Pages et la permission pages: write du workflow.') from None
    requested=call(base,'POST');print('Reconstruction demandée :',requested.get('status','queued'))
    head=subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()
    for _ in range(60):
        build=call(base+'/latest');status=build.get('status');commit=build.get('commit')
        if commit==head and status=='built':print('GitHub Pages reconstruit pour la version actualisée.');return
        if commit==head and status=='errored':raise SystemExit('La reconstruction GitHub Pages a échoué. Consulter le traitement pages build and deployment.')
        time.sleep(5)
    raise SystemExit('La reconstruction a été demandée mais n’a pas pu être confirmée en cinq minutes. Consulter GitHub Actions.')
if __name__=='__main__':main()
