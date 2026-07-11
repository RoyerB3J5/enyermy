"use client";
import Image from "next/image";
import type { FrontendProductDetail } from "@/types/square";
const content = {
  customer: "5.0 by Customers",
};
export default function AddInfo({
  contentProduct,
}: {
  contentProduct: FrontendProductDetail;
}) {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
      <Image
        src={contentProduct.imagenes.at(-2) ?? "/placeholder.jpg"}
        alt={contentProduct.nombre}
        width={720}
        height={589}
        className="w-full h-auto object-cover"
      />
      <div className="bg-accent w-full h-full flex flex-col justify-center items-center gap-8 md:gap-2 xl:gap-8 py-20 md:py-10 xl:py-20 text-primary">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/images/star.svg"
                  alt="star"
                  width={14}
                  height={14}
                />
              ))}
            </div>
            <p className="paragraph-x-small ">{content.customer}</p>
          </div>
          <h2 className="title-h4">{contentProduct.nombre}</h2>
          <p className="paragraph font-normal w-[70%] text-center">
            {contentProduct["Description-2"]}
          </p>
        </div>
        <div className="px-4 md:px-0 w-full md:w-[95%] xl:w-[85%] 3xl:w-[70%]">
          <table className="w-full border-collapse">
            <tbody>
              {contentProduct.table.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? "#F5D5B7" : "transparent",
                  }}
                >
                  <td className="w-[40%] p-2 align-center">{item.nombre}</td>
                  <td className="w-[60%] p-2 align-center">{item.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
