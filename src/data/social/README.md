# Weekly social plans (`/seo` → "Social This Week")

The private `/seo` dashboard shows one social plan per week. Plans are plain JSON
files committed to this folder and served only through the authenticated
`/api/seo/social` route (they never ship in a public JS bundle).

## What a weekly automation must do (every Monday)

1. Write **`src/data/social/YYYY-MM-DD.json`**, where `YYYY-MM-DD` is the week's
   start date (same value as `weekOf` inside the file).
2. Register it in **`src/data/social/index.ts`**: add two lines at the markers
   ```ts
   import week20261130 from "./2026-11-30.json";      // above "AUTOMATION: add new week imports"
   week20261130 as SocialWeek,                         // above "AUTOMATION: add new week entries"
   ```
3. Run `npm run build` (type-checks the import), then commit on a branch and open a PR
   (or commit to `main` if direct commits are allowed). The newest `weekOf` is shown by
   default; older weeks stay selectable in the week dropdown.

## Schema (TypeScript source of truth: `schema.ts`)

```jsonc
{
  "weekOf": "2026-11-30",                 // required, YYYY-MM-DD, matches file name
  "theme": "One-line theme",              // optional
  "notes": "Guardrails / production notes",// optional, plain text
  "generatedAt": "2026-11-30",            // optional
  "posts": [                              // required (may be empty)
    {
      "date": "2026-11-30",               // required
      "platform": "Instagram Reels, Facebook", // required, free text
      "language": "en",                   // required: "en" | "es"
      "topic": "…",                       // required
      "linkedPage": "https://www.rewiredketamine.com/…", // required, absolute URL
      "hook": "…",                        // required
      "caption": "…full caption with #hashtags…",      // required
      "isVideo": true,                    // required
      "heygen": {                         // required when isVideo = true
        "script": "Spoken lines…",
        "outfit": "Clothing only (avatar look is fixed)",
        "setting": "Background / setting",
        "onScreenGraphics": ["0–3 sec: …", "End card: …"]
      },
      // optional extras:
      "time": "10:00 a.m. ET",
      "format": "HeyGen video",
      "whyThisWeek": "…",
      "extraLinks": [{ "label": "…", "url": "https://…" }],
      "carouselSlides": ["Slide 1 text", "…"],
      "notes": "…"
    }
  ],
  "carousels": [                          // optional: inspirational carousels
    {
      "date": "2026-12-01",
      "platform": "instagram",            // "instagram" | "linkedin"
      "language": "en",                   // "en" | "es"
      "title": "…",
      "aspect": "4:5 (1080×1350)",
      "slides": [{ "headline": "…", "body": "…" }],
      "designDirection": "Colors, type, imagery…",
      "caption": "…with #hashtags…",
      "altText": "…",
      "linkedPage": "https://www.rewiredketamine.com/…",
      // optional:
      "time": "6:00 p.m. ET",
      "tone": "Tone or audience angle"
    }
  ]
}
```

`validateSocialWeek()` in `schema.ts` checks a file at request time; any problems are
listed on the dashboard instead of breaking it.

## Content rules (YMYL / Florida)

"May help", never "cures"; no outcome stats or testimonials; no discount, "free consult"
or sale language (Fla. Stat. §456.062); include 988 on crisis/trauma topics; Spanish in
usted, natural Mexican Spanish.
