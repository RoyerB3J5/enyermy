"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { generarSlug } from "@/lib/slug";
import type { getAllProductsType } from "@/types/square";
import type { Locale } from "@/i18n/config";

// Simulated mock data adhering strictly to getAllProductsType schema
const mockProducts: getAllProductsType[] = [
  {
    id: "1",
    nombre: "Bonding Mask",
    precio: "45.00",
    imagenes: ["/images/argan-oil-1.webp", "/images/argan-oil-2.webp"],
    marca: "ENYERMY STUDIO PRO",
    tieneAtributos: true,
    bestSeller: "Si",
    categoriaId: "P5CSXYZJ475IWVPNURLJCFYE",
    categoriaNombre: "Pro",
    cabelloTipo: "rizado",
    createdAt: "2026-06-20T06:10:25.534Z",
  },
  {
    id: "2",
    nombre: "Leave-in conditioner Versatile Cream for Deep Hydration",
    precio: "50.00",
    imagenes: ["/images/argan-oil-2.webp", "/images/argan-oil-1.webp"],
    marca: "ENYERMY STUDIO PRO VELVETY SILK",
    tieneAtributos: false,
    bestSeller: "No",
    categoriaId: "P5CSXYZJ475IWVPNURLJCFYE",
    categoriaNombre: "Velvety Silk",
    cabelloTipo: "teñido",
    createdAt: "2026-06-22T06:10:25.534Z",
  },
  {
    id: "3",
    nombre: "Argan Oil Hair Serum",
    precio: "38.00",
    imagenes: ["/images/argan-oil-1.webp"],
    marca: "ENYERMY STUDIO PRO",
    tieneAtributos: false,
    bestSeller: "Si",
    categoriaId: "CAT_ARGAN_001",
    categoriaNombre: "Serum",
    cabelloTipo: "seco",
    createdAt: "2026-07-01T06:10:25.534Z",
  },
  {
    id: "4",
    nombre: "Scalp Revitalizing Shampoo",
    precio: "42.00",
    imagenes: ["/images/argan-oil-2.webp"],
    marca: "ENYERMY STUDIO PRO VIVIFY",
    tieneAtributos: true,
    bestSeller: "No",
    categoriaId: "CAT_SHAMPOO_002",
    categoriaNombre: "Vivify",
    cabelloTipo: "graso",
    createdAt: "2026-07-10T06:10:25.534Z",
  },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
}

export default function SearchModal({
  isOpen,
  onClose,
  locale,
}: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<getAllProductsType[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load products once on component mount or modal open
  useEffect(() => {
    if (isOpen) {
      // Test Mode: Set mock products directly
      const content = mockProducts;
      setProducts(content);

      // Auto focus search input when opened
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setSearchTerm("");
    }
  }, [isOpen]);

  // Lock body scroll when search modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Check if user has entered any valid search input
  const trimmedTerm = searchTerm.trim();
  const isSearching = trimmedTerm.length > 0;
  const query = trimmedTerm.toLowerCase();

  // Filter products ONLY when isSearching is true
  const filteredProducts = isSearching
    ? products.filter((product) => {
        const matchName = product.nombre?.toLowerCase().includes(query);
        const matchBrand = product.marca?.toLowerCase().includes(query);
        const matchCategory = product.categoriaNombre
          ?.toLowerCase()
          .includes(query);
        const matchHairType = product.cabelloTipo
          ?.toLowerCase()
          .includes(query);

        return matchName || matchBrand || matchCategory || matchHairType;
      })
    : [];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-start items-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        className="transition-transform duration-300 ease-out max-h-[95vh] flex flex-col md:max-w-[700px] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Bar Input */}
        <div className="container-full py-5 border-b border-[#E7E7E7] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full bg-[#F5F5F5] rounded-full px-5 py-3 border border-transparent focus-within:border-primary transition-colors">
            <Search className="w-5 h-5 text-[#717171] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, brand, tag or hair type..."
              className="w-full bg-transparent outline-none text-primary text-[16px] placeholder:text-[#9E9E9E]"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
                className="text-[#717171] hover:text-primary transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-primary cursor-pointer shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Results Container: Rendered strictly when user has typed something */}
        {isSearching && (
          <div className="container-full py-6 overflow-y-auto grow">
            <div className="flex items-center justify-between mb-4">
              <p className="paragraph-x-small uppercase text-white font-semibold tracking-wider">
                Results ({filteredProducts.length})
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-12 text-center text-primary-light">
                <p className="paragraph text-primary font-medium">
                  No products found matching &quot;{searchTerm}&quot;
                </p>
                <p className="paragraph-x-small text-[#717171] mt-1">
                  Try searching for a different product name, brand, or
                  category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {filteredProducts.map((product) => {
                  const productSlug = generarSlug(product.nombre);
                  const href = `/${locale}/products/${productSlug}-${product.id}`;
                  const imageSrc = product.imagenes?.[0] || "/placeholder.jpg";
                  const tagOrBrand =
                    product.marca || product.categoriaNombre || "ENYERMY";

                  return (
                    <Link
                      key={product.id}
                      href={href}
                      onClick={onClose}
                      className="group flex justify-start items-center gap-6 p-4 rounded-2xl border border-[#E7E7E7] hover:border-primary/40 hover:shadow-md transition-all duration-300 bg-white"
                    >
                      {/* Image Container */}
                      <div className="w-[15%] aspect-square relative rounded-xl overflow-hidden bg-[#F8F8F8]">
                        <img
                          src={imageSrc}
                          alt={product.nombre}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Meta & Info */}
                      <div className="flex flex-col gap-1 grow">
                        <span className="paragraph-xx-small uppercase font-semibold text-[#717171] tracking-wider">
                          {tagOrBrand}
                        </span>
                        <h4 className="paragraph font-medium text-primary line-clamp-2 leading-tight group-hover:text-black transition-colors">
                          {product.nombre}
                        </h4>
                        <p className="paragraph-small font-semibold text-primary mt-auto pt-2">
                          ${product.precio}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
