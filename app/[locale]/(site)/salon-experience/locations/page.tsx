import Locations from "@/components/sections/about/Locations";
import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import Hero from "@/components/sections/products/Hero";

const content = {
  hero: {
    image: "hero-locations",
    tag: "Professional Care. Personalized Results.",
    title: "Crafted For Your Beauty",
    description:
      "Discover bespoke salon services designed to transform, restore, and elevate \n your hair with confidence.",
  },
  location: {
    title: "Our Locations",
    items: [
      {
        image: "ocoee",
        name: "Ocoee",
        direction: "1099 S Clarke Rd  Ocoee",
        href: "#",
      },
      {
        image: "orlando",
        name: "Orlando",
        direction: "4526 Curry Ford Rd Orlando",
        href: "#",
      },
      {
        image: "waterford",
        name: "Waterford Lakes",
        direction: "12789 Waterford Lakes Pkwy Ste 11  Orlando",
        href: "#",
      },
      {
        image: "petersburg",
        name: "St. Petersburg",
        direction: "6901 22nd Ave N Suite 6707, St.Petersburg",
        href: "#",
      },
    ],
    mainPage: true,
  },
};
export default function LocationsPage() {
  return (
    <main className="w-full flex flex-col justify-center items-center pt-(--header-height)">
      <Hero content={content.hero} salon={true} />
      <Locations content={content.location} differentDisplay={true} />
      <CallEmail />
      <CarouselReview />
    </main>
  );
}
