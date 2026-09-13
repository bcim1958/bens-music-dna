# Decision — Ontdek-DNA unique positive harvest

Date: 2026-09-13
Status: ACCEPTED / ACTIVE

## Existing rule
The earlier operational gift implementation treated 21 tracks as the applicable weekly Spotify gift norm and could use positive reserve to reach 21.

## Why this changes
The 21 weekly ratings are the complete measurement set. The Spotify gift is a curated positive harvest and must not duplicate tracks already delivered in an earlier weekly gift. W37 demonstrated that forcing the gift back to 21 after the unused positive reserve is exhausted either creates duplicates or requires arbitrary/unrated filler. Both conflict with the product intent.

## Decision
1. The weekly measurement remains exactly 21 explicit ratings: 7 days × 3 discoveries.
2. The Ontdek-DNA Spotify gift contains the unique, safely deliverable RAAK/GOED harvest for that week.
3. Previously positive, safely deliverable reserve may supplement the current week only when it has never been delivered in an earlier weekly gift.
4. A gift is not artificially padded to 21 when unused positive reserve is exhausted.
5. Previously delivered tracks are never reused merely to reach a numeric target.
6. NOG EENS and NEE are never filler for the positive gift.
7. Spotify delivery remains subject to exact track identity and actual delivery verification.
8. W36 remains closed and unchanged.
9. W37 is the first repaired example under this rule: 12 unique positive tracks, verified in Spotify on 2026-09-13.

## Relationship to earlier decisions
`DECISION-2026-09-11-MUZIEKMETER-ONTDEK-DNA.md` remains authoritative for the distinction between 21 raw weekly ratings, the Muziekmeter, and the curated Ontdek-DNA harvest. Any earlier wording that implied every weekly Spotify gift itself must always contain 21 tracks is superseded by this decision.
