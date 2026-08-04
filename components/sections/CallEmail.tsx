"use client";
import { useParams } from "next/navigation";
import enContent from "@/content/en";
import esContent from "@/content/es";

const contentMap = { en: enContent.email, es: esContent.email };

export default function CallEmail() {
  const params = useParams();
  const locale = (params.locale as string) || "en";
  const content =
    contentMap[locale as keyof typeof contentMap] || contentMap.en;

  return (
    <section className="w-full flex justify-center items-center flex-col py-15 md:py-30 gap-4 bg-[#F5F3F0] text-primary px-4 md:px-0">
      <h2 className="title-h2 fade-up">{content.title}</h2>
      <p className="paragraph font-normal text-center fade-up">
        {content.description}
      </p>
      <div className="w-full md:w-[40%] h-12 rounded-full bg-black fade-up"></div>
    </section>
  );
}
