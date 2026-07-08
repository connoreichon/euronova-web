# EURONOVA — MASTER DESIGN SYSTEM PARA CLAUDE CODE

**Versión:** 1.0  
**Uso:** copiar este archivo al proyecto y dárselo a Claude Code como directiva de diseño antes de modificar la web.  
**Objetivo:** transformar una web funcional pero con estética de IA/plantilla en una web vendible, limpia, profesional, con personalidad local y aspecto de estudio creativo.

---

# 0. PROMPT DE ARRANQUE PARA PEGAR A CLAUDE

Copia esto primero en Claude Code:

```text
Quiero que trabajes como Director de Arte Senior, UX/UI Senior y Frontend Engineer. Esta web de Euronova ya está a medias y NO quiero que la rompas. Tu misión es mejorar drásticamente la dirección artística, composición, UI, UX, responsive, jerarquía visual, estilo de tarjetas, uso del color, fotografía, tipografía y microinteracciones, sin reescribir el proyecto desde cero.

Antes de tocar código, lee y aplica el documento EURONOVA_MASTER_DESIGN_SYSTEM_CLAUDE.md completo. Si no existe en el proyecto, créalo con el contenido que te voy a pegar a continuación y úsalo como directiva permanente.

Reglas críticas:
1. No rehagas el proyecto desde cero.
2. No cambies framework, rutas, lógica, estructura funcional ni nombres importantes salvo necesidad justificada.
3. No instales librerías visuales o plantillas genéricas.
4. No uses estética SaaS, startup, dashboard, Web3, IA, cards repetidas, sombras exageradas, gradientes cutres ni iconos genéricos decorativos.
5. Elimina la sensación de web generada por IA.
6. Prioriza una estética premium, local, clara, humana y vendible.
7. Haz cambios por fases pequeñas y revisables.
8. Después de cada fase, ejecuta build/lint si existe, revisa responsive y haz autocrítica visual.
9. Si algo puede romper la web, no lo hagas.
10. El resultado debe servir para enseñar a un cliente y poder vender la web.

Empieza haciendo una auditoría visual del estado actual: qué está bien, qué parece IA, qué parece barato, qué sobra, qué falta para venderla, y qué cambios harás por orden de impacto/riesgo. Luego implementa la primera fase.
```

---

# 1. CONTEXTO DEL PROYECTO

La web es para **Pinturas Euronova**, una tienda de pinturas real, familiar, de Las Lagunas de Mijas / zona Mijas-Fuengirola. No es un SaaS, no es una startup tecnológica, no es un portfolio creativo, no es una marca de lujo artificial. Es una tienda de confianza, de barrio, con muchos años de experiencia, que vende pintura, asesoramiento, color a medida, productos para interior, exterior, esmaltes, barnices, suelos, impermeabilización y complementos.

La web NO necesita parecer una app moderna. Necesita parecer una web clara, profesional, sólida y vendible, que haga que una persona piense:

> “Esta tienda sabe lo que hace, puedo escribirles por WhatsApp, preguntar precio o stock y pasarme por allí.”

La web probablemente no tiene tienda online completa. La acción principal es **contactar por WhatsApp**, llamar, consultar productos, pedir color a medida y saber cómo llegar.

La estética debe equilibrar tres cosas:

1. **Confianza local:** negocio real, cercano, con trato humano.
2. **Calidad profesional:** no parecer una plantilla barata.
3. **Claridad comercial:** que el usuario entienda rápido qué venden y cómo contactar.

---

# 2. DIAGNÓSTICO VISUAL ACTUAL SEGÚN CAPTURAS

La web actual tiene una base útil, pero necesita dirección artística. No está mal construida, pero todavía no parece una web lista para vender con seguridad. Los problemas principales detectados son:

## 2.1 Lo que funciona

- El logo tiene presencia y reconocimiento.
- La navegación es simple.
- WhatsApp destaca claramente.
- La web comunica rápido que es una tienda de pinturas.
- Las categorías de productos están claras.
- Las fotos ayudan mucho más que iconos.
- La estructura general es aprovechable.

## 2.2 Lo que no funciona

### A. Las “tiritas” o cintas adhesivas de las tarjetas

Deben eliminarse. Transmiten manualidad, scrapbook, Pinterest, recurso decorativo de plantilla y estética de IA. No aportan marca, no mejoran UX, no transmiten confianza ni calidad. Además, al estar repetidas igual en cada tarjeta, delatan todavía más el recurso.

No sustituirlas por otro adorno similar. La solución no es cambiar la tirita por un clip, chincheta, pegatina o cinta distinta. La solución es crear una composición más profesional.

### B. Tarjetas demasiado repetidas

Todas las tarjetas tienen mismo tamaño, misma forma, misma foto arriba, mismo texto abajo, mismo CTA. Eso crea una cuadrícula funcional, pero poco editorial y poco premium.

La sección debe parecer un escaparate cuidado, no una parrilla automática.

### C. Exceso de rojo

El rojo de marca es potente, pero usarlo como gran fondo principal en demasiada superficie provoca fatiga visual y hace que todo grite. El rojo debe guiar la atención, no cubrir media web. Es mejor usarlo como acento fuerte, navegación, CTA, detalles y momentos de marca, combinado con blancos cálidos, negros suaves y grises/piedra.

### D. Hero poco emocional

El hero actual tiene demasiado protagonismo de logo sobre fondo rojo, pero no suficiente fotografía, ambiente, material, textura o ejemplo visual de resultado. Vende más una estancia pintada, una pared con acabado, una fachada luminosa, una mano mezclando color o un mostrador real que un bloque rojo gigante.

### E. Falta de textura real

Una tienda de pinturas debe transmitir pintura, pigmento, pared, brocha, madera, metal, color, acabado, luz natural. Ahora el diseño se siente demasiado plano.

### F. Aspecto de IA

Se detecta en:

- decoraciones repetidas,
- grids perfectos,
- cards clonadas,
- microcopy genérico,
- espaciados excesivamente homogéneos,
- falta de decisiones editoriales,
- falta de imperfección controlada y de intención humana.

---

# 3. PRINCIPIO GENERAL DE DISEÑO

La web debe dejar de parecer “generada” y empezar a parecer “dirigida”.

Cada sección debe responder a una intención:

- ¿Qué debe entender el usuario aquí?
- ¿Dónde debe mirar primero?
- ¿Qué acción queremos que haga?
- ¿Qué emoción debe sentir?
- ¿Qué elemento sobra?
- ¿Qué elemento parece de plantilla?
- ¿Qué detalle haría que esto pareciera de una empresa real?

No añadas diseño. Quita ruido. La mejora no consiste en llenar la web de efectos, sino en hacer que cada elemento tenga más intención.

---

# 4. OBJETIVO COMERCIAL

Esta web tiene que venderse. Eso cambia el criterio de diseño.

No basta con que sea “bonita”. Debe sentirse:

- confiable,
- local,
- clara,
- rápida,
- responsive,
- fácil de enseñar,
- fácil de entender en 5 segundos,
- visualmente superior a una web vieja de barrio,
- pero sin parecer una startup artificial.

El usuario objetivo puede ser:

- persona que quiere pintar su casa,
- profesional de obra,
- vecino que busca pintura cerca,
- alguien que necesita color a medida,
- cliente que quiere preguntar por WhatsApp si hay stock,
- persona que busca una tienda física y necesita llegar rápido.

Por eso, la web debe optimizar estas acciones:

1. Escribir por WhatsApp.
2. Llamar.
3. Saber qué productos trabajan.
4. Saber dónde está la tienda.
5. Entender que ayudan con color a medida.
6. Sentir que son expertos y cercanos.

---

# 5. DIRECCIÓN ARTÍSTICA EURONOVA

## 5.1 Personalidad visual

La web debe sentirse como:

- una tienda de pinturas seria,
- con experiencia,
- cercana,
- familiar,
- profesional,
- práctica,
- con gusto visual,
- sin exceso de lujo artificial.

Palabras clave:

- limpia,
- cálida,
- honesta,
- editorial,
- local,
- luminosa,
- material,
- clara,
- comercial,
- humana.

No debe sentirse como:

- SaaS,
- startup,
- portfolio de diseñador,
- inmobiliaria premium falsa,
- web3,
- plantilla de IA,
- landing con componentes clonados.

## 5.2 Referencias conceptuales

Usa como inspiración conceptual, sin copiar:

- **Farrow & Ball:** pintura como estilo de vida, color, calma, espacios reales.
- **Aesop:** sobriedad, fotografía cuidada, aire, textos precisos.
- **Apple:** claridad, jerarquía, limpieza, foco.
- **Porsche:** control, fuerza, marca con presencia sin saturar.
- **Leroy Merlin premium:** claridad práctica, categorías fáciles, intención comercial.
- **Revistas de interiorismo:** composición editorial, fotos grandes, ritmo visual.

No copies componentes. Extrae principios.

---

# 6. REGLAS DE SEGURIDAD PARA NO ROMPER EL PROYECTO

Antes de hacer cambios:

1. Inspecciona estructura del proyecto.
2. Localiza componentes principales.
3. Identifica estilos globales.
4. Identifica dependencias existentes.
5. Comprueba si existe Git.
6. Si existe Git, revisa estado con `git status`.
7. No borres archivos sin motivo.
8. No renombres componentes importantes.
9. No cambies rutas.
10. No alteres lógica de navegación ni datos.
11. No cambies textos legales o datos de contacto salvo que sea para corregir presentación.
12. No elimines CTAs importantes.
13. No instales una librería de componentes.
14. No migres a otro framework.
15. No reescribas todo el CSS si puedes intervenir con precisión.

Trabaja por fases pequeñas:

- Fase 0: auditoría.
- Fase 1: tokens visuales.
- Fase 2: hero.
- Fase 3: escaparate/categorías.
- Fase 4: detalles de confianza.
- Fase 5: responsive móvil.
- Fase 6: accesibilidad/rendimiento.
- Fase 7: pulido final.

Después de cada fase:

- revisa en navegador,
- revisa móvil,
- revisa build,
- haz autocrítica,
- corrige lo que parezca IA.

---

# 7. COSAS PROHIBIDAS

No usar:

- tiritas,
- celo,
- washi tape,
- chinchetas,
- stickers decorativos,
- clips falsos,
- sombras exageradas,
- cards flotantes sin sentido,
- gradientes morados/azules tipo IA,
- blobs decorativos,
- iconos outline genéricos como decoración,
- patrones SVG aleatorios,
- ilustraciones vectoriales de personas,
- emojis en UI principal,
- textos genéricos tipo “Soluciones a medida para tus necesidades”,
- hero con demasiado logo duplicado,
- bloques con el mismo layout repetido,
- botones gigantes sin proporción,
- bordes redondeados de 24px por defecto,
- diseño “todo centrado” en desktop,
- fondos oscuros enormes si reducen legibilidad,
- animaciones llamativas,
- parallax innecesario,
- scroll-jacking,
- dependencia de efectos para que la web parezca buena.

Si un elemento solo decora y no comunica, elimínalo.

---

# 8. COLOR

## 8.1 Regla principal

El rojo de Euronova es un color de marca fuerte. Debe usarse como acento, no como pintura de fondo para toda la web.

El rojo debe aparecer en:

- header,
- CTA principal,
- detalles activos,
- enlaces destacados,
- pequeños acentos,
- marcas de sección,
- momentos de identidad.

No debe dominar todas las secciones.

## 8.2 Paleta recomendada

No aplicar a ciegas. Ajustar a los colores reales del logo.

- Rojo marca: usar el actual del proyecto o cercano a `#dc1f2a`.
- Rojo profundo para hover: `#b91620`.
- Negro cálido: `#151010`.
- Blanco cálido: `#faf7f2`.
- Marfil: `#f3eee6`.
- Gris texto: `#4f4642`.
- Gris suave: `#ded6cc`.
- Verde WhatsApp: mantener reconocible, pero sin competir demasiado con el rojo.

## 8.3 Distribución

Regla orientativa:

- 55-65% blancos cálidos / fondos claros.
- 20-30% neutros oscuros o tonos tierra.
- 10-15% rojo de marca.
- 5% colores de producto/fotografía.

No usar todos los colores a la vez. La fotografía ya aporta color.

---

# 9. TIPOGRAFÍA

## 9.1 Objetivo

La tipografía debe hacer que la web parezca diseñada, no montada con defaults.

Debe haber jerarquía clara:

- titulares con intención,
- subtítulos legibles,
- cuerpo cómodo,
- etiquetas pequeñas elegantes,
- CTAs claros.

## 9.2 Reglas

- Máximo dos familias tipográficas.
- No usar demasiados pesos.
- No mezclar estilos sin razón.
- No competir con el logo.
- El logo ya es muy expresivo; la tipografía del resto debe ser más sobria.
- Usar line-height generoso.
- Evitar titulares demasiado largos en una sola línea.
- En móvil, controlar saltos de línea manuales si hace falta.

## 9.3 Estilo recomendado

Para una tienda de pintura, mejor un sistema sobrio:

- Sans principal limpia para UI y textos.
- Posible display muy controlada para pequeños rótulos editoriales, nunca para todo.

Si ya existe una fuente funcional, no cambiarla por cambiar. Primero revisar. Si hay que mejorar:

- Inter / Manrope / Archivo / DM Sans pueden funcionar.
- Evitar fuentes demasiado futuristas.
- Evitar fuentes manuscritas salvo detalles muy puntuales y muy controlados.

La palabra “Escaparate” manuscrita puede funcionar solo si parece intencional y de marca. Si parece rotulador genérico, eliminar.

---

# 10. ESPACIADO Y RITMO

Usar sistema de 8px:

- 4px solo para microajustes.
- 8px.
- 16px.
- 24px.
- 32px.
- 40px.
- 48px.
- 64px.
- 80px.
- 96px.
- 128px.

No usar medidas aleatorias.

## 10.1 Regla de aire premium

Una web premium no necesita estar llena. Necesita respirar.

Aumentar espacios verticales entre secciones si están demasiado pegadas. Reducir elementos internos si hay demasiado ruido.

## 10.2 Anchura de contenido

Controlar max-width. No permitir que textos largos ocupen demasiado ancho.

- Textos: ideal 55-75 caracteres por línea.
- Hero: composición equilibrada, no todo extendido sin intención.
- Cards: no llenar pantalla solo porque hay espacio.

---

# 11. HERO

## 11.1 Problema actual

El hero actual depende demasiado de fondo rojo y logo grande. Hay duplicidad de identidad: logo en header y logo grande dentro del hero. Eso puede funcionar si es una decisión de marca muy clara, pero ahora se siente pesado y antiguo.

## 11.2 Objetivo del hero

En 5 segundos debe comunicar:

1. Somos Pinturas Euronova.
2. Somos tienda física en Las Lagunas de Mijas.
3. Tenemos pintura para interior, exterior, esmaltes, barnices y color a medida.
4. Pregunta por WhatsApp o ven a la tienda.

## 11.3 Dirección recomendada

Crear un hero más editorial y menos cartel rojo.

Opciones posibles:

### Opción A: Hero claro con foto protagonista

- Fondo blanco cálido o marfil.
- Header rojo o blanco según contraste.
- Izquierda: titular fuerte.
- Derecha: foto grande de producto/tienda/pared/color.
- CTA WhatsApp y Cómo llegar.
- Pequeñas píldoras de categorías.
- Logo en header, no duplicado enorme salvo tratamiento muy cuidado.

### Opción B: Hero de marca con franja roja controlada

- Mantener rojo arriba, pero no toda la pantalla.
- Crear bloque rojo con buena composición y foto superpuesta.
- Usar rojo como marco de marca.
- Dejar respirar con fondo claro inmediatamente después.

### Opción C: Hero escaparate local

- Foto real de tienda/productos.
- Titular encima o al lado.
- “Pinturas, color a medida y asesoramiento en Mijas.”
- CTAs claros.
- Detalles de confianza: +20 años, atención por WhatsApp, tienda física.

## 11.4 Copy recomendado

Evitar frases genéricas. Usar frases concretas.

Ejemplos:

- “Pinturas, color a medida y asesoramiento en Las Lagunas de Mijas.”
- “Dinos qué vas a pintar y te ayudamos a elegir acabado, color y producto.”
- “Sin tienda online y sin líos: pregunta por WhatsApp y te lo preparamos en mostrador.”

Mantener el lema si es importante:

- “La vida es del color que tú quieras pintarla”

Pero no dejar que el lema sustituya a la propuesta comercial. El usuario debe entender qué hacen.

## 11.5 CTA

CTA principal: WhatsApp.  
CTA secundario: Cómo llegar / Ver productos / Cartas de colores.

No poner demasiados botones.

---

# 12. HEADER Y NAVEGACIÓN

## 12.1 Objetivo

Debe ser práctico, claro y reconocible.

## 12.2 Reglas

- Logo claro y proporcionado.
- Links visibles pero no excesivos.
- WhatsApp debe destacar.
- Teléfono visible en desktop.
- En móvil, menú simple y CTA persistente si aporta.
- Header sticky solo si no ocupa demasiado.
- Evitar sombras pesadas.
- El header no debe parecer una barra genérica de plantilla.

## 12.3 Ajuste visual

Si el header es rojo, el resto del hero no debe ser una masa roja sin descanso. Si el hero es rojo, considerar header integrado pero muy bien medido.

---

# 13. SECCIÓN “ESCAPARATE” / CATEGORÍAS

## 13.1 Problema actual

La sección de tarjetas con tiritas parece un tablero de Pinterest/manualidades. Hay demasiada repetición.

## 13.2 Objetivo

Debe parecer un escaparate comercial elegante, donde las categorías se entienden rápido y dan ganas de preguntar por WhatsApp.

## 13.3 Eliminar obligatoriamente

- tiritas/celo,
- decoración repetida,
- efecto scrapbook,
- cards iguales sin ritmo.

## 13.4 Nueva composición recomendada

Usar una composición editorial/bento/masonry controlada.

Ejemplo de desktop:

- Card principal grande: “Pintura interior”.
- Dos cards medianas: “Fachadas y exterior”, “Esmaltes”.
- Una card horizontal: “Color a medida”.
- Dos cards pequeñas: “Madera y barnices”, “Impermeabilización”.
- Una card destacada para “Suelos”.

No todas tienen que tener exactamente el mismo tamaño. La variación aporta dirección artística. Pero no debe ser caótica. Debe sentirse intencional.

## 13.5 Estilo de card

Cards limpias:

- foto protagonista,
- borde sutil,
- radio moderado,
- sombra mínima o ninguna,
- texto claro,
- CTA discreto,
- buen contraste.

Alternativa premium:

- Algunas cards sin caja, con imagen + texto debajo.
- Algunas cards con fondo marfil.
- Una card roja muy controlada como acento.

## 13.6 Contenido de card

Cada card debe responder a:

- ¿Qué es?
- ¿Para qué sirve?
- ¿Qué acción hago?

Ejemplo:

**Pintura interior**  
Mate, satinada y lavable para paredes, techos y estancias con uso diario.  
`Preguntar por WhatsApp →`

No usar textos largos.

## 13.7 CTA de tarjetas

No repetir exactamente “Pregunta stock y precio” en todas si visualmente se hace pesado. Se puede mantener si comercialmente es útil, pero con menos peso visual.

Opciones:

- “Consultar por WhatsApp”
- “Preguntar stock”
- “Ver acabados”
- “Te asesoramos”

Usar una estrategia consistente, no aleatoria.

---

# 14. FOTOGRAFÍA E IMÁGENES

## 14.1 Regla principal

La fotografía debe ser el elemento visual principal. Una tienda de pinturas vende resultados, materiales, acabados y confianza.

## 14.2 Tipos de imagen recomendados

Priorizar:

- paredes pintadas con buena luz,
- interiores reales,
- fachadas,
- detalle de brocha/rodillo,
- botes reales bien recortados,
- cartas de colores,
- mostrador o estanterías de tienda,
- mezcla de color,
- textura de pintura,
- madera barnizada,
- metal esmaltado,
- suelos pintados,
- impermeabilización en terraza.

Evitar:

- fotos excesivamente stock sin alma,
- renders falsos,
- imágenes genéricas de bancos de imágenes que no conectan,
- personas vectoriales,
- iconos como sustituto de fotos,
- imágenes con resolución pobre o recortes raros.

## 14.3 Tratamiento de imagen

- Crops intencionales.
- Luz natural.
- No saturar demasiado.
- Mantener coherencia de temperatura.
- Evitar que cada foto tenga un estilo completamente distinto.
- Usar overlays solo si mejoran legibilidad.
- No abusar de filtros.

## 14.4 Si faltan fotos reales

No inventar una web falsa con stock sin avisar. Usar placeholders elegantes solo si hace falta y dejar comentarios claros para reemplazo:

`TODO: reemplazar por foto real de tienda/producto.`

Pero para una demo vendible, usar los recursos actuales de la mejor forma posible.

---

# 15. PRODUCTOS Y BOTES PNG

Si hay imágenes recortadas de botes o productos, deben tratarse como catálogo cuidado.

Reglas:

- mismo tamaño visual,
- misma base,
- misma iluminación,
- mismo margen,
- fondo transparente o fondo claro consistente,
- sombras muy sutiles,
- no deformar,
- no mezclar inclinaciones raras,
- no inventar partes del producto,
- no usar recortes sucios.

Una sección de productos debe parecer catálogo profesional, no collage.

---

# 16. TEXTURAS Y MATERIALIDAD

La web puede ganar mucho si añade textura de forma sutil.

Posibles recursos:

- fondo marfil ligeramente cálido,
- textura de pared casi imperceptible,
- líneas finas inspiradas en cartas de colores,
- bloques de color como muestras de pintura,
- pequeñas barras de color tipo pantonera,
- detalles de brocha muy sutiles,
- cortes editoriales diagonales si encajan con marca.

Pero cuidado: la textura no debe convertir la web en manualidad. Debe ser sobria.

Mejor un detalle excelente que diez adornos mediocres.

---

# 17. COMPONENTES DE CONFIANZA

La web necesita vender confianza rápidamente.

Añadir o mejorar, si ya existen:

- +20 años de experiencia.
- Tienda física en Las Lagunas de Mijas.
- Color a medida.
- Asesoramiento según superficie.
- Consulta por WhatsApp.
- Productos para hogar y profesional.
- Marcas trabajadas si están disponibles.
- Ubicación y horario si está disponible.
- Mapa o cómo llegar.

Estos datos deben integrarse con diseño, no como lista aburrida.

Ejemplo de bloque:

```
+20 años
mezclando color y asesorando a clientes de la zona.
```

```
Color a medida
trae una muestra o dinos el tono que buscas.
```

```
WhatsApp directo
pregunta stock, precio o qué producto usar.
```

---

# 18. UX Y FLUJO

El flujo ideal:

1. Hero: quiénes son + qué hacen + CTA.
2. Categorías: qué venden.
3. Color a medida: diferencial fuerte.
4. Marcas/productos: credibilidad.
5. Asesoramiento: explicación humana.
6. Tienda física: ubicación, horario, cómo llegar.
7. CTA final: WhatsApp + llamada.

No esconder el contacto al final. WhatsApp debe estar visible durante la navegación.

---

# 19. RESPONSIVE MÓVIL

La versión móvil es crítica. Muchos clientes entrarán desde móvil.

## 19.1 Reglas

- Header compacto.
- Logo legible.
- CTA WhatsApp visible.
- Botones grandes pero no enormes.
- Hero claro sin ocupar demasiado alto inútil.
- No meter un logo gigante que empuje todo hacia abajo.
- Tarjetas en una columna o composición simple.
- Evitar grids complejos que se rompan.
- Textos con buen line-height.
- Imágenes bien recortadas.
- No depender de hover.
- WhatsApp flotante no debe tapar contenido.

## 19.2 Checklist móvil

- ¿Entiendo qué venden sin hacer scroll excesivo?
- ¿Puedo escribir por WhatsApp en menos de 5 segundos?
- ¿El teléfono se ve?
- ¿Las cards se leen?
- ¿Las imágenes no pesan demasiado?
- ¿No hay espacios gigantes vacíos?
- ¿No hay textos cortados?
- ¿No hay botones pegados al borde?

---

# 20. MICROINTERACCIONES

Deben ser suaves y casi invisibles.

Permitido:

- hover con elevación de 2-4px,
- cambio de color sutil,
- imagen con scale 1.02 máximo,
- transiciones 180-300ms,
- aparición suave al hacer scroll si ya existe,
- focus states claros.

Prohibido:

- rebotes,
- animaciones exageradas,
- movimientos grandes,
- parallax fuerte,
- elementos que distraen,
- efectos que parezcan plantilla.

La mejor animación es la que se nota solo cuando falta.

---

# 21. ACCESIBILIDAD Y LEGIBILIDAD

No sacrificar lectura por estética.

- Contraste suficiente.
- Tamaño mínimo de cuerpo cómodo.
- Botones táctiles suficientes.
- Focus visible.
- Alt text lógico en imágenes importantes.
- No usar texto sobre imagen sin overlay adecuado.
- No bloquear navegación por animaciones.
- No usar rojo para todo, porque pierde significado.

---

# 22. RENDIMIENTO

Una web vendible debe cargar rápido.

- Optimizar imágenes.
- Usar formatos modernos si el stack lo permite.
- Lazy-load para imágenes fuera del fold.
- No añadir librerías pesadas por estética.
- No usar vídeos pesados salvo necesidad real.
- No instalar sliders innecesarios.
- No meter fuentes con demasiados pesos.

---

# 23. HERRAMIENTAS PERMITIDAS

Solo instalar si aporta valor real y no rompe el proyecto.

Permitido considerar:

- Lighthouse para rendimiento.
- Axe o herramientas de accesibilidad.
- Prettier si ya está en el proyecto o encaja.
- Stylelint si el proyecto lo necesita.
- Playwright solo para capturas/revisión visual si compensa.
- Sharp o scripts de optimización de imágenes si hay muchas imágenes locales y el stack lo permite.

No instalar:

- librerías de componentes visuales,
- plantillas,
- UI kits,
- sliders pesados,
- paquetes decorativos,
- frameworks nuevos,
- Tailwind si el proyecto no lo usa,
- Bootstrap si el proyecto no lo usa,
- animaciones pesadas tipo GSAP salvo necesidad real y justificada.

Antes de instalar:

1. Explica qué instalarías.
2. Comprueba si ya existe alternativa.
3. Evalúa riesgo.
4. Si no es imprescindible, no lo instales.

---

# 24. PROCESO DE TRABAJO OBLIGATORIO PARA CLAUDE

## Fase 0 — Auditoría

Antes de cambiar código, responder:

- Qué archivos componen la UI.
- Qué sistema de estilos usa.
- Qué secciones existen.
- Qué elementos parecen IA.
- Qué elementos parecen baratos.
- Qué elementos sí funcionan.
- Qué cambios tendrán mayor impacto con menor riesgo.
- Qué no tocarás.

## Fase 1 — Tokens visuales

Unificar:

- colores,
- spacing,
- radios,
- sombras,
- tipografía,
- transiciones,
- max-widths.

No hacer rediseño grande aún.

## Fase 2 — Hero

Mejorar el hero para:

- reducir masa roja si es excesiva,
- mejorar jerarquía,
- evitar duplicidad de logo si pesa demasiado,
- dar más protagonismo a foto/beneficio/CTA,
- mantener marca.

## Fase 3 — Escaparate

Eliminar tiritas y sustituir grid IA por composición editorial.

Objetivo: que la sección sea claramente más vendible.

## Fase 4 — Confianza y contacto

Refinar bloques de confianza, color a medida, tienda física, WhatsApp, marcas.

## Fase 5 — Responsive

Revisar móvil y tablet. Ajustar hero, cards, header, CTA flotante.

## Fase 6 — Rendimiento/accesibilidad

Revisar contraste, imágenes, pesos, alt, focus, build.

## Fase 7 — Pulido final

Autocrítica severa:

- qué parece IA todavía,
- qué se puede quitar,
- qué se puede simplificar,
- qué falta para venderla,
- qué haría un diseñador senior.

Implementar los últimos ajustes.

---

# 25. AUT0CRÍTICA OBLIGATORIA

Después de cada fase, Claude debe responder:

```text
AUT0CRÍTICA VISUAL
1. Qué ha mejorado.
2. Qué sigue pareciendo IA.
3. Qué elemento todavía parece barato.
4. Qué he eliminado y por qué.
5. Qué no he tocado para no romper el proyecto.
6. Qué revisaré en móvil.
7. Siguiente microfase recomendada.
```

No basta con decir “listo”. Hay que demostrar criterio.

---

# 26. CRITERIOS DE ACEPTACIÓN

La web estará lista para enseñar/vender cuando cumpla:

## Visual

- No hay tiritas ni adornos de plantilla.
- No hay estética SaaS/IA.
- El rojo está controlado.
- Hay jerarquía clara.
- Hay aire.
- Las imágenes tienen protagonismo.
- Las tarjetas no parecen clonadas.
- La web tiene personalidad local.

## Comercial

- WhatsApp se encuentra rápido.
- Teléfono y ubicación están claros.
- Las categorías se entienden.
- El usuario sabe que puede preguntar stock/precio.
- Color a medida se entiende como diferencial.
- La tienda física queda reforzada.

## Técnica

- Build pasa.
- No hay errores en consola.
- Responsive correcto.
- Imágenes optimizadas razonablemente.
- No se ha roto navegación.
- No se ha cambiado lógica innecesariamente.

## Percepción

Una persona no técnica debe poder decir:

> “Se ve profesional.”

Y un cliente debe poder pensar:

> “Por esto sí pagaría.”

---

# 27. CAMBIOS CONCRETOS PRIORITARIOS PARA EURONOVA

Aplicar con especial prioridad:

1. Eliminar tiritas de las cards.
2. Reducir masa roja del hero o equilibrarla con foto/fondo claro.
3. Evitar duplicidad excesiva del logo.
4. Convertir la sección Escaparate en layout editorial/bento.
5. Mejorar copy de categorías para que suene humano y comercial.
6. Reforzar WhatsApp sin que parezca un botón pegado de plantilla.
7. Añadir más aire entre secciones.
8. Usar color de marca como acento, no como relleno masivo.
9. Añadir bloque fuerte de “Color a medida”.
10. Añadir bloque claro de “Tienda física en Las Lagunas de Mijas”.
11. Revisar móvil a fondo.
12. Hacer una revisión final para eliminar todo lo que huela a IA.

---

# 28. COPY BASE RECOMENDADO

Usar como inspiración, no necesariamente literal.

## Hero

**Pinturas, color a medida y asesoramiento en Mijas.**  
Dinos qué vas a pintar y te ayudamos a elegir el producto, el acabado y el color adecuado.

CTA principal: **Escríbenos por WhatsApp**  
CTA secundario: **Cómo llegar**

## Categorías

**Pintura interior**  
Mate, satinada y lavable para paredes, techos y estancias con uso diario.

**Fachadas y exterior**  
Revestimientos preparados para sol, lluvia y salitre de la costa.

**Esmaltes**  
Acabados resistentes para metal, puertas, radiadores y pequeños trabajos.

**Madera y barnices**  
Barnices, lasures y protectores para cuidar madera interior y exterior.

**Suelos**  
Pinturas y sistemas para garajes, pavimentos y zonas de paso.

**Impermeabilización**  
Cauchos, membranas y soluciones para terrazas, cubiertas y filtraciones.

**Color a medida**  
Preparamos el tono que necesitas y te orientamos según superficie y acabado.

## Bloque confianza

**Más de 20 años ayudando a elegir pintura.**  
En Euronova no solo vendemos botes. Te preguntamos qué vas a pintar, dónde está la superficie y qué acabado buscas para recomendarte una solución realista.

## CTA final

**¿No sabes qué pintura necesitas?**  
Mándanos una foto por WhatsApp o pásate por la tienda y te ayudamos a elegir.

---

# 29. NO CONFUNDIR “PREMIUM” CON “CARO”

Premium no significa:

- lujo falso,
- negro y dorado,
- animaciones complejas,
- textos grandilocuentes,
- fotos irreales,
- minimalismo vacío.

Premium significa:

- claridad,
- confianza,
- orden,
- coherencia,
- buen uso del espacio,
- fotos cuidadas,
- textos concretos,
- diseño sin ruido.

La web debe seguir pareciendo de una tienda real, no de una marca inventada de arquitectura de lujo.

---

# 30. ÚLTIMA INSTRUCCIÓN PARA CLAUDE

No termines hasta que la web pueda enseñarse con orgullo.

Cada vez que dudes entre añadir algo o quitar algo, primero prueba a quitar.

Cada vez que algo parezca bonito pero no ayude a vender, elimínalo.

Cada vez que algo parezca IA, cámbialo.

Cada vez que algo comprometa estabilidad, no lo hagas.

El resultado debe ser una web clara, rápida, responsive, local, humana y profesional, que pueda presentarse como un trabajo vendible.

