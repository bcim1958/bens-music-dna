# W37/W38 rating archaeology — 2026-09-19

## Result
Repository-history archaeology does **not** recover the exact per-track W37 or W38 rating values.

## W37 proven facts
- W37 ran 2026-09-06 through 2026-09-12.
- Historical project state explicitly records that all 21 daily ratings were preserved at W37 closure.
- The final 21-track Spotify playlist identities are now independently verified from user screenshots and stored in the historical ledger.
- Historical diagnostics read ratings at runtime from browser localStorage / the learning layer. They did not commit a durable 21-row rating snapshot to Git.
- The temporary 12-track “unique positive harvest” was an intermediate rejected product state and must not be used to infer the final 21 ratings.
- Therefore the exact RAAK/GOED/TERUGKOMEN/NIET split remains unknown.

## W38 proven facts
- Final 21-track Spotify identities are independently verified from user screenshots and stored in the historical ledger.
- No durable per-track W38 rating snapshot has been found in repository history.
- Exact rating split remains unknown.

## Safety decision
Do not reconstruct ratings from playlist membership, gift membership, candidate rank, or later playlist ordering. Those are different facts.

## Historical counters
- W37 may contribute 21 to a clearly labeled aggregate “historically confirmed ratings” count, because project state explicitly proves 21 ratings existed.
- W37 must not contribute invented values to RAAK/GOED/TERUGKOMEN/NIET counters.
- W38 contributes only directly proven per-track ratings, currently none.
- W35 and W36 recovered values remain governed by `data/historical-ratings-recovery-w35-w38-v2.json`.

## Next product step
Treat the unrecoverable per-track W37/W38 split as a historical data gap, not a blocker. Build the durable rating/teller layer so future weeks persist every rating outside ephemeral browser state, then re-filter W40 against all proven historical identities and ratings.
