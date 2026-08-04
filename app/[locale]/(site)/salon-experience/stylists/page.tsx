import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import StylistsGroup from "@/components/sections/StylistsGroup";
import { getContent } from "@/i18n/content";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

type StylistsContent = (typeof import("@/content/en"))["default"]["stylists"];

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
