export const esCopy = {
  sections: {
    cover: {
      title: "Heber Álvarez",
      subtitle: "Portafolio frontend",
      intro: `
Diseño y desarrollo interfaces web con foco en detalle, performance y una experiencia de usuario limpia y moderna.
      `,
    },
    about: {
      title: "Quién soy",
      profile: "Perfil profesional",

      intro: `
Soy un desarrollador frontend enfocado en crear interfaces claras, modernas y 
centradas en la experiencia del usuario. Me apasiona transformar requerimientos 
en productos funcionales, pulidos y con una ejecución visual precisa.
      `,

      experience: `
Durante más de dos años he construido productos digitales en el sector financiero, 
trabajando de forma directa con equipos backend, diseño y negocio. Me destaco por 
mi enfoque en detalle, mi capacidad de resolver problemas y mi compromiso con la 
calidad del código y la experiencia final.
      `,

      vision: `
Busco seguir creciendo hacia un perfil más completo, fortaleciendo mis bases 
full stack sin dejar mi especialización en frontend. Mi objetivo es crear 
interfaces sólidas, accesibles y con impacto real en la experiencia del usuario.
      `,
    },

    projects: {
      title: "Proyectos",

      eyebrowMain: "Selección de proyectos",
      labelLink: "Enlace",
      labelViewProject: "Ver proyecto",
      items: [
        {
          id: "npm-library",
          title: "Librería de componentes en npm",
          role: "Frontend & diseño de componentes",
          short: `
Librería reutilizable de componentes usada en varios productos internos.
          `,
          description: `
Librería de componentes publicada en npm (3 paquetes) para unificar estilos, 
patrones de UI y reglas de negocio en distintos productos del ecosistema de la empresa.
          `,
          stack: ["React", "TypeScript", "Vite", "Styled Components", "npm"],
          image: "/assets/images/projects/npm-library.webp",
          link: "https://www.npmjs.com",
        },
        {
          id: "ai-twilio",
          title: "AI + Twilio flows",
          role: "Integración IA / frontend",
          short: `
Flujos conversacionales con IA conectados a Twilio y servicios backend.
          `,
          description: `
Implementación de chatbots y manejo de números telefónicos con Twilio, integrando 
lógica de negocio, servicios REST y una interfaz limpia para el usuario final.
          `,
          stack: ["React", "Node.js", "Fastify", "Twilio", "PostgreSQL"],
          image: "/assets/images/projects/ai-twilio.webp",
        },
        {
          id: "sistema-saas",
          title: "Sistema SaaS",
          role: "Frontend Developer",
          short:
            "Interfaz generada y adaptada para simular un sistema SaaS basado en flujos reales.",
          description:
            "Construcción de componentes, estructura y navegación de un sistema SaaS. La UI fue generada por IA y ajustada para fines de demostración sin exponer información sensible.",
          stack: [
            "React",
            "Next.js",
            "TypeScript",
            "Framer Motion",
            "Tailwind",
            "Figma",
          ],
          image: "/assets/images/saasService.png",
          demoUrl: "https://sistemasaas.vercel.app/",
        },
      ],
    },

    skills: {
      title: "Skills",
      body: `
React, Next.js, TypeScript, Tailwind, Framer Motion...
      `,
    },
    contact: {
      title: "Contacto",
      body: `
Puedes contactarme en: tunombre@correo.com
      `,
    },
  },
  ui: {
    langToggle: "ES / EN",
    tabs: {
      cover: "Portada",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Skills",
      contact: "Contacto",
    },
    demo: "Ver demo",
    close: "Cerrar",
    stack: "Stack",
    interactiveDemo: "Demo interactiva",
    closeDemo: "Cerrar demo",
  },
} as const;
