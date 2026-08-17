import type { Metadata } from "next";
import { getAllProducts, getAllProductsTest } from "@/lib/catalog";
import type { getAllProductsType } from "@/types/square";
import Hero from "@/components/sections/products/Hero";
import GridProducts from "@/components/sections/products/GridProducts";
import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { getContent } from "@/i18n/content";

export const metadata: Metadata = {
  title: "Products | Enyermy Studio Pro",
  description: "Complete catalog of products",
};
type AllProductsContent =
  (typeof import("@/content/en"))["default"]["productsAll"];

export default async function ProductsPage({ params }: PageProps<"/[locale]">) {
  const allProducts = await getAllProducts();
  //
  //const allProductsTest = await getAllProductsTest();
  //const categoriasTodas = await getCategoryIdByName();
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const { productsAll: content } = await getContent<{
    productsAll: AllProductsContent;
  }>(locale);

  return (
    <main className="w-full flex flex-col justify-center items-center pt-(--header-height)">
      <Hero content={content} />
      {/* <pre className="bg-gray-100 p-4 rounded-lg overflow-auto max-w-full block">
        <code>
          {JSON.stringify(
            allProductsTest,
            (key, value) =>
              typeof value === "bigint" ? value.toString() : value,
            2,
          )}
        </code>
      </pre>*/}
      <GridProducts
        content={allProducts}
        contentFixed={content.products}
        buttonLabel={content.button}
        productContent={content.productContent}
      />
      <CallEmail />
      <CarouselReview />
      {/*
        [
          {
            "id": "JQN5KL57MWQMQRZZPVN6MCZJ",
            "nombre": "Blonde Perfection Bundle",
            "precio": "90.00",
            "imagenes": [
              "https://items-images-sandbox.s3.us-west-2.amazonaws.com/files/b7abbe723225331a67b7e6edd17599a1cca48987/original.png"
            ],
            "marca": "Sin marca",
            "tieneAtributos": false,
            "bestSeller": null,
            "categoriaId": "KW6QIGBQLR7PWWGEI3JLAK6O",
            "categoriaNombre": "Bundles",
            "createdAt": "2026-07-28T06:23:16.375Z"
          },
          {
            "id": "RWWOD63LXUCDONR3E3M7KS6G",
            "nombre": "Bonding Mask",
            "precio": "45.00",
            "imagenes": [
              "https://items-images-sandbox.s3.us-west-2.amazonaws.com/files/1529ac42f273d20d5f4d0d438fc09a3aa234a6d1/original.png",
              "https://items-images-sandbox.s3.us-west-2.amazonaws.com/files/48c68f19d80ebe28ccc770bb933d7570cfd894a6/original.png"
            ],
            "marca": "ENYERMY STUDIO PRO",
            "tieneAtributos": true,
            "bestSeller": "Si",
            "categoriaId": "ZJERRWRTMOF3YNIWQBLYDRST",
            "categoriaNombre": "Pro",
            "cabelloTipo": "rizado",
            "createdAt": "2026-06-24T06:10:25.534Z"
          }
        ]
      */}
    </main>
  );
}
