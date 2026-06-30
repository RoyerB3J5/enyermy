import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import Bundles from "@/components/sections/main/Bundles";
import Collections from "@/components/sections/main/Collections";
import Hero from "@/components/sections/main/Hero";
import Recomendations from "@/components/sections/producstItem/Recomendations";
const content = {
  hero: {
    tag: "Professional Care. Visible Results.",
    title: "Healthy Hair. Elevated.",
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
      "Build a personalized routine with professional solutions designed <br/> for lasting beauty and confidence.",
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
};
const contentBestsellers = {
  title: "Best Sellers",
  products: [
    {
      id: "1",
      nombre: "Bonding Mask",
      precio: "45.00",
      imagen: "/images/argan-oil-1.webp",
      marca: "ENYERMY STUDIO PRO",
      tieneAtributos: true,
    },
    {
      id: "2",
      nombre: " Leave-in conditioner Versatile Cream for Deep Hydration",
      precio: "50.00",
      imagen: "/images/argan-oil-2.webp",
      marca: "ENYERMY STUDIO PRO VELVETY SILK",
      tieneAtributos: false,
    },
    {
      id: "3",
      nombre: "Bonding Mask",
      precio: "45.00",
      imagen: "/images/argan-oil-1.webp",
      marca: "ENYERMY STUDIO PRO",
      tieneAtributos: true,
    },
    {
      id: "4",
      nombre: " Leave-in conditioner Versatile Cream for Deep Hydration",
      precio: "50.00",
      imagen: "/images/argan-oil-2.webp",
      marca: "ENYERMY STUDIO PRO VELVETY SILK",
      tieneAtributos: false,
    },
    {
      id: "5",
      nombre: "Bonding Mask",
      precio: "45.00",
      imagen: "/images/argan-oil-1.webp",
      marca: "ENYERMY STUDIO PRO",
      tieneAtributos: true,
    },
    {
      id: "6",
      nombre: " Leave-in conditioner Versatile Cream for Deep Hydration",
      precio: "50.00",
      imagen: "/images/argan-oil-2.webp",
      marca: "ENYERMY STUDIO PRO VELVETY SILK",
      tieneAtributos: false,
    },
  ],
  button: {
    text: "View All",
    href: "/products",
  },
};
export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center ">
      <Hero content={content.hero} />
      <Recomendations content={contentBestsellers} />
      <Bundles content={content.bundles} />
      <Collections content={content.collection} />
      <CallEmail />
      <Bundles content={content.routine} />
      <CarouselReview />
    </main>
  );
}
