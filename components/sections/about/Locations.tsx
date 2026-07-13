import Button from "@/components/ui/Button";
import ButtonLink from "@/components/ui/ButtonLink";

interface LocationsProps {
  content: {
    title: string;
    items: {
      image: string;
      name: string;
      direction: string;
      href: string;
    }[];
    mainPage: boolean;
  };
  differentDisplay?: boolean;
}
export default function Locations({
  content,
  differentDisplay,
}: LocationsProps) {
  return (
    <section className="container-full flex flex-col justify-center items-center pt-16 pb-14 gap-8 text-primary">
      <h2 className="title-h4">{content.title}</h2>
      <div
        className={
          differentDisplay
            ? "grid grid-cols-1 md:grid-cols-2  gap-x-6 gap-y-12 w-full"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-start"
        }
      >
        {content.items.map((item, index) => (
          <div
            className="flex flex-col justify-center items-center gap-2"
            key={index}
          >
            <div
              className={`relative w-full h-auto ${differentDisplay ? "aspect-676/428" : "aspect-square"} rounded-2xl overflow-hidden`}
            >
              <img
                src={`/images/about/${item.image}.webp`}
                alt={item.name}
                width="978"
                height="978"
                className="object-cover absolute w-full h-full inset-0 object-center"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="text-[22px] font-normal font-title tracking-[-0.5px] text-center">
              {item.name}
            </h3>
            <p
              className="paragraph text-center tracking-[-0.5px] font-normal"
              dangerouslySetInnerHTML={{ __html: item.direction }}
            ></p>
            {content.mainPage == true ? (
              <Button
                label="Book Now"
                styleButton="white"
                wFull={true}
                href={item.href}
              />
            ) : (
              <ButtonLink content={{ text: "Book Now", href: item.href }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
