import { LightProduct } from "@/types/square";
import Link from "next/link";
import CarouselProducts from "../CarouselProducst";
import ButtonLink from "@/components/ui/ButtonLink";

interface RecomendationsProps {
  content: {
    title: string;
    products: LightProduct[];
    button: { text: string; href: string };
  };
}
export default function Recomendations({ content }: RecomendationsProps) {
  return (
    <section className="container-full flex flex-col justify-center items-center gap-6 py-14">
      <h2 className="title-h4 text-primary">{content.title}</h2>
      <CarouselProducts content={content.products} />
      <ButtonLink content={content.button} />
    </section>
  );
}
