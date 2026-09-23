// Run from the repository root: node test/relation-registry-health.cjs
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const source = fs.readFileSync(path.join(__dirname, "music-dna-relation-registry-v1.js"), "utf8");
const context = { window: {} };
vm.runInNewContext(source, context);
const r = context.window.MUSIC_DNA_RELATION_REGISTRY_V1, a = r.api;
const snapshot = JSON.stringify(r);
for (const base of ["ghost", "shiraz_lane"]) {
  const audit = a.integrityReport(base);
  assert.equal(audit.errors, 0, JSON.stringify(audit.findings));
  assert.equal(audit.warnings, 0, JSON.stringify(audit.findings));
}
assert.equal(a.integritySelfTest().pass, true);
assert.equal(JSON.stringify(r), snapshot, "Self-test must leave no probe in the registry");
const ids = new Set(r.relations.map(x => x.id));
assert.equal(ids.size, r.relations.length);
for (const rel of r.relations) {
  assert.ok(r.entities[rel.from] && r.entities[rel.to], rel.id);
  for (const id of rel.evidence) assert.ok(r.sources[id], id);
}
const maiden = a.traceStory("ghost", "iron_maiden");
const cover = maiden.items.find(x => x.relations.includes("rel-ghost-maiden-phantom-cover"));
assert.ok(cover && cover.relationRecords.length === 1, "Phantom cover must resolve to an atomic fact");
assert.ok(cover.relationRecords[0].evidence.includes("rollingstone_uk_phantomime_2023"));
for (const fn of [a.relationshipBundles, a.quickFactBundles]) {
  const bundles = fn("ghost");
  assert.equal(new Set(bundles.map(x => x.entityId)).size, bundles.length);
}
assert.equal(a.storyFor("ghost", "voivod"), null, "Untold stock must remain untold");
for (const discovery of r.discoveries) {
  for (const id of discovery.relations) assert.ok(ids.has(id), id);
  for (const id of discovery.evidence) assert.ok(r.sources[id], id);
}
const state = a.createDiscoveryState();
const first = a.discoveryQueueForState("ghost", state);
assert.equal(JSON.stringify(first), JSON.stringify(a.discoveryQueueForState("ghost", state)));
assert.equal(new Set(first.map(x => x.counterpart)).size, first.length);
assert.equal(first[0].id, "disc-ghost-voivod-identity");
a.markDiscovery(state, first[0].id, "shown", "test-shown");
assert.ok(!a.discoveryQueueForState("ghost", state).some(x => x.id === first[0].id));
a.markDiscovery(state, first[0].id, "read", "test-read");
assert.equal(state[first[0].id].shownAt, "test-shown");
assert.equal(state[first[0].id].readAt, "test-read");
assert.ok(!a.discoveryQueueForState("ghost", state).some(x => x.id === first[0].id));
assert.equal(JSON.stringify(r), snapshot, "Reading state must not alter factual knowledge or stock");
assert.equal(a.createDiscoveryState()[first[0].id].status, "unread", "No persistent user state");

const shiraz = a.relationshipBundles("shiraz_lane");
assert.equal(shiraz.length, 2, "Five facts must form two counterpart dossiers");
const producer = shiraz.find(b => b.entityId === "per_aldeheim");
assert.equal(producer.entity.type, "person");
assert.equal(producer.relations.length, 3);
assert.equal(producer.evidence.length, 2, "Two interviews, not one source per fact");
assert.equal(shiraz.find(b => b.entityId === "lordi").relations.length, 2);
assert.equal(a.quickFactBundles("shiraz_lane").length, 2);
assert.equal(a.storyBundle("shiraz_lane", "per_aldeheim").mode, "story");
assert.equal(a.storyBundle("shiraz_lane", "lordi").mode, "facts");
assert.equal(a.storyCoverage("shiraz_lane", "per_aldeheim").complete, true);
assert.equal(a.playlistCandidates("shiraz_lane").length, 0, "Production, touring and listening are not influence claims");
const shirazDiscoveries = a.discoveriesFor("shiraz_lane");
assert.equal(shirazDiscoveries.length, 4);
for (const d of shirazDiscoveries) {
  for (const rid of d.relations) {
    const rel = r.relations.find(x => x.id === rid);
    assert.equal(rel.from, d.base);
    assert.equal(a.counterpartFor(d.base, rel), d.counterpart);
  }
  for (const sid of d.evidence) {
    assert.ok(d.relations.some(rid => r.relations.find(x => x.id === rid).evidence.includes(sid)), "Discovery source must support a linked fact: " + d.id);
  }
}
const reading = a.createDiscoveryState();
const ghostQueue = JSON.stringify(a.discoveryQueueForState("ghost", reading));
const shownIds = new Set();
while (true) {
  const queue = a.discoveryQueueForState("shiraz_lane", reading);
  assert.equal(JSON.stringify(queue), JSON.stringify(a.discoveryQueueForState("shiraz_lane", reading)));
  assert.equal(new Set(queue.map(d => d.counterpart)).size, queue.length);
  if (!queue.length) break;
  for (const d of queue) {
    assert.equal(d.base, "shiraz_lane");
    assert.ok(!shownIds.has(d.id), "A read discovery must not reappear");
    shownIds.add(d.id);
    a.markDiscovery(reading, d.id, "shown", "test-shown");
    a.markDiscovery(reading, d.id, "read", "test-read");
  }
}
assert.equal(shownIds.size, 4);
assert.equal(JSON.stringify(a.discoveryQueueForState("ghost", reading)), ghostQueue, "Reading Shiraz must not consume Ghost discoveries");
assert.equal(JSON.stringify(r), snapshot, "Cross-world reading must not mutate knowledge");
assert.equal(a.discoveryStock("shiraz_lane").total, 4, "Knowledge stock remains available");
assert.equal(a.discoveryQueueForState("shiraz_lane", a.createDiscoveryState()).length, 2, "Fresh state is independent");


// Completed stories consume only their explicitly reviewed discoveries.
const storyState = a.createDiscoveryState();
const ghostBeforeStory = JSON.stringify(a.discoveryQueueForState("ghost", storyState));
a.markDiscovery(storyState, "disc-shiraz-per-return", "shown", "earlier-shown");
const told = a.markStoryRead(storyState, "shiraz_per_aldeheim", "completed");
assert.equal(JSON.stringify(told), JSON.stringify(["disc-shiraz-per-two-roles", "disc-shiraz-per-return"]));
assert.equal(storyState["disc-shiraz-per-return"].shownAt, "earlier-shown");
for (const id of told) {
  assert.equal(storyState[id].status, "read");
  assert.equal(storyState[id].readAt, "completed");
}
for (const d of a.discoveriesFor("shiraz_lane", {counterpart:"lordi"})) {
  assert.equal(storyState[d.id].status, "unread");
}
assert.equal(JSON.stringify(a.discoveryQueueForState("shiraz_lane", storyState).map(d=>d.id)), JSON.stringify(["disc-shiraz-lordi-tour"]));
assert.equal(JSON.stringify(a.discoveryQueueForState("ghost", storyState)), ghostBeforeStory);
const afterStory = JSON.stringify(storyState);
a.markStoryRead(storyState, "shiraz_per_aldeheim", "reread");
assert.equal(JSON.stringify(storyState), afterStory, "Rereading must preserve first-read timestamps");
assert.equal(a.markStoryRead(storyState, "ghost_abba").length, 0, "Legacy stories without coverage must not infer it");
assert.equal(JSON.stringify(storyState), afterStory);
assert.throws(()=>a.markStoryRead(storyState, "__unknown_story__"), /Unknown story/);
assert.equal(JSON.stringify(storyState), afterStory);
assert.equal(JSON.stringify(r), snapshot, "Story reading changes presentation state only");

function isolatedRegistry() {
  const fixture = {window:{}};
  vm.runInNewContext(source, fixture);
  return fixture.window.MUSIC_DNA_RELATION_REGISTRY_V1;
}
// Even a new finding with exactly the same relation/source IDs stays unread unless declared.
const fixture = isolatedRegistry();
fixture.discoveries.push({
  ...fixture.discoveries.find(d=>d.id==="disc-shiraz-per-return"),
  id:"__untold_same_evidence__"
});
const fixtureState = fixture.api.createDiscoveryState();
fixture.api.markStoryRead(fixtureState, "shiraz_per_aldeheim", "completed");
assert.equal(fixtureState.__untold_same_evidence__.status, "unread");
assert.ok(fixture.api.discoveryQueueForState("shiraz_lane", fixtureState).some(d=>d.id==="__untold_same_evidence__"));

// Bad metadata must fail the audit and leave all reading state untouched.
for (const damage of [
  x=>x.stories.shiraz_per_aldeheim.toldDiscoveryIds.push("__missing_discovery__"),
  x=>x.stories.shiraz_per_aldeheim.toldDiscoveryIds.push("disc-ghost-voivod-identity"),
  x=>x.stories.shiraz_per_aldeheim.toldDiscoveryIds.push("disc-shiraz-lordi-tour"),
  x=>x.stories.shiraz_per_aldeheim.toldDiscoveryIds.push("disc-shiraz-per-return"),
  x=>{x.stories.shiraz_per_aldeheim.toldDiscoveryIds="not-an-array";},
  x=>{x.stories.shiraz_per_aldeheim.items=x.stories.shiraz_per_aldeheim.items.slice(1);},
  x=>{x.stories.shiraz_per_aldeheim.items.forEach(i=>{i.evidence=[];});}
]) {
  const broken = isolatedRegistry();
  damage(broken);
  const untouched = broken.api.createDiscoveryState();
  const saved = JSON.stringify(untouched);
  assert.throws(()=>broken.api.markStoryRead(untouched,"shiraz_per_aldeheim","bad"));
  assert.equal(JSON.stringify(untouched), saved, "No partial consumption on invalid story coverage");
  const report = broken.api.integrityReport("shiraz_lane");
  assert.equal(report.pass, false);
  assert.ok(report.findings.some(f=>f.code==="story-invalid-discovery-coverage"));
}

console.log("PASS: audit 0 errors / 0 warnings; self-test non-persistent; atomic trace; unique counterparts including persons; untold stock; deterministic queues; cross-world state isolation; explicit story coverage; atomic validation; no false influence candidates.");
