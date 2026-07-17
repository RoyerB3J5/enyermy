import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import AddInfo from "@/components/sections/producstItem/AddInfo";
import Banner from "@/components/sections/producstItem/Banner";
import MainInfo from "@/components/sections/producstItem/MainInfo";
import Recomendations from "@/components/sections/producstItem/Recomendations";
import { getProcessedProductById, getProductTest } from "@/lib/catalog";

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
  //const product = await getProductTest("RWWOD63LXUCDONR3E3M7KS6G");
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
      "/images/argan-oil-4.webp",
    ],
    variaciones: [
      {
        id: "LAH5P56S2JYNN3RSXF77GSZK",
        nombre: "8 oz",
        precio: "45.00",
      },
      {
        id: "5O4Y6FTTDMXDVF3V3BJFYIAQ",
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
        image2: "/images/argan-oil-2.webp",
        marca: "ENYERMY STUDIO PRO",
        tieneAtributos: true,
      },
      {
        id: "2",
        nombre: " Leave-in conditioner Versatile Cream for Deep Hydration",
        precio: "50.00",
        imagen: "/images/argan-oil-2.webp",
        image2: "/images/argan-oil-1.webp",
        marca: "ENYERMY STUDIO PRO VELVETY SILK",
        tieneAtributos: false,
      },
      {
        id: "3",
        nombre: "Bonding Mask",
        precio: "45.00",
        imagen: "/images/argan-oil-1.webp",
        image2: "/images/argan-oil-2.webp",
        marca: "ENYERMY STUDIO PRO",
        tieneAtributos: true,
      },
      {
        id: "4",
        nombre: " Leave-in conditioner Versatile Cream for Deep Hydration",
        precio: "50.00",
        imagen: "/images/argan-oil-2.webp",
        image2: "/images/argan-oil-1.webp",
        marca: "ENYERMY STUDIO PRO VELVETY SILK",
        tieneAtributos: false,
      },
      {
        id: "5",
        nombre: "Bonding Mask",
        precio: "45.00",
        imagen: "/images/argan-oil-1.webp",
        image2: "/images/argan-oil-2.webp",
        marca: "ENYERMY STUDIO PRO",
        tieneAtributos: true,
      },
      {
        id: "6",
        nombre: " Leave-in conditioner Versatile Cream for Deep Hydration",
        precio: "50.00",
        imagen: "/images/argan-oil-2.webp",
        image2: "/images/argan-oil-1.webp",
        marca: "ENYERMY STUDIO PRO VELVETY SILK",
        tieneAtributos: false,
      },
    ],
    button: {
      text: "View All",
      href: "/products",
    },
  };
  const contentFixed = {
    buttonLabel: "ADD to bag",
    accordeon: [
      {
        header: "How to use",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        header: "Ingredients",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        header: "Return Policy",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        header: "Shipping",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  };
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <MainInfo
        contentProduct={content}
        contentFixed={contentFixed.accordeon}
      />
      {/*<pre className="bg-gray-100 p-4 rounded-lg overflow-auto max-w-full block">
        <code>
          {JSON.stringify(
            content,
            (key, value) =>
              typeof value === "bigint" ? value.toString() : value,
            2,
          )}
        </code>
      </pre> */}

      <AddInfo contentProduct={content} />
      <Recomendations
        content={contentRecomendations}
        buttonLabel={contentFixed.buttonLabel}
      />
      <Banner contentProduct={content} />
      <CallEmail />
      <CarouselReview />
    </main>
  );
}
