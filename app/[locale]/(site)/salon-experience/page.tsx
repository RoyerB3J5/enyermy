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
import type { Metadata } from "next";
import { buildPageMetadata, toLocaleOrDefault } from "@/lib/seo";

type SalonExperienceContent =
  (typeof import("@/content/en"))["default"]["salonExperience"];

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    locale: toLocaleOrDefault(locale),
    path: "salon-experience",
    title: {
      en: "Salon Experience & Professional Services",
      es: "Experiencia de Salón y Servicios Profesionales",
    },
    description: {
      en: "Discover Enyermy Studio Pro's salon experience, professional hair services, transformations, and expert stylists in Ocoee, FL.",
      es: "Descubre la experiencia de salón de Enyermy Studio Pro, servicios capilares profesionales, transformaciones y estilistas expertos en Ocoee, FL.",
    },
  });
}

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
