// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine canonique = www, comme le site Framer en ligne.
export default defineConfig({
  site: 'https://www.ruosscommunication.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({ filter: (page) => !/\/(merci|404)\/?$/.test(page) }),
  ],
});
