Master v3 reconciliation correction — 2026-09-25

The previously reported pre-Batch-006 counter of 30/3333 was inflated by manually re-counting identities already present in earlier checkpoints.

Duplicates that had been re-counted:
- Fates Warning
- Animals As Leaders
- Anathema
- Periphery
- Caligula's Horse
(The Pineapple Thief was reconfirmed later but was not incremented in checkpoint 008.)

Correct deduplicated union before Batch 006: 25/3333.
Batch 006 added 50 genuinely new unique artist mentions.
Therefore the correct post-Batch-006 authoritative counter is 75/3333, not 80/3333.

Earlier 24/27/29/30 checkpoint documents remain historical evidence but their counters are superseded by this correction. Future counters must be computed from a deduplicated identity set rather than manual increments.
