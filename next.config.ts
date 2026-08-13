import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // This value is not sensitive. It lets client-side product images use the
    // same Square environment selection as server-side Square requests.
    NEXT_PUBLIC_SQUARE_ENVIRONMENT: process.env.SQUARE_ENVIRONMENT,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.weserv.nl",
      },
      {
        protocol: "https",
        hostname: "items-images-sandbox.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "*.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "*.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "*storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "assets.cdn.filesafe.space",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"], // Optimiza los iconos automáticamente
  },
};

export default nextConfig;
