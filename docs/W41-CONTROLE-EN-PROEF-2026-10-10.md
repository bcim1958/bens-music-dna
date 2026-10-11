# W41 — controle en verantwoorde proef, 10 oktober 2026

## Bevestigde uitgangspositie vóór wijzigingen

Main: `e568fe4b849a75ca6f7eb6e124d8cf9d5e8d070a`, PR #1 merge op 9 oktober 15:39:50 Europe/Amsterdam. Beide Pages-runs success: [37938450534](https://github.com/bcim1958/bens-music-dna/actions/runs/37938450534) en [37938449582](https://github.com/bcim1958/bens-music-dna/actions/runs/37938449582). Dit is bewijs van uitrol, niet van persoonlijke apparaatopslag, Spotify-aflevering of Express-publicatie.

| PR | Gecontroleerde head | Status en afhankelijkheid |
|---|---|---|
| [#2](https://github.com/bcim1958/bens-music-dna/pull/2) | 077cb10dabd8528c2291200be9e7b6e5a003a6cd | open, geen concept; tegen main; Depot/Muziekmeter afzonderlijk |
| [#3](https://github.com/bcim1958/bens-music-dna/pull/3) | 5c38d211554f5095ffbb7fd05b5b04c2e0385601 | open concept; tegen main; reservehistorie en statuscorrectie |
| [#4](https://github.com/bcim1958/bens-music-dna/pull/4) | c82b7a72d62f76796d2accbd016059ac8d520dfb | open concept; tegen de branch van #3; aanvullende capaciteitsaudit |

Geen van #2/#3/#4 merged. De laatste getoonde offline Actions-runs zijn success. #3 bevat het TOWER/Tanith-bewijs; het historische incident is geen aanwijzing dat de al samengevoegde PR #1 ontbreekt. Main's PROJECT-STATE bevatte nog de achterhaalde uploadblokkade; #3 had die al gecorrigeerd.

## Onafhankelijk herhaalde controles

De lokaal teruggevonden originele export heeft `exportedAt=2026-10-09T04:26:02.867Z` (06:26:02 Amsterdam), SHA-256 `6d17c4294a2a58b2a1d0ca00cf6f38b50ce4cbecbb476e4d7eba5636aca0218c`. De auditcode is uitgevoerd vanuit de exacte head van #4, geen samengestelde productiebranch.

- Master/CSV/Depot-audit op main: PASS; 3.877 tracks, 3.005 geregistreerd gebruikt, 872 zonder; nul afwijkingen.
- Echte-exportcapaciteitsregressie: PASS. Acht catalogi, 456 interne ID's, 21 gebruikte artiestcredits, nul onopgeloste W41-ID's. Alleen The Commoners (10 tracks) en The Tubs (9) toegestaan. The Vintage Caravan mist volledige bibliotheekuitsluiting.
- Capaciteitsaudit en dagelijkse readiness: beide verwacht exit 2 / NO-GO; `day7Created=false`. Bron en historische weekrecords ongewijzigd.
- 135 opgeslagen FIFO-items, alle 135 historisch aangeboden. Geen voorraad nooit aangeboden officiële tracks.
- 20 historiecontroles PASS; alle 16 generieke weekregressies PASS. Die laatste bevatten synthetische toekomstige beoordelingen en mocks: `spotifyWrites=0`, `endToEndProven=false`.

De volledige persoonlijke export en auditoutput blijven lokaal. Niet aangetoond: latere iPhone-stand, laatste drie werkelijke beoordelingen, zaterdaglevering, definitieve Express-publicatie.

## Veilige correctievolgorde

1. Corrigeer de actuele status en bewaar het datumgebonden NO-GO met verwijzingen naar #3/#4; houd oude rapporten historisch intact.
2. Bewaar Special106 en Cold Moon als brongebonden meldingen met onbekenden, zie [checkpoint](CHECKPOINT-2026-10-10-MELLOTRON-BLOOD-STAR.md). Exacte identiteit terugvinden vóór operationele registratie.
3. Beoordeel #3 afzonderlijk. #4 is daarop gestapeld: na een eventuele merge van #3 de base/diff opnieuw controleren. Deze documentatie-PR overlapt PROJECT-STATE uit #3; bij samenvoegen de nieuwste 10-oktoberstatus behouden. #2 blijft onafhankelijk. Geen automatische merge noodzakelijk voor de proef.
4. Alleen nieuw werkelijk bewijs kan W41 heropenen: actuele volledige apparaat-export en waar nodig volledige persoonlijke bibliotheekuitsluiting of aantoonbaar gecontroleerde extra voorraad. Geen beleidsversoepeling of kandidaten verzinnen.

## Proef zonder aflevering — voorbereid

Gebruik de auditbestanden van de gecontroleerde #4-head in een geïsoleerde lokale checkout. Bewaar een actuele export uit hetzelfde iPhone/Safari-of-homescreen-opslagcontext als de dagelijkse pagina, met exporttijd en hash. Overschrijf de oorspronkelijke export niet en commit geen persoonlijke export.

```sh
node scripts/audit-discovery-history.cjs /absoluut/pad/actuele-export.json
node scripts/check-w41-snapshot.cjs /absoluut/pad/actuele-export.json
node scripts/audit-w41-capacity.cjs /absoluut/pad/actuele-export.json
```

Deze scripts bootsen de pagina offline in geheugen na, bewaren bron/historie en maken geen beoordelingen of Spotify-playlist. Hun klok is vastgezet op 10 oktober 08:00 Amsterdam; dit is een gedateerde W41-herhaling, geen live apparaatbediening. De vaste echte-exportregressie accepteert alleen de bekende 9-oktoberhash en mag niet worden gebruikt als algemene acceptatietest voor een nieuwe export.

**Stop bij exit 2, ontbrekende bronidentiteit, onopgeloste historie of minder dan drie toegestane unieke artiesten.** Een CAPACITY-CANDIDATE-FOUND of dagselectie in geheugen bewijst alleen capaciteit; geen zaterdagvrijgave. Controleer nieuw bibliotheekbewijs, originele studio-opname, onafhankelijke bronnen, exacte Spotify-identiteit/playability en aanboduitsluiting vóór een eventuele gerichte kandidaatcorrectie.

Pas na toegestane selectie en drie echte beoordelingen mogen de negen runtimecontroles worden beproefd. Daarna zijn exact 21 unieke artiesten, Flow-DNA-volgorde, reserveverbruik, Citrien-hoes, Spotify-volgorde/map, museumregistratie en zichtbare apparaat-afsluiting nog afzonderlijk te bevestigen. Express-publicatie is een eigen eindcontrole. Dit document bereidt die controle voor; er is niets afgeleverd of gesloten.

Cold Moon RAAK geeft geen automatische vrijstelling: eerst opname- en beoordelingscontext terugvinden en bestaand aanbod uitsluiten. Geen reeds gemaakte selectie, rating of FIFO-historie vervangen.
