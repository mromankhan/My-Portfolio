import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "mromankhan.vercel.app" }],
        destination: "https://www.mromankhan.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "mroman.vercel.app" }],
        destination: "https://www.mromankhan.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "mromankhan.com" }],
        destination: "https://www.mromankhan.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
