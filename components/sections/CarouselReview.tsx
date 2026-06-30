"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const content = {
  rated: "Rated 5 stars by ou customers",
  title: "Real Results, Real Reviews",
  reviews: [
    {
      title: "Love it!",
      description:
        "I received a sample at a women's conference.. and it totally changed me! My hair is so much more managable, I had to purchase it!",
      name: "Liz P.",
      color: "bg-[#E33E7A]",
    },
    {
      title: "Very good",
      description:
        "The best product ever I’ve used. It is amazing to detangle. The first time that my hair looked so gorgeous! SO in love!!!",
      name: "Perla P.",
      color: "bg-[#FBBC05]",
    },
    {
      title: "Great",
      description:
        "Excellent There’s is nothing better than this for my hair 🙌",
      name: "Lourdes G.",
      color: "bg-[#2F89D4]",
    },
    {
      title: "Great",
      description:
        "Tried it today for the first time for my bleached and damaged hair. Felt so soft and smooth afterwards. Definitely a fan!",
      name: "Mahvesh O.",
      color: "bg-[#435260]",
    },
  ],
};

export default function CarouselReview() {
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
  const [visibleItems, setVisibleItems] = useState(3);

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
        setVisibleItems(3);
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
    }, 4000); // Shifting every 4 seconds
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

  return (
    <section className="container-full flex flex-col justify-center items-center py-30 gap-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center gap-2">
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
        <h2 className="title-h4">{content.title}</h2>
      </div>

      <div
        ref={containerRef}
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing select-none px-1"
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
            transition: isTransitioning ? "transform 300ms ease-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {expandedReviews.map((review, index) => (
            <div
              key={index}
              className="w-full min-[621px]:w-[calc((100%-24px)/2)] min-[1025px]:w-[calc((100%-48px)/3)] shrink-0 flex flex-col justify-start items-start gap-4 p-6 border rounded-3xl border-[#E6E6E6] text-paragraph"
            >
              <h3 className="title-h5">{review.title}</h3>
              <p className="paragraph font-normal grow w-full">
                {review.description}
              </p>
              <div className="flex justify-start items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex justify-center items-center ${review.color}`}
                >
                  <p className="paragraph font-bold text-white">
                    {review.name[0]}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <div className="flex justify-start items-center gap-2">
                    <p className="paragraph-x-small text-primary">
                      {review.name}
                    </p>
                    <div className="flex justify-center items-center gap-0.5">
                      <Image
                        src="/images/shield.svg"
                        alt="shield"
                        width={16}
                        height={16}
                      />
                      <p className="paragraph-small text-primary-light">
                        Verified Customer
                      </p>
                    </div>
                  </div>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
