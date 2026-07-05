import Image from "next/image";
import ButtonLink from "../ui/ButtonLink";
import Button from "../ui/Button";

interface StylistsItemProps {
  content: {
    image: string;
    tag: string;
    name: string;
    description: string;
    list: string[];
    media: boolean;
    button: {
      label: string;
      href: string;
    };
    bgColor: string;
    imageFirst: boolean;
  };
  changeAspectRatio?: boolean;
}
const linkContent = {
  text: "@enyermystudiopro →",
  href: "#",
};
export default function StylistsItem({
  content,
  changeAspectRatio,
}: StylistsItemProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full">
      <div
        className={`w-full h-auto ${changeAspectRatio ? "aspect-720/500" : "aspect-720/660"} ${content.imageFirst ? "order-1" : "order-2"} relative`}
      >
        <img
          className={`w-full h-full object-cover object-center absolute inset-0`}
          src={`/images/salon-experience/stylists/${content.image}.webp`}
          decoding="async"
          loading="lazy"
          alt={content.name}
          width={720}
          height={660}
        />
      </div>

      <div
        className={`w-full h-auto ${changeAspectRatio ? "aspect-720/500" : "aspect-720/660"} ${
          content.imageFirst ? "order-2" : "order-1"
        } ${content.bgColor} flex items-center ${
          content.imageFirst
            ? "pr-[max(2rem,calc((100vw-1280px)/2))]"
            : "pl-[max(2rem,calc((100vw-1280px)/2))]"
        }`}
      >
        <div
          className={`$w-full max-w-160 flex ${content.imageFirst ? "justify-end" : "justify-start"}`}
        >
          <div className="flex flex-col items-start text-primary gap-8 w-[90%]">
            <div className="flex flex-col justify-center items-start gap-4">
              <p className="paragraph-x-large tracking-[-0.5px]">
                {content.tag}
              </p>
              <h2
                className="title-h4"
                dangerouslySetInnerHTML={{ __html: content.name }}
              />
              <p
                className={` ${changeAspectRatio ? "w-[85%] 3xl:w-[82%]" : "w-[85%] 3xl:w-[85%]"} paragraph font-normal tracking-[-0.5px]`}
              >
                {content.description}
              </p>
              {content.list.length > 0 && (
                <ul className="list-disc list-inside">
                  {content.list.map((item, index) => (
                    <li
                      key={index}
                      className="paragraph font-normal tracking-[-0.5px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {content.media && <ButtonLink content={linkContent} />}

            <Button
              label={content.button.label}
              href={content.button.href}
              styleButton="black"
              paddingX="px-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
