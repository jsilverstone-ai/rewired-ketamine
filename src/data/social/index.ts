// Registry of weekly social plans. To add a week:
//   1. write src/data/social/YYYY-MM-DD.json (see schema.ts / README.md)
//   2. add one import + one entry to WEEKS below.
// Data is only served through the authenticated /api/seo/social route,
// so it never ships in a public JS bundle.
import type { SocialWeek } from "./schema";

import week20261126 from "./2026-11-26.json";
// AUTOMATION: add new week imports above this line.

export const WEEKS: SocialWeek[] = [
  week20261126 as SocialWeek,
  // AUTOMATION: add new week entries above this line.
];
