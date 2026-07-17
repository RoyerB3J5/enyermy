import BundleSection from "@/components/sections/bundles/BundleSection";
import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
const content = {
  title: "Expertly Curated Sets",
  staticWords: {
    get: "What You Get:",
    PerfectFor: "Perfect For:",
    results: "Results:",
    button: "Shop Now",
  },
};

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
    color: "bg-morado",
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
    color: "bg-azul",
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
    color: "bg-verde",
  },
];
export default function Bundles() {
  return (
    <main className="w-full flex flex-col justify-center items-center pt-(--header-height)">
      <section className="flex jusitfy-center items-center pt-14 pb-6">
        <h1 className="title-h4 text-primary">{content.title}</h1>
      </section>
      <BundleSection
        content={content.staticWords}
        itemsBundles={itemsBundles}
      />
      <CallEmail />
      <CarouselReview />
    </main>
  );
}
