import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";

interface CollectionsProps {
  content: {
    title: string;
    items: {
      image: string;
      title: string;
      description: string;
      button: {
        text: string;
        href: string;
      };
    }[];
  };
}

export default function Collections({ content }: CollectionsProps) {
  return (
    <section className="container-full flex flex-col justify-center items-center gap-8 py-14">
      <h2 className="title-h4 text-center">{content.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {content.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-3 text-primary"
          >
            <Image
              src={`/images/main/${item.image}.webp`}
              alt={item.title}
              width={448}
              height={448}
              className="w-full h-full object-cover object-center rounded-2xl"
            />
            <h3 className="title-h5 text-center">{item.title}</h3>
            <p className="paragraph text-center font-normal">
              {item.description}
            </p>
            <ButtonLink content={item.button} />
          </div>
        ))}
      </div>
    </section>
  );
}
