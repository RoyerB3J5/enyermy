"use client";
//informacion de square productos recomendados
import { LightProduct } from "@/types/square";
import Link from "next/link";
import CarouselProducts from "../CarouselProducst";
import ButtonLink from "@/components/ui/ButtonLink";
import ProductCard from "@/components/shop/ProductCard";
import { useCallback, useEffect, useRef, useState } from "react";

interface RecomendationsProps {
  content: {
    title: string;
    products: LightProduct[];
    button: { text: string; href: string };
  };
}
export default function Recomendations({ content }: RecomendationsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const [thumbWidth, setThumbWidth] = useState(0);
  const [thumbLeft, setThumbLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Guardamos valores iniciales del drag sin causar re-render
  const dragStart = useRef({
    pointerX: 0,
    scrollLeft: 0,
  });

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame = 0;

    const updateScrollbar = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const width = (clientWidth / scrollWidth) * 100;
      const left =
        scrollWidth > clientWidth
          ? (scrollLeft / (scrollWidth - clientWidth)) * (100 - width)
          : 0;

      setThumbWidth(width);
      setThumbLeft(left);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateScrollbar);
    };

    updateScrollbar();
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScrollbar);

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScrollbar);
    };
  }, []);

  // --- Drag del thumb basado en delta (no en posición absoluta) ---
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    e.preventDefault();
    e.stopPropagation();

    // Solo guardamos el punto de partida. NO movemos nada aquí.
    dragStart.current = {
      pointerX: e.clientX,
      scrollLeft: scrollRef.current.scrollLeft,
    };

    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging || !scrollRef.current || !trackRef.current) return;

      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;

      const trackWidth = trackRef.current.clientWidth;
      const thumbWidthPx = (thumbWidth / 100) * trackWidth;
      const trackAvailable = trackWidth - thumbWidthPx; // espacio recorrible por el thumb

      if (trackAvailable <= 0) return;

      // Cuánto se ha movido el mouse desde el pointerdown
      const deltaX = e.clientX - dragStart.current.pointerX;

      // Convertimos ese delta de píxeles de la barra a píxeles de scroll real
      const scrollDelta = (deltaX / trackAvailable) * maxScroll;

      let newScrollLeft = dragStart.current.scrollLeft + scrollDelta;
      newScrollLeft = Math.min(maxScroll, Math.max(0, newScrollLeft));

      scrollRef.current.scrollLeft = newScrollLeft;
    },
    [isDragging, thumbWidth],
  );

  const stopDragging = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };
  return (
    <section className="container-full flex flex-col justify-center items-center gap-4 md:gap-6 py-12 md:py-14">
      <h2 className="title-h4 text-primary">{content.title}</h2>
      <div className="w-full flex flex-col gap-4 md:gap-6">
        <div className="w-full overflow-hidden select-none ">
          <div
            ref={scrollRef}
            className="flex justify-start items-stretch gap-6 overflow-x-auto hide-scrollbar py-3"
          >
            {content.products.map((product, index) => (
              <div
                key={index}
                className="w-full min-[621px]:w-[calc((100%-24px)/2)] min-[1025px]:w-[calc((100%-72px)/4)] shrink-0"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Scrollbar personalizado */}
        <div
          ref={trackRef}
          className="relative h-[4px] w-full bg-black/10 rounded-full select-none"
          style={{ touchAction: "none" }}
        >
          <div
            ref={thumbRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
            className="absolute h-[4px] bg-black rounded-full cursor-grab active:cursor-grabbing touch-none"
            style={{
              width: `${thumbWidth}%`,
              left: `${thumbLeft}%`,
              transition: isDragging ? "none" : "left 50ms linear",
            }}
          />
        </div>
      </div>

      {/*<CarouselProducts content={content.products} /> */}

      <ButtonLink content={content.button} />
    </section>
  );
}
