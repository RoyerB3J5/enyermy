"use client";
import InfoProductCard from "@/components/shop/InfoProductCard";
import ProductCard from "@/components/shop/ProductCard";
import { LightProduct } from "@/types/square";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
interface ProductCardPropsWithImage extends LightProduct {
  image2: string; // O usa `image2?: string;` si es opcional
}
type SortOption = {
  id: string;
  label: string;
  sortFn: (products: LightProduct[]) => LightProduct[];
};

const sortOptions: SortOption[] = [
  { id: "1", label: "All", sortFn: (p) => p },
  {
    id: "2",
    label: "Price: High to Low",
    sortFn: (p) => [...p].sort((a, b) => Number(b.precio) - Number(a.precio)),
  },
  {
    id: "3",
    label: "Price: Low to High",
    sortFn: (p) => [...p].sort((a, b) => Number(a.precio) - Number(b.precio)),
  },
  { id: "4", label: "Newest", sortFn: (p) => p },
  { id: "5", label: "Best Sellers", sortFn: (p) => p },
];

interface GridProductsProps {
  content: ProductCardPropsWithImage[];
  contentFixed: {
    products: string;
    filtro: string;
    sortBy: string;
    items?: { id: string; label: string }[];
  };
  buttonLabel?: string;
}

function labelFor(option: SortOption, items?: { id: string; label: string }[]) {
  return items?.find((i) => i.id === option.id)?.label ?? option.label;
}
const infoProductContent = [
  {
    image: "info-product-1",
    title: "Reveal <br/> Silky <br className='block md:hidden'/> Hair",
    href: "#",
    position: "left",
    colorText: "white",
    labelButton: "Shop Now",
  },
  {
    image: "info-product-2",
    title: "Perfect <br/> Every <br className='block md:hidden'/> Curl",
    href: "#",
    position: "left",
    colorText: "black",
    labelButton: "Shop Now",
  },
  {
    image: "info-product-3",
    title:
      "From <br class='block md:hidden'/> Brassy <br class='hidden md:block'/> to <br class='block md:hidden'/> Blonde",
    href: "#",
    position: "right",
    colorText: "white",
    labelButton: "Shop Now",
  },
];
export default function GridProducts({
  content,
  contentFixed,
  buttonLabel,
}: GridProductsProps) {
  const [idSortFilter, setIdSortFilter] = useState("1");
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  return (
    <section className="container-full flex flex-col justify-center items-center gap-8 py-12 md:py-14">
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0">
        <p className="text-primary text-[17px] font-medium leading-[150%]">
          {content.length} {contentFixed.products}
        </p>
        <div className="flex justify-center items-center gap-4 w-full md:w-auto">
          <button className="flex justify-center items-center gap-[7px] border md:border-0 border-[#E7E7E7] py-2 md:py-0 rounded-lg w-1/2 md:w-auto">
            <SlidersHorizontal
              className="text-primary w-6 h-6"
              strokeWidth={2}
            />
            <p className="text-primary text-[17px] font-medium leading-[150%]">
              {contentFixed.filtro}
            </p>
          </button>
          <div className="w-[1px] self-stretch bg-[#D9D9D9]hidden md:block "></div>
          <div className="flex justify-center items-center gap-[7px] w-1/2 md:w-auto border md:border-0 border-[#E7E7E7] py-2 md:py-0 rounded-lg relative">
            <p className="text-[#717171] text-[17px] font-medium leading-[150%]">
              {contentFixed.sortBy}
            </p>
            <button
              className="text-primary text-[17px] font-medium leading-[150%] gap-[7px] flex justify-center items-center cursor-pointer"
              onClick={() => setSortDropdownOpen((prev) => !prev)}
            >
              {labelFor(
                sortOptions.find((item) => item.id === idSortFilter)!,
                contentFixed.items,
              )}
              <ChevronDown className="text-primary w-6 h-6" />
            </button>
            {sortDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 flex flex-col bg-white border border-black/10 rounded-lg shadow-lg z-10 p-4 ">
                {sortOptions.map((item) => (
                  <button
                    key={item.id}
                    className={`flex items-center gap-2 p-2 text-primary text-[15px] font-medium leading-[150%]  text-left rounded-sm whitespace-nowrap ${
                      item.id === idSortFilter
                        ? ""
                        : "hover:bg-black/5 cursor-pointer"
                    }`}
                    onClick={() => {
                      setIdSortFilter(item.id);
                      setSortDropdownOpen(false);
                    }}
                  >
                    <span className="w-4 h-4 rounded-full border border-black/10 flex items-center justify-center shrink-0">
                      {item.id === idSortFilter && (
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </span>
                    <p></p>
                    {labelFor(item, contentFixed.items)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8">
        {content.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            image2={product.image2}
            buttonLabel={buttonLabel}
          />
        ))}
        <InfoProductCard information={infoProductContent[0]} />
        {content.slice(3, 6).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            image2={product.image2}
            buttonLabel={buttonLabel}
          />
        ))}
        <InfoProductCard information={infoProductContent[1]} />
        <InfoProductCard information={infoProductContent[2]} />
      </div>
    </section>
  );
}
