import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import MapSection from "@/components/sections/locations/MapSection";
import { getContent } from "@/i18n/content";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata, toLocaleOrDefault } from "@/lib/seo";

type StoreLocationsContent =
  (typeof import("@/content/en"))["default"]["storeLocations"];

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    locale: toLocaleOrDefault(locale),
    path: "store-locations",
    title: {
      en: "Store Locations | Enyermy Studio Pro",
      es: "Ubicaciones de Tienda | Enyermy Studio Pro",
    },
    description: {
      en: "Find Enyermy Studio Pro salon location in Ocoee, FL. Visit us for professional hair services and product consultations.",
      es: "Encuentra la ubicación del salón Enyermy Studio Pro en Ocoee, FL. Visítanos para servicios capilares profesionales y consultas de productos.",
    },
  });
}

export default async function StoreLocations({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) {
    notFound();
  }
  const { storeLocations: content } = await getContent<{
    storeLocations: StoreLocationsContent;
  }>(locale);
  return (
    <main className="w-full flex flex-col justify-center items-center pt-(--header-height)">
      <MapSection content={content} />
      <CallEmail />
      <CarouselReview />
    </main>
  );
}
