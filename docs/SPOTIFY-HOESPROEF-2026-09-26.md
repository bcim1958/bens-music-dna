# Externe Spotify-hoesproef — 26 september 2026

## Uitgangspunt
Gecontroleerde main-kop: `7642fbddc9d6f2653aa4193591ddd2fae35a6800`.
Canon: `docs/HANDOFF-2026-09-22-STOPSTAAT.md`, §22.9–22.10.
Recente week-manifest-commits tot en met `a3c3bff9` en `7642fbdd` zijn aanwezig.
W40 = Imperiale topaas, steen 5. Deze proef is geen W40-weekpublicatie.

## Uitgevoerde externe handelingen en waarnemingen
1. Spotify Desktop op macOS geopend. Aanvankelijk “Something went wrong”; de sessie werd daarna weer toegankelijk als Ben van Belzen.
2. Een afzonderlijke lege playlist gemaakt en privé gezet:
   **Music DNA — HOESPROEF W40 — Imperiale topaas — Steen 5**.
3. Playlist-ID via Spotify's kopieerlink vastgesteld: `6ARzCinEi6HyZKpIhxH12C`.
   [Testplaylist](https://open.spotify.com/playlist/6ARzCinEi6HyZKpIhxH12C).
   De privé-deellinkparameters zijn niet in GitHub opgeslagen.
4. Met ingebouwde image_gen een echt hoesbestand gegenereerd; geconverteerd naar JPEG 1000×1000, 303820 bytes.
   Bestand: [music-dna-w40-imperiale-topaas-steen-5.jpg](../assets/proofs/music-dna-w40-imperiale-topaas-steen-5.jpg).
   SHA-256: `8479d0cfb95c27a5024ed11c7265b640d2ce6050193d703036835a97ae92c360`.
5. Via **Foto kiezen → lokaal bestand → Opslaan** in Spotify daadwerkelijk geüpload.
6. Visueel gecontroleerd: de topaashoes verschijnt op de playlist en als bibliotheekminiatuur.
7. Naar Home genavigeerd, de testplaylist opnieuw geopend en opnieuw visueel gecontroleerd: hoes nog zichtbaar. UI toont **Privéplaylist**, correcte naam en beschrijving.

Bewijsvorm: live UI-waarneming en screenshots in de uitvoerende Codex-chat. Geen Spotify Web API-response, CDN-hashvergelijking, onafhankelijke tweede client of app-herstart getest.
De privétestplaylist is behouden als inspecteerbaar proefobject en blijft leeg.
W39 is niet gewijzigd, gereconstrueerd of herschikt. Er zijn geen tracks toegevoegd of verplaatst. Spotify-mapplaatsing is niet uitgevoerd en blijft handmatig.

## Museumtekst en beeld
Opgeslagen beschrijving:
> TECHNISCHE HOESPROEF — geen weekpublicatie. IMPERIALE TOPAAS · W40 — Topaas met roodachtig oranje tot oranjerode tinten. De handelsnaam kent geen officiële standaard. Steen 5 van de Music-DNA-slinger.

Feiten gecontroleerd bij [GIA Topaz Description](https://www.gia.edu/topaz-description) en [GIA: Imperial topaz](https://www.gia.edu/FAQ/gia-faq-imperial-topaz).
Beeld bevat Ontdek DNA, 2026-40, IMPERIALE TOPAAS en Steen 5.
De geschreven filmische Edelsteenmuseum-specificatie is toegepast; volledige visuele gelijkheid met historische hoezen is niet afzonderlijk gevalideerd. Kleine week-/tellertypografie is leesbaar op de geopende hoes, maar niet op de kleinste bibliotheekminiatuur.

Generatie: ingebouwde image_gen, geen nieuwe generatorarchitectuur of API-koppeling gebouwd.
Prompt:
```text
Use case: stylized-concept. Asset type: square Spotify cover for existing Music DNA Edelsteenmuseum. Create a rich cinematic museum-style gemstone cover, 1000x1000 intended output, square. A single spectacular faceted imperial topaz, warm reddish orange with delicate pink highlights, physically convincing crystal refraction, displayed against a deep dark museum background with dramatic elegant lighting. Strong readable thumbnail composition, restrained elegant typography. Exact text: "Ontdek DNA" as large title, "2026-40", "IMPERIALE TOPAAS", and "Steen 5". No other text, no symbols assigning meaning to the stone, no music imagery, no invented logo. This is artwork for an external upload proof; factual editorial text is kept separately.
```

## Reproduceerbare tekortkomingen op de gecontroleerde kop
De ongewijzigde `test/music-dna-week-manifest-v1.js` is lokaal uitgevoerd met Node.js.

- `gemstoneSequenceNumber('2026-36')`, `('2026-39')` en `('2026-40')` geven alle `null`, waar respectievelijk 1, 4 en 5 nodig zijn. De regex bevat dubbel geëscapete `\\d` in een regexliteral.
- `artworkPreflight({weekId:'2026-40',gemstone:{name:'Imperiale topaas',sequenceNumber:999,editorialText:'Steen 999 van de Music-DNA-slinger.'}})` retourneert `pass:true`, `sequenceNumber:null`. De onjuiste teller wordt dus aantoonbaar niet geblokkeerd.
- Van de zeven geëxporteerde selftests slagen er zes. `weeklyPublicationGateSelfTest()` retourneert `pass:false` met `afterBlockers:['published week manifest is not frozen']`. De testfixture mist de vereiste freeze; dit is geen bewijs dat de productiepoort een geldige bevroren week afwijst.
- Deze proef heeft de code niet gewijzigd. De juiste waarde 5 is expliciet in het proefbeeld en de proeftekst gebruikt; dat repareert de tellerfunctie niet.

## Betekenis voor hervatten
**Bewezen:** bestaand account → echte afzonderlijke Spotify-playlist → echt gegenereerde hoes → upload via Desktop UI → zichtbare hoes na heropenen.
**Nog niet bewezen:** autonome manifestgestuurde generatie/upload, API-uploadrechten, een volledige W40-publicatie met bevroren 21=21/19+2, Express en museumregistratie.
Geen automatische productie-readiness claimen op basis van deze losse hoesproef.
Eerst de bovenstaande concrete tellerfout en verouderde selftestfixture behandelen; daarna W40 volgens de bestaande keten uitvoeren zodra het echte weekmanifest beschikbaar is. Geen W39-reconstructie en geen nieuwe architectuur.
