# W39 start readiness — 2026-09-19

Status: READY FOR REAL DAY 1 — with runtime-only boundaries.

## Closed before Sunday
- Week registry resolves 2026-09-19 to W38 and 2026-09-20 to W39.
- W39 loads the refreshed candidate source `music-dna-candidates-w39-v1.js?v=20260919c`.
- Candidate pool contains 42 unique source-grounded candidates after removal of the known W38 delivery overlap and duplicate replenishment entries.
- Production selector remains the existing selector; no Day-1 selection has been pre-created.
- Rating writer / append-only ledger durability gate is already closed for W39.
- W39→W40 transition and W40 production readiness are separate and already prepared.
- iPhone candidate remains frozen alongside production; it is not promoted for W39 start.

## Important capacity interpretation
The older W39 stress proof tested 7 × (3 official + 2 reserve) = 35 selections against the then-40-track pool. It remains evidence for that exact scenario only.

Positive-bank v14 can request 0, 2, 4 or 6 reserve offers per day depending on local inventory. Therefore neither the old 35-selection proof nor the positive-bank target of 42 should be described as a universal worst-case candidate-capacity proof. The production route already degrades reserve selection downward when the requested reserve batch cannot be filled, while preserving the three official discoveries.

For Sunday the invariant is:
1. exactly three official discoveries must be selectable;
2. no previously selected/learned ID may be reused by the selector;
3. reserve offers are adaptive and secondary to the official three;
4. no Saturday gift is fabricated before seven real rating rounds.

## Runtime boundary
Do not preselect or expose W39 Day 1 before the real Sunday opening. At first production opening, let the normal production route create the real Day-1 selection from the W39 pool and persist it once. That real selection and the user's real ratings are the next meaningful evidence.

## Do not change tonight
- Flow-DNA opening behavior.
- W39 surprise content.
- Saturday gift contents.
- Real ratings.
- Production fallback.

## Real Day 1 runtime — 2026-09-20
Day 1 has now run on the user's real iPhone and is no longer a readiness-only state.

Observed and closed:
- W39 resolved correctly on the real Sunday boundary.
- The first live opening exposed an inconsistency: positive-bank v14 requested six reserve offers at local inventory 0/42, while the production UI and the proven W39 capacity model promise at most two extra reserve places per day.
- Production now clamps reserve offers to **0–2 per day**. Therefore the production weekly maximum is again 7 × (3 official + 2 reserve) = **35 selections**, so the 42-candidate W39 pool has seven positions of headroom under this production rule.
- The already-persisted Day-1 six-reserve selection was repaired before any rating: the three official discoveries were preserved and the active reserve selection was reduced to its first two entries.
- The repair was applied to the actual live route `test/daily.html`; earlier edits to the safe copy alone did not affect the user's live screen.
- Real iPhone verification then showed exactly five discoveries: three official + two reserve.

Real Day-1 ratings recorded by the user:
- official: Battle Scar — NEE; Healer — GOED; Get It On — RAAK;
- reserve: Too Hot To Handle — RAAK; Better Days — GOED.
- end screen showed Day 1 complete and positive Saturday stock **2/42**.

Day-2 invariant:
1. Day 1 must remain immutable.
2. Day 2 may create exactly three new official discoveries.
3. With stock below 21, at most two reserve places may be created.
4. No already selected/learned ID may be reused.
5. Do not pre-create Day 2 before the real calendar boundary; the next evidence is the user's real Monday opening.

Note: four reserve candidates were briefly exposed before the Day-1 repair but removed before rating. The generic repair now preserves removed IDs as `retiredIds` for future repairs. The four already removed in this first incident predate that metadata change, so no retroactive mutation of the completed Day-1 local state is attempted.
