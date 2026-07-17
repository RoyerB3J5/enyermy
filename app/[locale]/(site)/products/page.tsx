import type { Metadata } from "next";
import { getLightProducts } from "@/lib/catalog";
import type { LightProduct } from "@/types/square";
import Hero from "@/components/sections/products/Hero";
import GridProducts from "@/components/sections/products/GridProducts";
import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
export const revalidate = 3600;
interface ProductCardPropsWithImage extends LightProduct {
  image2: string; // O usa `image2?: string;` si es opcional
}
export const metadata: Metadata = {
  title: "Products | Enyermy Studio Pro",
  description: "Complete catalog of products",
};

const content = {
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
      { id: "1", label: "Todos" },
      { id: "2", label: "Mayor a menor precio" },
      { id: "3", label: "Menor a mayor precio" },
      { id: "4", label: "Novedad" },
      { id: "5", label: "Los más vendidos" },
    ],
  },
  button: "ADD to BAG",
};

export default async function ProductsPage() {
  // const productos = await getLightProducts();
  const productos: ProductCardPropsWithImage[] = [
    {
      id: "1",
      nombre: "Bonding Mask",
      precio: "45.00",
      imagen: "/images/argan-oil-1.webp",
      marca: "ENYERMY STUDIO PRO",
      tieneAtributos: true,
      image2: "/images/argan-oil-2.webp",
    },
    {
      id: "2",
      nombre: " Leave-in conditioner Versatile Cream for Deep Hydration",
      precio: "50.00",
      imagen: "/images/argan-oil-2.webp",
      marca: "ENYERMY STUDIO PRO VELVETY SILK",
      tieneAtributos: false,
      image2: "/images/argan-oil-1.webp",
    },
    {
      id: "3",
      nombre: "Bonding Mask",
      precio: "45.00",
      imagen: "/images/argan-oil-1.webp",
      marca: "ENYERMY STUDIO PRO",
      tieneAtributos: true,
      image2: "/images/argan-oil-2.webp",
    },
    {
      id: "4",
      nombre: " Leave-in conditioner Versatile Cream for Deep Hydration",
      precio: "50.00",
      imagen: "/images/argan-oil-2.webp",
      marca: "ENYERMY STUDIO PRO VELVETY SILK",
      tieneAtributos: false,
      image2: "/images/argan-oil-1.webp",
    },
  ];

  return (
    <main className="w-full flex flex-col justify-center items-center pt-(--header-height)">
      <Hero content={content} />
      <GridProducts
        content={productos}
        contentFixed={content.products}
        buttonLabel={content.button}
      />
      <CallEmail />
      <CarouselReview />
    </main>
  );
}
