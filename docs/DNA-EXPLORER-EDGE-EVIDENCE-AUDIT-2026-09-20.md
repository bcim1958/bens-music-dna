# DNA Explorer edge audit — 2026-09-20

Rule: a door is visible only if the specific FROM -> TO edge has an explicit relation record. The renderer no longer supplies a generic fallback relation.

Corrections:
- Removed Black Sabbath -> Sweden. No specific evidence was stored for that edge.
- Added explicit Black Sabbath -> Ghost relation, supported by the already established Forge influence + Ghost-DNA context.
- Reworded ABBA orientation to avoid backwards clone language.

Important distinction:
A node being related to Sweden somewhere else in the graph does not justify a Sweden door from every node. Evidence belongs to the edge, not merely to either endpoint.

Engine v3:
- filters ordinary doors lacking an explicit edge record;
- filters surprise candidates by the same rule;
- therefore an ungrounded edge cannot become visible through either normal navigation or the surprise engine.

Audit note:
The seed graph remains a prototype. Existing edge labels express the currently accepted proof context; future enrichment should add source metadata per edge before production-scale use. W39 production is untouched.