import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [react(), tailwind()],
  build: {
    assets: '_astro'
  },
  vite: {
    define: {
      __CLOUDFLARE_WORKERS__: 'true'
    }
  }
});