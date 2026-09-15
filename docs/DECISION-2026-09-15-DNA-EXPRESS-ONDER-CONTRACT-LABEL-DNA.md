# DNA EXPRESS — ONDER CONTRACT / LABEL DNA

Date: 2026-09-15
Status: ACCEPTED EDITORIAL DIRECTION / SNOEPTROMMEL + DEEP-DIVE CANDIDATE

## Idea
A record label is not merely administrative metadata. Labels can form meaningful networks around artists: shared A&R, producers, studios, engineers, mastering, artwork/creative teams, management/booking relationships, promotion channels, touring networks, scene identity and audience expectations.

DNA EXPRESS may therefore use **ONDER CONTRACT** as a rotating Snoeptrommel rubric and, when the evidence is rich enough, expand the finding into a larger **LABEL DNA** feature or DIEPTEBOM.

## Core question
**What do artists X, Y and Z have in common besides being signed to the same label — and is any alleged musical or quality connection actually supported by evidence?**

## Possible editorial forms
### ONDER CONTRACT
Short factual item: label + a few relevant artists + one interesting commonality or contrast.

### LABEL DNA
Deeper graph/story: how a label's roster, people and working practices may create a recognisable scene, sound, aesthetic or quality reputation.

### NIEUW OP HET LABEL
A relevant new signing, especially if it creates an unexpected Music-DNA connection.

### LABELGENOTEN
Two or more surprising artists sharing a label in the same period or territory.

### HET LABEL ACHTER DE PLAAT
One release and what the label actually contributed: A&R, producer choice, studio/resources, visual direction, distribution/promotion etc., only where documented.

## Critical distinction: contract is not causation
Never write or imply that a common label caused similar sound, atmosphere or quality merely because artists share the label.

Separate evidence layers:
1. **FACT** — artist/release was signed/licensed/distributed by label X in territory Y during period Z.
2. **SHARED INFRASTRUCTURE** — same A&R, producer, engineer, studio, mastering, artwork team, management, promoter, etc.
3. **CONTEMPORARY/INSIDER CLAIM** — credible artist/producer/A&R/critic explicitly describes a label sound, quality uplift, scene, aesthetic or working method.
4. **EDITORIAL OBSERVATION** — DNA EXPRESS notices a possible resemblance. Clearly label this as observation/question, not established fact.
5. **MUSIC-DNA SIGNAL** — Ben independently responds positively to multiple labelmates; useful as a discovery hypothesis, never proof of objective quality.

## Label relationship model
Store relationships at release/era level where possible rather than one timeless `artist -> label` field.

Suggested fields:
- artist_id
- release_id / era
- label_id
- parent_label_id / group if relevant
- imprint
- relationship_type: signed / licensed / distributed / reissue / territory partner / historical
- territory
- start_date / end_date or precision
- announcement_date
- source
- source_type
- verified_as_of
- confidence
- A&R person where documented
- shared_producer_ids
- shared_engineer_ids
- shared_studio_ids
- shared_visual_creator_ids
- notes

## Label entity fields
- canonical label name
- former/alternate names
- founded date
- founders
- headquarters/origin
- ownership history
- parent/group
- imprints/sub-labels
- genres/scenes only when supported, not guessed
- official channels
- key A&R/management contacts when public and editorially relevant
- active/inactive status + verified date
- historical roster periods
- current roster snapshot
- distribution partners
- source provenance

## Research sources
Priority depends on claim:
- official label and artist announcements;
- physical/digital release credits and liner notes;
- management/booking sources;
- label catalogues and archival catalogues;
- industry press (Billboard, Music Week, Music Business Worldwide, IQ, Pollstar etc.);
- specialist/local music press;
- interviews with artist, producer, A&R or label staff;
- Discogs/MusicBrainz as discovery/cross-check, not sole authority for consequential interpretation;
- historical trade press and magazine archives for older contracts/rosters.

## Discovery engine
The knowledge graph should be able to ask:
- Which positively rated Music-DNA artists share a label now?
- Which shared a label during a particular era?
- Which label has an unusually high concentration of Ben-positive artists?
- Are those artists also linked by producer/studio/A&R/visual creator?
- Did critics or insiders independently describe a recognisable label sound/quality/scene?
- Did an artist's reception, production resources or sound change after signing, and is that change documented rather than assumed?
- Which unfamiliar labelmate is the most promising discovery candidate for Ben?

This makes label information useful for both journalism and music discovery.

## Editorial guardrails
- distinguish label, imprint, distributor and parent company;
- distinguish current from historical relationships;
- account for territory-specific deals;
- never infer contractual status from Spotify copyright text alone;
- never turn promotional label language into independent quality judgment;
- quote/paraphrase insiders with source and date;
- preserve disagreement when critics differ about a supposed label sound or quality effect.

## Snoeptrommel rule
ONDER CONTRACT appears only when the relationship itself tells a story. A list of three labelmates without an interesting second connection is database information, not magazine copy.

## Principle
**Een contract is een feit. Een labelnetwerk is een verband. Een 'labelgeluid' is pas journalistiek interessant wanneer we kunnen laten zien waar dat verband vandaan komt.**
