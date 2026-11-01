# W44-bronwaarheid en leesproef v2 — 1 november 2026

## Materiële statuswijziging

PR #22 heeft nu head **5efb2258fb0a428a6d760238565605c2d9fe31da**. Het nieuwe gedateerde ontvangstbewijs meldt Spotify-publicatie op 31 oktober. In deze ronde is de openbare Spotify-embed van playlist **1oUn9w2BWTztyCmARl8xzk** onafhankelijk opnieuw gelezen: alle 21 URI’s staan exact in dezelfde volgorde als selectie en ontvangstbewijs. Spotify-naam: Ontdek DNA #2026-44. De bronafhankelijkheid ‘publicatiebewijs ontbreekt’ is voor de playlistidentiteit/volgorde daarmee opgelost. De Express-editie zelf is nog niet gepubliceerd.

Account, mapplaatsing en hoes zijn hier niet opnieuw in Spotify Desktop gecontroleerd; die observaties blijven toegeschreven aan het receipt van 31 oktober. Geen audio afgespeeld, geen auditieve flowcontrole en geen bewezen toekomstige zaterdagautomaat. De historische voorbereidingsrapporten blijven historisch bestaan.

Main live nog e7351f0c; PR #18 blijft open/draft/conflicterend op 7bae6b74; PR #23 begon deze ronde op 581266ca. Geen merge of deployment uitgevoerd.

## Gebouwd

1. Read-only adapter scripts/express-week-source.cjs: vergelijkt geselecteerde 21, gedateerd publicatiereceipt en onafhankelijk gelezen exacte Spotify-volgorde. Leidt een immutable **published-playlist-snapshot** en brongebonden bio-queue af. SOURCE_MATCHED betekent alleen dat de bronnen matchen, nooit dat Express is vrijgegeven. Geen netwerk-/Spotify-/voorraadwriter.
2. De snapshot is géén reconstructie van de oorspronkelijke officiële cohort/extra cohort van Music DNA 2.0. W44 blijft de feitelijk gepubliceerde selectie uit de bestaande bron; geen ratings, extra kandidaten of historische cohorts verzonnen.
3. Reproduceerbare lokale leesproef v2 uit het bestaande manuscript van 30 oktober: zes verhaalsegmenten, alle vijftien bronnen, Mijn Week met actuele publicatiestatus en directe W44-luisterlink. V1-HTML, v1-manuscript, v2-manuscript en oorspronkelijke input/cutoff blijven ongewijzigd. Geen nieuwe journalistieke claims toegevoegd buiten de gecontroleerde statuswijziging.
4. Nieuwe input-r2.json gebruikt een nieuwe expliciete cutoff en aparte artefacten. Oude editie-input wordt niet herschreven. Werkelijke preflight blijft terecht HOLD wegens ontbrekende editorialReview en deviceReview; volledige brononderbouwde weekbio’s ontbreken daarnaast. De bio-onderzoekqueue is geen publicatieklare bioverzameling.

## Tests en readback

- 13 nieuwe synthetische adaptertests PASS: verkeerd receipt/week/playlist/head, volgordeverschil, dubbele track, ontbrekende artiest, toekomstig/verouderd bewijs en ongeldige bron.
- 25 bestaande offline voorbereidingsveiligheidstests opnieuw PASS na deze adaptertoevoeging. Nul externe writes en geen end-to-endclaim.
- Reproduceerbaarheid van v2-builder gecontroleerd: exact dezelfde HTMLbytes bij dezelfde invoer.
- Chrome-viewports iMac 1440×900, iPhone 390×844 en iPad 820×1180: alle tien secties bereikbaar; 23 verhaalalinea’s exact gelijk aan manuscript; 15 bronnen; terugnavigatie en positieherstel; geen horizontale overloop of JavaScript-fout. De eerste scrolltest mat de positie vóór Playwright een op mobiel onzichtbare knop in beeld schoof; de test is gecorrigeerd om de werkelijke zichtbare klikpositie te meten. Geen productiebug of echte apparaatgoedkeuring daarvan gemaakt.
- iMac-/iPhone-leesbeeld visueel bekeken. Nog typografische proef: authentiek beeld, eigen beeldwerelden, kantlijnquiz, nieuws en concertpagina’s zijn niet gereed. Uniforme proefopmaak is geen nieuwe aanvaarde magazinevorm.
- Nieuwe CI-stap voor adapter en afzonderlijke browser-proofjob toegevoegd. Die voert uitsluitend lokale/synthetische checks uit; geen publicatie. Exacte CI-head/readback wordt na GitHub-overdracht opgeslagen buiten dit dossier.

## Onaangeroerd en open

Current/original/legacy, ratings, FIFO/reserves, journalen, Master/Depot, Walk & Listen en Ontdek-DNA-runtime niet gewijzigd. Familieplan en Digitale werkplek ongemoeid. Deze uitvoering heeft niets in Spotify aangemaakt, gewijzigd of gepubliceerd.

Vervolg: de 21 weekbiografieën bronmatig schrijven, resterende consequential credits/chronologie verifiëren, gevarieerde authentieke beeldlaag, verdere rubrieken en echte apparaat-/publicatiechecks. De lokale scheduler-tijdafwijking blijft open; deze tweede heartbeat bewijst wel dat vervolgwerk startte, maar niet dat de bedoelde lokale planning betrouwbaar is. Volledige Editie 1 en onbemande weekproductie blijven OPEN/HOLD.
