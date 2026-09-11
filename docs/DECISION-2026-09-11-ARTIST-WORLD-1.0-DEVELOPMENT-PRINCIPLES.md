# Decision — Artist World 1.0 development principles

Date: 2026-09-11
Status: ACCEPTED

## Why this decision exists
The Music Portal / Artist World concept has moved beyond broad exploration. Tests across known and lesser-known artists, followed by the H.E.A.T → New Horizon route, show that the Master can be the trusted centre of Ben's musical world without being its boundary.

This decision records the principles that must survive future chats and implementation work.

## 1. Master = centre, not boundary
The definitive Master remains the trusted personal substrate. Artist discovery may extend beyond it through reliable public relations and enrichment, including AllMusic relation types, styles, scenes, personnel, influences and other grounded links.

External artists are not automatically promoted into Ben's personal Music DNA. Expansion is relevant only when the musical connection is meaningful for Ben.

## 2. Artist World 1.0 is a navigable place, not an information page
An artist is presented as a betreedbare musical world. A reusable spatial grammar may exist, but the artist's real identity, history, music and relationships determine how that world manifests.

Universal test: remove the artist name/logo; the world should still feel meaningfully connected to that artist rather than like a generic reskin.

## 3. Calm phone-first information architecture
The iPhone scene must remain calm. Essential band/music knowledge is offered in one compact block with deeper detail behind it. Trivia is likewise optional and compact. Do not scatter every fact across tappable props.

Spatial objects are used for meaningful exploration, not to turn the screen into a dashboard.

Core rule:
> Not everything Music DNA knows needs to be shown immediately.

## 4. Studio first for the H.E.A.T vertical proof
The first substantive Artist World proof begins in the H.E.A.T Studio.

The Studio explains music to a music lover, not to a musician or sound engineer. Avoid technical controls that require musical-production knowledge. No fixed five-fader analysis model.

A mixing desk may contain one enticing, subtly pulsing Music-DNA control. Activating it can reveal a plain-language explanation such as **HET GELUID VAN H.E.A.T**, followed by optional prompts such as **LAAT HET ME HOREN** and **WAAR KOMT DIT VANDAAN?**.

Artist-specific explanation is preferred over a universal technical checklist.

## 5. Music first
A direct action such as **ONTDEK H.E.A.T** / **LUISTER NAAR H.E.A.T** remains primary. Explanations should lead back to listening wherever possible.

Where Music DNA makes a musical claim, the user should where feasible be able to hear the relevant music with one action.

## 6. Muziekkoorts separates reaction strength from evidence
Muziekkoorts is qualitative, not false numerical precision. One strong track may justify **STERKE EERSTE REACTIE**, but not a broad claim that Ben loves the whole artist.

Interest, rating evidence and confidence remain distinct concepts.

## 7. Meer zoals deze artiest = explainable doors
**MEER ZOALS DEZE ARTIEST** does not open a generic endless recommendation list. It opens a small number of meaningful doors, normally around 3–5, with an explanation of why each relation exists.

Possible relation types include Similar To, Influenced By, Followed By, Associated With, Collaborated With, shared Genre/Style, scene/country/period, shared personnel/producer and personal Music-DNA match.

Do not label every relation as similarity. Preserve the real relation type.

## 8. First complete vertical loop
The first controlled loop is:

**H.E.A.T → Meer zoals deze → New Horizon → Artist World → Lijkt interessant → Ontdek-DNA candidate**

New Horizon is a strong external proof because it is outside the current Master and has a grounded personnel bridge through Jona Tee (and H.E.A.T history also intersects with Erik Grönwall).

The purpose is to prove one complete route before designing many rooms or artists.

## 9. Lijkt interessant is curiosity, not taste evidence
Preferred action:
**LIJKT INTERESSANT**
*Zet op mijn Ontdek-DNA-kandidatenlijst.*

This records curiosity only. It must not be interpreted as RAAK, GOED or another positive taste rating.

A candidate may later enter an Ontdek-DNA listening round. Only actual listening/rating becomes taste evidence.

## 10. EXIT is part of the universal spatial grammar
Artist Worlds must contain an immediately understandable **EXIT**.

Meaning:
- door behind / previous route = where the user came from;
- new doors = where the user can continue;
- EXIT = leave the current artist-world exploration and return to the Music Portal.

Core UX principle:
> You may get lost in Music DNA, but you must never become lost.

EXIT should feel native to studio/backstage/stage environments and reduces dependence on intrusive app navigation chrome.

## 11. Movement is progressive enhancement, not a 1.0 requirement
Music DNA 1.0 does not need animation to feel like a world.

Base rule:
> The world is still by default. Movement happens briefly when something meaningful occurs.

Avoid continuous character animation, heavy permanent 3D rendering, blocking transitions and movement that exists only to prove the scene is alive.

Simple lightweight responses such as a glow, pulse, meter reaction or light turning on are acceptable where useful. Content and navigation must never depend on animation.

Development order:
**WERKEN → BEGRIJPELIJK → MOOI → SFEERVOL → LEVENDIG**

Later improvement passes may add richer motion only when it improves meaning, orientation, reward or wonder.

## 12. The Music Master remains restrained
The Music Master is not a constant narrator or animated receptionist. He may subtly notice or support discovery, but the music and world do the explaining.

Working rule:
> He does not continually explain the world; he helps the world explain itself.

## 13. Data-driven scalability
World richness degrades gracefully with available reliable data:
- rich data → richer world;
- sparse data → compact but credible world;
- never invent filler.

Reusable scene components and data/style tokens are preferred over bespoke heavy 3D worlds for thousands of artists.

## 14. Accepted product loop
The expandable Music-DNA loop is:

**artist world → grounded relation → another artist → curiosity signal → Ontdek-DNA candidate → listening/rating → Music DNA learns → better future doors**

This loop is now the functional backbone for continued Music Portal development.

## Immediate next step
Continue with the H.E.A.T Studio 1.0 as the first calm iPhone-first scene, then prove the full H.E.A.T → New Horizon → Lijkt interessant route before broadening production scope.
