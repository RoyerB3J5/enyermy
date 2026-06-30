"use client";
import { LightProduct } from "@/types/square";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import ProductCard from "../shop/ProductCard";

interface CarouselProductsProps {
  content: LightProduct[];
}

export default function CarouselProducts({ content }: CarouselProductsProps) {
  const N = content.length;
  const expandedProducts = [...content, ...content, ...content];

  const [currentIndex, setCurrentIndex] = useState(N);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dimensions, setDimensions] = useState({ itemWidth: 0, gap: 0 });
  const [visibleItems, setVisibleItems] = useState(4);

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

  // Resize handler to measure container width and set responsive visibleItems
  useEffect(() => {
    const handleResize = () => {
      // Temporarily disable transition during resize to avoid jarring adjustments
      setIsTransitioning(false);

      const windowWidth = window.innerWidth;
      if (windowWidth <= 620) {
        setVisibleItems(1);
      } else if (windowWidth <= 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(4);
      }

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
    }, 8000); // Shifting every 8 seconds
  }, [stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [visibleItems, startAutoplay, stopAutoplay]);

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

  // Calculate progress bar percent (excluding duplicate items)
  const logicalIndex = ((currentIndex - N) % N + N) % N;
  const progressPercent = N > 0 ? ((logicalIndex + 1) / N) * 100 : 0;

  return (
    <div className="w-full flex flex-col gap-6">
      <div
        ref={containerRef}
        className="w-full overflow-x-hidden select-none px-1 pt-3 pb-3"
        style={{ touchAction: "pan-y" }}
        onDragStart={(e) => e.preventDefault()}
      >
        <div
          className="flex items-stretch gap-6"
          style={{
            transform: `translate3d(${translateX}px, 0, 0)`,
            transition: isTransitioning ? "transform 300ms ease-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {expandedProducts.map((product, index) => (
            <div
              className="w-full min-[621px]:w-[calc((100%-24px)/2)] min-[1025px]:w-[calc((100%-72px)/4)] shrink-0"
              key={index + 1}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[3px] bg-[#E7E7E7] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#2D2D2D]"
          style={{
            width: `${progressPercent}%`,
            transition: isTransitioning ? "width 300ms ease-out" : "none",
          }}
        />
      </div>
    </div>
  );
}
