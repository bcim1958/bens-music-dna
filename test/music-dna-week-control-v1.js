/* Music DNA: read-only review; no quotas, score changes or inferred ratings. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.MUSIC_DNA_WEEK_CONTROL = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const GROUPS = Object.freeze(['Alternative & Indie','Classic Heavy Metal','Extreme & Modern Metal','Garage Rock','Glam Rock','Hair Metal','Hard Rock & AOR','Prog & Art Rock','Progressive Metal','Psychedelic & Space Rock','Punk & New Wave']);
  const own = (x,k) => Object.prototype.hasOwnProperty.call(x,k);
  function identity(row) {
    const val = row.spotifyTrackId || row.spotifyUri || row.spotifyUrl;
    if (typeof val !== 'string') return null;
    const match = val.match(/^(?:spotify:track:|https:\/\/open\.spotify\.com\/track\/)?([A-Za-z0-9]{22})(?:\?[^\s]*)?$/);
    return match ? match[1] : null;
  }
  function rating(value) {
    const v = typeof value === 'string' ? value.trim().toUpperCase() : '';
    return ({RAAK:'positive',GOED:'positive',TERUGKOMEN:'retry',TWIJFEL:'retry',NIET:'negative',NEE:'negative'})[v] || 'unknown';
  }
  function countsSummary(counts, total) {
    const ranked = GROUPS.map(group=>({group,count:counts[group]||0})).sort((a,b)=>b.count-a.count);
    const max = ranked[0].count;
    const combined = (counts['Hard Rock & AOR']||0)+(counts['Hair Metal']||0);
    return {total, counts:{...counts}, represented:ranked.filter(x=>x.count>0).length,
      largest:ranked.filter(x=>x.count===max && max>0), topTwoCount:ranked[0].count+ranked[1].count,
      hardRockHairCount:combined, hardRockHairShare:total?combined/total:null};
  }
  function summarizeCounts(counts) {
    if (!counts || typeof counts!=='object' || Array.isArray(counts)) throw new TypeError('Expected primary-group counts');
    for (const [k,v] of Object.entries(counts)) if(!GROUPS.includes(k)||!Number.isInteger(v)||v<0) throw new TypeError('Invalid primary-group count: '+k);
    const full=Object.fromEntries(GROUPS.map(g=>[g,counts[g]||0]));
    return countsSummary(full,Object.values(full).reduce((a,b)=>a+b,0));
  }
  function audit(rows, options={}) {
    if(!Array.isArray(rows)) throw new TypeError('Expected track rows');
    const expected=options.expectedSize===undefined?21:options.expectedSize;
    if(!Number.isInteger(expected)||expected<1) throw new TypeError('Invalid expectedSize');
    const counts=Object.fromEntries(GROUPS.map(g=>[g,0]));
    const issues=[],seen=new Set(), ratings={positive:0,retry:0,negative:0,unknown:0};
    let primaryKnown=0,secondaryKnown=0,albumArena=0,noveltyKnown=0;
    rows.forEach((raw,index)=>{
      const r=raw&&typeof raw==='object'?raw:{};const at=index+1;const id=identity(r);
      if(!id)issues.push({code:'identity-missing-or-invalid',position:at});
      else if(seen.has(id))issues.push({code:'duplicate-recording',position:at,spotifyTrackId:id});
      else seen.add(id);
      if(GROUPS.includes(r.primaryGenre)){counts[r.primaryGenre]++;primaryKnown++;}
      else issues.push({code:'primary-genre-unknown',position:at});
      if(Array.isArray(r.secondaryStyles)&&r.secondaryStyles.every(s=>typeof s==='string')){
        secondaryKnown++;if(r.secondaryStyles.some(s=>['album rock','arena rock'].includes(s.trim().toLowerCase())))albumArena++;
      }
      const verdict=rating(r.rating);ratings[verdict]++;
      if(verdict!=='positive')issues.push({code:'rating-'+verdict,position:at});
      if(['new-artist','unheard-track-known-artist'].includes(r.noveltyStatus))noveltyKnown++;
      else issues.push({code:r.noveltyStatus==='known-track'?'already-known-track':'novelty-unknown',position:at});
    });
    if(rows.length!==expected)issues.push({code:'week-size',expected,actual:rows.length});
    const summary=countsSummary(counts,rows.length);
    return {version:1,scope:'positive-week-selection',...summary,
      coverage:{identity:seen.size,primaryGenre:primaryKnown,secondaryStyles:secondaryKnown,novelty:noveltyKnown,total:rows.length},
      unclassified:rows.length-primaryKnown,ratings,
      albumArena:{observedCount:albumArena,labelledTracks:secondaryKnown,complete:secondaryKnown===rows.length,share:secondaryKnown===rows.length&&rows.length?albumArena/rows.length:null},
      issues, dataChecksPass:issues.length===0, tasteBalanceVerdict:'not-determined',
      note:'Concentration is descriptive. No target percentages, quotas, or automatic publication decision.'};
  }
  function compareFlow(before,after) {
    if(!Array.isArray(before)||!Array.isArray(after))throw new TypeError('Expected before/after rows');
    const multiset=rows=>{const counts=new Map();let invalid=0;for(const r of rows){const id=identity(r||{});if(!id)invalid++;else counts.set(id,(counts.get(id)||0)+1);}return {counts,invalid};};
    const a=multiset(before),b=multiset(after);const removed=[],added=[];
    for(const [id,n] of a.counts)for(let i=b.counts.get(id)||0;i<n;i++)removed.push(id);
    for(const [id,n] of b.counts)for(let i=a.counts.get(id)||0;i<n;i++)added.push(id);
    return {sameRecordings:!a.invalid&&!b.invalid&&!removed.length&&!added.length&&before.length===after.length,
      invalidBefore:a.invalid,invalidAfter:b.invalid,removed,added,
      duplicatesBefore:[...a.counts].filter(x=>x[1]>1).map(x=>x[0]),duplicatesAfter:[...b.counts].filter(x=>x[1]>1).map(x=>x[0])};
  }
  // Explicit sidecar annotations only: never infer primary genre or approval from raw style tags.
  function auditSelected(selected, annotations={}, signals={},options={}) {
    if(!Array.isArray(selected))throw new TypeError('Expected selector rows');
    const rows=selected.map(row=>{
      const t=row.track||row;const id=row.id;const a=own(annotations,id)?annotations[id]:{};const s=own(signals,id)?signals[id]:{};
      const spotify=t.spotify&&t.spotify.resolvedExact===true?t.spotify.id:null;
      return {spotifyTrackId:a.spotifyTrackId||spotify,spotifyUrl:a.spotifyUrl||t.spotifyUrl,
        primaryGenre:a.primaryGenre,secondaryStyles:a.secondaryStyles,
        rating:a.rating===undefined?s.rating:a.rating,noveltyStatus:a.noveltyStatus};
    });
    return audit(rows,options);
  }
  return Object.freeze({version:1,groups:GROUPS,audit,auditSelected,compareFlow,summarizeCounts});
});
