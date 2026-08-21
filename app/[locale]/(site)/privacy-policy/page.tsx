import { getContent } from "@/i18n/content";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata, toLocaleOrDefault } from "@/lib/seo";

type PrivacyContent = (typeof import("@/content/en"))["default"]["privacy"];

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    locale: toLocaleOrDefault(locale),
    path: "privacy-policy",
    title: {
      en: "Privacy Policy | Enyermy Studio Pro",
      es: "Política de Privacidad | Enyermy Studio Pro",
    },
    description: {
      en: "Enyermy Studio Pro privacy policy. Learn how we collect, use, and protect your personal information.",
      es: "Política de privacidad de Enyermy Studio Pro. Aprende cómo recopilamos, usamos y protegemos tu información personal.",
    },
  });
}

export default async function page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }
  const { privacy: content } = await getContent<{ privacy: PrivacyContent }>(
    locale,
  );
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
