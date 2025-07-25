// next.config.mjs

import withBundleAnalyzerFn from "@next/bundle-analyzer";

const withBundleAnalyzer = withBundleAnalyzerFn({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
