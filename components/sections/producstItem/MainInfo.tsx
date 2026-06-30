"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { FrontendProductDetail } from "@/types/square";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";

const content = {
  links: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Argan Oil",
      href: "/argan-oil",
    },
  ],
  relatedProduct: {
    tag: "ENYERMY STUDIO PRO velvety silk",
    image: "shampoo-1",
    title: "Hydrate Shampoo for Dry Damage Hair",
    price: "$ 20.00",
    button: "ADD",
  },
  also: "Also use with",
  related: {
    image: "/images/shampoo.webp",
    tag: "ENYERMY STUDIO PRO velvety silk",
    title: "Hydrate Shampoo for Dry Damage Hair",
    price: "47.00",
  },
  recomendation: "More than 1K customers recommend it!",
  buttonLabel: "ADD TO CART",
  accordeon: [
    {
      label: "How to use",
    },
    {
      label: "Ingredients",
    },
    {
      label: "Return Policy",
    },
    {
      label: "Shipping",
    },
  ],
};
export default function MainInfo({
  contentProduct,
}: {
  contentProduct: FrontendProductDetail;
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [variationIndex, setVariationIndex] = useState(0);
  const [amount, setAmount] = useState(1);
  const cartStore = useCart();

  const handleAddToCart = () => {
    if (!cartStore) return;
    const selectedVariation = contentProduct.variaciones[variationIndex];
    cartStore.addItem(
      {
        id: `${contentProduct.id}-${selectedVariation.nombre}`,
        name: `${contentProduct.nombre} (${selectedVariation.nombre})`,
        price: selectedVariation.precio,
        image: contentProduct.imagenes[0] || "",
      },
      amount,
    );
  };

  const handleRelatedAddToCart = () => {
    if (!cartStore) return;
    cartStore.addItem(
      {
        id: "related-shampoo",
        name: content.related.title,
        price: content.related.price,
        image: content.related.image,
      },
      1,
    );
  };

  return (
    <section className="container-full flex flex-col justify-center items-center pt-[var(--header-height)] pb-14">
      <div className="w-full flex justify-start items-center gap-2 py-4">
        {content.links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-primary paragraph-xx-small hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            {link.label}
            {index < content.links.length - 1 && (
              <span className="mx-2 text-primary">/</span>
            )}
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-center items-start gap-6">
        <div className="w-1/2 flex justify-center items-start gap-4">
          <div className="flex-none grid grid-cols-1 gap-4">
            {contentProduct.imagenes.slice(0, -2).map((image, index) => (
              <button
                key={index}
                onClick={() => setImageIndex(index)}
                className="focus:outline-none cursor-pointer"
              >
                <Image
                  src={`${image}`}
                  alt={`Imagen del producto ${index + 1}`}
                  width={80}
                  height={80}
                  className={`w-20 h-20 rounded-xl border-2 object-cover transition-all ${
                    imageIndex === index ? "border-primary" : "border-[#717171]"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex-1 min-w-0">
            <Image
              src={`${contentProduct.imagenes[imageIndex]}`}
              alt={contentProduct.imagenes[imageIndex]}
              width={600}
              height={600}
              // aspect-square asegura que sea perfectamente simétrica si lo requieres
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-start items-start gap-8 ">
          <div className="w-full flex flex-col justify-start items-start gap-5.5">
            <div className="flex flex-col justify-start items-start gap-5.5">
              <div className="flex flex-col justify-start items-start gap-[3px]">
                <p className="paragraph-x-small uppercase text-primary-light">
                  {contentProduct.Brand}
                </p>
                <h1 className="title-h3 text-primary">
                  {contentProduct.nombre}
                </h1>
              </div>
              <p className="paragraph-x-large text-primary">
                $ {contentProduct.variaciones[variationIndex].precio}
              </p>
            </div>
          </div>
          <div className="w-full flex justify-start items-center gap-4">
            <p className="paragraph font-medium text-primary">Size:</p>
            <div className="flex justify-start items-center gap-4">
              {contentProduct.variaciones.map((variation, index) => (
                <button
                  key={index}
                  onClick={() => setVariationIndex(index)}
                  className={`py-[5px] px-[27px] rounded-full border flex justify-center items-center text-[14px] font-medium leading-[150%] cursor-pointer ${
                    variationIndex === index
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-primary border-[#E6E6E6]"
                  }`}
                >
                  {variation.nombre}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-start items-center gap-4">
            <div className="flex jusitfy-center items-center px-3 py-[15px] gap-6 border border-[#B8B8B8] rounded-full">
              <button
                onClick={() => setAmount(Math.max(1, amount - 1))}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 12H12H6"
                    stroke="#B8B8B8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className="text-[16px] font-medium uppercase leading-[131.25%] text-primary">
                {amount}
              </p>
              <button
                onClick={() => setAmount(Math.max(1, amount + 1))}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 12H12M12 12H6M12 12V6M12 12V18"
                    stroke="#B8B8B8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <Button
              label={content.buttonLabel}
              styleButton="black"
              paddingX="px-15"
              onClick={handleAddToCart}
            />
          </div>
          <div className="w-full bg-[#ECF5E9] flex justify-center items-center py-4 px-6 rounded-2xl">
            <p className="text-[14px] font-medium leading-[150%] tracking-[3px] uppercase text-primary">
              {content.recomendation}
            </p>
          </div>
          <ul className="ml-2">
            {contentProduct.descripcionArray.map((item, index) => (
              <li
                key={index}
                className="paragraph font-normal text-primary list-disc list-inside"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
          <p className="title-h6 text-primary">{content.also}</p>
          <div className="w-full flex justify-between items-center gap-4">
            <div className="flex jusitfy-center items-center">
              <Image
                src={content.related.image}
                alt={content.related.title}
                width={600}
                height={600}
                className="w-[140px] h-auto object-cover"
              />
              <div className="flex flex-col justify-center items-start ">
                <p className="paragraph-x-small uppercase text-primary-light">
                  {content.related.tag}
                </p>
                <h3 className="paragraph font-normal text-primary">
                  {content.related.title}
                </h3>
                <p className="paragraph font-medium text-primary">
                  ${content.related.price}
                </p>
              </div>
            </div>
            <Button
              label={content.relatedProduct.button}
              styleButton="white"
              paddingX="px-[50px]"
              onClick={handleRelatedAddToCart}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
