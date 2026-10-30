import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = 'https://revanite.io';

// Alias redirect pages (src/pages/[...alias].astro) are built before the sitemap is
// written; leave them out of it by spotting their meta refresh in the built file.
const isRedirect = (page) => {
  const path = new URL(page).pathname;
  try {
    return readFileSync(`dist${path === '/' ? '/index' : path}.html`, 'utf8').includes('http-equiv="refresh"');
  } catch {
    return false;
  }
};

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [icon(), sitemap({ filter: (page) => !isRedirect(page) })],
  vite: { plugins: [tailwindcss()] },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
