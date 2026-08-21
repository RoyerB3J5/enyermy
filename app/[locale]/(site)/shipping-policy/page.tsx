import { getContent } from "@/i18n/content";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata, toLocaleOrDefault } from "@/lib/seo";

type ShippingContent = (typeof import("@/content/en"))["default"]["shipping"];

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    locale: toLocaleOrDefault(locale),
    path: "shipping-policy",
    title: {
      en: "Shipping Policy | Enyermy Studio Pro",
      es: "Política de Envío | Enyermy Studio Pro",
    },
    description: {
      en: "Enyermy Studio Pro shipping policy. Information on delivery times, shipping costs, and order tracking.",
      es: "Política de envío de Enyermy Studio Pro. Información sobre tiempos de entrega, costos de envío y seguimiento de pedidos.",
    },
  });
}

export default async function page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }
  const { shipping: content } = await getContent<{ shipping: ShippingContent }>(
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
