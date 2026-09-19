# W40 candidate source — release gate

Date: 2026-09-19
Status: BLOCKED FOR READY FLAG — source payload not yet present in repository

## What was checked
The repository contains the metadata shell for `data/surprise-master-v1.json`, describing a master-derived set of 3,284 artists, but its committed `artists` array is empty. The small `surprise-master-proof-v1.json` contains only 10 proof records.

Therefore the repository currently does **not** contain enough committed master-derived track records to construct and verify a genuine 63-track W40 production pool without inventing or externally substituting data.

## Safety decision
Do not create a synthetic W40 candidate file merely to satisfy the new 63-track count.

W40 remains absent from `music-dna-weeks-v1.js` and therefore cannot accidentally become production-ready.

## Required source for W40
Before W40 can be marked ready, provide/commit one of:
1. the already-generated full surprise/master payload referenced by `surprise-master-v1.json`; or
2. an equivalent export from the Music-DNA master database containing enough eligible exact Spotify track identities.

## W40 release gates after source arrives
- >=63 unique eligible candidate tracks;
- no artist duplicates where selector rules require artist uniqueness;
- exact Spotify identity for every live candidate;
- exclusion against previously rated/offered/delivered tracks;
- seven-day worst-case selector stress: 3 official + 6 reserve per day;
- 63/63 unique selections in that stress test;
- W40 is added to week registry only after all gates pass.

## Why this is a positive block
This is intentional fail-safe behavior. Candidate capacity is the filling station; the system must never pretend the pump is full when the verified source material is not actually present.
