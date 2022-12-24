const config = require("@te/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ...config.content_local,
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.mdx",
  ],
  theme: config.theme,
  plugins: config.plugins,
};
