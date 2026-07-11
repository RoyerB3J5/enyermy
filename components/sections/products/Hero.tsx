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
export default function Hero({ content }: HeroProps) {
  return (
    <section className="w-full h-[calc(100vh-var(--header-height))] md:h-[40vh] lg:h-auto aspect-auto lg:aspect-1440/500 flex flex-col justify-start md:justify-center items-center relative overflow-hidden ">
      <Image
        src={`/images/${content.image}.webp`}
        alt={content.title}
        width={1440}
        height={500}
        className="object-cover w-auto md:w-full h-[65%] md:h-full relative md:absolute top-0 left-0 z-0 image-scale object-[74%_50%] md:object-[45%_50%] lg:object-center"
        decoding="async"
        loading="eager"
      />
      <div className="container-full flex justify-center md:justify-start items-center z-10 h-[35%] md:h-auto bg-rosado md:bg-transparent">
        <div className="flex flex-col justify-center items-center md:items-start gap-2 text-primary w-full md:w-[60%] lg:w-full">
          <p className="paragraph-x-large tracking-[-0.5px] ">{content.tag}</p>
          <h1 className="title-h2 ">{content.title}</h1>
          <p
            className="paragraph tracking-[-0.5px] whitespace-pre-line font-medium text-center md:text-start"
            dangerouslySetInnerHTML={{ __html: content.description }}
          ></p>
        </div>
      </div>
    </section>
  );
}
