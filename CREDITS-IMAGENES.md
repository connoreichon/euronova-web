# Créditos de imágenes y fuentes

## Fotos de categorías (`public/assets/img/categorias/`)

Todas de **Pixabay** (licencia Pixabay: uso comercial permitido, sin atribución
obligatoria). Descargadas 2026-07-07.

| Archivo | Pixabay ID | Contenido |
| --- | --- | --- |
| `interior.jpg` | chair-with-wall-1550526 | Pared interior pintada de rojo intenso |
| `fachadas.jpg` | architecture-2608240 | Fachada mediterránea pastel |
| `esmaltes.jpg` | metal-2437487 | Reja de forja esmaltada azul y oro |
| `madera.jpg` | furniture-998265 | Salón con muebles de madera barnizada |
| `suelos.jpg` | parking-219767 | Suelo de garaje pintado con flecha y líneas de aparcamiento |
| `imper.jpg` | roof-terrace-354906 | Terraza impermeabilizada con tumbonas |
| `tienda/botes.jpg` | color-417694 | Estantería de botes de pintura mezclada (provisional para Nosotros) |
| `simulador/interior.jpg` | wall-751342 | Pared lisa de interior con suelo abajo (superficie Interior del simulador); solo se pinta la pared, no el rodapié/suelo; suelo cambiado a tarima gris clara; la pintura llega hasta el suelo sin hueco blanco; base neutralizada para color fiel; máscara propia |
| `simulador/fachada.jpg` | door-2096367 | Fachada mediterránea (superficie Exterior); placa/cartel y farol de encima de la puerta eliminados por inpaint; pavimento subido para que la puerta llegue al suelo + sombra de contacto (sin franja blanca abajo); máscara propia con dilatación anti-hilillos (recorte milimétrico) |
| `og.jpg` | — | Imagen para compartir, generada con el logo sobre rojo de marca |

## Vídeo (`public/assets/video/`)

- `pigmento.mp4`: pigmento/tinta mezclándose en agua sobre fondo negro
  (**Pixabay**, id 58193-487176852; licencia Pixabay, uso comercial sin
  atribución). Fondo del hero de la página de cartas. `pigmento-poster.jpg`
  es el póster/fallback (generado, degradado oscuro).

Recomendación: sustituirlas poco a poco por fotos reales de la tienda y de
trabajos de clientes (ver `ASSETS_NEEDED.md`).

## Logos de marcas (`public/assets/marcas/`)

Oficiales, descargados de bupisa.com y rugoplast.com. Confirmar conformidad
de las marcas para su uso como distribuidor.

## Logotipo (`public/assets/marca/`)

- `lockup.png` / `word.png`: imagen REAL del rótulo de la tienda (facilitada por
  el propietario y por el rotulista), con la E del cartel integrada. Marca
  propia del cliente: sin problema de derechos ni fuentes que licenciar.
- `favicon.png` y `apple-touch-icon.png`: la E del rótulo sobre el rojo de marca.
- Tipografías de la web (Archivo, Inter, Nanum Brush Script): Google Fonts,
  licencia libre OFL.

## Manchas decorativas (`public/assets/manchas/`)

Siluetas de salpicadura reales de **Pixabay** (licencia Pixabay, uso comercial
sin atribución), teñidas a los colores de marca con Python/PIL:
paint-2174689 (splat1), paint-splatter-312092 (splat2), paint-2174687 (splat3),
ink-5949451 (splat4/5), paint-2209578 (splat6 con goteo y splat7 masa),
ink-303244 (splat8 pictórica densa). **Actualmente SIN USO** (la salpicadura al
clic se retiró; ver `pincel/`).

## Pincel: cursor y pinceladas (`public/assets/pincel/`)

- `brocha-cursor.png`: cursor con forma de brocha, **ILUSTRACIÓN cartoon dibujada
  con Python/PIL** (no es foto): mango rojo de marca, anillo/virola plateado,
  pelos negros con la punta roja (mojada en pintura), con línea de dibujo y filo
  claro para verse en cualquier fondo. Diagonal (punta arriba-izquierda = hotspot).
- `trazo1.png`, `trazo2.png`: **brochazos cartoon GENERADOS con Python/PIL/numpy**
  (no son fotos): cuerpo sólido + cerdas individuales, carga a la izquierda y
  cola seca deshilachada, en rojo de marca. Dos casi iguales (al clicar sale casi
  siempre el mismo). Los usa la animación de "pincelada al clicar" en `Base.astro`
  (se pinta con barrido `clip-path` + presión y se disuelve).
