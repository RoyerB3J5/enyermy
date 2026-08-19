import type { ContentDictionary } from "@/i18n/types";

const content = {
  header: {
    changePage: [
      {
        label: "Cuidado Cabello",
        href: "/",
      },
      {
        label: "Experiencia Sal\u00f3n",
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
    store: "Ubicaci\u00f3n Tienda",
  },
  main: {
    hero: {
      tag: "Cuidado Profesional. Resultados Visibles.",
      title: "Cabello Sano. <br class='hidden md:block xl:hidden'/> Elevado.",
      description: "Cabello fuerte, brillante y sano inicia aqu\u00ed.",
      button: {
        text: "Comprar Ya",
        link: "/es/products",
      },
      image: "main/hero-main",
      imageMobile: "main/hero-main-mobile",
    },
    bestSellers: {
      title: "Lo más vendido",
      button: {
        text: "Ver Todos",
        href: "/es/products",
      },
    },
    bundles: {
      tag: "Ahorra 25\u201330% en Paquetes de Cuidado de Expertos",
      title: "Paquete y Ahorro",
      descriptions: [
        "F\u00f3rmulas profesionales con bot\u00e1nicos premium.",
        "100% Vegano \u2022 Sin Sulfatos \u2022 Sin Parabenos",
      ],
      button: {
        text: "Ver Paquetes",
        link: "/es/bundles",
      },
      image: "main/bundles-main",
    },
    routine: {
      tag: "Cuidado a Medida para Cada Tipo de Cabello",
      title: "Descubre tu Rutina",
      descriptions: [
        "Crea tu rutina personalizada con soluciones dise\u00f1adas <br class='hidden md:block'> para una belleza y confianza duraderas.",
      ],
      button: {
        text: "Busca tu Soluci\u00f3n Capilar",
        link: "/es/bundles",
      },
      image: "main/routine-main",
    },
    collection: {
      title: "Colecciones de Firma",
      items: [
        {
          image: "repair-collection",
          title: "Reparaci\u00f3n & Hidrataci\u00f3n",
          description: "Restaura Fuerza & Brillo",
          button: {
            text: "Ver Ahora",
            href: "/es/products",
          },
        },
        {
          image: "color-collection",
          title: "Soluciones de Color",
          description: "Color que S\u00ed Dura",
          button: {
            text: "Ver Ahora",
            href: "/es/products",
          },
        },
        {
          image: "curl-collection",
          title: "Cuidado de Rizos",
          description: "Cuidado Capilar Especial",
          button: {
            text: "Ver Ahora",
            href: "/es/products",
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
          slogan: "\u00a1Mejora Belleza del Pelo!",
          image: "color-5",
        },
        {
          color: "bg-morado",
          slogan: "\u00a1Hidrata Pelo a Fondo!",
          image: "color-1",
        },
        {
          color: "bg-verde",
          slogan: "\u00a1Nutre Cada Hebra Hoy!",
          image: "color-2",
        },
        {
          color: "bg-azul",
          slogan: "\u00a1Revitaliza todo Cabello!",
          image: "color-3",
        },
      ],
    },
    button: "A\u00f1adir Carrito",
  },
  productsAll: {
    image: "hero-products",
    imageMobile: "main/hero-products-mobile",
    tag: "Cuidado Capilar Profesional Para Cada Necesidad",
    title: "Descubre Cada Soluci\u00f3n",
    description:
      "Explora nuestra colecci\u00f3n completa de f\u00f3rmulas creadas por expertos para <br class='hidden lg:block'/> hidratar, reparar, proteger y mejorar todo tipo de cabello.",
    products: {
      products: "productos",
      filtro: "Filtro",
      sortBy: "Ordenar:",
      items: [
        { id: "1", label: "Todos" },
        { id: "2", label: "Precio: Mayor a menor" },
        { id: "3", label: "Precio: Menor a mayor" },
        { id: "4", label: "Novedad" },
        { id: "5", label: "M\u00e1s vendidos" },
      ],
      itemsType: [
        { id: "todos", label: "Todos" },
        { id: "seco", label: "Cabello seco o da\u00f1ado" },
        { id: "rizado", label: "Cabello te\u00f1ido o decolorado" },
        { id: "te\u00f1ido", label: "Cabello rizado" },
        { id: "Velvety Silk", label: "Colecci\u00f3n Velvety Silk" },
        { id: "Pro", label: "Colecci\u00f3n Pro" },
        { id: "Vivify", label: "Colecci\u00f3n Vivify" },
        { id: "Curlyme", label: "Colecci\u00f3n Curly Me" },
      ],
    },
    button: "A\u00d1ADIR",
    productContent: [
      {
        image: "info-product-1",
        title: "Revela <br/> un Pelo <br className='block md:hidden'/> Sedoso",
        href: "#",
        position: "left",
        colorText: "white",
        labelButton: "Comprar",
      },
      {
        image: "info-product-2",
        title: "Perfecto <br/> Cada <br className='block md:hidden'/> Rizo",
        href: "#",
        position: "left",
        colorText: "black",
        labelButton: "Comprar",
      },
      {
        image: "info-product-3",
        title:
          "De <br class='block md:hidden'/> Cobrizo <br class='hidden md:block'/> a <br class='block md:hidden'/> Rubio",
        href: "#",
        position: "right",
        colorText: "white",
        labelButton: "Comprar",
      },
    ],
  },
  bundles: {
    title: "Conjuntos Seleccionados por Expertos",
  },
  salonExperience: {
    hero: {
      tag: "corrección de color y extensiones de cabello",
      title: "Belleza Arraigada <br class='hidden md:block'/> en un Propósito",
      description: "Expertas. Arte. Experiencia.",
      button: {
        text: "RESERVAR CITA",
        link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
      },
      image: "salon-experience/hero-main",
      imageMobile: "salon-experience/hero-main-mobile",
    },
    location: {
      title: "Nuestras Ubicaciones",
      items: [
        {
          image: "ocoee",
          name: "Ocoee",
          direction: "1099 S Clarke Rd <br/> Ocoee",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
        },
        {
          image: "orlando",
          name: "Orlando",
          direction: "4526 Curry Ford Rd <br/>Orlando",
          href: "https://app.squareup.com/appointments/buyer/widget/vj0fsnz60g8n1d/L1C7496RDCGTG",
        },
        {
          image: "waterford",
          name: "Waterford Lakes",
          direction: "12789 Waterford Lakes Pkwy Ste 11 <br/> Orlando",
          href: "https://app.squareup.com/appointments/book/8thjvgf0dvy73t/L57WNWAWEV0DT/start",
        },
        {
          image: "petersburg",
          name: "St. Petersburg ",
          direction: "6901 22nd Ave N Suite 6707 <br/> St.Petersburg",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/LEJXW75XFC9Z2/services?color=e9c277",
        },
      ],
      mainPage: true,
    },
    services: {
      title: "Cuidado Experto. Resultados Excepcionales. ",
      description:
        "Una vez que sea redirigido a nuestra página de reservas, seleccione su ubicación preferida en la esquina superior derecha antes de programar su cita.",
      items: [
        {
          image: "services-1",
          title: "balayage que enmarca el rostro",
          description:
            "Ilumina tus rasgos con mechas balayage personalizadas que enmarcan el rostro.",
          price: "Desde $230.00",
          time: "+2 h 30 min",
          link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services/WVM3AGS2YS2SDDPROK5CQPIN",
        },
        {
          image: "services-2",
          title: "Extensiones de Cabello Invisibles",
          description:
            "Instalación profesional de extensiones para un cabello más lleno, largo y de aspecto natural.",
          price: "Desde $280.00",
          time: "+ 50 min",
          link: "https://book.squareup.com/appointments/wmf7r8fcik8zye/location/HT6A7Q5H5E2QW/services/FMXP7763AUWMZ5HEGDA5UWGD",
        },
        {
          image: "services-3",
          title: "Cortes de Cabello",
          description:
            "Corte profesional diseñado para realzar tu estilo y tus rasgos.",
          price: "Desde $35.00",
          time: "30 min",
          link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services/LF6IHEM22CKIBP2REL3ALU3E",
        },
        {
          image: "services-4",
          title: "Brushing de Largo Medio",
          description:
            "Logra un cabello suave y voluminoso con un brushing impecable de calidad de salón.",
          price: "Desde $55.00",
          time: "+45 min",
          link: "https://book.squareup.com/appointments/wmf7r8fcik8zye/location/HT6A7Q5H5E2QW/services/6LJMH2BTBL5SUBBTIVCD423F",
        },
        {
          image: "services-5",
          title: "Correcciones de Color de Doble Proceso",
          description: "",
          price: "Desde $330.00",
          time: "+ 3 h 30 min",
          link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services/5YLYVVDFL334ICBOVLH4BBPH",
        },
        {
          image: "services-6",
          title: "Mechas Completas",
          description:
            "Agrega profundidad, dimensión y luminosidad con mechas colocadas por expertas.",
          price: "Desde $280.00",
          time: "+ 3 h",
          link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services/GMEXPOD5RFRWFLUWAAM254KB",
        },
        {
          image: "services-7",
          title: "Retoque de Raíces",
          description: "",
          price: "Desde $110.00",
          time: "+1 h",
          link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services/WJRPP32KP44KRUKWHVFPLD77",
        },
      ],
      button: {
        text: "Ver Todo",
        href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
      },
    },
    tranformation: {
      tag: "lujo. transformación.",
      title: "Más Que un Servicio, <br/> Es una Experiencia.",
      descriptions: [],
      button: {
        text: "RESERVAR CITA",
        link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
      },
      image: "salon-experience/transformation-main",
    },
    luxury: {
      tag: "Servicios expertos a la medida de tus objetivos capilares.",
      title: "Cuidado Capilar de Lujo",
      descriptions: [
        "Donde la artesanía experta se une al cuidado <br/> personalizado para resultados capilares excepcionales.",
      ],
      button: {
        text: "RESERVAR CITA",
        link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
      },
      image: "salon-experience/luxury-main",
    },
    professional: {
      title: "Para Profesionales",
      info: {
        image: "odeth",
        tag: "Consulta Personalizada",
        name: "Creemos Tu Look Distintivo",
        description:
          "Recibe recomendaciones expertas y un plan de servicio personalizado diseñado para lograr tu transformación capilar ideal.",
        list: [],
        media: false,
        button: {
          label: "Reservar ya",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
        },
        bgColor: "bg-accent",
        imageFirst: false,
      },
    },
  },
  locations: {
    hero: {
      image: "hero-locations",
      tag: "Atención Profesional. Resultados Personalizados.",
      title: "Creado Para Tu Belleza",
      description:
        "Descubre servicios de salón a medida para transformar, restaurar y realzar \n tu cabello con total confianza.",
      imageMobile: "hero-locations-mobile",
    },
    location: {
      title: "Nuestras Ubicaciones",
      items: [
        {
          image: "ocoee",
          name: "Ocoee",
          direction: "1099 S Clarke Rd  Ocoee",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
        },
        {
          image: "orlando",
          name: "Orlando",
          direction: "4526 Curry Ford Rd Orlando",
          href: "https://app.squareup.com/appointments/buyer/widget/vj0fsnz60g8n1d/L1C7496RDCGTG",
        },
        {
          image: "waterford",
          name: "Waterford Lakes",
          direction: "12789 Waterford Lakes Pkwy Ste 11  Orlando",
          href: "https://app.squareup.com/appointments/book/8thjvgf0dvy73t/L57WNWAWEV0DT/start",
        },
        {
          image: "petersburg",
          name: "St. Petersburg",
          direction: "6901 22nd Ave N Suite 6707, St.Petersburg",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/LEJXW75XFC9Z2/services?color=e9c277",
        },
      ],
      mainPage: true,
    },
  },
  stylists: {
    title: "Conoce a Nuestras Expertas",
    items: [
      {
        location: "ocoee",
        image: "enyermy",
        tag: "fundadora",
        name: "Enyermy Dominguez",
        description:
          "Con más de 25 años de experiencia, es la Fundadora de ENYERMY Studio Pro. Reconocida por sus transformaciones capilares avanzadas y su experiencia estratégica, combina la excelencia técnica con el liderazgo empresarial, creando soluciones personalizadas mientras forma a profesionales y guía el crecimiento y la visión de la marca.",
        list: [
          "Corrección de Color Avanzada",
          "Transformaciones Capilares Complejas",
          "Balayage y Color Dimensional",
          "Decoloración Avanzada",
          "Extensiones de Cabello",
          "Planificación de Color Personalizada",
          "Educación Técnica",
          "Mentoría para Estilistas",
        ],
        media: true,
        button: {
          label: "reserva en enyermy studio pro",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
        },
        bgColor: "bg-white",
        imageFirst: true,
        linkContent: {
          text: "@enyermystudiopro →",
          href: "https://www.instagram.com/escabrisabeautystudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "ocoee",
        image: "mecho",
        tag: "Estilista Maestra",
        name: "Mecho Payano",
        description:
          "Profesional de la belleza con amplia experiencia, combina experiencia técnica con un enfoque personalizado para crear transformaciones capilares a medida. Mediante consultas cuidadosas y técnicas de precisión, logra resultados hermosos priorizando siempre la salud e integridad del cabello de cada clienta.",
        list: [
          "Corrección de Color",
          "Balayage y Color Dimensional",
          "Servicios de Decoloración",
          "Color de Cabello Personalizado",
          "Transformaciones Capilares",
          "Cortes y Peinados",
          "Tratamientos Capilares",
        ],
        media: true,
        button: {
          label: "rESERVA CON MECHO",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
        },
        bgColor: "bg-accent",
        imageFirst: true,
        linkContent: {
          text: "@mecho*stylist →",
          href: "https://www.instagram.com/mecho_stylist?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "ocoee",
        image: "leticia",
        tag: "ESTILISTA",
        name: "Letty García",
        description:
          "Reconocida por su enfoque personalizado, crea looks hermosos y a medida según el estilo y el estilo de vida de cada clienta. A través de consultas cuidadosas y experiencia profesional, garantiza que cada clienta disfrute de una experiencia cómoda y se vaya sintiéndose segura y renovada.",
        list: [
          "Color de Cabello",
          "Color Dimensional",
          "Mechas y Decoloración",
          "Color de Raíz",
          "Cortes de Cabello",
          "Brushing",
          "Tratamientos de Cuidado Capilar",
        ],
        media: true,
        button: {
          label: "reserva CON Leticia",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
        },
        bgColor: "bg-white",
        imageFirst: true,
        linkContent: {
          text: "@lettyagp →",
          href: "https://www.instagram.com/lettyagp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "ocoee",
        image: "hemely",
        tag: "ESTILISTA",
        name: "Hemely Hernandez",
        description:
          "Estilista creativa y detallista que ayuda a cada clienta a encontrar un look acorde a su personalidad y estilo de vida. Se enfoca tanto en la apariencia como en el manejo del cabello, priorizando la salud y los objetivos a largo plazo durante consultas personalizadas.",
        list: [
          "Balayage",
          "Mechas",
          "Color Personalizado",
          "Cortes y Peinados",
          "Brushing",
          "Tratamientos Capilares",
          "Consultas Personalizadas",
        ],
        media: true,
        button: {
          label: "reserva CON Hemely",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
        },
        bgColor: "bg-white",
        imageFirst: true,
        linkContent: {
          text: "@hemi_her_style",
          href: "https://www.instagram.com/hemi_her_style?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "ocoee",
        image: "carla",
        tag: "GERENTE GENERAL",
        name: "Carla Caldemonte",
        description:
          "Como Gerente General de ENYERMY Studio Pro, lidera las operaciones enfocándose en la consistencia, el desarrollo del equipo y experiencias excepcionales para las clientas. Al apoyar a los gerentes de salón y fortalecer las operaciones diarias, ayuda a garantizar que cada ubicación refleje los altos estándares y la visión de la marca.",
        list: [
          "Operaciones Multi-Ubicación",
          "Apoyo a Equipos y Gerentes",
          "Desarrollo de Liderazgo",
          "Experiencia de la Clienta",
          "Sistemas Operativos",
          "Desempeño del Equipo",
          "Crecimiento del Negocio",
        ],
        media: true,
        button: {
          label: "reserva en enyermy studio pro",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@hairby_carlacaldemont →",
          href: "https://www.instagram.com/hairby_carlacaldemont?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "ocoee",
        image: "yinatais",
        tag: "DIRECTORA DE MARKETING / GERENTE DE OCOEE",
        name: "Yinatais Cintron",
        description:
          "Como Directora de Marketing y Gerente de nuestra ubicación en Ocoee, combina estrategia creativa con liderazgo de salón para hacer crecer la marca ENYERMY Studio Pro. A través de marketing impactante, participación comunitaria y experiencias excepcionales para las clientas, impulsa el crecimiento de la marca mientras apoya las operaciones diarias del salón.",
        list: [
          "Narrativa de Marca",
          "Estrategia de Redes Sociales",
          "Contenido y Campañas",
          "Adquisición de Clientas",
          "Promociones y Eventos Especiales",
          "Alianzas Comunitarias",
          "Liderazgo de Equipo",
          "Experiencia de la Clienta",
        ],
        media: true,
        button: {
          label: "reserva en enyermy studio pro",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@yinatais.esp →",
          href: "https://www.instagram.com/yinatais.esp/?utm_source=ig_web_button_share_sheet",
        },
      },
      {
        location: "orlando",
        image: "ruth",
        tag: "GERENTE DE ORLANDO / TRICÓLOGA",
        name: "Ruth Noboa",
        description:
          "Como Gerente y Tricóloga en nuestra ubicación de Orlando, combina el liderazgo del salón con experiencia especializada en la salud del cabello y el cuero cabelludo. Mediante consultas personalizadas, crea planes de cuidado a medida que promueven un cabello más saludable, ayudando a cada clienta a comprender y atender sus necesidades individuales",
        list: [
          "Evaluaciones de Cabello y Cuero Cabelludo",
          "Consultas de Tricología",
          "Cuidado del Cuero Cabelludo",
          "Salud y Bienestar Capilar",
          "Planes de Tratamiento Personalizados",
          "Apoyo para Cabello Debilitado",
          "Cuidado Capilar Preventivo",
        ],
        media: true,
        button: {
          label: "rESERVA CON RUTH",
          href: "https://app.squareup.com/appointments/buyer/widget/vj0fsnz60g8n1d/L1C7496RDCGTG",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@ruth.noboa1 →",
          href: "https://www.instagram.com/ruth.noboa1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "orlando",
        image: "lorena",
        tag: "LÍDER DE EQUIPO ORLANDO / EXTENSIONISTA",
        name: "Lorena Greenwich",
        description:
          "Como Líder de Equipo en nuestra ubicación de Orlando, se especializa en extensiones de cabello personalizadas que ofrecen resultados naturales y sin costuras. A través de consultas personalizadas y experiencia técnica, crea soluciones de extensiones a medida mientras apoya el crecimiento y la excelencia del equipo del salón.",
        list: [
          "Consultas de Extensiones de Cabello",
          "Extensiones Cosidas Invisibles",
          "Extensiones de Trama a Máquina",
          "Extensiones K-Tip",
          "Combinación y Mezcla de Color Personalizada",
          "Transformaciones de Largo y Volumen",
          "Mantenimiento de Extensiones",
        ],
        media: true,
        button: {
          label: "reserva CON Lorena",
          href: "https://app.squareup.com/appointments/buyer/widget/vj0fsnz60g8n1d/L1C7496RDCGTG",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@slay.bylorena →",
          href: "https://www.instagram.com/slay.bylorena?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "orlando",
        image: "juana",
        tag: "ESTILISTA",
        name: "Juana Fernandez",
        description:
          "Profesional de la belleza dedicada, crea servicios capilares personalizados según el estilo y los objetivos de cada clienta. A través de consultas cuidadosas y atención al detalle, logra resultados hermosos y prácticos, ofreciendo una experiencia de salón cómoda y profesional.",
        list: [
          "Color de Cabello",
          "Balayage",
          "Mechas",
          "Retoque de Raíz",
          "Cortes de Cabello",
          "Brushing y Peinado",
          "Tratamientos Capilares",
        ],
        media: true,
        button: {
          label: "rESERVA CON Juana",
          href: "https://app.squareup.com/appointments/buyer/widget/vj0fsnz60g8n1d/L1C7496RDCGTG",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@enyermystudiopro →",
          href: "https://www.instagram.com/hairbyjuanys?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "orlando",
        image: "carla",
        tag: "GERENTE GENERAL",
        name: "Carla Caldemonte",
        description:
          "Como Gerente General de ENYERMY Studio Pro, lidera las operaciones enfocándose en la consistencia, el desarrollo del equipo y experiencias excepcionales para las clientas. Al apoyar a los gerentes de salón y fortalecer las operaciones diarias, ayuda a garantizar que cada ubicación refleje los altos estándares y la visión de la marca.",
        list: [
          "Operaciones Multi-Ubicación",
          "Apoyo a Equipos y Gerentes",
          "Desarrollo de Liderazgo",
          "Experiencia de la Clienta",
          "Sistemas Operativos",
          "Desempeño del Equipo",
          "Crecimiento del Negocio",
        ],
        media: true,
        button: {
          label: "reserva en enyermy studio pro",
          href: "https://app.squareup.com/appointments/buyer/widget/vj0fsnz60g8n1d/L1C7496RDCGTG",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@hairby_carlacaldemont →",
          href: "https://www.instagram.com/hairby_carlacaldemont?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "orlando",
        image: "yinatais",
        tag: "DIRECTORA DE MARKETING / GERENTE DE OCOEE",
        name: "Yinatais Cintron",
        description:
          "Como Directora de Marketing y Gerente de nuestra ubicación en Ocoee, combina estrategia creativa con liderazgo de salón para hacer crecer la marca ENYERMY Studio Pro. A través de marketing impactante, participación comunitaria y experiencias excepcionales para las clientas, impulsa el crecimiento de la marca mientras apoya las operaciones diarias del salón.",
        list: [
          "Narrativa de Marca",
          "Estrategia de Redes Sociales",
          "Contenido y Campañas",
          "Adquisición de Clientas",
          "Promociones y Eventos Especiales",
          "Alianzas Comunitarias",
          "Liderazgo de Equipo",
          "Experiencia de la Clienta",
        ],
        media: true,
        button: {
          label: "reserva en enyermy studio pro",
          href: "https://app.squareup.com/appointments/buyer/widget/vj0fsnz60g8n1d/L1C7496RDCGTG",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@yinatais.esp →",
          href: "https://www.instagram.com/yinatais.esp/?utm_source=ig_web_button_share_sheet",
        },
      },
      {
        location: "petersburg",
        image: "odeth",
        tag: "GERENTE DE ST. PETERSBURG / ESTILISTA MAESTRA",
        name: "Odeth Dominguez",
        description:
          "Como Gerente y Estilista Maestra en nuestra ubicación de St. Petersburg, combina experiencia técnica con cuidado personalizado para lograr resultados excepcionales. Mediante consultas detalladas, crea planes capilares a medida que logran transformaciones hermosas manteniendo un cabello sano y fuerte.",
        list: [
          "Corrección de Color",
          "Balayage y Color Dimensional",
          "Servicios de Decoloración",
          "Transformaciones Capilares Personalizadas",
          "Cortes y Peinados",
          "Consultas Capilares Personalizadas",
        ],
        media: true,
        button: {
          label: "rESERVA CON ODETH",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/LEJXW75XFC9Z2/services?color=e9c277",
        },
        bgColor: "bg-white",
        imageFirst: true,
        linkContent: {
          text: "@odethandhair →",
          href: "https://www.instagram.com/odethandhair?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "waterford",
        image: "mariana",
        tag: "GERENTE DE WATERFORD LAKES",
        name: "Mariana Soucre",
        description:
          "Como Gerente de nuestra ubicación de Waterford Lakes, lidera con enfoque en el trabajo en equipo, la consistencia y una atención excepcional a las clientas. Al apoyar las operaciones diarias y mantener los altos estándares de servicio de ENYERMY Studio Pro, ayuda a crear una experiencia acogedora y profesional para cada clienta.",
        list: [
          "Experiencia de la Clienta",
          "Apoyo y Liderazgo de Equipo",
          "Operaciones Diarias del Salón",
          "Atención y Retención de Clientas",
          "Estándares de Servicio",
          "Comunicación de Equipo",
          "Organización del Salón",
        ],
        media: true,
        button: {
          label: "rESERVA CON Mariana",
          href: "https://app.squareup.com/appointments/book/8thjvgf0dvy73t/L57WNWAWEV0DT/start",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@marianasoucre →",
          href: "https://www.instagram.com/marianasoucre?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "waterford",
        image: "lourdes",
        tag: "LÍDER DE EQUIPO / GERENTE DE WATERFORD LAKES",
        name: "Lourdes Escabrisas",
        description:
          "Como Líder de Equipo y Educadora en nuestra ubicación de Waterford Lakes, combina experiencia técnica con pasión por la enseñanza y el cuidado personalizado. A través de consultas cuidadosas y técnicas de precisión, crea resultados a medida mientras ayuda al equipo del salón a crecer con aprendizaje continuo y desarrollo profesional.",
        list: [
          "Balayage y Color Dimensional",
          "Técnicas de Decoloración",
          "Color de Cabello Personalizado",
          "Transformaciones Capilares",
          "Educación Técnica",
          "Formación y Mentoría para Estilistas",
        ],
        media: true,
        button: {
          label: "rESERVA CON lourdes",
          href: "https://app.squareup.com/appointments/book/8thjvgf0dvy73t/L57WNWAWEV0DT/start",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@escabrisabeautystudio →",
          href: "https://www.instagram.com/escabrisabeautystudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },

      {
        location: "waterford",
        image: "analynn",
        tag: "asistente de estilista",
        name: "Analynn Ojeda",
        description:
          "Profesional del cabello dedicada, crea looks personalizados que reflejan el estilo, los objetivos y el estilo de vida de cada clienta. Con un enfoque en el cabello sano y la atención al detalle, logra resultados hermosos que aumentan la confianza, siendo naturales y fáciles de mantener.",
        list: [
          "Color de Cabello",
          "Balayage y Mechas",
          "Retoque de Raíz",
          "Cortes de Cabello",
          "Brushing y Peinado",
          "Tratamientos Capilares",
        ],
        media: true,
        button: {
          label: "rESERVA CON Analynn",
          href: "https://app.squareup.com/appointments/book/8thjvgf0dvy73t/L57WNWAWEV0DT/start",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@analynnbeaute →",
          href: "https://www.instagram.com/analynnbeaute*?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "waterford",
        image: "kamilla",
        tag: "ESTILISTA",
        name: "Kamilla Colon",
        description:
          "Apasionada por el cuidado capilar personalizado, combina creatividad y atención al detalle para lograr resultados hermosos y saludables. Al comprender el estilo y los objetivos de cada clienta, ofrece looks a medida que inspiran confianza y realzan la belleza natural.",
        list: [
          "Color de Cabello Personalizado",
          "Mechas",
          "Balayage",
          "Tonalizantes y Brillos",
          "Cortes y Peinados",
          "Tratamientos Capilares Restaurativos",
        ],
        media: true,
        button: {
          label: "rESERVA CON Kamilla",
          href: "https://app.squareup.com/appointments/book/8thjvgf0dvy73t/L57WNWAWEV0DT/start",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@itskcbeauty →",
          href: "https://www.instagram.com/itskcbeauty?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "waterford",
        image: "carla",
        tag: "GERENTE GENERAL",
        name: "Carla Caldemonte",
        description:
          "Como Gerente General de ENYERMY Studio Pro, lidera las operaciones enfocándose en la consistencia, el desarrollo del equipo y experiencias excepcionales para las clientas. Al apoyar a los gerentes de salón y fortalecer las operaciones diarias, ayuda a garantizar que cada ubicación refleje los altos estándares y la visión de la marca.",
        list: [
          "Operaciones Multi-Ubicación",
          "Apoyo a Equipos y Gerentes",
          "Desarrollo de Liderazgo",
          "Experiencia de la Clienta",
          "Sistemas Operativos",
          "Desempeño del Equipo",
          "Crecimiento del Negocio",
        ],
        media: true,
        button: {
          label: "reserva en enyermy studio pro",
          href: "https://app.squareup.com/appointments/book/8thjvgf0dvy73t/L57WNWAWEV0DT/start",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@hairby_carlacaldemont →",
          href: "https://www.instagram.com/hairby_carlacaldemont?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "waterford",
        image: "yinatais",
        tag: "DIRECTORA DE MARKETING / GERENTE DE OCOEE",
        name: "Yinatais Cintron",
        description:
          "Como Directora de Marketing y Gerente de nuestra ubicación en Ocoee, combina estrategia creativa con liderazgo de salón para hacer crecer la marca ENYERMY Studio Pro. A través de marketing impactante, participación comunitaria y experiencias excepcionales para las clientas, impulsa el crecimiento de la marca mientras apoya las operaciones diarias del salón.",
        list: [
          "Narrativa de Marca",
          "Estrategia de Redes Sociales",
          "Contenido y Campañas",
          "Adquisición de Clientas",
          "Promociones y Eventos Especiales",
          "Alianzas Comunitarias",
          "Liderazgo de Equipo",
          "Experiencia de la Clienta",
        ],
        media: true,
        button: {
          label: "reserva en enyermy studio pro",
          href: "https://app.squareup.com/appointments/book/8thjvgf0dvy73t/L57WNWAWEV0DT/start",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@yinatais.esp →",
          href: "https://www.instagram.com/yinatais.esp/?utm_source=ig_web_button_share_sheet",
        },
      },
      {
        location: "petersburg",
        image: "luisa",
        tag: "Experiencia del Cliente",
        name: "Luisa Payano",
        description:
          "Luisa es una asistente de salón dedicada, comprometida en garantizar una experiencia fluida, acogedora y cómoda para cada clienta que visita Enyermy Studio Pro.",
        list: [
          "Apoyo en Atención al Cliente",
          "Asistente de Operaciones del Salón",
          "Enfoque en la Experiencia de la Clienta",
        ],
        media: true,
        button: {
          label: "rESERVA CON LUISA",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/LEJXW75XFC9Z2/services?color=e9c277",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@enyermystudiopro →",
          href: "https://www.instagram.com/enyermystudiopro/",
        },
      },
      {
        location: "petersburg",
        image: "carla",
        tag: "GERENTE GENERAL",
        name: "Carla Caldemonte",
        description:
          "Como Gerente General de ENYERMY Studio Pro, lidera las operaciones enfocándose en la consistencia, el desarrollo del equipo y experiencias excepcionales para las clientas. Al apoyar a los gerentes de salón y fortalecer las operaciones diarias, ayuda a garantizar que cada ubicación refleje los altos estándares y la visión de la marca.",
        list: [
          "Operaciones Multi-Ubicación",
          "Apoyo a Equipos y Gerentes",
          "Desarrollo de Liderazgo",
          "Experiencia de la Clienta",
          "Sistemas Operativos",
          "Desempeño del Equipo",
          "Crecimiento del Negocio",
        ],
        media: true,
        button: {
          label: "reserva en enyermy studio pro",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/LEJXW75XFC9Z2/services?color=e9c277",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@hairby_carlacaldemont →",
          href: "https://www.instagram.com/hairby_carlacaldemont?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "petersburg",
        image: "yinatais",
        tag: "DIRECTORA DE MARKETING / GERENTE DE OCOEE",
        name: "Yinatais Cintron",
        description:
          "Como Directora de Marketing y Gerente de nuestra ubicación en Ocoee, combina estrategia creativa con liderazgo de salón para hacer crecer la marca ENYERMY Studio Pro. A través de marketing impactante, participación comunitaria y experiencias excepcionales para las clientas, impulsa el crecimiento de la marca mientras apoya las operaciones diarias del salón.",
        list: [
          "Narrativa de Marca",
          "Estrategia de Redes Sociales",
          "Contenido y Campañas",
          "Adquisición de Clientas",
          "Promociones y Eventos Especiales",
          "Alianzas Comunitarias",
          "Liderazgo de Equipo",
          "Experiencia de la Clienta",
        ],
        media: true,
        button: {
          label: "reserva en enyermy studio pro",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/LEJXW75XFC9Z2/services?color=e9c277",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@yinatais.esp →",
          href: "https://www.instagram.com/yinatais.esp/?utm_source=ig_web_button_share_sheet",
        },
      },
    ],
  },
  storeLocations: {
    tag: "Atención Experta, Resultados Excepcionales.",
    title: "Nuestras Ubicaciones",
    button: "Reservar Ya",
    locations: [
      {
        id: 1,
        name: "Clarke",
        title: "Enyermy en Ocoee",
        description: "1099 S Clarke Rd · Ocoee",
        href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
        image: "ocoee",
        pin: {
          x: 730,
          y: 155,
        },
        camera: {
          zoom: 1.15,
        },
      },
      {
        id: 2,
        name: "Curry Ford",
        title: "Enyermy en Orlando",
        description: "4526 Curry Ford Rd · Orlando",
        href: "https://app.squareup.com/appointments/buyer/widget/vj0fsnz60g8n1d/L1C7496RDCGTG",
        image: "orlando",
        pin: {
          x: 840,
          y: 175,
        },
        camera: {
          zoom: 1.15,
        },
      },
      {
        id: 3,
        name: "Waterford Lakes",
        title: "Enyermy en Waterford Lakes",
        description: "12789 Waterford Lakes Pkwy Ste 11 · Orlando",
        href: "https://app.squareup.com/appointments/book/8thjvgf0dvy73t/L57WNWAWEV0DT/start",
        image: "waterford-2",
        pin: {
          x: 900,
          y: 155,
        },
        camera: {
          zoom: 1.15,
        },
      },
      {
        id: 4,
        name: "St.Petersburg",
        title: "Enyermy en St. Petersburg",
        description: "6901 22nd Ave N Suite 6707 St. Petersburg",
        href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/LEJXW75XFC9Z2/services?color=e9c277",
        image: "petersburg-2",
        pin: {
          x: 210,
          y: 520,
        },
        camera: {
          zoom: 1.15,
        },
      },
    ],
  },
  aboutUs: {
    hero: {
      tag: "Cuidado Profesional. Resultados Visibles.",
      description2:
        "En cuanto a este templo que est\u00e1s edificando, si andas en mis estatutos, cumples mis decretos y guardas todos mis mandamientos andando en ellos, yo confirmar\u00e9 contigo mi palabra que habl\u00e9 a David tu padre.",
      title: "Belleza con Prop\u00f3sito",
      description:
        "En cuanto a este templo que est\u00e1s edificando, si andas en mis estatutos, cumples mis decretos y guardas todos mis mandamientos andando en ellos, yo confirmar\u00e9 contigo mi palabra que habl\u00e9 a David tu padre.",
      bible: "1 Reyes 6:12",
      button: {
        text: "RESERVAR CITA",
        link: "#",
      },
    },
    philosophy: {
      tag: "NUESTRA FILOSOF\u00cdA",
      title: "Belleza con Prop\u00f3sito",
      description:
        "Nos apasiona la educaci\u00f3n, la innovaci\u00f3n y ofrecer resultados excepcionales. Cada servicio que brindamos est\u00e1 respaldado por experiencia, productos premium y un compromiso genuino con nuestros clientes.",
      items: [
        {
          icon: "Star",
          title: "Experiencia",
          description:
            "A\u00f1os de experiencia en correcci\u00f3n de color, extensiones y restauraci\u00f3n capilar.",
        },
        {
          icon: "Heart",
          title: "Atenci\u00f3n Personalizada",
          description:
            "Cada cliente es \u00fanico. Creamos planes personalizados seg\u00fan tus objetivos capilares.",
        },
        {
          icon: "leaf",
          title: "Calidad Premium",
          description:
            "Usamos solo productos de la m\u00e1s alta calidad y t\u00e9cnicas avanzadas para resultados duraderos.",
        },
        {
          icon: "Gem",
          title: "Empoderamiento",
          description:
            "Creemos que un cabello seguro transforma m\u00e1s que tu apariencia te transforma a ti.",
        },
      ],
    },
    mision: {
      tag: "NUESTRA MISI\u00d3N",
      title:
        "Belleza con <br class='hidden md:block'/>  <br class='md:hidden block'/> Prop\u00f3sito",
      description:
        "En Enyermy Studio Pro, creemos que la belleza es m\u00e1s que lo que ves en el espejo. Nuestra misi\u00f3n no solo es transformar tu cabello sino inspirar confianza, fortalecer tu esp\u00edritu y ayudarte a ser la mejor versi\u00f3n de ti misma. Cada servicio que ofrecemos est\u00e1 dise\u00f1ado con excelencia, cuidado y prop\u00f3sito porque la verdadera belleza comienza desde adentro.",
    },
    number: {
      title: "En N\u00fameros",
      items: [
        {
          number: "10K+",
          label: "Clientes Felices",
          icon: "Users",
        },
        {
          number: "15+",
          label: "A\u00f1os de <br/> Experiencia",
          icon: "Trophy",
        },
        {
          number: "3+",
          label: "Ubicaciones (Con <br/> M\u00e1s Pronto)",
          icon: "MapPin",
        },
        {
          number: "100%",
          label: "Compromiso con <br/> la Excelencia",
          icon: "Star",
        },
      ],
    },
    location: {
      title: "Nuestras Ubicaciones",
      items: [
        {
          image: "ocoee",
          name: "Ocoee",
          direction: "1099 S Clarke Rd <br/> Ocoee",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
        },
        {
          image: "orlando",
          name: "Orlando",
          direction: "4526 Curry Ford Rd <br/>Orlando",
          href: "https://app.squareup.com/appointments/buyer/widget/vj0fsnz60g8n1d/L1C7496RDCGTG",
        },
        {
          image: "waterford",
          name: "Waterford Lakes",
          direction: "12789 Waterford Lakes Pkwy Ste 11 <br/> Orlando",
          href: "https://app.squareup.com/appointments/book/8thjvgf0dvy73t/L57WNWAWEV0DT/start",
        },
        {
          image: "petersburg",
          name: "St. Petersburg ",
          direction: "6901 22nd Ave N Suite 6707 <br/> St.Petersburg",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/LEJXW75XFC9Z2/services?color=e9c277",
        },
      ],
      mainPage: false,
    },
    transformation: {
      image: "transformation",
      tag: "consultas personalizadas",
      name: "Tu Transformaci\u00f3n <br/> Comienza Aqu\u00ed",
      description:
        "Cada mujer tiene una historia \u00fanica, y nuestra consulta personalizada es el inicio de un viaje transformador. Nos permite entender tu visi\u00f3n, estilo de vida y metas de belleza para crear una experiencia extraordinaria dise\u00f1ada exclusivamente para ti.",
      list: [],
      media: false,
      button: {
        label: "RESERVAR CITA",
        href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
      },
      bgColor: "bg-morado",
      imageFirst: false,
    },
  },
  email: {
    title: "Suscr\u00edbete a nuestra lista VIP",
    description:
      "\u00danete a nuestra lista VIP para ofertas exclusivas y las \u00faltimas noticias.",
  },
  reviewCarousel: {
    rated: "Calificado con 5 estrellas por nuestros clientes",
    title: "Resultados reales, opiniones reales",
    reviews: [
      {
        title: "¡Me encanta!",
        description:
          "El salón estaba muy limpio. Todos los estilistas fueron amables. ¡A mis dos hijos les encantó el corte!",
        name: "Jaime A.",
        color: "bg-[#E33E7A]",
      },
      {
        title: "Encantada",
        description:
          "Amé el trato desde que entré, súper recomendado al 100% amé mi proceso de balayage. Lorena hizo un buen trabajo.",
        name: "Arisleydi P.",
        color: "bg-[#FBBC05]",
      },
      {
        title: "Genial",
        description:
          "Me acabo de arreglar el cabello con Ruth, las manos más delicadas y una experiencia increíble, volveré pronto.",
        name: "Kerwin D.",
        color: "bg-[#2F89D4]",
      },
      {
        title: "Genial",
        description:
          "Excelente trato y amabilidad. Recomendadas al 100%. También hice corte a mis varones en Waterford Lake, Orlando.",
        name: "Yanelys N.",
        color: "bg-[#435260]",
      },
      {
        title: "Genial",
        description:
          "Esta chica es muy profesional, excelentes productos, realiza cambios extremos. Muchas gracias por todo.",
        name: "Luz Q.",
        color: "bg-[#FBBC05]",
      },
      {
        title: "Genial",
        description:
          "Letty hizo un trabajo genial, feliz de tener un salón cerca que sabe cómo secar bien el cabello.",
        name: "Alexa F.",
        color: "bg-[#FBBC05]",
      },
    ],
  },
  footer: {
    description:
      "Cuidado profesional del cabello diseñado para nutrir, restaurar y elevar tu cabello.",
    button: "Más ",
    quickLinks: {
      title: "Menú",
      links: [
        { label: "Home", href: "/es/" },
        { label: "Shop", href: "/es/products" },
        { label: "Blog", href: "/es/blog" },
        { label: "Nosotros", href: "/es/about-us" },
        { label: "Política Priv.", href: "/es/privacy-policy" },
        { label: "Pol. Reembolso", href: "/es/refund-policy" },
        { label: "Política Envíos", href: "/es/shipping-policy" },
        { label: "Términos del Uso", href: "/es/terms-of-services" },
      ],
    },
    products: {
      title: "Catálogo",
      links: [
        { label: "Ver Producto", href: "/es/products" },
        { label: "Ver las Colecciones", href: "/es/products" },
        { label: "Ver Paquetes", href: "/es/bundles" },
      ],
    },
    servicesArea: {
      title: "Ubicación",
      areas: [
        {
          label: "Ocoee",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
        },
        {
          label: "Orlando",
          href: "https://app.squareup.com/appointments/buyer/widget/vj0fsnz60g8n1d/L1C7496RDCGTG",
        },
        {
          label: "Waterford Lakes",
          href: "https://app.squareup.com/appointments/book/8thjvgf0dvy73t/L57WNWAWEV0DT/start",
        },
        {
          label: "St. Petersburg",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/LEJXW75XFC9Z2/services?color=e9c277",
        },
      ],
    },
    aboutUs: {
      title: "Escríbenos",
      description:
        "1099 S Clark Rd, Ocoee, Fl, 34761 <br/> Teléf: <a href='tel:+17278779107'>727 877 9107</a>",
    },
  },
  privacy: {
    title: "Política de privacidad",
    description:
      "Compartimos su información básica como nombre, correo electrónico y número de teléfono con terceros asociados como Facebook, Instagram, TikTok y Google.",
  },
  refund: {
    title: "Política de reembolso",
    description:
      "Tenemos una política de devolución de 30 días, lo que significa que tiene 30 días después de recibir su artículo para solicitar una devolución. <br/> <br/> Para ser elegible para una devolución, su artículo debe estar en las mismas condiciones en que lo recibió, sin usar o sin ocupar, con etiquetas y en su embalaje original. También necesitará el recibo o comprobante de compra. <br/> <br/> Para iniciar una devolución, puede contactarnos en <a href='https://mail.google.com/mail/?view=cm&fs=1&to=enyermyhairsolution@gmail.com' class='underline'> enyermyhairsolution@gmail.com </a>. Tenga en cuenta que las devoluciones deberán enviarse a la siguiente dirección: 1099 s clark rd ocoee fl 34761 <br/> Si se acepta su devolución, le enviaremos una etiqueta de envío de devolución, así como instrucciones sobre cómo y dónde enviar su paquete. No se aceptarán los artículos devueltos sin haber solicitado previamente una devolución. <br/> <br/> Siempre puede contactarnos para cualquier pregunta sobre devoluciones en <a href='https://mail.google.com/mail/?view=cm&fs=1&to=enyermyhairsolution@gmail.com' class='underline'> enyermyhairsolution@gmail.com </a>. <br/> <br/> <span class='font-semibold'>Daños y problemas</span> <br/> Por favor, inspeccione su pedido al recibirlo y contáctenos de inmediato si el artículo está defectuoso, dañado o si recibe el artículo incorrecto, para que podamos evaluar el problema y corregirlo. <br/> <br/> <span class='font-semibold'> Excepciones / artículos no devolvibles </span> <br/>Ciertos tipos de artículos no se pueden devolver, como bienes perecederos (como alimentos, flores o plantas), productos personalizados (como pedidos especiales o artículos personalizados) y bienes de cuidado personal (como productos de belleza). Tampoco aceptamos devoluciones de materiales peligrosos, líquidos inflamables o gases. Póngase en contacto si tiene preguntas o inquietudes sobre su artículo específico. <br/>  Desafortunadamente, no podemos aceptar devoluciones de artículos en oferta o tarjetas de regalo. <br/> <br/> <span class='font-semibold'>Cambios</span> <br/> La forma más rápida de asegurarse de obtener lo que desea es devolver el artículo que tiene y, una vez aceptada la devolución, realizar una compra por separado del nuevo artículo. <br/> <br/> <span class='font-semibold'>Período de reflexión de 14 días en la Unión Europea.</span> <br/> A pesar de lo anterior, si la mercancía se envía a la Unión Europea, tiene derecho a cancelar o devolver su pedido dentro de los 14 días, por cualquier motivo y sin justificación. Al igual que anteriormente, su artículo debe estar en las mismas condiciones en que lo recibió, sin usar o sin ocupar, con etiquetas y en su embalaje original. También necesitará el recibo o comprobante de compra. <br/> <br/> <span class='font-semibold'>Reembolsos</span> <br/> Le notificaremos una vez que hayamos recibido e inspeccionado su devolución y le informaremos si el reembolso fue aprobado o no. Si se aprueba, se le reembolsará automáticamente en su método de pago original dentro de los 10 días hábiles. Recuerde que su banco o compañía de tarjeta de crédito también puede tardar algún tiempo en procesar y publicar el reembolso. <br/> Si han pasado más de 15 días hábiles desde que aprobamos su devolución, contáctenos en <a href='https://mail.google.com/mail/?view=cm&fs=1&to=enyermyhairsolution@gmail.com' class='underline'> enyermyhairsolution@gmail.com </a>. <br/> <br/> ¿Qué pasa si mi pedido llegó dañado? <br/> Con gusto reemplazaremos cualquier producto solicitado en enyermyhairsolutions.shop que le haya sido entregado dañado. Por favor envíe un correo electrónico a <a href='https://mail.google.com/mail/?view=cm&fs=1&to=enyermyhairsolution@gmail.com' class='underline'> enyermyhairsolution@gmail.com </a> con imágenes de su paquete y la información de su pedido. Cualquier consulta enviada después de 7 días hábiles no será elegible para reemplazo. <br/> <br/> ¿Qué pasa si mi paquete se pierde? <br/>Si el seguimiento del envío de su producto a través de UPS o USPS no muestra movimiento o figura como entregado y no ha sido entregado, comuníquese directamente con la empresa de envío para iniciar un reclamo con el número de seguimiento de su pedido. Para cualquier otra pregunta, comuníquese con nuestro equipo en <a href='https://mail.google.com/mail/?view=cm&fs=1&to=enyermyhairsolution@gmail.com' class='underline'> enyermyhairsolution@gmail.com </a> con la información de su pedido.",
  },
  shipping: {
    title: "Política de envío",
    description:
      "Hacemos todo lo posible para procesar los pedidos realizados antes del mediodía, hora del Este, de lunes a viernes, el mismo día. Los pedidos recibidos después de esa hora o durante el fin de semana se procesarán el siguiente día hábil, excepto en períodos festivos o de alto volumen. Una vez procesado y enviado un pedido, por lo general tarda entre 5 y 7 días hábiles en llegar mediante el envío UPS Ground, según el destino. <br/> Las condiciones meteorológicas extremas pueden causar retrasos en el envío. Lamentamos no poder garantizar la entrega exprés en caso de mal tiempo. Actualmente solo aceptamos pedidos que se envíen a los 48 Estados Unidos contiguos. No podemos realizar envíos a Hawái, Alaska, territorios de EE. UU., casilleros postales (PO boxes) o direcciones APO/FPO. Actualmente no ofrecemos envíos a direcciones internacionales.",
  },
  term: {
    title: "Términos del servicio",
    description:
      "Las condiciones meteorológicas extremas pueden causar retrasos en el envío. Lamentamos no poder garantizar la entrega exprés en caso de mal tiempo. Actualmente solo aceptamos pedidos que se envíen a los 48 Estados Unidos contiguos. No podemos realizar envíos a Hawái, Alaska, territorios de EE. UU., casilleros postales (PO boxes) o direcciones APO/FPO. Actualmente no ofrecemos envíos a direcciones internacionales.",
  },
  popup: {
    title: "Gana 15% off en tu primera compra",
    description:
      "Inscríbete a nuestros correos o SMS para recibir un 15% de descuento. Entérate primero de lanzamientos, ofertas y mucho más.",
    button: "¡Únete!",
  },
} satisfies ContentDictionary;

export default content;
