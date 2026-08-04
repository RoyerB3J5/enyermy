import Hero from "@/components/sections/about/Hero";
import Locations from "@/components/sections/about/Locations";
import Mission from "@/components/sections/about/Mission";
import Numbers from "@/components/sections/about/Numbers";
import Philosophy from "@/components/sections/about/Philosophy";
import CarouselReview from "@/components/sections/CarouselReview";
import StylistsItem from "@/components/sections/StylistsItem";
import { getContent } from "@/i18n/content";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
type AboutUsContent = (typeof import("@/content/en"))["default"]["aboutUs"];

export default async function AboutUs({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }
  const { aboutUs: content } = await getContent<{ aboutUs: AboutUsContent }>(
    locale,
  );
  return (
    <main className="w-full flex flex-col justify-center items-center pt-[var(--header-height)] md:pt-0">
      <Hero content={content.hero} />
      <Philosophy content={content.philosophy} />
      <Mission content={content.mision} />
      <Numbers content={content.number} />
      <Locations content={content.location} />
      <StylistsItem content={content.transformation} changeAspectRatio={true} />
      <CarouselReview />
    </main>
  );
}
