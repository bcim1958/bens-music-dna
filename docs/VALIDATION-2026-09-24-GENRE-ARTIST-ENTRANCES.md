# Genre DNA artist entrances

Base: d8bcdc8. W39 files and taxonomy unchanged.

## Sources and rules

- All 16 data/surprise-prod-full-*.txt gzip/base64 parts: 3,284 artist-credit rows, validated part identifiers and totals. Only row[7] (DNA playlist relations) establishes membership. Row[0] gives artist identity. See docs/WORKLOG-2026-09-05-VERRAS-MASTER.md and test/surprise-me-v4-full.html for the production contract. This is the 2026-09-04 v2 snapshot, not the newer authoritative 2026-09-10 v3 workbook, which is not present in this repository.
- Both docs/CHECKPOINT-2026-09-09-UK-PUNK-*.md documents: definitive, Spotify-verified 30-track playlists. Explicit title reconciliation to the two canonical UK Punk world names; excluded/replaced artists are not imported.
- No genre/style inference, fuzzy artist matching, or track-to-playlist inference from representative tracks. Each generated record retains the source file and one-based decoded row or playlist position.
- Exact canonical playlist names only, apart from the two documented UK Punk titles. Sla Revival DNA and Psychedelic Space Rock DNA remain unmatched pending identity confirmation; artist-DNA playlists are not converted into Genre DNA.
- Exactly one unique Registry artist with the same name is required for a clickable door. Missing artist worlds remain listed as unresolved, not created.

## Result

11 groups and 42 worlds preserved. 23 worlds carry explicit playlist evidence (538 membership records); 537 artist memberships lack an exact Registry world. One existing artist entrance: Classic Heavy Metal → NWOBHM DNA → Ozzy Osbourne → Voïvod → Rush, then the normal graph.

The existing rel-voivod-ozzfest relation already declares Ozzy as contextual counterpart and cites voivod_kerrang_newsted. Explorer now exposes that same relation in reverse from the contextual counterpart. No relation facts were added. This is a professional live-world connection, not a claim of musical influence.

## Validation

- node scripts/build-genre-dna-memberships.cjs --check: reproducible payload and complete source parts.
- node test/explorer-genre-navigation.cjs: actual rendered button handlers; all 11/42 entries; real Ozzy entrance and Voïvod/Rush continuation; identical artist view; breadcrumbs/back; absent/unknown/unsubstantiated data; UK Punk unresolved entries; existing free/week entry routes.
- node test/relation-registry-health.cjs: fails on the same two pre-existing evidence omissions as d8bcdc8: rel-voivod-progressive-metal-genre and rel-voivod-experimental-metal-genre. Not changed as part of this work.

## Coverage

Zero evidence means no accepted mapping in these sources, not that the actual playlist is empty. Counts are snapshot coverage, not claims of current playlist completeness.

| Subworld | Source memberships | Clickable Registry artist | Unresolved memberships |
| --- | ---: | --- | ---: |
| Grunge DNA | 30 | — | 30 |
| Indie Rock DNA | 16 | — | 16 |
| Noise Rock DNA | 0 | — | 0 |
| Shoegaze DNA | 11 | — | 11 |
| NWOBHM DNA | 30 | Ozzy Osbourne | 29 |
| Power Metal DNA | 30 | — | 30 |
| Garage Rock DNA | 19 | — | 19 |
| Glam Rock DNA | 0 | — | 0 |
| 80's Hair Metal Deep Cuts DNA | 0 | — | 0 |
| After Hair Metal DNA | 0 | — | 0 |
| Hair Metal Before Hair Metal DNA | 0 | — | 0 |
| Hair Metal DNA | 0 | — | 0 |
| Hair Metal Gekkies DNA | 0 | — | 0 |
| Modern Hair Metal Revival DNA | 0 | — | 0 |
| Scandinavian Hair Metal DNA | 0 | — | 0 |
| Sunset Strip Sleaze Metal DNA | 0 | — | 0 |
| Too Late For The Hair Metal DNA | 0 | — | 0 |
| AOR Deep Cuts DNA | 30 | — | 30 |
| Arena Rock DNA | 0 | — | 0 |
| Blues Rock DNA | 23 | — | 23 |
| Southern Rock DNA | 24 | — | 24 |
| Art Rock DNA | 0 | — | 0 |
| Avant Prog Rock DNA | 0 | — | 0 |
| Canterbury Scene DNA | 28 | — | 28 |
| Experimental Rock DNA | 0 | — | 0 |
| Krautrock DNA | 30 | — | 30 |
| Neo Prog DNA | 0 | — | 0 |
| Prog Rock DNA | 0 | — | 0 |
| Gothic Metal DNA | 26 | — | 26 |
| Progressive Metal DNA | 26 | — | 26 |
| Symphonic Metal DNA | 16 | — | 16 |
| Psychedelic/Space Rock DNA | 0 | — | 0 |
| Dark Wave DNA | 14 | — | 14 |
| Goth rock DNA | 24 | — | 24 |
| Hardcore Punk DNA | 22 | — | 22 |
| New Wave DNA | 20 | — | 20 |
| Post Punk DNA | 25 | — | 25 |
| Power Pop DNA | 23 | — | 23 |
| Ska Revival DNA | 0 | — | 0 |
| Synth Pop DNA | 11 | — | 11 |
| UK Punk; Art, Hooks and Attitude DNA | 30 | — | 30 |
| UK Punk; Raw and Rebellious DNA | 30 | — | 30 |


## Definitive master 2026-09-10 v3 investigation — 2026-09-24

The authoritative workbook was recovered from the project Library as `Ben_Master_Music_DNA_Database_1.8_Taxonomie_Reparatie_2026-09-10_v3.xlsx`. The current repository builder still uses the older 2026-09-04 v2 production export, so the generated entrance payload must not yet be described as fully synchronized with the definitive master.

The workbook's `Spotify-snapshot 2026-08-25` contains 48 definitive DNA playlists × 30 positions = 1,440 playlist memberships. Exact matching against the 42 personal Genre-DNA subworlds, with only two explicit title reconciliations (`Psychedelic Space Rock DNA` → `Psychedelic/Space Rock DNA`; `Sla Revival DNA` → `Ska Revival DNA`), yields 690 explicit memberships across 23 subworlds. Adding the two separately confirmed UK Punk playlists contributes 60 memberships across two further subworlds. Therefore the accepted source layer can cover 25/42 subworlds once the v3 snapshot is ingested; 17/42 still lack accepted playlist mapping data.

This changes the diagnosis materially:
- **Missing playlist mapping (A):** 17 subworlds after v3 + confirmed UK Punk ingestion.
- **Mapped artist but missing Registry world (B):** the dominant bottleneck. The v3 snapshot supplies hundreds of explicit artist memberships, but most artists still have no Registry artist entity/world.
- The existing NWOBHM → Ozzy Osbourne entrance remains valid.
- Artist-DNA playlists in the same workbook (Ghost DNA, Rush DNA, Metallica DNA, etc.) are not converted into Genre-DNA membership.
- No artist is admitted from AllMusic genre/style classification alone; only explicit playlist membership is an entrance fact.

The v3 workbook also confirms examples such as Progressive Metal DNA containing TOOL, Opeth, Jinjer and others, and Symphonic Metal DNA containing Nemesea, Nightwish and others. These are valid **playlist memberships**, but they are not clickable Explorer entrances until the corresponding artist has a Registry world and at least one genuine Registry relation for continued walking.

### Next implementation step

Replace the v2-derived Genre membership source with a reproducible repository snapshot extracted from the authoritative v3 workbook, preserving workbook/sheet/row provenance and the two explicit title reconciliations above. Keep the two confirmed UK Punk checkpoint sources as separate provenance. Rebuild the generated membership payload and navigation regression from that source before creating additional Registry artist worlds.

After that source migration, prioritize **B** by intersecting the accepted v3 memberships with existing or independently evidenced artist relationship data. Create a Registry artist world only when real relation evidence exists; do not create hollow artist worlds merely to increase entrance counts. Every newly admitted route must prove:
`Genre → group → subworld → artist → existing/evidenced Registry edge → free graph`.

No W39 files are part of this migration. The two pre-existing missing evidence references in the general Registry health test remain outside this line.


## Canonical classification authority — AllMusic primacy

Decision confirmed with Ben on 2026-09-24:

> For musical classification in Music DNA, AllMusic has primacy. Music DNA does not invent, correct, collapse or choose genre/style labels for an artist when AllMusic supplies the classification.

This creates three deliberately separate layers:
1. **Personal Genre DNA membership** — an explicit playlist fact: Ben placed/retained an artist in a named Genre-DNA playlist.
2. **AllMusic classification** — the musical taxonomy graph: an artist may have multiple AllMusic genres/styles and every verified label remains a valid classification edge. Music DNA does not select a single “best” box.
3. **Registry relationship evidence** — richer non-taxonomic relations such as people, influence, collaboration, production, place, scene, tour and event.

Consequences for Explorer:
- A verified AllMusic classification is itself a legitimate graph edge; an artist does not require an unrelated biographical relation merely to be walkable.
- Multiple AllMusic labels make an artist a junction in the graph, not an ambiguity to resolve.
- Genre-DNA playlist membership and AllMusic classification must never be presented as the same assertion.
- Directly verified AllMusic profile data is canonical classification evidence.
- Existing master rows marked `afgeleid volgens AllMusic-taxonomie` remain useful working metadata but must not be represented as if the artist's AllMusic profile was directly checked. They form a verification queue where direct profile confirmation is required for canonical Explorer edges.
- If AllMusic has no usable classification for an artist, Music DNA leaves classification unknown/pending rather than inventing one.
- Store source/provenance and verification date so later AllMusic changes can be reconciled.

### Architectural correction

The previous rule that a Genre-DNA artist entrance should only become useful after acquiring a non-taxonomic Registry relation was too restrictive. The target graph is instead:

`personal Genre-DNA membership → artist → verified AllMusic genre/style edge(s) → other artists / richer Registry relations → free walking`.

Registry remains the common walking graph, but AllMusic classification edges are first-class Registry evidence alongside (not instead of) the richer relationship families.

The next implementation line must therefore ingest **directly verified AllMusic classifications first**, preserve every verified genre/style label, and explicitly distinguish them from inferred taxonomy rows. No classification may be synthesized from a Genre-DNA playlist name.


## First AllMusic-direct harvest from definitive master

The definitive v3 workbook contains a dedicated `AllMusic-classificatie` sheet with artist, AllMusic main genre, main structure, styles, classification status and taxonomy source. The classification overview records 98 unique artist mentions as `rechtstreeks AllMusic`; 2,862 remain `afgeleid volgens AllMusic-taxonomie`, 324 have insufficient source metadata and 49 are not yet classified.

Direct rows are usable as canonical classification evidence because their genre/styles were checked on an AllMusic artist profile. Examples already present in the master include:
- AC/DC — Album Rock; Aussie Rock; Hard Rock; Heavy Metal; Arena Rock.
- Halestorm — Alternative Metal; Hard Rock; Heavy Metal; Post-Grunge.
- Survivor — Album Rock; Contemporary Pop/Rock; Arena Rock; Rock & Roll; Hard Rock.
- Michael Schenker — Guitar Virtuoso; Hard Rock; Heavy Metal; Neo-Classical Metal.
- Billy Idol — Contemporary Pop/Rock; Dance-Rock; Hard Rock; Punk; Punk/New Wave; New Wave; Album Rock.
- Blondie — New Wave; Punk/New Wave; Contemporary Pop/Rock; Dance-Rock; Punk; American Punk; New York Punk.
- No Doubt — Adult Alternative Pop/Rock; Alternative Pop/Rock; Alternative/Indie Rock; Ska-Punk; Third Wave Ska Revival; Dance-Rock; Pop.
- Biffy Clyro — Alternative/Indie Rock; Pop Punk; Punk Revival; Neo-Prog; Post-Grunge.

These examples demonstrate why classification must be multi-label: collapsing them to one bucket would discard canonical AllMusic information and remove legitimate Explorer junctions.

### Data-model requirement

Canonical AllMusic edges must carry at least:
- artist identity;
- label text;
- label level (`genre`, `main-structure`, or `style`);
- classification status = `direct-allmusic`;
- source = the concrete AllMusic artist profile when available;
- verification/audit date from the master repair row.

Rows marked `afgeleid volgens AllMusic-taxonomie` may be queued for direct verification but must not generate canonical AllMusic graph edges yet.

### Immediate build order

1. Preserve the v3 `AllMusic-classificatie` sheet as a reproducible classification source payload in the repository.
2. Generate first-class artist ↔ AllMusic-label edges only for `rechtstreeks AllMusic`.
3. Intersect those direct artists with the accepted Genre-DNA membership payload.
4. Admit each exact intersection as an Explorer artist entrance, even when it has no biographical Registry relation, because its verified AllMusic edge provides the next valid walking step.
5. From an AllMusic label node, expose all other directly verified Registry artists carrying the same label; never include inferred rows in that canonical neighbor set.
6. Keep inferred rows as a visible verification backlog rather than silently discarding them.

This is the scalable musical backbone; richer Registry evidence remains additive.


## Exact v3 intersection — direct AllMusic × personal Genre DNA

Programmatic cross-check of the definitive 2026-09-10 v3 workbook gives the first hard result.

Scope:
- only the 42 canonical personal Genre-DNA world names;
- exact v3 playlist membership from `Spotify-snapshot 2026-08-25`;
- the two known v3 title reconciliations (`Psychedelic Space Rock DNA` → `Psychedelic/Space Rock DNA`; `Sla Revival DNA` → `Ska Revival DNA`);
- Band-DNA playlists excluded;
- only `Classificatiestatus = rechtstreeks AllMusic`;
- exact artist-name identity; no alias guessing.

Result from the v3 snapshot:
- 690 explicit Genre-DNA membership rows;
- 23 of the 42 personal subworlds represented in that snapshot;
- 98 directly AllMusic-verified artists in the master overall;
- **1 exact intersection** between those 690 Genre-DNA rows and the 98 direct-AllMusic artists;
- that intersection is **Progressive Metal DNA → *shels**;
- direct AllMusic styles for *shels: **Heavy Metal; Progressive Metal**.

Therefore the first canonical taxonomy walk available from the definitive v3 snapshot is:

`Genre → Progressive Metal → Progressive Metal DNA → *shels → Heavy Metal / Progressive Metal`.

This small immediate intersection is not evidence that the master is poor. It shows that the current direct-AllMusic verification set was created mainly as a metadata-repair sample rather than as systematic coverage of Ben's Genre-DNA playlists. The master already contains the large working classification layer for 2,862 artists; the scalable next move is to use the Genre-DNA membership set to **prioritize direct AllMusic verification**, rather than researching artists in arbitrary order.

### Consequence

The master can become the primary content engine, but two statuses must remain distinct:
- **available now as canonical Explorer content**: exact playlist membership + direct AllMusic profile verification;
- **high-value verification queue**: exact playlist membership + taxonomy-derived classification.

This turns the 690 personal Genre-DNA membership rows into a targeted AllMusic verification programme. Every newly verified artist can immediately add multiple style doors and, as labels overlap, artist-to-style-to-artist walking routes. Rich Registry research is then only needed for deeper stories and non-taxonomic relations, not for basic musical connectivity.

The two confirmed UK Punk checkpoint playlists remain a separate accepted source layer and are not silently counted in the 690-row v3 intersection above.


## Safety boundary and master leverage measurement

This work is additive and does not alter W39, weekly selection logic, Spotify playlists, existing Registry facts, or the personal Genre-DNA taxonomy. The master workbook remains read-only source material. Generated Explorer classification data must live in a separate derived layer and may only be promoted to canonical graph edges after the provenance gate passes.

Exact v3 measurement inside the 690 currently mapped Genre-DNA membership rows:
- 674 unique artists;
- 624 unique artists already carry `afgeleid volgens AllMusic-taxonomie` working classifications;
- 49 unique artists have no matching row in the current AllMusic-classification sheet and therefore remain unresolved;
- 1 unique artist (*shels) is already `rechtstreeks AllMusic`.

The 624 taxonomy-derived Genre-DNA artists already carry **1,984 style assignments across 76 distinct AllMusic-taxonomy labels**. These assignments are not yet canonical artist-profile evidence, but they are an unusually strong verification queue: direct profile checking can confirm/correct the existing labels rather than beginning classification from a blank page.

This establishes the non-destructive pipeline:

`read-only master → generated candidate layer → direct AllMusic verification gate → canonical classification layer → Explorer graph`.

No existing relation is overwritten by this pipeline. A failed or changed AllMusic verification updates only the candidate/classification record for that artist; personal playlist membership remains an independent fact.

### Practical conclusion

The master can supply most of the repetitive structural work. For the 674 artists already represented in the mapped Genre-DNA worlds, 625 already have some classification state and 624 have a concrete taxonomy-derived label set ready to verify. Deep Registry research can therefore be reserved for stories, people, places, events, influences and collaborations rather than basic musical classification.


## Verification queue — ordering principle

The 624 taxonomy-derived artists in the mapped personal Genre-DNA worlds form the next AllMusic verification queue. Queue order must maximize graph unlock, not artist fame or editorial preference.

Priority score is derived only from master facts:
1. number of distinct taxonomy-derived labels already attached to the artist;
2. rarity/connectivity value of those labels inside the 624-artist queue (prefer labels that can bridge otherwise separate clusters, while retaining common-label hubs);
3. number of personal Genre-DNA worlds in which the artist has explicit membership;
4. unresolved identity/provenance is a blocker, never a reason to guess.

A queue item is promoted only after direct AllMusic profile verification. Verification may confirm, remove or add labels; the master-derived candidate set is a research aid, not the answer.

### Non-destructive promotion contract

Promotion creates or updates only generated classification records. It does not:
- change Spotify/Genre-DNA membership;
- rewrite existing Registry relations;
- change weekly candidates or W39/W40 state;
- change Ben's personal taxonomy;
- convert an AllMusic style into a personal Genre-DNA membership.

This permits the verification programme to run independently and incrementally. Every promoted artist increases the canonical graph without requiring a migration of existing Explorer content.


## Live AllMusic verification batch 001 — source discipline correction

Direct web verification on 2026-09-24 confirms:
- Karnivool — Genre: Pop/Rock; Styles: Alternative Metal, Progressive Metal, Alternative Pop/Rock, Heavy Metal. AllMusic artist id: mn0001422105.
- Caligula's Horse — Genre: Pop/Rock; Styles: Progressive Metal, Heavy Metal. AllMusic artist id: mn0002880451.
- Oceansize — Genre: Pop/Rock; Styles: Alternative/Indie Rock, Indie Rock, Post-Grunge, Post-Hardcore. AllMusic artist id: mn0000466655.
- Earthside — Styles: Progressive Metal, Heavy Metal, Experimental Rock, Post-Rock, Art Rock. AllMusic artist id: mn0003670432.

Important source rule discovered during the batch: AllMusic search/crawl output can occasionally omit the rendered Styles field for the same artist page (Oceansize produced both an empty-styles crawl and a populated crawl). A classification is promoted only when the concrete artist page result explicitly exposes the label set. Biography prose, search snippets and related-artist lists are not substitutes for the Styles field.

Shared labels create canonical classification adjacency only after both endpoints have direct verification. For example, Karnivool and Caligula's Horse share Progressive Metal and Heavy Metal as directly exposed AllMusic styles. This is classification adjacency, not a claim of influence or collaboration.

Batch records remain separate from personal Genre-DNA membership. An artist can be directly AllMusic-verified without thereby gaining a personal playlist membership.


## Permanent operating model — master as living Music DNA knowledge base

This is a durable project rule, not a temporary AllMusic repair tactic.

The definitive master is intended to evolve from a September 2026 baseline into the central provenance-aware knowledge base for Music DNA and DNA Explorer. Existing and future material follows the same lifecycle.

### New-find lifecycle

A new discovery enters through:

`encounter → evaluation → admission/relevance → identity resolution → master record → AllMusic verification → Music-DNA provenance → Explorer availability → later enrichment`.

Rules:
- a passing reserve/encounter may be retained as encounter history without triggering full enrichment;
- once an artist becomes materially relevant (for example RAAK, W-list inclusion, DNA-playlist inclusion, or another durable Music-DNA role), create/resolve its canonical master identity;
- store stable identifiers where available, including Spotify identity and AllMusic artist identity;
- retrieve and store the directly exposed AllMusic genre/main-structure/styles with source/provenance, verification date and verification status;
- never infer personal Genre-DNA membership from AllMusic classification;
- after direct verification, classification edges may immediately join the Explorer graph;
- deeper people/producer/influence/place/tour/event/story relations are added later with their own evidence;
- missing data remains unknown; conflicts remain explicit conflicts; neither is guessed away.

### Four evidence states

Facts in the living master must remain distinguishable as:
1. **verified** — allowed to be presented as a sourced fact and to drive canonical graph edges;
2. **derived** — useful for research/verification prioritization, but not presented as direct source evidence;
3. **unknown** — intentionally unresolved; do not invent;
4. **conflict** — sources disagree or versions are unresolved; retain the disagreement until researched.

### Non-destructive history

New verification does not silently erase old provenance. Where a source classification, release fact or relation changes, preserve enough provenance/history to know what was previously established, what is current, and when each state was checked.

### Architecture consequence

The master becomes the authoritative knowledge source; Registry/Explorer data increasingly becomes generated or projected output from that source rather than a second hand-maintained truth store.

Permanent loop:

`discover → evaluate → admit → verify → enrich → master → Explorer → discover`.

The current 624-artist Genre-DNA programme is the first prioritized tranche of a master-wide catch-up migration, not the full migration. The definitive v3 classification overview contains 3,333 unique artist mentions and the full artist population must ultimately pass the same identity, provenance and direct-verification treatment model. Track-level recording/release/version provenance (about 3,480 current master music objects after reconciliation) is a separate but linked migration. Once the historical catch-up is sufficiently complete, new relevant finds should enter this same pipeline at intake instead of accumulating another future repair backlog.

### Master-wide catch-up scope

The permanent catch-up phases are:
- **A — identity:** canonicalize/deduplicate the 3,333 artist mentions and resolve stable external identities where available;
- **B — verified baseline:** retain and audit the 98 existing direct-AllMusic rows, including concrete profile identity and verification date;
- **C — derived backlog:** directly verify the 2,862 rows currently marked `afgeleid volgens AllMusic-taxonomie`; derived labels remain research aids until promoted;
- **D — insufficient metadata:** repair the 324 rows with insufficient source metadata;
- **E — unclassified:** research the 49 currently unclassified artist mentions without guessing;
- **F — music objects:** separately verify the approximately 3,480 track/music objects for recording identity, version, original date/release and provenance.

A record is **100% treated** when it has reached an explicit terminal treatment state with provenance (verified, genuinely unknown/unresolved, or conflict requiring retained disagreement). It does **not** need to be equally information-rich. In particular, a fully treated smaller artist may legitimately have a compact record while a fully treated artist such as Rush may have a very rich record.
