/* Adds day 2 without replacing the day-1 catalog or plan. */
(function(){
  var c=window.MUSIC_DNA_W42_CANDIDATES;
  if(!c||!c.day1)throw Error("W42 day-1 catalog missing");
  Object.assign(c.tracks,{
  "pilot-7ef1yxmLkmfnLBSzlgAiUj": {
    "identity": {
      "artist": "Chinese American Bear",
      "title": "Love You (爱你)",
      "albumOrRelease": "Wah!!!",
      "releaseYear": 2024
    },
    "spotifyUrl": "https://open.spotify.com/track/7ef1yxmLkmfnLBSzlgAiUj",
    "taxonomy": {
      "allMusicStyles": [
        "Indie Pop"
      ],
      "classificationStatus": "editorial-primary-publisher-mapping"
    },
    "discoveryEvidence": {
      "identityVerified": true,
      "styleMappingVerified": true,
      "recording": "original-studio",
      "sources": [
        "https://open.spotify.com/track/7ef1yxmLkmfnLBSzlgAiUj",
        "https://chineseamericanbear.bandcamp.com/album/wah"
      ],
      "spotify": {
        "playable": true,
        "checkedAt": "2026-10-12T08:20:25.298085+00:00",
        "scope": "Public embed; NL account availability unverified"
      },
      "recordingReview": {
        "spotifyArtistUris": [
          "spotify:artist:6WIb9mpc6lyBzAjTeGWvEh"
        ],
        "durationMs": 237877,
        "spotifyPackageYear": 2024,
        "scope": "Exact track and artist URI from Spotify embed, title/release corroborated by publisher; studio version inferred, no audio fingerprint claim."
      }
    },
    "editorial": {
      "whyForYou": "Een melodische ontdekking met speelse popkleuren voor jouw indiepad."
    }
  },
  "pilot-125m8ZbcZOYBukLKEj8qF7": {
    "identity": {
      "artist": "Friedberg",
      "title": "I Sometimes Do (But Mostly Might)",
      "albumOrRelease": "Hardcore Workout Queen",
      "releaseYear": 2024
    },
    "spotifyUrl": "https://open.spotify.com/track/125m8ZbcZOYBukLKEj8qF7",
    "taxonomy": {
      "allMusicStyles": [
        "Post-Punk"
      ],
      "classificationStatus": "editorial-primary-publisher-mapping"
    },
    "discoveryEvidence": {
      "identityVerified": true,
      "styleMappingVerified": true,
      "recording": "original-studio",
      "sources": [
        "https://open.spotify.com/track/125m8ZbcZOYBukLKEj8qF7",
        "https://friedberg.bandcamp.com/track/i-sometimes-do-but-mostly-might"
      ],
      "spotify": {
        "playable": true,
        "checkedAt": "2026-10-12T08:20:25.298457+00:00",
        "scope": "Public embed; NL account availability unverified"
      },
      "recordingReview": {
        "spotifyArtistUris": [
          "spotify:artist:0lqPfG8vAR30UX3cWDbCEn"
        ],
        "durationMs": 187368,
        "spotifyPackageYear": 2024,
        "scope": "Exact track and artist URI from Spotify embed, title/release corroborated by publisher; studio version inferred, no audio fingerprint claim."
      }
    },
    "editorial": {
      "whyForYou": "Een ritmische ontdekking op het snijvlak van postpunk en alternative rock."
    }
  },
  "pilot-1nyW51X8LGzUD3Vaq34SsK": {
    "identity": {
      "artist": "Kingcrow",
      "title": "Night Drive",
      "albumOrRelease": "Hopium",
      "releaseYear": 2024
    },
    "spotifyUrl": "https://open.spotify.com/track/1nyW51X8LGzUD3Vaq34SsK",
    "taxonomy": {
      "allMusicStyles": [
        "Progressive Rock"
      ],
      "classificationStatus": "editorial-primary-publisher-mapping"
    },
    "discoveryEvidence": {
      "identityVerified": true,
      "styleMappingVerified": true,
      "recording": "original-studio",
      "sources": [
        "https://open.spotify.com/track/1nyW51X8LGzUD3Vaq34SsK",
        "https://www.season-of-mist.com/news/kingcrow-2024-08-23/"
      ],
      "spotify": {
        "playable": true,
        "checkedAt": "2026-10-12T08:20:25.298619+00:00",
        "scope": "Public embed; NL account availability unverified"
      },
      "recordingReview": {
        "spotifyArtistUris": [
          "spotify:artist:3nnSgQo8TIgiO5M5pv3mlV"
        ],
        "durationMs": 348280,
        "spotifyPackageYear": 2024,
        "scope": "Exact track and artist URI from Spotify embed, title/release corroborated by publisher; studio version inferred, no audio fingerprint claim."
      }
    },
    "editorial": {
      "whyForYou": "Een sfeervolle ontdekking die aansluit op jouw belangstelling voor progressive rock."
    }
  }
});
  c.day2={"official": ["pilot-7ef1yxmLkmfnLBSzlgAiUj", "pilot-125m8ZbcZOYBukLKEj8qF7", "pilot-1nyW51X8LGzUD3Vaq34SsK"], "reserve": []};
  c.preparedDays=2;
})();
