(function () {
  'use strict';
  // The map is an entrance, not a new family of Registry graph edges.
  window.musicDnaGenreArtists = function (registry, data, groupId, worldId) {
    const group = registry.api.explorerGenreDnaGroup(groupId);
    const world = group && group.worlds.find(w => w.id === worldId);
    if (!world) return {artists: [], unresolved: [], evidence: []};
    const evidence = ((data && data.memberships && data.memberships[world.name]) || []).filter(x => x && x.artist && x.source && x.row > 0 && x.playlist === world.name);
    const artists = [], unresolved = [];
    for (const name of [...new Set(evidence.map(x => x.artist))]) {
      // Exact, unique identity only. Do not split composite credits or guess aliases.
      const hits = Object.entries(registry.entities).filter(([, e]) => e.type === 'artist' && e.name === name);
      if (hits.length !== 1) { unresolved.push(name); continue; }
      const [id, entity] = hits[0];
      if (!registry.api.explorerNode(id)) { unresolved.push(name); continue; }
      artists.push({id, name: entity.name, evidence: evidence.filter(x => x.artist === name)});
    }
    return {artists, unresolved, evidence};
  };
})();
