# material-cliente/

Carpeta para dejar **fotos y archivos del cliente** (los que se pegan en el chat NO
se guardan en disco, así que hay que dejarlos aquí para poder procesarlos).

## Cómo usar
1. Guarda aquí las fotos (JPG/PNG), con nombres claros. Ejemplos para el carrusel
   "Mejores productos":
   - `rugoplast-pistas.jpg`
   - `bupisa-senalizacion-deportivos.jpg`
   - `bupisa-nakar.jpg`
   - `bupisa-p20-supercubriente.jpg`
   - `tixol-nature.jpg`
   - `drocasa-fachadas.jpg`
2. Avísame y las **recorto/digitalizo** (bote protagonista, sin asa o con asa hacia
   atrás, tamaño estándar) → salen a `public/assets/productos/` y se rellenan en
   `src/data/site.ts` (array `productosDestacados`).

> Nota: esta carpeta puede quedar fuera del deploy; es solo material de origen.
