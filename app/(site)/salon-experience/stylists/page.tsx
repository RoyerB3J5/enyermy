"use client";
import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import StylistsGroup from "@/components/sections/StylistsGroup";

const content = {
  title: "Meet Our Experts",
  items: [
    {
      location: "ocoee",
      image: "enyermy",
      tag: "Founder / cosmetology educator",
      name: "Enyermy Dominguez",
      description:
        "Enyermy is a master hairstylist, educator, and entrepreneur dedicated to creating exceptional hair transformations through expertise, innovation, and professional care.",
      list: [
        "Master Hair Stylist",
        "Cosmetology Educator",
        "Hair Transformation Expert",
      ],
      media: true,
      button: {
        label: "book at enyermy studio pro",
        href: "#",
      },
      bgColor: "bg-white",
      imageFirst: true,
      linkContent: {
        text: "@enyermystudiopro →",
        href: "#",
      },
    },
    {
      location: "ocoee",
      image: "ruth",
      tag: "Partner at enyermy studio pro Orlando",
      name: "Ruth Noboa",
      description:
        "Ruth is a trichologist and scalp recovery specialist dedicated to promoting healthy hair growth through personalized scalp care and restorative treatments.",
      list: [
        "Certified Trichologist",
        "Scalp Recovery Specialist",
        "Hair Growth Expert",
      ],
      media: true,
      button: {
        label: "bOOK WITH RUTH",
        href: "#",
      },
      bgColor: "bg-accent",
      imageFirst: false,
      linkContent: {
        text: "@enyermystudiopro →",
        href: "#",
      },
    },
    {
      location: "ocoee",
      image: "odeth",
      tag: "St peterburgs Manager",
      name: "Odeth Dominguez",
      description:
        "Odeth is a professional hairstylist specializing in personalized hair transformations, helping clients achieve their ideal look through expert color and extension services.",
      list: [
        "Color Correction Specialist",
        "Hair Extension Expert",
        "Custom Hair Transformations",
      ],
      media: true,
      button: {
        label: "bOOK WITH ODETH",
        href: "#",
      },
      bgColor: "bg-white",
      imageFirst: true,
      linkContent: {
        text: "@odethandhair →",
        href: "#",
      },
    },
    {
      location: "waterford",
      image: "lourdes",
      tag: "Waterford Lakes Manager",
      name: "Lourdes Escabrisas",
      description:
        "Lourdes is a professional hairstylist specializing in personalized hair transformations, helping clients achieve their ideal look through expert color and extension services.",
      list: [
        "Color Correction Specialist",
        "Hair Extension Expert",
        "Custom Hair Transformations",
      ],
      media: true,
      button: {
        label: "bOOK WITH lourdes",
        href: "#",
      },
      bgColor: "bg-accent",
      imageFirst: false,
      linkContent: {
        text: "@escabrisabeautystudio →",
        href: "#",
      },
    },
    {
      location: "ocoee",
      image: "mecho",
      tag: "Ocoee Master Stylist",
      name: "Mecho Payano",
      description:
        "Mecho is a seasoned hairstylist and color specialist with over 20 years of experience, delivering expert color services and personalized hair transformations.",
      list: [
        "20+ Years Experience",
        "Color Specialist",
        "Hair Transformation Expert",
      ],
      media: true,
      button: {
        label: "bOOK WITH MECO",
        href: "#",
      },
      bgColor: "bg-accent",
      imageFirst: true,
      linkContent: {
        text: "@mecho_stylist →",
        href: "#",
      },
    },
    {
      location: "ocoee",
      image: "luisa",
      tag: "Customer Experince",
      name: "Luisa Payano",
      description:
        "Luisa is a dedicated salon assistant committed to ensuring a smooth, welcoming, and comfortable experience for every client who visits Enyermy Studio Pro.",
      list: [
        "Client Care Support",
        "Salon Operations Assistant",
        "Guest Experience Focused",
      ],
      media: true,
      button: {
        label: "bOOK WITH LUISA",
        href: "#",
      },
      bgColor: "bg-accent",
      imageFirst: false,
      linkContent: {
        text: "@enyermystudiopro →",
        href: "#",
      },
    },
  ],
};
export default function Stylists() {
  return (
    <main className="flex flex-col justify-center items-center pt-(--header-height) w-full">
      <section className="flex justify-center items-center  pt-12 md:pt-16 pb-8">
        <h1 className="title-h4 text-primary">{content.title}</h1>
      </section>
      <StylistsGroup content={content.items} />
      <CallEmail />
      <CarouselReview />
    </main>
  );
}
