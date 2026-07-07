//informacion de un solo producto, con imagen y boton de compra de square
import Button from "@/components/ui/Button";
import Image from "next/image";
interface ItemAloneProps {
  content: {
    imageProduct: string;
    tag: string;
    title: string;
    button: string;
    bgColor: string;
    image: string;
  };
}
export default function ItemAlone({ content }: ItemAloneProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full">
      <div
        className={`w-full h-auto aspect-720/628  ${content.bgColor} flex flex-col items-center justify-center gap-4`}
      >
        <Image
          className={`w-[50%] h-auto aspect-square object-cover`}
          src={`${content.imageProduct}`}
          alt={content.title}
          width={420}
          height={420}
        />
        <div className="flex flex-col items-center justify-center w-full">
          <p className="paragraph-x-small uppercase text-primary-light">
            {content.tag}
          </p>
          <h2 className="w-[30%] paragraph text-primary font-normal text-center">
            {content.title}
          </h2>
        </div>
        <Button label={content.button} styleButton="black" paddingX="px-6" />
      </div>
      <div className="overflow-hidden">
        <img
          className={`w-full h-auto aspect-720/628 object-cover image-scale`}
          src={`/images/main/${content.image}.webp`}
          alt={content.title}
          width={720}
          height={660}
        />
      </div>
    </section>
  );
}
