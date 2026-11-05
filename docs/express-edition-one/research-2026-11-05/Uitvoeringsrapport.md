# 5 november — één leesroute voor het bestaande redactiewerk

Nieuwe [samengestelde leesproef v3](Redactieproef-v3.html): 17 navigeerbare secties. Cover, zes Special 102-verhaalbladen, Mijn Week, zeven portretbladen met elk drie W44-artiesten, de vijftien Special 102-luisterlinks en de oorspronkelijke vijftien verhaalbronnen. Per weekportret zijn de eigen bronlink en open redactionele controle direct bereikbaar. Vanuit Mijn Week gaat een knop naar de portretten; elk portretblad kan terug naar Mijn Week. Dit zijn leesbladen met scrollruimte, geen 17 drukpagina's of afgedwongen 48p-editie.

## Bewezen

Live main 63ff7d89d8e5d7bb3789cef718f89571a0adbcd9; #18 open/draft/conflicterend op 7bae6b7; #22 open/draft op 5efb2258; #23 open/draft op da9c0ce vóór deze toevoeging. Geen onverwachte wijzigingen op de Express-branch. Beide PR-workflows van da9c0ce zijn voltooid met success: Express preparation safety 41883724591, Weekly Music DNA regressions 41883724731.

Nieuwe builder gebruikt de bestaande v2-storybuilder en de bevroren portretconcepten van 2 november. De portretvolgorde moet exact passen bij de brongebonden 21-artiestenqueue; alle reviews moeten leeg en publishable=false blijven. Geen nieuwe feiten, ratings, claims of goedkeuringen gegenereerd. V1, v2, manuscripten, losse weekportretten, inputs en oude broncutoffs blijven bytegelijk bewaard.

Lokale Chrome-controle op 390, 820 en 1440 px: alle 17 secties bereikbaar, alle 23 verhaalalinea's exact behouden, alle 21 portretteksten/artist-ID's/bronlinks/tracktitels/ratings exact behouden. Alle 21 open controleblokken aanwezig; hoofdstukknop, volgend blad en terug naar Mijn Week werken. Geen JavaScript-fouten of horizontale overflow. Rebuild produceert exacte HTMLbytes. Zie [machineleesbaar bewijs](browser-v3.json). Desktopportretblad visueel bekeken. Dit is synthetische viewport-QA op desktop Chrome; geen echte apparaat-/account-/publicatieproef en geen redactionele goedkeuring.

De nieuwe browsertest draait ook in de bestaande alleen-lezen PR-workflow. Geen scheduler, netwerkmutatie, publicatie of deployment toegevoegd. De nieuwe commit krijgt eigen CI; eerdere success geldt uitsluitend voor da9c0ce.

## Voorstel en afhankelijkheden

V3 is een samengevoegde redactieproef. Het maakt bestaande inhoud makkelijker te beoordelen, maar maakt de korte portretten niet vollediger en heft hun bronbeperkingen niet op. Special 102-credits, primaire bronheropening, authentiek beeld, quiz/onthulling, overige vaste rubrieken en DNA Smaakportretten-broncontrole blijven open. Geen privacygevoelig bronmateriaal opgenomen. Leesproef is niet als nieuwe goedgekeurde input ingevoerd; input-r2 blijft HOLD wegens ontbrekende reviews en verdere poorten.

Onbemande wekelijkse keten, echte apparaat-QA en externe publicatieadapter blijven onbewezen. W44-publicatiebewijs blijft het afzonderlijke receipt/readback van de eerdere ronde; vandaag geen Spotify-readback of mutatie. Beschermde data en overige projecten ongemoeid. Eindrapport en beëindiging van dit tijdelijke vervolg blijven voorzien op 6 november.
