import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Stowaway",
  tagline: "Zero-dependency E2E testing for React Native",

  url: "https://stowaway.dev",
  baseUrl: "/",

  organizationName: "jarredhumphrey",
  projectName: "stowaway-website",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
          exclude: ["README.md"],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Stowaway",
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
        },
        {
          to: "/changelog",
          label: "Changelog",
          position: "left",
        },
        {
          href: "https://www.npmjs.com/package/stowaway",
          label: "npm",
          position: "right",
        },
        {
          href: "https://github.com/jarredhumphrey/stowaway",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Getting Started", to: "/docs/getting-started" },
            { label: "Querying", to: "/docs/querying" },
            { label: "Interactions", to: "/docs/interactions" },
            { label: "Assertions", to: "/docs/assertions" },
            { label: "Test Organisation", to: "/docs/test-organisation" },
            { label: "Network Mocking", to: "/docs/network-mocking" },
            { label: "Results & CI", to: "/docs/results" },
          ],
        },
        {
          title: "Links",
          items: [
            { label: "Changelog", to: "/changelog" },
            {
              label: "npm",
              href: "https://www.npmjs.com/package/stowaway",
            },
            {
              label: "GitHub",
              href: "https://github.com/jarredhumphrey/stowaway",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jarred Humphrey.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "typescript"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
