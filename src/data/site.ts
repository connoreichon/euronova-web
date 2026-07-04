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
  subtituloHero:
    'Tu tienda de pinturas en Las Lagunas de Mijas. Más de 20 años mezclando el color exacto para tu casa o tu obra.',
  fundadoEn: 2003, // PENDIENTE: confirmar año real de apertura ("+20 años")

  // --- Contacto -------------------------------------------------------------
  telefono: '951 23 64 18',
  telefonoLink: '+34951236418',
  // PLACEHOLDER: sustituir por el WhatsApp real del cliente (solo dígitos con
  // prefijo de país, sin "+"). Este número es FICTICIO a propósito.
  whatsapp: '34600000000',
  // PLACEHOLDER: mensaje prerelleno — ajustar cuando el cliente confirme tono.
  whatsappMensaje:
    'Hola, Pinturas Euronova. Quería preguntar por un color / precio / stock.',
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
// `tex`: clase CSS de textura del material (definidas en global.css).
// `tono`: 'claro' u 'oscuro' según el color del texto que necesita la textura.
export const categorias = [
  {
    nombre: 'Pintura interior',
    desc: 'Plásticas mate y satinadas, antimanchas y antihumedad para paredes y techos.',
    tex: 'tex-interior',
    tono: 'oscuro'
  },
  {
    nombre: 'Fachadas y exterior',
    desc: 'Revestimientos lisos y rugosos que aguantan el sol y el salitre de la costa.',
    tex: 'tex-fachada',
    tono: 'oscuro'
  },
  {
    nombre: 'Esmaltes',
    desc: 'Sintéticos y al agua, brillo, satinado o mate. Para metal, puertas y radiadores.',
    tex: 'tex-esmalte',
    tono: 'claro'
  },
  {
    nombre: 'Madera y barnices',
    desc: 'Barnices, lasures y protectores que alimentan la madera por dentro y por fuera.',
    tex: 'tex-madera',
    tono: 'claro'
  },
  {
    nombre: 'Suelos',
    desc: 'Pintura para suelos, garajes y pavimentos deportivos, al agua o epoxi.',
    tex: 'tex-suelo',
    tono: 'oscuro'
  },
  {
    nombre: 'Impermeabilización',
    desc: 'Caucho y membranas para terrazas y cubiertas. Se acabaron las goteras.',
    tex: 'tex-imper',
    tono: 'claro'
  }
];
// Complementos (sin protagonismo, por decisión de negocio: el foco es la pintura)
export const complementosNota =
  'Y además, brochas, rodillos, cintas y algunos accesorios y complementos para rematar el trabajo.';

// --- Tintometría: colores de muestra del panel interactivo -------------------
export const coloresTinto = [
  { nombre: 'Rojo Euronova', hex: '#d2262b' },
  { nombre: 'Albero andaluz', hex: '#d9a441' },
  { nombre: 'Azul añil', hex: '#2a5cad' },
  { nombre: 'Verde oliva', hex: '#5f6b3a' },
  { nombre: 'Teja', hex: '#a63d2f' },
  { nombre: 'Lino claro', hex: '#e7e1d3' },
  { nombre: 'Gris piedra', hex: '#8d8a82' },
  { nombre: 'Blanco roto', hex: '#f4efe6' }
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
