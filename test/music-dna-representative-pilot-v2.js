// Representative Living Master v2 pilot — schema stress fixture
(function(root){"use strict";
root.musicDnaRepresentativePilotV2={
 schemaVersion:"representative-pilot-v2",
 cases:[
  {id:"rush-rich",kind:"rich-world",uses:["entity","source","claim","evidence","relation","derivedInsight","projection"],expected:"pass"},
  {id:"shiraz-compact",kind:"compact-world",uses:["entity","source","claim","evidence"],expected:"pass"},
  {id:"alice-cooper-dual-context",kind:"person-band-context",uses:["entity","externalIdentity","relation","validTime"],expected:"pass"},
  {id:"holy-ghost-credit",kind:"composite-credit",uses:["artistCredit","providerOccurrence"],expected:"pass"},
  {id:"same-name",kind:"ambiguous-identity",uses:["identityResolution"],expected:"pass"},
  {id:"lineup-history",kind:"temporal-membership",uses:["relation","validTime"],expected:"pass"},
  {id:"missing-source-field",kind:"incomplete-source",uses:["treatmentStatus","unknown"],expected:"pass"},
  {id:"reissue",kind:"release-provenance",uses:["recording","release","providerOccurrence"],expected:"pass"},
  {id:"source-conflict",kind:"conflict",uses:["claim","evidence","conflictSet"],expected:"pass"},
  {id:"voivod-evidence-debt",kind:"verified-without-evidence",uses:["claim","evidence"],expected:"blocked"}
 ],
 newSchemaFamiliesRequired:[]
};
})(typeof window!=="undefined"?window:globalThis);