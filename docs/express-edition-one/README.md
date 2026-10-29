# Editie 1 en veilige weekproductie — werkdossier 29 oktober 2026

Status: **REDACTIEPROEF / HOLD**. Dit is geen volledige aflevering, geen W44-publicatie en geen bewezen onbemande zaterdagketen. Werklabel Editie 1; canoniek editienummer volgt de daadwerkelijk gekoppelde Ontdek-DNA-weekplaylist, niet een nieuwe autonome teller.

## Wat werkelijk is gemaakt

- `Redactieproef.html`: lokale leesuitgave met opening, vier verhaalsegmenten, Mijn Week, alle vijftien Special 102-luisterlinks en negen discrete bronverwijzingen. Geen generieke artiestfoto’s of nagemaakte historische documenten. Typografische leesproef; authentieke beeldregie en vierhoezenquiz nog niet op de goedgekeurde kwaliteitslat.
- `Het-verhaal-achter-de-playlist.md`: oorspronkelijk Nederlandstalig manuscript; loopbanen, productie en het verschil tussen opname en voorgeschiedenis vormen de rode draad. Opnamecredits worden niet uit een vroege bandbezetting afgeleid. Negen primaire bronsporen, verdere complete dossiers in `Onderzoeksqueue.md` open.
- Special 102: alle 15 URI’s op 29 oktober exact in volgorde teruggelezen uit de publieke Spotify-embed. Ook alle 15 aangetroffen in historische Master 1.12 JSON. Dit bewijst geen accounttoelating, afgespeelde audio, actuele Master-versie of nieuwe ratings.
- Mijn Week: 36 echte bewaarde oordelen (10 RAAK, 13 GOED, 7 TERUGKOMEN, 6 NIET); huidige selectie uit PR #22 bevat 10 RAAK en 11 GOED. Geen achteraf verzegelde voorspelling, succespercentage of smaakwet.
- `scripts/express-weekly.cjs`: offline pakketvoorbereiding met controles, geen generator voor volledige journalistiek en geen publicatieadapter. `test/express-weekly-regression.cjs`: 25 synthetische veiligheidstests.

## Live uitgangsstand en gelezen bronnen

Main live opgehaald: `e7351f0c501d32a27248cb708d71a0106ee6abaf`. PR #22 open/draft, mergeable=true, head `dce0e37985e89bc0d4dc676ae74b82b6236d90bb`; W44-release en auditieve flow open. PR #18 open/draft, mergeable=false, head `7bae6b74ac9c72a0980b023b8da29b4ed87fc24a`. Geen merge/conflictoplossing van die PR’s uitgevoerd.

Inhoudelijk gelezen: de drie lokale v1.0-registers; redactiestatuut 16/17 september; weekly production protocol; blauwdruk/artdirection; Relation Registry inclusief weekbio’s/manifest; Snoeptrommel en nieuws/historie; 2.0-besluit van PR #18; broncorrectie 25 oktober; regelset en hervatpunt 27 oktober; healthcheck/besluit/bronreview 29 oktober; historische 48p-tekstmontage. De registers zijn historische peilingen, geen actuele main-status.

Bewijsconflicten behouden: 48p is een historische begroting tegenover 34/38 daadwerkelijke PDF-bladen en een later tekstgestuurd statuut. Geen vaste 48p-norm hersteld. Het hervatpunt 27 oktober bevestigt comfortabele liggende leesrichting en een voorstel voor vier volledige hoezen plus vraag met onthulling op aparte quizpagina. Dat is niet hetzelfde als Music Challenge; score/opslag daarvan blijft onbeslist. De Kunst van de Hoes blijft voorstel. Exacte jaarlijkse kleurreeks niet ingevuld; gekozen W44 Chrysoberil v4 uit PR #22 behouden. Oorspronkelijke assistantteksten uit hoofdchat blijven deels onopgeloste inhoudsverwijzingen; niet gereconstrueerd.

## Voorbereidingscontract (geïmplementeerd)

Aanroep: `node scripts/express-weekly.cjs docs/express-edition-one/input.json /absolute/separate/output-root`.

Input en output zijn gescheiden. Een expliciete UTC-cutoff bevriest de bronperiode. Iedere invoerfile krijgt SHA-256; relatieve paden blijven binnen de bundle, zonder symlinks. Manuscript, claims, exacte playlist, HTML-leesproef, redactionele review en apparaatreview zijn vereist. Reviews binden de exacte manuscript-, claims-, playlist- en layoutbytes. Dat is integriteitsbewijs van een aangeleverde review, **geen zelfstandige waarheidsvinding of garantie dat een reviewer deskundig was**.

Een weekpakket vereist bovendien een expliciet bevroren manifest van de officiële 21, onafhankelijke gedateerde readback van dezelfde URI-volgorde en precies één brononderbouwde bio per afgeleide unieke artiest. Ratings zijn geen voorwaarde voor nieuwe ontdekkingen. Dit nieuwe inputcontract heeft nog geen bewezen adapter vanaf de bestaande weekmanifests/Spotify-account; historische input wordt niet stilzwijgend geconverteerd.

Idempotentie: week + expliciete revisie identificeert het resultaat; engineversie en SHA-256 van de uitvoerbare code, volledige inputbytes en bronhashes vormen de fingerprint. Identieke retry leest alle opgeslagen outputs terug en levert hetzelfde pakket. Gewijzigde input op dezelfde revisie geeft REVISION_CONFLICT. Een nieuwe revisie vergt expliciete reconciliatie; oudere revisies blijven bestaan. Geen automatische 'latest'-pointer of vervanging van reeds gepubliceerd werk.

Concurrentie: exclusieve weeklock. Onderbreking vóór commit laat geen zichtbaar eindpakket achter. Werkelijke procesdood laat lock/staging staan; volgende poging geeft HOLD. Er is bewust geen automatische stale-lock-verwijdering. Onderzoek owner, proces, bronhashes, logs en laatste complete receipt, archiveer de mislukte poging en geef alleen expliciet de lock vrij. Daarna dezelfde invoer opnieuw uitvoeren. Geen oude export terugplaatsen.

Commit: schrijf naar tijdelijke siblingmap, fsync bestanden/map, atomische rename, fsync parent, readback van alle resultaten. Append-only attempts.jsonl registreert iedere gelockte poging. Logfout geeft HOLD, ook als een lokaal pakket al bestond; retry hergebruikt dan het pakket na integriteitscontrole. Deze filesystemcontroles bewijzen geen gedrag op iedere netwerkschijf of na iedere stroomuitval.

Uitkomst is PREPARED of HOLD. Er is **geen RELEASED/LIVE-pad**. Een fout behoudt oudere complete pakketten; die worden niet als de nieuwe week voorgesteld. Geen leeg nummer, verzonnen rating, automatische bronvervanging of publicatie van ongecontroleerde tekst. Een playlistverhaal kan onafhankelijk als voorbereidingspakket worden gemaakt; de volledige week kan daardoor niet zonder eigen weekwaarheid slagen.

## Wat nog ontbreekt voor de werkelijke wekelijkse keten

1. Betrouwbare bereikbare aanvoer van oorspronkelijke/extra cohorts en beoordelingen, onafhankelijk van browser-localStorage. Geen iPhone-sync/FIFO als algemene weekpoort herintroduceren.
2. Redactionele bronverzameling, bronfreshness-beleid per claimtype, volledige artiestendossiers, feitelijke/foto-/linkcontrole, selectie en terugkerende rubrieken.
3. Adapter naar bestaande manifest-/handoff-contracten, stabiele Registry-identiteiten en gededupliceerd aanbieden van alleen bewezen relaties; geen parallel productieregister.
4. Authentieke beeldlaag, comfortabele schermknip, vierhoezen-kantlijnquiz met eenduidige credits en aparte onthulling. Geen Music Challenge-scores ontwerpen zonder besloten specificatie.
5. Werkelijke iMac/iPhone/iPad-QA of reeds bewezen productiestandaard. Viewportsimulatie alleen is geen echte apparaatproef.
6. Expliciete releasebevoegdheid en afzonderlijke publicatieadapter: vooraf expected-head/input-hash controleren; effect-ID vóór mutatie duurzaam registreren; bij timeout eerst readback, nooit blind nogmaals creëren; exacte URI-volgorde en doelidentiteit controleren; bewijs en ontvangstreferentie duurzaam bewaren. Pas dan RELEASED. FIFO-consumptie blijft apart en eenmaal na bewezen ontvangst.
7. Scheduler met Europe/Amsterdam-kalender (DST), begrensde retries/backoff, duurzame externe bewijsopslag en melding alleen bij betekenisvolle wijziging/fout/vereiste actie. Minimaal één echte gecontroleerde ketentest en een tweede identieke replay zonder dubbel effect. Geen zaterdaggarantie vóór dit bewijs.

De nieuwe GitHub-workflow test alleen bij PR of handmatige start; hij plant, schrijft en publiceert niets. Bestaande Pages-deploy start bij merge naar main en neemt de repository mee. Daarom blijft deze PR draft en wordt hij niet autonoom gemerged.

## Planning 30 oktober–6 november 2026 (doelen, geen toezegging van gereedheid)

| Datum | Resultaatdoel | Afhankelijkheid / bewijs |
|---|---|---|
| vr 30 okt | W44-status opnieuw lezen; bron-/rubriekenmatrix en volledige Special 102-queue uitwerken | #22 en expliciet gekozen weekwaarheid; ratings niet verzinnen |
| za 31 okt | Beoogde première beoordelen; alleen leveren na complete eigen controles en releaseopdracht | W44-publicatie/readback is open; geen automatische zaterdagwerking claimen |
| zo 1 nov | Alle vijftien Special 102-artiesten/credits onderzoeken; sterkste rode draad factchecken | primaire interviews/credits; D’Molls-jaartal en Julliet-opname/uitgave onderscheiden |
| ma 2 nov | Volledige manuscripten en 21 weekbio-dossiers afronden waar bronmatig mogelijk | exacte bevroren weekset; geen huidige selectiekandidaat als gepubliceerd portret aanduiden |
| di 3 nov | Bladritme, authentiek beeld, kantlijnquiz/onthulling en navigatie | bewijs voor echte hoezen/credits; leesbaarheid vóór paginaquotum |
| wo 4 nov | Dry-run adapter, pakket/readback, gescheiden failure-states en duurzame logs | uitsluitend lokale/sandboxroute zolang release niet expliciet toegestaan is |
| do 5 nov | Herhaling, echte onderbreking, herstel, verkeerde week/bron/playlist en device-QA | echte route/deviceproef apart van synthetische tests |
| vr 6 nov | Exact gereed/open-rapport; resterende blokkades en vervolg-PR | expliciete GO/NO-GO, geen kalenderdatum als bewijs |

## Beschermd

Alle toevoegingen zijn nieuwe Express-documenten, twee zelfstandige scripts/tests en een alleen-lezen CI-workflow. Geen bestaande runtime, ratings, manifests, Master/Depot, current/original/legacy, FIFO, reserves, journalen, Walk & Listen of Ontdek-DNA-opslag gewijzigd. Familieplan en Digitale werkplek ongemoeid. Oude registers en W44-kandidaten zijn alleen gelezen; geen afboeking/import.
