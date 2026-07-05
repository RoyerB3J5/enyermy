"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeroProps {
  content: {
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
    <section className="h-screen w-full flex justify-center items-center relative">
      <img
        src={`/images/about/hero.webp`}
        alt={content.title}
        width={1922}
        height={1068}
        className={`w-full h-full object-cover object-center absolute inset-0 z-0`}
        decoding="async"
        loading="eager"
      />
      <div className="container-full flex justify-start items-center relative z-10">
        <div className="flex flex-col justify-center items-start  gap-6 max-w-125 translate-y-[10%]">
          <div
            className={`flex flex-col justify-center items-start gap-2 text-white`}
          >
            <h1
              className="title-h1"
              dangerouslySetInnerHTML={{ __html: content.title }}
            />
            <p className="paragraph font-normal w-[60%] tracking-[-0.5px]">
              {content.description}
            </p>
            <p className="paragraph italic font-extrabold tracking-[-0.5px]">
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
