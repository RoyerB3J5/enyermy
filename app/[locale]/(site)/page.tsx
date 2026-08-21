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
import type { Metadata } from "next";
import { buildPageMetadata, toLocaleOrDefault } from "@/lib/seo";

type MainContent = (typeof import("@/content/en"))["default"]["main"];

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
    price: "48.00",
    href: "/en/products/cream-developer-ARFVMRGULBUXICTFCFR7543S",
  },
  {
    image: "/images/main/item-product-2.webp",
    tag: "ENYERMY STUDIO PRO",
    title: "Bleach Ligtening PLEX-tech Violet Powder",
    price: "42.00",
    href: "/en/products/bleach-ligtening-plextech-violet-YCNRG5PKETN47ULPB5SLI7X6",
  },
  {
    image: "/images/main/item-product-3.webp",
    tag: "ENYERMY STUDIO PRO CURLYME MASK",
    title: "Curls Definer Cream",
    price: "42.00",
    href: "/en/products/curls-definer-cream-2ZLAXZC3DLBWCNCEJV3VDVZ2",
  },
  {
    image: "/images/main/item-product-4.webp",
    tag: "ENYERMY STUDIO PRO velvety sleek",
    title: "Volume Reducer The Keratin Alternative Treatment.",
    price: "180.00",
    href: "/en/products/volume-reducer-the-keratin-2WU65JT7S5VNIBEONMB5EMGO",
  },
];

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    locale: toLocaleOrDefault(locale),
    path: "",
    title: {
      en: "Professional Hair Care & Salon Products",
      es: "Cuidado Capilar Profesional y Productos de Salón",
    },
    description: {
      en: "Discover premium haircare, salon services, and curated bundles from Enyermy Studio Pro.",
      es: "Descubre cuidado capilar premium, servicios de salón y bundles curados de Enyermy Studio Pro.",
    },
  });
}

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const bestSellersProducts = await getBestSellerProductCardProps();
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
