import GridPost from "@/components/sections/blog/GridPost";
import Hero from "@/components/sections/blog/Hero";
import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import { getCategories, getPostsPage } from "@/lib/ghl/blog-services";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// GHL is an external runtime dependency. Rendering this route dynamically
// prevents a transient GHL response from failing the entire production build.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Enyermy Studio Pro",
  description: "Latest news and updates from Enyermy Studio Pro",
};

const content = {
  hero: {
    tag: "Insights, Trends, Hair Education",
    title: "Beauty & Beyond",
  },
};

const categories = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "hair-care",
    label: "Hair Care",
  },
  {
    id: "scalp-care",
    label: "Scalp Care",
  },
  {
    id: "heat-damage",
    label: "Heat Damage",
  },
  {
    id: "all-1",
    label: "All",
  },
  {
    id: "hair-care-1",
    label: "Hair Care",
  },
  {
    id: "scalp-care-1",
    label: "Scalp Care",
  },
  {
    id: "heat-damage-1",
    label: "Heat Damage",
  },
  {
    id: "heat-damage-2",
    label: "Heat Damage",
  },
];
const posts = [
  {
    image: "/images/blog/blog-1.webp",
    categories: [
      {
        id: "hair-care",
        label: "Hair Care",
      },
      {
        id: "scalp-care",
        label: "Scalp Care",
      },
    ],
    date: "June 6, 2024",
    autor: "Luisa E DOminguez",
    title:
      "Mujeres de negocios. Encontrar el Equilibrio Perfecto: Negocios y Familia",
    descriptionShort:
      "Este artículo está dirigido a mujeres de negocios que buscan inspiración y estrategias para equilibrar sus responsabilidades profesionales con su vida familiar.",
    buttonHref: "#",
  },
  {
    image: "/images/blog/blog-1.webp",
    categories: [
      {
        id: "hair-care",
        label: "Hair Care",
      },
      {
        id: "scalp-care",
        label: "Scalp Care",
      },
    ],
    date: "June 6, 2024",
    autor: "Luisa E DOminguez",
    title:
      "Mujeres de negocios. Encontrar el Equilibrio Perfecto: Negocios y Familia",
    descriptionShort:
      "Este artículo está dirigido a mujeres de negocios que buscan inspiración y estrategias para equilibrar sus responsabilidades profesionales con su vida familiar.",
    buttonHref: "#",
  },
  {
    image: "/images/blog/blog-2.webp",
    categories: [
      {
        id: "hair-care",
        label: "Hair Care",
      },
      {
        id: "scalp-care",
        label: "Scalp Care",
      },
    ],
    date: "November 21, 2025",
    autor: "Luisa E Dominguez",
    title: "Por Qué Enyermy es el Mejor Salón de Belleza en Orlando",
    descriptionShort:
      "Si estás buscando el mejor salón de belleza en Orlando, aquí descubrirás por qué Enyermy Hair Studio y Enyermy Studio Pro se han convertido en la opción preferida por miles de mujeres.",
    buttonHref: "#",
  },
  {
    image: "/images/blog/blog-1.webp",
    categories: [
      {
        id: "hair-care",
        label: "Hair Care",
      },
      {
        id: "scalp-care",
        label: "Scalp Care",
      },
    ],
    date: "June 6, 2024",
    autor: "Luisa E DOminguez",
    title:
      "Mujeres de negocios. Encontrar el Equilibrio Perfecto: Negocios y Familia",
    descriptionShort:
      "Este artículo está dirigido a mujeres de negocios que buscan inspiración y estrategias para equilibrar sus responsabilidades profesionales con su vida familiar.",
    buttonHref: "#",
  },
  {
    image: "/images/blog/blog-1.webp",
    categories: [
      {
        id: "hair-care",
        label: "Hair Care",
      },
      {
        id: "scalp-care",
        label: "Scalp Care",
      },
    ],
    date: "June 6, 2024",
    autor: "Luisa E DOminguez",
    title:
      "Mujeres de negocios. Encontrar el Equilibrio Perfecto: Negocios y Familia",
    descriptionShort:
      "Este artículo está dirigido a mujeres de negocios que buscan inspiración y estrategias para equilibrar sus responsabilidades profesionales con su vida familiar.",
    buttonHref: "#",
  },
  {
    image: "/images/blog/blog-1.webp",
    categories: [
      {
        id: "hair-care",
        label: "Hair Care",
      },
      {
        id: "scalp-care",
        label: "Scalp Care",
      },
    ],
    date: "June 6, 2024",
    autor: "Luisa E DOminguez",
    title:
      "Mujeres de negocios. Encontrar el Equilibrio Perfecto: Negocios y Familia",
    descriptionShort:
      "Este artículo está dirigido a mujeres de negocios que buscan inspiración y estrategias para equilibrar sus responsabilidades profesionales con su vida familiar.",
    buttonHref: "#",
  },
  {
    image: "/images/blog/blog-1.webp",
    categories: [
      {
        id: "hair-care",
        label: "Hair Care",
      },
      {
        id: "scalp-care",
        label: "Scalp Care",
      },
    ],
    date: "June 6, 2024",
    autor: "Luisa E DOminguez",
    title:
      "Mujeres de negocios. Encontrar el Equilibrio Perfecto: Negocios y Familia",
    descriptionShort:
      "Este artículo está dirigido a mujeres de negocios que buscan inspiración y estrategias para equilibrar sus responsabilidades profesionales con su vida familiar.",
    buttonHref: "#",
  },
];
export default async function Blog({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }
  const [{ items: posts, total, totalPages }, categories] = await Promise.all([
    getPostsPage(1),
    getCategories(),
  ]);
  return (
    <main className="flex flex-col justify-center items-center pt-(--header-height) w-full">
      <Hero hero={content.hero} post={posts[2]} />
      <GridPost
        categories={categories}
        initialPosts={posts}
        totalPages={totalPages}
        totalPosts={total}
      />
      <CallEmail />
      <CarouselReview />
    </main>
  );
}
