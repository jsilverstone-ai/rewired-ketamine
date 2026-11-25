import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

type Redirect = { source: string; destination: string; permanent: true };

// Old WordPress URLs -> closest page on the new site.
// Each entry is added with and without a trailing slash, so an old link
// such as /our-team/ takes one 308 hop straight to its final page.
const OLD_URLS: Array<[string, string]> = [
  // Merged duplicate blog posts (weaker post -> stronger post on the same topic)
  ["/content/blog/migraine-and-mental-health-is-there-a-connection", "/content/blog/migraine-and-mental-health-connection"],
  ["/content/blog/what-is-ketamine-assisted-therapy-and-how-does-it-work", "/content/blog/what-is-ketamine-assisted-therapy"],
  ["/content/blog/what-does-ketamine-therapy-feel-like-a-guide-for-first-timers", "/content/blog/what-does-ketamine-therapy-feel-like"],
  ["/content/blog/how-many-ketamine-sessions-are-needed-for-depression-relief", "/content/blog/how-many-ketamine-sessions-do-most-people-need"],
  ["/content/blog/why-is-ketamine-used-for-treatment-resistant-depression", "/content/blog/ketamine-for-treatment-resistant-depression"],
  ["/content/blog/ketamine-infusion-therapy-for-migraines-is-it-effective", "/content/blog/ketamine-for-migraines-and-chronic-headaches"],
  ["/content/blog/is-ketamine-infusion-a-new-option-for-migraine-treatment", "/content/blog/ketamine-for-migraines-and-chronic-headaches"],
  ["/content/blog/can-ketamine-therapy-help-anxiety-disorders", "/content/blog/ketamine-therapy-for-anxiety"],
  ["/content/blog/what-happens-during-your-first-visit-to-a-ketamine-clinic", "/content/blog/what-to-expect-during-your-first-ketamine-session"],
  ["/content/blog/what-makes-ketamine-different-from-other-depression-treatments", "/content/blog/how-ketamine-therapy-differs-from-traditional-antidepressants"],
  // Restored posts
  ["/repressed-memories-and-relief-from-ketamine", "/content/blog/repressed-memories-and-ketamine"],
  ["/first-responders-and-veterans-in-florida-a-specialized-guide-to-ketamine-treatment-for-ptsd", "/content/blog/ketamine-ptsd-first-responders-veterans-florida"],
  ["/florida-first-responders-deserve-better-ptsd-treatment-heres-how-rewired-ketamine-is-delivering-it", "/content/blog/ketamine-ptsd-first-responders-veterans-florida"],
  ["/does-ketamine-lower-blood-pressure-rewired-ketamines-expert-guide-to-cardiovascular-effects-and-safety", "/content/blog/does-ketamine-lower-blood-pressure"],
  ["/the-florida-caregivers-guide-supporting-loved-ones-through-at-home-ketamine-treatment", "/content/blog/caregivers-guide-at-home-ketamine-florida"],
  ["/ritual-to-relief-ketamine-infusion-therapy-for-religious-scrupulosity-ocd-in-floridas-diverse-faith-communities", "/content/blog/ketamine-religious-scrupulosity-ocd"],
  // Team, contact, site pages
  ["/our-team", "/providers"],
  ["/our-providers", "/providers"],
  ["/our-advisory-board", "/providers"],
  ["/how-to-choose-a-safe-and-effective-ketamine-treatment-provider", "/providers"],
  ["/free-consultation", "/#contact"],
  ["/contact-us", "/#contact"],
  ["/contact", "/#contact"],
  ["/locations", "/location"],
  ["/blog", "/content/blog"],
  ["/our-videos", "/content/videos"],
  ["/the-experience", "/content/blog/what-to-expect-during-your-first-ketamine-session"],
  ["/what-to-expect-during-your-first-ketamine-treatment-session", "/content/blog/what-to-expect-during-your-first-ketamine-session"],
  ["/privacy-policy", "/faq"],
  ["/terms-and-conditions", "/faq"],
  // City and location pages
  ["/north-miami-beach", "/location"],
  ["/keystone-islands", "/location"],
  ["/hollywood-beach", "/location"],
  ["/surfside", "/location"],
  ["/fisher-island", "/location"],
  ["/hallandale-beach", "/location"],
  ["/ketamine-therapy-fort-lauderdale", "/location"],
  ["/ketamine-clinic-florida", "/location"],
  ["/florida-ketamine-clinic", "/location"],
  // Old /conditions pages
  ["/conditions", "/treatments"],
  ["/conditions/anxiety-treatment", "/treatments/anxiety"],
  ["/conditions/phobias", "/treatments/anxiety"],
  ["/conditions/ptsd-treatment", "/treatments/ptsd"],
  ["/conditions/ketamine-for-ocd", "/treatments/ocd"],
  ["/conditions/postpartum-depression", "/treatments/postpartum-depression"],
  ["/conditions/chronic-pain-management", "/treatments/chronic-pain"],
  ["/conditions/migraine-headaches", "/content/blog/ketamine-for-migraines-and-chronic-headaches"],
  ["/conditions/suicidal-ideation", "/treatments/depression"],
  ["/conditions/ketamine-treatment-for-depression", "/treatments/depression"],
  // Services
  ["/ketamine-infusions", "/services/ketamine-infusion"],
  ["/ketamine-therapy-florida", "/services/ketamine-infusion"],
  ["/ketamine-therapy-florida-experience-premium-mental-health-treatment-at-rewired-ketamine", "/services/ketamine-infusion"],
  ["/the-luxury-difference-how-rewired-ketamines-premium-infusion-therapy-changes-the-florida-treatment-experience", "/services/ketamine-infusion"],
  ["/a-complete-guide-to-ketamine-infusion-therapy-in-florida-what-you-need-to-know", "/services/ketamine-infusion"],
  ["/can-you-overdose-on-ketamine-understanding-safety-protocols-at-rewired-ketamines-medically-supervised-florida-clinic", "/services/ketamine-infusion"],
  ["/iv-ketamine-therapy-near-me", "/content/blog/ketamine-infusion-near-me-aventura-north-miami"],
  ["/tag/nushama-ketamine", "/services/ketamine-infusion"],
  ["/tag/ketamine-miami", "/content/blog/ketamine-clinic-miami-vs-aventura"],
  // At-home ketamine
  ["/at-home-ketamine-treatment-in-florida", "/services/home-ketamine"],
  ["/the-rise-of-at-home-ketamine-treatment-in-florida-what-patients-need-to-know", "/services/home-ketamine"],
  ["/at-home-alcoholism", "/services/home-ketamine"],
  ["/recovery-within-reach-the-promise-and-practice-of-at-home-ketamine-treatment-in-florida-for-drug-addiction", "/services/home-ketamine"],
  ["/home-healing-the-emerging-potential-of-at-home-ketamine-treatment-in-florida-for-alcoholism-recovery", "/services/home-ketamine"],
  ["/healing-horizons-exploring-the-benefits-of-ketamine-treatment-in-floridas-alcoholism-recovery", "/services/home-ketamine"],
  ["/breaking-barriers-at-home-ketamine-treatment-in-florida-as-an-innovative-path-for-cocaine-addiction-recovery", "/services/home-ketamine"],
  ["/ketamine-injections-near-me", "/services/home-ketamine"],
  ["/ketamine-injections-near-me-expert-medical-administration-at-south-floridas-premier-clinic", "/services/home-ketamine"],
  // Addiction and behavior posts
  ["/rewiring-recovery-how-ketamine-infusion-therapy-in-florida-is-changing-the-landscape-of-drug-addiction-treatment", "/services/ketamine-infusion"],
  ["/ketamine-addiction-treatment-in-florida-rewired-ketamines-comprehensive-approach-to-breaking-the-cycle-of-substance-dependency", "/services/ketamine-infusion"],
  ["/ketamine-for-addictive-behavioral-disorders", "/services/ketamine-infusion"],
  ["/from-dependence-to-freedom-how-ketamine-infusion-therapy-in-florida-is-revolutionizing-cocaine-addiction-recovery", "/services/ketamine-infusion"],
  ["/breaking-behavioral-patterns-ketamine-therapys-role-in-rewiring-addictive-behaviors", "/services/ketamine-infusion"],
  ["/reclaiming-life-the-transformative-benefits-of-ketamine-treatment-in-floridas-approach-to-drug-addiction-recovery", "/services/ketamine-infusion"],
  // Depression and mood
  ["/content/blog/what-is-ketamine-treatment-for-depression", "/treatments/depression"],
  ["/ketamine-treatment-for-depression-near-me", "/treatments/depression"],
  ["/breakthrough-ketamine-treatment-for-depression-florida-fast-effective-relief", "/treatments/depression"],
  ["/why-ketamine-is-a-breakthrough-in-depression-treatment", "/treatments/depression"],
  ["/can-ketamine-therapy-improve-sleep-and-mood", "/treatments/depression"],
  ["/when-to-consider-ketamine-therapy-for-suicidal-ideation", "/treatments/depression"],
  ["/the-role-of-ketamine-infusion-therapy-in-suicide-prevention", "/treatments/depression"],
  ["/how-ketamine-therapy-can-improve-mood-and-emotional-stability", "/treatments/depression"],
  ["/how-ketamine-helps-people-struggling-with-depression-and-anxiety", "/treatments/depression"],
  ["/how-ketamine-therapy-is-helping-people-reconnect-with-joy", "/treatments/depression"],
  ["/beyond-the-binary-ketamine-infusion-therapy-for-cyclothymia-and-subthreshold-mood-disorders", "/treatments/depression"],
  ["/how-does-ketamine-therapy-work-for-depression", "/content/blog/how-does-ketamine-therapy-work"],
  ["/why-more-people-are-turning-to-ketamine-instead-of-antidepressants", "/content/blog/how-ketamine-therapy-differs-from-traditional-antidepressants"],
  ["/how-ketamine-therapy-improves-mood-and-cognitive-function", "/treatments/mental-fogginess"],
  ["/corporate-wellness-partnerships-aventuras-innovative-approach-to-executive-suicidal-ideation-through-ketamine-therapy", "/treatments/burnout"],
  ["/why-more-professionals-are-talking-about-ketamine-therapy", "/treatments/burnout"],
  // Anxiety
  ["/finding-ketamine-treatment-for-anxiety-near-fort-lauderdale-a-locals-guide", "/content/blog/ketamine-for-anxiety-miami-aventura"],
  ["/the-commuters-guide-accessing-rewired-ketamines-premium-anxiety-treatment-from-fort-lauderdale", "/content/blog/ketamine-for-anxiety-miami-aventura"],
  ["/can-ketamine-therapy-help-anxiety-disorders", "/content/blog/ketamine-therapy-for-anxiety"],
  // PTSD
  ["/ptsd-guide", "/treatments/ptsd"],
  ["/how-to-choose-the-right-provider-of-ketamine-therapy-for-ptsd", "/treatments/ptsd"],
  ["/is-ketamine-therapy-safe-for-ptsd-patients", "/treatments/ptsd"],
  ["/common-myths-about-ketamine-therapy-for-ptsd", "/content/blog/common-myths-about-ketamine-therapy-for-ptsd"],
  ["/top-benefits-of-ketamine-treatment-for-ptsd-patients", "/content/blog/top-benefits-of-ketamine-treatment-for-ptsd-patients"],
  ["/ketamine-therapy-for-ptsd-serving-miami-florida-myths-vs-reality", "/treatments/ptsd"],
  ["/ketamine-therapy-for-ptsd-serving-miami-florida", "/treatments/ptsd"],
  ["/ketamine-therapy-for-ptsd-in-florida-a-new-frontier-in-healing", "/treatments/ptsd"],
  ["/a-guide-on-how-does-ketamine-for-ptsd-florida-treatment-work", "/content/blog/can-ketamine-therapy-help-with-ptsd"],
  // OCD
  ["/ocd-florida", "/treatments/ocd"],
  ["/ketamine-for-ocd-florida-shows-promising-results-in-treating-obsessive-compulsive-disorder", "/treatments/ocd"],
  ["/fast-acting-ketamine-infusion-therapy-for-ocd-in-florida-a-revolutionary-treatment-for-lasting-relief", "/treatments/ocd"],
  ["/how-ketamine-infusion-therapy-revolutionizes-ocd-treatment-in-florida", "/treatments/ocd"],
  // Pain and migraine
  ["/migraine", "/content/blog/ketamine-for-migraines-and-chronic-headaches"],
  ["/ketamine-for-migraines-headache-in-florida-a-breakthrough-treatment-for-lasting-relief", "/content/blog/ketamine-for-migraines-and-chronic-headaches"],
  ["/seasonal-migraine-management-timing-ketamine-treatment-cycles-with-floridas-weather-patterns", "/content/blog/ketamine-for-migraines-and-chronic-headaches"],
  ["/floridas-weather-and-migraines-optimizing-ketamine-treatment-around-environmental-triggers", "/content/blog/ketamine-for-migraines-and-chronic-headaches"],
  ["/role-of-ketamine-treatment-for-chronic-pain-in-fort-lauderdale", "/treatments/chronic-pain"],
  ["/ketamine-treatment-for-chronic-pain-in-fort-lauderdale-a-breakthrough-solution-for-lasting-relief", "/treatments/chronic-pain"],
  ["/ketamine-treatment-for-chronic-pain-in-fort-lauderdale-relief-without-addiction", "/treatments/chronic-pain"],
  // Postpartum
  ["/new-mom-new-hope-ketamine-for-postpartum-depression-in-south-florida", "/treatments/postpartum-depression"],
  // General ketamine education
  ["/what-is-ketamine", "/content/blog/what-is-ketamine-prescribed-for"],
  ["/what-is-ketamine-prescribed-for-rewired-ketamines-expert-guide-to-therapeutic-applications", "/content/blog/what-is-ketamine-prescribed-for"],
  ["/what-is-ketamine-treatment-rewired-ketamines-complete-guide-to-revolutionary-mental-health-therapy", "/content/blog/how-does-ketamine-therapy-work"],
  ["/a-simple-guide-to-ketamine-treatment-for-mental-health", "/content/blog/how-does-ketamine-therapy-work"],
  ["/the-role-of-ketamine-in-modern-mental-health-treatment", "/content/blog/how-does-ketamine-therapy-work"],
  ["/the-remarkable-benefits-of-ketamine-treatment-florida-to-brain-health", "/content/blog/how-does-ketamine-therapy-work"],
  ["/what-is-ketamine-assisted-therapy-and-how-does-it-work", "/content/blog/what-is-ketamine-assisted-therapy"],
  ["/ketamine-assisted-therapy-rewired-ketamines-integrated-approach-to-breakthrough-mental-health-treatment", "/content/blog/what-is-ketamine-assisted-therapy"],
  ["/how-ketamine-therapy-differs-from-traditional-psychotherapy", "/content/blog/what-makes-ketamine-therapy-different-from-traditional-talk-therapy"],
  ["/what-makes-ketamine-therapy-different-from-traditional-talk-therapy", "/content/blog/what-makes-ketamine-therapy-different-from-traditional-talk-therapy"],
  ["/how-to-prepare-mentally-and-physically-for-ketamine-therapy", "/content/blog/how-to-prepare-mentally-and-physically-for-ketamine-therapy"],
  ["/does-ketamine-therapy-get-you-high-rewired-ketamines-professional-approach-to-therapeutic-effects", "/content/blog/what-does-ketamine-therapy-feel-like"],
  ["/what-does-ketamine-therapy-feel-like-a-patients-journey-through-rewired-ketamines-luxury-treatment-experience-in-south-florida", "/content/blog/what-does-ketamine-therapy-feel-like"],
  ["/is-ketamine-a-psychedelic-rewired-ketamines-expert-guide-to-ketamines-consciousness-altering-properties-and-therapeutic-applications", "/content/blog/what-does-ketamine-therapy-feel-like"],
  ["/ketamine-therapy-side-effects-rewired-ketamines-expert-management-and-patient-education-guide", "/content/blog/what-to-expect-during-your-first-ketamine-session"],
  ["/is-ketamine-an-opioid-rewired-ketamines-expert-guide-to-ketamines-true-classification-and-safety-profile", "/content/blog/new-research-how-ketamine-activates-opioid-receptors"],
  ["/is-ketamine-therapy-safe-myths-vs-facts", "/faq"],
  ["/common-myths-and-facts-about-ketamine-infusion-therapy", "/content/blog/is-ketamine-infusion-therapy-a-breakthrough-or-just-a-trend"],
  ["/key-questions-to-ask-before-choosing-a-ketamine-treatment-clinic", "/content/blog/what-makes-a-ketamine-clinic-trustworthy"],
  ["/factors-to-consider-before-choosing-a-ketamine-clinic", "/content/blog/what-makes-a-ketamine-clinic-trustworthy"],
  ["/key-factors-to-consider-before-trying-ketamine-infusion-therapy", "/content/blog/is-ketamine-therapy-right-for-you"],
  ["/what-to-consider-before-getting-ketamine-infusion-therapy", "/content/blog/is-ketamine-therapy-right-for-you"],
  ["/reasons-for-ketamine-therapy-why-patients-choose-rewired-ketamines-breakthrough-treatment", "/content/blog/who-may-be-a-good-candidate-for-ketamine-therapy"],
];

// WordPress archive patterns (category, author, date and ?p= style IDs)
const OLD_PATTERNS: Array<[string, string]> = [
  ["/category/:slug*", "/content/blog"],
  ["/author/:slug*", "/providers"],
  ["/:year(\\d{4})/:month(\\d{2})", "/content/blog"],
  ["/:id(\\d{6,9})", "/content/blog"],
];

function buildRedirects(): Redirect[] {
  const list: Redirect[] = [];
  for (const [source, destination] of OLD_URLS) {
    list.push({ source, destination, permanent: true });
    list.push({ source: `${source}/`, destination, permanent: true });
  }
  for (const [source, destination] of OLD_PATTERNS) {
    list.push({ source, destination, permanent: true });
    list.push({ source: `${source}/`, destination, permanent: true });
  }
  // Same behavior as Next's built-in trailing-slash redirect, placed last
  // so the specific old URLs above win and take a single hop.
  list.push({ source: "/:path+/", destination: "/:path+", permanent: true });
  return list;
}

const nextConfig: NextConfig = {
  // Trailing slashes are handled by the last rule in buildRedirects().
  skipTrailingSlashRedirect: true,
  async redirects() {
    return buildRedirects();
  },
};

export default withNextIntl(nextConfig);
