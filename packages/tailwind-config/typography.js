const typography = {
  xs: ["0.75rem", { lineHeight: "1rem" }],
  sm: ["0.875rem", { lineHeight: "1.25rem" }],
  base: ["1rem", { lineHeight: "1.5rem" }],
  lg: ["1.125rem", { lineHeight: "1.75rem" }],
  xl: ["1.25rem", { lineHeight: "1.75rem" }],
  "2xl": ["1.5rem", { lineHeight: "2rem" }],
  "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
  "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
  "5xl": ["3rem", { lineHeight: "3.5rem" }],
  "6xl": ["3.75rem", { lineHeight: "4.5rem" }],
  "7xl": ["4.5rem", { lineHeight: "5.125rem" }],
  "8xl": ["6rem", { lineHeight: "6.625rem" }],
  "9xl": ["8rem", { lineHeight: "8.5rem" }],
  // Body
  "body1-short": [
    "0.875rem",
    {
      lineHeight: "1.125rem",
      fontWeight: "400",
    },
  ],
  "body2-short": [
    "1rem",
    {
      lineHeight: "1.375rem",
      fontWeight: "400",
    },
  ],
  body1: [
    "0.875rem",
    {
      lineHeight: "1.25rem",
      fontWeight: "400",
    },
  ],
  body2: [
    "1rem",
    {
      lineHeight: "1.5rem",
      fontWeight: "400",
    },
  ],
  // Heading
  "heading-1": [
    "0.875rem",
    {
      lineHeight: "1.25rem",
      fontWeight: "600",
    },
  ],
  "heading-1-short": [
    "0.875rem",
    {
      lineHeight: "1.125rem",
      fontWeight: "600",
    },
  ],
  "heading-2": [
    "1rem",
    {
      lineHeight: "1.5rem",
      fontWeight: "600",
    },
  ],
  "heading-2-short": [
    "1rem",
    {
      lineHeight: "1.25rem",
      fontWeight: "600",
    },
  ],
  "heading-3": [
    "1.25rem",
    {
      lineHeight: "1.75rem",
      fontWeight: "600",
    },
  ],
  "heading-4": [
    "1.5rem",
    {
      lineHeight: "1.875rem",
      fontWeight: "600",
    },
  ],
  "heading-5": [
    "1.875rem",
    {
      lineHeight: "2.25rem",
      fontWeight: "600",
    },
  ],
  "heading-6": [
    "2.25rem",
    {
      lineHeight: "2.75rem",
      fontWeight: "600",
    },
  ],
  "heading-7": [
    "3rem",
    {
      lineHeight: "3.5rem",
      fontWeight: "600",
    },
  ],
  // Utility
  "label-1": [
    "0.75rem",
    {
      lineHeight: "1rem",
      fontWeight: "400",
    },
  ],
  "label-2": [
    "0.875rem",
    {
      lineHeight: "1.125rem",
      fontWeight: "400",
    },
  ],
  "code-1": [
    "0.75rem",
    {
      lineHeight: "1rem",
      fontWeight: "400",
    },
  ],
  "code-2": [
    "0.875rem",
    {
      lineHeight: "1.25rem",
      fontWeight: "400",
    },
  ],
};

const weight = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
};

const fontFamily = {
  sans: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    '"Noto Sans"',
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ],
  serif: [
    "ui-serif",
    "Georgia",
    "Cambria",
    '"Times New Roman"',
    "Times",
    "serif",
  ],
  mono: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    '"Liberation Mono"',
    '"Courier New"',
    "monospace",
  ],
};

module.exports = { typography, weight, fontFamily };
