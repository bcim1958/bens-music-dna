# Klus 2 — Master 100% migration engine v1

**Datum:** 25 september 2026  
**Status:** commissioning

## Doel
Niet meteen brondata oogsten, maar eerst bewijzen dat de productielijn restartbaar, meetbaar en foutveilig is.

## Batchcontract
Iedere batch heeft:
- immutable batchId en scope;
- geordende records met Music-DNA-ID;
- treatmentStatus + identityStatus;
- bron/claim/evidence references;
- errorRefs;
- checkpoint;
- deterministic progress summary.

Terminale behandelstatus:
`treated-verified | treated-unresolved | treated-conflict`.

Een `treated-verified` record zonder source én evidence faalt de gate.

## Foutbucket
Validatie produceert expliciete codes, o.a.:
- missing-id
- duplicate-id
- bad-status
- verified-without-evidence

Een fout wordt niet stilzwijgend overgeslagen en verlaagt niet kunstmatig de remaining-teller.

## Hervatbaarheid
Checkpoint bewaart behandeld/totaal/fouten op een benoemd punt. Records dragen het laatste checkpoint. Een volgende run kan dus vanaf batchstate hervatten in plaats van opnieuw te beginnen.

## Batch 001 — commissioning
Vijf reeds in de architectuur behandelde cases worden door de productielijn gestuurd:
Rush, Shiraz Lane, Alice Cooper-context, Holy Ghost composite credit en naamambiguïteit.

Dit is bewust **geen nieuwe AllMusic-harvest**. Het meet de machine, niet internetsnelheid of handmatige verificatiesnelheid.

## Snelheidsproef
De gate bouwt daarnaast synthetisch 3.333 records — gelijk aan de huidige artiestpopulatie — en draait validatie + voortgang 100 maal. Dat meet de overhead van onze eigen batchmachine. Externe bronverificatie blijft later de dominante en variabele factor.

## Gate naar echte Batch 002
Pas als:
1. commissioning 5/5 terminal is;
2. evidence-gate foutieve verified records blokkeert;
3. 3.333-record synthetic run structureel stabiel is;
4. checkpoints/progress deterministisch zijn;
mag de eerste echte bronverificatiebatch starten.
