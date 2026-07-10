# HANDOFF — Pinturas Euronova (traspaso a nueva conversación)

> Documento para que una NUEVA sesión de Claude Code continúe la web
> **exactamente** donde se dejó. Léelo entero antes de tocar nada.
> Última actualización: 2026-07-10.

---

## 0. ACCESO (lo primero)

- **Carpeta local (raíz del proyecto):**
  `C:\Users\Usuario\Desktop\Clientes-Web\euronova-web`
- **Repositorio GitHub:** `https://github.com/connoreichon/euronova-web` (rama `main`, público).
- **Cuenta gh:** el CLI `gh` está logueado como **`connoreichon`** (NO `fontanalex12`). Los repos de cliente se crean/gestionan ahí. Identidad git del repo: `user.name=fontanalex12`, `user.email=fontanalex12@gmail.com` (configurada por-repo).
- **Web en vivo (GitHub Pages):** `https://connoreichon.github.io/euronova-web/`
  - Página de cartas: `https://connoreichon.github.io/euronova-web/cartas/`
  - ⚠ Al enseñar la web añade `?v=N` o abre en incógnito: GitHub Pages + caché de navegador han hecho creer al cliente que "no se ha cambiado nada". Verifica lo publicado con `curl "...?nc=$(date +%s)"`.
- **Último commit al escribir esto:** `edd1189` (feat: 'Imagina tu pared' en portada…). Todo está commiteado y pusheado; el working tree está limpio salvo avisos LF→CRLF (inofensivos).

### Cómo arrancar
```bash
cd "C:/Users/Usuario/Desktop/Clientes-Web/euronova-web"
npm install      # una vez
npm run dev      # http://localhost:4321/euronova-web
npm run build    # dist/ (debe salir con 0 warnings y 0 errors)
```
Para previsualizar/verificar usa las herramientas `preview_*` del harness (hay un `.claude/launch.json` con un servidor llamado `euronova` en el puerto 4321). NO uses Bash para levantar servidores.

### Despliegue
Push a `main` → GitHub Action (`.github/workflows/deploy.yml`) construye y publica en Pages.
- Espera con: `gh run watch --exit-status $(gh run list --limit 1 --json databaseId -q '.[0].databaseId')`.
- **GOTCHA:** `withastro/action@v3` usa Node 20 por defecto y **Astro 7 exige Node ≥22.12** → el workflow fija `node-version: 22`. No lo quites.

---

## 1. NEGOCIO Y OBJETIVO

**Pinturas Euronova** — tienda FÍSICA de pinturas en Las Lagunas de Mijas (Málaga, Costa del Sol). Cliente real. Para particulares y pintores profesionales. +20 años. **90% del negocio es PINTURA** (ferretería/vidrio sin protagonismo). NO es tienda online.

**Objetivo de conversión:** que vayan a la tienda / llamen. Regla comercial NUEVA e importante (2º brief de la clienta): **NO fomentar elegir color por foto**; SÍ fomentar **traer muestra real / ver carta física**. El color en pantalla es orientativo.

**La clienta es la madre del usuario** y da feedback. El usuario itera mucho sobre estética; hay que ejecutar con criterio de director de arte, no solo "hacer que funcione".

### Datos del negocio (en `src/data/site.ts`)
- Tel: `951 23 64 18` · **WhatsApp REAL: `34686057191`** (ya no es placeholder) · mensaje: "Hola, me gustaría hacer una consulta."
- Email: `info@euronova.es` (dominio euronova.es CAÍDO — comprobar buzón).
- Dirección mostrada: "Camino de Coín, esquina C/ Yedra" (🟡 PENDIENTE confirmar; el registro dice C/ Río Corbones 8, parece solo administrativa). Street View la sitúa en esa esquina.
- Horario: L-V 7:30–13:30 / 16:00–19:30; Sábado "Consultar por teléfono" (🟡 pendiente); Domingo cerrado.
- Marcas distribuidas: **Bupisa** (Burgos) y **Rugoplast/Pinturas Cabello** (Granada). Duracolor se ve en su escaparate pero se dejó FUERA por decisión del usuario.
- Redes: IG `@pinturas_euronova`, Facebook "Tienda De Pinturas Euronova".

---

## 2. STACK

- **Astro 7 + Tailwind CSS v4** (tokens en `src/styles/global.css` con `@theme`). Sin otras dependencias de UI. `@astrojs/sitemap` instalado.
- Datos centralizados en `src/data/site.ts` y `src/data/cartas.ts`.
- Helper `src/lib/asset.ts`: `asset('/ruta')` antepone el `base` (`/euronova-web`). **ÚSALO SIEMPRE** para imágenes/links internos o dan 404 en Pages.
- `astro.config.mjs`: `site: 'https://connoreichon.github.io'`, `base: '/euronova-web'`. Si el cliente recupera su dominio, cambiar a `base: '/'` (ver `CAMBIAR_DATOS_CLIENTE.md`).

---

## 3. DIRECTIVAS DE DISEÑO (mandan sobre todo)

Hay DOS documentos-directiva en el repo. Léelos:
1. **`EURONOVA_MASTER_DESIGN_SYSTEM_CLAUDE.md`** (raíz) — el máster: prohíbe tiritas/adornos cutres, pide rojo como ACENTO (10-15%), fases 0-7, autocrítica obligatoria, criterios de venta.
2. **2º brief del usuario (director de arte senior)** — refuerza: UI premium/editorial, **WhatsApp a UNA sola presencia**, eliminar "mándanos foto", aviso de color en rojo elegante, sección RAL/NCS original (con vídeo), y el simulador "Imagina tu pared".

También en memoria global: `feedback_direccion_arte.md` y `feedback_web_design_originalidad.md`.

**Paleta / tokens (en `global.css`):** rojo marca `#d2262b` (`--color-rojo`), negro `#171111` (`--color-negro`), papel `#faf7f2`, azul `#2a5cad`, verde WhatsApp `#25d366`, albero `#d9a441`. La web es de **fondo NEGRO dominante** (decisión de la jefa) con rojo de acento y blanco — se resolvió así el conflicto con el máster (que pedía fondos claros): base negra + rojo recortado. Tipografías: Archivo / Inter / Archivo Black / Nanum Brush Script (kickers "a brocha", rectos). Sistema de espaciado de 8; radios moderados (14-16px); transiciones ~240ms; hover = elevación 2px (NO scale).

---

## 4. MAPA DEL PROYECTO

### ESCAPARATE DE PRODUCTOS (nuevo)
- La sección `#productos` de la portada (`Categorias.astro`) es ahora un **selector de categorías**: cada tile es un enlace a `/productos/[slug]/`. Titular cambiado a "Elige qué vas a pintar."
- **Categorías** (en `site.ts`, con `slug`, `intro` y `productos[]`): `interior-exterior` (1ª, obligatoria), `exterior` (2ª, obligatoria), `esmaltes`, `impermeabilizantes`, `madera-barnices`, `ecologicas`. (Se QUITÓ "Suelos".) Cada categoría lleva su gama de `productos` de MUESTRA (sin precio): `{nombre, tipo, swatch (color de cabecera provisional), desc}`. El cliente cambiará fotos/datos.
- **`src/pages/productos/[slug].astro`** — escaparate premium por categoría (`getStaticPaths` desde `categorias`): cabecera con la foto de la categoría + intro + WhatsApp, selector de categorías (chips), rejilla de tarjetas `.prod` (cabecera = muestra de color `--sw` con brillo esmalte + etiqueta `tipo`, sin precio), banner "muestra" y cierre rojo. Estilos `.prod`/`.prod__cover` en `global.css`.
- **`VideoDemo.astro`** (sección `#video` en la portada, tras Nosotros) — vídeo demostrativo; usa `pigmento.mp4` como **PROVISIONAL** (etiqueta "Vídeo de muestra"), a sustituir por el vídeo real del cliente.

### Páginas (`src/pages/`)
- **`index.astro`** — portada. Orden de secciones: `Hero → Categorias → Tintometria(#color = "Imagina tu pared") → Servicios → Nosotros → Ubicacion(#tienda) → Marcas → CTAFinal → Footer → WhatsAppFloat`. `<main id="main">`.
- **`cartas.astro`** (`/cartas/`) — explorador de cartas. **VÍDEO de pigmentos en agua como FONDO FIJO de todo el apartado** (commit `3407921`). El clip (43,4 s) tenía un **movimiento de cámara incómodo en los primeros segundos**; el JS lo evita **arrancando y haciendo BUCLE desde un punto estable** (`IN=4.0 s`, nunca vuelve al segundo 0): quita `autoplay`/`loop` del HTML, hace `seek(IN)` con el vídeo en pausa y solo entonces `play()` (sin destello del inicio), y en `timeupdate` salta a `IN` al acercarse al final. `playbackRate = 1.2` (un pelín más ágil). Las secciones de contenido son translúcidas. Respeta `prefers-reduced-motion` (`.video-hero__media` se oculta). Tabs RAL/NCS/Eurotrend con distintivo de cada sistema; buscador por código/nombre; rejilla RAL (213) + NCS COMPLETO generado en cliente (2259 tonos) + Eurotrend vacía con aviso. Enlace final a "Imagina tu pared".
- **`404.astro`** — 404 de marca ("Este tono no está en nuestra carta"). GitHub Pages sirve `dist/404.html` automáticamente.

### Componentes (`src/components/`)
- **`Header.astro`** — barra fija; transparente sobre el hero rojo, roja sólida al hacer scroll. Nav desktop + nav móvil deslizable (`.sin-scrollbar`). Derecha: "Cómo llegar" + teléfono (pill blanco). **SIN botón WhatsApp** (WhatsApp = solo el flotante). Marca "activo" en /cartas con `aria-current`.
- **`Hero.astro`** — franja roja CONTROLADA: logo (imagen, `LogoEuronova` full), titular comercial "Pinturas, color a medida y asesoramiento en Las Lagunas de Mijas", 2 CTAs (**Cómo llegar a la tienda** + **Ver cartas de colores**, sin WhatsApp), línea de confianza, foto (fachadas.jpg) a la derecha (oculta en móvil). Termina con un `drip-divider` (goteo rojo SVG).
- **`LogoEuronova.astro`** — logo REAL como `<img>`: `full` = `marca/lockup.png` (rótulo €uronov@ + pinturas + eslogan), `compact` = `marca/word.png`. Es el arte del rotulista con la E del cartel integrada (ver §6). NO es fuente: no hay nada que licenciar.
- **`Categorias.astro`** (#productos) — "Escaparate" en bento editorial: 6 piezas (protagonista 3×2 con texto sobre foto + 2 medianas + 3 apoyo). Tiles editoriales SIN CTA repetido; una línea de asesoramiento + "Ven a vernos" bajo la rejilla. Fotos en `img/categorias/`.
- **`Tintometria.astro`** (#color) — **"Imagina tu pared"** (el nombre del archivo se mantuvo por compatibilidad de import). Simulador: estancia (`img/simulador/salon.jpg`) cuya PARED se tinta con el color buscado. Ver §5.
- **`Servicios.astro`** (#servicios) — "Por qué Euronova": 4 servicios numerados (color a medida, asesoramiento, atención al profesional, reparto). Datos en `site.ts`.
- **`Nosotros.astro`** (#nosotros) — bloque editorial de confianza ("Más de 20 años…") + 3 datos con filete + foto provisional `img/tienda/botes.jpg`.
- **`Ubicacion.astro`** (#tienda) — dirección/horario + mapa embebido (ficha Google del negocio, sin API key) + botón "Llámanos" (tel, no WhatsApp).
- **`Marcas.astro`** (#marcas) — Bupisa (logo color, sobre claro) + Rugoplast (logo blanco, sobre oscuro). Movida AL FINAL (fuera del hero).
- **`CTAFinal.astro`** — cierre rojo: "Para acertar con el color, mejor en persona" (muestra real, carta física). CTAs: Cómo llegar + teléfono. SIN "mándanos foto".
- **`WhatsAppFloat.astro`** — **la ÚNICA presencia de WhatsApp** (botón flotante verde). Verificado: 1 sola `a[href*=wa.me]` en la portada.
- **`AvisoColor.astro`** — aviso profesional en rojo sobre variación del color. `variant="full"` (con "Importante.") o `"inline"`. Usado en Tintometria, cartas y (antes) simulador.
- **`BadgeCarta.astro`** — chip tipográfico sobrio (punto de color + "RAL"/"NCS"). Rediseñado para arreglar la desalineación que tenía el icono anterior.
- **`Footer.astro`** — pie negro con filo rojo.

### Datos
- **`src/data/site.ts`** — TODO lo editable del cliente (nombre, contacto, horario, categorías con `img`/`alt`/`acabado`/`desc`, servicios, redes, mapsEmbed…). Ver `CAMBIAR_DATOS_CLIENTE.md`.
- **`src/data/cartas.ts`** — `RAL` (carta **Clásico** completa 213, hex oficiales), `NCS` (selección curada), `EUROTREND` (vacía, pendiente carta física), `BLANCOS_ROTOS` (10 curados con código+nombre+carta+nota).
  - **NCS completo (2259)** se GENERA en cliente (algoritmo `ncsHex` con anclas Y#FFD200 R#C40233 B#0088BF G#009E60) tanto en `cartas.astro` como en `Tintometria.astro`.
  - **RAL Design (~1298)** se GENERA en cliente en `cartas.astro` (`#grid-raldesign`, bajo el Clásico en la pestaña RAL): el sistema RAL Design se define en CIELAB, así que se convierte `LCH→Lab→XYZ→sRGB` (D65) sobre una malla H∈0–350/10°, L∈20–90/10, C∈10–80/10, mostrando solo los tonos dentro de gama. Códigos "RAL HHH LL CC". La pestaña RAL muestra "Clásico + Design · 1511 tonos". Reproducción ORIENTATIVA (referencia = carta física); RAL Design son códigos sistemáticos, no todos figuran en el abanico Clásico.

---

## 5. "IMAGINA TU PARED" (lo último que se hizo — clave)

Sustituye al antiguo "Color exacto" en la portada (sección `#color`, archivo `Tintometria.astro`). **Estado: implementado y verificado en desktop, tablet y móvil (375/768/1038px).** Pulido móvil en commit `7549be8`: chips de acceso rápido en rejilla 4×4 equilibrada (antes 7+1 huérfano) con toque de 40px, pie de la estancia apilado y legible en móvil, y nombres de blancos rotos que ya no se truncan (fluyen a 2 líneas). Buscador + tap en muestras verificados tintando la pared en móvil.

**REDISEÑO (commit `b640af0`):** el buscador iba en una columna aparte de la foto (quedaba mal integrado). Ahora es un **panel inmersivo en una sola columna centrada** (`mx-auto max-w-3xl`): el buscador FLOTA sobre la foto (pastilla glassy arriba), el nombre del color aplicado va abajo con velo, y chips/aviso/CTAs debajo. Orden correcto en móvil (título → panel → controles). **El salón + la máscara se recortaron de vertical (1000×1535) a apaisado 4:3 (1000×750)** para integrarse mejor: la pared (lo que se tiñe) manda y el sofá da contexto. Verificado por muestreo que el borde de la máscara coincide con el inicio del sofá → **solo la pared se tiñe** (el sofá queda gris con cualquier color).

**SUPERFICIES + ACABADOS (commit `86a049f` — estado actual):** ya NO es solo una pared. El cliente elige:
- **SUPERFICIE** (tabs `[data-surface]`): SOLO **Interior** y **Exterior** (el cliente pidió QUITAR la superficie Esmalte/metal en commit `a0b4e52` — una verja limpia SIN flores no era viable con stock gratis: las bonitas están en jardines con follaje delante que fragmenta el corte).
  - **Interior** (`interior.jpg` = `wall-751342`): a petición del cliente es **SOLO UNA PARED lisa** (con suelo abajo), sin sofá ni muebles. Se pinta solo la pared, nunca el rodapié/suelo. **La máscara llega HASTA la línea del suelo (y~617) SIN dejar hueco blanco** entre pared y suelo (petición del cliente). El **suelo se cambió** a una tarima gris clara neutra (antes era otro tono) reemplazando la banda `y>=618` por `suelo_desat*0.55 + 200*0.45`. La base rosada de la pared se **neutralizó** (desaturar 65% + aclarar) para que el color salga fiel.
  - **Exterior** (`fachada.jpg` = `door-2096367`): foto elegida deliberadamente (un workflow de 7 agentes buscó alternativas en Pixabay y confirmó que ésta es de largo la mejor: muro liso blanco enorme, puerta/ventana azules de gran contraste, frontal, luz uniforme, puerta que llega al pavimento). Pipeline definitivo en `scratchpad/fac_pipeline.py` (parametrizable `BLUE_T DILATE GAP`). Pasos:
    1. **Farol ELIMINADO por completo** (cuerpo + resto/soporte) con inpaint horizontal sobre el listón superior; verificado a alto zoom que no queda mancha.
    2. **Corte por COLOR:** pinta lo claro (`lum>138`), excluye AZUL (`B-(R+G)/2 > BLUE_T`, BLUE_T=**20**) y oscuro, por encima del pavimento.
    3. **Anti-hilillos (milimetría):** la zona pintada se **dilata** `DILATE=2` px (`MaxFilter`) para tragar los píxeles claros de transición muro↔marco → **sin trazos blancos** entre color y puerta/ventana (era la queja principal). Feather 0.6 + re-clip duro del pavimento.
    4. **Puerta hasta el suelo + sin franja blanca abajo:** se **SUBE el pavimento** (bloque de gris puro, sin labio crema) hasta la base de la puerta (`db_max`), así la puerta pisa el suelo y desaparece el zócalo crema. Una **sombra de contacto** (oscurece los primeros px del pavimento bajo el muro) tapa cualquier borde claro del suelo y da apoyo realista.
  - Verificado con composites PIL a rojo/verde/beige (mismo cálculo que el navegador: multiply × alfa de máscara): sin hilillos, sin resto de farol, puerta al suelo, sin franja blanca.
- ⚠⚠ **GOTCHA CRÍTICO de las máscaras:** deben ser **PNG RGBA con el alfa = luminancia** (no modo `L`/escala de grises). CSS `mask-image` usa el canal ALFA por defecto; un PNG en modo `L` no tiene alfa → Chrome lo trata OPACO y **tiñe la imagen ENTERA**. Al generar máscaras con PIL: `Image.merge('RGBA',[white,white,white, mascaraL])`. (Este bug estuvo en producción en commits `86a049f`/`f7d5486`; corregido en `aca5dd4`.)
- **COLOR**: cualquier RAL/NCS (buscador + chips), igual que antes.
- **ACABADO** (segmentado `[data-finish]`): Mate / Satinado / Brillo. **Acabados REALES** (documentado con la física de cada acabado): el JS aplica DOS cosas por acabado (objeto `FINISH` en `Tintometria.astro`):
  1. **Reflejo especular** — capa `.sim-sheen` (mix-blend `screen`, gradiente radial de luz direccional 24%/12%) cuya opacidad crece con el brillo: `mate:0` (reflexión difusa, sin brillo), `satinado:0.34` (brillo suave 25-35%), `brillo:0.78` (reflejo marcado 70-85%).
  2. **Filtro de color** en `.sim-color` — mate `saturate(0.9) contrast(0.94)` (plano/apagado), satinado `none` (neutro), brillo `saturate(1.14) contrast(1.16) brightness(1.03)` (el brillo satura y contrasta más el color, como en la realidad). Ambos con transición 0.45s. El nombre muestra `color · acabado`. Verificado en vivo: cada acabado mapea a su reflejo+filtro correctos.
- Cada superficie es un `.sim-panel` (solo el activo sin `hidden`) dentro de `.sim-stage`; el buscador flotante y el pie son ÚNICOS (superpuestos, `z-10`). `pintar()` aplica el color a TODAS las capas `.sim-color`; `setAcabado()` a todas las `.sim-sheen`; cambiar de superficie solo alterna `hidden`.
- **"GUARDA TUS COLORES" (favoritos, CRUZADO simulador↔cartas):** sustituye a los antiguos chips fijos "O prueba estos" (petición del cliente).
  - En el **simulador** (`Tintometria.astro`): botón **"Guardar color"** (corazón que se rellena) que **guarda/quita** el color aplicado; los guardados aparecen como muestras bajo la pared, **clicables para reaplicarlos** y con una **×** para quitarlos (`renderFavs`/`guardarBtn`/delegación en `#sim-favs`).
  - En las **cartas** (`cartas.astro`): CADA tono RAL y NCS tiene un **corazón** (`.fav-btn`) para añadirlo/quitarlo de favoritos (delegación global; el NCS se genera en cliente, el RAL es estático; ambos con `data-hex/-codigo/-nombre`). Una **barra flotante** (`#fav-bar`) muestra "N colores guardados · Pruébalos en la pared →" y enlaza a `/#color`. Estado del corazón: `.fav-btn[aria-pressed='true']` = disco blanco + corazón rojo relleno (en `global.css`).
  - **Clave compartida `localStorage` `euronova:favcolores`** (array `{h,c,n}`, **máx. 16**, el más nuevo primero). Así el cliente marca varios tonos en las cartas y, al ir al simulador, ya están ahí para probarlos en la pared sin volver a buscar códigos. Verificado el flujo completo por DOM (cartas→guardar→simulador→aplicar; el muro fija el `background-color` inline correcto — en esta sesión el renderer estaba congelado y no avanzaba la transición, pero el inline confirma la lógica).
- **MICRO-ANIMACIONES DE PINTURA (pulido):** lengua visual = "pincelada y colada de pintura en rojo de marca". Keyframes/clases en `global.css`, gated con `prefers-reduced-motion`.
  - **Rótulos "a brocha" se PINTAN al entrar:** `.kicker-brocha` con `clip-path: inset(0 100% 0 0)` → `.pintado` (inset 0) via `transition: clip-path .85s`; un `IntersectionObserver` en `Base.astro` (threshold 0.6) añade `.pintado`. El recorte solo se aplica bajo `.js-anim` (clase que pone el JS en `<html>`), así SIN JS los rótulos se ven completos; sin IO o con reduced-motion, se marcan todos `.pintado`.
  - **Botones rojos se "rellenan de pintura":** clase `.btn-pintura` (un `::before` de `--color-rojo-700` sube en `scaleY` desde abajo al hover/focus). Aplicada a los CTA rojos rellenos (Tintometria "Explora las cartas", cartas "Consúltala"/"Imagina tu pared"/barra flotante, 404).
  - **Favoritos:** al guardar, el corazón "late" (`.late`/`latido`) y la muestra entra con `pop` (`fav-pop-in`) / sale encogiéndose (`fav-shrink-out`); la barra de cartas entra con rebote (`fav-bar-in`, centrada por contenedor flex).
  - **PINCELADA AL CLICAR + CURSOR BROCHA** (en `Base.astro`): al hacer click se PINTA un **trazo de brocha** (texturas reales `assets/pincel/trazo1-5.png`, generadas con PIL: cerdas secas, curva, afinado) donde pinchas; el trazo se "pinta" con un barrido a lo largo (`clip-path` animado por WAAPI, dirección aleatoria) y se disuelve solo (opacidad). Y el **cursor es una brocha** (`assets/pincel/brocha-cursor.png`, foto real recortada): solo con `pointer: fine` se oculta el cursor nativo (`.js-brush.pointer-fino` en `html`) y un contenedor `.brocha-cursor` sigue al ratón (translate en rAF), con un "toque" (`.pressing` = scale/rotate) al pulsar. En táctil no hay cursor pero la pincelada al tocar sí. Todo con `prefers-reduced-motion`.
  - ⚠ ELIMINADOS por decisión del cliente: la **salpicadura de motitas al clicar** (script `salpicarEn`/`splash5`) y la mancha de salpicadura genérica (se sustituyó por la pincelada), la salpicadura al guardar, y el "barrido húmedo" al aplicar color en el muro. Los sprites `assets/manchas/splat*` quedan SIN USO (no borrados). NO reintroducir sin pedírselo.

**Qué hace:** **tinta SOLO la superficie** de su máscara (blanco = pintable) con `multiply` (conserva textura); el acabado añade reflejo. En interior se pinta la pared (sofá, cuadro, lienzo, lámpara intactos); en exterior la fachada (puerta, ventana y trim azul intactos). Verificado con verde/azul + muestreo de máscara. Orientativo.

**Cómo funciona técnicamente:**
- Cada superficie: foto (1000×750) + máscara PNG (1000×750). Capas por panel: `.sim-color` (multiply) + `.sim-sheen` (screen), ambas `.sim-mask` con la máscara inline (`asset()` para evitar warning de Vite), `mask-size:100% 100%`.
- **Máscaras (cómo se generaron, `Python+PIL+numpy`, hay grid helper):** interior/fachada = polígono a mano (huecos rect para cuadro/puerta/ventana) + `GaussianBlur(1.5)`. El RADIADOR se intentó por **umbral de luminancia** (metal claro vs fondo oscuro) recortado a una envolvente — no cuajó por las caras en sombra; ese enfoque de umbral sirve para metales bien iluminados.
- **Truco de realismo:** la zona pintable de cada foto se ACLARA (`lift = 255-(255-base)*k`, k≈0.6–0.9 según lo clara que sea) para que el `multiply` reproduzca fiel también los tonos CLAROS.
- Buscador `#sim-buscar`: normaliza (quita espacios/guiones), busca en `TODOS` = RAL completa (pasada por `define:vars`) + NCS completo (generado en cliente). Chips rápidos y tarjetas de blancos rotos también llaman a `pintar()`.

**Cómo se generó la máscara (por si hay que rehacerla o cambiar la foto):**
1. Foto de Pixabay `sofa-9181557` (pared con textura de llana + sofá gris). Descargar `_1280`.
2. Recorte a `(250,90)–(960,1180)` → redimensionar a 1000×1535.
3. Máscara dibujada A MANO como polígono siguiendo el borde superior del sofá (la detección por umbral falló: dejaba media pared sin pintar). Polígono usado (en 1000×1535):
   `[(0,0),(1000,0),(1000,928),(815,932),(772,922),(650,946),(558,918),(300,936),(212,950),(150,1015),(70,1120),(0,1160)]`, con `GaussianBlur(1.6)` para borde suave.
4. Aclarado de la pared con la máscara: `lift = 255-(255-base)*0.62`, compuesto solo donde `mask>0`.
Todo con Python+PIL+numpy (hay Python 3.12 con Pillow y numpy en el equipo; **NO hay ffmpeg**).

---

## 6. LOGO (historia importante)

Costó MUCHAS iteraciones. Estado final CORRECTO:
- El usuario facilitó el ARTE DEL ROTULISTA (versión sobre blanco) en `Downloads/logo-pinturas-euronova.png` (y capturas en `Pictures/`). Se pasó a transparente por croma (PIL) y se horneó un contorno blanco fino.
- La **E** del cartel (mayúscula con corte diagonal arriba-izquierda y barra central corta) se extrajo aparte de una FOTO frontal (la "e" del arte era minúscula), se enderezó, se suavizó a 3× con antialias real y se integró en el lockup con el MISMO negro y contorno → sin costura.
- Resultado: `public/assets/marca/lockup.png` (872×243) y `word.png`. `LogoEuronova.astro` los usa como `<img>`.
- **La webfont Handel Gothic se ELIMINÓ** del proyecto (el logo es imagen). No hay fuentes comerciales pendientes de licenciar.
- Favicon/apple-touch-icon = la E sobre rojo.
- ⚠ El usuario dijo que "la E aún se nota un poco distinta" pero acordó dejarla APARCADA. Si se retoma: lo ideal es el archivo VECTORIAL original del rotulista (o licenciar Handel Gothic y rehacer en SVG).

---

## 7. INVENTARIO DE ASSETS Y CRÉDITOS (ver `CREDITS-IMAGENES.md`)

- **Logo/marca** (`assets/marca/`, `favicon.png`, `apple-touch-icon.png`): arte del rotulista, marca propia del cliente.
- **Logos Bupisa/Rugoplast** (`assets/marcas/`): oficiales de sus webs. ⚠ Confirmar conformidad de las marcas para usarlos como distribuidor.
- **Fotos categorías** (`assets/img/categorias/`): Pixabay (licencia comercial sin atribución). interior=brush-7170365 (pared roja con banco), fachadas=architecture-2608240 (fachada pastel), esmaltes=metal-2437487 (reja azul/oro), madera=furniture-998265, suelos=tennis-7137976 (recorte de tierra batida con línea), imper=roof-terrace-354906.
- **Nosotros**: `img/tienda/botes.jpg` = color-417694 (estantería de botes, PROVISIONAL).
- **Simulador**: `img/simulador/interior.jpg` (= wall-751342, pared lisa con suelo cambiado, base neutralizada) + `interior-mask.png`; `img/simulador/fachada.jpg` (= door-2096367, cartel y **farol** clonados fuera) + `fachada-mask.png`. Ambas máscaras RGBA con alfa=luminancia (ver §5). (La antigua `salon.jpg`/`salon-mask.png` quedó obsoleta al pasar a superficies Interior/Exterior.)
- **Vídeo cartas**: `assets/video/pigmento.mp4` = Pixabay `58193-487176852` (pigmento en agua sobre negro, 3.5MB) + `pigmento-poster.jpg` (póster/fallback generado). autoplay/muted/loop/playsinline; oculto en `prefers-reduced-motion` (`.video-hero__media{display:none}`).
- **OG**: `assets/og.jpg` (1200×630, logo sobre rojo + claim, generada) para compartir por WhatsApp/redes.
- **Manchas splash**: `assets/manchas/splat2|3-*.png` (Pixabay teñidas). Las usa el efecto de **salpicadura al clicar** en `Base.astro` (pointerdown → mini-mancha real + gotitas con gravedad; respeta reduced-motion). `Mancha.astro` se eliminó; las manchas decorativas de fondo se quitaron (al usuario no le gustaban).

---

## 8. SEO / TÉCNICO YA HECHO
- Metas OG/Twitter + canonical (URLs absolutas con `new URL(asset(...), Astro.site)`), `og:image`.
- JSON-LD `HardwareStore` completo (horario, redes `sameAs`, `makesOffer`, etc.) en `Base.astro`.
- Sitemap (`@astrojs/sitemap`) + `robots.txt`.
- Accesibilidad: `:focus-visible` global, skip-link + `id=main`, contrastes revisados, `aria-live` en el simulador/tintómetro.
- Rendimiento: imágenes recomprimidas (JPEG progresivo), fuentes recortadas, assets muertos purgados. Build con **0 warnings**.
- **PULIDO PREMIUM (animaciones)** en `global.css` + script de `Base.astro`, todo bajo `.js-anim` (sin JS se ve completo) y con `prefers-reduced-motion`: (1) **barra de progreso** roja arriba (`.scroll-progress`, `scaleX` en scroll con rAF); (2) **reveals** mejorados (easing `cubic-bezier(.16,1,.3,1)`) + **`.reveal-img`** = revelado de imagen con `clip-path` + micro-zoom (hero y Nosotros); (3) **entrada escalonada del hero** (`.hero-anim`, se activa con `setTimeout` — fiable, no depende de rAF); (4) **hover de tarjetas** `.pieza` (zoom 1.06 + destello `::after` que cruza + elevación); (5) **contador animado** en cualquier `[data-count]` (el "+20 años" del hero). IO reutilizado para reveals + rótulos + contador.

---

## 9. PENDIENTE

### Solo el CLIENTE puede aportar (bloquea la publicación final):
- **Foto real de la tienda** (mostrador, estanterías, tintométrica) → sustituir `img/tienda/botes.jpg` en `Nosotros.astro`. Es lo que MÁS subiría la confianza.
- **Dirección exacta** del local → afinar texto y `mapsEmbed` (hoy apunta a la ficha de Google por nombre).
- **Sábados** del horario.
- **Carta EUROTREND física o PDF** → digitalizar (pestaña ya existe con aviso "muy pronto"). No existe en digital público.
- Confirmar conformidad de Bupisa/Rugoplast por sus logos.

### Diseño / mejora (no bloquean):
- ✅ (hecho, commit `7549be8`) "Imagina tu pared" verificado y pulido en MÓVIL — ver §5.
- ✅ (hecho, commits `186945e` + `d5e17e4`) **Barrido móvil de TODA la portada** (375/768/1023px). Auditoría de 11 componentes + verificación visual. Arreglado: salpicadura que saltaba al hacer **scroll táctil** (`pointerdown`→`click` en `Base.astro`); objetivos táctiles a ≥40px (pastilla de tel del header, enlaces nav móvil, tel/email de Ubicación, enlaces del Footer, "Ven a vernos"); pista de scroll en el nav móvil; legibilidad de la línea de confianza del Hero y la nota de Marcas; `<br>` de Servicios solo en ≥sm; **foto del Hero ahora visible en móvil**; copy de Servicios 01 sin "una foto" (coherente con la regla comercial). Sin tocar desktop (todo `sm:`/`md:` o `-my` compensado).
- ✅ (hecho, commit siguiente) Foto de **"Suelos"** sustituida: antes tierra batida de tenis; ahora suelo de garaje pintado con flecha y líneas (Pixabay `parking-219767`, 1000×625, 115KB). Lee como "garajes, pavimentos y zonas de paso".
- La E del logo (aparcada, ver §6).
- **Header en tablet (~768px):** el nav reparte los enlaces y el teléfono a 2 líneas y queda algo apretado. Detectado al revisar el simulador; no tocado (fuera de alcance de esa tarea). Candidato a pulir en `Header.astro`.
- Simulador FASE 2 (futuro, NO implementar sin backend seguro): subir foto propia + segmentación. La web es estática en GitHub Pages → **NO poner claves de OpenAI/API en el frontend**. Si se quiere IA real, requiere backend; explicarlo, no exponer secretos.
- Autocrítica pendiente del máster: la foto de "Suelos" es tierra batida (abstracta pero de tenis); el placeholder de Nosotros; posibles microajustes de ritmo.

---

## 10. GOTCHAS (aprendidos a base de golpes)
- **`asset()` SIEMPRE** para rutas de /public (imágenes, mask, links) o 404 en Pages.
- **Rutas de /public en CSS** (`url(...)`) disparan un WARNING de Vite ("didn't resolve at build time"). Evítalo poniendo la url INLINE en el componente con `asset()` (así se hizo con el póster del vídeo y la máscara del simulador). Objetivo: build con 0 warnings.
- **`preview_screenshot` a veces se cuelga (timeout)** con la página sana → `preview_stop` + `preview_start`. Y tras scrolls programáticos largos, las capturas pillan los `.reveal` a media transición (parece la web "apagada"): espera ~1.2s o comprueba `.is-visible` antes de capturar.
- **Vídeos Pixabay**: patrón `cdn.pixabay.com/video/AAAA/MM/DD/ID-HASH_tiny.mp4` (grep la página de búsqueda con UA de navegador). Sin ffmpeg → curar cargando el mp4 en `preview_eval` + screenshot; póster via `canvas.toDataURL` o degradado con PIL.
- **Fotos Pixabay**: scrape `pixabay.com/images/search/<query>/` con UA navegador, grep `cdn.pixabay.com/photo/..._640.jpg`; curar viéndolas con Read; descargar `_1280` para calidad; recomprimir con PIL (q78-84, progressive). Pexels/Unsplash BLOQUEAN el scrape ahora.
- **Windows/Git Bash**: hay Python 3.12 (Pillow, numpy), NO hay ffmpeg. Avisos LF→CRLF en cada commit son normales.
- Al enseñar la web: `?v=N` para saltar caché.
- **Astro 7 usa un DAEMON único de dev-server.** Un segundo `astro dev` no arranca: detecta el que ya corre (p. ej. en 4321) y delega en él (`Dev server already running… SKIP_FORMAT`). Si otra sesión/chat tiene el `preview` en 4321, NO se puede levantar otro `dev`; para conducir el preview con las herramientas `preview_*` en paralelo, arranca un `astro preview --port 4331` sobre el `dist/` (sin daemon) — reconstruye (`npm run build`) tras cada cambio y recarga. El harness lee el `launch.json` del **directorio de trabajo primario** (no el de este repo); hay un `.claude/launch.json` local en euronova-web (server `euronova`, 4321) por si se abre como primario.

---

## 11. CÓMO CONTINUAR (para la nueva sesión)
1. `cd` a la carpeta local, `git pull` (por si acaso), `npm install`, `npm run build` (confirma 0 warnings).
2. Lee `EURONOVA_MASTER_DESIGN_SYSTEM_CLAUDE.md` y este HANDOFF.
3. Levanta preview (`preview_start` name `euronova`) y revisa portada + `/cartas`.
4. **Primera tarea sugerida:** verificar/pulir "Imagina tu pared" en MÓVIL (§9). Luego lo que pida el usuario.
5. Trabaja como Director de Arte senior (no solo "que funcione"). Cambios medidos, sin romper lógica/rutas/estructura. Tras cada cambio: build + verificación en navegador (desktop y móvil) + autocrítica. Commit + push con mensajes claros (co-autoría `Claude`). NO toques datos de contacto salvo para corregir presentación.
6. WhatsApp: mantener UNA sola presencia (flotante). No reintroducir "mándanos foto".

**URL de trabajo:** local `http://localhost:4321/euronova-web` · producción `https://connoreichon.github.io/euronova-web/`.
