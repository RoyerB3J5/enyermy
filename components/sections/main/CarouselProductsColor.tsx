"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

interface CarouselProductsColorProps {
  atributo: string;
  items: {
    color: string;
    slogan: string;
    image: string;
  }[];
  contentProducts: {
    image: string;
    tag: string;
    title: string;
    price: string;
  }[];
}

export default function CarouselProductsColor({
  atributo,
  items,
  contentProducts,
}: CarouselProductsColorProps) {
  const N = contentProducts.length;
  if (N === 0) return null;

  // Triplicating the arrays to achieve a seamless infinite loop
  const expandedProducts = [
    ...contentProducts,
    ...contentProducts,
    ...contentProducts,
  ];
  const expandedItems = [...items, ...items, ...items];

  const [currentIndex, setCurrentIndex] = useState(N);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [dimensions, setDimensions] = useState({ itemWidth: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);
  const isResetting = useRef(false);

  // Measure actual width of the viewport container
  const measureDimensions = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setDimensions({
      itemWidth: rect.width,
    });
  }, []);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      setIsTransitioning(false);
      measureDimensions();
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [measureDimensions]);

  // Handle state recovery after an instant jump (reset)
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
        isResetting.current = false;
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [currentIndex, isTransitioning]);

  // Autoplay functionality
  const stopAutoplay = useCallback(() => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
      autoplayTimer.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayTimer.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 8000); // Shift every 8 seconds
  }, [stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  // Handle transition ends to perform seamless infinite loop jumps
  const handleTransitionEnd = () => {
    if (isResetting.current) return;

    if (currentIndex >= 2 * N || currentIndex < N) {
      isResetting.current = true;
      setIsTransitioning(false);
      const equivalentIndex = N + (((currentIndex % N) + N) % N);
      setCurrentIndex(equivalentIndex);
    }
  };

  // Click Handlers
  const handlePrev = () => {
    stopAutoplay();
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    startAutoplay();
  };

  const handleNext = () => {
    stopAutoplay();
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    startAutoplay();
  };

  const handleDotClick = (i: number) => {
    stopAutoplay();
    setIsTransitioning(true);
    setCurrentIndex(N + i);
    startAutoplay();
  };
  const translateX = -currentIndex * dimensions.itemWidth;
  const currentLogicalIndex = (((currentIndex - N) % N) + N) % N;

  return (
    <div className="w-full relative overflow-hidden flex justify-center items-center flex-col">
      <div
        ref={containerRef}
        className="w-full overflow-hidden select-none relative"
        style={{ touchAction: "pan-y" }}
        onDragStart={(e) => e.preventDefault()}
      >
        <div
          className="flex items-stretch"
          style={{
            transform: `translate3d(${translateX}px, 0, 0)`,
            transition: isTransitioning ? "transform 300ms ease-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {expandedProducts.map((product, index) => (
            <div
              className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full shrink-0"
              key={index}
            >
              <div
                className={`w-full h-auto aspect-auto md:aspect-720/651 ${expandedItems[index]?.color} flex flex-col items-center justify-center gap-4 order-2 md:order-1 pt-6 pb-14 md:py-0`}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={420}
                  height={420}
                  className="w-[70%] md:w-[50%] h-auto aspect-square object-cover"
                />
                <div className="flex flex-col items-center justify-center w-full">
                  <p className="paragraph-x-small text-primary-light">
                    {product.tag}
                  </p>
                  <h3 className="paragraph text-primary font-normal text-center">
                    {product.title}
                  </h3>
                  <p className="paragraph text-primary font-medium text-center">
                    {atributo} ${product.price}
                  </p>
                </div>
              </div>
              <div className="w-full h-auto aspect-720/651 relative flex items-center justify-center overflow-hidden order-1 md:order-2">
                <Image
                  src={`/images/main/${expandedItems[index]?.image}.webp`}
                  alt={expandedItems[index]?.slogan}
                  width={720}
                  height={651}
                  className="object-cover w-full h-full object-center absolute inset-0 z-0"
                />
                <div className="w-full h-full flex justify-center items-center md:items-end pb-10 px-4 z-10">
                  <p className="slogan-text text-center">
                    {expandedItems[index]?.slogan}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls Overlay */}
      <div className="absolute bottom-0 md:top-0 left-0 w-full md:w-1/2 h-1/2 md:h-full pointer-events-none z-20">
        {/* Navigation Arrows */}
        <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 md:flex justify-between hidden ">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-primary flex items-center justify-center transition-all duration-300 hover:scale-105 pointer-events-auto cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-primary flex items-center justify-center transition-all duration-300 hover:scale-105 pointer-events-auto cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Slide Indicator Dots - 16px below the bottom of the p, h3, p div */}
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 invisible">
          <div className="w-[50%] aspect-square" />
          <div className="flex flex-col items-center justify-center w-full relative">
            <p className="paragraph-x-small">
              {contentProducts[currentLogicalIndex]?.tag}
            </p>
            <h3 className="paragraph text-center">
              {contentProducts[currentLogicalIndex]?.title}
            </h3>
            <p className="paragraph text-center">
              {atributo} ${contentProducts[currentLogicalIndex]?.price}
            </p>

            {/* Dots */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 visible pointer-events-auto flex items-center justify-center gap-2 mt-6 md:mt-4">
              {contentProducts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentLogicalIndex
                      ? "bg-[#2D2D2D] scale-110"
                      : "bg-[#2D2D2D]/20 hover:bg-[#2D2D2D]/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
