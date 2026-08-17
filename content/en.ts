import type { ContentDictionary } from "@/i18n/types";

const content = {
  header: {
    changePage: [
      {
        label: "Hair Care",
        href: "/",
      },
      {
        label: "Salon Experience",
        href: "/salon-experience",
      },
    ],
    nav: [
      { label: "All Products", href: "/products" },
      { label: "Shop Bundles", href: "/bundles" },
      { label: "About Us", href: "/about-us" },
      { label: "Blog", href: "/blog" },
    ],
    navBundles: [
      { label: "Our Locations", href: "/salon-experience/locations" },
      { label: "Our Stylists", href: "/salon-experience/stylists" },
      { label: "About Us", href: "/about-us" },
      { label: "Blog", href: "/blog" },
    ],
    store: "Store Location",
  },
  main: {
    hero: {
      tag: "Professional Care. Visible Results.",
      title: "Healthy Hair. <br class='hidden md:block xl:hidden'/> Elevated.",
      description: "Stronger, shinier, healthier hair starts here.",
      button: {
        text: "Shop Now",
        link: "/en/products",
      },
      image: "main/hero-main",
    },
    bestSellers: {
      title: "Best Sellers",
      button: {
        text: "View All",
        href: "/en/products",
      },
    },
    bundles: {
      tag: "Save 25–30% on Expert-Curated Hair Care Bundles",
      title: "Bundle & Save",
      descriptions: [
        "Professional formulas with premium botanical ingredients.",
        "100% Vegan • Sulfate-Free • Paraben-Free",
      ],
      button: {
        text: "Shop Bundles",
        link: "/en/bundles",
      },
      image: "main/bundles-main",
    },
    routine: {
      tag: "Tailored Care For Every Hair Type",
      title: "Discover Your Routine",
      descriptions: [
        "Build a personalized routine with professional solutions designed <br class='hidden md:block'> for lasting beauty and confidence.",
      ],
      button: {
        text: "Find Your Hair Solution",
        link: "/en/bundles",
      },
      image: "main/routine-main",
    },
    collection: {
      title: "Signature Collections",
      items: [
        {
          image: "repair-collection",
          title: "Repair & Hydration",
          description: "Restore Strength & Shine",
          button: {
            text: "Check Now",
            href: "/en/products",
          },
        },
        {
          image: "color-collection",
          title: "Hair Color Solutions",
          description: "Color That Lasts",
          button: {
            text: "Check Now",
            href: "/en/products",
          },
        },
        {
          image: "curl-collection",
          title: "Curl Care",
          description: "Specialized Hair Care",
          button: {
            text: "Check Now",
            href: "/en/products",
          },
        },
      ],
    },
    professionals: {
      title: "For Professionals",
      atributo: "From",
      items: [
        {
          color: "bg-rojo",
          slogan: "Enhances Hair Beauty!",
          image: "color-5",
        },
        {
          color: "bg-morado",
          slogan: "Deeply Hydrates Hair!",
          image: "color-1",
        },
        {
          color: "bg-verde",
          slogan: "Nourishes Every Strand!",
          image: "color-2",
        },
        {
          color: "bg-azul",
          slogan: "Revitalizes the Hair!",
          image: "color-3",
        },
      ],
    },
    button: "Add to BAG",
  },
  productsAll: {
    image: "hero-products",
    tag: "Professional Hair Care For Every Need",
    title: "Discover Every Solution",
    description:
      "Explore our complete collection of expertly crafted formulas designed to <br class='hidden lg:block'/> hydrate, repair, protect, and enhance every hair type.",
    products: {
      products: "products",
      filtro: "Filter",
      sortBy: "Sort by:",
      items: [
        { id: "1", label: "All" },
        { id: "2", label: "Price: High to low" },
        { id: "3", label: "Price: Low to high" },
        { id: "4", label: "Newest" },
        { id: "5", label: "Best sellers" },
      ],
      itemsType: [
        { id: "todos", label: "All" },
        { id: "seco", label: "Dry or damaged hair" },
        { id: "rizado", label: "Color-treated hair" },
        { id: "teñido", label: "Curly hair" },
        { id: "Velvety Silk", label: "Velvety Silk Collection" },
        { id: "Pro", label: "Pro Collection" },
        { id: "Vivify", label: "Vivify Collection" },
        { id: "Curlyme", label: "Curly Me Collection" },
      ],
    },
    button: "ADD to BAG",
    productContent: [
      {
        image: "info-product-1",
        title: "Reveal <br/> Silky <br className='block md:hidden'/> Hair",
        href: "#",
        position: "left",
        colorText: "white",
        labelButton: "Shop Now",
      },
      {
        image: "info-product-2",
        title: "Perfect <br/> Every <br className='block md:hidden'/> Curl",
        href: "#",
        position: "left",
        colorText: "black",
        labelButton: "Shop Now",
      },
      {
        image: "info-product-3",
        title:
          "From <br class='block md:hidden'/> Brassy <br class='hidden md:block'/> to <br class='block md:hidden'/> Blonde",
        href: "#",
        position: "right",
        colorText: "white",
        labelButton: "Shop Now",
      },
    ],
  },
  salonExperience: {
    hero: {
      tag: "color correction and hair extention",
      title: "Beauty Rooted <br class='hidden md:block'/> in Purpose",
      description: "Experts. Artistry. Experience.",
      button: {
        text: "BOOK APPOINTMENT",
        link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
      },
      image: "salon-experience/hero-main",
    },
    location: {
      title: "Our Locations",
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
      title: "Expert Care. Exceptional Results. ",
      description:
        "Once redirected to our booking page, please select your preferred location in the top-right corner before scheduling your appointment.",
      items: [
        {
          image: "services-1",
          title: "face framing balayage",
          description:
            "Brighten your features with customized, face-framing balayage highlights.",
          price: "From $230.00",
          time: "+2 h 30 min",
          link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services/WVM3AGS2YS2SDDPROK5CQPIN",
        },
        {
          image: "services-2",
          title: "Invisible Hair Extentions",
          description:
            "Professional extension installation for fuller, longer, natural-looking hair.",
          price: "From $280.00",
          time: "+ 50 min",
          link: "https://book.squareup.com/appointments/wmf7r8fcik8zye/location/HT6A7Q5H5E2QW/services/FMXP7763AUWMZ5HEGDA5UWGD",
        },
        {
          image: "services-3",
          title: "Hair cuts",
          description:
            "Professional haircut tailored to enhance your style and features.",
          price: "From $35.00",
          time: "30 min",
          link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services/LF6IHEM22CKIBP2REL3ALU3E",
        },
        {
          image: "services-4",
          title: "Medium Length Blow-Dry",
          description:
            "Achieve smooth, voluminous hair with a flawless salon-quality blowout.",
          price: "From $55.00",
          time: "+45 min",
          link: "https://book.squareup.com/appointments/wmf7r8fcik8zye/location/HT6A7Q5H5E2QW/services/6LJMH2BTBL5SUBBTIVCD423F",
        },
        {
          image: "services-5",
          title: "Double process Color Corrections",
          description: "",
          price: "From $330.00",
          time: "+ 3 h 30 min",
          link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services/5YLYVVDFL334ICBOVLH4BBPH",
        },
        {
          image: "services-6",
          title: "Full Highlights",
          description:
            "Add depth, dimension, and brightness with expertly placed highlights.",
          price: "From $280.00",
          time: "+ 3 h",
          link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services/GMEXPOD5RFRWFLUWAAM254KB",
        },
        {
          image: "services-7",
          title: "Roots Touch Up",
          description: "",
          price: "From $110.00",
          time: "+1 h",
          link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services/WJRPP32KP44KRUKWHVFPLD77",
        },
      ],
      button: {
        text: "View All",
        href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
      },
    },
    tranformation: {
      tag: "luxury. transformation.",
      title: "More Than a Service, <br/> It's an Experience.",
      descriptions: [],
      button: {
        text: "BOOK APPOINTMENT",
        link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
      },
      image: "salon-experience/transformation-main",
    },
    luxury: {
      tag: "Expert services tailored to your hair goals.",
      title: "Luxury Hair Care",
      descriptions: [
        "Where expert craftsmanship meets personalized <br/> care for exceptional hair results.",
      ],
      button: {
        text: "BOOK APPOINTMENT",
        link: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
      },
      image: "salon-experience/luxury-main",
    },
    professional: {
      title: "For Professionals",
      info: {
        image: "odeth",
        tag: "Personalized Consultation",
        name: "Let's Create Your Signature Look",
        description:
          "Receive expert recommendations and a customized service plan designed to achieve your ideal hair transformation.",
        list: [],
        media: false,
        button: {
          label: "Book now",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
        },
        bgColor: "bg-accent",
        imageFirst: false,
      },
    },
  },
  location: {
    hero: {
      image: "hero-locations",
      tag: "Professional Care. Personalized Results.",
      title: "Crafted For Your Beauty",
      description:
        "Discover bespoke salon services designed to transform, restore, and elevate \n your hair with confidence.",
    },
    title: "Our Locations",
    items: [
      {
        image: "ocoee",
        name: "Ocoee",
        direction: "1099 S Clarke Rd  Ocoee",
        href: "#",
      },
      {
        image: "orlando",
        name: "Orlando",
        direction: "4526 Curry Ford Rd Orlando",
        href: "#",
      },
      {
        image: "waterford",
        name: "Waterford Lakes",
        direction: "12789 Waterford Lakes Pkwy Ste 11  Orlando",
        href: "#",
      },
      {
        image: "petersburg",
        name: "St. Petersburg",
        direction: "6901 22nd Ave N Suite 6707, St.Petersburg",
        href: "#",
      },
    ],
    mainPage: true,
  },
  stylists: {
    title: "Meet Our Experts",
    items: [
      {
        location: "ocoee",
        image: "enyermy",
        tag: "founder",
        name: "Enyermy Dominguez",
        description:
          "With over 25 years of experience, she is the Founder of ENYERMY Studio Pro. Known for advanced hair transformations and strategic expertise, she combines technical excellence with business leadership, creating personalized solutions while mentoring professionals and leading the growth and vision of the brand.",
        list: [
          "Advanced Color Correction",
          "Complex Hair Transformations",
          "Balayage & Dimensional Color",
          "Advanced Blonding",
          "Hair Extensions",
          "Customized Color Planning",
          "Technical Education",
          "Stylist Mentorship",
        ],
        media: true,
        button: {
          label: "book at enyermy studio pro",
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
        tag: "Master Stylist",
        name: "Mecho Payano",
        description:
          "An experienced beauty professional, she combines technical expertise with a personalized approach to create customized hair transformations. Through careful consultations and precision techniques, she delivers beautiful results while prioritizing the health and integrity of every guest's hair.",
        list: [
          "Color Correction",
          "Balayage & Dimensional Color",
          "Blonding Services",
          "Customized Hair Color",
          "Hair Transformations",
          "Haircuts & Styling",
          "Hair Treatments",
        ],
        media: true,
        button: {
          label: "bOOK WITH MECO",
          href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
        },
        bgColor: "bg-accent",
        imageFirst: true,
        linkContent: {
          text: "@mecho_stylist →",
          href: "https://www.instagram.com/mecho_stylist?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "ocoee",
        image: "leticia",
        tag: "HAIR STYLIST",
        name: "Letty García",
        description:
          "Known for her personalized approach, she creates beautiful, customized looks tailored to each guest’s style and lifestyle. Through thoughtful consultations and professional expertise, she ensures every guest enjoys a comfortable experience and leaves feeling confident and refreshed.",
        list: [
          "Hair Color",
          "Dimensional Color",
          "Highlights & Blonding",
          "Root Color",
          "Haircuts",
          "Blowouts",
          "Hair Care Treatments",
        ],
        media: true,
        button: {
          label: "book WITH Leticia",
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
        tag: "HAIR STYLIST",
        name: "Hemely Hernandez",
        description:
          "A creative and detail-oriented stylist helps guests find a look that matches their personality and lifestyle. She focuses on both the appearance and manageability of hair, prioritizing health and long-term goals during personalized consultations.",
        list: [
          "Balayage",
          "Highlights",
          "Customized Color",
          "Haircuts & Styling",
          "Blowouts",
          "Hair Treatments",
          "Personalized Consultations",
        ],
        media: true,
        button: {
          label: "book WITH Hemely",
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
        tag: "GENERAL MANAGER",
        name: "Carla Caldemonte",
        description:
          "As General Manager of ENYERMY Studio Pro, she leads operations with a focus on consistency, team development, and exceptional guest experiences. By supporting salon managers and strengthening daily operations, she helps ensure every location reflects the brand’s high standards and vision.",
        list: [
          "Multi-Location Operations",
          "Team & Manager Support",
          "Leadership Development",
          "Guest Experience",
          "Operational Systems",
          "Team Performance",
          "Business Growth",
        ],
        media: true,
        button: {
          label: "book at enyermy studio pro",
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
        tag: "MARKETING DIRECTOR / OCOEE MANAGER",
        name: "Yinatais Cintron",
        description:
          "As Marketing Director and Manager of our Ocoee location, she combines creative strategy with salon leadership to grow the ENYERMY Studio Pro brand. Through impactful marketing, community engagement, and exceptional guest experiences, she helps drive the brand’s growth while supporting daily salon operations.",
        list: [
          "Brand Storytelling",
          "Social Media Strategy",
          "Content & Campaigns",
          "Guest Acquisition",
          "Promotions & Special Events",
          "Community Partnerships",
          "Team Leadership",
          "Guest Experience",
        ],
        media: true,
        button: {
          label: "book at enyermy studio pro",
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
        tag: "ORLANDO MANAGER / TRICHOLOGIST",
        name: "Ruth Noboa",
        description:
          "As Manager and Trichologist at our Orlando location, she combines salon leadership with specialized expertise in hair and scalp health. Through personalized consultations, she creates customized care plans that promote healthier hair while helping guests understand and address their individual needs",
        list: [
          "Hair & Scalp Assessments",
          "Trichology Consultations",
          "Scalp Care",
          "Hair Health & Wellness",
          "Customized Treatment Plans",
          "Thinning Hair Support",
          "Preventive Hair Care",
        ],
        media: true,
        button: {
          label: "bOOK WITH RUTH",
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
        tag: "ORLANDO TEAM LEADER / HAIR EXTENSIONist",
        name: "Lorena Greenwich",
        description:
          "As Team Leader at our Orlando location, she specializes in customized hair extensions that deliver seamless, natural-looking results. Through personalized consultations and technical expertise, she creates tailored extension solutions while supporting the growth and excellence of the salon team.",
        list: [
          "Hair Extension Consultations",
          "Invisible Sew-In Extensions",
          "Machine Weft Extensions",
          "K-Tip Extensions",
          "Custom Color Matching & Blending",
          "Length & Volume Transformations",
          "Extension Maintenance",
        ],
        media: true,
        button: {
          label: "book WITH Lorena",
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
        tag: "HAIR STYLIST",
        name: "Juana Fernandez",
        description:
          "A dedicated beauty professional, she creates personalized hair services tailored to each guest's style and goals. Through thoughtful consultations and attention to detail, she delivers beautiful, wearable results while providing a comfortable and professional salon experience.",
        list: [
          "Hair Color",
          "Balayage",
          "Highlights",
          "Root Touch-Ups",
          "Haircuts",
          "Blowouts & Styling",
          "Hair Treatments",
        ],
        media: true,
        button: {
          label: "bOOK WITH Juana",
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
        tag: "GENERAL MANAGER",
        name: "Carla Caldemonte",
        description:
          "As General Manager of ENYERMY Studio Pro, she leads operations with a focus on consistency, team development, and exceptional guest experiences. By supporting salon managers and strengthening daily operations, she helps ensure every location reflects the brand’s high standards and vision.",
        list: [
          "Multi-Location Operations",
          "Team & Manager Support",
          "Leadership Development",
          "Guest Experience",
          "Operational Systems",
          "Team Performance",
          "Business Growth",
        ],
        media: true,
        button: {
          label: "book at enyermy studio pro",
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
        tag: "MARKETING DIRECTOR / OCOEE MANAGER",
        name: "Yinatais Cintron",
        description:
          "As Marketing Director and Manager of our Ocoee location, she combines creative strategy with salon leadership to grow the ENYERMY Studio Pro brand. Through impactful marketing, community engagement, and exceptional guest experiences, she helps drive the brand’s growth while supporting daily salon operations.",
        list: [
          "Brand Storytelling",
          "Social Media Strategy",
          "Content & Campaigns",
          "Guest Acquisition",
          "Promotions & Special Events",
          "Community Partnerships",
          "Team Leadership",
          "Guest Experience",
        ],
        media: true,
        button: {
          label: "book at enyermy studio pro",
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
        tag: "ST. PETERSBURG MANAGER / MASTER STYLIST",
        name: "Odeth Dominguez",
        description:
          "As Manager and Master Stylist at our St. Petersburg location, she combines technical expertise with personalized care to deliver exceptional results. Through detailed consultations, she creates customized hair plans that achieve beautiful transformations while maintaining healthy, strong hair.",
        list: [
          "Color Correction",
          "Balayage & Dimensional Color",
          "Blonding Services",
          "Customized Hair Transformations",
          "Haircuts & Styling",
          "Personalized Hair Consultations",
        ],
        media: true,
        button: {
          label: "bOOK WITH ODETH",
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
        tag: "WATERFORD LAKES MANAGER",
        name: "Mariana Soucre",
        description:
          "As Manager of our Waterford Lakes location, she leads with a focus on teamwork, consistency, and exceptional guest care. By supporting daily operations and maintaining ENYERMY Studio Pro’s high service standards, she helps create a welcoming and professional experience for every guest.",
        list: [
          "Guest Experience",
          "Team Support & Leadership",
          "Daily Salon Operations",
          "Client Care & Retention",
          "Service Standards",
          "Team Communication",
          "Salon Organization",
        ],
        media: true,
        button: {
          label: "bOOK WITH Mariana",
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
        tag: "WATERFORD LAKES TEAM LEADER / MANAGER",
        name: "Lourdes Escabrisas",
        description:
          "As Team Leader and Educator at our Waterford Lakes location, she combines technical expertise with a passion for education and personalized care. Through thoughtful consultations and precision techniques, she creates customized results while helping the salon team grow through continuous learning and professional development.",
        list: [
          "Balayage & Dimensional Color",
          "Blonding Techniques",
          "Customized Hair Color",
          "Hair Transformations",
          "Technical Education",
          "Stylist Training & Mentorship",
        ],
        media: true,
        button: {
          label: "bOOK WITH lourdes",
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
        tag: "hair stylist assistant",
        name: "Analynn Ojeda",
        description:
          "A dedicated hair professional, she creates personalized looks that reflect each guest’s style, goals, and lifestyle. With a focus on healthy hair and attention to detail, she delivers beautiful, confidence-boosting results that are both natural and easy to maintain.",
        list: [
          "Hair Color",
          "Balayage & Highlights",
          "Root Touch-Ups",
          "Haircuts",
          "Blowouts & Styling",
          "Hair Treatments",
        ],
        media: true,
        button: {
          label: "bOOK WITH Analynn",
          href: "https://app.squareup.com/appointments/book/8thjvgf0dvy73t/L57WNWAWEV0DT/start",
        },
        bgColor: "bg-accent",
        imageFirst: false,
        linkContent: {
          text: "@analynnbeaute →",
          href: "https://www.instagram.com/analynnbeaute_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      },
      {
        location: "waterford",
        image: "kamilla",
        tag: "HAIR STYLIST",
        name: "Kamilla Colon",
        description:
          "Passionate about personalized hair care, she combines creativity and attention to detail to create beautiful, healthy results. By understanding each guest’s style and goals, she delivers customized looks that inspire confidence and enhance natural beauty.",
        list: [
          "Customized Hair Color",
          "Highlights",
          "Balayage",
          "Toners & Glosses",
          "Haircuts & Styling",
          "Restorative Hair Treatments",
        ],
        media: true,
        button: {
          label: "bOOK WITH Kamilla",
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
        tag: "GENERAL MANAGER",
        name: "Carla Caldemonte",
        description:
          "As General Manager of ENYERMY Studio Pro, she leads operations with a focus on consistency, team development, and exceptional guest experiences. By supporting salon managers and strengthening daily operations, she helps ensure every location reflects the brand’s high standards and vision.",
        list: [
          "Multi-Location Operations",
          "Team & Manager Support",
          "Leadership Development",
          "Guest Experience",
          "Operational Systems",
          "Team Performance",
          "Business Growth",
        ],
        media: true,
        button: {
          label: "book at enyermy studio pro",
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
        tag: "MARKETING DIRECTOR / OCOEE MANAGER",
        name: "Yinatais Cintron",
        description:
          "As Marketing Director and Manager of our Ocoee location, she combines creative strategy with salon leadership to grow the ENYERMY Studio Pro brand. Through impactful marketing, community engagement, and exceptional guest experiences, she helps drive the brand’s growth while supporting daily salon operations.",
        list: [
          "Brand Storytelling",
          "Social Media Strategy",
          "Content & Campaigns",
          "Guest Acquisition",
          "Promotions & Special Events",
          "Community Partnerships",
          "Team Leadership",
          "Guest Experience",
        ],
        media: true,
        button: {
          label: "book at enyermy studio pro",
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
        tag: "Customer Experience",
        name: "Luisa Payano",
        description:
          "Luisa is a dedicated salon assistant committed to ensuring a smooth, welcoming, and comfortable experience for every client who visits Enyermy Studio Pro.",
        list: [
          "Client Care Support",
          "Salon Operations Assistant",
          "Guest Experience Focused",
        ],
        media: true,
        button: {
          label: "bOOK WITH LUISA",
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
        tag: "GENERAL MANAGER",
        name: "Carla Caldemonte",
        description:
          "As General Manager of ENYERMY Studio Pro, she leads operations with a focus on consistency, team development, and exceptional guest experiences. By supporting salon managers and strengthening daily operations, she helps ensure every location reflects the brand’s high standards and vision.",
        list: [
          "Multi-Location Operations",
          "Team & Manager Support",
          "Leadership Development",
          "Guest Experience",
          "Operational Systems",
          "Team Performance",
          "Business Growth",
        ],
        media: true,
        button: {
          label: "book at enyermy studio pro",
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
        tag: "MARKETING DIRECTOR / OCOEE MANAGER",
        name: "Yinatais Cintron",
        description:
          "As Marketing Director and Manager of our Ocoee location, she combines creative strategy with salon leadership to grow the ENYERMY Studio Pro brand. Through impactful marketing, community engagement, and exceptional guest experiences, she helps drive the brand’s growth while supporting daily salon operations.",
        list: [
          "Brand Storytelling",
          "Social Media Strategy",
          "Content & Campaigns",
          "Guest Acquisition",
          "Promotions & Special Events",
          "Community Partnerships",
          "Team Leadership",
          "Guest Experience",
        ],
        media: true,
        button: {
          label: "book at enyermy studio pro",
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
    tag: "Expert Care, Exceptional Results.",
    title: "Our Locations",
    button: "Book Now",
    locations: [
      {
        id: 1,
        name: "Clarke",
        title: "Enyermy at Ocoee",
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
        title: "Enyermy at Orlando",
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
        title: "Enyermy at Waterford Lakes",
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
        title: "Enyermy at St. Petersburg",
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
  bundles: {
    title: "Expertly Curated Sets",
  },
  aboutUs: {
    hero: {
      tag: "Professional Care. Visible Results.",
      description2:
        "As for this temple you are building, if you follow my decrees, observe my laws and keep all my commands and obey them, I will fulfill through you the promise I give to David your father.",
      title: "Beauty Rooted in Purpose",
      description:
        "As for this temple you are building, if you follow my decrees, observe my laws and keep all my commands and obey them, I will fulfill through you the promise I give to David your father.",
      bible: "1 Kings 6:12",
      button: {
        text: "BOOK APPOINTMENT",
        link: "#",
      },
    },
    philosophy: {
      tag: "OUR PHILOSOPHY",
      title: "Beauty with Purpose",
      description:
        "We are passionate about education, innovation, and delivering exceptional results. Every service we offer is backed by expertise, premium products, and a genuine commitment to our clients.",
      items: [
        {
          icon: "Star",
          title: "Expertise",
          description:
            "Years of experience in color correction, extensions, and hair restoration.",
        },
        {
          icon: "Heart",
          title: "Personalized Care",
          description:
            "Every client is unique. We create custom plans tailored to your hair goals.",
        },
        {
          icon: "leaf",
          title: "Premium Quality",
          description:
            "We use only the highest quality products and advanced techniques for lasting results.",
        },
        {
          icon: "Gem",
          title: "Empowerment",
          description:
            "We believe confident hair transforms more than your look—it transforms you.",
        },
      ],
    },
    mision: {
      tag: "OUR MISSION",
      title:
        "Beauty Rooted <br class='hidden md:block'/> In  <br class='md:hidden block'/> Purpose",
      description:
        "At Enyermy Studio Pro, we believe beauty is more than what you see in the mirror. Our mission is not only to transform your hair but to inspire confidence, empower your spirit, and help you become the best version of yourself. Every service we provide is designed with excellence, care, and purpose-because true beauty begins from within.",
    },
    number: {
      title: "By the Numbers",
      items: [
        {
          number: "10K+",
          label: "Happy Clients",
          icon: "Users",
        },
        {
          number: "15+",
          label: "Years of <br/> Experience",
          icon: "Trophy",
        },
        {
          number: "3+",
          label: "Locations (With <br/> More Coming)",
          icon: "MapPin",
        },
        {
          number: "100%",
          label: "Commitment to <br/> Excellence",
          icon: "Star",
        },
      ],
    },
    location: {
      title: "Our Locations",
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
      tag: "tailored consultations",
      name: "Your Transformation <br/> Begins Here",
      description:
        "Every woman has a unique story, and our personalized consultation is the beginning of a transformational journey. It allows us to understand your vision, lifestyle, and beauty goals to create an extraordinary experience designed exclusively for you.",
      list: [],
      media: false,
      button: {
        label: "BOOK APPOINTMENT",
        href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
      },
      bgColor: "bg-morado",
      imageFirst: false,
    },
  },
  email: {
    title: "Suscribe to our VIP list",
    description: "Join our VIP list for exclusive offers and the latest news.",
  },
  reviewCarousel: {
    rated: "Rated 5 stars by our customers",
    title: "Real Results, Real Reviews",
    reviews: [
      {
        title: "Love it!",
        description:
          "Salon was very clean. Stylists were all polite. Both my boys got hair cuts that came out amazing!",
        name: "Jaime A.",
        color: "bg-[#E33E7A]",
      },
      {
        title: "Loved",
        description:
          "Loved the service from the start, 100% recommended, loved my balayage process. Lorena did a good job.",
        name: "Arisleydi P.",
        color: "bg-[#FBBC05]",
      },
      {
        title: "Great",
        description:
          "Just got hair done by Ruth truly the most gentle hands that delivered such an amazing experience cant wait to come back",
        name: "Kerwin D.",
        color: "bg-[#2F89D4]",
      },
      {
        title: "Great",
        description:
          "Excellent service and kindness. 100% recommended. Also got my boys' hair cut. At Waterford lake,Orlando",
        name: "Yanelys N.",
        color: "bg-[#435260]",
      },
      {
        title: "Great",
        description:
          "This girl is very professional. Excellent products. She does extreme makeovers. Thank you so very much",
        name: "Luz Q.",
        color: "bg-[#FBBC05]",
      },
      {
        title: "Great",
        description:
          "Letty did awesome job so happy I have a salon near my home that know how to blow dry hair",
        name: "Alexa F.",
        color: "bg-[#FBBC05]",
      },
    ],
  },
  footer: {
    description:
      "Professional hair care designed to nourish, restore, and elevate every hair journey.",
    button: "More",
    quickLinks: {
      title: "Menu",
      links: [
        { label: "Home", href: "/en/" },
        { label: "Shop", href: "/en/products" },
        { label: "Blog", href: "/en/blog" },
        { label: "About Us", href: "/en/about-us" },
        { label: "Privacy Policy", href: "/en/privacy-policy" },
        { label: "Refund Policy", href: "/en/refund-policy" },
        { label: "Shipping Policy", href: "/en/shipping-policy" },
        { label: "Terms of Service", href: "/en/terms-of-service" },
      ],
    },
    products: {
      title: "Products",
      links: [
        { label: "All Products", href: "/en/products" },
        { label: "Shop by Collections", href: "/en/products" },
        { label: "Shop Bundles", href: "/en/bundles" },
      ],
    },
    servicesArea: {
      title: "Locations",
      areas: ["Ocoee", "Orlando", "Waterford Lakes", "St. Petersburg"],
    },
    aboutUs: {
      title: "Contact Us",
      description:
        "1099 S Clark Rd, Ocoee, Fl, 34761 <br/> Phone: <a href='tel:+17278779107'>727 877 9107</a>",
    },
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "We share your basic  information as, name, email, and phone number with third party partner like facebook, Instagram, Tiktok and Google.",
  },
  refund: {
    title: "Refund policy",
    description:
      "We have a 30-day return policy, which means you have 30 days after receiving your item to request a return. <br/> <br/> To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase. <br/> <br/> To start a return, you can contact us at <a href='https://mail.google.com/mail/?view=cm&fs=1&to=enyermyhairsolution@gmail.com' class='underline'> enyermyhairsolution@gmail.com </a>. Please note that returns will need to be sent to the following address: 1099 s clark rd ocoee fl 34761 <br/> <br/> If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted. <br/> <br/> You can always contact us for any return question at <a href='https://mail.google.com/mail/?view=cm&fs=1&to=enyermyhairsolution@gmail.com' class='underline'> enyermyhairsolution@gmail.com </a>. <br/> <br/> <span class='font-semibold'>Damages and issues</span> <br/> Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right. <br/> <br/> <span class='font-semibold'> Exceptions / non-returnable items </span> <br/>Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item. <br/> <br/> Unfortunately, we cannot accept returns on sale items or gift cards. <br/> <br/> <span class='font-semibold'>Exchanges</span> <br/> The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item. <br/> <br/> <span class='font-semibold'>European Union 14 day cooling off period.</span> <br/> Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification. As above, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase. <br/> <br/> <span class='font-semibold'>Refunds</span> <br/> We will notify you once we’ve received and inspected your return and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too. <br/>If more than 15 business days have passed since we’ve approved your return, please contact us at <a href='https://mail.google.com/mail/?view=cm&fs=1&to=enyermyhairsolution@gmail.com' class='underline'> enyermyhairsolution@gmail.com </a>. <br/> <br/> What if my order arrived damaged? <br/> We will gladly replace any products ordered on enyermyhairsolutions.shop that were delivered to you damaged. Please email <a href='https://mail.google.com/mail/?view=cm&fs=1&to=enyermyhairsolution@gmail.com' class='underline'> enyermyhairsolution@gmail.com </a> with images of your package and your order information. Any inquiries sent after 7 business days will be ineligible for replacement. <br/> <br/> What if my package is lost? <br/>If your product shipment tracking via UPS or USPS displays no movement or displays delivered and has not been delivered, please reach out directly to the shipment company to start a claim under the tracking number for your order. for any other questions, please reach out to our team at <a href='https://mail.google.com/mail/?view=cm&fs=1&to=enyermyhairsolution@gmail.com' class='underline'> enyermyhairsolution@gmail.com </a> with your order information.",
  },
  shipping: {
    title: "Shipping Policy",
    description:
      "We do our best to process orders placed by noon Eastern Time, Monday through Friday, on the same day. Orders received after that time or on the weekend will be processed the next business day, except for holiday or high-volume timeframes. Once an order has been processed and shipped, it typically takes 5-7 business days to arrive using UPS Ground shipping, depending on the destination. <br/> Severe weather may cause shipping delays. We regret that we are not able to guarantee express delivery in the event of severe weather. We currently only accept orders being sent to the 48 contiguous United States. We are not able to ship to Hawaii, Alaska, U.S. territories, PO boxes, or APO/FPO addresses. We do not offer shipping to international addresses currently.",
  },
  term: {
    title: "Terms of service",
    description:
      "Severe weather may cause shipping delays. We regret that we are not able to guarantee express delivery in the event of severe weather. We currently only accept orders being sent to the 48 contiguous United States. We are not able to ship to Hawaii, Alaska, U.S. territories, PO boxes, or APO/FPO addresses. We do not offer shipping to international addresses currently.",
  },
  popup: {
    title: "Enjoy 15% off your first purchase",
    description:
      "Sign up for our emails or texts to receive 15% off. Plus, be the first to hear about new launches, special offers and more.",
    button: "Sign Up",
  },
} satisfies ContentDictionary;

export default content;
