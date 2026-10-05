"""Reconnaissance des questions pratiques et accès direct à la saisie."""
from pathlib import Path
import sys,json,re
sys.path.insert(0,str(Path(__file__).resolve().parent));from ameliorations_v6 import ROOT,blocks,join,link
from enrichir_questions_libres import generate
ANSWER='Pour réussir l’examen civique, il faut obtenir **au moins 32 bonnes réponses sur 40**, soit **80 %**. Ce seuil concerne l’examen complet ; les scores des entraînements vous aident à vous préparer.'
def main():
 p=ROOT/'data/question_libre.json';d=json.loads(p.read_text())
 for i in d['intents']:
  if i['id']=='SEUIL':i['answer']=ANSWER
  if i['id']=='FORMAT':i['answer']='L’examen comporte **40 questions à choix multiple** et dure **45 minutes**. Il comprend 28 questions de connaissances et 12 mises en situation, réparties entre cinq thématiques.'
 additions=[dict(id='SEUIL_FORMULATIONS',groups=[['point','points','score','note','bonnes réponses'],['réussir','reussir','obtenir','faut','minimum','minimale','nécessaire','valider','avoir','besoin']],answer=ANSWER,links=[['📊 Consulter le score de réussite','SCR_FAQ_009']])]
 # Chaque règle utilise les réponses de la FAQ existante plutôt qu’un contenu inventé.
 faq=blocks((ROOT/'modules/09_faq.md').read_text())
 specifications=[('PRIX',19,[['prix','tarif','coût','cout','coûte','coute','payer','combien ça coûte']]),('RESULTATS_DELAI',28,[['résultats','resultats'],['quand','recevoir','reçois','recois','délai','delai']]),('ECHEC',26,[['échoue','echoue','échec','echec','raté','rate','repasser','rater']]),('VALIDITE_ATTESTATION',27,[['attestation','certificat'],['validité','validite','expire','expiration','durée','duree']]),('DOCUMENTS_EXAMEN',21,[['documents','papiers','identité','identite'],['apporter','examen','jour','présenter','presenter']]),('DOCUMENTS_ENTRETIEN',46,[['documents','papiers'],['entretien']]),('DISPENSE',14,[['dispensé','dispense','dispensees','dispenses','exempté','exempte','exemption']]),('NIVEAU_FRANCAIS',12,[['niveau','français','francais'],['requis','nécessaire','necessaire','b1','a2','b2']]),('FRAUDE',10,[['triche','tricher','fraude','frauder']]),('QUESTIONS_PIEGES',13,[['piège','piege','pièges','pieges']]),('CENTRE_CHANGEMENT',22,[['changer','changement'],['centre']]),('RECEPISSE',23,[['récépissé','recepisse']]),('PREFECTURE_INSCRIPTION',20,[['préfecture','prefecture'],['inscrire','inscription']]),('CENTRE_PROCHE',24,[['centre','passer'],['proche','chez moi','près','pres','où','ou']]),('THEMATIQUES',3,[['thèmes','themes','thématiques','thematiques'],['examen','officiel','officielles','combien']]),('EXAMEN_DIFFERENCES',5,[['différence','difference','différences','differences'],['résident','resident','séjour','sejour']]),('ENTRETIEN_DUREE',40,[['entretien'],['durée','duree','temps','dure']]),('ENTRETIEN_QUESTIONS',38,[['entretien'],['questions','demande','demandent']]),('ENTRETIEN_TENUE',47,[['habiller','tenue','vêtements','vetements']]),('ENTRETIEN_REFORMULER',45,[['répéter','repeter','reformuler'],['agent','entretien']]),('ENTRETIEN_MOTIVATION',39,[['devenir français','devenir francais','souhaitez devenir']]),('CIR',32,[['cir','contrat d intégration républicaine','contrat d integration republicaine']]),('FORMATION_DUREE',31,[['formation civique'],['durée','duree','dure','temps']]),('FORMATION_EXAMEN',33,[['formation civique'],['différence','difference','examen']]),('FORMATION_OFII',30,[['formation civique','formation de l ofii']]),('ACCES_NOVAFRATE',56,[['novafrate'],['accéder','acceder','connexion','connecter']]),('ACCES_RECEPTION',55,[['accès','acces','identifiants'],['recevoir','quand','reçois','recois']]),('APPLICATION',59,[['application','installer'],['novafrate','formation','plateforme']]),('SUPPORT',61,[['support','contacter frate','problème technique','probleme technique']]),('QUESTIONS_OFFICIELLES',53,[['questions','question'],['officielles','officiel','officielle']])]
 # Les questions d’entretien précises précèdent les questions générales.
 specifications.sort(key=lambda x:0 if x[0].startswith('ENTRETIEN_') or x[0]=='DOCUMENTS_ENTRETIEN' else 1)
 for name,num,groups in specifications:
  sid=f'SCR_FAQ_{num:03d}';v=faq[sid];m=re.search(r':::info[^\n]*\n(.*?)\n:::',v,re.S)
  if not m:raise ValueError(sid)
  answer=m[1].strip();title=re.search(r'(?m)^### (.+)',v)[1]
  additions.append(dict(id='FAQ_'+name,groups=groups,answer=answer,links=[['💬 '+title,sid]]))
 current={i['id'] for i in d['intents']};d['intents']=additions+[i for i in d['intents'] if i['id'] not in {a['id'] for a in additions}];p.write_text(json.dumps(d,ensure_ascii=False,indent=2));generate()
 p=ROOT/'modules/10_question_libre.md';b=blocks(p.read_text());route='!Typewriter: false\n<span class="civicoach-route" aria-hidden="true"></span>\n'
 b['SCR_QL_MENU']=route+'!SelectNext: SCR_QL_RESET'
 b['SCR_QL_RESET']=route+'`@qlQuestion = undefined`\n`@qlNormalisee = undefined`\n`@qlTrouvee = undefined`\n`@qlReponse = undefined`\n!SelectNext: SCR_QL_INPUT'
 v=b['SCR_QL_INPUT'];v=re.sub(r'\A.*?(?=`@qlQuestion = @INPUT)', ' !Keyboard: true\n### Posez votre question\n\nDans cette rubrique, vous pouvez poser différentes questions. CiviCoach répondra dans la mesure du possible, à partir de ses connaissances sur l’examen civique.\n\n',v,flags=re.S)
 v=re.sub(r'(?m)^\d+\. \[(?:↩️ Reprendre mon activité|↩️ Retour aux questions)\].*\n','',v);b['SCR_QL_INPUT']=v.strip();p.write_text(join(b))
if __name__=='__main__':main()
