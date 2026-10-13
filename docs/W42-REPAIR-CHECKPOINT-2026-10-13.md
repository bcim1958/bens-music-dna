# W42 repair checkpoint — 13 October 2026

## Verified state

Read GitHub main `122d064b378707f4968eb93942e6212069920b30` and PR #16 head `7cf1e17b303718d3d19405570571bc1c74eaaed5` before editing. Pages' week configuration matches main: W42 has only days 1–2. The live Saturday page explicitly disables scripts with CSP and displays the compatibility waiting screen; removing that protection would re-enable legacy localStorage writers alongside the protected IndexedDB daily store. W42 has no approved delivery route, release, manifest or artwork. This is not an OAuth-only problem.

## Concrete repair

The prepared-day completion branch ran before the completed-week gift branch. Even with a fully prepared seven-day catalog and 21 ratings, it always displayed “Vandaag voltooid” on Saturday. Reproduced this failure against the old render code. The completion branch now lets a complete Saturday reach the existing gift branch; earlier dates and incomplete days keep their original behavior. No publication or automatic-delivery gate is enabled.

PR #16 also changed the week configuration without regenerating its daily integrity pins. The regression runner failed on that baseline. Regenerated the pins with the existing release tool.

The new seven-day routing regression injects candidate identities into a test fixture and uses explicitly synthetic ratings. It proves Tuesday selection, oldest-unfinished-day resume, Friday/Saturday boundaries, rating preservation and gift reachability after 21 ratings. It does not prove native Safari storage or a Spotify delivery. The complete offline suite has 26 passing programs; see `W42-REPAIR-REGRESSIONS-2026-10-13.json`.

## Candidate research

`W42-DAYS3-7-SPOTIFY-RESEARCH-2026-10-13.json` records 15 distinct tracks and artist URIs, grouped as a proposed three-per-day plan. All exact track entities were fetched from Spotify public embed metadata during this run and reported playable. Artist names were checked against the repository's current data JSONs and test JavaScript catalogs with no matches. This is repository novelty only, not a personal-history guarantee.

Excluded the House of Protection collaboration “Brain Dead” and Kalandra's “Helvegen” cover from the proposed set. The selected House of Protection track is “It's Supposed To Hurt”; Kalandra is “Brave New World”. Public identity/playability evidence does not prove NL account availability, personal iPhone novelty, studio provenance or editorial suitability. Those approvals remain false, and this file is not loaded by the production candidate configuration.

## Remaining release gates

- Complete primary publisher/recording/style review for the proposed discoveries and check current device history before promotion; preserve existing day-1 and day-2 identities.
- Port the Saturday writer to the protected store and lease/checkpoint protocol before removing its compatibility block. Test restart, storage failure, concurrency and authenticated readback with the actual device context.
- Establish the current iPhone's independent ratings/FIFO recovery copy, including W41 consumption. No iPhone session or current export was available in this run. Never infer actual unused FIFO from a counter or desktop catalog.
- Prepare and verify the W42 delivery manifest, gemstone, artwork, OAuth identity and Spotify readback. The actual future Saturday delivery cannot be claimed proven today.

No ratings, reserves, FIFO uses, historical playlists or Spotify state were changed. No merge or production release. `endToEndProven=false`.
