import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {      // <--- ADD THIS SECTION
    turbo: false,      // <--- AND THIS LINE
  }
};

export default nextConfig;
