(function(root){
const tracks={
debussy:{id:'debussy',title:'Clair de lune',credit:'Laurens Goedhart, 2011 — CC BY 3.0. Extrait de 10 secondes avec fondus.',source:'https://commons.wikimedia.org/wiki/File:Clair_de_lune_(Claude_Debussy)_Suite_bergamasque.ogg',license:'https://creativecommons.org/licenses/by/3.0/'},
ode:{id:'ode',title:'Ode à la joie',credit:'WikiGrower1, 2025 — CC0. Extrait de 10 secondes avec fondus.',source:'https://commons.wikimedia.org/wiki/File:Odetojoy.ogg',license:'https://creativecommons.org/publicdomain/zero/1.0/'},
marseillaise:{id:'marseillaise',title:'La Marseillaise',credit:'Enregistrement historique de 1914 — domaine public. Extrait de 10 secondes avec fondus.',source:'https://commons.wikimedia.org/wiki/File:La_Marseillaise_(1914_Recording).ogg',license:'https://commons.wikimedia.org/wiki/File:La_Marseillaise_(1914_Recording).ogg'}
};
let current=null;
function stop(){if(current){current.pause();current.currentTime=0;current=null;}}
function track(q){const s=(q.question+' '+q.correct).toLowerCase();return /debussy|clair de lune/.test(s)?tracks.debussy:/beethoven|ode à la joie|hymne.*europ/.test(s)?tracks.ode:/marseillaise|rouget/.test(s)?tracks.marseillaise:null;}
function link(id){return root.location?.href?new URL('audio-fiches.html?track='+id,root.location.href).href:tracks[id].source;}
function controls(t){const d=root.document.createElement('div');d.className='civi-sheet-audio';const a=new Audio(new URL('assets/audio/'+t.id+'.mp3',root.location.href));a.preload='none';const status=root.document.createElement('span');status.setAttribute('role','status');
const button=(label,run)=>{let b=root.document.createElement('button');b.type='button';b.textContent=label;b.onclick=run;d.append(b);};
button('Écouter — 10 secondes',async()=>{if(current!==a)stop();root.NovaAudio?.stop();current=a;try{await a.play();status.textContent='Lecture en cours';}catch(e){status.textContent='Lecture indisponible. Vérifiez le chargement du fichier audio.';}});
button('Pause / reprendre',async()=>{if(a.paused){if(current!==a)stop();current=a;root.NovaAudio?.stop();try{await a.play();status.textContent='Lecture en cours';}catch(e){status.textContent='Lecture indisponible';}}else{a.pause();status.textContent='En pause';}});
button('Arrêter',()=>{a.pause();a.currentTime=0;if(current===a)current=null;status.textContent='Lecture arrêtée';});
a.onended=()=>{a.currentTime=0;if(current===a)current=null;status.textContent='Extrait terminé';};d.append(status);
const details=root.document.createElement('details'),summary=root.document.createElement('summary');summary.textContent='Source et licence de l’extrait';details.append(summary);const p=root.document.createElement('p');p.textContent=t.credit;details.append(p);for(const [text,url] of [['Enregistrement original',t.source],['Licence',t.license]]){const l=root.document.createElement('a');l.textContent=text;l.href=url;l.target='_blank';l.rel='noopener';details.append(l,root.document.createTextNode(' '));}d.append(details);return d;}
root.CiviSheetAudio={tracks,track,link,controls,stop};root.addEventListener?.('pagehide',stop);
})(window);
