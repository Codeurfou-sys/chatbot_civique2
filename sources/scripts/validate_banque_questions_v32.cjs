const fs=require('fs'),path=require('path'),assert=require('assert');const root=path.resolve(__dirname,'..');global.window=global;require(root+'/chatbot/questions-banque.js');require(root+'/chatbot/questions-moteur.js');
let accepted=0,rejected=0;for(const row of CiviQuestionsBank){row.examples=[...new Set(row.examples)].filter(q=>{if(NovaQuestions.resolve(q)===row.id){accepted++;return true;}rejected++;return false;});}
const cases=[
 ['Quels exercices m’aideront à réussir l’examen civique naturalisation ?','INTENT_PREPARER_NAT'],
 ['Pour devenir français, je veux préparer mon examen de naturalisation','INTENT_PREPARER_NAT'],
 ['Des exercices pour la carte de résident, vous en avez ?','INTENT_PREPARER_CR'],
 ['Je voudrais réviser les institutions','INTENT_REVISION_T2'],
 ['Je veux réviser la laïcité','INTENT_REVISION_T1'],
 ['Comment mémoriser les dates sans tout oublier ?','INTENT_METHODE_MEMOIRE'],
 ['Comment progresser à partir de mes erreurs ?','INTENT_TRAVAILLER_ERREURS'],
 ['Explique-moi le gouvernemnt','SCR_QL_GLO0066'],
 ['Le parlemant, ça veut dire quoi ?','SCR_QL_GLO0101'],
 ['Quelle différence entre Gouvernement et Parlement ?','INTENT_GOUVERNEMENT_PARLEMENT'],
 ['Pourquoi naturalisation changerait mon travail ?',null],
 ['Comment télécharger mon bilan en PDF ?','INTENT_USAGE_PDF'],
 ['Je souhaite effacer mes résultats','INTENT_USAGE_EFFACER'],
 ['Quelle différence entre questions officielles et mises en situation ?','INTENT_CHOIX_EXERCICE'],
 ['Les mises en situation sont-elles officielles ?','INTENT_SITUATIONS_NON_OFFICIELLES'],
 ['Où consulter mes anciennes tentatives ?','INTENT_USAGE_RESULTATS'],
 ['Comment ouvrir Civicoach en plein écran ?','INTENT_USAGE_GRAND'],
 ['Peut-on manger des pommes sur la lune ?',null],
 ['Explique-moi la pomme et le Gouvernement',null],
];
for(const [q,target] of cases){const found=NovaQuestions.resolve(q);assert.equal(found,target,q+' => '+found);}
const stats={version:32,requests:CiviQuestionsBank.length,validatedFormulations:accepted,rejectedCandidates:rejected,testCases:cases.length,heldOutCases:cases.filter(([q])=>!CiviQuestionsBank.some(r=>r.examples.some(e=>NovaQuestions.normalize(e)===NovaQuestions.normalize(q)))).length};
fs.writeFileSync(root+'/data/questions_apprenants_v32.json',JSON.stringify({version:32,description:'Banque de réponses issues des contenus CiviCoach et formulations vérifiées par le moteur.',entries:CiviQuestionsBank},null,2)+'\n');fs.writeFileSync(root+'/chatbot/questions-banque.js','window.CiviQuestionsBank='+JSON.stringify(CiviQuestionsBank)+';\n');fs.writeFileSync(root+'/reports/questions_v32_validation.json',JSON.stringify(stats,null,2)+'\n');console.log(stats);
