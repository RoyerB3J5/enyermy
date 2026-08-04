import GridPost from "@/components/sections/blog/GridPost";
import Hero from "@/components/sections/blog/Hero";
import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import Mail from "@/components/sections/Mail";
import React from "react";
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
    description:
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
    description:
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
    description:
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
    description:
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
    description:
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
    description:
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
    description:
      "Este artículo está dirigido a mujeres de negocios que buscan inspiración y estrategias para equilibrar sus responsabilidades profesionales con su vida familiar.",
    buttonHref: "#",
  },
];
export default function Blog() {
  return (
    <main className="flex flex-col justify-center items-center pt-(--header-height) w-full">
      <Hero hero={content.hero} post={posts[2]} />
      <GridPost categories={categories} posts={posts} />
      <CallEmail/>
      <CarouselReview />
    </main>
  );
}
