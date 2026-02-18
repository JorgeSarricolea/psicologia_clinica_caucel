/**
 * Contenido del negocio – Psicología Clínica y Salud.
 * Centralizar aquí toda la información para no hardcodear en componentes.
 * Las secciones se muestran u ocultan según la presencia de datos (opcionales).
 */

export const site = {
  name: 'Psicología Clínica y Salud',
  shortName: 'PsicClínica',
  tagline: 'Atención y diagnóstico psicológico en Caucel, Mérida',
  description:
    'Espacio profesional de psicología clínica con atención integral, humana y personalizada. Un lugar de reflexión, confianza y bienestar emocional.',
  rating: 5.0,
  reviewCount: 82,
};

export const contact = {
  phone: '999 135 0110',
  phoneTel: 'tel:+529991350110',
  whatsapp: 'https://wa.me/529991350110',
  address: '97314 SOL, Caucel, 97314 Mérida, Yuc.',
  plusCode: '272P+QW Mérida, Yucatán',
  website: 'https://psicarolina888.wixsite.com',
  facebook: null,
  email: null,
};

export const hours = [
  { days: 'Lunes a viernes', hours: '9:00 a.m. – 9:00 p.m.' },
  { days: 'Sábado', hours: '9:00 a.m. – 2:00 p.m.' },
  { days: 'Domingo', hours: 'Cerrado' },
];

export const mapEmbed = {
  enabled: true,
  iframeSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14899.06847151383!2d-89.73176171284176!3d21.00197030000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f560bd7b2e733b1%3A0x82780efd9d7068ae!2sPsicolog%C3%ADa%20Cl%C3%ADnica%20y%20Salud.%20Atenci%C3%B3n%20y%20diagn%C3%B3stico%20psicol%C3%B3gico%20Caucel.!5e0!3m2!1ses-419!2smx!4v1771431485839!5m2!1ses-419!2smx',
  title: 'Ubicación de Psicología Clínica y Salud en Google Maps',
};

export const services = [
  { icon: 'Psychology', title: 'Psicología clínica', text: 'Atención profesional para el cuidado de tu salud mental y emocional.' },
  { icon: 'Favorite', title: 'Terapia de pareja', text: 'Acompañamiento para fortalecer la comunicación y el vínculo en pareja.' },
  { icon: 'Assessment', title: 'Diagnóstico psicológico', text: 'Evaluación y diagnóstico integral para un tratamiento personalizado.' },
  { icon: 'Groups', title: 'Habilidades sociales', text: 'Desarrollo de herramientas para mejorar tus relaciones interpersonales.' },
  { icon: 'SelfImprovement', title: 'Regulación emocional', text: 'Técnicas para el control y manejo saludable de tus emociones.' },
  { icon: 'Translate', title: 'Atención multilingüe', text: 'Asistencia disponible en otros idiomas para tu comodidad.' },
];

export const features = [
  {
    icon: 'AccessibleForward',
    title: 'Entrada accesible',
    text: 'Entrada accesible para personas en silla de ruedas.',
  },
  {
    icon: 'Diversity3',
    title: 'Amigable con LGBTQ+',
    text: 'Espacio respetuoso e inclusivo para todas las personas.',
  },
  {
    icon: 'Transgender',
    title: 'Espacio seguro trans',
    text: 'Espacio seguro para personas transgénero.',
  },
  {
    icon: 'Verified',
    title: 'Calificación 5.0',
    text: '82 opiniones con calificación perfecta avalan nuestra atención.',
  },
];

export const planning = {
  enabled: true,
  title: 'Agenda tu cita',
  description:
    'Se requiere cita previa para garantizar una atención personalizada. Nos adaptamos a tu horario, incluyendo fines de semana y horario nocturno.',
  ctaText: 'Agendar por WhatsApp',
  ctaHref: 'https://wa.me/529991350110',
};

export const payments = {
  enabled: false,
};

export const parking = {
  enabled: true,
  title: 'Estacionamiento',
  description:
    'Contamos con estacionamiento gratuito y estacionamiento en la calle disponible para tu comodidad.',
};

export const testimonials = [
  {
    quote: 'Con Mónica he encontrado un espacio en el que me es posible compartir lo que en mi vida cotidiana se presenta. Es un lugar de reflexión y retroalimentación que invita a la paz.',
    author: 'Marco A.',
  },
  {
    quote: 'Después de buscar una buena atención integral, completa y humana encontré este lugar. Lo recomiendo 100%. Se acoplan al horario que uno solicite.',
    author: null,
  },
  {
    quote: 'Me ha ayudado a desarrollar habilidades sociales, control y regulación de las emociones. Me siento escuchado, siempre con una opinión y postura neutral.',
    author: 'Jarod G.',
  },
  {
    quote: 'Muy buena psicóloga, muy acertada, profesional y humana.',
    author: null,
  },
  {
    quote: 'Excelente servicio y terapia de pareja.',
    author: null,
  },
  {
    quote: 'Altamente recomendada, ella muy puntual, muy preparada.',
    author: null,
  },
];

export const logo = '/logo-adipsi.png';

export const galleryImages = [
  { src: '/consultorio-infantil.png', alt: 'Consultorio de terapia infantil' },
  { src: '/consultorio.png', alt: 'Consultorio de psicología con certificaciones' },
];

export const promoBanner = {
  enabled: true,
  image: '/terapia-lenguaje.png',
  alt: 'Terapia de Lenguaje para niños - ADIPSI',
  title: 'Terapia de Lenguaje para niños',
  description: 'Evaluación, diagnóstico e intervención profesional. Nuevo servicio disponible en ADIPSI.',
  ctaText: 'Solicitar información',
  ctaHref: 'https://wa.me/529991350110?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20terapia%20de%20lenguaje',
};

export const hero = {
  backgroundImage:
    'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1920&q=85',
  subtitle: site.tagline,
  ctaPrimary: { text: 'Agendar cita', href: 'https://wa.me/529991350110' },
  ctaSecondary: { text: 'Conocer servicios', href: '#servicios' },
};
