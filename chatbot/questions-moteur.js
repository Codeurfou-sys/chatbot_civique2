'use strict';
(function(root){
 const bank=root.CiviQuestionsBank||[];
 const basic=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/œ/g,'oe').replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');
 const corrections={gouvernment:'gouvernement',gouvernemant:'gouvernement',gouvernemnt:'gouvernement',parlemant:'parlement',laicitee:'laicite',revisons:'revisions',memorization:'memorisation',civicoahc:'civicoach',naturalisaton:'naturalisation',entraineemnt:'entrainement',entrainements:'entrainements'};
 function normalize(s){return ' '+basic(s).split(' ').map(t=>corrections[t]||t).join(' ')+' ';}
 const exact=new Map();for(const row of bank)for(const q of row.examples||[]){const key=normalize(q);exact.set(key,exact.has(key)&&exact.get(key)!==row.id?null:row.id);}
 const intents=bank.filter(r=>!r.id.startsWith('SCR_QL_GLO')).map(r=>({...r,test:new Function('qlNormalisee','return '+r.condition.replaceAll('@qlNormalisee','qlNormalisee'))}));
 const concepts=bank.filter(r=>r.id.startsWith('SCR_QL_GLO')).map(r=>({...r,aliases:[...new Set((r.aliases||[r.title]).map(normalize))].sort((a,b)=>b.length-a.length)}));
 const isExplanation=q=>/\b(explique|expliquer|definition|definir|signifie|comprendre|comprends|fonctionne|fonctionnement)\b/.test(q)||/\b(qu est ce|c est quoi|veut dire|qui est|qui sont)\b/.test(q);
 function resolve(input){
  const q=normalize(input);if(q.trim().length<2||q.length>2500)return null;
  if(exact.get(q))return exact.get(q);
  const definition=isExplanation(q)&&!/\b(exercices?|entrainer|entrainements?|quiz)\b/.test(q);
  for(const r of intents){
   if(definition&&/^INTENT_(PREPARER_|EXERCICES_)/.test(r.id))continue;
   // A request to revise a named subject must reach the matching chapter.
   if(/^INTENT_PREPARER_/.test(r.id)&&/\b(reviser|revisions?)\b/.test(q)&&!/\b(examen|exercices?|entrainements?)\b/.test(q))continue;
   try{if(r.test(q))return r.id;}catch(e){}
  }
  if(!definition&&(q.trim().split(' ').length>5||/\b(comment|pourquoi|quels|quelles|combien|ou|exercices?|reviser|entrainer)\b/.test(q)))return null;
  const hits=concepts.map(r=>({id:r.id,alias:r.aliases.find(a=>q.includes(a))})).filter(r=>r.alias);
  hits.sort((a,b)=>b.alias.length-a.alias.length);
  if(!hits.length)return null;
  if(q.includes(' et ')&&!hits[0].alias.includes(' et '))return null;
  // Two independent subjects require clarification rather than an arbitrary definition.
  if(hits.some(r=>r.id!==hits[0].id&&!hits[0].alias.includes(r.alias)))return null;
  return hits[0].id;
 }
 root.NovaQuestions={resolve,normalize,entries:()=>bank.length};
})(typeof window!=='undefined'?window:globalThis);
