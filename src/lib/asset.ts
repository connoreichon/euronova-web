// Devuelve la ruta de un recurso de /public respetando el `base` de Astro.
// En local (base "/")  -> "/assets/x.png"
// En GitHub Pages      -> "/euronova-web/assets/x.png"
// Úsalo siempre para imágenes y enlaces internos: asset('/assets/foto.png')
export const asset = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
};
