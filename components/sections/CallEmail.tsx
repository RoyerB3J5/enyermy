"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import enContent from "@/content/en";
import esContent from "@/content/es";
import FormEmail from "./FormEmail";

const contentMap = { en: enContent.email, es: esContent.email };

export default function CallEmail() {
  const [email, setEmail] = useState("");
  const params = useParams();
  const locale = (params.locale as string) || "en";
  const content =
    contentMap[locale as keyof typeof contentMap] || contentMap.en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar tu lógica de envío (p. ej. enviar a una API o Resend)
    console.log("Email enviado:", email);
  };

  return (
    <section className="w-full flex justify-center items-center flex-col py-15 md:py-30 gap-4 bg-[#F5F3F0] text-primary px-4 md:px-0">
      <h2 className="title-h2 fade-up">{content.title}</h2>
      <p className="paragraph font-normal text-center fade-up">
        {content.description}
      </p>
      <FormEmail />
    </section>
  );
}
