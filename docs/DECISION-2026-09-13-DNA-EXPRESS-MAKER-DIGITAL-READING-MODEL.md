# DNA EXPRESS-MAKER — digitaal leesmodel

**Datum:** 2026-09-13  
**Status:** ACCEPTED CONCEPT DIRECTION

## Aanleiding
De eerste Mac-leesproef van Editie NUL bevestigt dat de inhoud en interactie functioneren, maar dat een A4-/papieren-pagina-achtige presentatie op desktop de leeservaring onnodig verkleint. De lezer krijgt de neiging naar voren te buigen terwijl een groot deel van het scherm onbenut blijft.

## Hoofdregel
**De editie is het tijdschrift. Het scherm bepaalt hoe je haar leest.**

DNA EXPRESS-MAKER behoudt de identiteit en het ritueel van een muziekweekblad, maar kopieert niet de fysieke afmetingen van papier.

## Wat we leren van digitale editions
1. Bewaar de editie als herkenbaar geheel: cover, inhoud, rubrieken, volgorde en archief.
2. Maak de leeslaag scherm-eigen: grotere tekst, comfortabele regelbreedte, royaal beeld en eenvoudige navigatie.
3. Gebruik een responsief grid om belangrijkere verhalen visueel meer ruimte te geven.
4. Laat interface-elementen tijdens het lezen zoveel mogelijk naar de achtergrond verdwijnen.
5. Gebruik fotografie op digitaal formaat; niet als kleine illustratie in een nagebootst vel papier.
6. Maak mobiel geen verkleinde desktopeditie.

## Mac — breedbeeldeditie
De Mac is de primaire rijke magazine-ervaring.

- De editie gebruikt vrijwel de volledige beschikbare browserbreedte.
- Geen gecentreerde A4-kaart met brede donkere marges.
- Een maximale redactionele canvasbreedte van circa 1500–1600 px voorkomt dat zeer brede schermen stuurloos worden.
- Cover en sectie-openers mogen vrijwel schermbreed zijn.
- Grote fotografie krijgt 60–100% van de beschikbare breedte waar het verhaal dat verdient.
- Inhoudsopgave en radar gebruiken een breed modulair grid.
- Hoofdverhalen kunnen echte spreads vormen: beeld + kop, beeld + tekst of asymmetrische composities.
- Lopende tekst blijft bewust smaller: ongeveer 680–820 px per leeskolom, zodat regels niet te lang worden.
- Bodytekst wordt op desktop groter en rustiger dan in de huidige proef.
- Witruimte wordt gebruikt om te ademen, niet om een papieren paginarand na te bootsen.
- De ondernavigatie wordt lichter en minder dominant; de inhoud staat voorop.

## iPhone — leeseditie
De iPhone is geen mini-Mac.

- Eén royale leeskolom.
- Geen horizontaal verkleinde spreads.
- Cover blijft een echte cover, daarna verticale leesstroom.
- Grote koppen worden begrensd zodat niets afbreekt of buiten beeld valt.
- Fotografie mag edge-to-edge.
- Compacte vorige / inhoud / volgende-navigatie.
- Geen pinch-zoom nodig voor normale lezing.

## iPad — tussenvorm
- Portret: dichter bij de iPhone-leeseditie, maar ruimer.
- Landschap: kan magazine-spreads en twee kolommen gebruiken.
- iPad is kwaliteitscontrole, niet het apparaat waaraan Mac of iPhone zich moeten aanpassen.

## Publicatieritueel blijft behouden
1. **Cover** — de digitale brievenbuservaring.
2. **Open de editie** — bewuste overgang.
3. **Inhoud** — overzicht en voorpret.
4. **Redactionele secties** — responsief, scherm-eigen.
5. **Verdieping** — luisteren, Artist World, bronnen, concerten en andere digitale deuren.
6. **Laatste pagina** — opdracht aan de redactie / vooruitblik.
7. **Archief** — de gepubliceerde editie blijft als tijdsdocument bewaard.

## Visuele identiteit
De vormtaal van Melody Maker/NME 1972–1985 blijft inspiratie voor masthead, hiërarchie, rubrieken, ruwe persenergie en coverritueel. Binnenpagina's zijn geen sepia-replica's. Music-DNA-eigen werelden behouden hun eigen identiteit:

- Band DNA: bestaande Band-DNA-ontwerpen hergebruiken; niets nieuws verzinnen zolang die ontwerpen niet zijn teruggevonden.
- Ontdek DNA: Edelstenenkabinet-paletten en -sfeer.
- LIVE!: concertpers / gig-ad / ticket-energie.
- Genre DNA: bestaande Genre-DNA-taxonomie als redactionele kaart.

## Technische ontwerpregels voor de volgende prototypeversie
Desktop breakpoints worden niet langer alleen als 'grotere mobiel' behandeld. Voor >= 1100 px komt een aparte wide-edition laag:

- `.issue`: width: 100%; max-width circa 1600px; minimale buitenmarge.
- `.page`: bredere horizontale padding op basis van viewport, geen A4-silhouet.
- `.article`: comfortabele leesmaat onafhankelijk van canvasbreedte.
- `.hero`: 70–85vh voor cover/major opener waar passend.
- `.featurePhoto`: grotere beeldhoogte en mogelijkheid tot full-bleed binnen canvas.
- `.contents`, `.desk`, `.radarPhotos`, `.storygrid`: responsieve magazine-grids met hiërarchie in plaats van gelijke vakjes.
- sectie-openers mogen een eigen grid krijgen; gewone artikelen blijven rustig.

## Ontwerpcriterium
De nieuwe Mac-versie slaagt wanneer de lezer niet meer naar voren wil buigen, het scherm duidelijk wordt benut, de tekst ontspannen leesbaar blijft en de ervaring nog steeds onmiskenbaar **DNA EXPRESS-MAKER** is — geen gewone website en geen digitaal A4'tje.

## Productzin
**Een muziekweekblad uit de wereld van Melody Maker en NME, opnieuw uitgevonden voor het scherm van 2026.**
