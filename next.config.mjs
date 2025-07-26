import withBundleAnalyzerFn from "@next/bundle-analyzer";

const withBundleAnalyzer = withBundleAnalyzerFn({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
    deviceSizes: [360, 480, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 64, 128, 256, 384],
  },

  compress: true,

  experimental: {
    serverActions: {}, // ✅ Fix: must be an object, not boolean
  },

  // i18n: {
  //   locales: ["en", "hi"],
  //   defaultLocale: "en",
  // },

  // ✅ Ensure modern minification
  productionBrowserSourceMaps: false, // ✅ Disable source maps in production
};

export default withBundleAnalyzer(nextConfig);
