(function(){
  var VERSION=1,KEY='bmd-rating-ledger-v1',BACKUP_KEY='bmd-rating-ledger-backup-v1';
  function parse(x,f){try{return x?JSON.parse(x):f}catch(e){return f}}
  function empty(){return{version:VERSION,events:[],latest:{},weeks:{},updatedAt:null}}
  function readKey(k){var x=parse(localStorage.getItem(k),null);return x&&x.version===VERSION?x:null}
  function read(){var a=readKey(KEY),b=readKey(BACKUP_KEY);if(!a&&!b)return empty();if(!a)return b;if(!b)return a;return (a.events||[]).length>=(b.events||[]).length?a:b}
  function save(m){m.version=VERSION;m.updatedAt=new Date().toISOString();var s=JSON.stringify(m);localStorage.setItem(KEY,s);localStorage.setItem(BACKUP_KEY,s);return m}
  function weekOf(id,explicit){if(explicit)return explicit;var m=String(id||'').match(/^(\d{4}-W\d{2})-/);return m?m[1]:null}
  function normalize(r){var x=String(r||'').toLowerCase();return({raak:'raak',goed:'goed',twijfel:'twijfel',terugkomen:'twijfel',nee:'nee',niet:'nee'})[x]||null}
  function record(x){if(!x||!x.trackId)return false;var r=normalize(x.rating);if(!r)return false;var m=read(),at=x.ratedAt||new Date().toISOString(),week=weekOf(x.trackId,x.weekKey),event={eventId:String(x.trackId)+'|'+at+'|'+r+'|'+(x.source||'official'),trackId:x.trackId,weekKey:week,rating:r,ratedAt:at,source:x.source||'official',meter:x.meter!==false,slot:x.slot||null};if((m.events||[]).some(function(e){return e.eventId===event.eventId}))return true;m.events=m.events||[];m.events.push(event);m.latest=m.latest||{};m.latest[x.trackId]=event;if(week){m.weeks=m.weeks||{};var w=m.weeks[week]||{latest:{},officialRatedIds:[],reserveRatedIds:[]};w.latest[x.trackId]=event;var a=event.meter?w.officialRatedIds:w.reserveRatedIds;if(a.indexOf(x.trackId)<0)a.push(x.trackId);m.weeks[week]=w}save(m);return true}
  function ingestState(key,value){var mm=String(key||'').match(/^bmd-week-(\d{4}-W\d{2})-day[1-7](-reserve)?-v1$/);if(!mm)return;var st=typeof value==='string'?parse(value,{}):value||{};for(var id in st)if(st[id]&&st[id].rating)record({trackId:id,weekKey:mm[1],rating:st[id].rating,ratedAt:st[id].ratedAt,source:mm[2]?'reserve':'official',meter:!mm[2],slot:mm[2]?'reserve':null})}
  function resync(){for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(/^bmd-week-\d{4}-W\d{2}-day[1-7](-reserve)?-v1$/.test(k))ingestState(k,localStorage.getItem(k))}return read()}
  function counts(week){var m=read(),w=m.weeks&&m.weeks[week],o={total:0,raak:0,goed:0,terugkomen:0,niet:0,official:0,reserve:0};if(!w)return o;for(var id in w.latest){var e=w.latest[id];o.total++;if(e.meter)o.official++;else o.reserve++;if(e.rating==='raak')o.raak++;else if(e.rating==='goed')o.goed++;else if(e.rating==='twijfel')o.terugkomen++;else if(e.rating==='nee')o.niet++}return o}
  function snapshot(){var m=read();return JSON.stringify({exportedAt:new Date().toISOString(),source:'music-dna-rating-ledger-v1',ledger:m},null,2)}
  resync();
  window.MUSIC_DNA_RATING_LEDGER={version:VERSION,storageKey:KEY,backupStorageKey:BACKUP_KEY,read:read,record:record,resync:resync,counts:counts,snapshot:snapshot};
})();