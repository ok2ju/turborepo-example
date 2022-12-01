const colors = require("./colors");

module.exports = {
  content_local: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  content_external: ["./node_modules/@te/core/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
      blue: colors.blue,
      orange: colors.orange,
      yellow: colors.yellow,
      cyan: colors.cyan,
      purple: colors.purple,
      magenta: colors.magenta,
    },
    color: ({ theme }) => ({
      "text-primary": theme("colors.gray.100"),
      "text-secondary": theme("colors.gray.100"),
      "text-placeholder": theme("colors.gray.100"),
      "text-on-color": theme("colors.gray.100"),
      "text-helper": theme("colors.gray.100"),
      "text-disabled": theme("colors.gray.100"),
      "text-error": theme("colors.gray.100"),
      ...theme("colors"),
    }),
    backgroundColor: ({ theme }) => ({
      background: theme("colors.gray.100"),
      "background-brand": theme("colors.gray.100"),
      "background-inverse": theme("colors.gray.100"),
      ...theme("colors"),
    }),
  },
  plugins: [],
};
