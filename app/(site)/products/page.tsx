import type { Metadata } from "next";
import { getLightProducts } from "@/lib/catalog";
import type { LightProduct } from "@/types/square";
import Hero from "@/components/sections/products/Hero";
import GridProducts from "@/components/sections/products/GridProducts";
import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Products | Enyermy Studio Pro",
  description: "Complete catalog of products",
};

export default async function ProductsPage() {
  // const productos = await getLightProducts();
  const productos: LightProduct[] = [
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
  ];

  return (
    <main className="w-full flex flex-col justify-center items-center pt-(--header-height)">
      <Hero />
      <GridProducts content={productos} />
      <CallEmail />
      <CarouselReview />
    </main>
  );
}
