import Button from "@/components/ui/Button";

interface HeroProps {
  hero: {
    title: string;
    tag: string;
  };
  post: {
    image: string;
    categories: {
      id: string;
      label: string;
    }[];
    date: string;
    autor: string;
    title: string;
    descriptionShort: string;
    buttonHref: string;
  };
}

export default function Hero({ hero, post }: HeroProps) {
  return (
    <section className="container-full flex flex-col justify-center items-center pt-14 gap-6">
      <div className="flex flex-col justify-center items-center gap-4 text-primary text-center">
        <p className="paragraph-x-small uppercase tracking-[-0.5px] fade-up">
          {hero.tag}
        </p>
        <h1 className="title-h2 fade-up">{hero.title}</h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center rounded-2xl overflow-hidden">
          <div className="w-full h-auto md:h-full xl:h-auto aspect-343/238 md:aspect-688/478 relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover object-top "
              decoding="async"
              loading="lazy"
              width={688}
              height={478}
            />
          </div>
          <div className="bg-rosado w-full flex justify-center items-center h-full">
            <div className="flex flex-col justify-center items-start py-12 px-4 h-full gap-4 max-w-none md:max-w-[95%] xl:max-w-[80%]">
              <h2 className="text-primary text-[28px] md:text-[36px] font-normal tracking-[-0.5px] leading-[120%] font-title fade-left">
                {post.title}
              </h2>
              <div className="flex justify-start items-center gap-1 paragraph-xx-small uppercase tracking-[-0.5px] text-[#717171] fade-left">
                <p>{post.date}</p>
                <p>.</p>
                <p>{post.autor}</p>
              </div>
              <p className="paragraph font-normal text-primary fade-left">
                {post.descriptionShort}
              </p>
              <Button
                styleButton="black"
                href={post.buttonHref}
                paddingX="px-4 fade-left"
                label="Read more"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
