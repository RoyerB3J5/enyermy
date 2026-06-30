"use client"
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
    <section className="h-screen w-full flex justify-center items-center relative">
      <Image
        src={`/images/${content.image}.webp`}
        alt={content.title}
        width={1440}
        height={800}
        className={`w-full h-full object-cover ${normalized === "/" ? "object-top" : "object-center"} absolute inset-0 z-0`}
        decoding="async"
        loading="eager"
      />
      <div className="container-full flex justify-start items-center relative z-10">
        <div className="flex flex-col justify-center items-start  gap-6 max-w-200 translate-y-[20%]">
          <div className="flex flex-col justify-center items-start gap-2 text-primary">
            <p className="paragraph-x-large tracking-[-0.5px]">{content.tag}</p>
            <h1 className="title-h1">{content.title}</h1>
            <p className="paragraph font-normal">{content.description}</p>
          </div>
          <Button
            label={content.button.text}
            href={content.button.link}
            styleButton="black"
            paddingX="px-6"
          />
        </div>
      </div>
    </section>
  );
}
