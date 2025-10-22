import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
