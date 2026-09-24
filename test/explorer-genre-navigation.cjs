// Run: node test/explorer-genre-navigation.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const html = fs.readFileSync(path.join(__dirname, 'music-dna-explorer-engine-v30.html'), 'utf8');
const elements = {view: {innerHTML: ''}, crumbs: {innerHTML: ''}};
const context = vm.createContext({
  window: {}, document: {getElementById: id => elements[id]},
  sessionStorage: {getItem: () => null}, scrollTo() {}, requestAnimationFrame() {}
});
for (const script of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
  const src = script[1].match(/src="([^"]+)"/);
  vm.runInContext(src ? fs.readFileSync(path.join(__dirname, src[1].split('?')[0]), 'utf8') : script[2], context);
}
const registry = context.window.MUSIC_DNA_RELATION_REGISTRY_V1;
const snapshot = JSON.stringify(registry);
const run = code => vm.runInContext(code, context);
const decode = text => text.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const buttons = (element = 'view') => [...elements[element].innerHTML.matchAll(/<button[^>]*onclick="([^"]*)"[^>]*>([\s\S]*?)<\/button>/g)].map(m => ({action: decode(m[1]), text: decode((m[2].match(/<strong>([\s\S]*?)<\/strong>/)||[])[1] || m[2].replace(/<[^>]*>/g, ''))}));
const click = label => {
  const button = buttons().find(b => b.text === label);
  assert.ok(button, 'Missing button: ' + label);
  run(button.action);
};
click('Genre →');
assert.equal(buttons().length, 11);
assert.equal(run('path.at(-1).kind'), 'explorerentry');
assert.ok(!buttons().some(b => b.text.includes('Experimental Metal')));
let count = 0;
for (const group of registry.genreDnaTaxonomy.groups) {
  click(group.name + ' →');
  assert.equal(run('path.at(-1).kind'), 'genregroup');
  assert.equal(buttons().length, group.worlds.length);
  if (!group.worlds.length) assert.match(elements.view.innerHTML, /nog niet vastgelegd/);
  for (const world of group.worlds) {
    click(world + ' →');
    count++;
    assert.equal(run('path.at(-1).kind'), 'genreworld');
    assert.equal(run('path.at(-1).label'), world);
    const mapping = run('window.musicDnaGenreArtists(RR,window.MUSIC_DNA_GENRE_MEMBERSHIPS_V1,path.at(-1).groupId,path.at(-1).id)');
    assert.equal(buttons().length, mapping.artists.length);
    if (!mapping.artists.length) assert.match(elements.view.innerHTML, /nog geen artiesten/);
    assert.ok(decode(elements.crumbs.innerHTML).includes(world.replace(/&/g, '&')));
    run('back()');
    assert.equal(run('path.at(-1).label'), group.name);
  }
  run('back()');
  assert.equal(buttons().length, 11);
}
assert.equal(count, 42);
// Real source-backed entrance reuses the existing Registry renderer and graph.
click('Classic Heavy Metal →');
click('NWOBHM DNA →');
assert.deepEqual(buttons().map(b => b.text), ['Ozzy Osbourne →']);
click('Ozzy Osbourne →');
assert.equal(run('path.at(-1).kind'), 'explorerworld');
const viaGenre = elements.view.innerHTML;
assert.ok(buttons().length > 0, 'Real artist must expose existing graph relations');
click('Voïvod →');
click('Rush →');
run('back()');
assert.equal(run('path.at(-1).kind'), 'explorerworld');
run('back()');
assert.equal(elements.view.innerHTML, viaGenre);
assert.deepEqual(buttons('crumbs').map(b => b.text.replace(/^› /, '')), ['Explorer', 'Genre', 'Classic Heavy Metal', 'NWOBHM DNA', 'Ozzy Osbourne']);
run('back()');
assert.equal(run('path.at(-1).label'), 'NWOBHM DNA');
run('openExplorerWorld("ozzy_osbourne")');
assert.equal(elements.view.innerHTML, viaGenre, 'Same artist graph regardless of entrance');
run(buttons('crumbs')[1].action);
assert.equal(buttons().length, 11);
// Ambiguous identities and duplicate source rows cannot invent extra doors.
run('RR.entities.ozzy_duplicate = {type:"artist",name:"Ozzy Osbourne"}');
assert.equal(run('window.musicDnaGenreArtists(RR,window.MUSIC_DNA_GENRE_MEMBERSHIPS_V1,"classic_heavy_metal","classic_heavy_metal__0").artists.length'), 0);
run('delete RR.entities.ozzy_duplicate');
const memberSnapshot = run('JSON.stringify(window.MUSIC_DNA_GENRE_MEMBERSHIPS_V1)');
run('window.MUSIC_DNA_GENRE_MEMBERSHIPS_V1.memberships["NWOBHM DNA"].push(...window.MUSIC_DNA_GENRE_MEMBERSHIPS_V1.memberships["NWOBHM DNA"].filter(x=>x.artist==="Ozzy Osbourne"))');
assert.equal(run('window.musicDnaGenreArtists(RR,window.MUSIC_DNA_GENRE_MEMBERSHIPS_V1,"classic_heavy_metal","classic_heavy_metal__0").artists.length'), 1);
run('window.MUSIC_DNA_GENRE_MEMBERSHIPS_V1 = ' + memberSnapshot);
// Unknown data, absent payload and unrelated labels may never fabricate membership.
assert.equal(run('window.musicDnaGenreArtists(RR,null,"classic_heavy_metal","classic_heavy_metal__0").artists.length'), 0);
assert.equal(run('window.musicDnaGenreArtists(RR,window.MUSIC_DNA_GENRE_MEMBERSHIPS_V1,"missing","missing").artists.length'), 0);
assert.equal(run('window.musicDnaGenreArtists(RR,{memberships:{"NWOBHM DNA":[{artist:"Ghost",genre:"NWOBHM DNA"}]}},"classic_heavy_metal","classic_heavy_metal__0").artists.length'), 0);
assert.equal(run('window.musicDnaGenreArtists(RR,window.MUSIC_DNA_GENRE_MEMBERSHIPS_V1,"punk_new_wave","punk_new_wave__9").unresolved.length'), 30);
assert.equal(run('window.musicDnaGenreArtists(RR,window.MUSIC_DNA_GENRE_MEMBERSHIPS_V1,"punk_new_wave","punk_new_wave__8").unresolved.length'), 30);
click('Punk & New Wave →');
click('Hardcore Punk DNA →');
const crumbs = buttons('crumbs');
assert.deepEqual(crumbs.map(x => x.text.replace(/^› /, '')), ['Explorer', 'Genre', 'Punk & New Wave', 'Hardcore Punk DNA']);
run(crumbs[1].action);
assert.equal(run('path.length'), 2);
assert.equal(buttons().length, 11);
const before = run('JSON.stringify(path)');
run('openExplorerGenreGroup("missing"); openExplorerGenreWorld("punk_new_wave", "missing")');
assert.equal(run('JSON.stringify(path)'), before);
// A new Registry group and punctuation-rich labels must work without engine edits.
registry.genreDnaTaxonomy.groups.push({id: 'test_\'"<&', name: 'Test <world> & "music"', worlds: ['New \'"<& DNA']});
run('render()');
assert.equal(buttons().length, 12);
click('Test <world> & "music" →');
click('New \'"<& DNA →');
assert.equal(run('path.at(-1).label'), 'New \'"<& DNA');
registry.genreDnaTaxonomy.groups.pop();
// Existing non-taxonomy entries and graph walking remain independent of the map.
for (const entry of ['Vrij kiezen', 'Vandaag', 'Deze week', 'Recente W-lijst']) {
  run('explorerHome()');
  click(entry + ' →');
  click('Voïvod →');
  click('Rush →');
  assert.equal(run('path.at(-1).id'), 'rush');
  run('back()');
  assert.equal(run('path.at(-1).id'), 'voivod');
}
run('openExplorerWorld("hardcore_punk")');
click('Voïvod →');
click('Rush →');
assert.equal(run('path.at(-1).id'), 'rush');
for (const name of ['explorerGenreTaxonomyRegressionSelfTest', 'explorerIntegrationSelfTest']) assert.equal(registry.api[name]().pass, true, name);
const walk = registry.api.createExplorerWalk('ozzy_osbourne');
registry.api.explorerStep(walk, 'voivod');
registry.api.explorerStep(walk, 'rush');
assert.equal(walk.trail.join('>'), 'ozzy_osbourne>voivod>rush');
assert.equal(registry.api.explorerNode('ozzy_osbourne').links[0].relationCount, 1);
assert.equal(JSON.stringify(registry), snapshot, 'Navigation must not mutate Registry knowledge');
console.log('PASS: 11 groups, all 42 visible worlds, empty group, actual button handlers, breadcrumbs/back, dynamic data and escaping, no fabricated links, four existing entries and unrestricted graph walking.');
