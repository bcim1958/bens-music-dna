# W42 dag 2 — gecontroleerde voorbereiding, 12 oktober 2026

## Besluit
GO voor technische review van deze gerichte dag-2-branch. NO-GO voor productie zolang deze conceptwijziging niet is beoordeeld, samengevoegd en de Pages-uitrol gecontroleerd. Dag 3–7 en automatische zaterdagbezorging blijven NO-GO. Geen live iPhone-, Nederlandse account- of actuele FIFO-verificatie geclaimd.

Gecontroleerde main: `7da8e871be19c9065f6c5cbbafc80a491fe9e1e1`. De productie ondersteunt dag 1. Deze branch voegt alleen het expliciete maandagplan toe. Geen samenvoeging van PR #10/#11.

## Exacte identiteit
Publieke Spotify-embedmetadata is opnieuw live opgehaald op 12 oktober. Titel, track-URI, artiest-URI, speelbaarheid, datum en duur staan in `W42-DAY2-IDENTITIES-2026-10-12.json`.

| Artiest | Track | Spotify-track-ID | Artiest-ID | Duur |
|---|---|---|---|---|
| Chinese American Bear | Love You (爱你) | 7ef1yxmLkmfnLBSzlgAiUj | 6WIb9mpc6lyBzAjTeGWvEh | 237877 ms |
| Friedberg | I Sometimes Do (But Mostly Might) | 125m8ZbcZOYBukLKEj8qF7 | 0lqPfG8vAR30UX3cWDbCEn | 187368 ms |
| Kingcrow | Night Drive | 1nyW51X8LGzUD3Vaq34SsK | 3nnSgQo8TIgiO5M5pv3mlV | 348280 ms |

Spotify bevat vóór de Friedberg-titel U+2060; uitsluitend in de weergavetitel verwijderd. De exacte Spotify-brontitel blijft in het identiteitsbewijs behouden. Alle drie publieke embeds melden speelbaar. Dat bewijst geen afspeelbaarheid in Bens Nederlandse account. De artiest/trackcombinaties en releases zijn met primaire uitgeversbronnen vergeleken:

- https://chineseamericanbear.bandcamp.com/album/wah — Wah!!!, 18 oktober 2024, Love You.
- https://friedberg.bandcamp.com/track/i-sometimes-do-but-mostly-might — Hardcore Workout Queen, 8 november 2024.
- https://www.season-of-mist.com/news/kingcrow-2024-08-23/ — Night Drive op Hopium, albumdatum 23 augustus 2024.

Studioversie afgeleid uit de uitgeversidentiteit en afwezigheid van alternatieve-versiemarkers; geen audiofingerprintbewijs. Stijlvelden zijn redactionele mappings uit primaire artiest/labelbeschrijvingen, geen AllMusic-verificatie. Chinese American Bear: Indie Pop; Friedberg: Post-Punk; Kingcrow: Progressive Rock.

Geen naam- of track-ID-match in huidige Master-100-JSONs, Depot en bestaande testcatalogi. Drie verschillende track-ID's en artiest-ID's; ook verschillend van de vijf dag-1-kandidaten. De historische werkcontrole in PROJECT-STATE is gelezen, maar niet onafhankelijk herhaald met de destijds gebruikte privé-exports: die zijn niet beschikbaar in deze werkomgeving.

## Behoud en begrenzing
- Dag-1-bestand en plan blijven ongewijzigd; dag 2 wordt aanvullend geladen. Geen nieuwe dag-2-reserves; de twee dag-1-reserves blijven buiten de Muziekmeter.
- De dagelijkse router hervat de oudste onafgeronde voorbereide dag, toont dag 2 pas maandag en stopt na dag 2. Dag 3–7 worden niet geregistreerd. W42 krijgt geen delivery-config of automatische cadeau-overgang.
- Voor registratie controleert de selector de actuele lokale aanbiedingen, beoordelingen, leersignalen, bank en playlistgeschiedenis op opname-ID en genormaliseerde artiest/titel. Dezelfde artiest in officiële/reserve/retired aanbiedingen binnen W42 wordt geweigerd. Onbekende weekkeuzes en beoordelingen zonder keuze stoppen veilig.
- Vóór het laden van de bestaande leersignaal-/bankmodules controleert de nieuwe preflight of bestaande bankitems een overeenkomend positief leersignaal hebben en gebruikstellingen overeenkomen met playlistregistraties. Bij een verschil blijft de bank behouden. Dit voorkomt dat de bestaande bankreconstructie items laat vallen of verbruikte reserve opnieuw vrij maakt.
- Beoordelingen ontstaan alleen via Bens vier knoppen. Geen export importeren, geen FIFO-verbruik afboeken, geen bestaande playlists aanpassen.

De guard kan alleen lokaal geregistreerde geschiedenis zien. W41-desktopverbruik dat nooit in iPhone-opslag is vastgelegd blijft onbekend; zaterdag blijft daarom gesloten. Een iPhone-export is niet vereist voor codevoorbereiding: de guards lezen de actuele opslag bij openen en blokkeren bij inconsistentie. Alleen bij een concrete blokkade is aanvullende apparaatdiagnose nodig.

## Regressies
19 offline controles PASS op de definitieve runtimewijziging; zie `W42-DAY2-REGRESSIONS-2026-10-12.json`. De nieuwe dagelijkse proeven oefenen de echte paginacode en vier handlers uit in een DOM/geheugenfixture: exacte maandagset, geen fictieve ratings/reserves, heropenen, dag-1/W41-behoud, FIFO-tijdstempels/gebruik behouden, opnamealiassen en weekartiestconflicten, onbekende keuzes/weesratings, bank-only items en inconsistente gebruikstellingen, en gesloten dag 3–7/zaterdag. Dit is geen Safari/iPhone-browserproef.

Master/CSV/Depot-audit PASS: 3877 tracks, 3005 met geregistreerd gebruik, 872 zonder geregistreerd gebruik. Deze cataloguscijfers zijn geen positieve FIFO-inventaris. Geen bestanden door audit gewijzigd. Spotify writes=0; endToEndProven=false.

## PR #10 en #11
Beide open draft en mergeable=false op de gelezen GitHub-snapshot.

- #10 (`13a85bd6`): museumtekstupdate met terugleescontrole; geen dag-2-kandidaten. Lokale merge-tree bevestigt conflicten in PROJECT-STATE en regressierunner. De API-mocks/desktopbewijs uit de PR zijn geen nieuwe end-to-endproef.
- #11 (`7706da39`): oudere W42-registratie ready=false plus automatische zaterdagovergang, synthetische zeven-dagenproef en historische voorraadaudit. Lokale merge-tree bevestigt conflicten in PROJECT-STATE, regressierunner, daily.html en weeks-config. Die registratie strookt niet meer met de inmiddels uitgerolde beperkte dag-1-config. Blind mergen kan die vrijgave terugdraaien. Geen geschikte dag-2-vrijgave.

Deze PR's moeten apart met actuele main worden gereconcilieerd voor hun eigen vervolgdoel. Ze zijn niet vereist om alleen het beperkte maandagplan te beoordelen.

## Inhoudelijke review en herstel — 12 oktober 2026

[Review met defectreproducties en vrijgavegrenzen](W42-CODE-REVIEW-2026-10-12.md): opstartvalidatie, voorraadbehoud bij afwijkende beoordelingen en blijvende opslagweigering zijn hersteld met regressies. [20 offline programma’s PASS](W42-REVIEW-REGRESSIONS-2026-10-12.json). De eerdere 19-testset beschrijft de oorspronkelijke PR-head. Geen iPhone/Safari-proef; NO-GO voor merge/live vrijgave. Geen merge of uitrol uitgevoerd.
