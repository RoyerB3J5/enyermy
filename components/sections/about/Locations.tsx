import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";

interface LocationsProps {
  content: {
    title: string;
    items: {
      image: string;
      name: string;
      direction: string;
    }[];
  };
}
export default function Locations({ content }: LocationsProps) {
  return (
    <section className="container-full flex flex-col justify-center items-center pt-16 pb-14 gap-8 text-primary">
      <h2 className="title-h4">{content.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {content.items.map((item, index) => (
          <div
            className="flex flex-col justify-center items-center gap-2"
            key={index}
          >
            <div className="relative w-full h-auto aspect-square rounded-2xl overflow-hidden">
              <Image
                src={`/images/about/${item.image}.webp`}
                alt={item.name}
                width={500}
                height={500}
                className="object-cover absolute w-full h-full inset-0 object-center"
              />
            </div>
            <h3 className="text-[22px] font-normal font-title tracking-[-0.5px] text-center">{item.name}</h3>
            <p
              className="paragraph text-center tracking-[-0.5px] font-normal"
              dangerouslySetInnerHTML={{ __html: item.direction }}
            ></p>
            <ButtonLink content={{ text: "Book Now", href: "#" }} />
          </div>
        ))}
      </div>
    </section>
  );
}
