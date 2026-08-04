import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import Bundles from "@/components/sections/main/Bundles";
import Collections from "@/components/sections/main/Collections";
import Hero from "@/components/sections/main/Hero";
import ItemAlone from "@/components/sections/main/ItemAlone";
import Professionals from "@/components/sections/main/Professionals";
import Recomendations from "@/components/sections/producstItem/Recomendations";
import { getContent } from "@/i18n/content";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { getBestSellerProductCardProps } from "@/lib/bestSeller";
import { getAllProducts, getAllProductsTest } from "@/lib/catalog";

type MainContent = (typeof import("@/content/en"))["default"]["main"];

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
const contentAloneProduct = {
  imageProduct: "/images/main/long-lasting.webp",
  tag: "ENYERMY STUDIO PRO",
  title: "10 minutes Express Long-Lasting Color & Shine",
  button: "CHECK PRODUCT",
  bgColor: "bg-accent",
  image: "back-alone",
};
const contentProfessionals = [
  {
    image: "/images/main/item-product-1.webp",
    tag: "ENYERMY STUDIO PRO",
    title: "Cream Developer",
    price: "33.00",
  },
  {
    image: "/images/main/item-product-2.webp",
    tag: "ENYERMY STUDIO PRO",
    title: "Bleach Ligtening PLEX-tech Violet Powder",
    price: "42.00",
  },
  {
    image: "/images/main/item-product-3.webp",
    tag: "ENYERMY STUDIO PRO CURLYME MASK",
    title: "Curls Definer Cream",
    price: "42.00",
  },
  {
    image: "/images/main/item-product-4.webp",
    tag: "ENYERMY STUDIO PRO velvety sleek",
    title: "Volume Reducer The Keratin Alternative Treatment.",
    price: "180.00",
  },
];
export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  //const bestSellersProducts = await getBestSellerProductCardProps();
  //const products = await getAllProductsTest();
  if (!hasLocale(locale)) {
    notFound();
  }
  const { main: content } = await getContent<{ main: MainContent }>(locale);

  return (
    <main className="w-full flex flex-col justify-center items-center pt-(--header-height) md:pt-0">
      <Hero content={content.hero} />
      {/*<pre className="bg-gray-100 p-4 rounded-lg overflow-auto max-w-full block">
        <code>
          {JSON.stringify(
            bestSellersProducts,
            (key, value) =>
              typeof value === "bigint" ? value.toString() : value,
            2,
          )}
        </code>
      </pre>*/}
      
      <Recomendations
        content={content.bestSellers}
        buttonLabel={content.button}
        bestSellers={bestSellersProducts}
      />
      <Bundles content={content.bundles} />
      <Collections content={content.collection} />
      <ItemAlone content={contentAloneProduct} />
      <CallEmail />
      <Bundles content={content.routine} changeColor={true} />
      <Professionals
        content={content.professionals}
        contentProducts={contentProfessionals}
      />
      <CarouselReview />
    </main>
  );
}
