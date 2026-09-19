const MUSIC_DNA_WEEKS = (() => {
  const weeks = [
    {
      key: '2026-W36', yearLabel: '2026', weekLabel: 'W36', display: '2026 · W36',
      start: new Date(2026, 7, 30), end: new Date(2026, 8, 6),
      startText: 'zondag 30 augustus', endText: 'zaterdag 5 september 2026',
      candidateGlobal: 'MUSIC_DNA_W36_CANDIDATES', candidateFile: 'music-dna-candidates-w36-v1.js?v=20260912c', ready: true
    },
    {
      key: '2026-W37', yearLabel: '2026', weekLabel: 'W37', display: '2026 · W37',
      start: new Date(2026, 8, 6), end: new Date(2026, 8, 13),
      startText: 'zondag 6 september', endText: 'zaterdag 12 september 2026',
      candidateGlobal: 'MUSIC_DNA_W37_CANDIDATES', candidateFile: 'music-dna-candidates-w37-v1.js?v=20260912c', ready: true
    },
    {
      key: '2026-W38', yearLabel: '2026', weekLabel: 'W38', display: '2026 · W38',
      start: new Date(2026, 8, 13), end: new Date(2026, 8, 20),
      startText: 'zondag 13 september', endText: 'zaterdag 19 september 2026',
      candidateGlobal: 'MUSIC_DNA_W38_CANDIDATES', candidateFile: 'music-dna-candidates-w38-v1.js?v=20260913b', ready: true
    },
    {
      key: '2026-W39', yearLabel: '2026', weekLabel: 'W39', display: '2026 · W39',
      start: new Date(2026, 8, 20), end: new Date(2026, 8, 27),
      startText: 'zondag 20 september', endText: 'zaterdag 26 september 2026',
      candidateGlobal: 'MUSIC_DNA_W39_CANDIDATES', candidateFile: 'music-dna-candidates-w39-v1.js?v=20260918b', ready: true
    },
    {
      key: '2026-W40', yearLabel: '2026', weekLabel: 'W40', display: '2026 · W40',
      start: new Date(2026, 8, 27), end: new Date(2026, 9, 4),
      startText: 'zondag 27 september', endText: 'zaterdag 3 oktober 2026',
      candidateGlobal: 'MUSIC_DNA_W40_CANDIDATES', candidateFiles: ['music-dna-candidates-w40-data-1.js','music-dna-candidates-w40-data-2.js','music-dna-candidates-w40-data-3.js','music-dna-candidates-w40-staging-v1.js'], ready: true
    }
  ];
  function get(key){return weeks.find(w => w.key === key) || null;}
  function resolve(now){
    const ready=weeks.filter(w=>w.ready);
    if(!ready.length)return null;
    const active=ready.find(w=>now>=w.start&&now<w.end);
    if(active)return active;
    if(now<ready[0].start)return ready[0];
    // Safety rule: never present an expired last-ready week as if it were current.
    // A future week must be explicitly added and marked ready before it can be served.
    return null;
  }
  function status(now){
    const ready=weeks.filter(w=>w.ready),active=resolve(now);
    if(active)return {state:'ready',week:active};
    if(!ready.length)return {state:'no-ready-weeks',week:null};
    if(now<ready[0].start)return {state:'before-first-ready-week',week:ready[0]};
    return {state:'awaiting-next-week',week:null,lastReadyWeek:ready[ready.length-1]};
  }
  return {weeks,get,resolve,status};
})();
