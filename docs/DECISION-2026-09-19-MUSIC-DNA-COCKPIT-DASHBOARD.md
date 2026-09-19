# Music DNA — Cockpit Dashboard and instrument-status entry

Date: 2026-09-19
Status: ACCEPTED DESIGN PRINCIPLE

## Purpose
Music DNA gets a persistent cockpit/dashboard inside Mijn Muziekwereld. It is not an admin page: it is part of the music experience and functions as Ben's personal Music-DNA logbook, instrument panel and machine-room view.

The daily Ontdek-DNA experience remains calm, cinematic and phone-first. Detailed counters and gauges must not clutter the daily rating flow.

## Entry point
The compact element in the upper-right area of the existing Ontdek-DNA visual becomes the cockpit instrument/status entry.

Normal state:
- small, calm instrument;
- green/healthy status;
- may show a meaningful compact counter such as Music-DNA odometer or reserve status;
- tap/click opens the full cockpit.

Contextual states may temporarily take priority:
- reserve attention / refuel;
- near-empty reserve;
- milestone reached;
- genuine technical attention required.

The small instrument therefore acts as both status light and doorway into the cockpit.

## Full cockpit
The full dashboard may contain multiple genuine instruments and counters. Fuel/reserve is only one instrument.

Candidate instrument families:
- Music DNA odometer: cumulative real Music-DNA activity/discoveries;
- positive Saturday reserve and estimated safe Saturday coverage;
- current week progress (official ratings completed / 21);
- vote distribution: RAAK / GOED / TERUGKOMEN / NIET;
- vote views for current week, current year and all-time;
- tracks evaluated and positive discoveries;
- unique artists;
- unique albums;
- genres/styles discovered;
- weekly gifts completed;
- Flow-DNA status/history;
- Spotify delivery/archive health;
- milestones and records;
- machine-room warning/status lights.

## Odometer principle
The cockpit may use automotive metaphors beyond fuel:
- trip counter: current week;
- longer trip/year counter: current calendar year;
- lifetime odometer: all Music-DNA history;
- distance-since-event analogues where musically meaningful.

All displayed numbers must be derived from real stored Music-DNA data. Never fabricate illustrative production counts.

## Time scopes
Where meaningful, a counter should support:
1. this week;
2. this year;
3. all time.

This is especially relevant for ratings, discoveries, tracks, artists, genres and completed weekly journeys.

## Reserve / fuel system
Goal: the Music-DNA machine should not stall for lack of positive Saturday stock while safe new candidates can still be generated.

Rules:
- 3 official tracks per day remain the Music Meter;
- extra reserve tracks remain separate from official ratings;
- RAAK and GOED may enter positive reserve;
- +2 extra reserve candidates per day is the normal replenishment rhythm, not a hard maximum;
- replenishment must become adaptive when projected reserve coverage is insufficient;
- the system should aim to preserve enough unused positive, Spotify-safe tracks to absorb approximately two poor-yield weeks;
- reserve forecasting should use actual positive yield and projected Saturday consumption, not only a fixed raw-count threshold;
- previously delivered Saturday tracks remain unavailable for reuse.

User-facing reserve states:
- OP PEIL — no action;
- BIJTANKEN — extra discoveries are being offered;
- BIJNA LEEG — explicit early warning and stronger replenishment;
- KRITIEK — delivery risk requires immediate attention.

Warnings must appear before a Saturday gift is endangered.

## Visual language
The cockpit belongs to the established Music-DNA world:
- cinematic rather than administrative;
- dark, rich Music-DNA visual language;
- instrument-cluster / automotive dashboard metaphor is welcome;
- gauges, odometers, indicator lamps and milestone lights may be used;
- information density is welcome inside the cockpit because it is an intentional detail view;
- the daily discovery page itself remains visually calm.

## Relationship to Mijn Muziekwereld and Edelsteenmuseum
Mijn Muziekwereld is the parent environment. The cockpit is a functional/experiential destination within it.

The Edelsteenmuseum remains about discoveries, weekly gifts and collected musical journeys. Reserve health and machine telemetry do not belong primarily in the museum.

## Non-blocking rule
Cockpit visuals, counters, milestone animations and status enrichment may never weaken or bypass:
- rating integrity;
- fixed 21-track Saturday gift rules;
- positive-only gift selection;
- uniqueness/no-repeat rules;
- Flow-DNA sequence integrity/determinism;
- exact Spotify payload proof;
- safe-wait behavior.

The cockpit observes and explains the machine; it does not compromise it.

## Delivery priority
This dashboard is accepted into the total Music-DNA design, but its visual build must not block the current W39 production line. First preserve/finish W39 reliability; dashboard implementation can then grow incrementally on top of correctly stored telemetry.
