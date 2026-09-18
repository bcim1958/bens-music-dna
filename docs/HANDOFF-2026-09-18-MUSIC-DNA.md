# DAGAFSLUITING — MUSIC DNA — 18 SEPTEMBER 2026

Status: geborgd ontwerp- en release-anker voor hervatting op 19 september 2026.

## 1. Vandaag vastgezet

### Productregel
Music DNA moet visueel betoverend zijn en functioneel eenvoudig. De machine mag complex zijn; de gebruiker merkt daar zo weinig mogelijk van.

Anti-overkill:
> De muziekrealiteit levert de metafoor; gebruiksgemak bepaalt hoeveel daarvan zichtbaar wordt.

Een scherm bestaat alleen wanneer het:
1. de volgende handeling duidelijk maakt;
2. betekenisvolle feedback geeft; of
3. vrijwillige ontdekking opent.

### Dagelijkse gebruikersroute
De beoogde voorkant is:
OPENEN → NU OP DE SET · 1 VAN 3 → 2 VAN 3 → 3 VAN 3 → VOOR VANDAAG COMPLEET.

- `NU` is bewust tijdsonafhankelijk.
- Spotify blijft prominent.
- De vier beoordelingen blijven inhoudelijk RAAK / GOED / TERUGKOMEN / NIET.
- De vier bedieningselementen krijgen gelijkwaardige tikvlakken en een gezamenlijke Music-DNA-juwelenstijl; visuele hiërarchie mag betekenis geven zonder een keuze functioneel te bevoordelen.
- Albumart wordt onderdeel van de wereld, niet een los webkaartje.
- Technische termen en machine-status verdwijnen uit de gebruikerslaag.

### Encore
ENCORE is geen apart verplicht tussenscherm.
Alleen als extra reserve nodig is, verschijnt op VOOR VANDAAG COMPLEET:
ENCORE! — Nog zin in een toegift?
De gebruiker kan vrijwillig één extra ontdekking doen en daarna stoppen; maximaal twee extra ontdekkingen indien nodig.
Extra beoordelingen tellen niet mee in de officiële Muziekmeter.
Geen reservebehoefte = geen Encore.
Na afloop is klaar ook werkelijk klaar.

### Mijn Muziekwereld
Dit is de vrijwillige rijke laag na het dagelijkse jurywerk. Geen dashboard met steeds meer tegels, maar een ruimtelijke muziekwereld.
De vier zichtbare hoofdpoorten in het huidige concept worden:
- EDELSTENENKABINET
- DNA EXPRESS
- ARTIESTENWERELD
- MEER ONTDEKKEN

`Mijn Playlists` vervalt. Het Edelstenenkabinet biedt de bijzondere toegang tot de wekelijkse Ontdek-DNA-playlists; Spotify blijft de feitelijke muziekbibliotheek.

Architectuurzin:
> Music DNA verzamelt. Het Edelstenenkabinet bewaart. DNA Express vertelt.

## 2. Zaterdagcadeau / Edelstenenkabinet

Een weekcadeau is één verzamelobject met twee verhalen:
- de definitieve Ontdek-DNA-weekplaylist van exact 21 positieve ontdekkingen in luistervolgorde;
- de edelsteen van die week met beeld, naam en verhaal.

Na het uitpakken krijgt het complete cadeau een vaste plaats in het Edelstenenkabinet. De steen is de toegang tot zowel het edelsteenverhaal als de muziek/Spotify-playlist.

Jaarlogica:
- één week = één edelsteen;
- de weekkleuren lopen gedurende het kalenderjaar bewust door een kleurpalet;
- Spotify en Edelstenenkabinet zijn twee verschijningsvormen van hetzelfde weekobject;
- W36/2026 start met Granaat;
- Opaal is gereserveerd voor W52 als veelkleurige afsluiter.
Exacte tussenliggende palette-mapping niet opnieuw verzinnen; eerst bestaande bron terughalen.

DNA Express:
- in de app blijft het kabinet compact en verleidelijk;
- wekelijks kan dezelfde edelsteen in DNA Express rijk, groot en redactioneel worden verteld;
- einde jaar kan het complete kabinet de basis vormen voor een jaarverhaal.

## 3. Technische 1.0-borging

De bewezen productiemachine wordt niet vervangen door de visuele proefversies.

Actieve productie:
- /test/index.html → daily.html
- daily.html = productie dagelijkse motor
- zaterdagcadeau.html = productie zaterdagmotor
- daily-v3.html en daily-production-safe-20260918.html blijven rollback/referentie.
- RC1/RC2/RC3 zijn proefbanken, niet het uiteindelijke visuele product.

Release gates volgens RELEASE-AUDIT-2026-09-18:
- G1 single production entry: GREEN binnen /test/
- G2 duurzame state op echte Safari/iPhone/home-screen/cache-wissel: AMBER, live bewijs ontbreekt
- G3 weekcontinuïteit/code t/m W39: GREEN
- G4 officiële 3 per dag versus reserve: GREEN
- G5 zaterdagcadeau-integriteit: AMBER tot echte W38 Spotify/delivery/order-proef
- G6 W38→W39 overgang: AMBER tot live rollover op zondag
- G7 productie-UX binnen huidige technische scope: GREEN; visuele eindlaag is nu afzonderlijk in ontwerp
- G8 volledige release proof: RED totdat de volledige live cyclus aantoonbaar is doorlopen

Belangrijk: geen gate groen verklaren op aannemelijkheid. Maken → controleren → pas dan doorlaten.

## 4. Visuele ontwerpstand

De cinematic/cosmic Music-DNA-wereld met donkerblauw/paars, goud, podiumlicht en juwelen is de ontwerpmaatlat.
De laatste visual heeft de juiste vereenvoudigde dagroute en plaatst ENCORE op VOOR VANDAAG COMPLEET.
Nog te corrigeren in volgende visual/prototype:
- Mijn Playlists vervangen door DNA Express;
- geen gegenereerde voorbeeldartiesten/albumbeelden als productie-assets beschouwen;
- tekst, iconen en logo's exact en consistent maken;
- juwelen als één eigen ontworpen familie verfijnen;
- gelijke touch targets technisch garanderen;
- nutteloze navigatiepijlen/controls vermijden.

## 5. Wat morgen als eerste gebeurt

19 september 2026 is zaterdag en daarom heeft borging voorrang op verdere verfraaiing.

Volgorde:
1. W38 echte zaterdagcyclus uitvoeren en G5 bewijzen: officiële week compleet, exact 21, alleen RAAK/GOED, juiste membership, Smart Flow, exact Spotify-ID/order, playlist-readback en delivery protection.
2. Bevindingen onmiddellijk vastleggen; bij afwijking veilige wachtstand, nooit een cadeau fingeren.
3. Daarna de visuele zaterdagervaring ontwerpen: laatste officiële beoordeling → VOOR VANDAAG COMPLEET → echte cadeau-onthulling → edelsteen + verhaal + 21 nummers → plaatsing in kabinet.
4. De gecorrigeerde Mijn Muziekwereld-architectuur meenemen: DNA Express in plaats van Mijn Playlists.
5. Zondag 20 september: live W38→W39 rollover bewijzen voor G6.
6. Pas na deze live bewijzen beslissen over promotie van de nieuwe visuele voorkant richting productie/root.

## 6. Niet opnieuw openen zonder nieuwe aanleiding

- 21 officiële beoordelingen per week staat vast.
- reserve is apart en vrijwillig via Encore;
- gift is exact 21 positieve nummers;
- gebruiker ziet geen voorraadplekken 4/5;
- `NU OP DE SET` staat vast als dagelijkse voortgangstaal;
- concertmetafoor is ondersteunend, geen UI-overkill;
- Mijn Playlists vervalt uit Mijn Muziekwereld;
- Edelstenenkabinet bewaart de weekcadeaus;
- DNA Express vertelt ze rijker;
- technische productie blijft beschermd terwijl de visuele wereld apart wordt gebouwd.

## Hervatpunt
Morgen niet opnieuw ontwerpen vanaf nul. Begin met de live W38-zaterdagproef en gebruik dit document plus de bestaande release-audit en concert-dramaturgie als harde onderlaag.
