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
