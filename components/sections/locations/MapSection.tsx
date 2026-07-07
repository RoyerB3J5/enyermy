"use client";
import Button from "@/components/ui/Button";
import { Minus, Plus } from "lucide-react";
import { useRef, useState } from "react";

interface MapSectionProps {
  content: {
    tag: string;
    title: string;
    button: string;
  };
}
const locations = [
  {
    id: 1,
    name: "Clarke",
    title: "Enyermy at Ocoee",
    description: "1099 S Clarke Rd · Ocoee",
    href: "#",
    image: "ocoee",
    pin: {
      x: 730,
      y: 155,
    },
    camera: {
      zoom: 1.15,
    },
  },
  {
    id: 2,
    name: "Curry Ford",
    title: "Enyermy at Orlando",
    description: "4526 Curry Ford Rd · Orlando",
    href: "#",
    image: "orlando",
    pin: {
      x: 840,
      y: 175,
    },
    camera: {
      zoom: 1.15,
    },
  },
  {
    id: 3,
    name: "Waterford Lakes",
    title: "Enyermy at Waterford Lakes",
    description: "12789 Waterford Lakes Pkwy Ste 11 · Orlando",
    href: "#",
    image: "waterford-2",
    pin: {
      x: 900,
      y: 155,
    },
    camera: {
      zoom: 1.15,
    },
  },
  {
    id: 4,
    name: "St.Petersburg",
    title: "Enyermy at St. Petersburg",
    description: "6901 22nd Ave N Suite 6707 St. Petersburg",
    href: "#",
    image: "petersburg-2",
    pin: {
      x: 210,
      y: 520,
    },
    camera: {
      zoom: 1.15,
    },
  },
];
const MAP_WIDTH = 1376;
const MAP_HEIGHT = 630;
export default function MapSection({ content }: MapSectionProps) {
  const [currentLocation, setCurrentLocation] = useState(0);
  const DEFAULT_CAMERA = {
    x: 0,
    y: 0,
    zoom: 0.8,
  };
  const dragging = useRef(false);
  const lastMouse = useRef({
    x: 0,
    y: 0,
  });
  const [camera, setCamera] = useState(DEFAULT_CAMERA);
  const MIN_ZOOM = 0.3;
  const MAX_ZOOM = 3;
  const ZOOM_STEP = 0.1;

  const zoomIn = () => {
    setCamera((prev) => ({
      ...prev,
      zoom: Math.min(prev.zoom + ZOOM_STEP, MAX_ZOOM),
    }));
  };

  const zoomOut = () => {
    setCamera((prev) => ({
      ...prev,
      zoom: Math.max(prev.zoom - ZOOM_STEP, MIN_ZOOM),
    }));
  };

  const handleLocationChange = (index: number) => {
    if (index === currentLocation) return;

    const location = locations[index];

    setCurrentLocation(index);

    setCamera({
      x: MAP_WIDTH / 2 - location.pin.x,
      y: MAP_HEIGHT / 2 - location.pin.y,
      zoom: location.camera.zoom,
    });
  };
  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;

    lastMouse.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;

    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;

    lastMouse.current = {
      x: e.clientX,
      y: e.clientY,
    };

    setCamera((prev) => ({
      ...prev,
      x: prev.x + dx,
      y: prev.y + dy,
    }));
  };
  const handleMouseUp = () => {
    dragging.current = false;
  };
  const handleMouseLeave = () => {
    dragging.current = false;
  };
  return (
    <section className="container-full flex flex-col justify-center items-center gap-6 py-14">
      <div className="flex flex-col justify-center items-center gap-4 text-primary">
        <p className="paragraph-x-small uppercase">{content.tag}</p>
        <h2 className="title-h2">{content.title}</h2>
      </div>
      <div
        className="w-full h-auto aspect-1376/630 relative flex justify-center items-end overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute
          top-1/2
          left-1/2
          transition-transform
          duration-700
          ease-[cubic-bezier(.22,1,.36,1)]"
          style={{
            width: `${MAP_WIDTH}px`,
            height: `${MAP_HEIGHT}px`,
            transform: `
            translate(-50%, -50%)
            translate(${camera.x}px, ${camera.y}px)
            scale(${camera.zoom})
            `,
            transformOrigin: "center",
          }}
        >
          {/* Imagen */}
          <img
            src="/images/locations/map.webp"
            alt="Map"
            draggable={false}
            className="absolute inset-0 w-full h-full select-none pointer-events-none"
          />

          {locations.map((location, index) => (
            <button
              key={location.id}
              onClick={() => handleLocationChange(index)}
              className={`
                absolute
                -translate-x-1/2
                -translate-y-1/2
                w-5
                h-5
                transition-colors
                duration-300 cursor-pointer
                ${currentLocation === index ? "bg-primary" : "bg-[#8D8D8D]"}
              `}
              style={{
                left: `${location.pin.x}px`,
                top: `${location.pin.y}px`,
              }}
            />
          ))}
        </div>
        <div className="w-full h-auto flex justify-between items-end p-8 z-10">
          <div className="flex justify-center items-center gap-4">
            <button
              className="w-10 h-10 bg-primary flex justify-center items-center cursor-pointer"
              onClick={zoomOut}
            >
              <Minus className="w-5 h-5 text-[#B8B8B8]" />
            </button>
            <button
              className="w-10 h-10 bg-primary flex justify-center items-center cursor-pointer"
              onClick={zoomIn}
            >
              <Plus className="w-5 h-5 text-[#B8B8B8]" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-2.5">
            <div className="relative w-[548px] h-[145px]">
              {locations.map((location, index) => (
                <div
                  key={location.id}
                  className="
                    absolute
                    inset-0
                    overflow-hidden
                    transition-[clip-path]
                    duration-500
                    ease-[cubic-bezier(.76,0,.24,1)]
                  "
                  style={{
                    clipPath:
                      currentLocation === index
                        ? "inset(0 0 0 0)"
                        : "inset(100% 0 0 0)",

                    transitionDelay:
                      currentLocation === index ? "200ms" : "0ms",
                  }}
                >
                  <div className="flex justify-start items-center gap-4 bg-white border border-[#E6E6E6] w-full h-full px-3.25 py-3.5">
                    <div className="relative w-[198px] h-[116px] overflow-hidden">
                      <img
                        src={`/images/about/${location.image}.webp`}
                        alt={location.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-between items-start self-stretch">
                      <div>
                        <h3 className="font-title text-[14px] leading-[120%] tracking-[-0.5px]">
                          {location.title}
                        </h3>

                        <p className="text-[14px] leading-[130%] tracking-[-0.5px]">
                          {location.description}
                        </p>
                      </div>

                      <Button
                        label={content.button}
                        styleButton="black"
                        href={location.href}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center px-6 py-2.25 border border-[#E6E6E6] bg-white w-[548px]">
              {locations.map((location) => (
                <button
                  key={location.id}
                  className="flex justify-center items-center gap-1.5 cursor-pointer group"
                  onClick={() => handleLocationChange(location.id - 1)}
                >
                  {currentLocation === location.id - 1 && (
                    <div className="w-1.5 h-1.5 bg-primary "></div>
                  )}{" "}
                  <div
                    className={`w-1.5 h-1.5 bg-primary group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out${currentLocation === location.id - 1 ? " hidden" : "block"}`}
                  ></div>
                  <p className="text-[14px] font-normal leading-[130%] tracking-[-0.5px] text-primary ">
                    {location.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
