import GridPost from "@/components/sections/blog/GridPost";
import Hero from "@/components/sections/blog/Hero";
import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import { getCategories, getPostsPage } from "@/lib/ghl/blog-services";
import React from "react";

// GHL must be called after deployment, not while statically generating /en
// and /es during the build. Individual fetches still use their 60-second cache.
export const dynamic = "force-dynamic";

const content = {
  hero: {
    tag: "Insights, Trends, Hair Education",
    title: "Beauty & Beyond",
  },
};

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
