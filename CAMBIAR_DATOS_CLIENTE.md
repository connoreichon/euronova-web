# Cambiar datos del cliente — Pinturas Euronova

Todos los textos y datos viven en **`src/data/site.ts`**. Edita ese archivo y la
web entera se actualiza. No hace falta tocar componentes.

## ⚠️ PENDIENTES antes de publicar (confirmar con el cliente)

| Dato | Dónde | Estado |
| --- | --- | --- |
| **WhatsApp** | `site.whatsapp` | 🔴 **PLACEHOLDER FICTICIO** `34600000000` — sustituir por el real (solo dígitos, con 34 delante, sin `+`). El botón funciona técnicamente pero escribe a un número de mentira. |
| Mensaje prerelleno | `site.whatsappMensaje` | 🔴 Placeholder — ajustar al tono del cliente. |
| **Dirección del local** | `site.direccion` | 🟡 Street View apunta a **Camino de Coín esquina C/ Yedra**; el registro dice C/ Río Corbones 8 (parece solo administrativa). Confirmar antes de fijar el mapa. |
| Mapa embebido | `site.mapsEmbed` | 🟡 Vacío a propósito. Cuando se confirme la dirección: Google Maps → Compartir → Insertar mapa → copiar la URL del `src` del iframe. |
| Sábados | `site.horario` | 🟡 "Consultar por teléfono" hasta que el cliente confirme. |
| Email | `site.email` | 🟡 `info@euronova.es` — el dominio euronova.es está caído: comprobar que el buzón sigue vivo. |
| Reparto local | `servicios` (04) | 🟡 Confirmar si reparte y en qué zona; si no, borrar el servicio 04. |
| Año de apertura | `site.fundadoEn` | 🟡 Puesto 2003 para cuadrar "+20 años". Confirmar. |
| Logos de marcas | `public/assets/marcas/` | 🟡 Son los oficiales de bupisa.com y rugoplast.com. Confirmar conformidad de las marcas (uso habitual de distribuidor, mejor por escrito). |
| Logotipo Euronova | `public/assets/logo.svg` + hero | 🔴 El rótulo real ("€uronov@" con pintada azul) NO está reproducido: pedir foto frontal del rótulo o el archivo del rotulista y sustituir el texto del hero por el logo real. |

## Cambios rápidos

- **Teléfono**: `site.telefono` (visible) y `site.telefonoLink` (enlace `tel:`).
- **Horario**: lista `site.horario` (día + horas; `cerrado: true` lo atenúa).
- **Categorías de producto**: lista `categorias` (nombre, descripción, textura).
- **Colores del panel de tintometría**: lista `coloresTinto`.
- **Servicios**: lista `servicios`.
- **Marcas**: lista `marcas` (logo, claim, web, tema claro/oscuro).

## Dominio propio

La web está preparada para GitHub Pages en
`https://connoreichon.github.io/euronova-web/`. Si el cliente recupera
`pinturaseuronova.com` (el dominio está caído), en `astro.config.mjs` cambiar:

```js
site: 'https://pinturaseuronova.com',
base: '/',
```

y configurar el dominio personalizado en Settings → Pages del repo.
