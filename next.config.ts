import type { NextConfig } from "next";

const allowedDevOrigins = ["localhost", "127.0.0.1", "192.168.1.35"];

const nextConfig: NextConfig = {
  typedRoutes: true,
  allowedDevOrigins,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
