import { Users, Trophy, MapPin, Star } from "lucide-react";
interface NumbersProps {
  content: {
    title: string;
    items: {
      number: string;
      label: string;
      icon: string;
    }[];
  };
}
export default function Numbers({ content }: NumbersProps) {
  const icons = {
    Users,
    Trophy,
    MapPin,
    Star,
  };
  return (
    <section className="container-full flex flex-col justify-center items-center pt-12 md:pt-16 gap-10 md:gap-8 text-primary">
      <h2 className="title-h4">{content.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start md:items-center md:items-stretch gap-8 lg:gap-0">
        {content.items.map((item, index) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <div
              key={index}
              className="md:min-w-[286px] flex justify-start items-start px-10 gap-2 md:border-r border-[#E6E6E6] last:border-none"
            >
              <Icon className="w-14 md:w-6 h-14 md:h-6 text-black" />
              <div className="flex flex-col justify-center items-start gap-1">
                <p className="text-[24px] font-semibold leading-[100%] uppercase">
                  {item.number}
                </p>
                <p
                  className="paragraph font-medium"
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
