// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MC Server Guide',
  tagline: 'Guides to help you do things',
  favicon: 'img/Book_JE2_BE2.png',

  // Set the production url of your site here
  url: 'https://guides.ncmsstudios.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NCMSStudios', // Usually your GitHub org/user name.
  projectName: 'NCMSGuides', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/NCMSStudios/NCMSGuides/tree/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'beta_warning',
        content:
          'Notice: This guide is a work in progress! Information may be incomplete, so proceed with caution.',
        backgroundColor: '#f52020',
        textColor: '#eeeeee',
        isCloseable: false,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MC Server Guide',
        logo: {
          alt: 'MC Server Guide Icon',
          src: 'img/Book_JE2_BE2.png',
        },
        items: [
          {
            href: '/main',
            position: 'left',
            label: 'The Guide',
          },
          {
            href: '/about',
            position: 'left',
            label: 'About',
          },
          {
            href: 'https://github.com/novemberlc/mcserverguide',
            position: 'right',
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: 'light',
        /*links: [
          {
            label: 'Discord',
            href: 'https://discord.gg/D7YaejmyUG',
          },          
          {
            label: 'YouTube',
            href: 'https://www.youtube.com/@NCMSStudios',
          },          
          {
            label: 'Twitch',
            href: 'https://www.twitch.tv/ncmsstudios',
          },
          {
            label: 'Twitter / X',
            href: 'https://twitter.com/NCMSStudios',
          },
          {
            label: 'Instagram',
            href: 'https://instagram.com/ncmsstudios',
          },

        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} novemberlc`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['toml', 'properties', 'bash'],
      },
    }),
};

export default config;
