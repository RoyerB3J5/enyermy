import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordeonProductProps {
  content: {
    header: string;
    content: string;
  }[];
}

export default function AccordeonProduct({
  content = [],
}: AccordeonProductProps) {
  // null significa que todos están cerrados por defecto
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // Si se hace clic en el que ya está abierto se cierra, si no, se abre el nuevo y cierra el anterior
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ul className="flex flex-col justify-center items-center w-full">
      {content.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <li
            key={index}
            className="w-full flex flex-col py-8 border-t border-[#D9D9D9]"
          >
            {/* Header del acordeón (clicable) */}
            <div
              className="w-full flex justify-between items-center cursor-pointer text-primary select-none"
              onClick={() => handleToggle(index)}
            >
              <h4 className="paragraph font-medium">{item.header}</h4>
              <div className="text-primary transition-transform duration-300">
                {isOpen ? (
                  <Minus className="w-6 h-6" />
                ) : (
                  <Plus className="w-6 h-6" />
                )}
              </div>
            </div>

            {/* Contenedor animado con CSS Grid */}
            <div
              className={`grid transition-all duration-300 ease-in-out w-full ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                {/* pt-4 actúa como el gap/espaciado cuando se expande el contenido */}
                <div className="pt-4">
                  <p className="paragraph font-normal text-primary/80">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
