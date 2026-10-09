'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, 'music-dna-positive-bank-v1.js'), 'utf8');
const sid = n => String(n).padStart(22, '0');
const row = (n, extra = {}) => ({rating:'goed', source:'reserve', artist:'Artist '+n, title:'Track '+n,
  ratedAt:'2026-10-01T00:00:00Z', spotifyUrl:'https://open.spotify.com/track/'+sid(n), spotifyResolvedExact:true, ...extra});
function boot(signals, history, registry) {
  const store = new Map();
  if (history) store.set('bmd-positive-playlist-history-v1', JSON.stringify(history));
  const c = {console, Date, Map, Set, window:null, localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,String(v))},
    MUSIC_DNA_LEARNING:{read:()=>({signals})}, MUSIC_DNA_SEQUENCER:{sequence:rows=>rows.slice()}, MUSIC_DNA_DELIVERY_REGISTRY:registry};
  c.window=c; vm.createContext(c); vm.runInContext(source,c);
  return {bank:c.MUSIC_DNA_POSITIVE_BANK, store};
}
const signals = Object.fromEntries(Array.from({length:25}, (_,i)=>['track-'+(i+1),row(i+1)]));
signals.alias = row(1,{artist:'Different credit for the same recording',ratedAt:'2026-09-30T00:00:00Z'});
signals.invalid = row(90,{artist:'Invalid URL',spotifyUrl:'https://open.spotify.com/track/short',ratedAt:'2026-09-29T00:00:00Z'});
signals.foreign = row(91,{artist:'Wrong host',spotifyUrl:'https://example.org/open.spotify.com/track/'+sid(91),ratedAt:'2026-09-29T00:00:00Z'});
const original = JSON.stringify(signals);
let {bank,store} = boot(signals);
let gift = bank.buildSaturdayPlaylist('2026-W41',[]);
assert.equal(gift.full,true);
assert.equal(new Set(gift.tracks.map(t=>t.spotifyUrl)).size,21,'aliases must not duplicate Spotify recordings');
assert(!gift.ids.includes('invalid') && !gift.ids.includes('foreign'),'invalid URLs must not enter the gift');
assert(gift.ids.includes('alias') && !gift.ids.includes('track-1'),'oldest FIFO recording alias wins');
assert(gift.blockedDuplicateRecording.includes('track-1'));
store.set('bmd-week-2026-W41-day1-selection-v1',JSON.stringify({ids:['track-1']}));
assert.equal(bank.inventory('2026-W41').fresh,24,'current official recording aliases are not unused reserve');
assert.equal(bank.commitSaturdayPlaylist(gift),true);
let history = JSON.parse(store.get(bank.historyKey));
assert.equal(history.weeks['2026-W41'].spotifyTrackIds.length,21,'recording consumption survives internal ID changes');
// A later new identity for a consumed recording stays positive, but cannot re-enter Saturday FIFO.
const later = Object.fromEntries(Array.from({length:25},(_,i)=>['new-'+(i+30),row(i+30)]));
later.reimported = row(1,{artist:'Reimported credit',ratedAt:'2026-09-01T00:00:00Z'});
({bank,store}=boot(later,history));
gift=bank.buildSaturdayPlaylist('2026-W42',[]);
assert.equal(gift.full,true); assert(!gift.ids.includes('reimported'));
assert(gift.blockedPreviouslyDelivered.includes('reimported'));
assert.equal(bank.inventory('2026-W42').fresh,25,'consumed alias must not inflate unused reserve');
assert.equal(bank.commitSaturdayPlaylist(gift),true);
assert.deepEqual(JSON.parse(store.get(bank.historyKey)).weeks['2026-W41'],history.weeks['2026-W41'],'previous delivery preserved');
// Historical ID-only records remain supported using known delivery identities.
const oldHistory={version:15,weeks:{'2026-W40':{ids:['historical-id'],createdAt:'unchanged'}}};
({bank}=boot(signals,oldHistory,{tracks:{'historical-id':{spotifyUrl:'https://open.spotify.com/track/'+sid(1)}}}));
gift=bank.buildSaturdayPlaylist('2026-W41',[]);
assert.equal(gift.full,true); assert(!gift.ids.includes('alias') && !gift.ids.includes('track-1'));
assert.equal(JSON.stringify(oldHistory),JSON.stringify({version:15,weeks:{'2026-W40':{ids:['historical-id'],createdAt:'unchanged'}}}));
assert.equal(JSON.stringify(signals),original,'ratings and source metadata preserved');
({bank,store}=boot(signals));
gift=bank.buildSaturdayPlaylist('2026-W41',[]);
assert.equal(bank.commitSaturdayPlaylist(gift),true);
const receipt=store.get(bank.historyKey);
const changed={...gift,ids:gift.ids.slice(),tracks:gift.tracks.slice()};
changed.ids[0]='track-25'; changed.tracks[0]={...signals['track-25'],trackId:'track-25'};
assert.equal(bank.commitSaturdayPlaylist(changed),false,'cannot overwrite an existing weekly selection');
assert.equal(store.get(bank.historyKey),receipt);
({bank,store}=boot(signals)); gift=bank.buildSaturdayPlaylist('2026-W41',[]);
// Browser quota failures must not report that the reserve was consumed durably.
const quotaContext={window:null,Date,console,Set,localStorage:{getItem:()=>null,setItem:()=>{throw Error('quota')}},MUSIC_DNA_LEARNING:{read:()=>({signals})},MUSIC_DNA_SEQUENCER:{sequence:rows=>rows.slice()}};
quotaContext.window=quotaContext;vm.createContext(quotaContext);vm.runInContext(source,quotaContext);
assert.equal(quotaContext.MUSIC_DNA_POSITIVE_BANK.commitSaturdayPlaylist(gift),false);

console.log('PASS: recording aliases, exact Spotify URLs, recording consumption across reimports, legacy delivery IDs, FIFO and historical preservation.');
