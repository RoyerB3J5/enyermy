"use client";
import { LightProduct } from "@/types/square";
import ProductImage from "@/components/ui/ProductImage";
import Link from "next/link";
import Button from "../ui/Button";
import { useCart } from "@/hooks/useCart";
import { useParams } from "next/navigation";
import { generarSlug } from "@/lib/slug";

interface ProductCardProps {
  product: LightProduct;
  image2?: string;
  buttonLabel?: string;
}

export default function ProductCard({
  product,
  image2,
  buttonLabel,
}: ProductCardProps) {
  const cartStore = useCart();
  const params = useParams();
  const locale = params.locale as string;
  const productSlug = generarSlug(product.nombre);
  const href = `/${locale}/products/${productSlug}-${product.id}`;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!cartStore) return;
    cartStore.addItem({
      id: product.idVariant || "",
      name: product.nombre,
      price: product.precio,
      image: product.imagen,
      href,
    });
    cartStore.openCart();
  };

  return (
    <Link
      href={href}
      className="group flex flex-col justify-start gap-3 w-full "
    >
      {/* 1. CONTENEDOR DE IMÁGENES */}
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl ">
        {/* Imagen Principal (Por defecto) */}
        <ProductImage
          src={product.imagen as string}
          alt={product.nombre}
          width={800}
          height={800}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        />

        {/* Segunda Imagen + Botón */}
        {image2 && (
          <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-10 overflow-hidden">
            {/* Imagen 2 */}
            <ProductImage
              src={image2}
              alt={product.nombre}
              width={800}
              height={800}
              className="w-full h-full object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            />

            {/* BOTÓN ENCIMA */}
            {buttonLabel && !product.tieneAtributos && (
              <div className="absolute inset-0 flex items-end justify-center p-4 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
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

      {/* 2. CONTENEDOR DE TEXTO */}
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
      {buttonLabel && !product.tieneAtributos && (
        <div className=" flex items-center justify-center p-4 md:hidden">
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
