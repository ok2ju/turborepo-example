module.exports = {
  content_local: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  content_external: ["./node_modules/@te/core/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [],
};
