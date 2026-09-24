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
    assert.match(elements.view.innerHTML, /nog geen artiesten/);
    assert.equal(buttons().length, 0, 'No invented graph links');
    assert.ok(decode(elements.crumbs.innerHTML).includes(world.replace(/&/g, '&')));
    run('back()');
    assert.equal(run('path.at(-1).label'), group.name);
  }
  run('back()');
  assert.equal(buttons().length, 11);
}
assert.equal(count, 42);
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
assert.equal(JSON.stringify(registry), snapshot, 'Navigation must not mutate Registry knowledge');
console.log('PASS: 11 groups, all 42 visible worlds, empty group, actual button handlers, breadcrumbs/back, dynamic data and escaping, no fabricated links, four existing entries and unrestricted graph walking.');
