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
      tag: "CEO / MASTER STYLIST / EDUCATOR",
      name: "Enyermy Dominguez",
      description:
        "With over 25 years of experience, she is the Founder and CEO of ENYERMY Studio Pro. Known for advanced hair transformations and strategic expertise, she combines technical excellence with business leadership, creating personalized solutions while mentoring professionals and leading the growth and vision of the brand.",
      list: [
        "Advanced Color Correction",
        "Complex Hair Transformations",
        "Balayage & Dimensional Color",
        "Advanced Blonding",
        "Hair Extensions",
        "Customized Color Planning",
        "Technical Education",
        "Stylist Mentorship",
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
      image: "mecho",
      tag: "Master Stylist",
      name: "Mecho Payano",
      description:
        "An experienced beauty professional, she combines technical expertise with a personalized approach to create customized hair transformations. Through careful consultations and precision techniques, she delivers beautiful results while prioritizing the health and integrity of every guest's hair.",
      list: [
        "Color Correction",
        "Balayage & Dimensional Color",
        "Blonding Services",
        "Customized Hair Color",
        "Hair Transformations",
        "Haircuts & Styling",
        "Hair Treatments",
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
      image: "leticia",
      tag: "HAIR STYLIST",
      name: "Leticia Garcia",
      description:
        "Known for her personalized approach, she creates beautiful, customized looks tailored to each guest’s style and lifestyle. Through thoughtful consultations and professional expertise, she ensures every guest enjoys a comfortable experience and leaves feeling confident and refreshed.",
      list: [
        "Hair Color",
        "Dimensional Color",
        "Highlights & Blonding",
        "Root Color",
        "Haircuts",
        "Blowouts",
        "Hair Care Treatments",
      ],
      media: true,
      button: {
        label: "book WITH Leticia",
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
      location: "orlando",
      image: "ruth",
      tag: "ORLANDO MANAGER / TRICHOLOGIST",
      name: "Ruth Noboa",
      description:
        "As Manager and Trichologist at our Orlando location, she combines salon leadership with specialized expertise in hair and scalp health. Through personalized consultations, she creates customized care plans that promote healthier hair while helping guests understand and address their individual needs",
      list: [
        "Hair & Scalp Assessments",
        "Trichology Consultations",
        "Scalp Care",
        "Hair Health & Wellness",
        "Customized Treatment Plans",
        "Thinning Hair Support",
        "Preventive Hair Care",
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
      location: "orlando",
      image: "juana",
      tag: "HAIR STYLIST",
      name: "Juana Fernandez",
      description:
        "A dedicated beauty professional, she creates personalized hair services tailored to each guest's style and goals. Through thoughtful consultations and attention to detail, she delivers beautiful, wearable results while providing a comfortable and professional salon experience.",
      list: [
        "Hair Color",
        "Balayage",
        "Highlights",
        "Root Touch-Ups",
        "Haircuts",
        "Blowouts & Styling",
        "Hair Treatments",
      ],
      media: true,
      button: {
        label: "bOOK WITH Juana",
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
      location: "orlando",
      image: "lorena",
      tag: "ORLANDO TEAM LEADER / HAIR EXTENSION SPECIALIST ",
      name: "Lorena Greenwich",
      description:
        "As Team Leader at our Orlando location, she specializes in customized hair extensions that deliver seamless, natural-looking results. Through personalized consultations and technical expertise, she creates tailored extension solutions while supporting the growth and excellence of the salon team.",
      list: [
        "Hair Extension Consultations",
        "Invisible Sew-In Extensions",
        "Machine Weft Extensions",
        "K-Tip Extensions",
        "Custom Color Matching & Blending",
        "Length & Volume Transformations",
        "Extension Maintenance",
      ],
      media: true,
      button: {
        label: "book WITH Lorena",
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
      location: "petersburg",
      image: "odeth",
      tag: "ST. PETERSBURG MANAGER / MASTER STYLIST",
      name: "Odeth Dominguez",
      description:
        "As Manager and Master Stylist at our St. Petersburg location, she combines technical expertise with personalized care to deliver exceptional results. Through detailed consultations, she creates customized hair plans that achieve beautiful transformations while maintaining healthy, strong hair.",
      list: [
        "Color Correction",
        "Balayage & Dimensional Color",
        "Blonding Services",
        "Customized Hair Transformations",
        "Haircuts & Styling",
        "Personalized Hair Consultations",
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
      tag: "WATERFORD LAKES TEAM LEADER / EDUCATOR",
      name: "Lourdes Escabrisas",
      description:
        "As Team Leader and Educator at our Waterford Lakes location, she combines technical expertise with a passion for education and personalized care. Through thoughtful consultations and precision techniques, she creates customized results while helping the salon team grow through continuous learning and professional development.",
      list: [
        "Balayage & Dimensional Color",
        "Blonding Techniques",
        "Customized Hair Color",
        "Hair Transformations",
        "Technical Education",
        "Stylist Training & Mentorship",
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
      location: "waterford",
      image: "analynn",
      tag: "HAIR STYLIST",
      name: "Analynn Ojeda",
      description:
        "A dedicated hair professional, she creates personalized looks that reflect each guest’s style, goals, and lifestyle. With a focus on healthy hair and attention to detail, she delivers beautiful, confidence-boosting results that are both natural and easy to maintain.",
      list: [
        "Hair Color",
        "Balayage & Highlights",
        "Root Touch-Ups",
        "Haircuts",
        "Blowouts & Styling",
        "Hair Treatments",
      ],
      media: true,
      button: {
        label: "bOOK WITH Analynn",
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
      location: "waterford",
      image: "kamilla",
      tag: "HAIR STYLIST",
      name: "Kamilla Colon",
      description:
        "Passionate about personalized hair care, she combines creativity and attention to detail to create beautiful, healthy results. By understanding each guest’s style and goals, she delivers customized looks that inspire confidence and enhance natural beauty.",
      list: [
        "Customized Hair Color",
        "Highlights",
        "Balayage",
        "Toners & Glosses",
        "Haircuts & Styling",
        "Restorative Hair Treatments",
      ],
      media: true,
      button: {
        label: "bOOK WITH Kamilla",
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
      location: "petersburg",
      image: "luisa",
      tag: "Customer Experience",
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
  contentFixed: [
    {
      location: "petersburg",
      image: "carla",
      tag: "GENERAL MANAGER",
      name: "Carla Caldemonte",
      description:
        "As General Manager of ENYERMY Studio Pro, she leads operations with a focus on consistency, team development, and exceptional guest experiences. By supporting salon managers and strengthening daily operations, she helps ensure every location reflects the brand’s high standards and vision.",
      list: [
        "Multi-Location Operations",
        "Team & Manager Support",
        "Leadership Development",
        "Guest Experience",
        "Operational Systems",
        "Team Performance",
        "Business Growth",
      ],
      media: true,
      button: {
        label: "book at enyermy studio pro",
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
      location: "petersburg",
      image: "yinatais",
      tag: "MARKETING DIRECTOR / OCOEE MANAGER",
      name: "Yinatais Cintron",
      description:
        "As Marketing Director and Manager of our Ocoee location, she combines creative strategy with salon leadership to grow the ENYERMY Studio Pro brand. Through impactful marketing, community engagement, and exceptional guest experiences, she helps drive the brand’s growth while supporting daily salon operations.",
      list: [
        "Brand Storytelling",
        "Social Media Strategy",
        "Content & Campaigns",
        "Guest Acquisition",
        "Promotions & Special Events",
        "Community Partnerships",
        "Team Leadership",
        "Guest Experience",
      ],
      media: true,
      button: {
        label: "book at enyermy studio pro",
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
      <StylistsGroup
        content={content.items}
        contentFixed={content.contentFixed}
      />
      <CallEmail />
      <CarouselReview />
    </main>
  );
}
