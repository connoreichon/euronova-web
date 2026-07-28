# PENDIENTES · Pinturas Euronova (registro de trabajo)

> Documento de traspaso para poder continuar el trabajo sin perder nada.
> Web en vivo: **https://euronova.pages.dev** (Cloudflare Pages, deploy automático al hacer push a `main`).
> Stack: Astro 7 + Tailwind v4. Datos centralizados en `src/data/site.ts`. Ver también `HANDOFF.md`.

Última actualización: 2026-07-28.

---

## ✅ HECHO (esta tanda, ya desplegado)

- **Privacidad**: teléfono y WhatsApp reales → **ficticios** en `src/data/site.ts`
  (tel `951 23 45 67`, WhatsApp `34612345678`). ⚠️ Restaurar los reales antes de
  publicar en dominio definitivo (los reales están en la memoria del asistente).
- **Cloudflare**: `astro.config.mjs` base `/`, `public/_headers` con seguridad+CSP.
- **SEO**: meta keywords (5) + robots en `Base.astro`.
- **Carta RAL**: eliminada RAL Design (solo RAL Clásico, 213).
- **Ficha de color compartida** (`src/components/FichaColor.astro`): las muestras del
  hero y de /cartas abren una ficha grande; favoritos (localStorage
  `euronova:favcolores`, máx **20**) sincronizados en vivo con "Imagina tu pared"
  vía evento `euronova:favchange`. A11y: teclado, foco, scroll-lock.
- **Rojo de marca**: hero y header en `--color-rojo #d2262b` (no granate).
- **Cartas /cartas**: pestañas RAL/NCS/Eurotrend rediseñadas (vidrio + barra de
  acento); EUROTREND ya no se sale del marco.
- **Paneles oscuros**: tarjetas del "proceso" y "Nota del mostrador" de crema →
  vidrio oscuro premium.
- **Marcas**: cinta (marquee) en movimiento continuo que **NO se para** al hover;
  título "Trabajamos con marcas de confianza"; quitada la frase "¿Buscas otra marca…".
- **Transición rojo→negro**: seam sin escalón + hairline rojo difuminado en el footer.
- **Logo**: ⭐ regenerado desde el **PDF oficial del rótulo** (`PINTURAS EURONOVA 1.pdf`
  en Downloads) → `public/assets/marca/word.png` y `lockup.png` con la E correcta,
  llama azul y contorno blanco, en PNG transparente. Header muestra "Pinturas Euronova".

---

## ⏳ PENDIENTE (por hacer)

1. **Fachada del probador** (`public/assets/img/simulador/fachada.jpg` + `fachada-mask.png`):
   cambiar por una fachada sencilla pero que mole + regenerar la máscara (blanco = muro
   pintable). Mantener probar/dividir colores. El probador es `Tintometria.astro` (#color).
2. **Fondo negro con gotas de pintura**: al usuario NO le gustan los fondos negros
   actuales ("veo distintos negros", "cuadraditos"). Quiere **negro unificado** con
   **gotitas de pintura cayendo e impactando** de forma procedural, orgánica, fluida y
   con calidad (animación + textura de gotas/salpicaduras). Los fondos ROJOS sí le gustan.
3. **Mover CTA "mejor en persona"** (`CTAFinal.astro`) para que vaya **junto a Google
   Maps** (`Ubicacion.astro`): texto "mejor ven en persona" al lado del mapa.
4. **Ficha de producto BUPISA Nakar** (interior): recortar el bote a PNG (tamaño
   ESTÁNDAR fijo, plantilla reutilizable; asa siempre hacia atrás o todas sin asa) +
   descripción de la ficha técnica (buscar en bupisa.com). Va en Pinturas de Interior.
   ⚠️ BLOQUEADO: la foto del bote se pegó en el chat y NO es accesible como archivo.
5. **Bugs móvil/PC de /cartas y probador** (de la última captura):
   - Móvil: el mini-selector RAL/NCS/EUROTREND + lupa (`#mini-cartas`) queda **solapado
     por el header** → bajar su `top`.
   - PC: ese mini-buscador **no aparece** → revisar el IntersectionObserver / visibilidad.
   - Móvil: **bordes gruesos feos** en el apartado "muestra de la pared" del probador →
     afinar/quitar esos bordes.

---

## 🧰 NOTAS TÉCNICAS / GOTCHAS

- **Imágenes pegadas en el chat NO se guardan en disco** → para editarlas hay que pedir
  al usuario que las deje como archivo (p. ej. en `Downloads` o `material-cliente/`).
- **pymupdf** instalado (pip) para renderizar el PDF del logo (reversible: `pip uninstall pymupdf`).
- **Capturador del navegador integrado** (`mcp__Claude_Browser__ screenshot`) se cuelga
  con frecuencia → verificar por JS (getComputedStyle) o Chrome real.
- Un solo negro de marca: `--color-rojo #d2262b`, `--color-rojo-800/900` granates;
  negro base `#171111`.
- Reglas del cliente: español de España; no instalar/tocar cosas sin avisar; diseño
  mobile-first; nada de fondos crema (rechazados); logos de marca sobre fondo claro.
