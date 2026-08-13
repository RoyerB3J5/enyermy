import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import AddInfo from "@/components/sections/producstItem/AddInfo";
import Banner from "@/components/sections/producstItem/Banner";
import MainInfo from "@/components/sections/producstItem/MainInfo";
import Recomendations from "@/components/sections/producstItem/Recomendations";
import { getRecommendedProducts } from "@/lib/catalog";
import { getProcessedProductById } from "@/lib/productById";

import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: "Products | Enyermy Studio Pro",
  description: "Complete catalog of products",
};
const bestSellersProducts = [
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
];

export default async function ProductsItem({ params }: Props) {
  const { id } = await params;
  const idTrue = id.split("-").pop() || id
  //const idTrue = "ARFVMRGULBUXICTFCFR7543S";
  const [contentProduct, bestSellersProducts] = await Promise.all([
    getProcessedProductById(idTrue),
    getRecommendedProducts("Recomendados"),
  ]);
  //const content = await getProcessedProductById(idTrue);
  //const productTest = await getProcessedProductById("ARFVMRGULBUXICTFCFR7543S");
  //const recommendedProducts = await getRecommendedProducts("Recomendados");
  if (!contentProduct) {
    return <div>Product not found</div>;
  }
  const content = {
    id: "RWWOD63LXUCDONR3E3M7KS6G",
    nombre: "Bonding Mask",
    descripcion:
      "Repairs Severely Damaged Hair. Infused With Amino Keratin. Strengthens Hair Bonds. Restores Shine & Luminosity. Revitalizes Hair Health.",
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
    ComoUsar:
      "Apply to damp hair after shampooing. Leave on for 2-3 minutes then rinse thoroughly.",
    ingredientesArray: [
      "Amino Keratin",
      "Strengthening Proteins",
      "Botanical Extracts",
    ],
    bulletsArray: [
      "Repairs Severely Damaged Hair",
      "Infused With Amino Keratin",
      "Strengthens Hair Bonds",
    ],
  };
  const contentRecomendations = {
    title: "Our Recommended Products",
    button: {
      text: "View All",
      href: "/products",
    },
  };
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <MainInfo
        contentProduct={contentProduct}
        comoUsar={contentProduct.ComoUsar}
        ingredientsArray={contentProduct.ingredientesArray}
      />
      {/*<pre className="bg-gray-100 p-4 rounded-lg overflow-auto max-w-full block">
        <code>
          {JSON.stringify(
            product,
            (key, value) =>
              typeof value === "bigint" ? value.toString() : value,
            2,
          )}
        </code>
      </pre> */}
      <AddInfo contentProduct={contentProduct} />
      <Recomendations
        content={contentRecomendations}
        buttonLabel="Add to cart"
        bestSellers={bestSellersProducts}
      />
      <Banner contentProduct={contentProduct} />
      <CallEmail />
      <CarouselReview />
    </main>
  );
}
