# Music DNA — Muziekmeter / Genre-DNA Bewaking v1.0

Date: 2026-10-01  
Status: FROZEN DESIGN / IMPLEMENTATION CALIBRATION

## Purpose

The Muziekmeter monitors whether the official Ontdek-DNA offer stream keeps pace, over time, with the natural proportions represented by the canonical Genre-DNA landscape, without rigid daily or weekly quotas.

It separates four questions:

1. what Ontdek-DNA offers;
2. how Ben rates those candidates;
3. whether the positive harvest can be sequenced naturally by Flow-DNA;
4. whether long-term selector steering is needed.

## Measurement object

Only official daily positions 1–3 count toward longitudinal Genre-DNA balance.

- 7 days x 3 positions = 21 official offers per week.
- Reserve positions are stored separately and never affect the official balance.
- One offered track counts once through one explicit primary Genre-DNA main area.
- Secondary genres/styles remain metadata only.

## Horizons

- 21 tracks / 1 week: observation only.
- 126 tracks / 6 weeks: early-warning and direction radar.
- 273 tracks / 13 weeks: primary steering horizon for sufficiently large main areas.
- 546 tracks / 26 weeks: confirmation layer and primary horizon for small areas.

Measurements move every week. Steering decisions normally occur only at four-week checkpoints.

## Reference

Canonical reference file:

`data/genre-dna-reference-2026-10-01.json`

Basis: 48 canonical Genre-DNA playlists x 30 positions = 1440 playlist positions.

The reference is a course, not an immutable truth. Future materially different Master states receive a new reference version; historical measurements keep their original reference id.

## Status logic

- GREEN: within ordinary variation.
- YELLOW: statistically notable deviation; observe only.
- ORANGE: structural deviation with sufficient mass and no convincing recent recovery; investigate before correction.
- BLUE: still outside green, but recent six-week trend is consistently recovering; do not intensify correction.
- RED: persistent orange deviation, supported by longer horizon and not resolved by prior soft correction.
- GREY: insufficient statistical mass for automatic steering.

Initial statistical bands:
- green: |z| < 1.5
- yellow: 1.5 <= |z| < 2.0
- orange: |z| >= 2.0

Status is not itself a correction order.

## Steering groups

### 13-week primary
- Punk & New Wave
- Hair Metal
- Prog & Art Rock
- Extreme & Modern Metal
- Alternative & Indie
- Hard Rock & AOR
- Progressive Metal

### 13-week cautious, 26-week confirmation
- Classic Heavy Metal

### 26-week primary
- Garage Rock
- Glam Rock
- Psychedelic & Space Rock

## Ratings

RAAK / GOED / TERUGKOMEN / NIET primarily measure candidate quality inside taste areas.

A strong hit rate does not automatically enlarge a genre share.  
A weak hit rate does not automatically shrink it.

The official raw ratings are immutable evidence so future scoring formulas can be recalculated without rewriting history.

## Flow-DNA

Flow-DNA remains downstream.

It:
- orders the positive weekly harvest;
- reports opening strength, transition quality, narrowness and fragmentation;
- may emit diagnostic signals such as FLOW-NARROW or FLOW-FRAG.

It does not directly alter genre weights and cannot on its own trigger steering.

## Corrections

Correction hierarchy:

1. candidate quality;
2. Music-DNA fit;
3. eligibility/newness;
4. only then soft balance correction among otherwise suitable candidates.

Normal selector factor:
`1.00`

Possible soft steps:
- first confirmed correction: 0.97 / 1.03
- sustained deviation: 0.95 / 1.05
- exceptional persistent limit: 0.90 / 1.10

After an actual correction:
- minimum three-week cooldown;
- no automatic intensification during BLUE recovery;
- return gradually toward 1.00 after GREEN restoration.

Before any correction, diagnose candidate supply, primary classification, source concentration, previous correction effects and Flow-DNA evidence.

## Ledgers

### Offer Ledger
One immutable record per official offer:
- week/day/position
- Spotify identity
- artist/title
- primary Genre-DNA
- secondary styles
- country/year
- selector source
- active correction factor and cause code

### Rating Ledger
- raw user rating
- positive/not-positive derivation
- no rewriting of historical raw rating

### Balance Ledger
Per week and area:
- reference id/share
- expected and actual counts
- percentage-point deviation
- z-score
- 6w trend
- 13w / 26w status
- sufficient-data flag

### Correction Ledger
Every real intervention:
- start week
- area
- old/new factor
- cause code
- evidence snapshot
- cooldown-until
- recovery/end state

## Cause codes

- BAL-HIGH
- BAL-LOW
- TREND-RECOVER
- FLOW-NARROW
- FLOW-FRAG
- CAND-LOW
- DATA-LOW

## Historical calibration

- W36–W39 remain the historical 84-track baseline and are not reconstructed.
- W40–W43 are practical calibration weeks.
- First 6-week view: W36–W41.
- First full 13-week view: W36–W48.
- First full 26-week view: W36–W61.

Known historical signal: Hard Rock & AOR + Hair Metal accounted for 47/84 = 56.0% across W36–W39. This is calibration evidence, not retroactive proof that a correction was required.

## Implementation files

- `data/genre-dna-reference-2026-10-01.json`
- `scripts/muziekmeter-genre-balance-v1.cjs`

The calculation layer is deliberately pure: it computes evidence and recommendations but does not modify production selector weights.

## Freeze rule

Do not redesign the measurement philosophy during W40–W43 unless live evidence exposes a genuine defect. Calibrate thresholds and data plumbing; do not silently introduce quotas.
