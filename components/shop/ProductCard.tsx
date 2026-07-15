import { generateSlug } from "@/lib/slug";
import { LightProduct } from "@/types/square";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

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
  const productSlug = generateSlug(product.nombre);
  return (
    <Link
      href={`/products/1`}
      // "group" nos permite disparar animaciones en los hijos cuando se hace hover en el Link
      className="group flex flex-col justify-start gap-3 w-full"
    >
      {/* 1. CONTENEDOR DE IMÁGENES (Aquí ocurre toda la magia del hover) */}
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-gray-100">
        {/* Imagen Principal (Por defecto) */}
        <img
          src={product.imagen as string}
          alt={product.nombre}
          width="300"
          height="300"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          decoding="async"
          loading="lazy"
        />

        {/* Segunda Imagen + Botón (Capa que sube) */}
        {image2 && (
          <div className="absolute inset-0 w-full h-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 overflow-hidden">
            {/* Imagen 2 */}
            <img
              src={image2}
              alt={product.nombre}
              width="300"
              height="300"
              className="w-full h-full object-cover rounded-2xl"
              decoding="async"
              loading="lazy"
            />

            {/* BOTÓN ENCIMA */}
            {buttonLabel && (
              <div className="absolute inset-0 flex items-end justify-center p-4">
                <Button label={buttonLabel} styleButton="white" wFull />
              </div>
            )}
          </div>
        )}
      </div>

      {/* 2. CONTENEDOR DE TEXTO (A salvo de la animación) */}
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
      {buttonLabel && (
        <div className=" flex items-center justify-center p-4 md:hidden">
          <Button label={buttonLabel} styleButton="white" wFull />
        </div>
      )}
    </Link>
  );
}
