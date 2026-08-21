import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import StylistsGroup from "@/components/sections/StylistsGroup";
import { getContent } from "@/i18n/content";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata, toLocaleOrDefault } from "@/lib/seo";

type StylistsContent = (typeof import("@/content/en"))["default"]["stylists"];

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    locale: toLocaleOrDefault(locale),
    path: "salon-experience/stylists",
    title: {
      en: "Our Expert Stylists | Enyermy Studio Pro",
      es: "Nuestros Estilistas Expertos | Enyermy Studio Pro",
    },
    description: {
      en: "Meet the professional stylists at Enyermy Studio Pro. Expert hair color, cuts, treatments, and transformations in Ocoee, FL.",
      es: "Conoce a los estilistas profesionales de Enyermy Studio Pro. Expertos en color, cortes, tratamientos y transformaciones capilares en Ocoee, FL.",
    },
  });
}

export default async function Stylists({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) {
    notFound();
  }
  const { stylists: content } = await getContent<{ stylists: StylistsContent }>(
    locale,
  );
  return (
    <main className="flex flex-col justify-center items-center pt-(--header-height) w-full">
      <section className="flex justify-center items-center  pt-12 md:pt-16 pb-8">
        <h1 className="title-h4 text-primary fade-up">{content.title}</h1>
      </section>
      <StylistsGroup content={content.items} />
      <CallEmail />
      <CarouselReview />
    </main>
  );
}
