'use strict';
(function(root){let ready=false;root.NovaBoot={isStarting:()=>!ready,rendered(node){if(root.NovaSave?.isReturning?.())return;if(ready||!node?.classList.contains('bot-message')||!node.textContent.trim())return;ready=true;root.document.getElementById('civicoach-loading').hidden=true;if(root.parent!==root)root.parent.postMessage({source:'civicoach-ready'},'*');}};})(window);
