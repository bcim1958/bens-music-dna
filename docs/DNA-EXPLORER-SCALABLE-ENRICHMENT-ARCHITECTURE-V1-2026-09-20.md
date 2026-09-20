# DNA Explorer — scalable enrichment architecture v1 — 2026-09-20

## Status
The Ghost click-session through Explorer v5 is accepted as a successful design/learning proof. Do not keep expanding that single prototype merely to prove more doors can exist.

## Product principle
DNA Explorer is not primarily a lookup database. It is a guided wandering system in which information is encountered, explained in Dutch, connected, and turned into new doors.

## The reusable enrichment loop
1. ANCHOR — artist, person, track, album, place, year/era, style/theme, source/story.
2. EVIDENCE — existing Music DNA data, a durable reference source, or a dated live/editorial source.
3. EDITORIAL LAYER — concise Dutch explanation of why this is interesting. For an article/interview: summarize, do not merely link out.
4. RELATIONS — extract explicit typed connections, never one opaque similarity score.
5. DOORS — turn the strongest connections into clickable next steps.
6. WANDER — user chooses a door or asks Explorer to choose an interesting turn.
7. GROW ON USE — enrich the newly reached node when useful; do not prebuild the whole music universe.

## Relation types
artist/person membership; documented influence; songwriting/compositional affinity; musical similarity; Music DNA relation; track/album/artist containment; recording/production/credit; place; time/era; genre/style; mood/theme; source/story mention; live/tour/setlist; unexpected editorial connection.

Each claim keeps its own evidence even when one relation has multiple types.

## Minimum mature artist node
- identity + concise Dutch orientation
- why it is in Ben's world, when grounded
- Verken <artist>
- Bands/artiesten zoals <artist>
- Kies een interessante afslag voor mij
- typed outgoing relations
- provenance/source metadata
- semantic return path

Nodes may be sparse. Unknown is allowed.

## Source-story contract
- publisher + date + source URL
- Dutch title/deck
- approximately 30–60 seconds first-read summary
- Wat neem je hiervan mee?
- extracted people/artists/tracks/albums/concepts as doors
- original source link last
- preserve attribution for claims from the source
- no invented quotes, events, credits or causal relationships

## Door ranking
Do not show every known edge. Rank a small varied set by grounded relevance, connection to existing Music DNA, novelty, relation-type diversity, narrative value, and avoidance of repeating the previous surprise relation type. This is editorial selection, not a universal musical-truth score.

## Surprise engine
Kies een interessante afslag voor mij chooses only among grounded doors, preferring a different relation type, a node not just visited, and a balance between familiar DNA and novelty. Randomness may choose among eligible doors; it must not invent doors.

## Growth strategy
Explorer should be lazy-enriched: start from strong existing Music DNA anchors; enrich only the neighborhood needed for the current journey; cache reusable nodes/relations/summaries; allow later sources to add edges without rewriting the node; keep time-sensitive material separately dated.

This makes the potential graph effectively very large without requiring a giant up-front database project.

## Conceptual data shape
node: id, type, name, orientationNL, musicDnaEvidence[], relations[], stories[], freshness
relation: from, to, types[], explanationNL, evidence[{sourceId, scope, date}], confidence
story: sourceId, publisher, date, url, titleNL, summaryNL, takeawayNL, extractedDoors[]

## Guardrails
- playlist membership can prove membership, not causal influence
- geographic adjacency is not musical similarity
- current facts get source + date
- real artist imagery only
- article summaries are paraphrases, not copied text
- original source remains reachable
- playful narration is welcome, fabricated concrete facts are not
- semantic backtracking prevents the user from becoming lost
- W39 production remains untouched

## Next implementation milestone
Do not manually build dozens of new HTML artist screens.
Build a small data-driven Explorer renderer that can render artist nodes, person nodes, source-story nodes, relation doors, breadcrumb/history, and surprise selection.
Seed it with the already proven Ghost / Forge / ABBA / Black Sabbath / Sweden / H.E.A.T / Erik Grönwall / Skid Row neighborhood.
If that renderer reproduces the accepted v5 experience from structured data, Explorer has moved from prototype to reusable system.