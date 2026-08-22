import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://truvantik.com',
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
