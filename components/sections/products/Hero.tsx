"use client";
import Image from "next/image";
interface HeroProps {
  content: {
    image: string;
    tag: string;
    title: string;
    description: string;
  };
}
export default function  Hero({ content }: HeroProps) {
  return (
    <section className="w-full h-auto aspect-1440/500 flex justify-center items-center relative overflow-hidden ">
      <Image
        src={`/images/${content.image}.webp`}
        alt={content.title}
        width={1440}
        height={500}
        className="object-cover w-full h-auto absolute top-0 left-0 z-0 image-scale"
        decoding="async"
        loading="eager"
      />
      <div className="container-full flex justify-start items-center z-10">
        <div className="flex flex-col center items-start gap-2 text-primary">
          <p className="paragraph-x-large tracking-[-0.5px] ">{content.tag}</p>
          <h1 className="title-h2 ">{content.title}</h1>
          <p className="paragraph tracking-[-0.5px] whitespace-pre-line font-medium">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
