import { Star, Heart, Gem } from "lucide-react";
import Image from "next/image";
interface PhilosophyProps {
  content: {
    tag: string;
    title: string;
    description: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
}
export default function Philosophy({ content }: PhilosophyProps) {
  const icons = {
    Star,
    Heart,
    Gem,
  };
  return (
    <section className="container-full flex flex-col justify-center items-center py-12 md:py-15 gap-6">
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <p className="paragraph-x-large tracking-[-0.5px] uppercase">
          {content.tag}
        </p>
        <h2 className="title-h2">{content.title}</h2>
        <p className="w-full md:w-[60%] lg:w-[46%] paragraph font-normal tracking-[-0.5px]">
          {content.description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-stretch w-full">
        {content.items.map((item, index) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <div
              className="flex flex-col justify-center items-center gap-4 md:gap-6 text-center bg-[#F5F3F0] rounded-2xl py-6 md:py-12 px-4.5"
              key={index}
            >
              {item.icon === "leaf" ? (
                <img
                  src="/images/about/leaf.svg"
                  alt="Leaf"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                  decoding="async"
                  loading="lazy"
                />
              ) : (
                Icon && <Icon className="w-10 h-10 text-primary" />
              )}
              <div className="flex flex-col justify-center items-center gap-2">
                <h3 className="paragraph font-semibold uppercase">
                  {item.title}
                </h3>
                <p className="paragraph font-medium">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
