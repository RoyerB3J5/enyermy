import { generateSlug } from "@/lib/slug";
import { LightProduct } from "@/types/square";
import Image from "next/image";
import Link from "next/link";
interface ProductCardProps {
  product: LightProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const productSlug = generateSlug(product.nombre);
  return (
    <Link
      //  cambiar el href
      href={`/products/1`}
      className="flex flex-col justify-start items-center gap-3 hover:-translate-y-1 transition-transform duration-300 ease-in-out"
    >
      <Image
        src={product.imagen}
        alt={product.nombre}
        width="300"
        height="300"
        className="w-full h-auto object-cover rounded-2xl"
      />
      <div className="flex flex-col justify-center items-center ">
        <p className="paragraph-x-small uppercase text-primary-light">
          {product.marca}
        </p>
        <h3 className="paragraph text-primary font-normal text-center">
          {product.nombre}
        </h3>
        <p className="paragraph text-primary font-medium">
          {product.tieneAtributos && `From `} ${product.precio}
        </p>
      </div>
    </Link>
  );
}
