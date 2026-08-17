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
  title: "Product | Enyermy Studio Pro",
  description:
    "Individual product page with detailed information and recommendations",
};

export default async function ProductsItem({ params }: Props) {
  const { id } = await params;
  const idTrue = id.split("-").pop() || id;
  const [contentProduct, bestSellersProducts] = await Promise.all([
    getProcessedProductById(idTrue),
    getRecommendedProducts("Recomendados"),
  ]);
  if (!contentProduct) {
    return <div>Product not found</div>;
  }
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
      {!contentProduct.nombre.toLowerCase().includes("extensions") && (
        <AddInfo contentProduct={contentProduct} />
      )}

      <Recomendations
        content={contentRecomendations}
        buttonLabel="Add to cart"
        bestSellers={bestSellersProducts}
      />
      {!contentProduct.nombre.toLowerCase().includes("extensions") && (
        <Banner contentProduct={contentProduct} />
      )}

      <CallEmail />
      <CarouselReview />
    </main>
  );
}
