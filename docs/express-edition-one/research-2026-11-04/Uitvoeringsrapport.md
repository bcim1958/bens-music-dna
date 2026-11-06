# 4 november — lokale onderbreking, herstel en actuele besluiten

## Live stand

Live main is **63ff7d89d8e5d7bb3789cef718f89571a0adbcd9**, niet meer e7351f0c. Main bevat nu merge #25 met vier documentbestanden (120 toegevoegde regels). Express-branch stond vóór deze ronde nog op 3b5b532fbba6792ee4ab3b65627fbcfe3c1f2243. #23 open/draft; #22 open/draft, head 5efb2258fb0a428a6d760238565605c2d9fe31da; #18 open/draft, head 7bae6b74ac9c72a0980b023b8da29b4ed87fc24a, conflicterend. Geen merge/rebase uitgevoerd; main-documenten gelezen via git show/diff, geen andere wijzigingen overschreven.

De twee PR-workflows op Express-head 3b5b532 zijn voltooid met success: Express preparation safety run 41423082850 en Weekly Music DNA regressions run 41423082854. Dat bewijst hun controles op die head, geen volledige productieketen.

## Nieuwe verificatie

27 lokale voorbereidingsregressies PASS (25 bestaand + 2 toegevoegd). De nieuwe proeven gebruiken synthetische inhoud en synthetische reviews, uitsluitend in tijdelijke fixturemappen. Er wordt werkelijk een afzonderlijk Node-proces met SIGKILL gestopt; er is geen exception die nog de normale finally-opruiming zou doorlopen.

1. **Stop vóór atomische rename:** lock en staged bestanden blijven staan, er is geen zichtbaar eindpakket. Een retry geeft CONCURRENT_OR_INTERRUPTED. De testoperator archiveert lock met owner.json en stage buiten de uitvoermap; pas daarna maakt dezelfde invoer één compleet pakket. De volgende replay hergebruikt het pakket.
2. **Stop direct na rename:** het complete pakket en alle receipt-hashes worden teruggelezen vóór herstel. Retry blijft geblokkeerd door de lock. Na expliciete archivering van de lock hergebruikt de voorbereiding het pakket; receiptbytes blijven exact gelijk. Er ontstaat geen tweede pakket. De eerste complete replay schrijft één attemptlog; de onderbroken poging heeft zelf geen voltooid attemptrecord.

Beperking: het tweede stopmoment ligt na rename maar vóór de daaropvolgende directory-fsync. Dit bewijst procesdoodherstel op dit lokale filesystem, geen stroomuitvalbestendigheid. Synthetische inhoud bewijst geen bronkwaliteit, reviewerbevoegdheid of apparaatcontrole. Er is geen echte scheduler-/Spotify-/publicatieproef uitgevoerd, en geen automatische stale-lock-opruiming toegevoegd.

## Echte editie-invoer

De bestaande input-r2.json is ongewijzigd lokaal uitgevoerd. Resultaat en teruggelezen logcontrole staan in [actual-input-hold.json](actual-input-hold.json): **HOLD / DEPENDENCY_MISSING / editorialReview, deviceReview**, nul eindpakketten. De hashcontrole van alle aangeleverde artefacten is doorlopen. Dit is de eerste ontbrekende poort, geen bewijs dat alle latere bron-/biografiepoorten gereed zijn. De 21 werkportretten van 2 november blijven concepten en zijn niet als ready-bio's of goedgekeurde input ingevoerd.

## Nieuw geaccepteerd besluit op main

DNA SMAAKPORTRETTEN is een vast periodiek onderdeel: starteditie RAAK-op-mijn-lijf met referentie W36–W44 2026; vanaf 2027 W01/W14/W27/W40. W01-2027 gebruikt eenmalig W36–W52 2026. Indeling DNA Specials → 04 Mijn smaak → DNA SMAAKPORTRETTEN. Geen vaste 21-tracknorm en geen verdere selectieperioden afgeleid. Zie main-commit 63ff7d8, docs/DECISIONS.md en productieprotocol, aanvulling 2 november.

Voor Editie 1 is dit een aanvullende rubricerings-/bronafhankelijkheid: de afzonderlijke starteditie en ratingprovenance moeten worden gevonden/gecontroleerd voordat inhoud wordt overgenomen. Geen nieuwe playlist, score of smaakconclusie geconstrueerd. Het nieuwe privacybesluit is gelezen en toegepast; privé bronmateriaal blijft buiten de editie.

## Expliciet herstelprotocol — voorstel voor bevoegde operator

Dit is documentatie, geen automatische herstelfunctie. Leg eerst uitvoermap, invoer-/enginehash, lock-owner, processtatus, stages en eventuele eindreceipt vast. Bevestig dat de eigenaar werkelijk is gestopt en dat geen andere runner dezelfde uitvoermap gebruikt. Verplaats de volledige achtergebleven lock en stages naar een gedateerd afzonderlijk archief; verwijder geen bewijs. Voer dezelfde input met dezelfde engine opnieuw uit. Controleer status, inputhash, complete receipt/outputinventaris en attemptlog. Bij enig verschil: HOLD en onderzoek; geen blind nieuwe revisie of fallback naar een oudere editie. Alleen de testfixture-operator heeft dit vandaag uitgevoerd, geen productieherstel.

## Open

Editieontwerp, authentiek beeld, complete bron-/creditdekking, volwaardige weekbiografieën, Smaakportretten-broncontrole, redactionele vrijgave en echte apparaatproef blijven open. Onbemande weekplanning en externe effect-/publicatieadapter zijn niet gerealiseerd of bewezen. iPhone-sync/FIFO is geen algemene weekpoort. Geen publicatiebevoegdheid toegevoegd. Current/original/legacy, journalen, voorraad, ratings, Walk & Listen, Ontdek DNA en overige projecten ongemoeid. Eindrapport blijft gepland voor 6 november.
