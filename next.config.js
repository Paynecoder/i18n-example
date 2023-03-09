/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // must set default languages to avoid error
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    localeDetection: false,
  },
};

module.exports = nextConfig;
