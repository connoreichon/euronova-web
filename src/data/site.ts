// ============================================================================
//  DATOS DEL CLIENTE — edita SOLO este archivo para adaptar la web.
//  Todo lo demás (componentes, estilos) lee de aquí. Ver CAMBIAR_DATOS_CLIENTE.md
// ============================================================================

export const site = {
  // --- Identidad ------------------------------------------------------------
  nombre: 'Pinturas Euronova',
  nombreCorto: 'Euronova',
  reclamo: 'Tienda de pinturas en Las Lagunas de Mijas',
  titularHero: 'EURONOVA',
  kickerHero: 'PINTURAS',
  eslogan: 'La vida es del color que tú quieras pintarla',
  subtituloHero:
    'Tu tienda de pinturas en Las Lagunas de Mijas. Más de 20 años mezclando el color exacto para tu casa o tu obra.',
  fundadoEn: 2003, // PENDIENTE: confirmar año real de apertura ("+20 años")

  // --- Contacto -------------------------------------------------------------
  telefono: '951 23 64 18',
  telefonoLink: '+34951236418',
  // WhatsApp real de la tienda (solo dígitos con prefijo de país, sin "+").
  whatsapp: '34686057191',
  whatsappMensaje: 'Hola, me gustaría hacer una consulta.',
  // PENDIENTE: el dominio euronova.es está caído — confirmar si este email sigue activo.
  email: 'info@euronova.es',

  // --- Ubicación ------------------------------------------------------------
  // Dirección CONFIRMADA por el cliente (coincide con la ficha de Google Maps,
  // la de las reseñas). El mapa (mapsEmbed) resuelve por nombre de negocio, así
  // que ya cae en el pin correcto con las reseñas; no hace falta tocarlo.
  direccion: 'C/ Río Almanzora, 2',
  ciudad: '29651 Las Lagunas de Mijas, Málaga',
  zona: 'Mijas Costa · Fuengirola · Costa del Sol',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Pinturas+Euronova+Las+Lagunas+de+Mijas',
  // Mapa embebido apuntando a la FICHA de Google del negocio (búsqueda por
  // nombre, sin API key). Cuando el cliente confirme la dirección exacta,
  // se puede cambiar por el embed oficial de esa ubicación (ver CAMBIAR_DATOS).
  mapsEmbed:
    'https://maps.google.com/maps?q=Pinturas%20Euronova%20Las%20Lagunas%20de%20Mijas&z=16&output=embed',

  // --- Horario --------------------------------------------------------------
  horario: [
    { dia: 'Lunes a Viernes', horas: '7:30 – 13:30 · 16:00 – 19:30' },
    // PENDIENTE: confirmar sábados con el cliente.
    { dia: 'Sábado', horas: 'Consultar por teléfono' },
    { dia: 'Domingo', horas: 'Cerrado', cerrado: true }
  ],
  avisoHorario: 'Abrimos a las 7:30: pásate antes de entrar a la obra.',

  // --- Redes ----------------------------------------------------------------
  redes: {
    instagram: 'https://www.instagram.com/pinturas_euronova/',
    facebook:
      'https://www.facebook.com/people/Tienda-De-Pinturas-Euronova/100063686614704/'
  },

  // --- Legal ----------------------------------------------------------------
  razonSocial: 'Tienda de Pinturas Euronova S.L.',
  anioActual: new Date().getFullYear()
};

// --- Marcas distribuidas -----------------------------------------------------
// Los logos son los oficiales descargados de las webs de cada fabricante.
// AVISO: confirmar con el cliente que tiene conformidad de las marcas para
// usarlos como distribuidor (uso habitual, pero mejor por escrito).
export const marcas = [
  {
    nombre: 'Bupisa Pinturas',
    logo: '/assets/marcas/bupisa.png',
    claim: 'Fabricante de Burgos. Plásticas, esmaltes, fachadas, impermeabilizantes y protección de madera.',
    web: 'https://www.bupisa.com/',
    tema: 'claro' // el logo (azul marino/rojo) necesita fondo claro
  },
  {
    nombre: 'Rugoplast · Pinturas Cabello',
    logo: '/assets/marcas/rugoplast.webp',
    claim: 'Fabricante de Granada, +40 años. Esmaltes, barnices, suelos y bases tintométricas.',
    web: 'https://www.rugoplast.com/',
    tema: 'oscuro' // el logo oficial es blanco: necesita fondo oscuro
  }
];

// --- Categorías de producto (escaparate por categorías) ----------------------
// Cada categoría abre su ESCAPARATE en /productos/[slug]/ con sus productos.
// `img`: foto real (Pixabay, uso comercial — ver CREDITS-IMAGENES.md).
// `productos`: catálogo de MUESTRA (sin precio; el cliente cambia fotos y datos).
//   Cada producto: nombre, tipo (etiqueta), swatch (color de cabecera provisional
//   hasta tener foto), img (opcional; si existe manda sobre el swatch).
export const categorias = [
  {
    slug: 'interior-exterior',
    nombre: 'Pintura interior y exterior',
    acabado: 'Plásticas · mate · satinado',
    desc: 'Plásticas para paredes y techos, lavables y de gran cubrición, para interior y también fachada.',
    img: '/assets/img/categorias/interior.jpg',
    alt: 'Pared interior pintada de rojo intenso con un banco delante',
    intro: 'Plásticas de interior y exterior: mate, satinada y lavable, con buena cubrición y color a medida.',
    productos: [
      { nombre: 'Plástica mate interior', tipo: 'Interior · mate', swatch: '#ece6da', desc: 'Gran cubrición y acabado uniforme para paredes y techos.' },
      { nombre: 'Plástica satinada lavable', tipo: 'Interior · satinado', swatch: '#dfd6c4', desc: 'Resiste roces y limpieza; ideal pasillos y zonas de paso.' },
      { nombre: 'Antimoho baño y cocina', tipo: 'Interior · antihumedad', swatch: '#e7ede9', desc: 'Formulada para ambientes con vapor y condensación.' },
      { nombre: 'Plástica exterior lisa', tipo: 'Exterior · lisa', swatch: '#e3ddcf', desc: 'Transpirable y resistente al sol y la lluvia.' },
      { nombre: 'Color a medida (tintometría)', tipo: 'Cualquier RAL / NCS', swatch: '#c1121c', desc: 'Te la mezclamos en tienda al tono exacto que quieras.' }
    ]
  },
  {
    slug: 'exterior',
    nombre: 'Pintura de exterior',
    acabado: 'Fachadas · liso y rugoso',
    desc: 'Revestimientos preparados para el sol, la lluvia y el salitre de la costa.',
    img: '/assets/img/categorias/fachadas.jpg',
    alt: 'Fachada mediterránea en tonos pastel con carpintería azul',
    intro: 'Todo para fachada: lisos, rugosos, monocapa y elastoméricos que aguantan el clima de la costa.',
    productos: [
      { nombre: 'Fachada lisa', tipo: 'Exterior · liso', swatch: '#e8e2d4', desc: 'Acabado liso y transpirable para muros en buen estado.' },
      { nombre: 'Revestimiento rugoso / pétreo', tipo: 'Exterior · textura', swatch: '#d8cfbc', desc: 'Cubre pequeñas imperfecciones y da textura.' },
      { nombre: 'Monocapa fachadas', tipo: 'Exterior · monocapa', swatch: '#efe9dc', desc: 'Impermeable al agua de lluvia, en una sola mano.' },
      { nombre: 'Elastomérica anticarbonatación', tipo: 'Exterior · elástica', swatch: '#e2ddd2', desc: 'Puentea microfisuras y protege el hormigón.' },
      { nombre: 'Fijador / imprimación exterior', tipo: 'Exterior · fondo', swatch: '#d5cebd', desc: 'Consolida el soporte antes de pintar.' }
    ]
  },
  {
    slug: 'esmaltes',
    nombre: 'Esmaltes al disolvente y al agua',
    acabado: 'Brillo · satinado · mate',
    desc: 'Acabados resistentes para metal, madera, puertas, rejas y radiadores.',
    img: '/assets/img/categorias/esmaltes.jpg',
    alt: 'Reja de forja esmaltada en azul con remates dorados',
    intro: 'Esmaltes al disolvente y al agua para un acabado duro y bonito en metal, madera y carpintería.',
    productos: [
      { nombre: 'Esmalte sintético brillo', tipo: 'Disolvente · brillo', swatch: '#1f6fb2', desc: 'Máxima dureza y brillo para interior y exterior.' },
      { nombre: 'Esmalte al agua satinado', tipo: 'Al agua · satinado', swatch: '#8aa0b8', desc: 'Poco olor, secado rápido y no amarillea.' },
      { nombre: 'Esmalte antioxidante (forja)', tipo: 'Metal · antióxido', swatch: '#2b2f33', desc: 'Protege y decora rejas, vallas y elementos de hierro.' },
      { nombre: 'Esmalte para radiadores', tipo: 'Alta temperatura', swatch: '#f0ece2', desc: 'Aguanta el calor sin amarillear.' },
      { nombre: 'Imprimación multisuperficie', tipo: 'Fondo · agarre', swatch: '#c9c2b4', desc: 'Buen agarre sobre metal, PVC, azulejo y melamina.' }
    ]
  },
  {
    slug: 'impermeabilizantes',
    nombre: 'Impermeabilizantes',
    acabado: 'Caucho · membranas',
    desc: 'Cauchos, membranas y soluciones para terrazas, cubiertas y filtraciones.',
    img: '/assets/img/categorias/imper.jpg',
    alt: 'Terraza impermeabilizada en blanco con tumbonas y vistas',
    intro: 'Soluciones contra el agua: cauchos elásticos, membranas y selladores para terrazas y cubiertas.',
    productos: [
      { nombre: 'Caucho acrílico para terrazas', tipo: 'Transitable · elástico', swatch: '#eef0ef', desc: 'Impermeabiliza y se puede pisar; refleja el calor.' },
      { nombre: 'Membrana de poliuretano', tipo: 'Alta resistencia', swatch: '#d9d5cc', desc: 'Gran elasticidad y durabilidad en cubiertas.' },
      { nombre: 'Impermeabilizante fibrado', tipo: 'Refuerzo · fibras', swatch: '#cfcabd', desc: 'Con fibras para puntos críticos y encuentros.' },
      { nombre: 'Sellador de fisuras', tipo: 'Reparación', swatch: '#e6e2d8', desc: 'Sella grietas y juntas antes de impermeabilizar.' },
      { nombre: 'Puente de unión / imprimación', tipo: 'Fondo', swatch: '#c6c0b1', desc: 'Mejora la adherencia sobre soportes difíciles.' }
    ]
  },
  {
    slug: 'madera-barnices',
    nombre: 'Maderas y barnices',
    acabado: 'Barniz · lasur · protector',
    desc: 'Barnices, lasures y protectores para cuidar la madera de interior y exterior.',
    img: '/assets/img/categorias/madera.jpg',
    alt: 'Salón con muebles de madera barnizada',
    intro: 'Para proteger y realzar la madera: barnices, lasures y aceites de interior y de intemperie.',
    productos: [
      { nombre: 'Barniz sintético', tipo: 'Interior/exterior · brillo', swatch: '#a9743e', desc: 'Protege y da brillo respetando la veta.' },
      { nombre: 'Lasur protector exterior', tipo: 'Intemperie · poro abierto', swatch: '#8a5a2e', desc: 'Deja respirar la madera y la protege del sol.' },
      { nombre: 'Barniz al agua interior', tipo: 'Al agua · bajo olor', swatch: '#c39a63', desc: 'No amarillea, secado rápido, poco olor.' },
      { nombre: 'Aceite / protector para madera', tipo: 'Nutrición', swatch: '#7a4a28', desc: 'Nutre e hidrata suelos y muebles de madera.' },
      { nombre: 'Tapaporos / imprimación madera', tipo: 'Fondo', swatch: '#cbb48c', desc: 'Sella el poro para un acabado más liso.' }
    ]
  },
  {
    slug: 'ecologicas',
    nombre: 'Pinturas ecológicas',
    acabado: 'Base agua · bajo olor',
    desc: 'Pinturas al agua, minerales y a la cal, de bajo olor y bajas emisiones.',
    img: '/assets/img/categorias/ecologicas.jpg',
    alt: 'Bote de pintura ecológica con hoja verde sobre fondo claro',
    intro: 'Opciones más sostenibles: base agua, minerales y a la cal, con bajo olor y bajas emisiones.',
    productos: [
      { nombre: 'Pintura mineral al silicato', tipo: 'Mineral · transpirable', swatch: '#e9ead9', desc: 'Muy transpirable y duradera, ideal para fachada.' },
      { nombre: 'Plástica ecológica bajo olor', tipo: 'Interior · base agua', swatch: '#eef0e4', desc: 'Bajas emisiones (COV), apta para dormitorios.' },
      { nombre: 'Pintura a la cal', tipo: 'Natural · mate', swatch: '#f0ede2', desc: 'Acabado mate natural y antimoho por naturaleza.' },
      { nombre: 'Esmalte al agua ecológico', tipo: 'Madera/metal · agua', swatch: '#dfe6d8', desc: 'Acabado esmalte con muy poco olor.' },
      { nombre: 'Imprimación base agua', tipo: 'Fondo · agua', swatch: '#d9ddca', desc: 'Fondo de bajo olor para preparar el soporte.' }
    ]
  }
];
// Complementos (sin protagonismo, por decisión de negocio: el foco es la pintura)
export const complementosNota =
  'Y además, brochas, rodillos, cintas y algunos accesorios y complementos para rematar el trabajo.';

// --- Tintometría: colores reales de carta (RAL / NCS) para el panel ----------
// Hex aproximado en pantalla; el código es el que se pide en tienda.
export const coloresTinto = [
  { nombre: 'Gris antracita', codigo: 'RAL 7016', hex: '#383e42' },
  { nombre: 'Blanco puro', codigo: 'RAL 9010', hex: '#f1ece1' },
  { nombre: 'Rojo tráfico', codigo: 'RAL 3020', hex: '#c1121c' },
  { nombre: 'Azul genciana', codigo: 'RAL 5010', hex: '#0e518d' },
  { nombre: 'Marfil claro', codigo: 'RAL 1015', hex: '#e6d2b5' },
  { nombre: 'Verde pálido', codigo: 'RAL 6021', hex: '#89ac76' },
  { nombre: 'Blanco cálido', codigo: 'NCS S 0502-Y', hex: '#f4efe2' },
  { nombre: 'Pardo grisáceo', codigo: 'NCS S 7005-Y20R', hex: '#4b443c' }
];

// --- Servicios (numerados, editorial) ----------------------------------------
export const servicios = [
  {
    num: '01',
    nombre: 'Color a medida',
    desc: 'Tintometría en tienda: trae una muestra o dinos el tono que buscas y salimos con tu color mezclado en minutos.'
  },
  {
    num: '02',
    nombre: 'Asesoramiento de verdad',
    desc: 'Te decimos qué producto necesita tu pared, cuánta pintura comprar y cómo aplicarla. Sin venderte de más.'
  },
  {
    num: '03',
    nombre: 'Atención al profesional',
    desc: 'Abrimos a las 7:30, con stock real y precio de profesional. Los pintores de la zona ya nos conocen.'
  },
  {
    num: '04',
    nombre: 'Reparto local',
    // PENDIENTE: confirmar con el cliente si hace reparto y en qué zona.
    desc: 'Si no puedes pasarte, consúltanos: servimos pedidos en la zona de Mijas y Fuengirola.'
  }
];
