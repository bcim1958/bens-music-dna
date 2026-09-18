# Music DNA 1.0 — production consolidation plan

Date: 2026-09-18
Status: ACTIVE BUILD GATE
Repository baseline: c540747

## Product rule
**First a real app that works reliably every day; enrich only after that.**

A 1.0 feature belongs in the production path only when it is needed for the dependable daily/weekly Music-DNA loop.

## Verified current production-like path
The most mature daily path currently lives under `test/`:
- `test/index.html` → redirects to `daily.html?v=20260908-w37-live`
- `test/daily.html` → redirects to `daily-v3.html?v=20260913.w38reserve4`
- `test/daily-v3.html` resolves the active week, loads its candidate pool, presents three official positions plus conditional reserve position 4, stores ratings and routes a complete week to the Saturday gift.
- `music-dna-learning-v1.js` consolidates official and reserve observations into the learning store and preserves quarterly doubt state.
- `music-dna-positive-bank-v1.js` maintains positive reserve, blocks previously delivered material, requires exact Spotify URLs and builds a fixed 21-track gift.
- `music-dna-week-transition-v1.js` validates a complete 7×3 official week and can prepare a next-week candidate plan.
- `music-dna-weeks-v1.js` currently contains ready weeks only through W38.
- `zaterdagcadeau.html` still bridges to the separate v3 gift implementation.

The repository root `index.html` is NOT the 1.0 shell: it is an old W35 30-track Spotify proof and must not remain the permanent app entry.

## 1.0 release gates

### G1 — Single permanent entry
Create one stable production entry. No user-facing W35/W37 version routing and no dependency on knowing test URLs.

### G2 — Durable daily state
Prove that selections and ratings survive:
- ordinary reload;
- closing/reopening Safari;
- installed iOS home-screen launch;
- app version/cache changes.

Do not replace or migrate existing localStorage keys until compatibility with accumulated ratings is proven.

### G3 — Calendar/week continuity
Remove the hard stop after W38. The app must either have a verified next-week candidate set or enter an explicit safe wait state. It may never silently keep serving the last ready week as if current.

### G4 — Official measurement integrity
Exactly positions 1–3 feed the official 21-per-week Muziekmeter history. Reserve position 4 stays separately labelled and must never contaminate the official series.

### G5 — Saturday gift integrity
A gift is publishable/deliverable only when:
- the official week is complete;
- the resulting set contains exactly 21 tracks;
- every track is positive (RAAK/GOED);
- no track was delivered in an earlier weekly gift;
- every track has exact verified Spotify identity;
- real Spotify delivery is checked at the final delivery boundary.

If any condition fails: safe wait/rebuild, never fake completion.

### G6 — Week transition
After Saturday closure, the next week starts cleanly while historical ratings, learning, positive reserve, delivery history and doubt state remain intact.

### G7 — Production UX
One logo/icon system, calm phone-first layout, clear states for today/caught-up/week-complete/safe-wait/error, and no prototype terminology visible to the normal user.

### G8 — Release proof
Before calling the app Music DNA 1.0, run a controlled full-cycle proof:
open → daily selection → rating → reload → catch-up → 21 official ratings → gift build → delivery protection → next-week transition → history intact.

## Explicitly post-1.0
Do not block 1.0 on:
- broad Artist World rollout;
- DNA-LAB / petrischaal UI;
- DNA Specials automation;
- DNA Express integration;
- richer animation/cinematic worlds;
- nonessential cosmetic playlist-cover work.

Architecture may leave clean extension points for these.

## First implementation slice
1. Preserve the current working W38 daily path unchanged as rollback reference.
2. Build a stable production shell from the proven daily-v3 path rather than rewriting the engine.
3. Add a truthful week resolver that does not mislabel an expired last-ready week as current.
4. Add an explicit production health/status layer for storage, active week, candidate pool and gift readiness.
5. Only after these pass, promote the shell to the permanent root entry.

## No-regression rule
No enrichment is allowed to change the official rating semantics, historical storage, fixed-21 gift rule, positive-reserve rule, exact-Spotify safety, or already delivered history without a separately accepted migration decision.
