import Button from "@/components/ui/Button";
import Image from "next/image";
interface BundlesProps {
  content: {
    tag: string;
    title: string;
    descriptions: string[];
    button: {
      text: string;
      link: string;
    };
    image: string;
  };
  textWhite?: boolean;
}
export default function Bundles({ content, textWhite }: BundlesProps) {
  return (
    <section className="w-full h-auto aspect-1440/500 flex justify-center items-center relative">
      <Image
        src={`/images/${content.image}.webp`}
        alt={content.title}
        width={1440}
        height={500}
        className="w-full h-full object-cover object-center absolute inset-0 z-0"
        decoding="async"
        loading="lazy"
      />
      <div className="container-full flex flex-col justify-center items-start gap-6 z-10">
        <div className="flex flex-col justify-center items-start gap-2 ">
          <p className="paragraph-x-large tracking-[-0.5px] text-primary">{content.tag}</p>
          <h2 className={`title-h2 ${textWhite ? "text-white" : "text-primary"}`} dangerouslySetInnerHTML={{ __html: content.title }} />
          {content.descriptions.map((description, index) => (
            <p
              key={index}
              className="paragraph font-normal text-primary"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          ))}
        </div>

        <Button
          label={content.button.text}
          href={content.button.link}
          styleButton="black"
          paddingX="px-6"
        />
      </div>
    </section>
  );
}
