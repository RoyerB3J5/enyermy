import { getContent } from "@/i18n/content";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata, toLocaleOrDefault } from "@/lib/seo";

type TermsContent = (typeof import("@/content/en"))["default"]["term"];

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    locale: toLocaleOrDefault(locale),
    path: "terms-of-services",
    title: {
      en: "Terms of Service | Enyermy Studio Pro",
      es: "Términos de Servicio | Enyermy Studio Pro",
    },
    description: {
      en: "Enyermy Studio Pro terms of service. Please read these terms carefully before using our website and services.",
      es: "Términos de servicio de Enyermy Studio Pro. Por favor lea estos términos cuidadosamente antes de usar nuestro sitio web y servicios.",
    },
  });
}

export default async function page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }
  const { term: content } = await getContent<{ term: TermsContent }>(locale);
  return (
    <main className="w-full flex flex-col justify-center items-center pt-(--header-height) ">
      <section className="container-full flex flex-col justify-center items-center gap-8 py-12 md:py-20 text-primary">
        <h1 className="title-h4 text-primary fade-up">{content.title}</h1>
        <p
          dangerouslySetInnerHTML={{ __html: content.description }}
          className="paragraph font-normal fade-up w-full md:w-1/2"
        />
      </section>
    </main>
  );
}
