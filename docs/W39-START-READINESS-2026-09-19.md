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
