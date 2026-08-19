"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "next/navigation";
import enContent from "@/content/en";
import esContent from "@/content/es";

const contentMap = {
  en: enContent.reviewCarousel,
  es: esContent.reviewCarousel,
};

export default function CarouselReview() {
  const params = useParams();
  const locale = (params.locale as string) || "en";
  const content =
    contentMap[locale as keyof typeof contentMap] || contentMap.en;
  const N = content.reviews.length;
  const expandedReviews = [
    ...content.reviews,
    ...content.reviews,
    ...content.reviews,
  ];

  const [currentIndex, setCurrentIndex] = useState(N);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dimensions, setDimensions] = useState({ itemWidth: 0, gap: 0 });

  const dragStart = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);
  const isResetting = useRef(false);

  // Measure actual dimensions of items and gaps from the DOM
  const measureDimensions = useCallback(() => {
    if (!containerRef.current) return;
    const track = containerRef.current.firstElementChild as HTMLElement;
    if (!track) return;
    const items = track.children;
    if (items.length < 2) return;

    const firstItem = items[0] as HTMLElement;
    const secondItem = items[1] as HTMLElement;

    const rect1 = firstItem.getBoundingClientRect();
    const rect2 = secondItem.getBoundingClientRect();

    setDimensions({
      itemWidth: rect1.width,
      gap: rect2.left - rect1.right,
    });
  }, []);

  // Resize handler to re-measure item dimensions
  useEffect(() => {
    const handleResize = () => {
      // Temporarily disable transition during resize to avoid jarring adjustments
      setIsTransitioning(false);
      measureDimensions();
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [measureDimensions]);

  // Effect to handle state recovery after an instant jump (reset)
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
    }, 4000); // Shifting every 4 seconds
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

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only left click
    stopAutoplay();
    setIsTransitioning(false);
    dragStart.current = e.clientX;
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.current;
    setDragOffset(deltaX);
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50; // drag threshold in pixels to trigger slide shift
    setIsTransitioning(true);

    if (dragOffset < -threshold) {
      setCurrentIndex((prev) => prev + 1);
    } else if (dragOffset > threshold) {
      setCurrentIndex((prev) => prev - 1);
    }

    setDragOffset(0);
    startAutoplay();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    stopAutoplay();
    setIsTransitioning(false);
    if (e.touches.length > 0) {
      dragStart.current = e.touches[0].clientX;
    }
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length === 0) return;
    const deltaX = e.touches[0].clientX - dragStart.current;
    setDragOffset(deltaX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;
    setIsTransitioning(true);

    if (dragOffset < -threshold) {
      setCurrentIndex((prev) => prev + 1);
    } else if (dragOffset > threshold) {
      setCurrentIndex((prev) => prev - 1);
    }

    setDragOffset(0);
    startAutoplay();
  };

  // Calculate dynamic dimensions
  const stepWidth = dimensions.itemWidth + dimensions.gap;
  const translateX = -currentIndex * stepWidth + dragOffset;

  const handleDotClick = (i: number) => {
    stopAutoplay();
    setIsTransitioning(true);
    setCurrentIndex(N + i);
    startAutoplay();
  };
  const currentLogicalIndex = (((currentIndex - N) % N) + N) % N;

  return (
    <section className="w-full bg-white py-10 md:py-20">
      <div className="bg-[#F6F6F6] flex justify-center items-center w-full">
        <div className="container-full flex flex-col justify-center items-center py-14 lg:py-20 gap-4">
          <div className="flex flex-col justify-center items-center gap-4 block">
            <div className="flex justify-center items-center gap-2 fade-up">
              <div className="flex justify-center items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src="/images/star-2.svg"
                    alt="star"
                    width={14}
                    height={14}
                  />
                ))}
              </div>
              <p className="paragraph-x-small">{content.rated}</p>
            </div>
            <h2 className="text-[15px] md:text-[28px] font-normal leading-[120%] tracking-[-0.5px] text-center fade-up">
              {content.title}
            </h2>
          </div>

          <div
            ref={containerRef}
            className="w-full overflow-hidden cursor-grab active:cursor-grabbing select-none px-1 h-auto fade-up"
            style={{ touchAction: "pan-y" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onDragStart={(e) => e.preventDefault()}
          >
            <div
              className="flex items-stretch gap-6"
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                transition: isTransitioning
                  ? "transform 300ms ease-out"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {expandedReviews.map((review, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 flex flex-col justify-start items-center gap-4 p-0 md:p-6 text-primary"
                >
                  <h3 className="title-h4">{review.title}</h3>
                  <p className="text-[15px] md:text-[28px] leading-[150%] font-normal text-center max-w-[894px]">
                    {review.description}
                  </p>
                  <div className="flex flex-col justify-center items-start">
                    <div className="flex justify-start items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Image
                          key={starIndex}
                          src="/images/star-3.svg"
                          alt="star"
                          width={14}
                          height={14}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[15px] font-normal leading-[150%]">
                    {review.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className=" pointer-events-auto flex items-center justify-center gap-4   ">
            {content.reviews.map((_, i) => (
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
    </section>
  );
}
