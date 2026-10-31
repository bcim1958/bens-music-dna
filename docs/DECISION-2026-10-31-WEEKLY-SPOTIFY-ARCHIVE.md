# Gebruikersbesluit — wekelijkse Spotify-archivering

Besluitdatum: **31 oktober 2026**, Europe/Amsterdam. Status: **goedgekeurde route; implementatie niet vrijgegeven als werkend**.

Bron: hoofdchat `6ad52368-b3e8-83eb-87cf-b7545fcf258d`, gebruikersbericht `52b7bb0c-2c8c-450b-84f0-420ca8e0b04c`, 07:27:21 CET: “Dan volgen we door jou geadviseerde route.” De exacte route is in de huidige vervolgopdracht expliciet bevestigd. De opgehaalde hoofdchat bevat voor de voorafgaande assistentadviezen alleen inhoudsverwijzingen; daaruit is geen extra technische toestemming afgeleid.

Na bewezen Spotify-weekpublicatie volgt directe Spotify API-readback. Daaruit worden een versievaste Exportify-compatibele CSV en manifest met playlist-ID, exacte track-ID's en volgorde, timestamp en SHA-256 atomair naar de vaste lokale iMac-map geschreven. Daarna volgen geverifieerde kopieën naar iCloud Drive en een onafhankelijke back-up. Een afzonderlijke zondagse herstelcontrole en foutmelding horen bij de route.

De gebruiker heeft in deze vervolgchat **Seagate 2TB** gekozen als onafhankelijke back-upbestemming. Vaste bestemmingen:

- Lokaal: `/Users/benvanbelzen/Music/Music-DNA/Spotify-Archive`
- iCloud: `/Users/benvanbelzen/Library/Mobile Documents/com~apple~CloudDocs/Music-DNA/Spotify-Archive`
- Back-up: `/Volumes/Seagate 2TB/Music-DNA/Spotify-Archive`

Geen overschrijven van eerdere exports. Current/original/legacy, ratings, reserves/FIFO, journalen en Walk & Listen blijven beschermd. Familieplan en Digitale werkplek vallen buiten deze opdracht.

Besluit is geen bewijs van een werkende wekelijkse automatisering. [Implementatiestatus, proeven en eerstvolgende handeling](weekly-archive/PREPARATION-2026-10-31.md) blijven afzonderlijk bijgehouden.
