"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import enContent from "@/content/en";
import esContent from "@/content/es";

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

      {/* Formulario cápsula */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md md:max-w-lg flex items-center bg-white rounded-full border border-[#D6D6D6] fade-up "
      >
        <input
          type="email"
          required
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent py-3 px-4 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-[#121212] text-white text-[14px] font-medium tracking-[3px] uppercase p-3 rounded-r-full hover:bg-black transition-colors shrink-0 h-full cursor-pointer"
        >
          {"SUBSCRIBE"}
        </button>
      </form>
    </section>
  );
}
