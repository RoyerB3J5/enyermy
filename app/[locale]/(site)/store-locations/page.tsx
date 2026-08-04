import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import MapSection from "@/components/sections/locations/MapSection";
import { getContent } from "@/i18n/content";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

type StoreLocationsContent =
  (typeof import("@/content/en"))["default"]["storeLocations"];
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
