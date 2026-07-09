// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Despliegue en GitHub Pages como "project page":
//   site = https://<usuario>.github.io
//   base = /<nombre-repo>
// URL final: https://connoreichon.github.io/euronova-web/
// Si el cliente recupera su dominio (pinturaseuronova.com), cambiar `site`
// y poner base: '/' (ver CAMBIAR_DATOS_CLIENTE.md).
export default defineConfig({
  site: 'https://connoreichon.github.io',
  base: '/euronova-web',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
