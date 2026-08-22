import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://truvantik.com',
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
  server: {
    // Honour the PORT assigned by the harness/preview server; fall back to 4321.
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
    host: false,
  },
});
