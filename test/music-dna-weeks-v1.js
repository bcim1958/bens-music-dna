const MUSIC_DNA_WEEKS = (() => {
  const weeks = [
    {
      key: '2026-W36',
      yearLabel: '2026',
      weekLabel: 'W36',
      display: '2026 · W36',
      start: new Date(2026, 7, 30),
      end: new Date(2026, 8, 6),
      startText: 'zondag 30 augustus',
      endText: 'zaterdag 5 september 2026',
      candidateGlobal: 'MUSIC_DNA_W36_CANDIDATES',
      candidateFile: 'music-dna-candidates-w36-v1.js',
      ready: true
    },
    {
      key: '2026-W37',
      yearLabel: '2026',
      weekLabel: 'W37',
      display: '2026 · W37',
      start: new Date(2026, 8, 6),
      end: new Date(2026, 8, 13),
      startText: 'zondag 6 september',
      endText: 'zaterdag 12 september 2026',
      candidateGlobal: 'MUSIC_DNA_W37_CANDIDATES',
      candidateFile: 'music-dna-candidates-w37-v1.js',
      ready: false
    }
  ];

  function get(key) {
    return weeks.find(w => w.key === key) || null;
  }

  function resolve(now) {
    const ready = weeks.filter(w => w.ready);
    const active = ready.find(w => now >= w.start && now < w.end);
    if (active) return active;
    if (now < ready[0].start) return ready[0];
    return ready.filter(w => now >= w.start).slice(-1)[0] || ready[0];
  }

  return { weeks, get, resolve };
})();
