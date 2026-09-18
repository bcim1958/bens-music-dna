# W39 selector stress — 2026-09-18

Status: PASS — static deterministic worst-case simulation.

## Scope
Production selector v3 after duplicate fixes. Candidate pool: 40 unique W39 candidates. Worst case: seven days, each 3 official + 2 reserve, exploration 0.30. Prior selected IDs excluded after every day. No production localStorage is mutated.

## Result
- Requested: 35 selections.
- Delivered: 35 selections.
- Unique selected: 35.
- Duplicate track IDs: 0.
- Days completed: 7/7.
- Remaining candidates after day 7: 5.
- Per-day country rule remains satisfiable; candidate artists are unique across the pool.

Deterministic zero-signal baseline run:
- day 1: 01, 02, 03, 04, 06
- day 2: 05, 07, 08, 09, 10
- day 3: 11, 12, 13, 22, 25
- day 4: 23, 26, 27, 29, 32
- day 5: 30, 31, 33, 34, 40
- day 6: 14, 15, 16, 19, 38
- day 7: 17, 18, 20, 24, 39

## Interpretation
The W39 pool has enough structural capacity for the maximum 35 selections under the selector's batch constraints. This closes the candidate-capacity blocker. It does not prove live Spotify playability, real-device persistence, or the actual W39 sequence under accumulated learning; those remain separate release gates.

## Regression invariant
A week marked ready must have at least 35 unique candidates when the reserve design permits two extra positions on all seven days, and selector stress must return 35 unique selections without failure.
