# Rating ledger v1 — durability contract — 2026-09-19

## Purpose
Prevent a repeat of the W37/W38 historical-rating gap.

## Production rule
Every rating is written to:
1. the existing week/day state;
2. the existing learning layer;
3. an append-only rating event ledger `bmd-rating-ledger-v1`;
4. a mirrored backup key `bmd-rating-ledger-backup-v1`.

The ledger records track ID, week, exact rating, timestamp, official/reserve source, meter flag and slot. Re-rating appends a new event; `latest` is only a derived current view, so history is not silently overwritten.

## Recovery
On load the ledger rescans all surviving week/day state and imports any ratings not yet represented. Between the primary and mirror copies, the copy with the larger event history is used.

## Counters
The ledger exposes exact per-week counts for RAAK, GOED, TERUGKOMEN, NIET, official and reserve ratings. Unknown historical ratings remain unknown; playlist membership is never used as a substitute.

## Export
`snapshot()` produces a complete JSON snapshot for durable external preservation. Browser mirroring protects against single-key corruption but is not a substitute for an external/server-side backup.

## Historical boundary
W35/W36 recovered exact ratings can be imported as proven history. W37 has 21 historically confirmed ratings but no exact per-track values; those values remain unknown. W38 exact per-track values remain unknown.

## Next gate
Before W39 production use, run a synthetic write/reload/re-rating test and verify:
- first rating persists in day state and ledger;
- re-rating keeps both ledger events and updates latest;
- official/reserve counts remain separated;
- mirror can recover the ledger if the primary key is absent;
- no rating mutation occurs in the learning/positive-bank flow.
