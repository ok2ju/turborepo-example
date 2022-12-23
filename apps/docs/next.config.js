const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    transpilePackages: ["@te/core"],
  },
};
