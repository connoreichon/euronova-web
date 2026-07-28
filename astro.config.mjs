// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Despliegue en CLOUDFLARE PAGES (se sirve en la RAÍZ del dominio):
//   base = '/'  (los assets van a /_astro/ y /assets/, no bajo /euronova-web/)
//   site = URL pública. AHORA: euronova.pages.dev. Cuando haya dominio propio
//          (p.ej. pinturaseuronova.com o euronova.es), cambiar `site` a ese
//          dominio para que canonical/OG/sitemap apunten bien (ver
//          CAMBIAR_DATOS_CLIENTE.md).
// NOTA: si se volviese a GitHub Pages (project page), habría que restaurar
//       base: '/euronova-web' y site: 'https://connoreichon.github.io'.
export default defineConfig({
  site: 'https://euronova.pages.dev',
  base: '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
