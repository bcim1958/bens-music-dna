# Music DNA PR #13 — inhoudelijke review, 12 oktober 2026

**Besluit: NO-GO voor merge en live vrijgave. GO voor verdere beoordeling van de herstelde conceptbranch.**

Gecontroleerd: de 12 originele gewijzigde bestanden tegenover main `7da8e871be19c9065f6c5cbbafc80a491fe9e1e1`, PR-head `9ab69b0e170bea17f9d2f082333463b4edef828d`. GitHub bevestigde draft/open, mergeable=true, merged=false en workflow Weekly Music DNA regressions run 38224057140 success voor die head. Een groene run bewijst uitsluitend de uitgevoerde controles. Er is geen formele goedkeuring in deze review ingediend.

## Concrete defects en herstel

### P1 — voorraad kan na geslaagde preflight verdwijnen

In `test/music-dna-prepared-day-v1.js` controleerde preflight uitsluitend bank versus bestaand leersignaal. Reproductie: ALIAS heeft bank.rating=goed, signal.rating=goed, playlistUses=0; zijn opgeslagen dagbeoordeling is nee. De guard accepteert dit. Daarna leest `music-dna-learning-v1.js` de dagbeoordeling opnieuw en vervangt het signaal door nee; `music-dna-positive-bank-v1.js` reconstrueert de bank uitsluitend uit positieve signalen. Het bestaande item verdwijnt, ondanks de behoudsclaim. De nieuwe proef “bank passes preflight then disappears” faalde op de originele head.

Herstel: vergelijk bank/signaal ook met opgeslagen beoordelingen vóór hydration; blokkeer de inconsistentie, behoud de oorspronkelijke bytes en laat learning niet starten. Bij een echte onderbroken opslagtransactie vraagt dit diagnose; de app kiest niet zelf welke beoordeling waar is. Een aanvullende geldige fixture met één geregistreerd playlistgebruik behoudt playlistUses=1, firstPositiveAt en lastPlaylistWeek.

### P1 — ongeldige ratings en selecties worden te laat of onvolledig gecontroleerd

De selector controleerde ratings zonder selectie, maar geen weesrating naast een geldige selectie. `officialCompleted` accepteert iedere truthy rating, ook “invalid”. Opstart laadt learning vóór de selector en render controleert alleen de dag die nog aangeboden wordt. Daardoor kunnen ongeldige eerdere dagen learning al wijzigen of de routing beïnvloeden voordat de app stopt. Ongeldige JSON in ratings werd door bestaande tolerant lezende code als lege staat gebruikt; null/array-vormen in learning/bank/history werden onvoldoende afgewezen.

Bewijs: op de originele head faalden de proeven “orphan alongside valid selection”, “invalid rating counted complete”, “duplicate completed selection”, “completed unknown selection”, “malformed ratings”, “null bank”, “array learning” en “null history”. Sommige stopten alsnog, maar pas ná learning-opstart. Dat is te laat voor de beloofde bescherming.

Herstel: JSON en beoordelingswaarden controleren vóór learning; bestaande voorbereide weekselecties en gekoppelde ratings ook voor afgeronde dagen valideren; opname-/artiestguards zonder schrijven uitvoeren; null-selecties, ongeldige leersignalen en playlistregistraties afwijzen. Gegevens op gesloten dag 3–7 blijven bewaard en leiden tot wachtstand. Alle foutfixtures eisen behoud van oorspronkelijke gegevens en geen learning-opstart.

### P2 — heropenen heft opslagweigering op (bestaande fout in gebruikte module)

`test/music-dna-storage-v1.js:26` schreef de nieuwe baseline zodra alleen de lees/schrijfprobe lukte, ook bij nonShrinking=false of sameOrigin=false. Reproductie: opgeslagen gezonde keyCount=2, nu één sleutel. De eerste start weigert maar overschrijft de baseline met keyCount=1. De tweede start accepteert die verkleinde opslag. Beide assertions van de nieuwe heropenproef faalden vóór herstel.

Herstel: alleen een volledig gezond report mag de baseline vervangen (`report.ok`). Tweemaal openen blijft blokkeren en bewaart de gezonde baseline. De cacheversie van deze module en de gewijzigde dagelijkse pagina is verhoogd. Deze kleine aanvullende modulewijziging is noodzakelijk voor de gevraagde heropen-/opslagbescherming.

## Controle van alle 12 originele bestanden

| Bestand | Uitkomst |
|---|---|
| docs/PROJECT-STATE.md | Conceptstatus en geen productieclaim correct. Historische catalogusclaims zijn geen actuele apparaat-FIFO. |
| docs/W42-DAY2-IDENTITIES-2026-10-12.json | Drie verschillende track- en artiest-ID’s; Friedberg U+2060 in bron behouden. accountAvailabilityVerified=false correct. Geen nieuwe NL-accountproef uitgevoerd. |
| docs/W42-DAY2-PREPARATION-2026-10-12.md | Begrenzing en ontbrekend apparaatbewijs expliciet; behoudsclaims hadden bovenstaande gaten. Aanvulling verwijst naar herstel en nieuwe bewijsset. |
| docs/W42-DAY2-REGRESSIONS-2026-10-12.json | Historisch verslag van 19 programma’s, syntheticRatings=true/endToEndProven=false. Geen Safari-bewijs. Nieuwe set bevat 20 programma’s. |
| scripts/run-weekly-regressions.cjs | Nieuwe oorspronkelijke test opgenomen; reviewtest toegevoegd. Processtatus controleert slagen, maar bewijst niet de volledigheid van assertions. |
| test/daily.html | Calendar-bound max=min(kalenderdag,2), oudste onafgeronde dag, geen W42 zaterdagroute bij afronden van dag 2. Preflight nu vóór learning met CFG/CAND. |
| test/music-dna-prepared-day-v1.js | Exacte opname-ID’s, genormaliseerde artiest/titel, weekartiesten inclusief retired offers van andere dagen. Bovenstaande opstart-/schema-/ratinggaten hersteld. |
| test/music-dna-w42-day2-v1.js | Aanvullende catalogus; dag 1 blijft staan; drie unieke dag-2-tracks, nul reserves. Stijlen zijn redactionele mappings; studio-identiteit is inferentie, geen fingerprintbewijs. |
| test/music-dna-weeks-v1.js | preparedThroughDay=2, uitsluitend twee kandidaatbestanden, geen W42 delivery/automaticGift. Week loopt zondag 11 t/m zaterdag 17 oktober. |
| test/w42-day1-regression.cjs | Maandagverwachting terecht gewijzigd naar dag 2; behoud en vier knoppen blijven getest. Geen apparaatproef. |
| test/w42-day2-regression.cjs | Echte handlers in DOM-fixture, exacte set, heropenen, aliases en weekartiestconflict. Behoudhelper sluit learning/bank uit; aparte FIFO-assertions dekken slechts gekozen velden/fixtures. Geen volledige historische equivalence. |
| test/week-route-regression.cjs | Weekgrenzen en preparedThroughDay correct; directe configuratietest, geen volledige gebruikersroute. |

## Routing, reserves, FIFO en dubbelen

De nieuwe reviewproef controleert een gedeeltelijk beoordeelde dag 1 op zondag 23:59:59 en maandag 00:00:00: dag 1 blijft de hervatdag en dag 2 wordt nog niet geregistreerd. De bestaande dag-2-proef toont de exacte maandagset na afgeronde dag 1, bewaart registratie bij heropenen en oefent alle vier beoordelingsknoppen. Na afronden van dag 2 blijven dinsdag–zaterdag in wachtstand voor de volgende voorbereide dag; geen dag-3-selectie of cadeau-navigatie ontstaat. Configuratie bevat geen W42 delivery.

Dag 2 heeft geen reserveplan. Dag-1-reserves blijven afzonderlijk van de Muziekmeter. De bestaande tests controleren reserve firstPositiveAt, playlistUses en lastPlaylistWeek rond nieuwe beoordelingen; de nieuwe proef voegt een werkelijk verbruikte synthetische historische reserve toe. Registratie van dag 2 boekt geen FIFO-gebruik af. Geen Spotify-verzoeken of writes in deze offline proeven.

Aliases met external-ID, Spotify-URI, history spotifyTrackIds en genormaliseerde artiest/titel blokkeren de drie dag-2-tracks. Het dagplan weigert dubbele opname-ID’s en herhaalde genormaliseerde artiestnamen. Andere W42 selecties, inclusief reserve/retired, beschermen de weekartiestregel. Guards kennen uitsluitend beschikbare lokale geschiedenis; zij bewijzen geen afwezigheid van eerdere aanbiedingen op een ander apparaat. Zoekcontrole op de drie IDs/artiestnamen in de aanwezige data, master en oudere kandidaatbestanden vond geen match. Privé-exports zijn niet opnieuw gecontroleerd.

## Testbewijs en grenzen

Originele head: alle 19 programma’s lokaal geslaagd; aanvullende foutfixtures faalden. Herstel: alle 20 programma’s geslaagd, plus audit-master-depot PASS: Master/CSV/Depot elk 3877 tracks, 3005 met gebruik, 872 zonder geregistreerd gebruik, geen auditmutaties. `git diff --check` geslaagd. Lokale runtime: Node 24.19.0; GitHub workflow gebruikt Node 22. Een tussentijdse runnerpoging stopte bij daily-reserve-capacity zonder diagnostische uitvoer; dat programma afzonderlijk en de volledige definitieve herhaling slaagden. De vastgelegde JSON betreft de volledige definitieve herhaling.

DOM-fixture gebruikt nagebootste opslag, onmiddellijke scriptloads, locatie http://test en uitgeschakelde timers. Zij controleert geen Safari-cache, PWA versus Safari-opslagcontext, echte netwerk-/scriptloadfouten, uitgestelde resync-timers, appachtergrond/Spotify-terugkeer, quota/write failures of gelijktijdige tabbladen. Een gewone desktopbrowserproef zou deze ontbrekende iPhone-proef niet vervangen.

Voor vrijgave is bewijs nodig op een veilige iPhone/Safari-testomgeving met de uiteindelijke commit: juiste dag/reserve, Spotify openen en terugkeren, alle ratingpaden, heropenen/reload, dagovergang, historische ratings en verbruikte FIFO vóór/na, opslagfouten met blijvende wachtstand, gesloten dag 3–7 en zaterdag. Ook NL-accountafspeelbaarheid is onbewezen. De huidige code maakt meerdere opslagwrites; crash-/quota-/concurrency-gedrag is niet als atomair bewezen. De keyCount-bewaking detecteert evenmin alle mogelijke vervangingen/verliezen bij gelijk blijvend aantal sleutels.

Daarom geen productie-GO uitsluitend op basis van deze tests. Geen merge, deploy, live apparaatwijziging, privé-import of Spotify-mutatie uitgevoerd. De herstelcommit blijft op dezelfde concept-PR voor onafhankelijke review en CI.
