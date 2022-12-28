const spacing = require("./spacing");
const colors = require("./colors");
const { typography, weight, fontFamily } = require("./typography");

// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  content_local: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  content_external: ["./node_modules/@te/core/**/*.{js,ts,jsx,tsx}"],
  theme: {
    spacing,
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      steelGray: colors.steelGray,
      gray: colors.gray,
      red: colors.red,
    },
    textColor: ({ theme }) => ({
      ...theme("colors"),
      primary: theme("colors.steelGray.90"),
      secondary: theme("colors.steelGray.60"),
      "on-color": theme("colors.white"),
      disabled: theme("colors.steelGray.40"),
      "on-color-disabled": theme("colors.white"),
      placeholder: theme("colors.white"),
      error: theme("colors.gray.100"),
    }),
    backgroundColor: ({ theme }) => ({
      ...theme("colors"),
      background: theme("colors.white"),
      "background-hover": theme("colors.steelGray.10"),
      "background-selected": theme("colors.steelGray.20"),
    }),
    borderColor: ({ theme }) => ({
      ...theme("colors"),
      border: theme("colors.steelGray.20"),
    }),
    fontSize: typography,
    fontWeight: weight,
    fontFamily,
  },
  plugins: [],
};
