"use client";
import Image from "next/image";
import type { FrontendProductDetail } from "@/types/square";

export default function Banner({
  contentProduct,
}: {
  contentProduct: FrontendProductDetail;
}) {
  return (
    <section className="w-full h-auto relative md:flex flex-col justify-center items-center aspect-1440/580 hidden overflow-hidden">
      <Image
        src={contentProduct.imagenes.at(-1) ?? "/placeholder.jpg"}
        alt={contentProduct.nombre}
        width={1440}
        height={580}
        sizes="(max-width: 768px) 1440px, 1440px "
        className="w-full h-full object-cover absolute inset-0 z-0 object-center hover:scale-105 transition-transform duration-300 ease-out"
      />
      <div className="z-1 flex flex-col justify-center items-center gap-4 text-primary fade-up">
        <p className="paragraph font-normal">
          Natural Care, Professional Performance
        </p>
        <h2 className="title-h2 w-[70%] text-center">
          Botanical-Powered Formula
        </h2>
      </div>
    </section>
  );
}
