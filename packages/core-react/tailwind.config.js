const config = require("@te/tailwind-config/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: config.content_local,
  theme: config.theme,
  plugins: config.plugins,
};
