# Pinturas Euronova — web

Web escaparate (sin tienda online) para Pinturas Euronova, tienda de pinturas
en Las Lagunas de Mijas (Málaga). Objetivo de conversión: que llamen, escriban
por WhatsApp o vayan a la tienda.

- **Stack:** Astro 7 + Tailwind CSS v4. Sin más dependencias.
- **Datos centralizados:** `src/data/site.ts` (ver `CAMBIAR_DATOS_CLIENTE.md`).
- **Deploy:** GitHub Pages con GitHub Actions (`.github/workflows/deploy.yml`).
  URL: https://connoreichon.github.io/euronova-web/

## Comandos

```bash
npm install     # una vez
npm run dev     # desarrollo en http://localhost:4321/euronova-web
npm run build   # build de producción en dist/
```

## Señas de identidad del diseño

- Rojo de marca `#d2262b` (sacado del rótulo real) como color dominante.
- Categorías de producto con **texturas CSS del material** (esmalte brillante,
  gotelé, madera barnizada, hormigón, caucho) — sin fotos con derechos.
- **Splash de pintura** al clicar (discreto, se desactiva con
  `prefers-reduced-motion`).
- Panel de **tintometría interactivo** (la pared cambia de color al tocar los chips).
- Logos oficiales de Bupisa y Rugoplast descargados de sus webs.
- WhatsApp flotante + CTAs en verde oficial.

## Pendiente

Ver `CAMBIAR_DATOS_CLIENTE.md` (placeholders marcados) y `ASSETS_NEEDED.md`
(material que falta del cliente: rótulo, fotos, WhatsApp, dirección).
