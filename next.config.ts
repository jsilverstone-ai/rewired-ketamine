import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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

      // Conditions → Treatments
      {
        source: "/conditions",
        destination: "/treatments",
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
    ];
  },
};

export default nextConfig;