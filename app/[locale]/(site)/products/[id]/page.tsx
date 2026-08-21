import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import AddInfo from "@/components/sections/producstItem/AddInfo";
import Banner from "@/components/sections/producstItem/Banner";
import MainInfo from "@/components/sections/producstItem/MainInfo";
import Recomendations from "@/components/sections/producstItem/Recomendations";
import { getRecommendedProducts } from "@/lib/catalog";
import { getProcessedProductById } from "@/lib/productById";

import type { Metadata } from "next";
import { buildPageMetadata, stripHtml } from "@/lib/seo";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;
  const idTrue = id.split("-").pop() || id;
  const contentProduct = await getProcessedProductById(idTrue);

  if (!contentProduct) {
    return buildPageMetadata({
      locale: "en",
      path: `products/${id}`,
      title: { en: "Product Not Found", es: "Producto No Encontrado" },
      description: { en: "The requested product was not found.", es: "El producto solicitado no fue encontrado." },
      noIndex: true,
    });
  }

  const productTitle = contentProduct.nombre;
  const productDescription = stripHtml(contentProduct.descripcion || contentProduct.description || "");

  return buildPageMetadata({
    locale: "en",
    path: `products/${id}`,
    title: {
      en: `${productTitle} | Enyermy Studio Pro`,
      es: `${productTitle} | Enyermy Studio Pro`,
    },
    description: {
      en: productDescription.slice(0, 160) || `Discover ${productTitle} - professional hair care product from Enyermy Studio Pro.`,
      es: productDescription.slice(0, 160) || `Descubre ${productTitle} - producto capilar profesional de Enyermy Studio Pro.`,
    },
    image: contentProduct.imagenes?.[0] || "/images/portada.jpg",
  });
}

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
