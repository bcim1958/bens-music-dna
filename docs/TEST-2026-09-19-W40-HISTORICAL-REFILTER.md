# W40 historical exclusion re-filter — 2026-09-19

Status: **PASS — structural history exclusion**

The 85-track W40 master reservoir was re-checked after W35–W38 historical recovery.

## Evidence set
Historical exclusion identities were built from:
- exact recovered W35/W36 rated candidate identities;
- exact verified W36, W37 and W38 Spotify playlist identities.

Playlist membership is **not** treated as rating evidence. It is used here only as prior-exposure/delivery evidence, so a track cannot silently return as a “new discovery”.

## Result
- W40 reservoir before filter: **85** exact Spotify track IDs.
- Distinct historical Spotify exclusion IDs available from the recovered evidence: **58**.
- W40 overlap with those historical identities: **0**.
- W40 reservoir after filter: **85**.
- Minimum structural capacity required: **63**.
- Headroom after historical exclusion: **22**.

## Interpretation
No W40 reservoir track matches a now-known W35–W38 rated or delivered Spotify identity. The historical recovery therefore does not reduce the 85-track reservoir.

This is a **history-exclusion pass only**. It does not upgrade the W40 reservoir to production-ready and does not prove that every track is genuinely unheard outside the evidence currently available. Existing metadata, quality, novelty and selector stress gates remain in force.

## Counter baseline
The evidence-safe cockpit baseline is stored separately in `data/music-dna-historical-counters-v1.json`: 33 exact recovered ratings plus 21 W37 historically confirmed but unallocated ratings = 54 confirmed historical ratings. Exact bucket totals are never padded with the unrecoverable W37 split.
