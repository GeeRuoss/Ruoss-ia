// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { preparePages } from './scripts/prepare-pages.mjs';

// Domaine canonique = www, comme le site Framer en ligne.
export default defineConfig({
  site: 'https://www.ruosscommunication.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({ filter: (page) => !/\/(merci|404|projects)\/?$/.test(page) }),
    { name: 'static-project-status', hooks: { 'astro:build:done': preparePages } },
  ],
});
