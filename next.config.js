const nextTranslate = require("next-translate");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "assets.vercel.com",
      "i.blogs.es",
      "hipertextual.com",
      "user-images.githubusercontent.com",
      "chakra-ui.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
  ...nextTranslate(),
};

module.exports = withPlugins([[withImages]], nextConfig);
