import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["mycashsite.sa"],
    unoptimized: true, // Disable image optimization for static export
  },
  // output: 'export',  // This tells Next.js to export the app as static files
  distDir: "build",
};

module.exports = {
  ...nextConfig, // Spread existing config

  // async headers() {
  //   return [
  //     {
  //       source: "/:path*",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=0, must-revalidate",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
