import BundleSection from "@/components/sections/bundles/BundleSection";
import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import { getContent } from "@/i18n/content";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { getBundleProducts, getBundleProductsTest } from "@/lib/catalog";
import type { Metadata } from "next";
import { buildPageMetadata, toLocaleOrDefault } from "@/lib/seo";

type BundleContent = (typeof import("@/content/en"))["default"]["bundles"];
const itemsBundles = [
  {
    id: "1",
    image: "/images/bundles/bundle-1.webp",
    tag: "Vivify Purple Toning System",
    title: "Blonde Perfection Bundle",
    list: [
      "Vivify Purple Shampoo (32 oz)",
      "Purple Toning Mask (8 oz)",
      "Leave-In Moist Mist (8 oz)",
      "Heat Protector Serum (4 oz)",
    ],
    perfectFor: "Blonde, silver, gray, or highlighted hair",
    results: "Eliminates brassiness, enhances cool tones, adds luminosity",
    precio: "129.99",
  },
  {
    id: "2",
    image: "/images/bundles/bundle-2.webp",
    tag: "Velvety Silk Repairing Collection + Bonding Mask",
    title: "The Complete Transformation Set",
    list: [
      "Velvety Silk Shampoo (32 oz)",
      "Versatile Cream (8 oz)",
      "Bonding Mask Treatment (8 oz)",
      "Heat Protector Serum (4 oz)",
    ],
    perfectFor: "Severely damaged, chemically-treated, or heat-styled hair",
    results: "Molecular restoration, 95% less breakage, salon-quality shine",
    precio: "149.99",
  },
  {
    id: "3",
    image: "/images/bundles/bundle-3.webp",
    tag: "CurlyMe Bouncy Definition Collection",
    title: "Curl Love Essential Kit",
    list: [
      "Curlyme Hydrating Mask (8 oz)",
      "Curlyme Defining Mousse (8 oz)",
      "Hydrate Shampoo (8 oz)",
      "Mois Mist (8 oz)",
    ],
    perfectFor: "Wavy, curly, and coily hair types",
    results: "Soft, defined curls without frizz, 48-hour hold",
    precio: "119.99",
  },
];

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    locale: toLocaleOrDefault(locale),
    path: "bundles",
    title: {
      en: "Hair Care Bundles & Kits",
      es: "Bundles y Kits de Cuidado Capilar",
    },
    description: {
      en: "Curated hair care bundles for every need: blonde maintenance, damage repair, curl definition. Professional kits with shampoo, mask, serum, and more.",
      es: "Bundles de cuidado capilar curados para cada necesidad: mantenimiento rubio, reparación de daños, definición de rizos. Kits profesionales con champú, mascarilla, sérum y más.",
    },
  });
}

export default async function Bundles({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const { bundles: content } = await getContent<{ bundles: BundleContent }>(
    locale,
  );
  const itemsBundlesSquare = await getBundleProducts("Bundles");
  //const itemsBundleTest = await getBundleProductsTest("Bundles");
  return (
    <main className="w-full flex flex-col justify-center items-center pt-(--header-height)">
      {/*<pre className="bg-gray-100 p-4 rounded-lg overflow-auto max-w-full block">
        <code>
          {JSON.stringify(
            itemsBundlesSquare,
            (key, value) =>
              typeof value === "bigint" ? value.toString() : value,
            2,
          )}
        </code>
      </pre> */}
      <section className="flex jusitfy-center items-center pt-14 pb-6 fade-up">
        <h1 className="title-h4 text-primary">{content.title}</h1>
      </section>
      <BundleSection itemsBundles={itemsBundlesSquare} />
      <CallEmail />
      <CarouselReview />
    </main>
  );
}
