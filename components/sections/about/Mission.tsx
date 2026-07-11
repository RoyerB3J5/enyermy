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
    <section className="w-full h-auto aspect-1440/500 flex justify-center items-center relative bg-accent">
      <div className="container-full flex justify-between items-center  gap-6 z-10">
        <div className="flex flex-col justify-center items-start gap-2 text-center w-[40%]">
          <p className="paragraph-x-large tracking-[-0.5px] uppercase">
            {content.tag}
          </p>
          <h2
            className="title-h4 text-start"
            dangerouslySetInnerHTML={{ __html: content.title }}
          />
          <p className=" paragraph font-normal tracking-[-0.5px] text-start">
            {content.description}
          </p>
        </div>
        <Image
          src={logo}
          alt="Logo Enyermy Studio Pro"
          width={600}
          height={181}
          className="w-1/2 h-auto block"
          priority
        />
      </div>
    </section>
  );
}
