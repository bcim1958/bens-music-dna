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
