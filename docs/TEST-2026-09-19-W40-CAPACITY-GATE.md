# W40 structural capacity gate — 2026-09-19

Source staging pool: `test/music-dna-candidates-w40-staging-v1.js`
Recovered source: Master 1.8 v3

## Structural result
- staging candidates: **85**
- required worst-case capacity: **63**
- headroom: **22**
- Spotify track IDs in staging: **85**
- duplicate Spotify track IDs inside staging: **0**
- overlap removed against W35–W39 candidate Spotify identities before staging: **yes**
- worst-case demand: 7 × (3 official + 6 reserve) = **63**

A selector that consumes unique IDs without replacement has enough structural capacity to complete all seven worst-case days: **PASS**.

## Important: production gate still closed
This test proves capacity and identity uniqueness, not full candidate quality.

The staging file intentionally contains only exact Spotify identity plus source/selection scaffolding. Before `2026-W40` may be registered as ready, the 63+ live candidates must receive/retain the production metadata required by the daily experience (artist/title and the relevant Music-DNA/taxonomy/editorial fields), and the final pool must pass the existing selector/delivery checks.

Therefore:
- **capacity lamp: green**
- **production-ready lamp: not yet green**
