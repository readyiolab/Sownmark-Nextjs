import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "sownmark.com",
      },
      {
        protocol: "https",
        hostname: "www.sownmark.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/digital-marketing-agency",
        destination: "/services/digital-marketing",
        permanent: true,
      },
      {
        source: "/website-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/influencer-marketing",
        destination: "/services/influencer-marketing",
        permanent: true,
      },
      {
        source: "/hiring-solutions",
        destination: "/services/hiring-solutions",
        permanent: true,
      },
      {
        source: "/terms-conditions",
        destination: "/terms-and-conditions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
