'use strict';
(function(root){
const chat=root.document.getElementById('chat'),indicator=root.document.getElementById('question-loading');let pending=false;
function inputMode(){return !!chat.querySelector('.bot-message:last-of-type .nova-question-input')||!![...chat.querySelectorAll('.bot-message')].at(-1)?.querySelector('.nova-question-input');}
function begin(){if(pending||!inputMode()||!root.document.getElementById('user-input').textContent.trim())return;pending=true;indicator.hidden=false;chat.setAttribute('aria-busy','true');root.document.getElementById('send-button').disabled=true;}
function finish(){if(!pending)return;pending=false;indicator.hidden=true;chat.setAttribute('aria-busy','false');root.document.getElementById('send-button').disabled=false;}
root.NovaQuestion={begin,rendered(node){if(node?.querySelector('.nova-question-answer'))finish();},isPending:()=>pending};
root.document.addEventListener('click',e=>{if(e.target.closest('#send-button'))begin();else if(e.target.closest('#chat a')&&pending)finish();},true);
})(window);
