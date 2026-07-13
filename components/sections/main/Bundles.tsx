import Button from "@/components/ui/Button";
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
  changeColor?: boolean;
}
export default function Bundles({
  content,
  textWhite,
  changeColor,
}: BundlesProps) {
  return (
    <section className="w-full h-auto aspect-auto md:aspect-1440/500 flex flex-col justify-center items-center relative overflow-hidden group">
      <img
        src={`/images/${content.image}.webp`}
        alt={content.title}
        width={1440}
        height={500}
        className="w-auto md:w-full h-[35vh] md:h-auto md:h-full object-cover object-[96%_50%] md:object-center relative md:absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-300 ease-in-out"
        decoding="async"
        loading="lazy"
      />
      <div
        className={`container-full flex flex-col justify-center items-center md:items-start gap-6 z-10 py-12 md:py-0 ${changeColor ? "bg-white" : "bg-rosado"} md:bg-transparent`}
      >
        <div className="flex flex-col justify-center items-center md:items-start gap-4 md:gap-2 ">
          <p className="paragraph-x-large tracking-[-0.5px] text-primary text-center">
            {content.tag}
          </p>
          <h2
            className={`title-h2 text-center md:text-start ${textWhite ? "text-primary md:text-white" : "text-primary"}`}
            dangerouslySetInnerHTML={{ __html: content.title }}
          />
          {content.descriptions.map((description, index) => (
            <p
              key={index}
              className="paragraph font-normal text-primary text-center md:text-start"
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
