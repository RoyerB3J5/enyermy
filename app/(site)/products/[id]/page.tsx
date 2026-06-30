import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import AddInfo from "@/components/sections/producstItem/AddInfo";
import Banner from "@/components/sections/producstItem/Banner";
import MainInfo from "@/components/sections/producstItem/MainInfo";
import Recomendations from "@/components/sections/producstItem/Recomendations";
import { getProcessedProductById } from "@/lib/catalog";

import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: "Products | Enyermy Studio Pro",
  description: "Complete catalog of products",
};
export default async function ProductsItem({ params }: Props) {
  const { id } = await params;
  //const content = await getProcessedProductById(id);
  const content = {
    id: "RWWOD63LXUCDONR3E3M7KS6G",
    nombre: "Bonding Mask",
    descripcionArray: [
      "Repairs Severely Damaged Hair",
      "Infused With Amino Keratin",
      "Strengthens Hair Bonds",
      "Restores Shine & Luminosity",
      "Revitalizes Hair Health",
    ],
    imagenes: [
      "/images/argan-oil-1.webp",
      "/images/argan-oil-2.webp",
      "/images/argan-oil-3.webp",
      "/images/argan-oil-4.webp",
    ],
    variaciones: [
      {
        nombre: "8 oz",
        precio: "45.00",
      },
      {
        nombre: "32 oz",
        precio: "45.00",
      },
    ],
    table: [
      {
        nombre: "Technology",
        valor: "Advanced Bonding Technology",
      },
      {
        nombre: "Key benefits",
        valor: "Restructures, repairs, strengthens & restores shine",
      },
      {
        nombre: "Best for",
        valor: "Severely damaged & chemically treated hair",
      },
      {
        nombre: "Hero ingredient",
        valor: "Amino Keratin",
      },
      {
        nombre: "Rich in",
        valor: "Amino keratin & strengthening proteins",
      },
      {
        nombre: "Hair concerns",
        valor: "Restructures, repairs, strengthens & restores shine",
      },
    ],
    "Description-2":
      "Advanced bonding technology for visibly healthier, shinier hair.",
    Brand: "ENYERMY STUDIO PRO",
    "Banner Title": "Botanical-Powered Formula",
    "Banner Description": "Natural Care, Professional Performance",
  };
  const contentRecomendations = {
    title: "Our Recommended Products",
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
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <MainInfo contentProduct={content} />
      <AddInfo contentProduct={content} />
      <Recomendations content={contentRecomendations} />
      <Banner contentProduct={content} />
      <CallEmail />
      <CarouselReview />
      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto max-w-full block">
        <code>
          {JSON.stringify(
            content,
            (key, value) =>
              typeof value === "bigint" ? value.toString() : value,
            2,
          )}
        </code>
      </pre>
    </main>
  );
}
