# Historical teller recovery checkpoint — 2026-09-19

## Proven now
- W36 playlist: exact 21 identities are in `data/music-dna-historical-ledger-v1.json`.
- W36 per-track ratings directly recovered: 3/21 (1 NIET, 2 TERUGKOMEN).
- W37: project history proves all 21 daily ratings existed and the Spotify playlist was restored and visually verified at 21 tracks on 2026-09-13.
- W38: candidate source contains 28 exact Spotify identities; Flow-DNA project history proves a 21-track reference existed.

## Critical evidence rule
Do not reconstruct a per-track rating merely because a track is in a weekly Spotify playlist. Playlist membership and rating are separate facts.

## W37 identity caveat
The W37 candidate pool itself has exactly 21 tracks, but this does not by itself prove that the final Spotify playlist consisted of those 21 identities after the historical repair. The historical commit proves the final playlist count and visual verification, not the full identity list in repository state. Do not promote all 21 candidate identities into the historical ledger without direct evidence.

## W38 identity caveat
The W38 source has 28 candidates. The current repository records the Flow-DNA principles and candidate source, but not yet a durable exact 21-ID historical playlist snapshot. Do not infer the 21 solely from candidate rank/order.

## Next evidence source
The highest-value remaining source is the actual current Spotify weekly playlists W37 and W38 (or a previously stored exact snapshot/export). Read-only playlist identity recovery can populate the playlist counters without guessing historical ratings.

## Counter policy until then
- Playlist counters may use only exact verified playlist identities.
- Rating counters may use only directly recovered/proven rating values.
- W37 may count 21 historical ratings in a total-ratings counter only if clearly marked aggregate/historical; do not fabricate the RAAK/GOED/TERUGKOMEN/NIET split.
- Unknown historical rating splits remain unknown.
