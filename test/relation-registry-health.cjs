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

console.log("PASS: audit 0 errors / 0 warnings; self-test non-persistent; atomic trace; unique counterparts including persons; untold stock; deterministic queues; cross-world state isolation; no false influence candidates.");
