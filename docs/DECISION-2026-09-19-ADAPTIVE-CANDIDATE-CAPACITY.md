# Music DNA — adaptive weekly candidate capacity

Date: 2026-09-19
Status: ACCEPTED RELEASE GATE

## Reason
The positive reserve engine can now request 0, 2, 4 or 6 extra reserve opportunities per day. A weekly candidate pool sized only for the old fixed +2 design can therefore starve the replenishment engine.

## Capacity rule
A future week must be engineered for the maximum supported adaptive day:

- 3 official Music Meter tracks per day;
- up to 6 reserve opportunities per day in CRITICAL reserve state;
- 7 days.

Maximum structural weekly demand = 7 × (3 + 6) = **63 unique candidate tracks**.

Therefore **W40 and later may not be marked production-ready unless their candidate source can safely supply at least 63 unique eligible tracks**, or an equivalent cross-week candidate source can prove the same no-duplicate capacity.

This is a capacity ceiling, not a promise that Ben will see 63 tracks. In normal healthy operation the reserve engine offers no extras; during ordinary replenishment it offers +2. +4/+6 exist only to prevent a depleted reserve from stranding a future Saturday.

## Release checks
Before a future week is marked ready:
1. at least 63 unique eligible candidate IDs are structurally available;
2. selector can satisfy seven consecutive worst-case 9-track days without duplicate IDs;
3. all candidates intended for live delivery have safe Spotify identity;
4. previously rated/offered/delivered IDs remain excluded according to existing rules;
5. candidate capacity must not weaken the 21-official-track Music Meter rule.

## W39 exception
W39 predates this rule and has 40 unique candidates. It remains a controlled transition week. Its daily page degrades reserve requests to the number of unused candidates actually available rather than failing the official 3-track day.

W39 must not be used as the capacity template for W40+.

## Relationship to reserve dashboard
The cockpit fuel state describes positive deliverable stock; candidate capacity describes the filling-station capacity. Both must be healthy for a robust system.
