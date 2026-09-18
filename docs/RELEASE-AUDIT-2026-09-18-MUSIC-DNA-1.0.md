# Music DNA 1.0 — release-gate audit

Date: 2026-09-18
Status: PRE-RELEASE AUDIT
Production path audited: `test/index.html → test/daily.html → test/zaterdagcadeau.html → test/spotify-callback.html`

## Verdict by gate

### G1 — Single permanent entry — GREEN for the active test production path
- `test/index.html` has one user entry and routes directly to `daily.html`.
- `daily.html` and `zaterdagcadeau.html` are now direct production pages.
- No active-path references remain to `daily-v2/v3` or `zaterdagcadeau-v2/v3`.
- No active-path week hardcoding remains; week choice comes from `music-dna-weeks-v1.js`.
- Old version files remain only as rollback/test material.

Open before final public 1.0 naming: decide whether the stable app entry remains under `/test/` or is promoted to repository root. Do not promote before the live W38/W39 proof.

### G2 — Durable daily state — AMBER, device proof required
Code safeguards present:
- existing storage keys preserved;
- storage read/write probe;
- origin continuity check;
- non-shrinking Music-DNA key-count check;
- storage fingerprint exposed through persistence health;
- unsafe storage blocks the daily app before new selection/rating work.

Still unproven on the real device:
1. ordinary reload;
2. Safari close/reopen;
3. installed iOS home-screen launch;
4. production cache/version change.

No code-only result may turn G2 green.

### G3 — Calendar/week continuity — GREEN in code through W39
- W39 is present, ready, and has a 40-track candidate pool.
- Resolver returns only an active ready week.
- After the final ready week expires, resolver returns null instead of serving an expired week.
- Daily UI has an explicit safe-wait state.
- W39 selector stress proof completed 7/7 days with 35 unique selections and 5 candidates remaining.

Live calendar rollover into W39 is still part of G6/G8 proof, not a blocker to the code status of G3.

### G4 — Official measurement integrity — GREEN in code
- Official selection is exactly 3 tracks per day.
- Official storage and reserve storage use separate keys.
- Reserve cards are explicitly outside the Muziekmeter.
- Official week completion requires 7 × 3 rated official IDs.
- Week-transition validation rejects missing ratings and duplicate official IDs.
- Reserve ingestion remains learning/reserve input but is not part of the official 21 count.

### G5 — Saturday gift integrity — AMBER, final Spotify proof required
Code safeguards present:
- official week must be complete;
- gift must contain exactly 21 unique IDs;
- positive bank supplies only RAAK/GOED membership;
- prior delivered material is excluded by the positive-bank/history layer;
- Smart Flow validates same membership before/after sequencing;
- deterministic sequencing is required;
- Spotify payload proof requires 21 unique Spotify URIs in the same order as the 21 gift IDs;
- existing Spotify playlist is read back and compared in order;
- partial/mismatched playlist can be replaced with the proved URI sequence;
- completion is recorded only after the delivery boundary succeeds.

Still unproven:
- real W38 gift build from Ben's local state;
- real Spotify API delivery/playability and returned 21-track order.

### G6 — Week transition — AMBER, live W38→W39 rollover required
Code safeguards present:
- W39 is ready before W38 closes;
- week-transition health can inspect W38 official/reserve state and W39 start;
- learning, positive bank, gift and delivery history have separate persistent stores;
- week-specific daily keys prevent W39 from overwriting W38.

Required live proof:
- W38 closes on Saturday;
- W39 opens Sunday cleanly;
- W38 ratings/history remain intact;
- learning and positive reserve remain intact;
- W38 gift/delivery remains intact.

### G7 — Production UX — GREEN for the current 1.0 scope
- one current icon family in the entry/daily path;
- calm phone-first daily and Saturday layouts;
- explicit today, caught-up, week-complete and safe-wait states;
- no old version-route terminology in the active user path;
- reserve positions are visibly distinguished from official Muziekmeter positions.

Cosmetic enrichment remains post-1.0.

### G8 — Release proof — RED until the controlled live cycle is complete
The full proof cannot be inferred from code. Required evidence:
`open → daily selection → rating → reload → catch-up → 21 official → gift → Spotify delivery protection → W39 transition → history intact`.

## Release position at 2026-09-18
Code-green: **G1, G3, G4, G7**.
Device/live amber: **G2, G5, G6**.
Final proof red by definition until completion: **G8**.

There is no newly discovered code blocker in this audit that requires a redesign before the W38 Saturday proof. The remaining release-critical evidence is predominantly real-device/live-cycle evidence.

## Next execution order
1. Do not destabilize the Saturday or daily engines with nonessential changes before the live W38 proof.
2. Use the current production path for the W38 Saturday close and Spotify gift proof.
3. Use the storage-health evidence around reload/close/reopen.
4. On Sunday, verify W39 clean start plus W38 history/learning/reserve/delivery preservation.
5. If those pass, rerun this gate audit and only then decide root promotion / Music DNA 1.0 label.
