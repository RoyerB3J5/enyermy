import { getPostById } from "@/lib/ghl/blog-services";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { buildPageMetadata, stripHtml } from "@/lib/seo";

interface Props {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ author?: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    return buildPageMetadata({
      locale: "en",
      path: `blog/${id}`,
      title: { en: "Post Not Found", es: "Artículo No Encontrado" },
      description: { en: "The requested blog post was not found.", es: "El artículo del blog solicitado no fue encontrado." },
      noIndex: true,
    });
  }

  const postTitle = post.title;
  const postContentHtml = typeof post.content === "string" ? post.content : (post.content as { __html: string })?.__html || "";
  const postDescription = stripHtml(postContentHtml);

  return buildPageMetadata({
    locale: "en",
    path: `blog/${id}`,
    title: {
      en: `${postTitle} | Enyermy Studio Pro Blog`,
      es: `${postTitle} | Blog Enyermy Studio Pro`,
    },
    description: {
      en: postDescription.slice(0, 160) || `Read ${postTitle} on the Enyermy Studio Pro blog.`,
      es: postDescription.slice(0, 160) || `Lee ${postTitle} en el blog de Enyermy Studio Pro.`,
    },
    image: post.image,
  });
}

export default async function SingleBlog({ params, searchParams }: Props) {
  const { id } = await params;
  const post = await getPostById(id);
  const search = searchParams ? await searchParams : {};

  if (!post) notFound();
  const authorName = post.autor || search.author || "Enyermy";

  return (
    <main className="flex flex-col justify-center items-center pt-(--header-height) container-full gap-6 pb-14">
      <div className="w-full h-auto aspect-343/460 md:aspect-1200/420 relative overflow-hidden rounded-2xl ">
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover absolute inset-0 object-center"
          width={1200}
          height={420}
          loading="eager"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-6 w-full max-w-[824px]">
        <div className="w-full flex flex-col justify-center items-start gap-4">
          <p className="text-primary text-[13px] font-normal leading-[150%]">
            Posted by {authorName} on {post.date}
          </p>
          <div className="w-full h-px bg-[#E7E7E7]"></div>
          <h1 className="text-primary text-[28px] md:text-[36px] font-normal tracking-[-0.5px] leading-[120%] font-title fade-left">
            {post.title}
          </h1>
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="paragraph font-normal text-primary fade-left tracking-[-0.5px]"
        ></p>
      </div>
    </main>
  );
}
