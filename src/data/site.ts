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
  // PENDIENTE: confirmar dirección exacta del local con el cliente.
  // Street View sitúa la tienda en la esquina Camino de Coín / Calle Yedra.
  // La dirección del registro mercantil (C/ Río Corbones 8) parece solo administrativa.
  direccion: 'Camino de Coín, esquina C/ Yedra',
  ciudad: '29651 Las Lagunas de Mijas, Málaga',
  zona: 'Mijas Costa · Fuengirola · Costa del Sol',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Pinturas+Euronova+Las+Lagunas+de+Mijas',
  // URL de embed del mapa: rellenar cuando el cliente confirme la dirección.
  mapsEmbed: '',

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

// --- Categorías de producto (escaparate, sin tienda online) ------------------
// `img`: foto real (Pixabay, uso comercial sin atribución — ver CREDITS-IMAGENES.md).
// `acabado`: etiqueta pequeña que acompaña al nombre en la ficha.
export const categorias = [
  {
    nombre: 'Pintura interior',
    acabado: 'Mate y satinado',
    desc: 'Mate, satinada y lavable para paredes, techos y estancias con uso diario.',
    img: '/assets/img/categorias/interior.jpg',
    alt: 'Pared interior pintada de rojo intenso con un banco delante'
  },
  {
    nombre: 'Fachadas y exterior',
    acabado: 'Liso y rugoso',
    desc: 'Revestimientos preparados para sol, lluvia y salitre de la costa.',
    img: '/assets/img/categorias/fachadas.jpg',
    alt: 'Fachada mediterránea en tonos pastel con carpintería azul'
  },
  {
    nombre: 'Esmaltes',
    acabado: 'Brillo lacado',
    desc: 'Acabados resistentes para metal, puertas, radiadores y pequeños trabajos.',
    img: '/assets/img/categorias/esmaltes.jpg',
    alt: 'Reja de forja esmaltada en azul con remates dorados'
  },
  {
    nombre: 'Madera y barnices',
    acabado: 'Veta satinada',
    desc: 'Barnices, lasures y protectores para cuidar madera interior y exterior.',
    img: '/assets/img/categorias/madera.jpg',
    alt: 'Salón con muebles de madera barnizada'
  },
  {
    nombre: 'Suelos',
    acabado: 'Pulido y epoxi',
    desc: 'Pinturas y sistemas para garajes, pavimentos y zonas de paso.',
    img: '/assets/img/categorias/suelos.jpg',
    alt: 'Pavimento deportivo de tierra batida con línea blanca pintada'
  },
  {
    nombre: 'Impermeabilización',
    acabado: 'Caucho elástico',
    desc: 'Cauchos, membranas y soluciones para terrazas, cubiertas y filtraciones.',
    img: '/assets/img/categorias/imper.jpg',
    alt: 'Terraza impermeabilizada en blanco con tumbonas y vistas'
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
    desc: 'Tintometría en tienda: trae una muestra, una foto o una idea y salimos con tu color mezclado en minutos.'
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
