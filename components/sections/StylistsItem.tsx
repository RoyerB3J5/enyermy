import ButtonLink from "../ui/ButtonLink";
import Button from "../ui/Button";

interface StylistsItemProps {
  content: {
    location?: string;
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
    linkContent?: {
      text: string;
      href: string;
    };
  };
  changeAspectRatio?: boolean;
  centerContent?: boolean;
  isParity?: boolean;
}

export default function StylistsItem({
  content,
  changeAspectRatio,
  centerContent,
  isParity,
}: StylistsItemProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full">
      <div
        className={`w-full h-auto ${changeAspectRatio ? "aspect-720/500 md:aspect-720/400 lg:aspect-720/500" : "aspect-720/660 xl:aspect-720/660"} ${isParity ? "lg:order-1 lg:aspect-auto lg:h-full xl:h-auto" : "lg:order-2 "} relative overflow-hidden`}
      >
        <img
          className={`w-full h-full object-cover  absolute inset-0 image-scale ${content.image == "enyermy" || content.image == "kamilla" || content.image == "lorena" ? "object-center" : "object-[50%_15%]"}`}
          src={`/images/salon-experience/stylists/${content.image}.webp`}
          decoding="async"
          loading="lazy"
          alt={content.name}
          width={720}
          height={660}
        />
      </div>

      <div
        className={`w-full py-12  h-auto ${changeAspectRatio ? "lg:aspect-720/500" : "lg:aspect-720/660"} ${
          isParity ? "lg:order-2 bg-white lg:py-3 xl:py-0" : "lg:order-1 bg-accent lg:py-0"
        }  flex items-center ${
          isParity
            ? "xl:pr-[max(2rem,calc((100vw-1280px)/2))]"
            : "xl:pl-[max(2rem,calc((100vw-1280px)/2))]"
        }`}
      >
        <div
          className={`w-full px-4 xl:px-0 lg:max-w-160 flex ${isParity ? "justify-end md:pl-6 " : "justify-start"}`}
        >
          <div
            className={`flex flex-col items-start text-primary gap-6 md:gap-4 xl:gap-8 w-full xl:w-[90%]`}
          >
            <div
              className={`flex flex-col justify-center ${centerContent ? "items-center md:items-start" : "items-start"} gap-5 md:gap-4`}
            >
              <p className="paragraph-x-large tracking-[-0.5px]">
                {content.tag}
              </p>
              <h2
                className={`title-h4 ${centerContent ? "text-center md:text-start" : "text-start"}`}
                dangerouslySetInnerHTML={{ __html: content.name }}
              />
              <p
                className={` ${changeAspectRatio ? "w-full xl:w-[85%] 3xl:w-[82%]" : "w-full xl:w-[85%] "} paragraph font-normal tracking-[-0.5px] ${centerContent ? "text-center md:text-start" : "text-start"}`}
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

            {content.media && content.linkContent && (
              <ButtonLink content={content.linkContent} />
            )}

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
