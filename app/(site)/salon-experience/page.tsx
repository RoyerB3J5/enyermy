import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import Locations from "@/components/sections/about/Locations";
import Bundles from "@/components/sections/main/Bundles";
import Hero from "@/components/sections/main/Hero";
import StylistsItem from "@/components/sections/StylistsItem";
const content = {
  hero: {
    tag: "color correction and hair extention",
    title: "Beauty Rooted <br/> in Purpose",
    description: "Experts. Artistry. Experience.",
    button: {
      text: "BOOK APPOINTMENT",
      link: "#",
    },
    image: "salon-experience/hero-main",
  },
  location: {
    title: "Our Locations",
    items: [
      {
        image: "ocoee",
        name: "Ocoee",
        direction: "1099 S Clarke Rd <br/> Ocoee",
        href: "#",
      },
      {
        image: "orlando",
        name: "Orlando",
        direction: "4526 Curry Ford Rd <br/>Orlando",
        href: "#",
      },
      {
        image: "waterford",
        name: "Waterford Lakes",
        direction: "12789 Waterford Lakes Pkwy Ste 11 <br/> Orlando",
        href: "#",
      },
      {
        image: "petersburg",
        name: "St. Petersburg (Coming Soon)",
        direction: "6901 22nd Ave N Suite 6707 <br/> St.Petersburg",
        href: "#",
      },
    ],
    mainPage: true,
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
  professional: {
    title: "For Professionals",
    info: {
      image: "odeth",
      tag: "Personalized Consultation",
      name: "Let's Create Your Signature Look",
      description:
        "Receive expert recommendations and a customized service plan designed to achieve your ideal hair transformation.",
      list: [],
      media: false,
      button: {
        label: "Book now",
        href: "#",
      },
      bgColor: "bg-azul",
      imageFirst: false,
    },
  },
};
export default function SalonExperience() {
  return (
    <main className="w-full flex flex-col justify-center items-center ">
      <Hero content={content.hero} />
      <Locations content={content.location} />
      <Bundles content={content.tranformation} textWhite={true} />
      <CallEmail />
      <Bundles content={content.luxury} />
      <section className="flex flex-col justify-center items-center pt-16 gap-8 w-full">
        <h2 className="title-h4 text-primary">{content.professional.title}</h2>
        <StylistsItem
          content={content.professional.info}
          changeAspectRatio={true}
        />
      </section>
      <CarouselReview />
    </main>
  );
}
