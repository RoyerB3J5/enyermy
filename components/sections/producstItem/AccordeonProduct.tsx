import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordeonProductProps {
  content: {
    header: string;
    content: string;
  }[];
  comoUsar: string;
  ingredientsArray?: string[];
}

export default function AccordeonProduct({
  content = [],
  comoUsar,
  ingredientsArray = [],
}: AccordeonProductProps) {
  // null significa que todos están cerrados por defecto
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // Si se hace clic en el que ya está abierto se cierra, si no, se abre el nuevo
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ul className="flex flex-col justify-center items-center w-full fade-left">
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
                <div className="pt-4">
                  {/* Validación para index 1 con contenido vacío */}
                  {index === 1 && item.content === "" ? (
                    <ul className="list-disc list-inside space-y-1 text-primary/80 paragraph font-normal">
                      {ingredientsArray.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      className="paragraph font-normal text-primary/80"
                      dangerouslySetInnerHTML={{
                        __html:
                          index === 0 && item.content === ""
                            ? comoUsar
                            : item.content,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
