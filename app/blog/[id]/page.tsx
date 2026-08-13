import { getPostById } from "@/lib/ghl/blog-services";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ author: string }>;
}
export default async function SingleBlog({ params, searchParams }: Props) {
  const { id } = await params;
  const post = await getPostById(id);
  const { author } = await searchParams;

  if (!post) notFound();
  return (
    <main className="flex flex-col justify-center items-center pt-(--header-height) container-full gap-6 pb-14">
      <div className="w-full h-auto aspect-343/460 md:aspect-1200/420 relative overflow-hidden rounded-2xl ">
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover absolute inset-0 object-center"
          width={1200}
          height={420}
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-6 w-full max-w-[824px]">
        <div className="w-full flex flex-col justify-center items-start gap-4">
          <p className="text-primary text-[13px] font-normal leading-[150%]">
            Posted by {author} on {post.date}
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
