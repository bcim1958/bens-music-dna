# Music DNA W42 dag 2 — oude writers en gemengde caches

12 oktober 2026. Basis: PR #13, commit `85ad816281b764584385f5eb9d0ecc354efbdb8f`.

**GO voor geïsoleerde vervolg-QA en herreview. NO-GO voor merge en productie.** De nieuwe dagelijkse route en nieuw opgehaalde oude routes zijn beter beschermd. Volledig oude, gecachte of reeds geopende documenten op dezelfde origin blijven ongecontroleerde writers. Dit werk geeft geen vrijgave voor echte iPhone-opslag.

## Aangetoond risico

In native Chromium 155 met echte localStorage en Web Locks houdt de nieuwe dagelijkse pagina de lock vast. Een tweede document laadt de originele bankmodule uit 85ad816 en biedt een verouderde, lege learning-snapshot. De originele `sync()` schrijft vervolgens een lege bank en verwijdert de synthetische historische reserve, ondanks de lock. Dit is een deterministisch tegenvoorbeeld voor meewerkende-lockcoördinatie; er is geen echte gebruikerdata gebruikt. De oude module staat uitsluitend als reproduceerbare fixture in `test/fixtures/compat-bank-85ad816.js`.

Broninspectie bevestigt daarnaast directe ratingwrites in daily-v2 en hydration/bank/FIFO-writes vanuit oude dagelijks-, week- en cadeaupagina's. Een fout in een extern script beëindigt niet automatisch de inline scripts van zo'n oude HTML-pagina. Daarom volstaat een moduleguard alleen niet om alle directe writes uit oude HTML te stoppen. HTTP-cachemeta's en queryversies bieden geen bewijs van scriptinhoud. De onderzochte actuele applicatiebron bevatte geen eigen actieve service-workerimplementatie; een registratie van andere of oudere code op dezelfde origin blijft wel mogelijk.

## Minimale behoudende reparatie

- `daily.html` koppelt alle vijf statische scripts en alle toegelaten dynamische componenten/kandidaten aan SHA-384 SRI-pins. De dynamische loader weigert onbekende componenten. `scripts/pin-daily-release.cjs --check` controleert de pins in regressies; zonder `--check` kan een ontwikkelaar ze na een bewuste bronwijziging regenereren. De browser verifieert bytes vóór uitvoering, onafhankelijk van een querystring of cachehit.
- Learning en bank eisen in echte browserdocumenten de paginarelease `20261012.compat1` en een actieve dagelijkse lease, vóór startup/hydration en vóór hun native writes. De guard geldt ook voor latere calls; offline simulators werken in een kleine DOM zonder native document en gebruiken synthetische opslag. De globale blocked-status trekt toekomstige leasewrites in, ook na controllerchange.
- 21 bestaande routes die learning/bank laden staan met een vroeg geplaatste CSP `script-src 'none'` en een statische wachtmelding stil. Alle scripts en inline handlers in die nieuw geladen documenten blijven uit. Dit sluit ook directe ratingwrites uit oude HTML uit wanneer de browser deze nieuwe HTML werkelijk ontvangt. `daily-v2.html`, `week.html` en `zaterdagcadeau.html` zijn native gecontroleerd. De lijst staat in `test/legacy-writer-routes.json`. De oude bron blijft in de bestanden voor review/historische offline proeven; in de browser wordt zij bewust niet uitgevoerd. Cadeaupublicatie via die routes is daardoor in deze conceptbuild niet beschikbaar.
- Vóór lock, journalherstel, health-probe of hydration weigert daily een service-workercontroller, een registratie op de origin, of een mislukte registratiecontrole. Een controllerchange tijdens gebruik zet de pagina in wachtstand. Er wordt niets automatisch gewist, geen cache geleegd en geen worker van de gebruiker verwijderd. De browserfixture registreert uitsluitend een eigen lege testworker op een nieuwe localhost-origin en ruimt die eigen registratie op.
- Geen opslagmigratie, reset, namespacekopie of Spotifywijziging. Het bestaande journal-forward-recoverybeleid blijft staan.

De SRI-pins verzekeren componentconsistentie bij de betreffende HTML-release; zij bewijzen geen actualiteit van een volledig oudere coherente HTML-release. Journalherstel en health-probe gebeuren vóór dynamische hydration. Een latere SRI-fout kan dus volgen op geldig journalherstel of health-metadatawrites; er is geen algemene belofte dat iedere scriptfout de volledige opstart bytegelijk laat.

## Uitgevoerde validatie

**24 regressieprogramma's PASS**, waaronder de oorspronkelijke 23 en `rating-version-compat-regression.cjs`. De nieuwe suite controleert zes afwijzingen van ontbrekende/verouderde writercontracten, controller/registratie/controlefout vóór writes met intact journal en FIFO-bytes, controllerchange die toekomstige recoverywrites stopt, CSP vóór de eerste scriptuitvoering op alle 21 routes, en de exacte SRI-pins. Node 24.19.0 lokaal. De historische suites gebruiken gesimuleerde scripts/DOM en handhaven zelf geen native CSP; hun PASS is bewijs voor onderliggende logica, geen bewijs dat een bewust geblokkeerde oude browserroute nog functioneel is.

**Native browser compatibiliteit PASS**, finale origin `http://127.0.0.1:8952`, Chromium 155:

1. Nieuwe daily houdt echte Web Lock.
2. Nieuwe versies van daily-v2, week en zaterdagcadeau worden met hun echte CSP als documenten geladen: geen learning-global en bytegelijk opslagbehoud.
3. Losse oude pagina's die de nieuwe learning/bank laden stoppen vóór componentwrites; opslag blijft gelijk.
4. De echte browser-SRI weigert originele 85ad816-bankbytes onder de nieuwe bankpin vóór module-evaluatie. De fixture verandert daarvoor alleen het resourcepad naar de historische fixture en behoudt de nieuwe verwachte digest. Dit is een inhoudsmismatchproef, geen uitputtende HTTP-cachematrix.
5. Compatibele heropening bewaart `firstPositiveAt`, `playlistUses=2` en `lastPlaylistWeek=2026-W39` van de historische synthetische reserve.
6. De volledig oude bankfixture reproduceert de resterende ongecontroleerde writerfout terwijl de nieuwe lock actief is. Dit geslaagde tegenvoorbeeld is bewijs van een vrijgaveblokkade.
7. Een echte eigen service-workerregistratie zonder caching/claim/fetch-handler laat de nieuwe daily vóór alle opslagwrites stoppen; snapshot bytegelijk. Geen echte oudere caching-worker, claim-race of Safari-workerproef uitgevoerd.

**Native journalherstel PASS**, aparte finale origin `http://127.0.0.1:8951`: eerste pagina hydrateert; geïnjecteerde bank-QuotaExceededError bewaart het journal; tweede iframe-documentcontext stopt vóór writes; verwijderen eerste context geeft native lock vrij; heropening herstelt rating en bank en verwijdert pas daarna het journal. Geen echte volle disk, afzonderlijke tabprocessen of OS-crashproef.

**Catalogusaudit PASS** en `git diff --check` PASS. De catalogus/weekplanning is niet gewijzigd. Machinebewijs: `regressions.json`, `native-compat.json`, `native-recovery.json`, `catalog-audit.txt`, `native-compat.png`.

Er waren mislukte ontwikkelruns: bestaande foutmeldingasserties moesten behouden blijven, een fixture gebruikte navigator zonder bestaancontrole, een VM-documentvergelijking vergde contextidentiteit, en het eerste native harnas had geen body voor foutweergave. Een daaropvolgende harnasversie plaatste volledige HTML na een body-tag, waardoor de CSP-meta niet in de head stond; bovendien konden dagelijkse hydrationtimers de snapshots veranderen. De finale proef laat volledige HTML normaal parsen en wacht de vier bestaande timers af vóór de behoudmeting. Deze eerdere fouten/runs zijn niet als PASS meegeteld. De eerder genoemde door 429 geblokkeerde browserrun uit de vorige ronde is ook niet als geslaagd meegeteld.

## Resterende blokkades

1. Volledig oude HTML + oude scripts, reeds geopende documenten, oudere BFCache-documenten en gepubliceerde archiefpagina's kunnen dezelfde originopslag nog benaderen zonder dit contract/CSP/SRI. Er is geen localStorage-toegangscontrole die een nieuwe pagina achteraf aan zulke documenten kan opleggen. De native tegenproef bewijst dat deze blokkade reëel blijft. Wachtmeldingen op nieuwe routes zijn geen bewijs dat alle oude kopieën vervangen zijn.
2. Een toekomstige veilige overgang vereist een aantoonbaar geïsoleerde HTTPS-origin en een afzonderlijk gecontroleerd export/importbeleid, of een andere opslagarchitectuur die oude writers niet delen. Geen migratie uitgevoerd en geen automatische import voorgesteld als reeds veilig. Alleen tabsluiting of cachebusting is onvoldoende vrijgavebewijs.
3. Echte iPhone/Safari/PWA-proeven, lockondersteuning, achtergrond/suspension, Spotify-terugkeer, BFCache, echte quota en crash/disk-durability blijven open. Geen garantie tegen origin-eviction of volledig verlies van localStorage.
4. De service-workerpoort weigert bewust ook registraties die alleen een ander pad op dezelfde origin bedienen. Dat is een conservatieve beschikbaarheidsbeperking; offline bedrijf met een worker is niet vrijgegeven.
5. De 21 oude routes zijn tijdelijk onbruikbaar voor schrijven/publicatie in deze conceptbuild. Dat is de gekozen veilige stop, geen behoud van hun oude functionaliteit.

Geen merge, productie-uitrol, Spotify-request/publicatie of benadering van echte iPhone-data. PR blijft concept. **GO voor herreview en geïsoleerde QA; NO-GO voor dezelfde-origin gemengde versies, merge en productie.**

Technische onderbouwing: [W3C Subresource Integrity](https://www.w3.org/TR/sri/) beschrijft byteverificatie vóór scriptuitvoering; [W3C Web Locks](https://www.w3.org/TR/web-locks/) beschrijft coördinatie door meewerkende lockaanvragers. De implementatie gebruikt bestaande SRI-attributen, geen nieuwe Integrity-Policy-functionaliteit uit de actuele draft.
