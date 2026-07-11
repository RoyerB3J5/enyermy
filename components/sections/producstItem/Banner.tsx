"use client";
import Image from "next/image";
import type { FrontendProductDetail } from "@/types/square";

export default function Banner({
  contentProduct,
}: {
  contentProduct: FrontendProductDetail;
}) {
  return (
    <section className="w-full h-auto relative md:flex flex-col justify-center items-center aspect-1440/580 hidden ">
      <Image
        src={contentProduct.imagenes.at(-1) ?? "/placeholder.jpg"}
        alt={contentProduct.nombre}
        width={1440}
        height={580}
        className="w-full h-full object-cover absolute inset-0 z-0 object-center"
      />
      <div className="z-1 flex flex-col justify-center items-center gap-4 text-primary">
        <p className="paragraph font-normal">
          {contentProduct["Banner Description"]}
        </p>
        <h2 className="title-h2 w-[70%] text-center">
          {contentProduct["Banner Title"]}
        </h2>
      </div>
    </section>
  );
}
