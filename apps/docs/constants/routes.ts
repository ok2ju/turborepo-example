export interface NavItem {
  key: string;
  title: string;
  slug: string;
}

export const nav: Array<NavItem> = [
  {
    key: "home",
    title: "Home",
    slug: "/",
  },
  {
    key: "about",
    title: "About",
    slug: "/about",
  },
];

export interface MenuItem {
  key: string;
  title: string;
  slug: string;
}

export interface MenuSection {
  key: string;
  section: string;
  pages: Array<MenuItem>;
}

export const menu = [
  {
    key: "overview",
    section: "Overview",
    pages: [
      {
        key: "intro",
        title: "Introduction",
        slug: "/overview/introduction",
      },
      {
        key: "getting_started",
        title: "Getting started",
        slug: "/overview/getting-started",
      },
    ],
  },
  {
    key: "components",
    section: "Components",
    pages: [
      {
        key: "component_accordion",
        title: "Accordion",
        slug: "/components/accordion",
      },
      {
        key: "component_button",
        title: "Button",
        slug: "/components/button",
      },
      {
        key: "component_table",
        title: "Table",
        slug: "/components/table",
      },
      {
        key: "component_popover",
        title: "Popover",
        slug: "/components/popover",
      },
    ],
  },
];
