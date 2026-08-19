import Locations from "@/components/sections/about/Locations";
import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import Hero from "@/components/sections/products/Hero";
import { getContent } from "@/i18n/content";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

type LocationContent = (typeof import("@/content/en"))["default"]["locations"];
export default async function LocationsPage({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) {
    notFound();
  }
  const { locations: content } = await getContent<{
    locations: LocationContent;
  }>(locale);
  return (
    <main className="w-full flex flex-col justify-center items-center pt-(--header-height)">
      <Hero content={content.hero} salon={true} />
      <Locations content={content.location} differentDisplay={true} />
      <CallEmail />
      <CarouselReview />
    </main>
  );
}
