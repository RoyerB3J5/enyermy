import CarouselProductsColor from "./CarouselProductsColor";

interface ProfessionalsProps {
  content: {
    title: string;
    atributo: string;
    items: {
      color: string;
      slogan: string;
      image: string;
    }[];
  };
  contentProducts: {
    image: string;
    tag: string;
    title: string;
    price: string;
  }[];
}
export default function Professionals({
  content,
  contentProducts,
}: ProfessionalsProps) {
  return (
    <section className="w-full flex flex-col justify-center items-center pt-16 gap-8">
      <h2 className="title-h4 text-primary">{content.title}</h2>
      <CarouselProductsColor
        atributo={content.atributo}
        items={content.items}
        contentProducts={contentProducts}
      />
    </section>
  );
}
