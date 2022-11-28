const config = require("@te/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: config.content_local,
  theme: config.theme,
  plugins: config.plugins,
};
