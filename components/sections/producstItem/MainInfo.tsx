"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { FrontendProductDetail } from "@/types/square";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import ButtonLink from "@/components/ui/ButtonLink";
import AccordeonProduct from "./AccordeonProduct";

import { useParams } from "next/navigation";
import { generarSlug } from "@/lib/slug";

interface MainInfoProps {
  contentProduct: FrontendProductDetail;
  comoUsar: string;
  ingredientsArray?: string[];
}
const content = {
  buttonLabel: "ADD to Cart",
  reserva: "SCHEDULE INSTALLATION",
  links: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "",
      href: "#",
    },
  ],
  accordeon: [
    {
      header: "How to use",
      content: "",
    },
    {
      header: "Ingredients",
      content: "",
    },
    {
      header: "Return Policy",
      content:
        "What if my order arrived damaged? we will gladly replace any products ordered on enyermyhairsolutions.shop that were delivered to you damaged. Please email enyermyhairsolution@gmail.com with images of your package and your order information. Any inquiries sent after 7 business days will be ineligible for replacement. <br/> What if my package is lost? If your product shipment tracking via UPS or USPS displays no movement or displays delivered and has not been delivered, please reach out directly to the shipment company to start a claim under the tracking number for your order. for any other questions, please reach out to our team at enyermyhairsolution@gmail.com with your order information.",
    },
    {
      header: "Shipping",
      content:
        "We do our best to process orders placed by noon Eastern Time, Monday through Friday, on the same day. Orders received after that time or on the weekend will be processed the next business day, except for holiday or high-volume timeframes. Once an order has been processed and shipped, it typically takes 5-7 business days to arrive using UPS Ground shipping, depending on the destination. <br/> Severe weather may cause shipping delays. We regret that we are not able to guarantee express delivery in the event of severe weather. We currently only accept orders being sent to the 48 contiguous United States. We are not able to ship to Hawaii, Alaska, U.S. territories, PO boxes, or APO/FPO addresses. We do not offer shipping to international addresses currently.",
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
};
export default function MainInfo({
  contentProduct,
  comoUsar,
  ingredientsArray,
}: MainInfoProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [variationIndex, setVariationIndex] = useState(0);
  const [amount, setAmount] = useState(1);
  const cartStore = useCart();
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  const handleAddToCart = () => {
    if (!cartStore) return;
    const selectedVariation = contentProduct.variaciones[variationIndex];
    const productSlug = generarSlug(contentProduct.nombre);
    const href = `/${locale}/products/${productSlug}-${contentProduct.id}`;

    cartStore.addItem(
      {
        id: selectedVariation.id,
        name: `${contentProduct.nombre} (${selectedVariation.nombre})`,
        price: selectedVariation.precio,
        image: contentProduct.imagenes[0] || "",
        href,
      },
      amount,
    );
    cartStore.openCart();
  };

  const handleRelatedAddToCart = () => {
    if (!cartStore) return;
    const relatedSlug = generarSlug(content.related.title);
    const relatedHref = `/${locale}/products/${relatedSlug}`;

    cartStore.addItem(
      {
        id: "related-shampoo",
        name: content.related.title,
        price: content.related.price,
        image: content.related.image,
        href: relatedHref,
      },
      1,
    );
    cartStore.openCart();
  };

  const productName = (contentProduct.nombre || "").toLowerCase();
  const isExtension = productName.includes("extension");

  return (
    <section className="container-full flex flex-col justify-center items-center pt-[var(--header-height)] pb-0 md:pb-14">
      <div className="w-full flex justify-start items-center gap-2 py-4 fade-up">
        {content.links.map((link, index) => {
          const isLast = index === content.links.length - 1;
          // Si es el último elemento, usamos el nombre del producto. Si no, us el label del link.
          const labelText = isLast ? contentProduct.nombre : link.label;

          return (
            <div key={index} className="flex items-center">
              <Link
                href={link.href}
                className="text-primary paragraph-x-small hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                {labelText}
              </Link>

              {/* El separador se renderiza fuera del <Link> sólo si no es el último elemento */}
              {!isLast && <span className="mx-2 text-primary">/</span>}
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
        <div className="w-full md:w-1/2 flex justify-center items-start gap-4 fade-right">
          <div className="flex-none md:grid grid-cols-1 gap-4 hidden ">
            {contentProduct.imagenes.slice(0, -1).map((image, index) => (
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
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-8 ">
          <div className="w-full flex flex-col justify-start items-start gap-5.5 fade-left">
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
          <div className="w-full flex justify-start items-center gap-4 fade-left">
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
          <div className="w-full flex justify-center md:justify-start items-center gap-4 fade-left">
            <div className="flex justify-center items-center px-0 md:px-3 py-3 md:py-[15px] gap-6 border border-[#B8B8B8] rounded-full w-1/2 md:w-auto shrink-0">
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
              paddingX="md:px-15"
              onClick={handleAddToCart}
            />
          </div>
          {isExtension && (
            <div className="fade-left">
              <ButtonLink content={{ text: content.reserva, href: "/" }} />
            </div>
          )}
          <div className="w-full bg-[#ECF5E9] flex justify-center items-center py-4 px-4 md:px-6 rounded-2xl fade-left">
            <p className="text-[14px] font-medium leading-[150%] tracking-[3px] uppercase text-primary text-center">
              {content.recomendation}
            </p>
          </div>
          <ul className="ml-2 fade-left">
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
          <p className="title-h6 text-primary fade-left">{content.also}</p>
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 fade-left">
            <div className="flex justify-center items-center">
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
                <button
                  className="block md:hidden paragraph font-medium text-primary border-b border-primary pb-1"
                  onClick={handleRelatedAddToCart}
                >
                  {content.relatedProduct.button}
                </button>
              </div>
            </div>
            <Button
              label={content.relatedProduct.button}
              styleButton="white"
              paddingX="md:px-[50px] hidden md:block"
              onClick={handleRelatedAddToCart}
            />
          </div>
          <AccordeonProduct
            content={content.accordeon}
            comoUsar={comoUsar}
            ingredientsArray={ingredientsArray}
          />
        </div>
      </div>
    </section>
  );
}
