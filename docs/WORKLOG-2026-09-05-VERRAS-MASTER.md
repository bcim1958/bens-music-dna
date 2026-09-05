# WORKLOG — 2026-09-05 — Verras me! naar Master-productiedata

## Uitgangspunt
- Veilige bron: `Ben_Master_Music_DNA_Database_1.8_Taxonomie_Reparatie_2026-09-04_v2.xlsx`.
- Master blijft ongewijzigd.
- W36/Ontdek-DNA blijft onaangeraakt.
- `test/surprise-me-v2.html` blijft de eerder gevalideerde v2-proef en wordt niet overschreven.

## Vastgestelde dataomvang
- 3.480 trackregels in de Master.
- 3.287 regels zijn bruikbaar voor standaard Verras me op basis van exacte Spotify Track URI + artiest + track + land + decennium.
- Na samenvoegen op exacte artist-credit: 3.284 artiestwerelden voor standaard Verras me.
- 2.941 artiestwerelden hebben reeds een bruikbare AllMusic-hoofdstructuur en zijn daarmee nu al filterbaar op Genre/Style.
- Niet volledig getaxonomiseerde artiesten blijven wel beschikbaar in de vrije trekking en voor land/periode, maar worden niet geforceerd in Genre/Style.

## Productiecontract
Per artiestwereld wordt gegenereerd:
- artiestnaam
- land
- decennium
- AllMusic-hoofdstructuur
- AllMusic-stijlen
- representatieve track
- exacte Spotify Track URI
- bestaande DNA-playlistrelaties

Selectie representatieve track: voorkeur voor reeds DNA-gebruikte track, daarna bruikbare taxonomie, daarna populariteit, daarna stabiele bronvolgorde.

## Verras me! v3 — eerste productiewiring
Nieuwe proef: `test/surprise-me-v3-master.html`.
- Visuele grammatica van v2 behouden.
- Gebruikt echte gegenereerde Master-data in plaats van de handgemaakte 15-artiestenarray.
- Eerste wiring-proef laadt bewust één zelfstandig productiedeel: 206 van 3.284 artiestwerelden.
- Genre, Stijl, Land en Periode worden dynamisch uit die Master-data opgebouwd.
- Sfeer en Thema blijven zichtbaar maar uitgeschakeld als `Nog niet verrijkt`; er wordt geen metadata verzonnen.
- Spotify-knop opent de exacte Master Track URI, niet een zoekopdracht.
- Recente artiesten worden via `localStorage` tijdelijk onderdrukt.
- H.E.A.T blijft de enige reeds gekoppelde rijke artiestenwereld; voor overige artiesten blijft de bestaande prototype-melding gelden.

## Data-opslag
- Productiedata wordt in zelfstandige gzip+base64-delen voorbereid om de app-serving laag compact te houden.
- `data/surprise-prod-02.txt` is de eerste zelfstandige wiring-chunk die v3 momenteel gebruikt.
- `data/surprise-prod-b64-01.txt` is een eerder technisch tussenbestand en is niet de productiebron voor v3.

## Volgende stap
1. iPhone-techniekproef van v3: laden, dynamische filters, trekking, exacte Spotify-link en recent-suppression.
2. Daarna alle 16 zelfstandige productiedelen aansluiten voor de volledige 3.284 artiestwerelden.
3. Vervolgens bredere rijke artiestenwerelden en duurzame persoonlijke staat aansluiten.
