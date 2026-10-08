# Depot 1.19 — volledige Master-gegevenslaag

De bestaande Glam/Hair Metal-proef is bijgewerkt tegen Master1.14.1. De gegevenslaag is vervolgens uitgebreid naar alle 3.877 Mastertracks. [Herstelpakket](../archive/checkpoints/2026-10-08/Music-DNA-Depot-1.19.zip) bevat trackobjecten, Glam-proef, artiestcredit- en albumbronkaarten, thematische indices, registratieverschillen, controle, uitvoerscript en SHA-256-manifest.

## Resultaat

| Maatstaf | Stand |
|---|---:|
| Unieke trackobjecten | 3.877 |
| Geëxposeerd binnen beschikbare registratie/brondekking | 3.005 |
| Onverkend, zonder gevonden expositie | 872 |
| Voorlopige depotkandidaten | 871 |
| Historisch positief, actuele FIFO-positie open | 1 |
| Definitieve Vergeten Edelstenen | 0 |
| Artiestcreditkaarten | 3.482 |
| Albumbronkaarten | 3.454 |

Alle objecten hebben één ID op exacte Spotify-track-URI. Status en onderzoeksstadium zijn afzonderlijk opgeslagen: expositie kan bewezen zijn terwijl album, genre of oorspronkelijke releasejaar nog onzeker is. De 871 zijn voorlopige kandidaten, geen bevestigde edelstenen en geen aangetoonde actuele FIFO-uitsluiting.

## Glam-proef

De oorspronkelijke vergelijkingsgroep blijft 474 records: **415 geëxposeerd en 59 Onverkend**, tegenover 410/64 eerder. Daarbinnen zijn 58 voorlopige depotkandidaten en één historisch positief stroomgeval. 43 aanvullende records buiten de oorspronkelijke groep hebben een Glam/Hair-bronlabel; deze zijn apart gehouden als nieuwe labelkandidaten, niet automatisch als bewezen trackclassificatie.

## Thematische toegang en albums

THEMATISCHE_INDEX.json combineert genre/stijl, bronjaar/decennium, land, artiestcredit en depotstatus. OBJECTEN.json bewaart per track bronlabels, toepassingen, bewijs, historische beoordelingen voor zover in de vroegere proef bewaard, ontbrekende gegevens en FIFO-brongrens. Jaar- en genrefilters zijn bronfilters, geen onafhankelijk bewezen oorspronkelijk opnamejaar of trackgenre.

Albumkaarten koppelen aanwezige Mastertracks aan hun expositie en toepassingen. Identiteit berust voorlopig op exacte artiestcredit plus albumbronstring; verschillende uitgaven zijn niet zonder Spotify-album-ID samengevoegd. Artiestcreditkaarten zijn geen telling van onafhankelijk geverifieerde unieke bands. Albums zonder bronnaam krijgen geen verzonnen albumkaart.

## Nieuwe registratiebevindingen

211 herkenbare DNA-presentatie-CSV's uit Bens ZIP zijn vergeleken; 91 overige CSV's tellen niet als DNA-expositie. Exacte track-URI-koppeling levert **47 aanvullende expositiebevindingen** op voor records die Master1.14.1 nog ongebruikt registreert. Ze zijn als geëxposeerd in Depot opgenomen en afzonderlijk met CSV-lid, regel en hash bewaard in EXPOSITIEVERSCHILLEN_MASTER.json. Deze Depotstap wijzigt de Master zelf niet; 2.958 gebruikt in Master versus 3.005 in Depot is een verklaard registratieverschil, geen twee onverklaarde totalen.

## Grenzen en vervolg

De nieuwste aangetoonde volledige FIFO-bron blijft 3 oktober; geen record krijgt actuele FIFO-zekerheid of definitieve VE-status zonder aanvullende bron. Listening DNA is niet ingevuld met fictieve luistercijfers. Geen herontdekkingslabel zonder concrete nieuwe context. De gegevenslaag is geen gepubliceerde Depothal-interface.

Vervolg: de 47 exacte expositiebevindingen gericht in de Master verwerken; metadataonderzoek uitvoeren; de gegevenslaag via de Depothal ontsluiten. Masterhistorie, FIFO, Spotify-playlists, beoordelingenbank en runtime zijn in deze stap niet gewijzigd. W41 endToEndProven=false.

Controles: 3.877 unieke object-ID's, oorspronkelijke Glamgroep 474 behouden, alle thematische verwijzingen bestaan, albumtracks vallen volledig en zonder overlap uiteen in geëxposeerd/niet-geëxposeerd. Historische Depot v1.18 blijft bewaard.
