# Music DNA W42 — geïsoleerde overgangsproef en herreview

12 oktober 2026. Basis: PR #13 commit `2d9a677414f20db1754c1c552ebfbbab60b428bb`. Geen merge of productie-uitrol. Alleen synthetische opslag, geen iPhone- of Spotifywijzigingen.

**GO voor geïsoleerde QA; NO-GO voor merge, productie en gemengde oude/nieuwe writers op dezelfde origin.**

## Reparatie en herreview

De bestaande dagelijkse Web Lock beschermt alleen meewerkende documenten. De baseline reageert niet op externe Music-DNA-opslagwrites. Zeven synthetische tegenproeven bevestigen dat de lease bruikbaar blijft na externe learning-, bank-, playlist-, historische rating-, reserve- of journalwrites en `clear()`.

De nieuwe dagelijkse transactionmodule luistert tijdens haar actieve lease naar native storage-events voor dezelfde localStorage-area. Een bmd-keywijziging of clear-event zet de pagina in wachtstand; daarna weigert requireLease ratingwrites en journalherstel. De foutmelding adviseert controle en geen gegevenswissing. Andere storage-areas en niet-bmd-keys blokkeren deze lease niet. De gewijzigde modulebytes zijn opnieuw SHA-384-gepind in daily.html. CI bevat nu ook rating-transition-regression.cjs.

Dit is een reactieve stop ná de externe write, geen atomische uitsluiting of herstel van de externe schade. Async eventbezorging kan een race niet voorkomen. De native oude writer verwijdert nog steeds de synthetische historische reserve. Daarna stopt de moderne pagina; zij schrijft niet verder en verwijdert geen journal. Fail-closed behoudt de lock totdat de pagina sluit. Er is geen automatische herstart, migratie, import, rollback of cachewissing ingevoerd.

Eigen codeherreview: listener wordt binnen de lockcallback vóór de acquire-continuation geïnstalleerd; checks gebruiken dezelfde native storage-objectidentiteit; huidige lease en blocked-status worden gerespecteerd; pagehide/pageshow-beleid blijft staan; componentguards blijven de lease controleren vóór native writes. Dit is geen onafhankelijke tweede menselijke of agentreview en geen formele PR-goedkeuring.

## Uitgevoerd bewijs

- 24 bestaande regressieprogramma’s opnieuw PASS op de basis; 25 inclusief nieuwe overgangssuite PASS op de reparatie. Nieuwe suite: zeven externe change/clear-cases, andere area/key, persisted-pageshow-simulatie en dagelijkse fout-UI met behoudscontrole.
- Catalogusaudit PASS: 3.877 Master/CSV/Depot-records, geen gewijzigde catalogus. SRI-pincontrole en git diff --check PASS.
- Finale native Chromium 155: localhost 8963 met aparte origin 8964, echte top-level tabs. Tweede modern tab stopt vóór hydration/writes. Geïnjecteerde bank-QuotaExceededError bewaart het journal en bevestigt rating niet. Sluiten eigenaar geeft echte lock vrij; heropening herstelt journal. Historische ratings/reserves/selecties blijven bytegelijk; firstPositiveAt, playlistUses=2 en lastPlaylistWeek=2026-W39 behouden.
- Oude bankfixture op de aparte origin verandert alleen haar eigen synthetische opslag; primaire historie/journal blijven bytegelijk. Dit bewijst browseroriginisolatie onder deze testcondities, geen HTTPS-migratie of iPhone-vrijgave.
- Oude bankfixture op gedeelde origin verwijdert de reserve ondanks actieve lock. Native storage-event stopt de moderne pagina; verdere recover-call wordt geweigerd zonder extra write.
- Een eigen echte cacheworker activeert en claimt tijdens een levende moderne tab. Controllerchange stopt die tab bytegelijk; nieuwe gecontroleerde daily stopt vóór recovery, probe en hydration. De fetch-response heeft X-Music-DNA-Synthetic-Cache=hit: historische bytes zijn daadwerkelijk uit Worker Cache Storage geleverd. Die gecachete oude writer verwijdert opnieuw de herstelde reserve. Alleen de eigen disposable registratie en fixturecache zijn opgeruimd.
- Aanvullende echte Back-navigatie op localhost 8965 leverde pageshow.persisted=false op: browser herlaadde de pagina. Dit is GEEN native BFCache-PASS. De persisted-pageshow-stop is uitsluitend offline gesimuleerd.

Machinebewijs: W42-TRANSITION-{NATIVE,REGRESSIONS,BEFORE,AFTER}-2026-10-12.json. De native JSON is uit het zichtbare afgeronde browserharnas gedownload, niet handmatig samengesteld. Een eerste browserronde op 8961/8962 slaagde met beperkter bewijs; alleen de uitgebreidere finale ronde wordt als definitieve native suite gebruikt. Een eerste teststart gebruikte een verkeerd werkpad; een eerste offline assert verwachtte een exception bij een learning-no-op. Beide gecorrigeerd; die runs tellen niet mee. De eerste serverstart werd door sandbox-netwerkbeleid geweigerd; na verleende netwerktoestemming uitsluitend localhostservers gestart. De browserbewijsaanroep bleef onverwacht circa 65 minuten hangen en kwam rond 14.29 terug; geen fictieve voortgang in die wachttijd.

## Blokkades en hervatting

1. Volledig oude, reeds geopende, coherent gecachete of archiefwriters op dezelfde origin blijven onbeheerst. CSP/SRI/locks en storage-events maken hen niet met terugwerkende kracht veilig. Geen same-origin-GO.
2. Geen aparte HTTPS-proeforigin gepubliceerd. Kies die als concrete volgende stap vanaf 14.30; een ander pad/querystring/reponaam is onvoldoende. Begin uitsluitend met synthetische iPhone/Safari-QA en het protocol in W42-HANDOFF-1430-2026-10-12.md.
3. Geen echte iPhone/Safari/PWA-, suspension-, Spotify-terugkeer-, native BFCache-, volle-quota-, OS-crash- of disk-durabilityproef. Geen volledige veilige echte-data export/importimplementatie. Onderbroken journals moeten in een toekomstig migratiebeleid expliciet worden behandeld.
4. PR blijft concept; main blijft de opgegeven basis. Nieuwe remote head en CI worden na publicatie afzonderlijk geverifieerd. De groene basisrun 38239949772 is geen CI-bewijs voor een nog niet gepubliceerde reparatie.

## Reproduceren

Vanuit repo: node scripts/run-weekly-regressions.cjs; python3 scripts/audit-master-depot.py. Start scripts/serve-transition-review.py met twee expliciete nieuwe vrije poorten, bijvoorbeeld 8963 en 8964 als die origins nooit eerder gebruikt zijn. Open op de eerste origin /test/rating-native-transition-review.html?isolatedPort=8964. Iedere knop opent maximaal één echte tab. Server levert de actuele daily-bron met alleen fixtureklok/quota-injectie; native appmodules en SRI blijven echt. Het harnas vereist lege eigen localhostopslag en wist geen bestaande opslag. Voor een nieuwe herhaling nieuwe poorten gebruiken. Na afloop alle eigen testtabs sluiten en testservers stoppen.

## Technische grondslag

[WHATWG Web Storage](https://html.spec.whatwg.org/multipage/webstorage.html#the-storage-interface) definieert opslagbroadcast naar andere gelijk-origin storage-objecten als een taak; de notificatie is geen preventieve lock. [W3C Web Locks](https://www.w3.org/TR/web-locks/) coördineert lockaanvragers. [W3C Service Workers](https://www.w3.org/TR/service-workers/) beschrijft clients.claim en controllerchange. De conclusie over de resterende onbeheerde writer is bovendien rechtstreeks gereproduceerd.
