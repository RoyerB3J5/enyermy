import { getContent } from "@/i18n/content";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata, toLocaleOrDefault } from "@/lib/seo";

type RefundContent = (typeof import("@/content/en"))["default"]["refund"];

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    locale: toLocaleOrDefault(locale),
    path: "refund-policy",
    title: {
      en: "Refund & Return Policy | Enyermy Studio Pro",
      es: "Política de Devoluciones y Reembolsos | Enyermy Studio Pro",
    },
    description: {
      en: "Enyermy Studio Pro refund and return policy. Learn about our return window, conditions, and how to request a refund.",
      es: "Política de devoluciones y reembolsos de Enyermy Studio Pro. Conoce nuestra ventana de devolución, condiciones y cómo solicitar un reembolso.",
    },
  });
}

export default async function page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }
  const { refund: content } = await getContent<{ refund: RefundContent }>(
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
