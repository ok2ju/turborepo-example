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
      "on-color-disabled": theme("colors.steelGray.50"),
      placeholder: theme("colors.white"),
      error: theme("colors.gray.100"),
    }),
    backgroundColor: ({ theme }) => ({
      ...theme("colors"),
      background: theme("colors.white"),
      "background-hover": theme("colors.steelGray.10"),
      "background-selected": theme("colors.steelGray.20"),

      "button-primary": theme("colors.steelGray.90"),
      "button-primary-hover": theme("colors.steelGray.80"),
      "button-primary-active": theme("colors.steelGray.100"),
      "button-secondary": theme("colors.steelGray.20"),
      "button-secondary-hover": theme("colors.steelGray.30"),
      "button-secondary-active": theme("colors.steelGray.40"),
      "button-tertiary": theme("colors.steelGray.90"),
      "button-tertiary-hover": theme("colors.steelGray.90"),
      "button-tertiary-active": theme("colors.steelGray.100"),
      "button-danger-primary": theme("colors.red.70"),
      "button-danger-secondary": theme("colors.red.70"),
      "button-danger-hover": theme("colors.red.80"),
      "button-danger-active": theme("colors.red.90"),
      "button-disabled": theme("colors.steelGray.30"),

      "layer-1": theme("colors.steelGray.100"),
      "layer-2": theme("colors.white"),
      "layer-3": theme("colors.steelGray.100"),
    }),
    borderColor: ({ theme }) => ({
      ...theme("colors"),
      base: theme("colors.steelGray.20"),
      focus: theme("colors.steelGray.100"),
    }),
    fontSize: typography,
    fontWeight: weight,
    fontFamily,
  },
  plugins: [],
};
