"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeroProps {
  content: {
    tag: string;
    title: string;
    description: string;
    button: {
      text: string;
      link: string;
    };
    image: string;
    imageMobile: string;
  };
}
export default function Hero({ content }: HeroProps) {
  const pathname = usePathname() || "/";
  const normalized =
    pathname.replace(/^\/(en|es)/, "").replace(/\/$/, "") || "/";
  return (
    <section className="h-[calc(100vh-var(--header-height))] md:h-[60vh] xl:h-screen w-full flex flex-col justify-start md:justify-center items-center relative overflow-hidden">
      <Image
        src={`/images/${content.image}.webp`}
        alt={content.title}
        width={1440}
        height={800}
        className={`w-auto md:w-full h-full object-cover ${normalized === "/" ? "object-[92%_0%] md:object-top" : "object-[50%_100%] md:object-center"} absolute inset-0 z-0 hidden md:block`}
        decoding="async"
        loading="eager"
      />
      <Image
        src={`/images/${content.imageMobile
        }.webp`}
        alt={content.title}
        width={800}
        height={1596}
        className={`w-full h-full object-cover ${normalized === "/" ? "object-[50%_40%]" : "object-[50%_100%] md:object-center"} absolute inset-0 z-0 md:hidden  `}
        decoding="async"
        loading="eager"
      />
      <div className="container-full flex justify-start items-start md:items-center relative z-10 h-full md:h-auto bg-transparent py-12 md:py-0">
        <div className="flex flex-col justify-between md:justify-center items-center md:items-start  gap-6 w-full md:w-auto max-w-none md:max-w-200 translate-y-0 md:translate-y-[20%] h-full md:h-auto">
          <div
            className={`flex flex-col justify-center  md:items-start gap-2 ${normalized === "/" ? "text-primary items-center" : "w-full md:w-auto items-center text-white"}`}
          >
            <p className="paragraph-x-large tracking-[-0.5px] hero-fade-right">
              {content.tag}
            </p>
            <h1
              className="title-h1 hero-fade-right"
              dangerouslySetInnerHTML={{ __html: content.title }}
            />
            <p className="paragraph font-normal hero-fade-right">
              {content.description}
            </p>
          </div>
          <Button
            label={content.button.text}
            href={content.button.link}
            styleButton={normalized === "/" ? "black" : "white"}
            paddingX="px-6 hidden md:block hero-fade-right"
            openInNewTab={true}
          />
          <Button
            label={content.button.text}
            href={content.button.link}
            styleButton={"white"}
            paddingX="px-6 md:hidden block hero-fade-right"
            openInNewTab={true}
          />
        </div>
      </div>
    </section>
  );
}
