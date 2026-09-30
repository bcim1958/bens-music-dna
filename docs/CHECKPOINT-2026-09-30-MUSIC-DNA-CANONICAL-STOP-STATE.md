# CHECKPOINT — 2026-09-30 — Music DNA canonical stop state

Status: canonical archive checkpoint before further building.

## Why this checkpoint exists

The repository HEAD before this checkpoint was `cff97feb` (2026-09-27, “Show diagnostic in production W40 safe mode”). Important project knowledge from 28–30 September had not yet been archived in GitHub. This checkpoint brings the project state forward without changing production selection code, scores, quotas, or publication logic.

## W39 — practical lessons

- W39 was experienced in practice as a pleasant listening flow and worth replaying.
- The publication chain was not fully proven end-to-end: week-folder placement required manual handling and the gemstone/automatic museum-folder element was not fully present as designed.
- W39 therefore remains useful as a listening/Flow-DNA reference, but not as proof that the entire publication automation is complete.

## W40 — current state

- W40 is the first practical calibration period for the newer Ontdek-DNA / Muziekmeter approach.
- The intended end-to-end chain still has to be proven as one complete production run:
  manifest → Flow-DNA → gemstone → museum text → artwork → publication → folder placement.
- A local independent week-control v1 has been built and tested outside production. It can inspect primary Genre-DNA distribution, concentration, rating/newness fields, duplicates and Spotify identity, and compare identities before/after Flow-DNA.
- In the technical 21-track integration test, Flow-DNA changed order only: the same 21 Spotify identities and counts were retained, with no additions/removals/duplicates. This was a technical test, not a publishable positive W40 discovery week.
- The real positive end-to-end W40 week remained blocked in the local test because current personal ratings/newness decisions were not present in the inspected export. Missing local export data must not be interpreted as missing user input.

### W40 day 4 observation — 2026-09-30

Official Muziekmeter positions 1–3:
- Return — “Steal Your Heart” — RAAK
- Radioactive / Jeff Paris — “Shame On You, Shame On Me” — RAAK
- Restless Spirits / Chez Kane — “Dreams of the Wild” — RAAK

Extra positive-reserve positions:
- Electric Boys — “Suffer” — RAAK
- “Limelight” (Rush cover; multi-artist credit shown in the daily page) — RAAK

The three official day-4 offers were displayed with Album Rock + Arena Rock labels. This is recorded as a calibration observation, not as proof that correction is already required.

## Canonical design rule — Master Database as long-term course

The daily Ontdek-DNA offers should, over a longer series, keep pace with the proportions represented by Ben’s Master Database / Genre-DNA landscape.

This does **not** mean:
- equal representation of genres;
- rigid daily quotas;
- rigid weekly quotas;
- automatically increasing a genre because recent tracks scored well;
- automatically increasing small genres because the database contains many candidates.

Operational principle:
- observe daily offers and weekly outcomes over time;
- compare their cumulative direction with the Master Database / Genre-DNA proportions;
- allow natural daily and weekly variation;
- when one or a few Genre-DNA directions structurally dominate at the expense of the intended Master proportions, gradually steer future offers back toward balance.

Ratings primarily teach candidate quality **within** taste areas. They must not silently rewrite the Master-proportion course.

For balance accounting, one offered track should have one explicit primary Genre-DNA main area. Secondary labels remain metadata and must not create duplicate selection weight.

## Flow-DNA — ordering plus diagnostic signal

Flow-DNA remains downstream of selection: it must order the selected week, not change the chosen track set merely to manufacture genre balance.

New diagnostic role:
- if Flow-DNA has difficulty creating a natural, varied 21-track listening journey because the positive harvest is too musically uniform, treat this as a warning signal about the preceding daily offer stream;
- do not automatically replace tracks or invent quotas;
- assess the Flow-DNA warning together with cumulative daily Genre-DNA distribution and multiple weeks;
- if structural skew is confirmed, correct future daily offers gradually.

## Week control

Week control is an audit layer, not an automatic taste judge.

It may show:
- one primary Genre-DNA area per track;
- largest area and concentration;
- Album/Arena as secondary properties at most once per track;
- RAAK/GOED, TERUGKOMEN/TWIJFEL, NIET/NEE and unknown separately;
- newness fields as supplied, never inferred from style labels;
- duplicates / Spotify identity / week size;
- exact identity preservation before and after Flow-DNA.

A successful data check is not automatic approval of taste balance or Spotify availability.

No new taste quotas or hard publication blocks are established by this checkpoint.

## Known calibration findings — do not overinterpret

- W36–W39 are retained as an 84-track week-selection baseline; do not reconstruct them again.
- Across W36–W39, Hard Rock & AOR + Hair Metal accounted for 47/84 = 56.0%; individual weeks varied strongly.
- Database inventory and personal taste weight are different measures.
- Album Rock, Arena Rock, Hair Metal and Glam can overlap; overlapping labels must not create duplicate weight.
- Prog & Art Rock and Progressive Metal inventory also overlaps; earlier simple addition of their inventories was corrected.
- Small Shoegaze, Doom and Death preferences must not be generalized to all Alternative & Indie or all Extreme & Modern Metal.
- The old W40 builder’s 4.4/3.2 base bonus can increase concentration under some conditions, but removing it did not explain the measured Hard Rock/Hair concentration in the partial-profile tests. Do not change production scores without full-profile effect measurement.

## Candidate-supply warning

In the inspected local W40 material:
- 85 Master candidates were treated by the newer discovery code as OWN_DNA and therefore excluded from new discoveries under that policy;
- the external pool contained 158 tracks from only 17 artists;
- with one track per artist, that external pool alone cannot fill 21 unique artist positions.

This is a candidate/newness-supply constraint, not a reason to invent genre quotas. Any expansion should add suitable, evidence-based new candidates across the Master-DNA landscape.

## Exact resume point

After this archive checkpoint:

1. Continue **W40–W43 practical calibration** rather than redesigning the genre model.
2. Keep observing daily offers, ratings and weekly positive harvest against the long-term Master Database / Genre-DNA course.
3. Do not correct a single concentrated day or week automatically; look for structural skew over a longer series.
4. Broaden the genuinely new candidate supply where needed, without artificial genre quotas.
5. Use week-control before Flow-DNA; then verify that Flow-DNA retains exactly the selected identities.
6. Treat poor Flow-DNA variety as a diagnostic warning about upstream offer diversity.
7. If structural skew becomes clear, gradually steer future offers back toward the Master proportions.
8. For W40 publication, still prove the full chain:
   manifest → Flow-DNA → gemstone → museum text → artwork → publication → folder placement.
9. Do not claim production integration or publication automation is complete until it has actually been executed and tested.

## Freeze

This checkpoint records project knowledge and decisions only. It intentionally does **not** modify production selection code, scoring, taste quotas, manifests, or publication output.
