/* Vérifie les expressions compilées, les demandes courantes et les priorités. */
const fs=require('fs');
const moduleText=fs.readFileSync('modules/10_question_libre.md','utf8');
const data=JSON.parse(fs.readFileSync('data/question_libre.json','utf8'));
const rules=JSON.parse(fs.readFileSync('reports/questions_libres_regles.json','utf8'));
const normaliseExpr=moduleText.match(/`@qlNormalisee = calc\((.*?)\)`/)[1];
const conditions=moduleText.split('\n').filter(x=>x.startsWith('`if !@qlTrouvee &&')).map(x=>x.slice(4,-1));
function normalise(q){return q.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim()}
function compiled(expr){return new Function('dynamicVariables','normalizeText','return '+expr.replace(/@([\p{L}0-9_]+)/gu,(_,v)=>'dynamicVariables["'+v+'"]'))}
const preprocess=compiled(normaliseExpr),checks=conditions.map(compiled);
function classify(q){const vars={qlQuestion:q,qlTrouvee:false};vars.qlNormalisee=preprocess(vars,normalise);const index=checks.findIndex(check=>check(vars,normalise));return index<0?null:rules[index].id}
function assert(value,message){if(!value)throw Error(message)}
assert(checks.length===rules.length,'Règles compilées incohérentes');
let count=0;
for(const n of data.notions){for(const q of ['Je ne comprends pas ce qu’est '+n.title+'.','Peux-tu expliquer '+n.title+' ?','EXPLIQUE-MOI '+n.title.toUpperCase()+' !']){assert(classify(q)===n.id,q+' => '+classify(q));count++}}
const examples=[
 ['Je ne comprends pas ce qu’est le gouvernement, peux-tu me simplifier une réponse','SCR_QL_GLO0066'],
 ['Comment puis-je m’améliorer pour mieux retenir les connaissances','INTENT_MEMOIRE'],
 ['Comment mémoriser les dates ?','INTENT_MEMOIRE'],
 ['J’oublie les institutions après avoir lu le cours','INTENT_MEMOIRE'],
 ['Comment réussir les mises en situation ?','INTENT_SITUATIONS'],
 ['Peux-tu m’aider à analyser un cas pratique ?','INTENT_SITUATIONS'],
 ['Quelle différence entre gouvernement et parlement ?','INTENT_GOUVERNEMENT_PARLEMENT'],
 ['C’est quoi le gouvernment ?','SCR_QL_GLO0066'],
 ['Le parlemant, ça veut dire quoi ?','SCR_QL_GLO0101'],
 ['Explique la séparation des églises et de l’État','SCR_QL_GLO0080'],
 ['Comment apprendre par cœur ?','INTENT_MEMOIRE'],
 ['Je veux réviser la laïcité','INTENT_REVISION_T1'],
 ['Je voudrais réviser les institutions','INTENT_REVISION_T2'],
 ['Où puis-je m’inscrire à l’examen ?','INTENT_INSCRIPTION'],
 ['Je veux faire un examen blanc','INTENT_EXAMEN_BLANC'],
 ['Je souhaite m’entraîner','INTENT_ENTRAINEMENT'],
 ['Combien de questions dans l’examen ?','INTENT_FORMAT'],
 ['Je veux progresser dans mes connaissances','INTENT_MEMOIRE_PROGRESSION'],
 ['Pourquoi je me trompe souvent ?','INTENT_ERREURS'],
 ['Je cherche le conseil municipal','SCR_QL_GLO0029'],
 ['Quel est le rôle du Conseil constitutionnel ?','SCR_QL_GLO0025'],
 ['Les services publics, c’est quoi ?','SCR_QL_GLO0125'],
 ['Que fait un ministre ?','SCR_QL_GLO0093'],
 ['Je confonds le gouvernement et le parlement','INTENT_GOUVERNEMENT_PARLEMENT'],
 ['Je cherche des recettes de cuisine',null], ['cafétéria',null], ['Je veux acheter un ordinateur',null]
];
for(const [q,id] of examples){assert(classify(q)===id,q+' => '+classify(q)+', attendu '+id);count++}
// Les boutons sont filtrés après le texte : la réponse choisie doit rester stable.
for(const rule of rules)assert(moduleText.includes('`if @qlReponse == "'+rule.id+'"`'),'Boutons manquants : '+rule.id);
assert(moduleText.includes('normalizeText(@qlQuestion)'),'Normalisation incompatible');
assert(moduleText.includes('Le **gouvernement** est l’équipe'),'Réponse simple manquante');
console.log(`OK — ${count} formulations, ${data.notions.length} notions, ${data.intents.length} intentions et boutons liés aux réponses.`);
