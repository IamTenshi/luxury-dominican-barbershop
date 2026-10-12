// Todos los datos del negocio viven aquí, no regados en los componentes.
export const site = {
  name: 'Luxury Dominican Barbershop',
  shortName: 'Luxury Dominican',
  city: 'Loganville, Georgia',
  phone: '+14704481067',
  phoneDisplay: '(470) 448-1067',
  instagram: 'https://www.instagram.com/luxury.dominican_barbershop',
  instagramHandle: '@luxury.dominican_barbershop',
  address: {
    place: 'Loganville Town Center',
    street: '4325 Atlanta Hwy, Suite 12',
    city: 'Loganville, GA 30052',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Luxury+Dominican+Barbershop+4325+Atlanta+Hwy+Loganville+GA+30052',
  hours: [
    { days: 'Lun–Vie', time: '10:00 AM–8:00 PM' },
    { days: 'Sáb', time: '9:00 AM–9:00 PM' },
    { days: 'Dom', time: '10:00 AM–6:00 PM' },
  ],
};

export const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Visítanos', href: '#visitanos' },
  { label: 'Instagram', href: site.instagram },
];

export const hero = {
  eyebrow: 'Barbería dominicana',
  titleA: 'Corte fino.',
  titleB: 'Flow dominicano.',
  description:
    'Fades nítidos, barba detallada y recortes de precisión en Loganville, Georgia. Entra caminando y sal en tu mejor versión.',
  image: '/images/hero-fade.jpg',
  imageAlt: 'Cliente con fade y barba frescos frente al local',
  stickerTop: 'Sin cita',
  stickerBottom: 'entra y siéntate',
};

export const bandItems = [
  'Fades',
  'Barba',
  'Diseños',
  'Niños',
  'Sin cita',
  'Flow garantizado',
];

export const services = {
  kicker: 'Lo que hacemos',
  heading: 'Recorte de verdad.',
  intro:
    'Líneas limpias, acabado cuidadoso y un estilo hecho a tu medida. Nada de cortes de fábrica.',
  items: [
    {
      num: '01',
      title: 'Fades',
      description: 'Degradados suaves y bordes nítidos, terminados con precisión.',
      image: '/images/service-fades.jpg',
      imageAlt: 'Fade con curly top',
    },
    {
      num: '02',
      title: 'Recortes de precisión',
      description: 'Clásicos o modernos, adaptados a tu estilo.',
      image: '/images/service-precision.jpg',
      imageAlt: 'Fade con línea definida',
    },
    {
      num: '03',
      title: 'Barba',
      description: 'Perfilado detallado y líneas limpias para un acabado impecable.',
      image: '/images/service-beard.jpg',
      imageAlt: 'Barba perfilada con fade',
    },
    {
      num: '04',
      title: 'Niños',
      description: 'Servicio paciente y profesional para los más jóvenes.',
      image: '/images/service-kids.jpg',
      imageAlt: 'Recorte infantil',
    },
  ],
};

export const precision = {
  kicker: 'El acabado importa',
  heading: 'Cada línea tiene su propósito.',
  text: 'Desde la primera pasada hasta el último detalle: el trabajo queda limpio, balanceado y dura bien.',
  heritage:
    'La tradición del barbero dominicano: precisión, orgullo y un flow inconfundible en cada recorte.',
  details: [
    { title: '7 barberos profesionales', text: 'Enfocados en los detalles' },
    { title: 'Todas las edades', text: 'Hombres y niños bienvenidos' },
  ],
  image: '/images/precision-work.jpg',
  imageAlt: 'Barbero trabajando con precisión',
};

export const work = {
  kicker: 'Trabajos',
  heading: 'Nuestro trabajo.',
  intro: 'Recortes reales del taller. Sin filtros, sin poses.',
  images: [
    { src: '/images/gallery-1.jpg', alt: 'Fade con textura' },
    { src: '/images/gallery-2.jpg', alt: 'Recorte con estilo' },
    { src: '/images/gallery-3.jpg', alt: 'Recorte infantil con fade' },
  ],
};

export const visit = {
  kicker: 'Caele',
  heading: 'Tu silla te espera.',
  lead: 'Aceptamos walk-ins todo el día. Llama antes si quieres confirmar disponibilidad.',
  image: '/images/visit-storefront.jpg',
  imageAlt: 'Frente de Luxury Dominican Barbershop',
  imageCaption: 'Nuestro local en Loganville, GA.',
};

export const footer = {
  titleA: 'Queda nítido.',
  titleB: 'Sal con flow.',
  callShop: 'Llama al taller',
};

export const rating = {
  stars: '4.8',
  reviews: '88',
  source: 'Google',
};

export const testimonials = {
  kicker: 'Reseñas',
  heading: 'Clientes satisfechos.',
  intro:
    'Más de 5,000 clientes satisfechos. En Google: 4.8 de 5 con 88 reseñas. Esto dicen quienes ya pasaron por la silla:',
  items: [
    {
      text: 'Destacan a Roberto por un corte nítido y de calidad.',
      source: 'Reseñas de Google',
    },
    {
      text: 'Dicen que Edwin hace un gran corte de pelo.',
      source: 'Reseñas de Google',
    },
  ],
};
