export interface NavItem {
  key: string;
  slug: string;
}

export const nav: Array<NavItem> = [
  {
    key: "home",
    slug: "/",
  },
  {
    key: "about",
    slug: "/about",
  },
  {
    key: "contact",
    slug: "/contacts",
  },
];

export interface MenuItem {
  key: string;
  slug: string;
}

export interface MenuSection {
  key: string;
  pages: Array<MenuItem>;
}

export const menu = [
  {
    key: "overview",
    pages: [
      {
        key: "introduction",
        slug: "/overview/introduction",
      },
      {
        key: "gettingStarted",
        slug: "/overview/getting-started",
      },
    ],
  },
  {
    key: "design",
    pages: [
      {
        key: "colors",
        slug: "/design/colors",
      },
      {
        key: "typography",
        slug: "/design/typography",
      },
      {
        key: "spacing",
        slug: "/design/spacing",
      },
    ],
  },
  {
    key: "components",
    pages: [
      {
        key: "accordion",
        slug: "/components/accordion",
      },
      {
        key: "button",
        slug: "/components/button",
      },
      {
        key: "table",
        slug: "/components/table",
      },
      {
        key: "popover",
        slug: "/components/popover",
      },
    ],
  },
];
