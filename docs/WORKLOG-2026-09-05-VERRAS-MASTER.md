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

## Verras me! v3 — iPhone-techniekproef geslaagd
- Vrije trekking uit de 206-proefwereld werkt.
- Exacte Spotify Track URI opent en speelt de bedoelde track.
- `Verras me nog eens` onderdrukt recente artiesten via bestaande lokale staat.
- Dynamische filters reageren onderling correct op Periode, Genre en Stijl.
- Gefilterde proef `1980s + Hard Rock + Hair Metal` trok Kix — `Blow My Fuse` en opende exact die Spotify-track.

## Verras me! v4 — volledige Masterwereld
Nieuwe proef: `test/surprise-me-v4-full.html`.
- v3 blijft intact als bewezen 206-artiesten-techniekproef.
- Vier zelfstandige gzip+base64-datadelen bevatten samen exact 3.284 artiestwerelden:
  - `data/surprise-prod-full-01.txt`
  - `data/surprise-prod-full-02.txt`
  - `data/surprise-prod-full-03.txt`
  - `data/surprise-prod-full-04.txt`
- v4 laadt alle vier delen, valideert partnummers, gezamenlijke bronset en exact totaal 3.284 vóór de VERRAS ME!-knop wordt vrijgegeven.
- Bewezen v3-gedrag blijft behouden: dynamische Genre/Stijl/Land/Periode-filters, exacte Spotify Track URI, recente-artiestonderdrukking, H.E.A.T rich-world-koppeling.
- Sfeer en Thema blijven bewust uitgeschakeld tot verantwoorde verrijking beschikbaar is.
- W36/Ontdek-DNA en bestaande v2/v3-proeven zijn niet gewijzigd.

## Data-opslag
- v3 gebruikt nog `data/surprise-prod-02.txt` als zelfstandige 206-wiring-chunk.
- v4 gebruikt uitsluitend de vier `surprise-prod-full-*` productiedelen.
- `data/surprise-prod-b64-01.txt` blijft een eerder technisch tussenbestand en is geen v4-bron.

## Volgende stap
1. iPhone-laadtest van v4: bevestigen dat exact 3.284 artiestwerelden worden geladen.
2. Daarna één vrije trekking + exacte Spotify-link controleren.
3. Daarna één dynamische filterketen in de volledige wereld controleren.
4. Vervolgens representatieve-trackselectie tegen het productiecontract nalopen en daarna bredere rijke artiestenwerelden/persoonlijke staat aansluiten.
