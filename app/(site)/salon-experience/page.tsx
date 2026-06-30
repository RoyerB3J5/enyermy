import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import Bundles from "@/components/sections/main/Bundles";
import Hero from "@/components/sections/main/Hero";
const content = {
  hero: {
    tag: "Personalized services. Stunning results.",
    title: "Your Hair. Our Passion.",
    description: "Color Correction And Hair Extention",
    button: {
      text: "BOOK APPOINTMENT",
      link: "#",
    },
    image: "salon-experience/hero-main",
  },
  tranformation: {
    tag: "luxury. transformation.",
    title: "More Than a Service, <br/> It's an Experience.",
    descriptions: [],
    button: {
      text: "BOOK APPOINTMENT",
      link: "#",
    },
    image: "salon-experience/transformation-main",
  },
  luxury: {
    tag: "Expert services tailored to your hair goals.",
    title: "Luxury Hair Care",
    descriptions: [
      "Where expert craftsmanship meets personalized <br/> care for exceptional hair results.",
    ],
    button: {
      text: "BOOK APPOINTMENT",
      link: "#",
    },
    image: "salon-experience/luxury-main",
  },
};
export default function SalonExperience() {
  return (
    <main className="w-full flex flex-col justify-center items-center ">
      <Hero content={content.hero} />
      <Bundles content={content.tranformation} textWhite={true} />
      <CallEmail />
      <Bundles content={content.luxury} />
      <CarouselReview />
    </main>
  );
}
