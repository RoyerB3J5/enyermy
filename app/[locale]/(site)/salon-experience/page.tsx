import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import Locations from "@/components/sections/about/Locations";
import Bundles from "@/components/sections/main/Bundles";
import Hero from "@/components/sections/main/Hero";
import StylistsItem from "@/components/sections/StylistsItem";
import RecommendationServices from "@/components/sections/RecommendationServices";
import { getContent } from "@/i18n/content";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

type SalonExperienceContent =
  (typeof import("@/content/en"))["default"]["salonExperience"];

export default async function SalonExperience({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) {
    notFound();
  }
  const { salonExperience: content } = await getContent<{
    salonExperience: SalonExperienceContent;
  }>(locale);
  return (
    <main className="w-full flex flex-col justify-center items-center pt-[var(--header-height)] md:pt-0">
      <Hero content={content.hero} />
      <Locations content={content.location} />
      <RecommendationServices content={content.services} />
      <Bundles content={content.tranformation} />
      <CallEmail />
      <Bundles content={content.luxury} />
      <section className="flex flex-col justify-center items-center pt-16 gap-8 w-full">
        <h2 className="title-h4 text-primary fade-up">{content.professional.title}</h2>
        <StylistsItem
          content={content.professional.info}
          changeAspectRatio={true}
          centerContent={true}
        />
      </section>
      <CarouselReview />
    </main>
  );
}
