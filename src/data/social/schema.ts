// Schema for the weekly "Social this week" plan shown on the private /seo dashboard.
// One JSON file per week lives next to this file: src/data/social/YYYY-MM-DD.json
// (YYYY-MM-DD = the week's start date). Register it in ./index.ts.
// See ./README.md for the contract a weekly automation should follow.

export type SocialPlatform = "instagram" | "facebook" | "tiktok" | "youtube" | "linkedin" | "x" | "google-business";

export type HeyGenVideo = {
  /** Spoken script, exactly as it should be pasted into HeyGen. */
  script: string;
  /** Avatar outfit / clothing style. */
  outfit: string;
  /** Background / setting. */
  setting: string;
  /** On-screen text, graphs, B-roll callouts, in order. */
  onScreenGraphics: string[];
};

export type SocialPost = {
  /** Planned publish date, YYYY-MM-DD. */
  date: string;
  platform: SocialPlatform | string;
  language: "en" | "es";
  topic: string;
  /** Absolute URL of the page the post points to. */
  linkedPage: string;
  /** First line / first 2 seconds. */
  hook: string;
  /** Full caption including hashtags. */
  caption: string;
  isVideo: boolean;
  /** Required when isVideo is true. */
  heygen?: HeyGenVideo;
  // ---- optional extras ----
  /** Suggested posting time, e.g. "10:00 a.m. ET". */
  time?: string;
  /** e.g. "HeyGen video", "Carousel (no video)". */
  format?: string;
  /** Why this topic fits this week (trend / new page). */
  whyThisWeek?: string;
  /** Additional pages linked in the caption. */
  extraLinks?: Array<{ label: string; url: string }>;
  /** Slide text for carousel posts. */
  carouselSlides?: string[];
  /** Production notes for this post. */
  notes?: string;
};

export type CarouselSlide = { headline: string; body: string };

/** Inspirational / educational carousel for Instagram or LinkedIn. */
export type SocialCarousel = {
  /** Planned publish date, YYYY-MM-DD. */
  date: string;
  platform: "instagram" | "linkedin";
  language: "en" | "es";
  title: string;
  /** e.g. "4:5 (1080×1350)" or "1:1 (1080×1080)". */
  aspect: string;
  slides: CarouselSlide[];
  /** Colors, type, imagery guidance for Canva. */
  designDirection: string;
  /** Full caption including hashtags. */
  caption: string;
  /** Accessibility alt text for the image set. */
  altText: string;
  /** Absolute URL the caption points to. */
  linkedPage: string;
  // ---- optional extras ----
  /** Suggested posting time, e.g. "6:00 p.m. ET". */
  time?: string;
  /** Tone or audience angle. */
  tone?: string;
};

export type SocialWeek = {
  /** Week start date, YYYY-MM-DD. Must match the file name. */
  weekOf: string;
  /** Optional one-line theme for the week. */
  theme?: string;
  /** Optional notes (trends used, compliance reminders). */
  notes?: string;
  generatedAt?: string;
  posts: SocialPost[];
  /** Optional inspirational carousels (Instagram / LinkedIn). */
  carousels?: SocialCarousel[];
};

const DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Returns a list of problems; empty means the week is valid. */
export function validateSocialWeek(week: unknown): string[] {
  const errors: string[] = [];
  const w = week as Partial<SocialWeek>;
  if (!w || typeof w !== "object") return ["not an object"];
  if (!w.weekOf || !DATE.test(w.weekOf)) errors.push("weekOf must be YYYY-MM-DD");
  if (!Array.isArray(w.posts)) return [...errors, "posts must be an array"];
  w.posts.forEach((p, i) => {
    const at = `posts[${i}]`;
    if (!p.date || !DATE.test(p.date)) errors.push(`${at}.date must be YYYY-MM-DD`);
    for (const f of ["platform", "topic", "linkedPage", "hook", "caption"] as const) {
      if (typeof p[f] !== "string" || !p[f]) errors.push(`${at}.${f} is required`);
    }
    if (p.language !== "en" && p.language !== "es") errors.push(`${at}.language must be "en" or "es"`);
    if (typeof p.isVideo !== "boolean") errors.push(`${at}.isVideo must be true/false`);
    if (p.isVideo) {
      const h = p.heygen;
      if (!h) errors.push(`${at}.heygen is required when isVideo is true`);
      else {
        for (const f of ["script", "outfit", "setting"] as const) {
          if (typeof h[f] !== "string" || !h[f]) errors.push(`${at}.heygen.${f} is required`);
        }
        if (!Array.isArray(h.onScreenGraphics)) errors.push(`${at}.heygen.onScreenGraphics must be an array of strings`);
      }
    }
  });
  if (w.carousels !== undefined) {
    if (!Array.isArray(w.carousels)) errors.push("carousels must be an array");
    else
      w.carousels.forEach((c, i) => {
        const at = `carousels[${i}]`;
        if (!c.date || !DATE.test(c.date)) errors.push(`${at}.date must be YYYY-MM-DD`);
        if (c.platform !== "instagram" && c.platform !== "linkedin") errors.push(`${at}.platform must be "instagram" or "linkedin"`);
        if (c.language !== "en" && c.language !== "es") errors.push(`${at}.language must be "en" or "es"`);
        for (const f of ["title", "aspect", "designDirection", "caption", "altText", "linkedPage"] as const) {
          if (typeof c[f] !== "string" || !c[f]) errors.push(`${at}.${f} is required`);
        }
        if (!Array.isArray(c.slides) || c.slides.length === 0) errors.push(`${at}.slides must be a non-empty array`);
        else
          c.slides.forEach((sl, j) => {
            if (typeof sl.headline !== "string") errors.push(`${at}.slides[${j}].headline is required`);
            if (typeof sl.body !== "string") errors.push(`${at}.slides[${j}].body must be a string (may be empty)`);
          });
      });
  }
  return errors;
}
