'use strict';
(function(root){
const KEY='civicoach-tirages-v22';let memory={version:22,groups:{},options:{}};
try{const x=JSON.parse(root.localStorage.getItem(KEY)||'null');if(x?.version===22&&x.groups&&x.options)memory=x;}catch(e){}
function persist(){try{root.localStorage.setItem(KEY,JSON.stringify(memory));}catch(e){}}
function random(n){if(root.crypto?.getRandomValues){const a=new Uint32Array(1);root.crypto.getRandomValues(a);return Math.floor(a[0]/4294967296*n);}return Math.floor(Math.random()*n);}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=random(i+1);[a[i],a[j]]=[a[j],a[i]];}return a;}
function select(values){const candidates=values.map(x=>x.trim()).filter(Boolean);if(candidates.length===1)return candidates[0];if(!candidates.every(x=>/^(ENT_.+_V\d+_Q01|EXAM_.+_V\d+_PART1)$/.test(x)))return candidates[random(candidates.length)];
 const key=candidates[0].replace(/_V\d+_(Q01|PART1)$/,'');const old=memory.groups[key]||{},lastIds=new Set(old.lastIds||[]);let available=(old.remaining||[]).filter(x=>candidates.includes(x));if(!available.length)available=candidates.slice();const eligible=available.length>1?available.filter(x=>x!==old.last):available;
 let minimum=Infinity,best=[];for(const id of eligible){const overlap=(root.NovaSeries?.[id]||[]).filter(q=>lastIds.has(q)).length;if(overlap<minimum){minimum=overlap;best=[id];}else if(overlap===minimum)best.push(id);}const picked=best[random(best.length)];memory.groups[key]={remaining:available.filter(x=>x!==picked),last:picked,lastIds:root.NovaSeries?.[picked]||[],updated:Date.now()};persist();return picked;
}
function decoded(a){const h=(a.getAttribute('href')||'').split('#').pop();try{return root.atob(h);}catch(e){return h;}}
function hash(s){let n=2166136261;for(let i=0;i<s.length;i++){n^=s.charCodeAt(i);n=Math.imul(n,16777619);}return(n>>>0).toString(36);}
function reorder(html){const t=root.document.createElement('template');t.innerHTML=html;const links=[...t.content.querySelectorAll('a')].filter(a=>/^(ENT_.+_Q\d+|EXAM_.+_Q\d+|BIL_ITEM_.+)_(VRAI|FAUX)$/.test(decoded(a)));if(links.length===4){const nodes=links.map(a=>a.closest('li'));if(nodes.every(Boolean)&&nodes.every(n=>n.parentNode===nodes[0].parentNode)){
 const texts=links.map(a=>{const copy=a.cloneNode(true);copy.querySelectorAll('.qcm-letter').forEach(x=>x.remove());return copy.textContent.trim();});const ids=texts.map((x,i)=>({text:x,node:nodes[i]}));const key=hash(texts.slice().sort().join('\u001f'));const previous=memory.options[key]?.order;let order=shuffle(ids);if(order.map(x=>x.text).join('\u001f')===(previous||texts.join('\u001f')))order=[...order.slice(1),order[0]];
 const parent=nodes[0].parentNode,marker=root.document.createComment('answers');parent.insertBefore(marker,nodes[0]);order.forEach((x,i)=>{const a=x.node.querySelector('a'),letter=a.querySelector('.qcm-letter');if(letter)letter.textContent='ABCD'[i];parent.insertBefore(x.node,marker);});marker.remove();memory.options[key]={order:order.map(x=>x.text).join('\u001f'),updated:Date.now()};persist();}}
 t.content.querySelectorAll('strong').forEach(el=>{if(/^(Réponse correcte|Bonne réponse|Réponse attendue)\s*:\s*$/.test(el.textContent)&&el.nextSibling?.nodeType===3)el.nextSibling.textContent=el.nextSibling.textContent.replace(/^\s*[A-D]\s*[—–-]\s*/,' ');if(/^(Réponse correcte|Bonne réponse|Réponse attendue)\s*:\s*[A-D]\s*[—–-]\s*/.test(el.textContent))el.textContent=el.textContent.replace(/^(Réponse correcte|Bonne réponse|Réponse attendue)\s*:\s*[A-D]\s*[—–-]\s*/,'$1 : ');});return t.innerHTML;
}
function importData(value){if(!value||value.version!==22||typeof value.groups!=='object'||typeof value.options!=='object'||JSON.stringify(value).length>1000000)return;for(const kind of ['groups','options'])for(const [key,row]of Object.entries(value[kind])){if(['__proto__','constructor','prototype'].includes(key)||!row||typeof row!=='object')continue;if(!memory[kind][key]||Number(row.updated)>Number(memory[kind][key].updated))memory[kind][key]=JSON.parse(JSON.stringify(row));}persist();}
root.NovaRandom={select,reorder,exportData:()=>JSON.parse(JSON.stringify(memory)),importData};
})(window);
