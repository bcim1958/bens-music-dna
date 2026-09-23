# Music DNA — Shiraz Lane: eerste vul- en voorraadproef

> **Nieuwste vervolg:** [Verhaal gelezen → vertelde vondsten verwerkt](VALIDATION-2026-09-23-STORY-DISCOVERY-READING.md). De hieronder vastgelegde overlapbeperking is inmiddels voor expliciete volledige verhaalcoverage op API-niveau opgelost. Dit document bewaart het bewijs van de voorafgaande vulproef; de nieuwe aanvulling is de actuele hervatplek.

**Datum:** 23-09-2026  
**Status:** GREEN — brononderbouwde kennisproef; geen nieuwe UI of productiepromotie.  
**Vertrekpunt:** `4f597bbe72e3904802e65202af66506dd20c896a`, de herstelde [canonieke stopstaat](HANDOFF-2026-09-22-STOPSTAAT.md).  
**Actuele hervatplek voor deze vervolgstap:** dit document, naast de blijvende ontwerpprincipes in die stopstaat.

## Afbakening

Ben gaf na het herstel opdracht verder te gaan. De afgesproken volgende fase is vullen en beproeven. Shiraz Lane is gekozen als kleine RAAK-instroomproef, niet omdat een grote hoeveelheid bronnen nodig zou zijn om een plek te verdienen. Het RAAK-signaal komt uit de bestaande bespreking; er is geen rating gelezen of geschreven en geen automatische RAAK-koppeling gebouwd.

De proef voegt uitsluitend Registry-inhoud, gerichte controles en projectvastlegging toe. De API, Engine 30, proof-dashboard, W39, overige weekroutes en gebruikersopslag blijven ongewijzigd. Buzzcocks/Derry/Belfast blijft geparkeerd.

## Opbrengst

Drie entiteiten zijn toegevoegd: Shiraz Lane (artiest), Per Aldeheim (persoon) en Lordi (artiest). De bestaande bundeling verwerkt een persoon even goed als een band.

| Dossier | Afzonderlijke feiten | Bronbasis | Redactionele staat |
| --- | --- | --- | --- |
| Shiraz Lane ↔ Per Aldeheim | productie van In Vertigo; medeschrijverschap; eerdere samenwerking bij Carnival Days | MetalTalk + Soundi | Eén kort Registry-verhaal, drie herleidbare onderdelen |
| Shiraz Lane ↔ Lordi | supporttour in 2016; door Kett/Alex beschreven luistergeschiedenis | GRIMM Gent | Twee feiten en twee vondsten; bewust nog geen verhaal |

**Vijf feiten → twee counterparts → één verhaal en vier unread-vondsten.** De twee producer-vondsten kunnen het bestaande korte verhaal ontsluiten; de twee Lordi-vondsten blijven als niet uitgewerkt materiaal beschikbaar. Een aanwezig verhaal is niet automatisch gelezen.

Dezelfde bron kan meerdere feiten dragen. De twee Lordi-feiten blijven één interview als bewijs delen; ze tellen niet als twee onafhankelijke bevestigingen. Geen van deze feiten is opgeslagen als expliciete muzikale invloed en ze leveren dus geen invloed-playlistkandidaat op.

## Bronnen en afbakening van claims

Alle drie de gebruikte pagina's zijn op 23-09-2026 gelezen. Bronnenrecords bewaren publicatiedatum, controledatum, taal en een toelichting op het bronmoment. Nederlandse tekst is een parafrase, geen vertaald citaat.

1. [MetalTalk — Taylor Cameron in gesprek met Jani Laine, 16-10-2025](https://www.metaltalk.net/interview-shiraz-lane-jani-laine-breaks-down-in-vertigo.php): passage over Aldeheims terugkeer. Ondersteunt productie en eerdere samenwerking. Niet gebruikt als afzonderlijk bewijs voor co-writing.
2. [Soundi — Elli Muurikainen met Hannes Kett en Jani Laine, online 08-01-2026](https://www.soundi.fi/jutut/faktahan-on-ettei-englanninkielinen-musiikki-ole-se-milla-painetaan-eteenpain-suomessa-haastattelussa-shiraz-lane/): sectie “Parasta pöytään”. Ondersteunt productie, medeschrijverschap en eerdere samenwerking. Het interview verscheen oorspronkelijk in Soundi 10/25; de webdatum wordt niet als nieuwe interviewdatum gepresenteerd.
3. [GRIMM Gent — Vaim Hull met Hannes Kett en Joel Alex, 23-12-2016](https://www.grimmgent.com/interviews/shiraz-lane-35-months-later/): introductie en gesprek over de Lordi-tour en eerder luisteren. De publicatiedatum is geen exacte concertdatum. Fan zijn of als support spelen wordt niet opgewaardeerd tot een expliciete muzikale invloed.

De bredere aanknopingspunten KISS, labels en persoonlijke invloeden worden in deze beperkte proef niet toegevoegd. Ook geen ongecontroleerde claims over Aldeheims andere artiesten.

## Bewijs met de bestaande constructie

Uitgevoerd:

```sh
node test/relation-registry-health.cjs
```

- Ghost-audit: **0 errors / 0 warnings / 5 info**, ongewijzigd.
- Shiraz Lane-audit: **0 errors / 0 warnings / 1 info**. De info is de bewust niet in een verhaal gebruikte GRIMM-bron.
- Self-test slaagt en laat geen probe achter.
- Per Aldeheim verschijnt één keer met drie relaties en twee bronnen; Lordi één keer met twee relaties.
- Alle nieuwe verhaalitems en vondsten verwijzen naar bestaande relaties én ondersteunende bronrecords.
- De queue geeft bij gelijke invoer dezelfde volgorde en maximaal één vondst per counterpart. Een nieuwe sessiestaat begint met `disc-shiraz-per-two-roles` en `disc-shiraz-lordi-tour`.
- Na shown/read van deze twee verschijnt per counterpart de andere, inhoudelijk verschillende vondst. Na vier gelezen vondsten is de Shiraz-queue leeg; de feitelijke voorraad blijft vier.
- Ghosts queue blijft identiek wanneer alle Shiraz-vondsten worden gelezen. Feiten, bronnen en verhalen veranderen niet.
- Producer-, co-writing-, tour- en luistergeschiedenis worden niet als invloed geselecteerd.
- Alle vóór deze proef bestaande entiteiten, relaties, bronnen, verhalen en vondsten zijn inhoudelijk behouden. De Registry-API is tekstueel ongewijzigd.

Actuele totaaltelling: Registry `2026-09-23.2`, **26 relaties, vier relatieverhalen en acht discoveryrecords**. Voor Ghost blijven drie verhalen en vier discoveryrecords gelden; Shiraz voegt één verhaal en vier discoveryrecords toe.

## Wat deze proef nog niet bewijst

Dit is een geslaagde **Registry-/API-proef**, geen nieuwe zichtbare Shiraz Lane-wereld op de iPhone. Engine 30 leest zijn wereld nog vanuit Ghost en filtert in Verwantschap op artiesten. Personen kunnen in de Registry gebundeld worden, maar de bestaande Ghost-interface is daarmee niet automatisch algemene knooppuntnavigatie geworden.

De huidige queue voorkomt herhaling van discovery-ID's. Als één verhaal tegelijk meerdere vondsten vertelt, worden die andere vondsten nog niet automatisch als gelezen gemarkeerd. De producer-vondsten zitten bijvoorbeeld beide in hetzelfde korte verhaal. Ook bron-/verhaaloverlap over verschillende ID's wordt nog niet automatisch herkend. Geen claim van volledig herhalingsvrije Explorer-terugkeer.

`discoveryRotation(baseId,state)` selecteert verse vondsten voor de gekozen wereld, maar zijn tellers tellen het gehele aangeleverde state-object. Met Ghost en Shiraz samen zijn dat globale aantallen, geen Shiraz-tellers. Dat bestaande gedrag is hier expliciet vastgelegd, niet stilzwijgend veranderd.

Geen automatische wereldafwisseling, duurzame leesstatus, iPhone-validatie of productiepromotie. De bestaande main-Pages-workflow kan na commit lopen; dat verandert deze bewijsgrenzen niet.

## Exacte hervatplek

De eerste Shiraz-vulling is voldoende voor deze proef; niet verder vullen om alleen aantallen te vergroten. Volgende gerichte beproeving: vaststellen welke canonieke vondsten het producerverhaal werkelijk vertelt en welk ongebruikt Lordi-materiaal bij terugkeer overblijft. Gebruik dit concrete voorbeeld om verhaaloverlap te toetsen voordat de voorraad groeit; geen nieuwe algemene ontwerpronde.

De geaccepteerde hoofdlijn blijft: vullen, gebruiken en concrete beperkingen benoemen. Pas bij een expliciete volgende bouwstap de presentatie/leesregistratie aanpassen. W39 blijft buiten deze ontwikkellijn.
