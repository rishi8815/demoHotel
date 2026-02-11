import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Setting this to '.' ensures Turbopack uses the current project directory as root
    root: '.',
  },
};

export default nextConfig;
