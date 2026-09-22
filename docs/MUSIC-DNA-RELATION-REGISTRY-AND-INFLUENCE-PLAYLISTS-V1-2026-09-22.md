# Music DNA — Relation Registry & invloed-playlists — V1

**Datum:** 22 september 2026  
**Status:** geaccepteerde ontwerprichting; nog niet als productiecomponent gebouwd  
**Doel:** verbanden één keer betrouwbaar opslaan en daarna hergebruiken in Explorer, Wat hoor ik?, DNA Express, aanbevelingen, statistiek en playlistgeneratie.

## 1. Kernbesluit

Music DNA krijgt een centrale **Relation Registry**.

Een muzikaal verband wordt niet afzonderlijk opgeslagen voor Explorer, DNA Express, Wat hoor ik? en playlists. Het wordt één keer als gestructureerde relatie vastgelegd, samen met het bewijs waarop die relatie rust.

Daarna mogen verschillende Music-DNA-onderdelen dezelfde relatie voor hun eigen doel gebruiken.

Kern:

**entiteit → relatie → bewijs → toepassingen**

De Master Database blijft primair de catalogus-/muziekbasis: wat is een artiest, album, track, land, genre, jaar enzovoort.

De Relation Registry legt vast:

**hoe twee of meer Music-DNA-entiteiten aantoonbaar met elkaar verbonden zijn.**

## 2. Relaties moeten semantisch zuiver blijven

Niet iedere verbinding betekent hetzelfde.

Voorbeeld:
- Shiraz Lane heeft met KISS op podia gestaan;
- dat bewijst niet automatisch dat Shiraz Lane KISS als muzikale invloed noemt.

Daarom krijgen relaties expliciete typen.

Voorbeelden van hoofdcategorieën:
- invloed;
- muzikale overeenkomst;
- tour/podium;
- cover;
- bandlid/personeel;
- producer;
- songwriter;
- gastmuzikant;
- gedeeld project;
- label;
- scene/plaats;
- tijdperk;
- genre/style;
- verhaal/gebeurtenis.

Daaronder kunnen preciezere typen bestaan, bijvoorbeeld:
- `influence → stated-influence`
- `live → support-act`
- `live → shared-bill`
- `recording → covered-song`
- `personnel → former-member`
- `production → same-producer`

**Touren met een artiest mag nooit worden meegeteld als invloed.**  
**Playlistlidmaatschap mag nooit automatisch als invloed worden geïnterpreteerd.**  
**Geen aantoonbare relatie = geen feitelijke Explorer-deur.**

### 2a. Presentatieregel — één counterpart, één complete presentatie

Achter de schermen blijven verschillende relatievormen atomair en afzonderlijk bewaard. In de app worden alle relaties tussen het huidige object en dezelfde band/artiest/persoon echter **gebundeld tot één complete verbinding**.

Dus niet:
- Metallica als invloed;
- Metallica later opnieuw als tourrelatie;
- Metallica nogmaals als coverrelatie.

Maar één keer:
**Metallica — invloed · tour · opname/cover**, met daarachter de verschillende onderliggende feiten en bronnen.

Kernregel:
**één counterpart één keer zichtbaar; alle relevante relatievormen compleet daarbinnen.**

Dit geldt in ieder geval voor Explorer en Wat hoor ik? en moet waar logisch ook andere presentatielagen sturen. De onderliggende atomaire relaties blijven apart beschikbaar voor tellingen, filtering en playlistlogica.

## 3. Bewijs reist met de relatie mee

Een relatie bevat niet alleen bron- en doelentiteit, maar ook de bewijslaag.

Conceptueel record:

```
from:          Band X
to:            KISS
relationType:  stated-influence
direction:     Band X → KISS
claim:         Band X noemt KISS expliciet als muzikale invloed
sources:       [bron 1, bron 2, ...]
confidence:    confirmed
checkedAt:     datum
```

Een relatie kan meerdere bewijsstukken hebben zonder dat dezelfde relatie meerdere keren hoeft te worden geteld.

De bestaande Explorer-architectuur sluit hier direct op aan:

**verhaal → intern bronnenregister → oorspronkelijke bron**

De Relation Registry moet dezelfde bewijsfilosofie volgen.

## 4. Entiteiten krijgen stabiele identiteit

Relaties verwijzen naar vaste Music-DNA-entiteiten, niet naar losse tekstlabels.

Dus niet drie afzonderlijke varianten als:
- AC/DC
- ACDC
- AC-DC

maar één canonieke artiest-entiteit waar alle relaties naar verwijzen.

Relevante entiteittypen kunnen zijn:
- artiest/band;
- persoon;
- album;
- track;
- producer;
- songwriter;
- gebeurtenis;
- tour/concert;
- plaats;
- genre/style;
- label;
- verhaal/bron.

## 5. Vier kennislagen

### Laag 1 — Entiteiten
Wie of wat bestaat er?

### Laag 2 — Relaties
Hoe zijn die entiteiten met elkaar verbonden?

### Laag 3 — Bewijs
Hoe weten we dat het verband bestaat?

### Laag 4 — Afgeleide kennis
Welke patronen ontstaan wanneer veel betrouwbare relaties samen worden geanalyseerd?

Belangrijk: afgeleide conclusies worden niet als eeuwige feiten in de basisdata geschreven.

Dus niet opslaan:
`KISS = invloedrijkste band #1`

Wel opslaan:
- A → stated-influence → KISS
- B → stated-influence → KISS
- C → stated-influence → Iron Maiden
- D → stated-influence → KISS

Daaruit kan Music DNA op ieder moment opnieuw berekenen:
- meest genoemde invloed binnen de Master Database;
- meest genoemde invloed binnen bands die Ben positief beoordeelt;
- per land;
- per decennium;
- per genre/style;
- per generatie;
- per andere relevante selectie.

Daarbij moet de formulering altijd de dataset benoemen. Een uitkomst als "meest invloedrijk" betekent bijvoorbeeld:

**meest expliciet genoemde muzikale invloed binnen de onderzochte Music-DNA-dataset**

en niet: objectief meest invloedrijke artiest aller tijden.

## 6. Hergebruik in Music DNA

Eén bevestigde relatie kan meerdere producten voeden.

### Wat hoor ik?
Korte wetenswaardigheid:
> Wist je dat… Band X KISS expliciet als invloed noemt?

### DNA Explorer
Een aantoonbare deur:
> De KISS-invloed — waarom noemt Band X juist KISS?

### DNA Express
Geaggregeerde patronen:
> Welke artiest wordt binnen Music DNA het vaakst expliciet als invloed genoemd?

Mogelijke invalshoeken:
- KISS, Iron Maiden, AC/DC, Metallica, Black Sabbath;
- per land of regio;
- per decennium;
- per genre;
- generaties van invloed;
- verrassend veel/weinig genoemde grote namen.

### Aanbevelingsmotor
De machine kan leren of Ben relatief vaak positief reageert op artiesten uit bepaalde aantoonbare invloedslijnen.

### Artist/Explorer overview
Bij een grote artiest kan bijvoorbeeld verschijnen:
> Invloed op andere artiesten — N aantoonbare verbindingen

waarbij N uit de Relation Registry wordt berekend.

## 7. Nieuwe belangrijke toepassing: invloed-playlists

De Relation Registry moet vanaf het begin niet alleen **leesbaar** en **telbaar**, maar ook **selecteerbaar en routeerbaar voor playlistgeneratie** zijn.

Kernidee:

**kennis over beïnvloeding moet hoorbaar kunnen worden.**

Voorbeeld:

### 🧬 KISS — The DNA Trail
*Van KISS naar artiesten die het muzikale erfgoed aantoonbaar verder droegen.*

Mogelijke playlistvormen:
- **Directe invloed** — alleen artiesten die KISS aantoonbaar expliciet als invloed noemen;
- **Drie generaties KISS-DNA** — KISS → eerste generatie → volgende generatie;
- **KISS goes Scandinavia** — Scandinavische tak van aantoonbare invloed;
- **KISS-DNA volgens Ben** — invloedlijn gefilterd op positieve Music-DNA-beoordelingen;
- **Van KISS naar Ghost** — een afspeelbare route van aantoonbare muzikale verbindingen;
- **De grote invloedlijnen** — meerdere vertrekpunten, bijvoorbeeld KISS, AC/DC, Iron Maiden, Metallica of Black Sabbath.

Dezelfde aanpak moet generiek werken voor iedere artiest waarvoor voldoende betrouwbare relaties bestaan.

## 8. Selectie en volgorde zijn verschillende problemen

Voor invloed-playlists geldt:

**Relation Registry → inhoudelijke kandidaten**  
**Music-DNA smaakdata → persoonlijke filtering/rangschikking**  
**Flow-DNA → luistervolgorde**  
**Spotify → aflevering**

Daarmee voorkomen we dat een relationeel interessante playlist een slechte luistervolgorde krijgt.

Flow-DNA mag de volgorde optimaliseren, maar mag de betekenis van de relaties niet vervalsen.

## 9. Iedere playlisttrack moet uitlegbaar kunnen zijn

Bij een invloed-playlist moet Music DNA kunnen antwoorden op:

**Waarom zit deze artiest/track hierin?**

Bijvoorbeeld via `ⓘ Wat hoor ik?`:

> Deze artiest noemt KISS expliciet als invloed.

of, bij een generatieroute:

> Deze stap loopt via Band Y, die KISS als invloed noemt en vervolgens aantoonbaar Band Z beïnvloedde.

Alleen bewezen relaties mogen als feitelijke invloedroute worden gepresenteerd.

## 10. Nieuwe productactie: “🧬 Hoor dit DNA”

Sterke toekomstige generieke actie:

**🧬 Hoor dit DNA**

Deze knop kan op meerdere plekken verschijnen:
- bij een artiest in Explorer;
- bij een invloedkaart;
- bij een DNA Express-verhaal;
- bij een interessante relatie;
- eventueel vanuit Wat hoor ik?.

De actie vertaalt de zichtbare kennisstructuur naar een afspeelbare playlist of luisterroute.

Dit verbindt de kennislaag direct met muziekconsumptie.

## 11. Volledige Music-DNA-kringloop

Een mogelijke toekomstige route:

**DNA Express** ontdekt een opvallend invloedpatroon  
→ **Explorer** toont de invloedkaart en bewijsbare verbanden  
→ gebruiker kiest **🧬 Hoor dit DNA**  
→ Relation Registry levert inhoudelijke kandidaten  
→ smaakdata filtert/rangschikt  
→ Flow-DNA maakt er een goede luisterreis van  
→ Spotify levert de muziek  
→ **Wat hoor ik?** legt onderweg verbanden uit  
→ nieuwe tracks krijgen Raak/Goed/Nee  
→ die smaakdata vloeit terug naar Music DNA.

Kerninzicht:

**De kennislaag staat niet naast de muziek; de kennislaag wordt zelf een manier om nieuwe muziek te ontdekken.**

## 12. Ontwerpregel voor schaal

Niet vooraf honderden of duizenden relaties zonder doel handmatig verzamelen.

Gebruik dezelfde lazy-enrichment-filosofie als Explorer:
- huidige artiest/route voldoende verrijken;
- aantoonbare relaties opslaan wanneer ze worden gevonden;
- bronnen direct vastleggen;
- registries laten groeien door werkelijk gebruik en redactioneel onderzoek;
- later aggregaties automatisch laten signaleren wanneer genoeg data aanwezig is.

De Relation Registry is dus gemeenschappelijke infrastructuur, geen nieuw los product.

## 13. Relatie met bestaande Music-DNA-onderdelen

De Relation Registry verbindt:
- Master Database;
- DNA Explorer;
- `ⓘ Wat hoor ik?`;
- DNA Express;
- Ontdek DNA / smaakdata;
- Flow-DNA;
- toekomstige aanbevelingen;
- toekomstige statistieken;
- invloed-playlists;
- Spotify-aflevering.

Hiermee hoeft hetzelfde verband niet op vijf plaatsen opnieuw te worden verzameld.

## 14. Hervatregel

Bij verdere bouw van Relation Registry eerst een klein echt gegevensmodel maken met enkele goed onderbouwde voorbeelden, bij voorkeur rond reeds onderzochte artiesten zoals Ghost/Shiraz Lane/H.E.A.T/KISS.

Eerst bewijzen:
1. één relatie kan meerdere bronnen dragen;
2. relatietypen blijven zuiver;
3. Explorer kan dezelfde relatie lezen;
4. Express kan relaties aggregeren;
5. playlistgenerator kan op relatietype selecteren;
6. `Wat hoor ik?` kan dezelfde relatie als kort feit tonen.

Pas daarna breed opschalen.

## 15. Presentatieregel — één counterpart één keer compleet

De Relation Registry bewaart achter de schermen **atomaire relaties** afzonderlijk. Ghost ↔ Metallica kan dus tegelijk bestaan uit invloed, tour, cover en andere aantoonbare relatievormen.

De app presenteert die atomaire records echter niet als losse herhalingen van dezelfde band.

Vaste UX-regel:

**één counterpart wordt binnen dezelfde context één keer genoemd; alle relevante relatievormen worden daaronder compleet gebundeld.**

Dus niet:
- Metallica — invloed;
- later opnieuw Metallica — tour;
- later opnieuw Metallica — cover.

Maar bijvoorbeeld één deur/kaart:

**Metallica**  
invloed · tour · cover  
met daaronder de relevante korte toelichtingen en verdere verdieping.

Hetzelfde geldt voor ABBA, Iron Maiden en andere sterke relaties.

Belangrijk onderscheid:
- **opslagniveau:** relaties blijven afzonderlijk en semantisch zuiver, zodat tellingen, bewijs en playlistselectie correct blijven;
- **presentatieniveau:** Music DNA bundelt alle relevante relaties per counterpart tot één complete ingang.

Ook aggregaties moeten waar nodig dedupliceren. Een band met drie verschillende invloedsubtypen mag bij de vraag "hoeveel artiesten zijn door X beïnvloed?" niet automatisch drie keer meetellen. Voor invloedstatistiek telt de unieke artiest→invloed-combinatie als basis.

Voor samengestelde relaties kan een onderliggend object naar een hoofd-counterpart wijzen. Voorbeeld: Ghost → Enter Sandman (cover) hoort in de presentatie bij de complete Ghost ↔ Metallica-verbinding.

Dit principe geldt generiek voor Explorer, Wat hoor ik?, Express-kaarten en andere app-presentaties.

## 16. Samenvatting

**Eén keer bewaren, overal gebruiken.**

Music DNA bewaart niet alleen artiesten en tracks, maar ook aantoonbare verbindingen en het bewijs daarvoor.

Daaruit ontstaan drie soorten waarde:
1. **begrijpen** — Explorer / Wat hoor ik?;
2. **ontdekken** — Express / patroonherkenning;
3. **horen** — invloed-playlists / `🧬 Hoor dit DNA`.

Dit ontwerp is geaccepteerd als richting op 22 september 2026.
