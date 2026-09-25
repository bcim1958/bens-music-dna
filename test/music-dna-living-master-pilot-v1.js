// Music DNA Living Master — pilot records v1
// 25 September 2026
// Purpose: prove that rich and compact artist worlds fit one schema.
// This is a pilot fixture, not a bulk-harvest output.
(function (root) {
  "use strict";

  const pilot = {
    schemaVersion: "living-master-pilot-v1",
    generatedAt: "2026-09-25",
    invariants: {
      identityKey: "musicDnaId",
      namesAreNotKeys: true,
      sourceClaimEvidenceSeparated: true,
      treatmentCompleteDoesNotMeanFullyFilled: true,
      unknownIsNotSparse: true,
      derivedInsightsAreNotSourceFacts: true
    },

    entities: {
      "mdna:artist:rush": {
        musicDnaId: "mdna:artist:rush",
        entityType: "group",
        canonicalName: "Rush",
        aliases: [],
        status: "historical",
        identityResolution: "exact",
        externalIds: {
          spotifyArtistId: "2Hkut4rAAyrQxRdof7FVJq",
          allMusicArtistId: "mn0000203008",
          musicBrainzArtistId: null,
          discogsArtistId: null,
          metalArchivesId: null,
          setlistFmArtistId: null,
          whoSampledId: null
        },
        treatmentStatus: "verification-in-progress",
        researchCoverage: "developing",
        informationRichness: "rich",
        notes: ["MusicBrainz and specialist IDs deliberately remain null until directly verified."]
      },
      "mdna:artist:shiraz-lane": {
        musicDnaId: "mdna:artist:shiraz-lane",
        entityType: "group",
        canonicalName: "Shiraz Lane",
        aliases: [],
        status: "active",
        identityResolution: "exact",
        externalIds: {
          spotifyArtistId: null,
          allMusicArtistId: "mn0003489923",
          musicBrainzArtistId: null,
          discogsArtistId: null,
          metalArchivesId: null,
          setlistFmArtistId: null,
          whoSampledId: null
        },
        treatmentStatus: "verification-in-progress",
        researchCoverage: "developing",
        informationRichness: "moderate",
        notes: ["Unverified provider IDs remain null; no name-based guessing."]
      },
      "mdna:place:toronto-on-ca": {musicDnaId:"mdna:place:toronto-on-ca",entityType:"place",canonicalName:"Toronto, Ontario, Canada"},
      "mdna:place:vantaa-fi": {musicDnaId:"mdna:place:vantaa-fi",entityType:"place",canonicalName:"Vantaa, Finland"},
      "mdna:person:geddy-lee": {musicDnaId:"mdna:person:geddy-lee",entityType:"person",canonicalName:"Geddy Lee",externalIds:{allMusicArtistId:"mn0000153933"}},
      "mdna:person:neil-peart": {musicDnaId:"mdna:person:neil-peart",entityType:"person",canonicalName:"Neil Peart",externalIds:{allMusicArtistId:"mn0000865678"}},
      "mdna:person:alex-lifeson": {musicDnaId:"mdna:person:alex-lifeson",entityType:"person",canonicalName:"Alex Lifeson",externalIds:{allMusicArtistId:"mn0000618446"}},
      "mdna:person:john-rutsey": {musicDnaId:"mdna:person:john-rutsey",entityType:"person",canonicalName:"John Rutsey"},
      "mdna:genre:pop-rock": {musicDnaId:"mdna:genre:pop-rock",entityType:"genre-style",canonicalName:"Pop/Rock"},
      "mdna:style:album-rock": {musicDnaId:"mdna:style:album-rock",entityType:"genre-style",canonicalName:"Album Rock"},
      "mdna:style:hard-rock": {musicDnaId:"mdna:style:hard-rock",entityType:"genre-style",canonicalName:"Hard Rock"},
      "mdna:style:prog-rock": {musicDnaId:"mdna:style:prog-rock",entityType:"genre-style",canonicalName:"Prog-Rock"},
      "mdna:style:arena-rock": {musicDnaId:"mdna:style:arena-rock",entityType:"genre-style",canonicalName:"Arena Rock"},
      "mdna:style:heavy-metal": {musicDnaId:"mdna:style:heavy-metal",entityType:"genre-style",canonicalName:"Heavy Metal"}
    },

    sources: {
      "src:allmusic:rush": {
        sourceId:"src:allmusic:rush", provider:"AllMusic", sourceType:"editorial-database",
        title:"Rush — AllMusic artist profile", canonicalLocator:"allmusic:artist:mn0000203008",
        retrievedAt:"2026-09-25", sourceStatus:"available"
      },
      "src:allmusic:shiraz-lane": {
        sourceId:"src:allmusic:shiraz-lane", provider:"AllMusic", sourceType:"editorial-database",
        title:"Shiraz Lane — AllMusic artist profile", canonicalLocator:"allmusic:artist:mn0003489923",
        retrievedAt:"2026-09-25", sourceStatus:"available"
      }
    },

    claims: [
      {claimId:"cl:rush:formed-year",subjectId:"mdna:artist:rush",predicate:"formed-year",value:1968,assertionStatus:"verified",currentness:"historical"},
      {claimId:"cl:rush:formed-place",subjectId:"mdna:artist:rush",predicate:"formed-in",objectId:"mdna:place:toronto-on-ca",assertionStatus:"verified",currentness:"historical"},
      {claimId:"cl:rush:genre:pop-rock",subjectId:"mdna:artist:rush",predicate:"allmusic-genre",objectId:"mdna:genre:pop-rock",assertionStatus:"verified",currentness:"current"},
      {claimId:"cl:rush:style:album-rock",subjectId:"mdna:artist:rush",predicate:"allmusic-style",objectId:"mdna:style:album-rock",assertionStatus:"verified",currentness:"current"},
      {claimId:"cl:rush:style:hard-rock",subjectId:"mdna:artist:rush",predicate:"allmusic-style",objectId:"mdna:style:hard-rock",assertionStatus:"verified",currentness:"current"},
      {claimId:"cl:rush:style:prog-rock",subjectId:"mdna:artist:rush",predicate:"allmusic-style",objectId:"mdna:style:prog-rock",assertionStatus:"verified",currentness:"current"},
      {claimId:"cl:rush:style:arena-rock",subjectId:"mdna:artist:rush",predicate:"allmusic-style",objectId:"mdna:style:arena-rock",assertionStatus:"verified",currentness:"current"},
      ...["geddy-lee","neil-peart","alex-lifeson","john-rutsey"].map(x=>({claimId:"cl:rush:member:"+x,subjectId:"mdna:artist:rush",predicate:"allmusic-group-member",objectId:"mdna:person:"+x,assertionStatus:"verified",currentness:"historical"})),

      {claimId:"cl:shiraz:formed-year",subjectId:"mdna:artist:shiraz-lane",predicate:"formed-year",value:2011,assertionStatus:"verified",currentness:"historical"},
      {claimId:"cl:shiraz:formed-place",subjectId:"mdna:artist:shiraz-lane",predicate:"formed-in",objectId:"mdna:place:vantaa-fi",assertionStatus:"verified",currentness:"historical"},
      {claimId:"cl:shiraz:genre:pop-rock",subjectId:"mdna:artist:shiraz-lane",predicate:"allmusic-genre",objectId:"mdna:genre:pop-rock",assertionStatus:"verified",currentness:"current"},
      {claimId:"cl:shiraz:style:hard-rock",subjectId:"mdna:artist:shiraz-lane",predicate:"allmusic-style",objectId:"mdna:style:hard-rock",assertionStatus:"verified",currentness:"current"},
      {claimId:"cl:shiraz:style:heavy-metal",subjectId:"mdna:artist:shiraz-lane",predicate:"allmusic-style",objectId:"mdna:style:heavy-metal",assertionStatus:"verified",currentness:"current"}
    ],

    evidence: [],

    relations: [],

    derivedInsights: [
      {
        insightId:"insight:rush:allmusic-classification-breadth",
        subjectId:"mdna:artist:rush", metricType:"verified-allmusic-style-count",
        value:4, unit:"styles", calculationVersion:"v1",
        inputClaimIds:["cl:rush:style:album-rock","cl:rush:style:hard-rock","cl:rush:style:prog-rock","cl:rush:style:arena-rock"],
        comparisonPopulation:null, coverage:"complete-for-observed-AllMusic-style-field",
        confidence:"high", asOf:"2026-09-25"
      },
      {
        insightId:"insight:shiraz:allmusic-classification-breadth",
        subjectId:"mdna:artist:shiraz-lane", metricType:"verified-allmusic-style-count",
        value:2, unit:"styles", calculationVersion:"v1",
        inputClaimIds:["cl:shiraz:style:hard-rock","cl:shiraz:style:heavy-metal"],
        comparisonPopulation:null, coverage:"complete-for-observed-AllMusic-style-field",
        confidence:"high", asOf:"2026-09-25"
      }
    ]
  };

  const evidenceFor = (claimId, sourceId, sourcePath, observedValue) => ({
    evidenceId:"ev:"+claimId.replace(/^cl:/,""),
    claimId, sourceId, evidenceRole:"supports", sourcePath, observedValue,
    checkedAt:"2026-09-25", verificationMethod:"direct", confidence:"high"
  });

  pilot.evidence.push(
    evidenceFor("cl:rush:formed-year","src:allmusic:rush","artist profile / Formed","1968"),
    evidenceFor("cl:rush:formed-place","src:allmusic:rush","artist profile / Formed","Toronto, Ontario, Canada"),
    evidenceFor("cl:rush:genre:pop-rock","src:allmusic:rush","artist profile / Genre","Pop/Rock"),
    evidenceFor("cl:rush:style:album-rock","src:allmusic:rush","artist profile / Styles","Album Rock"),
    evidenceFor("cl:rush:style:hard-rock","src:allmusic:rush","artist profile / Styles","Hard Rock"),
    evidenceFor("cl:rush:style:prog-rock","src:allmusic:rush","artist profile / Styles","Prog-Rock"),
    evidenceFor("cl:rush:style:arena-rock","src:allmusic:rush","artist profile / Styles","Arena Rock"),
    evidenceFor("cl:rush:member:geddy-lee","src:allmusic:rush","artist profile / Group Members","Geddy Lee"),
    evidenceFor("cl:rush:member:neil-peart","src:allmusic:rush","artist profile / Group Members","Neil Peart"),
    evidenceFor("cl:rush:member:alex-lifeson","src:allmusic:rush","artist profile / Group Members","Alex Lifeson"),
    evidenceFor("cl:rush:member:john-rutsey","src:allmusic:rush","artist profile / Group Members","John Rutsey"),
    evidenceFor("cl:shiraz:formed-year","src:allmusic:shiraz-lane","artist profile / Formed","2011"),
    evidenceFor("cl:shiraz:formed-place","src:allmusic:shiraz-lane","artist profile / Formed","Vantaa, Finland"),
    evidenceFor("cl:shiraz:genre:pop-rock","src:allmusic:shiraz-lane","artist profile / Genre","Pop/Rock"),
    evidenceFor("cl:shiraz:style:hard-rock","src:allmusic:shiraz-lane","artist profile / Styles","Hard Rock"),
    evidenceFor("cl:shiraz:style:heavy-metal","src:allmusic:shiraz-lane","artist profile / Styles","Heavy Metal")
  );

  for (const claim of pilot.claims) {
    if (claim.objectId && ["allmusic-group-member"].includes(claim.predicate)) {
      pilot.relations.push({
        relationId:"rel:"+claim.claimId.replace(/^cl:/,""),
        fromId:claim.subjectId, toId:claim.objectId,
        relationFamily:"membership", relationType:"group-member",
        direction:"out", claimIds:[claim.claimId], status:"verified"
      });
    }
  }

  root.musicDnaLivingMasterPilotV1 = pilot;
})(typeof window !== "undefined" ? window : globalThis);
