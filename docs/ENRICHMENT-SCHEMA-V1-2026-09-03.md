# Music DNA enrichment schema v1 — 2026-09-03

## Goal
Create one reliable enrichment/graph model around Master 1.7 without turning the Playlist sheet into a monster spreadsheet or creating manually duplicated music worlds.

## Layer model
### 1. MASTER
Existing track/release substrate and personal DNA relationships.

Owns:
- Spotify Track URI
- track
- album
- artist credit
- release/year/decade
- country/region
- AllMusic taxonomy already curated in Master
- DNA playlist/use relations
- current fixed-underlayer fields

### 2. ENTITY REGISTRY
Canonical identities for objects that can be linked.

Minimum entity types:
- artist
- person
- album
- track
- label
- producer/credit-person where represented as person

Required fields:
- `entity_id` — internal immutable Music DNA id
- `entity_type`
- `display_name`
- `canonical_name`
- `spotify_id` nullable
- `allmusic_id` nullable
- `musicbrainz_id` nullable
- `master_key` / source join reference where applicable
- `identity_status` — verified / probable / unresolved
- `identity_confidence` — high / medium / low
- `identity_source`
- `checked_at`

Display name is never a safe primary key.

### 3. SEMANTIC ENRICHMENT
Scoped tags such as Mood and Theme.

Relation fields:
- `relation_id`
- `subject_entity_id`
- `scope_entity_type` — artist / album / track
- `relation_type` — mood / theme
- `value_id` — canonical Mood/Theme vocabulary id
- `value_label`
- `source_name`
- `source_url`
- `source_entity_id` where available
- `source_checked_at`
- `confidence`
- `status` — active / disputed / superseded / removed
- `notes` nullable

Hard rule: scope is never inferred downward. Artist != album != track.

### 4. KNOWLEDGE GRAPH EDGES
Durable object-to-object relations.

Fields:
- `edge_id`
- `from_entity_id`
- `relation_type`
- `to_entity_id`
- `role` nullable
- `start_date` nullable
- `end_date` nullable
- `source_name`
- `source_url`
- `checked_at`
- `confidence`
- `status`
- `notes` nullable

Initial high-value relation types:
- member_of
- has_member
- former_member_of
- associated_with
- collaborated_with
- influenced_by
- followed_by / influenced
- similar_to
- produced
- produced_by
- mixed_by
- composed_by
- performed_on
- released_by_label
- album_contains_track
- track_on_album

Inverse edges may be generated rather than manually duplicated where safe.

### 5. LIVING/CURRENT LAYER
Time-sensitive facts are not durable Master truth.

Examples:
- tour dates
- setlists
- current news
- recent interviews
- current lineup claims not yet confirmed durably
- new releases before reconciliation

Required fields include source and retrieval/publication date plus expiry/refresh logic where relevant.

### 6. PERSONAL MEMORY
Ben-specific behavioral state remains separate from music facts.

Examples:
- RAAK / GOED / NOG EENS / NEE
- date rated
- offered before
- last visited artist
- recent `Verras me!` selections
- Second Chance state
- listening/interaction signals if later accepted

Ratings are immutable historical events; current interpretation can be derived but history must not be overwritten.

## Provenance rule
Every enrichment/graph relation must be explainable.

Minimum answer to `Waarom zie ik dit?`:
- which source asserted the relation;
- what entity/scope it applies to;
- when it was checked;
- whether Music DNA considers the identity/relation verified.

## Eligible-pool rule for choice surfaces
A choice/filter is only presented when:
1. its underlying data has adequate quality;
2. the resulting eligible pool is large enough to be enjoyable;
3. placeholder/unknown values are excluded from semantic counts;
4. the UI can explain the choice without exposing data-engine complexity.

Exact pool thresholds may be tuned by experience, but the architecture must compute them rather than hard-code visible options that return empty results.

## `Verras me!` selection contract
Input may contain zero or more constraints:
- genre/structure/style
- country/region
- year/period/decade
- DNA status/relation
- Mood
- Theme
- taste rating
- later graph constraints

Default: no constraint = whole eligible artist world.

Selection should be weighted rather than naive uniform randomness:
- suppress very recent repeats;
- avoid repeated selection of the same artist-credit identity;
- retain a genuine chance for long-tail entities;
- optionally weight less-visited entities upward;
- never select unresolved/unsafe identities for graph-dependent routes;
- return an explanation trace of which constraints and relations produced the result.

The selection trace powers `Waarom deze?`.

## Spotify listening contract
Every selected artist should resolve, where possible, to at least one contextual Spotify entry from the existing Master:
- a Master track by that artist;
- preferably a representative/known track when a curated or reliable rule exists;
- never invent a Spotify link from text alone.

Later, artist/album Spotify IDs can broaden this beyond the track URI already in Master.

## App-serving layer
The UI should consume generated normalized JSON/data services, not parse the Excel workbook directly in the browser.

Proposed generated views:
- `artists`
- `tracks`
- `albums`
- `artist_master_anchors`
- `semantic_relations`
- `graph_edges`
- `surprise_filter_facets`
- `surprise_eligible_artists`

These are derived outputs. Master/enrichment/graph remain source layers.

## Why this schema
It allows the same data to power:
- rich artist worlds
- search in my music world
- Verras me!
- Mood DNA
- Theme DNA
- Meer zoals...
- people/producer routes
- why-this-connection explanations
- context Spotify listening

One music world, many routes through it.
