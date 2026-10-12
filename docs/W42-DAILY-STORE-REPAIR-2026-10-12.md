# W42 dag 2 — uitgevoerde opslagreparatie

De concrete reparatie is gebouwd bovenop PR #13, commit `321376c1c758b09e3049744cf99f693caa3a7894`. Geen merge, productie-uitrol, echte iPhone-opslag of Spotify-write uitgevoerd.

## Wat verandert

`test/index.html` verwijst naar één actuele dagelijkse ingang: `test/daily.html`. De 21 oudere writer-routes blijven gesloten zoals in PR #13. Een reeds geopende of gecachete historische pagina kan daarmee nog steeds oude `localStorage` wijzigen. Daarom gebruikt de actuele dagelijkse ingang voortaan een eigen IndexedDB-record binnen **dezelfde origin**. Geen nieuwe host, account, serverdatabase, functies of externe gegevensverhuizing.

Bij de eerste gezonde opening leest de app alle `bmd-`-sleutels als exacte strings. Zij schrijft niets terug naar de bron en wist niets. Eén opslagtransactie bewaart zowel de ongewijzigde oorspronkelijke kopie als de actuele toestand. Die oorspronkelijke kopie blijft bij iedere volgende write behouden. Een lopend oud hersteljournal, ontbrekende bestaande beoordelingen/reserves, veranderende bron, onleesbare gegevens of onbeschikbare opslag stopt de overgang. Bestaande voorraadconflicten blijven door de bestaande preflight geblokkeerd.

Na deze grens leest de dagelijkse app uitsluitend haar eigen record. Oude bankcode en zelfs `localStorage.clear()` kunnen dit record niet wijzigen. Nieuwe beoordelingen, learning, twijfelregistratie en voorraad worden samen opgeslagen; de interface bevestigt pas na voltooiing van de IndexedDB-transactie. Selecties worden eveneens opgeslagen voordat ze bruikbaar worden. De bestaande exclusieve Web Lock blijft nodig. Geen terugval naar oude opslag na een opslagfout. Native vertraagde learning-herschrijvingen zijn verwijderd; de gewone start en beoordeling voeren de benodigde resync al uit.

De atomiciteit gebruikt de [IndexedDB-specificatie](https://www.w3.org/TR/IndexedDB/). De code vraagt `durability: 'strict'`; dit is geen bewijs voor fysieke schijfduurzaamheid bij een OS-crash.

## Concreet bewijs

Bewijs en SHA-256 van de geteste bronbestanden: `W42-DAILY-STORE-PROOF-2026-10-12.json`.

- 25 bestaande offline regressieprogramma's PASS, inclusief W42 dag 1/2, journalherstel, opslagfalen en FIFO.
- Catalogusaudit: 3.877 records, PASS; releasepinnen en diffcontrole PASS.
- Echte Chromium 155-browser met uitsluitend fictieve gegevens: alle oorspronkelijke strings behouden; historische beoordelingen, playlistregistraties en FIFO behouden.
- Tweede echt browserdocument op dezelfde origin vóór writes geblokkeerd.
- Werkelijke historische bankcode verwijdert de fictieve reserve uit oude opslag. Het nieuwe record en zijn reserve blijven identiek, ook na wissen van de oude opslag.
- Werkelijk door een service worker gecachete historische bankcode geeft dezelfde veilige uitkomst. De cacheheader bevestigt de historische response.
- Dag 2-beoordeling behouden na sluiten/heropenen terwijl oude opslag leeg is.
- Afbreken ná het opslagverzoek: geen bevestiging, geen gedeeltelijk gewijzigd duurzaam record, veilig heropenen.
- Lopend oud journal, ontbrekende IndexedDB, afgebroken eerste overdracht en lege bron: overgang gestopt, nul bronwrites, geen terugval.

De native proef gebruikte echte documenten in iframes. Geen claim voor top-level tabs, iPhone/Safari/PWA, suspension, BFCache, daadwerkelijk volle schijfquota of OS-crash. Die grenzen staan ook in het bewijsbestand.

## Begrensde vrijgave

Code en gericht desktopbewijs zijn gereed; **productie blijft wachten op expliciet GO**. Deze proef heeft geen persoonlijke gegevens bekeken of overgezet.

De eerste echte overgang moet in de bestaande iPhone-app/opslagcontext gebeuren, met oudere Music DNA-pagina's gesloten en zonder cache- of websitegegevens te wissen. Gebruik vervolgens uitsluitend de dagelijkse ingang. Eén korte begeleide controle: bekende beoordelingen/reserves zichtbaar, juiste dag 2-nummers, gewone beoordeling en behoud na heropenen. Als de app de oude gegevens niet ziet of een conflict meldt: stoppen, niets wissen en één herstelbesluit nemen.

De oorspronkelijke kopie bewaart wat bij de overgang aanwezig is; zij kan eerder verdwenen gegevens niet terughalen. Beoordelingen die daarna nog in een oude pagina worden gemaakt, horen bij de oude kopie en worden niet automatisch bijgemengd. De zaterdagmachine blijft afzonderlijk; W42-zaterdag blijft gesloten en leest nog geen nieuwe dagelijkse opslag. Geen tweerichtingssynchronisatie toevoegen.

## Herhalen

Offline: `node scripts/run-weekly-regressions.cjs`, `node scripts/pin-daily-release.cjs --check`, `python3 scripts/audit-master-depot.py`.

Gerichte browserproef, met Playwright beschikbaar: `node test/daily-store-native-regression.cjs <rapport.json>`. Kies zo nodig de Chrome-binary via `MUSIC_DNA_CHROME`.

Als browserstart lokaal beperkt is: `node test/daily-store-native-regression.cjs --serve <rapport.json>`, open de getoonde tijdelijke localhost-URL en klik **Start gerichte test**. De pagina weigert iedere origin waar al opslag bestaat. Voor `?syntheticFailure=pending`, `unavailable`, `abort` of `empty` telkens een nieuwe lege localhost-origin gebruiken. De server injecteert uitsluitend in deze test een vaste datum; de productiebestanden krijgen geen testdatum of faalinjectie.
