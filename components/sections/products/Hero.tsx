"use client";
interface HeroProps {
  content: {
    image: string;
    imageMobile: string;
    tag: string;
    title: string;
    description: string;
  };
  salon?: boolean;
}
export default function Hero({ content,salon }: HeroProps) {
  return (
    <section className="w-full h-[calc(100vh-var(--header-height))] md:h-[40vh] lg:h-auto aspect-auto lg:aspect-1440/500 flex flex-col justify-start md:justify-center items-center relative overflow-hidden  ">
      <img
        src={`/images/${content.image}.webp`}
        alt={content.title}
        width={1440}
        height={500}
        className={`object-cover w-auto md:w-full h-[65%] md:h-full relative md:absolute top-0 left-0 z-0 image-scale ${salon?'object-[77%_50%]':'object-[74%_50%]'}  md:object-[45%_50%] lg:object-center hidden md:block`}
        decoding="async"
        loading="eager"
      />
      <img
        src={`/images/${content.imageMobile}.webp`}
        alt={content.title}
        width={1440}
        height={500}
        className={`object-cover w-full h-full top-0 left-0  ${salon?'object-[77%_50%]':'object-[74%_50%]'}  md:object-[45%_50%] object-center md:hidden absolute z-1`}
        decoding="async"
        loading="eager"
      />
      <div className="container-full flex justify-start items-start md:items-center relative z-10 h-full md:h-auto bg-transparent py-12 md:py-0">
        <div className="flex flex-col justify-center items-center md:items-start gap-2 text-primary w-full md:w-[60%] lg:w-full">
          <p className="paragraph-x-large tracking-[-0.5px] fade-right">{content.tag}</p>
          <h1 className="title-h2 fade-right">{content.title}</h1>
          <p
            className="paragraph tracking-[-0.5px] whitespace-pre-line fade-right font-medium text-center md:text-start"
            dangerouslySetInnerHTML={{ __html: content.description }}
          ></p>
        </div>
      </div>
    </section>
  );
}
