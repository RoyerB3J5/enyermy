"use client";
import { getAllProductsType } from "@/types/square";
import ProductImage from "@/components/ui/ProductImage";
import Link from "next/link";
import Button from "../ui/Button";
import { generarSlug } from "@/lib/slug";
import { useCart } from "@/hooks/useCart";
import { useParams } from "next/navigation";

interface ProductCardProps {
  product: getAllProductsType;
  buttonLabel?: string;
  index?: number;
}

export default function ProductCardGrid({
  product,
  buttonLabel,
  index,
}: ProductCardProps) {
  const cartStore = useCart();
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const productSlug = generarSlug(product.nombre);
  const href = `/${locale}/products/${productSlug}-${product.id}`;
  const hasVariants = product.tieneAtributos;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!cartStore) return;
    cartStore.addItem({
      id: product.id,
      name: product.nombre,
      price: product.precio,
      image: product.imagenes[0] || "",
      href,
    });
    cartStore.openCart();
  };

  return (
    <Link
      href={href}
      className="group flex flex-col justify-start gap-3 w-full fade-up"
      style={{ transitionDelay: `${index ? index * 100 : 0}ms` }}
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-white">
        <ProductImage
          src={product.imagenes[0] as string}
          alt={product.nombre}
          width={300}
          height={300}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {product.imagenes[1] && (
          <div className="absolute inset-0 w-full h-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 overflow-hidden">
            <ProductImage
              src={product.imagenes[1] as string}
              alt={product.nombre}
              width={300}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
              className="w-full h-full object-cover rounded-2xl"
            />

            {buttonLabel && !hasVariants && (
              <div className="absolute inset-0 flex items-end justify-center p-4">
                <Button
                  label={buttonLabel}
                  styleButton="white"
                  wFull
                  onClick={handleAddToCart}
                />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="paragraph-x-small uppercase text-primary-light text-center">
          {product.marca}
        </p>
        <h3 className="paragraph text-primary font-normal text-center mt-1">
          {product.nombre}
        </h3>
        <p className="paragraph text-primary font-medium mt-0.5">
          {product.tieneAtributos && `From `} ${product.precio}
        </p>
      </div>
      {buttonLabel && !hasVariants && (
        <div className="flex items-center justify-center p-4 md:hidden">
          <Button
            label={buttonLabel}
            styleButton="white"
            wFull
            onClick={handleAddToCart}
          />
        </div>
      )}
    </Link>
  );
}
