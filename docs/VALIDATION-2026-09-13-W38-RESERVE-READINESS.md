# Validation — W38 reserve-system readiness

Date: 2026-09-13
Status: VALIDATED STRUCTURALLY / IPHONE END-TO-END PENDING

## Scope
Validation of the accepted rollende positieve zaterdag-aanvulvoorraad before W38 is used in production.

## Verified implementation
- W38 has a pool of 28 unique candidates: enough for 7 × 3 official positions plus a possible reserve position 4 on all seven days.
- All 28 candidate records contain a direct Spotify track URL; 27 were re-opened successfully as the intended Spotify track on 2026-09-13 and the remaining Cats in Space identity had already been returned by Spotify search evidence in the same verification pass.
- Positions 1–3 remain the official daily selection and Muziekmeter input.
- Position 4 is stored under a separate reserve key and is marked `meter:false`.
- The learning layer explicitly ingests reserve-slot-4 state separately, so a RAAK/GOED there can enter the positive bank without changing the fixed 21 Muziekmeter observations.
- Daily offer count is 4 while fresh positive reserve < 21 and 3 from the next day once fresh positive reserve >= 21.
- If a fourth position was already offered for a day, it remains part of that day until rated even if positions 1–3 bring the reserve to 21 during that day.
- Saturday reserve selection is FIFO on `firstPositiveAt` (oldest unused positive first).
- Only unused positive tracks are eligible as reserve fills.
- Saturday playlist commit requires exactly 21 tracks.
- Weekly Spotify title follows `Ontdek DNA #YYYY-WW`.
- W38 is released in the active week resolver.

## Pure rule tests
Passed:
- reserve 0 -> 4 daily offers;
- reserve 20 -> 4 daily offers;
- reserve 21 -> 3 daily offers;
- reserve 25 -> 3 daily offers;
- FIFO order chooses oldest positive first;
- 12 current positives + 9 reserve fills -> exactly 21 unique tracks;
- slot 4 is excluded from the 3-position Muziekmeter set.

## Final proof still required
The installed iPhone app must now prove the live state transition on the real storage context:
1. W38 opens, not W37.
2. With reserve below 21, the day shows four positions and explicitly labels position 4 as voorraadplek.
3. Position 4 can be rated and remains excluded from the Muziekmeter count.
4. The visible positive-stock counter updates correctly.

Only after that live iPhone proof may the reserve system be called end-to-end proven for W38.
