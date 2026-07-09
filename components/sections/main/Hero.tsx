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
  };
}
export default function Hero({ content }: HeroProps) {
  const pathname = usePathname() || "/";
  const normalized =
    pathname.replace(/^\/(en|es)/, "").replace(/\/$/, "") || "/";
  return (
    <section className="h-[calc(100vh-var(--header-height))] md:h-[60vh] xl:h-screen w-full flex flex-col justify-start md:justify-center items-center relative">
      <Image
        src={`/images/${content.image}.webp`}
        alt={content.title}
        width={1440}
        height={800}
        className={`w-auto md:w-full h-[65%] md:h-full object-cover ${normalized === "/" ? "object-[92%_50%] md:object-top" : "object-center"} relative md:absolute inset-0 z-0`}
        decoding="async"
        loading="eager"
      />
      <div className="container-full flex justify-start items-center relative z-10 h-[35%] md:h-auto bg-rosado md:bg-transparent">
        <div className="flex flex-col justify-center items-center md:items-start  gap-6 w-full md:w-auto max-w-none md:max-w-200 translate-y-0 md:translate-y-[20%]">
          <div
            className={`flex flex-col justify-center items-center md:items-start gap-2 ${normalized === "/" ? "text-primary" : "text-white"}`}
          >
            <p className="paragraph-x-large tracking-[-0.5px]">{content.tag}</p>
            <h1
              className="title-h1"
              dangerouslySetInnerHTML={{ __html: content.title }}
            />
            <p className="paragraph font-normal">{content.description}</p>
          </div>
          <Button
            label={content.button.text}
            href={content.button.link}
            styleButton={normalized === "/" ? "black" : "white"}
            paddingX="px-6"
          />
        </div>
      </div>
    </section>
  );
}
