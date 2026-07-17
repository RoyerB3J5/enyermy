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
        link: "/products",
      },
      image: "main/hero-main",
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
        link: "/bundles",
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
        link: "#",
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
            href: "#",
          },
        },
        {
          image: "color-collection",
          title: "Hair Color Solutions",
          description: "Color That Lasts",
          button: {
            text: "Check Now",
            href: "#",
          },
        },
        {
          image: "curl-collection",
          title: "Curl Care",
          description: "Specialized Hair Care",
          button: {
            text: "Check Now",
            href: "#",
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
          image: "color-1",
        },
        {
          color: "bg-morado",
          slogan: "Deeply Hydrates Hair!",
          image: "color-2",
        },
        {
          color: "bg-verde",
          slogan: "Nourishes Every Strand!",
          image: "color-3",
        },
        {
          color: "bg-azul",
          slogan: "Revitalizes the Hair!",
          image: "color-4",
        },
      ],
    },
    button: "Add to BAG",
  },
  footer: {
    quickLinks: {
      title: "Quick Links",
      links: [
        { label: "Shop All", href: "/" },
        { label: "Hair Salon Services", href: "/salon-services" },
        { label: "Our Stylists", href: "/stylists" },
        { label: "Blog", href: "/blog" },
      ],
    },
    products: {
      title: "Products",
      links: [
        { label: "All Products", href: "/products" },
        { label: "Shop by Collections", href: "/shop-collections" },
        { label: "Shop Bundles", href: "/bundles" },
      ],
    },
    servicesArea: {
      title: "Locations",
      areas: ["Ocoee", "Orlando", "Waterford Lakes", "St. Petersburg"],
    },
    aboutUs: {
      title: "About Us",
      description:
        "Professional hair care designed to nourish,restore, and elevate every hair journey.",
    },
  },
} satisfies ContentDictionary;

export default content;
