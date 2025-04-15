import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Salsa@Cal Board",
  favicon: "img/favicon.ico",

  url: "https://salsaatcal.com",
  baseUrl: "/",

  organizationName: "salsaatcal", // Usually your GitHub org/user name.
  projectName: "salsaatcal board website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/MJRobillard/V2_SalsaBoard/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Salsa@Cal Board",
      logo: {
        alt: "Salsa@Cal Board Logo",
        src: "img/logo.jpg",
      },
      items: [
        {
          type: "doc",
          docId: "Overview",
          position: "left",
          label: "Board Member Info",
        },
        {
          to: "Mission",
          position: "left",
          label: "Mission",
        },
        {
          to: "Board",
          position: "left",
          label: "Board",
        },
        {
          to: "Moves",
          position: "left",
          label: "Moves",
        },
        {
          to: "recruitment",
          position: "left",
          label: "Recruitment",
        },
        {
          label: "Branches",
          position: "left",
          items: [
            {
              type: "doc",
              docId: "Branches/Exec",
              label: "Executive",
            },
            {
              type: "doc",
              docId: "Branches/External",
              label: "External",
            },
            {
              type: "doc",
              docId: "Branches/Finance",
              label: "Finance",
            },
            {
              type: "doc",
              docId: "Branches/Internal",
              label: "Internal",
            },
            {
              type: "doc",
              docId: "Branches/Marketing",
              label: "Marketing",
            },
            {
              type: "doc",
              docId: "Branches/Performance",
              label: "Performance",
            },
          ],
        },
        {
          href: "https://github.com/MJRobillard/V2_SalsaBoard/tree/main/",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Quick Links",
          items: [
            {
              label: "Recordings",
              to: "https://www.youtube.com/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Salsa Website",
              href: "https://none/",
            },
            {
              label: "GitHub",
              href: "https://github.com/MJRobillard",
            },
          ],
        },
      ],
      copyright: "Maintained and built by Matthew Robillard with Docusaurus.",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    announcementBar: {
      id: "announcementBar-2",
      content: `Announcement Example!!!!`,
      isCloseable: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
