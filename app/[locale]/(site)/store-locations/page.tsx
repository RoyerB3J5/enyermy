import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import MapSection from "@/components/sections/locations/MapSection";

const content = {
  tag: "Expert Care, Exceptional Results.",
  title: "Our Locations",
  button: "Book Now",
};
export default function StoreLocations() {
  return (
    <main className="w-full flex flex-col justify-center items-center pt-(--header-height)">
      <MapSection content={content} />
      <CallEmail />
      <CarouselReview />
    </main>
  );
}
