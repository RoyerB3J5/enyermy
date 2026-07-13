import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"], // Optimiza los iconos automáticamente
  },
};

export default nextConfig;
