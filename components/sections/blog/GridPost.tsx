"use client";

import { useState, useRef } from "react";
import Button from "@/components/ui/Button";

interface GridPostProps {
  categories: {
    id: string;
    label: string;
  }[];
  posts: {
    image: string;
    categories: {
      id: string;
      label: string;
    }[];
    date: string;
    autor: string;
    title: string;
    description: string;
    buttonHref: string;
  }[];
}

export default function GridPost({ categories, posts }: GridPostProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]?.id || "all",
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(x - startX) > 5) {
      setIsDragging(true);
    }
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleCategoryClick = (categoryId: string) => {
    if (isDragging) return;
    setSelectedCategory(categoryId);
  };

  const isAll =
    selectedCategory === "all" ||
    (categories[0] && selectedCategory === categories[0].id);

  const filteredPosts = isAll
    ? posts
    : posts.filter((post) =>
        post.categories?.some((cat) => cat.id === selectedCategory),
      );

  return (
    <section className="container-full flex flex-col justify-center items-center pt-6 pb-14 gap-14">
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="w-full flex justify-start lg:justify-between items-center gap-3 overflow-x-auto hide-scrollbar select-none cursor-grab active:cursor-grabbing py-1 fade-up"
      >
        {categories.map((category, index) => {
          const isActive = selectedCategory === category.id;
          return (
            <button
              type="button"
              key={`${category.id}-${index}`}
              onClick={() => handleCategoryClick(category.id)}
              className={`px-7 py-1 rounded-full border text-[14px] font-medium leading-[150%] transition-colors duration-300 ease-in-out cursor-pointer shrink-0 whitespace-nowrap ${
                isActive
                  ? "bg-primary text-white border-primary"
                  : "border-[#E6E6E6] text-primary hover:bg-primary hover:text-white"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-7.5 justify-center items-start">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div
              key={index}
              className="w-full flex flex-col justify-center items-start gap-4 fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-full h-auto aspect-343/197 md:aspect-438/251 relative rounded-2xl overflow-hidden group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  width={438}
                  height={251}
                />
              </div>
              <div className="w-full flex justify-start items-center gap-2 flex-wrap">
                {post.categories.map((category, catIndex) => (
                  <p
                    key={catIndex}
                    className="px-7 py-1 rounded-full border border-[#E6E6E6] text-primary flex justify-center items-center text-[14px] font-medium leading-[150%]"
                  >
                    {category.label}
                  </p>
                ))}
              </div>
              <div className="flex justify-start items-center gap-1 paragraph-xx-small uppercase tracking-[-0.5px] text-[#717171]">
                <p>{post.date}</p>
                <p>.</p>
                <p>{post.autor}</p>
              </div>
              <h3 className="text-primary text-[20px] md:text-[27px] font-medium leading-[130%] font-title tracking-[-0.5px]">
                {post.title}
              </h3>
              <p className="paragraph font-normal text-primary tracking-[-0.5px]">
                {post.description}
              </p>
              <Button
                styleButton="white"
                label="Read more"
                href={post.buttonHref}
                paddingX="px-6"
              />
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-primary-light">
            No posts found for this category.
          </div>
        )}
      </div>
    </section>
  );
}
