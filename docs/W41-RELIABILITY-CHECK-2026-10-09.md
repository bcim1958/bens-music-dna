# Music DNA — betrouwbaarheid en voortgang, 9 oktober 2026

## Gecontroleerde basis

De actuele GitHub-hoofdbranch is vóór wijzigingen rechtstreeks gecontroleerd: `0987b7f5e043bc59dec3cd36e712a4c61f838fff`, 9 oktober 09.38 Nederlandse tijd. Beide bijbehorende Pages-runs zijn geslaagd. De repository is actief, publiek en schrijfbaar via de bestaande GitHub-koppeling. PROJECT-STATE, W41-voorbereiding, herstel van artiestuniekheid, historische handoffs en recente commits zijn gelezen. De historische bouwstop betreft het toenmalige herstel; deze opdracht autoriseert de huidige gerichte betrouwbaarheidscorrecties.

## Aantoonbare fouten en herstel

1. **Opnamealiassen:** dezelfde Spotify-opname onder verschillende interne IDs en artiestcredits kon tweemaal in de zaterdagselectie komen. De nieuwe foutproef faalde vóór herstel. Selectie en voorraad tellen nu exacte Spotify-opnames; ongeldige URLs zijn onbezorgbaar. Nieuwe leveringsregistraties bewaren Spotify-track-IDs naast de bestaande interne IDs. Historische ID-only registraties worden waar mogelijk herleid via bewaarde bank-, registry- en runtimegegevens. Een verbruikte opname kan onder een nieuwe interne ID niet opnieuw worden gekozen. Beoordelingen blijven intact.
2. **Bewaarzekerheid:** het vastleggen van reserveverbruik meldde succes bij een lokale opslagfout. De functie meldt nu mislukking; de cadeaupagina stopt met een herhaalmogelijkheid. Een andere weekselectie kan een bestaande leveringsregistratie niet stil vervangen.
3. **Hoesidentiteit:** een gewijzigd JPEG-bestand kon na een groene simulatie alsnog worden geüpload. Dit is met gewijzigde bytes gereproduceerd. De werkelijk opgehaalde bronhoes wordt nu vóór upload aan de SHA-256 in het manifest getoetst; ontbrekende of afwijkende hash blokkeert. Eventuele JPEG-compressie volgt pas na deze broncontrole. De ontvangstregistratie bewaart de gecontroleerde bronhash.
4. **Weekcapaciteit:** 226 W41-tracks vertegenwoordigen slechts 24 artiestcredits. Extra aanbiedingen konden bij lage voorraad de resterende officiële dagen onmogelijk maken. De dagroute en gereedheidsproef delen nu een capaciteitstoets: officiële dagen eerst, extra aanbiedingen alleen binnen de overblijvende capaciteit. Alle officiële én reserveartiesten worden over de hele week uitgesloten. De proef schrijft geen toekomstige keuzes naar opslag en behoudt reeds gemaakte keuzes.
5. **Dagvastloper:** de oude beschikbaarheidsteller telde ongebruikte track-IDs die niet meer door de echte selector konden worden aangeboden. Daardoor bleef een beoordeelde dag wachten op niet-beschikbare reserveplaatsen. De teller gebruikt nu dezelfde selectie- en capaciteitspoort. Een proef met lage voorraad en gepensioneerde keuzes bewijst dat de volgende officiële dag bereikbaar blijft.
6. **Depotmeldingen:** 230 kaarten hadden een bekend Spotify-bronjaar én nog `year ontbreekt`. Alleen die melding is verwijderd. Het afzonderlijke voorbehoud over het oorspronkelijke opnamejaar, voorlopige genres, bronlinks en de twee open hoofdlabels blijven bestaan. Geen Master-, playlist-, gebruiks- of collectiemutaties.

## Reproduceerbare controles

Vanaf de repositoryroot, met Node 22 of hoger en Python 3:

```sh
node scripts/run-weekly-regressions.cjs
python3 scripts/audit-master-depot.py
```

De 16 offline testuitvoeringen controleren bankidentiteit, artiestuniekheid, weekcapaciteit, dagvoortgang/herstart, discoverybeleid, W40-callback en hervatting, JPEG-grootte en identiteit, weekmanifesten, zeven dagelijkse W41-pagina's, alle negen zaterdag-/apparaatstappen en Express-overdracht. Ze gebruiken alleen synthetische toekomstige beoordelingen en netwerkvervangers; geen Spotify-token of persoonlijke export is nodig.

Daarnaast is de volledige zeven-daagse proef uitgevoerd met de reeds aanwezige **echte historische export van 3 oktober**, gecombineerd met **synthetische W41-beoordelingen**. 21 verschillende officiële artiesten, minstens twee nieuwe artiesten per dag, herstartstabiliteit, behoud van historische beoordelingen en de negen-stappenketen slagen. De verwachte 18+3-verdeling in die negatieve-dagfixture slaagt; dit is geen productiequota.

De Master-audit vergelijkt alle JSON-velden met de canonieke CSV en de identiteit, album, bronjaar, gebruik, toepassingen en 230 bronverwijzingen met het geserveerde Depot. Stand blijft **3.877 tracks / 3.005 gebruikt / 872 zonder geregistreerd gebruik**. Nul afwijkingen na de meldingscorrectie. Het canonieke Master-archief is byte voor byte behouden.

De gewijzigde lokale GitHub Pages-workflow vereist deze tests en audit als voorganger. Dezelfde suite is ingesteld voor pull requests. Na upload kan een rode offline controle geen nieuwe Pages-uitrol starten. GitHub-CI voor deze nieuwe commits is nog niet uitgevoerd.

## Lokale commits en uploadstatus

De correcties zijn op de lokale herstelbranch `codex/music-dna-w41-reliability-2026-10-09` vastgelegd. De automatische goedkeuringscontrole heeft een upload naar de publieke repository geweigerd: externe wijzigingen, inclusief workflow- en projectstatuswijzigingen, werden niet specifiek genoeg geautoriseerd geacht. Er is geen upload, pull request, merge of nieuwe publicatie uitgevoerd. De geteste commits staan klaar voor expliciete uploadtoestemming; de bestaande GitHub-hoofdbranch en live website bevatten deze nieuwe reparaties nog niet.

## Bewijsgrenzen en hervatting

- Offline groen betekent **geen echte volledige zaterdaglevering**. De proeven blijven `spotifyWrites=0`, `endToEndProven=false`.
- Actuele W41-beoordelingen, apparaatopslag/FIFO en automatische iPhone-cadeau-afsluiting zijn niet als echt bewijs aangeleverd of aangepast.
- Reeds aangeboden dubbele artiesten blijven historische keuzes. De selectie bewaakt de nieuwe aanbiedingen en de cadeaupoort houdt een onveilige levering tegen; oude beoordelingen worden niet herschreven.
- Bij bestaande lage voorraad of negatieve beoordelingen kan de echte resterende kandidaatcapaciteit alsnog onvoldoende zijn. De route blokkeert dan veilig. Er zijn geen nieuwe Spotify-identiteiten gegokt of ongecontroleerde kandidaten toegevoegd.
- Voor historische ID-only leveringen waarvan geen opnamebron meer beschikbaar is, kan alleen de interne ID worden uitgesloten. Nieuwe leveringen bewaren de opname-identiteit duurzaam; ontbrekende oude bronnen worden niet verzonnen.
- De bronjaarscorrectie bevestigt geen oorspronkelijke opnamejaren en sluit de genrevragen rond Mother's Finest en Thank You Scientist niet.
- Spotify-mapplaatsing blijft een bekende technische beperking. DNA Express blijft een gevalideerde overdracht naar een nog niet operationele bestemming, geen gepubliceerde editie.
- W42 is nog niet geregistreerd of gereed. Vanaf zondag 11 oktober toont de bestaande route een veilige wachtstand in plaats van een verlopen W41. Nieuwe weekvoorraad vereist afzonderlijke bron- en capaciteitstoetsing.

De eerstvolgende productiecontrole blijft zaterdag 10 oktober op de echte complete W41-invoer: runtimepoort, playlist met 21 unieke URI's in volgorde, hoes, museum en zichtbare apparaat-afsluiting. Deze sessie heeft geen Spotify-playlist gemaakt of aangepast.
