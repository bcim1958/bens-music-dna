# Enrichment proof — 2026-09-03

## Goal
Test whether Mood, Theme, people, credits and relationship data are realistic enough to become first-class Music DNA layers without first enriching all 3,480 Master tracks.

## Method
Use representative Master artists across Ben's major musical territories and periods, including melodic/hard rock, metal, prog, punk/new wave, goth/alternative and grunge. Check artist-level AllMusic entity pages and selected album/song pages for semantic and graph fields.

Representative artists checked include:
- H.E.A.T
- Ghost
- Rush
- Genesis
- The Cure
- Buzzcocks
- Ratt
- Sweet
- Uriah Heep
- Metallica
- Nirvana
- Siouxsie and the Banshees
- Tubeway Army
- Emerson, Lake & Palmer
- Iron Maiden

## Result 1 — Artist Mood/Theme is genuinely useful
Artist-level Mood and Theme sets are present for many representative artists and are sufficiently differentiated to create meaningful browsing and surprise pools.

Examples observed:
- H.E.A.T: Dramatic, Intense, Passionate, Theatrical, Epic, Energetic; Themes include Motivation, Empowerment, Victory.
- Ghost: strong Dark/Macabre/Epic/Nocturnal/Spooky spectrum and a broad Theme set including Religion, Scary Music, Reflection, Fantasy, Late Night and Halloween.
- Ratt: Aggressive, Rebellious, Brash, Sleazy, Rousing; Themes include Partying/TGIF.
- Sweet: Playful, Swaggering, Campy, Energetic, Fun, Rousing; Themes include Hanging Out, Late Night and Guys Night Out.
- Uriah Heep: Ambitious, Elaborate, Theatrical, Dramatic, Rousing, Nocturnal; Themes include Hanging Out, Late Night and Reflection.
- Metallica: Aggressive, Fierce, Menacing, Epic, Intense, Theatrical; Themes include Maverick, Revolution, Empowerment, Road Trip and Victory.
- Emerson, Lake & Palmer: Dramatic, Elaborate, Epic, Theatrical, Cerebral, Complex; Themes include Adventure, Imagination, Introspection and Science.
- The Cure, Nirvana, Siouxsie and the Banshees, Rush and Tubeway Army similarly show highly distinctive Mood signatures.

Conclusion: Mood DNA is not a cosmetic label layer. It creates real cross-genre routes that Genre alone cannot express.

## Result 2 — Theme is valuable but typically narrower
Theme lists are often shorter than Mood lists and may be absent on some entity/album pages. This is not a defect; it means Theme should be treated as a sparse semantic relation rather than a required field.

Product implication:
- never require every artist/album to have a Theme;
- expose Theme filters only when the eligible pool is large enough;
- allow one entity to have zero, one or many Themes.

## Result 3 — scope must be stored explicitly
AllMusic exposes semantic data at multiple levels:
- artist Moods/Themes;
- album Moods/Themes;
- in some cases song Moods/Themes.

These are not interchangeable.

Hard rule:
> An album-level Mood/Theme may not silently become a track-level fact.

The enrichment relation must therefore always store its `scope_entity_type` and source entity.

## Result 4 — people and credits are strong graph material
Representative pages expose group members and credits. Album pages can expose producers, mixers, composers, performers and other roles. These relations naturally power routes such as:
- H.E.A.T -> Erik Grönwall -> Skid Row;
- artist -> member -> other band;
- album -> producer -> other albums/artists;
- song -> composer -> other work.

These are graph edges, not Playlist columns.

## Result 5 — identity resolution is mandatory
Name collisions and alternate artist pages exist. `Ghost` is the clearest known example; other artist names can also be ambiguous.

Bulk enrichment must not use artist display name as the primary key.

Minimum reliable identity model:
- internal Music DNA entity id;
- normalized display name;
- entity type;
- Spotify artist id where available;
- AllMusic id where available;
- MusicBrainz id where available;
- identity confidence/status;
- provenance for the match.

## Result 6 — Spotify can be the listening proof layer
The Master already has 100% Spotify Track URI coverage. That allows semantic information to end in listening rather than reading.

Product rule remains:
> Where Music DNA makes a musical claim, allow Ben to hear it with one tap whenever possible.

## Coverage conclusion
The representative proof is strong enough to continue with a formal enrichment layer, but not strong enough to justify pretending that Mood/Theme/credits have uniform Master-wide coverage.

Therefore:
- **YES**: make Mood/Theme/people/credits part of the architecture now;
- **YES**: use them when present;
- **NO**: block `Verras me!` until every artist is enriched;
- **NO**: bulk-copy editorial text into the Master;
- **NO**: infer lower-level semantic truth from a higher-level tag without scope.

## Recommended rollout
1. Build a canonical entity registry with stable IDs.
2. Enrich artist-level Mood/Theme first because it creates the broadest immediate discovery value.
3. Add album Mood/Theme as a separate scoped relation.
4. Add member/person edges and high-value credit roles.
5. Add related/influence edges with source provenance.
6. Expand coverage incrementally; expose filters only when eligible-pool size and data quality make them useful.

## Product consequence for Verras me!
`Verras me!` can launch on existing Master dimensions immediately and become progressively richer:

**v1:** All / Genre / Style / country / period / DNA status.

**v2:** Mood / Theme where available.

**v3:** via people / producers / relations / similarity / personal taste memory.

This preserves the core principle: much choice is available, but none of it is compulsory.
