// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine canonique = www, comme le site Framer en ligne.
export default defineConfig({
  site: 'https://www.ruosscommunication.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url.endsWith('ruosscommunication.com/')) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        return item;
      },
    }),
  ],
});
