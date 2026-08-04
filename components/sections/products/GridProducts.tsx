"use client";
import InfoProductCard from "@/components/shop/InfoProductCard";
import ProductCardGrid from "@/components/shop/ProductCardGrid";
import { getAllProductsType } from "@/types/square";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

type SortOption = {
  id: string;
  label: string;
  sortFn: (products: getAllProductsType[]) => getAllProductsType[];
};

type FilterOption = {
  id: string;
  label: string;
  filterFn: (products: getAllProductsType[]) => getAllProductsType[];
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
  {
    id: "4",
    label: "Newest",
    sortFn: (p) =>
      [...p].sort(
        (a, b) =>
          new Date(b.createdAt ?? 0).getTime() -
          new Date(a.createdAt ?? 0).getTime(),
      ),
  },
  {
    id: "5",
    label: "Best Sellers",
    sortFn: (p) => p.filter((product) => product.bestSeller === "Si"),
  },
];

interface GridProductsProps {
  content: getAllProductsType[];
  contentFixed: {
    products: string;
    filtro: string;
    sortBy: string;
    items?: { id: string; label: string }[];
    itemsType?: { id: string; label: string }[];
  };
  buttonLabel?: string;
  productContent: {
    image: string;
    title: string;
    href: string;
    position: string;
    colorText: string;
    labelButton: string;
  }[];
}

function labelFor(option: SortOption | FilterOption, items?: { id: string; label: string }[]) {
  return items?.find((i) => i.id === option.id)?.label ?? option.label;
}

function buildFilterOptions(items: { id: string; label: string }[]): FilterOption[] {
  return items.map((item) => {
    if (item.id === "todos") {
      return { id: "todos", label: item.label, filterFn: (p) => p };
    }
    const hairTypeIds = ["seco", "rizado", "teñido"];
    if (hairTypeIds.includes(item.id)) {
      return {
        id: item.id,
        label: item.label,
        filterFn: (p) => p.filter((product) => product.cabelloTipo === item.id),
      };
    }
    return {
      id: item.id,
      label: item.label,
      filterFn: (p) => p.filter((product) => product.categoriaNombre === item.id),
    };
  });
}
export default function GridProducts({
  content,
  contentFixed,
  buttonLabel,
  productContent
}: GridProductsProps) {
  const [idSortFilter, setIdSortFilter] = useState("1");
  const [idFilter, setIdFilter] = useState("todos");
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);

  const filterOptions = useMemo(
    () => buildFilterOptions(contentFixed.itemsType ?? []),
    [contentFixed.itemsType],
  );

  const selectedSortOption = sortOptions.find(
    (item) => item.id === idSortFilter,
  )!;

  const selectedFilterOption = filterOptions.find(
    (item) => item.id === idFilter,
  ) ?? filterOptions[0];

  // Apply filter first, then sort
  const filteredProducts = selectedSortOption.sortFn(
    selectedFilterOption.filterFn(content),
  );

  return (
    <section className="container-full flex flex-col justify-center items-center gap-8 py-12 md:py-14">
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0 fade-up">
        <p className="text-primary text-[17px] font-medium leading-[150%]">
          {filteredProducts.length} {contentFixed.products}
        </p>
        <div className="flex justify-center items-center gap-4 w-full md:w-auto">
          <div className="flex justify-center items-center gap-[7px] w-1/2 md:w-auto border md:border-0 border-[#E7E7E7] py-2 md:py-0 rounded-lg relative">
            <SlidersHorizontal
              className="text-primary w-6 h-6"
              strokeWidth={2}
            />
            <button
              className="text-primary text-[17px] font-medium leading-[150%] gap-[7px] flex justify-center items-center cursor-pointer"
              onClick={() => setFilterDropdownOpen((prev) => !prev)}
            >
              {labelFor(selectedFilterOption, contentFixed.itemsType)}
              <ChevronDown className="text-primary w-6 h-6" />
            </button>
            {filterDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 flex flex-col bg-white border border-black/10 rounded-lg shadow-lg z-10 p-4 min-w-max">
                {filterOptions.map((item) => (
                  <button
                    key={item.id}
                    className={`flex items-center gap-2 p-2 text-primary text-[15px] font-medium leading-[150%] text-left rounded-sm whitespace-nowrap ${
                      item.id === idFilter
                        ? ""
                        : "hover:bg-black/5 cursor-pointer"
                    }`}
                    onClick={() => {
                      setIdFilter(item.id);
                      setFilterDropdownOpen(false);
                    }}
                  >
                    <span className="w-4 h-4 rounded-full border border-black/10 flex items-center justify-center shrink-0">
                      {item.id === idFilter && (
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </span>
                    {labelFor(item, contentFixed.itemsType)}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="w-[1px] self-stretch bg-[#D9D9D9] hidden md:block "></div>
          <div className="flex justify-center items-center gap-[7px] w-1/2 md:w-auto border md:border-0 border-[#E7E7E7] py-2 md:py-0 rounded-lg relative">
            <p className="text-[#717171] text-[17px] font-medium leading-[150%]">
              {contentFixed.sortBy}
            </p>
            <button
              className="text-primary text-[17px] font-medium leading-[150%] gap-[7px] flex justify-center items-center cursor-pointer"
              onClick={() => setSortDropdownOpen((prev) => !prev)}
            >
              {labelFor(
                selectedSortOption,
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
        {filteredProducts.slice(0, 3).map((product, index) => (
          <ProductCardGrid
            key={product.id}
            product={product}
            buttonLabel={buttonLabel}
            index={index}
          />
        ))}
        <InfoProductCard information={productContent[0]} />
        {filteredProducts.slice(3, 6).map((product,index) => (
          <ProductCardGrid
            key={product.id}
            product={product}
            buttonLabel={buttonLabel}
            index={index}
          />
        ))}
        <InfoProductCard information={productContent[1]} />
        <InfoProductCard information={productContent[2]} />
      </div>
    </section>
  );
}
