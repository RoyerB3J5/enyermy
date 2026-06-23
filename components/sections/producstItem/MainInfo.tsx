"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  images: ["argan-oil-1", "argan-oil-2"],
  info: {
    tag: "ENYERMY STUDIO PRO velvety silk",
    title: "Intense hydrating Bonding Mask",
    price: "$ 20.00",
    size: "Size: 250 G",
    button: "Add to cart",
    recommendation: "More than 1K customers recommend it!",
    characteristics: [
      "Repairs Severely Damaged Hair",
      "Infused With Amino Keratin",
      "Strengthens Hair Bonds",
      "Restores Shine & Luminosity",
      "Revitalizes Hair Health ",
    ],
    also: "Also use with",
  },
  relatedProduct: {
    tag: "ENYERMY STUDIO PRO velvety silk",
    image: "shampoo-1",
    title: "Hydrate Shampoo for Dry Damage Hair",
    price: "$ 20.00",
    button: "ADD",
  },
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
export default function MainInfo() {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <section className="container-full flex flex-col justify-center items-center pt-[var(--header-height)]">
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
            {content.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setImageIndex(index)} //
                className="focus:outline-none cursor-pointer"
              >
                <Image
                  src={`/images/${image}.webp`}
                  alt={image}
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
              src={`/images/${content.images[imageIndex]}.webp`}
              alt={content.images[imageIndex]}
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
            <div className="flex flex-col justify-start items-start ">
              <p>{content.info.tag}</p>
              <h1>{content.info.title}</h1>
            </div>
            <p>{content.info.price}</p>
          </div>
          <div>
            <p>{content.info.size}</p>
          </div>
          <p>{content.info.recommendation}</p>
        </div>
      </div>
    </section>
  );
}
