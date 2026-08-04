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
        href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/HT6A7Q5H5E2QW/services?buttonTextColor=000000&color=e9c277&locale=en&referrer=so",
      },
      {
        image: "orlando",
        name: "Orlando",
        direction: "4526 Curry Ford Rd Orlando",
        href: "https://app.squareup.com/appointments/buyer/widget/vj0fsnz60g8n1d/L1C7496RDCGTG",
      },
      {
        image: "waterford",
        name: "Waterford Lakes",
        direction: "12789 Waterford Lakes Pkwy Ste 11  Orlando",
        href: "https://app.squareup.com/appointments/book/8thjvgf0dvy73t/L57WNWAWEV0DT/start",
      },
      {
        image: "petersburg",
        name: "St. Petersburg",
        direction: "6901 22nd Ave N Suite 6707, St.Petersburg",
        href: "https://book.squareup.com/appointments/8thjvgf0dvy73t/location/LEJXW75XFC9Z2/services?color=e9c277",
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
