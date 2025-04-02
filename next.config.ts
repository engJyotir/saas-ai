import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Ensure Prisma Client works in both server and client-side builds
    if (isServer) {
      config.externals = ['prisma/client', ...config.externals || []];
    }
    return config;
  },
};

export default nextConfig;
