import type { ContentDictionary } from "@/i18n/types";

const content = {
  header: {
    changePage: [
      {
        label: "Cuidado Cabello",
        href: "/",
      },
      {
        label: "Experiencia Salón",
        href: "/salon-experience",
      },
    ],
    nav: [
      { label: "Productos", href: "/products" },
      { label: "Paquetes", href: "/bundles" },
      { label: "Sobre Nosotros", href: "/about-us" },
      { label: "Blog", href: "/blog" },
    ],
    navBundles: [
      { label: "Nuestras Sedes", href: "/salon-experience/locations" },
      { label: "Nuestros Estilistas", href: "/salon-experience/stylists" },
      { label: "Sobre Nosotros", href: "/about-us" },
      { label: "Blog", href: "/blog" },
    ],
    store: "Ubicación Tienda",
  },
  main: {
    hero: {
      tag: "Cuidado Profesional. Resultados Visibles.",
      title: "Cabello Sano. <br class='hidden md:block xl:hidden'/> Elevado.",
      description: "Cabello fuerte, brillante y sano inicia aquí.",
      button: {
        text: "Comprar Ya",
        link: "/products",
      },
      image: "main/hero-main",
    },
    bundles: {
      tag: "Ahorra 25–30% en Paquetes de Cuidado de Expertos",
      title: "Paquete y Ahorro",
      descriptions: [
        "Fórmulas profesionales con botánicos premium.",
        "100% Vegano • Sin Sulfatos • Sin Parabenos",
      ],
      button: {
        text: "Ver Paquetes",
        link: "/bundles",
      },
      image: "main/bundles-main",
    },
    routine: {
      tag: "Cuidado a Medida para Cada Tipo de Cabello",
      title: "Descubre tu Rutina",
      descriptions: [
        "Crea tu rutina personalizada con soluciones diseñadas <br class='hidden md:block'> para una belleza y confianza duraderas.",
      ],
      button: {
        text: "Busca tu Solución Capilar",
        link: "#",
      },
      image: "main/routine-main",
    },
    collection: {
      title: "Colecciones de Firma",
      items: [
        {
          image: "repair-collection",
          title: "Reparación & Hidratación",
          description: "Restaura Fuerza & Brillo",
          button: {
            text: "Ver Ahora",
            href: "#",
          },
        },
        {
          image: "color-collection",
          title: "Soluciones de Color",
          description: "Color que Sí Dura",
          button: {
            text: "Ver Ahora",
            href: "#",
          },
        },
        {
          image: "curl-collection",
          title: "Cuidado de Rizos",
          description: "Cuidado Capilar Especial",
          button: {
            text: "Ver Ahora",
            href: "#",
          },
        },
      ],
    },
    professionals: {
      title: "Para Profesionales",
      atributo: "De",
      items: [
        {
          color: "bg-rojo",
          slogan: "¡Mejora Belleza del Pelo!",
          image: "color-1",
        },
        {
          color: "bg-morado",
          slogan: "¡Hidrata Pelo a Fondo!",
          image: "color-2",
        },
        {
          color: "bg-verde",
          slogan: "¡Nutre Cada Hebra Hoy!",
          image: "color-3",
        },
        {
          color: "bg-azul",
          slogan: "¡Revitaliza todo Cabello!",
          image: "color-4",
        },
      ],
    },
    button: "Añadir Carrito",
  },
  footer: {
    quickLinks: {
      title: "Enlaces Rápidos",
      links: [
        { label: "Comprar Todo", href: "/" },
        { label: "Servicios de Salón", href: "/salon-services" },
        { label: "Nuestros Estilistas", href: "/stylists" },
        { label: "Blog", href: "/blog" },
      ],
    },
    products: {
      title: "Productos",
      links: [
        { label: "Productos", href: "/products" },
        { label: "Colecciones", href: "/shop-collections" },
        { label: "Paquetes", href: "/bundles" },
      ],
    },
    servicesArea: {
      title: "Ubicaciones",
      areas: ["Ocoee", "Orlando", "Waterford Lakes", "St. Petersburg"],
    },
    aboutUs: {
      title: "Sobre Nosotros",
      description:
        "Cuidado profesional diseñado para nutrir, restaurar y elevar cada tipo de cabello.",
    },
  },
} satisfies ContentDictionary;

export default content;
