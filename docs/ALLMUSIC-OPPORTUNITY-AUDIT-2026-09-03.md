# AllMusic Opportunity Audit — 2026-09-03

## Doel
Controleren of de huidige Master Music DNA Database 1.7 alle voor Music DNA relevante AllMusic-lagen benut, en expliciet vastleggen welke kansen nog niet zijn opgenomen.

## Huidige situatie in Master 1.7
De Playlist-laag bevat expliciet:
- AllMusic hoofdgenre
- AllMusic hoofdstructuur
- AllMusic stijlen
- Classificatiestatus
- Taxonomiebron

Deze velden vormen een goede basis voor Genre DNA en mogen niet worden vervangen.

## Auditconclusie
De bestaande taxonomielaag is correct voor het oorspronkelijke Genre-DNA-doel, maar is te smal voor de rijkere Music-DNA-app. De volgende AllMusic-categorieën zijn relevant en worden nu nog niet als aparte structurele laag in Master 1.7 gebruikt.

### PRIORITEIT A — opnemen als duurzame taxonomische/verrijkingslaag
1. Moods
   - Beschrijven klank en gevoel.
   - Hoge waarde voor persoonlijke smaakprofielen, ontdekking, aanbevelingen en routes als donker/theatraal/episch/energiek.
   - Geschikt als aparte meerwaardige taglaag; niet vermengen met Genre of Style.

2. Themes
   - Beschrijven activiteiten, situaties of gebruikscontexten.
   - Waarde voor ingangen als Night Driving, Late Night, Road Trip, Introspection enz.
   - Lager gewicht dan Styles bij muzikale verwantschap; wel hoge UX-waarde.

### PRIORITEIT B — opnemen in de Music DNA Knowledge Graph
3. Similar To
   - AllMusic-redactionele artiestverwantschap.
   - Bruikbaar als één bron voor 'Meer zoals…', maar nooit als enige maatstaf.

4. Influenced By
   - Richtinggevende invloedrelatie naar voorgangers/inspiratiebronnen.

5. Followed By
   - Artiesten die volgens AllMusic door de artiest zijn beïnvloed.

6. Associated With
   - Relaties via gedeelde leden of belangrijke muzikale/persoonlijke verbanden.

7. Collaborated With
   - Samenwerkingsrelaties, ook achter de schermen.

8. Group Members
   - Huidige en voormalige leden van een groep.

9. Member Of
   - Bands/projecten waarvan een persoon lid is of is geweest.

Deze relaties passen beter in een graph-/relatielaag dan als herhaalde tekstkolommen per track.

### PRIORITEIT C — album-/releaseverrijking, zeer bruikbaar maar niet in de primaire trackmaster dupliceren
10. Album Picks
    - AllMusic-keuze voor representatief album binnen een artiestendiscografie.
    - Zeer bruikbaar voor 'waar moet ik beginnen?'.

11. Track Picks
    - Representatieve nummers binnen een album.
    - Bruikbaar voor verdieping en luisterroute.

12. Similar Albums
    - Album-naar-albumverwantschap; waardevol voor diep bladeren.

13. Editorial rating
    - Bruikbaar als context binnen de discografie, niet als waarheid over Bens smaak.

14. Reviews / editorial summary
    - Waardevolle redactionele laag, maar bron-/rechtenbewust gebruiken: metadata/links/samenvatting, geen ongeoorloofd kopiëren.

15. Credits
    - Componisten, producers, instrumentalisten, engineers enz.
    - Zeer hoge waarde voor kruisverbanden; idealiter normaliseren in Knowledge Graph en waar mogelijk combineren met andere gezaghebbende relationele bronnen.

16. Additional releases / release variants
    - Relevant voor versiehistorie, maar niet elke variant hoeft kernonderdeel van de app te zijn.

17. Awards
    - Informatief voor de rijke artiest-/albumpagina; secundaire prioriteit.

### PRIORITEIT D — artiestprofiel/verhaal
18. Biography / korte artist summary
19. Active years
20. Formed / birth / death / birthplace
21. Also Known As
22. Discography
23. Songs / credits-overzicht
24. Artist images

Deze zijn waardevol voor de rijke bladeraar, maar vormen geen vervanging voor de Master-tracklaag. Ze horen in een artiestentiteit/verrijkingslaag met bronverwijzingen.

## Belangrijk ontwerpprincipe
AllMusic levert meerdere semantisch verschillende lagen. Music DNA moet ze niet plat slaan tot één 'genre'-veld.

- Genre = brede categorie
- Style = muzikale subcategorie
- Mood = klank/gevoel
- Theme = situatie/activiteit
- Related Artist-relaties = netwerk/kruisverbanden
- Picks/ratings/reviews = redactionele duiding
- Credits/memberships = personen- en productierelaties

## Voorgestelde architectuur
1. Master 1.7 blijft bronbasis; geen bestaande velden overschrijven.
2. Voeg Moods en Themes toe als aparte duurzame taxonomische laag wanneer de brondata betrouwbaar kan worden verzameld.
3. Bouw relationele AllMusic-gegevens niet als honderden brede kolommen in Playlist, maar als genormaliseerde Music DNA Knowledge Graph.
4. Gebruik Similar To naast eigen DNA-relaties en andere bronnen; 'Meer zoals…' moet meerdere verklaringen kunnen tonen.
5. Behandel actuele of redactionele content als verrijkingslaag met bron en datum.
6. Nieuwe vondsten doorlopen dezelfde verrijkingsdiscipline als bestaande Master-artiesten.

## Status
Audit uitgevoerd. Geen bestaande Master-data wijzigen voordat de verrijkingsstrategie en databronnen per categorie zijn vastgesteld.

## Eerste aanbeveling
Voer eerst een pilot uit op Ghost en H.E.A.T met de volledige set:
Genre, Styles, Moods, Themes, Similar To, Influenced By, Followed By, Associated With, Collaborated With, Group Members/Member Of, Album Picks, Track Picks, Similar Albums, Credits en kern-artiestmetadata.

Gebruik die pilot om te bepalen welke velden permanent in de Master/verrijkingslaag komen en welke alleen dynamisch worden opgehaald.