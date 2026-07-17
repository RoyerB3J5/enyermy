import React, { useState } from "react";
import StylistsItem from "./StylistsItem";

// Extraemos la interfaz para que sea más legible y reutilizable
interface StylistItem {
  location?: string;
  image: string;
  tag: string;
  name: string;
  description: string;
  list: string[];
  media: boolean;
  button: {
    label: string;
    href: string;
  };
  bgColor: string;
  imageFirst: boolean;
  linkContent?: {
    text: string;
    href: string;
  };
}

interface StylistsGroupProps {
  content: StylistItem[];
  contentFixed?: StylistItem[]; // Añadimos contentFixed como prop opcional
}

const locations = [
  {
    id: "ocoee",
    name: "Ocoee",
  },
  {
    id: "orlando",
    name: "Orlando",
  },
  {
    id: "waterford",
    name: "Waterford Lakes",
  },
  {
    id: "petersburg",
    name: "St. Petersburg",
  },
];

export default function StylistsGroup({
  content,
  contentFixed = [],
}: StylistsGroupProps) {
  const [currentLocation, setCurrentLocation] = useState("ocoee");

  // 1. Filtramos los estilistas que dependen de la ubicación
  const localStylists = content.filter(
    (item) => !item.location || item.location === currentLocation,
  );

  const filteredStylists = [ ...localStylists, ...contentFixed ];

  return (
    <section className="flex flex-col justify-center items-center w-full gap-8 md:gap-12">
      <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 ">
        {locations.map((location) => (
          <button
            key={location.id}
            className={`flex justify-center items-center w-full py-1.25 px-7 border border-[#E6E6E6] rounded-full cursor-pointer ${
              currentLocation === location.id
                ? "bg-primary text-white"
                : "bg-white text-primary"
            }`}
            onClick={() => setCurrentLocation(location.id)}
          >
            <p className="paragraph font-medium whitespace-nowrap">
              {location.name}
            </p>
          </button>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        {filteredStylists.length > 0 ? (
          filteredStylists.map((item, index) => {
            // Al estar unificados, el index mantiene la secuencia perfecta (0, 1, 2, 3...)
            const isParity = index % 2 === 0;
            return (
              <StylistsItem key={index} content={item} isParity={isParity} />
            );
          })
        ) : (
          <p className="paragraph text-primary pb-6">No stylists found.</p>
        )}
      </div>
    </section>
  );
}
