/* Saturday uses the daily origin lock and atomic record. Never writes legacy
 * music data; Spotify credentials remain in their existing separate store. */
(function(){
  'use strict';
  var opened=false,failed=false;
  async function cachePreflight(){
    var sw=window.navigator&&window.navigator.serviceWorker;
    if(!sw)return;
    if(sw.controller)throw Error('Een service worker beheert de cadeaupagina; veilige versiecontrole ontbreekt.');
    if(typeof sw.getRegistrations!=='function'||(await sw.getRegistrations()).length)throw Error('Cadeauversie kan niet veilig worden gecontroleerd; wis geen gegevens.');
    sw.addEventListener('controllerchange',function(){failed=true;window.MUSIC_DNA_STORAGE_BLOCKED=true;});
    if(sw.controller)throw Error('De cachebeheerder is veranderd tijdens starten.');
  }
  function requireOpen(){
    if(!opened||failed)throw Error('Cadeauopslag is niet bevestigd; heropen Music DNA.');
    window.MUSIC_DNA_RATING_TRANSACTION.requireLease();
  }
  async function open(){
    if(opened||failed)throw Error('Cadeauopslag kan niet opnieuw worden geopend.');
    if(window.MUSIC_DNA_WRITER_RELEASE!=='20261012.daily-store1'||!window.MUSIC_DNA_DAILY_STORE||!window.MUSIC_DNA_RATING_TRANSACTION)throw Error('Gemengde cadeauversie; er wordt niets opgeslagen.');
    try{
      await cachePreflight();
      await window.MUSIC_DNA_RATING_TRANSACTION.acquire();
      await window.MUSIC_DNA_DAILY_STORE.open();
      opened=true;
      window.MUSIC_DNA_RATING_TRANSACTION.recover();
      await checkpoint();
      return window.MUSIC_DNA_DAILY_STORE.view;
    }catch(e){failed=true;window.MUSIC_DNA_STORAGE_BLOCKED=true;throw e;}
  }
  async function checkpoint(){
    requireOpen();
    try{return await window.MUSIC_DNA_DAILY_STORE.flush();}
    catch(e){failed=true;window.MUSIC_DNA_STORAGE_BLOCKED=true;throw e;}
  }
  window.MUSIC_DNA_GIFT_STORAGE={open:open,checkpoint:checkpoint,requireOpen:requireOpen};
})();
