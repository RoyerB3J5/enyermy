import InfoProductCard from "@/components/shop/InfoProductCard";
import ProductCard from "@/components/shop/ProductCard";
import { LightProduct } from "@/types/square";
import Image from "next/image";
interface GridProductsProps {
  content: LightProduct[];
}
const infoProductContent = [
  {
    image: "info-product-1",
    title: "Reveal <br/> Silky Hair",
    href: "#",
    position: "left",
    colorText: "white",
    labelButton: "Shop Now",
  },
  {
    image: "info-product-2",
    title: "Perfect <br/> Every Curl",
    href: "#",
    position: "left",
    colorText: "black",
    labelButton: "Shop Now",
  },
  {
    image: "info-product-3",
    title: "From Brassy <br/> to Blonde",
    href: "#",
    position: "right",
    colorText: "white",
    labelButton: "Shop Now",
  },
];
export default function GridProducts({ content }: GridProductsProps) {
  return (
    <section className="container-full flex flex-col justify-center items-center gap-8 py-14">
      <div className="w-full flex justify-between items-center ">
        <p className="text-primary text-[17px] font-medium leading-[150%]">
          {content.length} products
        </p>
        <div className="flex justify-center items-center gap-4">
          <button className="flex justify-center items-center gap-[7px]">
            <Image
              src="/images/filter.svg"
              alt="Filter"
              width="16"
              height="16"
              className="w-6 h-auto block"
            />{" "}
            <p className="text-primary text-[17px] font-medium leading-[150%]">
              Filter
            </p>
          </button>
          <div className="w-[1px] self-stretch bg-[#D9D9D9]"></div>
          <div className="flex justify-center items-center gap-[7px]">
            <p className="text-[#717171] text-[17px] font-medium leading-[150%]">
              Sort by:
            </p>
            <button className="text-primary text-[17px] font-medium leading-[150%]">
              Featured
            </button>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {content.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <InfoProductCard information={infoProductContent[0]} />
        {content.slice(3, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <InfoProductCard information={infoProductContent[1]} />
        <InfoProductCard information={infoProductContent[2]} />
      </div>
    </section>
  );
}
