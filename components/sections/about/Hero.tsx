"use client";
import Button from "@/components/ui/Button";

interface HeroProps {
  content: {
    tag: string;
    description2: string;
    title: string;
    description: string;
    bible: string;
    button: {
      text: string;
      link: string;
    };
  };
}
export default function Hero({ content }: HeroProps) {
  return (
    <section className="h-[calc(100vh-var(--header-height))] md:h-[60vh] xl:h-screen w-full flex flex-col justify-start md:justify-center items-center relative">
      <img
        src={`/images/about/hero.webp`}
        alt={content.title}
        width={1922}
        height={1068}
        className={`w-auto md:w-full h-[38vh] md:h-full object-cover object-right md:object-center relative md:absolute inset-0 z-0 hidden md:block`}
        decoding="async"
        loading="eager"
      />
      <img
        src={`/images/about/hero-main.webp`}
        alt={content.title}
        width={800}
        height={1596}
        className={`w-full h-full absolute object-cover object-center z-0 md:hidden`}
        decoding="async"
        loading="eager"
      />
      <div className="back-about-us w-full h-full absolute inset-0 z-2 md:hidden"></div>
      <div className="container-full flex justify-start items-center relative z-10 bg-transparent h-full md:h-auto py-12 md:py-0">
        <div className="flex flex-col justify-between md:justify-center items-start gap-6 max-w-125 md:translate-y-[10%] h-full md:h-auto">
          <div
            className={`flex flex-col justify-center items-center md:items-start gap-2 text-white `}
          >
            <p className="paragraph-x-large tracking-[-0.5px]block md:hidden fade-right">
              {content.tag}
            </p>
            <h1
              className="title-h1 fade-right"
              dangerouslySetInnerHTML={{ __html: content.title }}
            />
            <p className="paragraph font-normal w-[60%] tracking-[-0.5px] hidden md:block fade-right">
              {content.description}
            </p>
            <p className="paragraph font-normal w-full tracking-[-0.5px] block md:hidden fade-right text-center md:text-start">
              {content.description2}
            </p>
            <p className="paragraph italic font-extrabold tracking-[-0.5px] hidden md:block fade-right">
              {content.bible}
            </p>
          </div>
          <Button
            label={content.button.text}
            href={content.button.link}
            styleButton="white"
            paddingX="px-6"
          />
        </div>
      </div>
    </section>
  );
}
