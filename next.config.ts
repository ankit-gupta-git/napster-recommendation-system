import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com", // Optional, if we ever use youtube thumbnails
        port: "",
        pathname: "/**"
      }
    ],
  },
};

export default nextConfig;
