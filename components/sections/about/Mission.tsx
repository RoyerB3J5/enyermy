import Image from "next/image";
import logo from "@/public/images/logo.svg";
interface MissionProps {
  content: {
    tag: string;
    title: string;
    description: string;
  };
}

export default function Mission({ content }: MissionProps) {
  return (
    <section className="w-full h-auto aspect-auto lg:aspect-1440/500 flex justify-center items-center relative bg-accent py-12 lg:py-0">
      <div className="container-full flex flex-col md:flex-row justify-center md:justify-between items-center  gap-10 md:gap-6 z-10">
        <div className="flex flex-col justify-center items-center md:items-start gap-2 text-center w-full md:w-[40%] order-2 md:order-1">
          <p className="paragraph-x-large tracking-[-0.5px] uppercase">
            {content.tag}
          </p>
          <h2
            className="title-h4 text-center md:text-start"
            dangerouslySetInnerHTML={{ __html: content.title }}
          />
          <p className=" paragraph font-normal tracking-[-0.5px] text-center md:text-start">
            {content.description}
          </p>
        </div>
        <img
          src={'/images/logo.svg'}
          alt="Logo Enyermy Studio Pro"
          width={600}
          height={181}
          className="w-full md:w-1/2 h-auto block order-1 md:order-2"
          decoding="async"
          loading="lazy"
        />
      </div>
    </section>
  );
}
