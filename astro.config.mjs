
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',

  site: 'https://aimrferdy.com',

integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/product/search/')
    })
  ],

  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  },

  vite: {
    build: {
      target: 'esnext'
    }
  }
});
