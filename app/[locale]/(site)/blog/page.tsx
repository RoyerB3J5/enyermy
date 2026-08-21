import GridPost from "@/components/sections/blog/GridPost";
import Hero from "@/components/sections/blog/Hero";
import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import { getCategories, getPostsPage } from "@/lib/ghl/blog-services";
import React from "react";
import type { Metadata } from "next";
import { buildPageMetadata, toLocaleOrDefault } from "@/lib/seo";

// GHL must be called after deployment, not while statically generating /en
// and /es during the build. Individual fetches still use their 60-second cache.
export const dynamic = "force-dynamic";

const content = {
  hero: {
    tag: "Insights, Trends, Hair Education",
    title: "Beauty & Beyond",
  },
};

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    locale: toLocaleOrDefault(locale),
    path: "blog",
    title: {
      en: "Hair Care Blog - Tips, Trends & Education",
      es: "Blog de Cuidado Capilar - Consejos, Tendencias y Educación",
    },
    description: {
      en: "Expert hair care tips, trends, tutorials, and education from Enyermy Studio Pro stylists. Learn about color, treatments, styling, and healthy hair routines.",
      es: "Consejos expertos de cuidado capilar, tendencias, tutoriales y educación de los estilistas de Enyermy Studio Pro. Aprende sobre color, tratamientos, peinado y rutinas de cabello saludable.",
    },
  });
}

export default async function Blog() {
  const [{ items: posts, total, totalPages }, categories] = await Promise.all([
    getPostsPage(1),
    getCategories(),
  ]);
  const featuredPost = posts[0] ?? posts[1] ?? posts[2];
  return (
    <main className="flex flex-col justify-center items-center pt-(--header-height) w-full">
      {featuredPost && <Hero hero={content.hero} post={featuredPost} />}
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
