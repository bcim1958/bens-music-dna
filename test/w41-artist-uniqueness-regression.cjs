const fs = require('fs');
const vm = require('vm');
const path = require('path');

const root = __dirname;
const daily = fs.readFileSync(path.join(root, 'daily.html'), 'utf8');
const giftPage = fs.readFileSync(path.join(root, 'zaterdagcadeau.html'), 'utf8');

function storage() {
  const values = new Map();
  return {
    getItem: key => values.has(key) ? values.get(key) : null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: key => values.delete(key),
    key: index => Array.from(values.keys())[index] || null,
    get length() { return values.size; }
  };
}

function load(file, context) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
}

const localStorage = storage();
const signals = {};
const artists = [
  'TOWER', 'TOWER', 'TOWER',
  'Tanith', 'Tanith', 'Tanith',
  ...Array.from({ length: 25 }, (_, i) => `Unieke artiest ${i + 1}`)
];
artists.forEach((artist, i) => {
  const id = `positive-${String(i + 1).padStart(2, '0')}`;
  signals[id] = {
    rating: 'goed',
    weight: 1,
    source: 'reserve',
    artist,
    title: `Track ${i + 1}`,
    ratedAt: `2026-10-${String(1 + i).padStart(2, '0')}T00:00:00.000Z`,
    spotifyUrl: `https://open.spotify.com/track/${String(i + 1).padStart(22, '0')}`,
    spotifyResolvedExact: true,
    styles: ['Hard Rock'],
    dnaRoute: ['Hard Rock']
  };
});

const context = vm.createContext({
  console,
  Date,
  JSON,
  Map,
  Set,
  window: null,
  localStorage,
  MUSIC_DNA_LEARNING: { read: () => ({ signals }) },
  MUSIC_DNA_SEQUENCER: { sequence: rows => rows.slice() }
});
context.window = context;
load('music-dna-positive-bank-v1.js', context);

const ids = Object.keys(signals);
const gift = context.MUSIC_DNA_POSITIVE_BANK.buildSaturdayPlaylist('2026-W41', ids);
const chosenArtists = gift.tracks.map(track => track.artist);
const normalized = chosenArtists.map(artist => artist.toLowerCase());

const checks = {
  saturdayHas21Tracks: gift.size === 21 && gift.full === true,
  saturdayHas21UniqueArtists: new Set(normalized).size === 21 && gift.artistUnique === true,
  towerOnlyOnce: normalized.filter(artist => artist === 'tower').length === 1,
  tanithOnlyOnce: normalized.filter(artist => artist === 'tanith').length === 1,
  duplicateArtistsReported: gift.blockedDuplicateArtist.length === 4,
  dailyReadsReserveArtists: /reserveSelectionKey\(day\).*retiredIds/.test(daily),
  dailyPassesWeekArtists: /excludeArtists:avoid/.test(daily),
  oldThresholdCopyGone: !daily.includes('voorraad onder 21') && !daily.includes('voorraad staat nog onder 21'),
  w40ControlsHidden: /style="display:none;margin:18px 20px" id="w40-export-panel"/.test(daily),
  giftRejectsDuplicateArtists: /reason:'artist'/.test(giftPage)
};

const failed = Object.entries(checks).filter(([, pass]) => !pass).map(([name]) => name);
const result = {
  suite: 'W41 week-wide artist uniqueness',
  pass: failed.length === 0,
  checks,
  failed,
  selected: gift.size,
  uniqueArtists: new Set(normalized).size,
  blockedDuplicateArtist: gift.blockedDuplicateArtist
};

console.log(JSON.stringify(result, null, 2));
if (failed.length) process.exitCode = 1;
