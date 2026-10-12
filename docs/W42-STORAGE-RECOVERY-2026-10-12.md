# W42 dag 2 — opslagherstel, 12 oktober 2026

**GO voor inhoudelijke review van dit herstel. NO-GO voor merge en productie.**

Basis: PR #13, `codex/w42-day2-review-2026-10-12`, remote head `b9e53d4ab4028b71e4286c65741962a3a9b42c34`. Alleen deze branch is gewijzigd. Geen merge, deploy, privé-import, Spotify-write of wijziging aan Bens iPhone/browseropslag. Dag 3–7 en automatische zaterdag blijven gesloten.

## Reproductie en codepaden

De aanvullende foutinjectie opnieuw uitgevoerd op exact b9e53d4 bevestigt: `daily.html` schrijft eerst de rating; learning en voorraad volgen. Een rating-write exception ontsnapt aan de handler. `music-dna-learning-v1.js` slikt learning- en twijfel-write fouten in. `music-dna-positive-bank-v1.js` retourneert uit sync een bank ondanks een mislukte write. Het scherm kan daardoor “✓ Beoordeeld” tonen met uiteenlopende opgeslagen staten. De learning-observer op setItem schrijft bovendien impliciet mee; resync herhaalt deze writes. Dit zijn synthetische DOM/opslagfixtures, geen echte browserquota-proeven.

## Herstelbeleid

`music-dna-rating-transaction-v1.js` berekent rating, learning, kwartaal-twijfelregistratie en positieve bank eerst in een opslagoverlay. De productieopslag wordt daarbij niet gewijzigd. De handler leest de actuele ratingstaat; de transactie controleert JSON, selectie en de beoordelingswaarde. W42 doet zijn behoudspreflight opnieuw bij de klik.

Vóór de eerste component-write wordt één hersteljournal (`bmd-rating-transaction-v1`) opgeslagen met origin, oorspronkelijke bytes en alle vier gewenste componentwaarden. Iedere write wordt teruggelezen. De journal wordt pas verwijderd nadat de complete verwachte toestand is gecontroleerd. Alleen daarna wordt het normale scherm opgebouwd. Kan zelfs het journal niet worden opgeslagen, dan begint geen component-write.

Bij een fout toont de pagina “Beoordeling niet bevestigd”, meldt mogelijke gedeeltelijke opslag en vraagt heropenen zonder gegevens te wissen of opnieuw te beoordelen. De pagina blokkeert verdere writes; learning-timers melden hun opslagfouten en blijven na blokkeren gestopt. Learning/bank-synchronisatie weigert te schrijven zolang een journal openstaat. Fouten verdwijnen niet meer stil in de twee modules.

Bij heropenen verwerkt de dagelijkse pagina het journal vóór healthcheck, preflight en learning-hydration. Iedere betrokken waarde moet gelijk zijn aan de oorspronkelijke of gewenste bytes; overige historie/selecties moeten gelijk blijven. Alleen ontbrekende gewenste writes worden afgemaakt. Bij afwijkingen wordt niets overschreven; de journal blijft staan voor diagnose. Er is geen automatische rollback. Na een fout kan de gewenste rating dus alsnog worden voltooid bij heropenen; de melding belooft geen annulering.

Learning moet aantoonbaar geïnitialiseerd zijn voordat de bank mag starten. Dit voorkomt bank-reconstructie uit lege learning wanneer een browser script.onload afvuurt ondanks een runtime-exception. De aangepaste daily-loads hebben nieuwe cacheversies. De transactie gebruikt expliciete resync en werkt in de fixture ook wanneer het native Storage.setItem niet kan worden vervangen.

## Bewijs

- Alle **21** programma’s in `scripts/run-weekly-regressions.cjs` PASS: de bestaande 20 plus `rating-storage-failure-regression.cjs`. Bewijs: `W42-STORAGE-REGRESSIONS-2026-10-12.json`.
- **19** relevante rating/foutcombinaties: vier beoordelingen; journal-, rating-, learning-, twijfel-, bank- en journal-verwijderfouten. Twijfel/bank-combinaties die in de vaste klokfixture geen nieuwe componentbytes opleveren worden niet als write-foutproef meegeteld.
- Blijvende component- en verwijderfouten blokkeren tweemaal heropenen vóór learning. Na opheffen voltooit forward recovery de bewaarde waarden; nogmaals heropenen bewaart de rating.
- Vier bestaande/conflicterende waarden worden behouden: rating, learning, bank en historische dag-1-rating. Geen recovery-write bij vooraf gevonden conflict.
- Zes onderbrekingsgrenzen na succesvolle journal/component-writes en journal-verwijdering; heropenen voltooit of behoudt de volledige toestand.
- Startup-write failures, vertraagde learning-callback, niet-vervangbare Storage-methode, runtime-scriptfout met onload, onleesbare ratingstaat en gewijzigde selectie bij klikken worden gericht getest.
- Reservepad houdt meter=false. Historische dag-1-ratings blijven bytegelijk; reserve firstPositiveAt, playlistUses en lastPlaylistWeek blijven gelijk. Bestaande reviewregressie bewaart ook een synthetisch eerder verbruikt item.
- Catalogusaudit PASS: Master/CSV/Depot 3.877; geregistreerd gebruik 3.005; zonder geregistreerd gebruik 872; 230 brongecontroleerde kaarten. Geen catalogusmutaties. Bewijs: `W42-STORAGE-CATALOG-AUDIT-2026-10-12.json`.
- `git diff --check` PASS. Lokale Node 24.19.0; CI gebruikt Node 22. Een eerste volledige runner stopte zonder diagnostiek bij daily-reserve-capacity; afzonderlijke proef en definitieve volledige suite PASS, zoals ook eerder bij dit programma waargenomen.

## Grenzen en vrijgave

Dit is herstelbare meerstapsopslag, **geen bewezen atomaire browsertransactie**. De bytecontroles detecteren geteste conflicten, maar localStorage biedt geen atomische compare-and-swap of uitsluiting tussen tabs. Er is geen cross-tab lock ingevoerd. Gelijktijdige echte tabs, oudere appversies en andere pagina’s die dezelfde origin gebruiken blijven een open risico; geen concurrency-GO. Startup-hydration buiten een ratingtransactie kan nog componentwrites uitvoeren, maar hun fouten blokkeren nu zichtbaar de dagelijkse pagina. Het journal kost extra opslagruimte; bij onvoldoende ruimte wordt de nieuwe beoordeling veilig geweigerd. Verlies van de volledige origin-opslag of browserdisk-durability is niet door dit journal bewezen opgelost.

De fixtures gebruiken gesimuleerde opslag/scriptloads en klok. Eén aanvullende proef roept de learning-timers handmatig aan; dit bewijst geen echte achtergrondtiming. Native Safari/PWA-cache, echte quota, afsluiten van browser/OS, netwerk, Spotify-terugkeer en Nederlandse accountafspeelbaarheid zijn niet getest. Er is geen nieuwe veilige HTTPS-proeforigin gepubliceerd.

Vrijgave blijft geblokkeerd tot onafhankelijke inhoudelijke review, groene CI op de uiteindelijke commit en afzonderlijke iPhone/Safari/thuisschermproef op een eigen origin met synthetische data, inclusief opslagfalen/heropenen en behoudscontrole. Daarnaast blijft de NL-accountafspeelcontrole apart. Geen proefratings in Bens bestaande app; geen reset, websitegegevens wissen of productie-export importeren.
