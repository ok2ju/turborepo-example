const spacing = require("./spacing");
const colors = require("./colors");

// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  content_local: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  content_external: ["./node_modules/@te/core/**/*.{js,ts,jsx,tsx}"],
  theme: {
    spacing: {
      ...spacing,
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
      blue: colors.blue,
      orange: colors.orange,
      yellow: colors.yellow,
      cyan: colors.cyan,
      purple: colors.purple,
      magenta: colors.magenta,
      qwerty: colors.magenta,
    },
    textColor: ({ theme }) => ({
      ...theme("colors"),
      primary: theme("colors.green.100"),
      secondary: theme("colors.gray.100"),
      placeholder: theme("colors.gray.100"),
      "on-color": theme("colors.gray.100"),
      helper: theme("colors.gray.100"),
      disabled: theme("colors.gray.100"),
      error: theme("colors.gray.100"),
    }),
    backgroundColor: ({ theme }) => ({
      ...theme("colors"),
      background: theme("colors.gray.100"),
      "background-brand": theme("colors.gray.100"),
      "background-inverse": theme("colors.gray.100"),
    }),
    borderColor: ({ theme }) => ({
      ...theme("colors"),
      brand: "blue",
    }),
  },
  plugins: [],
};
