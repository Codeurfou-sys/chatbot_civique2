'use strict';
(function(root){
  const peers=new Set();let api=null,timer=null,returnChild=null;
  function decode(value){return JSON.parse(decodeURIComponent(value));}
  function readTransfer(){
    if(!root.location.hash.startsWith('#parcours='))return;
    try{root.CiviCoachTransfer=decode(root.location.hash.slice(10));}catch(e){}
    root.history.replaceState(null,'',root.location.pathname+root.location.search);
  }
  readTransfer();
  function withState(url){
    const u=new URL(url,root.location.href);u.hash='parcours='+encodeURIComponent(JSON.stringify(api.exportData()));return u.href;
  }
  function post(peer,data){try{if(peer&&!peer.closed)peer.postMessage(data,root.location.origin);}catch(e){}}
  function changed(){
    if(!api||timer)return;timer=root.setTimeout(()=>{timer=null;const data={source:'civicoach-state-changed',state:api.exportData()};
      for(const peer of peers){if(peer.closed)peers.delete(peer);else post(peer,data);}post(root.opener,data);
    },150);
  }
  function open(url){const peer=root.open(withState(url),'_blank');if(peer)peers.add(peer);}
  function go(url){root.location.href=withState(url);}
  function context(){try{const c=api.exportData().integrationContext,u=new URL(c.url);if(["http:","https:"].includes(u.protocol)&&u.origin===c.origin)return {url:u.href,origin:u.origin};}catch(e){}return null;}
  function returnAvailable(){return !!(api&&(context()?.url||(root.opener&&api.exportData().integration===true)));}
  function returnToMoodle(){
    const data={source:'civicoach-return-moodle',state:api.exportData()};
    if(root.opener&&!root.opener.closed){post(root.opener,data);return;}
    const c=context();if(c?.url){const u=new URL(c.url);u.hash='civicoach-retour='+encodeURIComponent(JSON.stringify(api.exportData()));root.location.href=u.href;}
  }
  function parentOrigin(){try{return new URL(root.document.referrer).origin;}catch(e){return '*';}}
  function askParent(){if(root.parent&&root.parent!==root)root.parent.postMessage({source:'civicoach-integration-request'},parentOrigin());}
  function handle(event){
    if(!api||!event.data)return false;const data=event.data;
    if(data.source==='civicoach-integration'&&root.parent!==root&&event.source===root.parent){
      try{const u=new URL(data.returnUrl);if(!['https:','http:'].includes(u.protocol)||(u.origin!==event.origin&&!(event.origin===root.location.origin&&data.returnOrigin===u.origin)))return true;
        api.setIntegration({url:u.href,origin:u.origin});
      }catch(e){}return true;
    }
    if(event.origin!==root.location.origin)return false;
    const fromOpener=!!root.opener&&event.source===root.opener,fromPeer=peers.has(event.source);
    if(data.source==='civicoach-companion-request'&&fromPeer){post(event.source,{source:'civicoach-companion-state',state:api.exportData()});return true;}
    if((data.source==='civicoach-companion-state'&&fromOpener)||(data.source==='civicoach-state-changed'&&(fromOpener||fromPeer))){
      try{api.mergeData(data.state,data.source==='civicoach-companion-state');if(data.source==='civicoach-state-changed'){const merged={...data,state:api.exportData()};for(const peer of peers)if(peer!==event.source)post(peer,merged);if(!fromOpener)post(root.opener,merged);}}catch(e){}return true;
    }
    if(data.source==='civicoach-return-moodle'&&fromPeer){
      try{api.mergeData(data.state);}catch(e){}
      if(root.parent!==root){root.parent.postMessage({source:'civicoach-return-widget'},parentOrigin());try{root.top.focus();}catch(e){}post(event.source,{source:'civicoach-return-ready'});}
      else if(root.opener&&!root.opener.closed){returnChild=event.source;post(root.opener,{source:'civicoach-return-moodle',state:api.exportData()});}
      else{const c=context();if(c?.url)post(event.source,{source:'civicoach-return-fallback',url:c.url});}
      return true;
    }
    if(data.source==='civicoach-return-ready'&&fromOpener){
      if(returnChild){post(returnChild,{source:'civicoach-return-ready'});returnChild=null;root.setTimeout(()=>root.close(),100);}else root.close();return true;
    }
    if(data.source==='civicoach-return-fallback'&&fromOpener){try{const c=context();if(data.url===c?.url){const u=new URL(c.url);u.hash='civicoach-retour='+encodeURIComponent(JSON.stringify(api.exportData()));root.location.href=u.href;}}catch(e){}return true;}
    return false;
  }
  root.NovaLink={open,go,changed,handle,returnAvailable,returnToMoodle,attach(value){api=value;askParent();post(root.opener,{source:'civicoach-companion-request'});}};
})(window);
