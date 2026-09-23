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
const audit = a.integrityReport("ghost");
assert.equal(audit.errors, 0, JSON.stringify(audit.findings));
assert.equal(audit.warnings, 0, JSON.stringify(audit.findings));
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
console.log("PASS: audit 0 errors / 0 warnings; self-test non-persistent; atomic trace; unique counterparts; untold stock; deterministic queue; separate reading state.");
