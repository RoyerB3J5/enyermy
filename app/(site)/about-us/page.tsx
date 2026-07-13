import Hero from "@/components/sections/about/Hero";
import Locations from "@/components/sections/about/Locations";
import Mission from "@/components/sections/about/Mission";
import Numbers from "@/components/sections/about/Numbers";
import Philosophy from "@/components/sections/about/Philosophy";
import CarouselReview from "@/components/sections/CarouselReview";
import StylistsItem from "@/components/sections/StylistsItem";
const content = {
  hero: {
    tag:"Professional Care. Visible Results.",
    description2:'As for this temple you are building, if you follow my decrees, observe my laws and keep all my commands and obey them, I will fulfill through you the promise I give to David your father.',
    title: "Beauty Rooted in Purpose",
    description:
      "As for this temple you are building, if you follow my decrees, observe my laws and keep all my commands and obey them, I will fulfill through you the promise I give to David your father.",
    bible: "1 Kings 6:12",
    button: {
      text: "BOOK APPOINTMENT",
      link: "#",
    },
  },
  philosophy: {
    tag: "OUR PHILOSOPHY",
    title: "Beauty with Purpose",
    description:
      "We are passionate about education, innovation, and delivering exceptional results. Every service we offer is backed by expertise, premium products, and a genuine commitment to our clients.",
    items: [
      {
        icon: "Star",
        title: "Expertise",
        description:
          "Years of experience in color correction, extensions, and hair restoration.",
      },
      {
        icon: "Heart",
        title: "Personalized Care",
        description:
          "Every client is unique. We create custom plans tailored to your hair goals.",
      },
      {
        icon: "leaf",
        title: "Premium Quality",
        description:
          "We use only the highest quality products and advanced techniques for lasting results.",
      },
      {
        icon: "Gem",
        title: "Empowerment",
        description:
          "We believe confident hair transforms more than your look—it transforms you.",
      },
    ],
  },
  mision: {
    tag: "OUR MISSION",
    title: "Beauty Rooted <br/> In Purpose",
    description:
      "At Enyermy Studio Pro, we believe beauty is more than what you see in the mirror. Our mission is not only to transform your hair but to inspire confidence, empower your spirit, and help you become the best version of yourself. Every service we provide is designed with excellence, care, and purpose-because true beauty begins from within.",
  },
  number: {
    title: "By the Numbers",
    items: [
      {
        number: "10K+",
        label: "Happy Clients",
        icon: "Users",
      },
      {
        number: "15+",
        label: "Years of <br/> Experience",
        icon: "Trophy",
      },
      {
        number: "3+",
        label: "Locations (With <br/> More Coming)",
        icon: "MapPin",
      },
      {
        number: "100%",
        label: "Commitment to <br/> Excellence",
        icon: "Star",
      },
    ],
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
    mainPage: false,
  },
  transformation: {
    image: "transformation",
    tag: "tailored consultations",
    name: "Your Transformation <br/> Begins Here",
    description:
      "Every woman has a unique story, and our personalized consultation is the beginning of a transformational journey. It allows us to understand your vision, lifestyle, and beauty goals to create an extraordinary experience designed exclusively for you.",
    list: [],
    media: false,
    button: {
      label: "BOOK APPOINTMENT",
      href: "#",
    },
    bgColor: "bg-morado",
    imageFirst: false,
  },
};
export default function AboutUs() {
  return (
    <main className="w-full flex flex-col justify-center items-center pt-[var(--header-height)]">
      <Hero content={content.hero} />
      <Philosophy content={content.philosophy} />
      <Mission content={content.mision} />
      <Numbers content={content.number} />
      <Locations content={content.location} />
      <StylistsItem content={content.transformation} changeAspectRatio={true} />
      <CarouselReview />
    </main>
  );
}
