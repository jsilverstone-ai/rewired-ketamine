import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
  source: "/free-consultation",
  destination: "/#contact",
  permanent: true,
},
{
  source: "/the-experience",
  destination: "/",
  permanent: true,
},
      {
  source: "/locations",
  destination: "/location",
  permanent: true,
},
      {
  source: "/ketamine-therapy-florida",
  destination: "/",
  permanent: true,
},
{
  source: "/our-advisory-board",
  destination: "/providers",
  permanent: true,
},
{
  source: "/conditions/anxiety-treatment",
  destination: "/treatments/anxiety",
  permanent: true,
},
{
  source: "/how-to-choose-the-right-provider-of-ketamine-therapy-for-ptsd",
  destination: "/treatments/ptsd",
  permanent: true,
},
{
  source: "/our-team",
  destination: "/providers",
  permanent: true,
},
      {
  source: "/privacy-policy",
  destination: "/",
  permanent: true,
},
{
  source: "/ketamine-infusions",
  destination: "/services",
  permanent: true,
},
{
  source: "/is-ketamine-therapy-safe-for-ptsd-patients",
  destination: "/treatments/ptsd",
  permanent: true,
},
{
  source: "/how-ketamine-therapy-differs-from-traditional-psychotherapy",
  destination: "/content/blog",
  permanent: true,
},
{
  source: "/key-factors-to-consider-before-trying-ketamine-infusion-therapy",
  destination: "/services",
  permanent: true,
},
{
  source: "/can-ketamine-therapy-improve-sleep-and-mood",
  destination: "/treatments/depression",
  permanent: true,
},
{
  source: "/when-to-consider-ketamine-therapy-for-suicidal-ideation",
  destination: "/treatments/depression",
  permanent: true,
},
{
  source: "/ketamine-treatment-for-chronic-pain-in-fort-lauderdale-a-breakthrough-solution-for-lasting-relief",
  destination: "/treatments",
  permanent: true,
},
{
  source: "/ketamine-assisted-therapy-rewired-ketamines-integrated-approach-to-breakthrough-mental-health-treatment",
  destination: "/content/blog",
  permanent: true,
},
{
  source: "/ketamine-therapy-side-effects-rewired-ketamines-expert-management-and-patient-education-guide",
  destination: "/content/blog",
  permanent: true,
},
      // Team / Providers
      {
        source: "/our-team",
        destination: "/providers",
        permanent: true,
      },
      {
        source: "/our-providers",
        destination: "/providers",
        permanent: true,
      },

      // Home Ketamine
      {
        source: "/at-home-ketamine-treatment-in-florida",
        destination: "/services/home-ketamine",
        permanent: true,
      },
      {
  source: "/tag/nushama-ketamine",
  destination: "/",
  permanent: true,
},

      // Conditions → Treatments
      {
        source: "/conditions",
        destination: "/treatments",
        permanent: true,
      },
      {
        source: "/conditions/ptsd-treatment",
        destination: "/treatments/ptsd",
        permanent: true,
      },
      {
        source: "/conditions/ketamine-for-ocd",
        destination: "/treatments/ocd",
        permanent: true,
      },

      // Contact
      {
        source: "/contact-us",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },

      // Blog
      {
        source: "/blog",
        destination: "/content/blog",
        permanent: true,
      },

      // Important old blog posts
      {
        source: "/what-is-ketamine-treatment-rewired-ketamines-complete-guide-to-revolutionary-mental-health-therapy",
        destination: "/content/blog",
        permanent: true,
      },
      {
        source: "/what-is-ketamine-assisted-therapy-and-how-does-it-work",
        destination: "/content/blog",
        permanent: true,
      },
      {
        source: "/what-is-ketamine-prescribed-for-rewired-ketamines-expert-guide-to-therapeutic-applications",
        destination: "/content/blog",
        permanent: true,
      },

      // Service / Treatment landings
      {
        source: "/ketamine-therapy-florida",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/ketamine-treatment-for-depression-near-me",
        destination: "/treatments/depression",
        permanent: true,
      },
      {
        source: "/breakthrough-ketamine-treatment-for-depression-florida-fast-effective-relief",
        destination: "/treatments/depression",
        permanent: true,
      },

      // NEW – from the 404 list
      {
        source: "/what-to-expect-during-your-first-ketamine-treatment-session",
        destination: "/content/videos",
        permanent: true,
      },
      {
        source: "/how-to-choose-a-safe-and-effective-ketamine-treatment-provider",
        destination: "/providers",
        permanent: true,
      },
      {
        source: "/ritual-to-relief-ketamine-infusion-therapy-for-religious-scrupulosity-ocd-in-floridas-diverse-faith-communities",
        destination: "/treatments/ocd",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;