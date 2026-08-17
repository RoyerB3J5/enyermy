"use client";

import { useState, useRef, useTransition } from "react";
import Button from "@/components/ui/Button";
import { BlogCardDTO } from "@/types/ghl-dto";
import { fetchPostsPageAction } from "@/lib/ghl/actions";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";

interface GridPostProps {
  categories: {
    id: string;
    label: string;
  }[];
  initialPosts: BlogCardDTO[];
  totalPosts: number;
  totalPages: number;
}

export default function GridPost({
  categories,
  initialPosts,
  totalPages,
  totalPosts,
}: GridPostProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]?.id || "all",
  );
  const params = useParams();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [posts, setPosts] = useState<BlogCardDTO[]>(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPending, startTransition] = useTransition();

  function goToPage(page: number) {
    if (page === currentPage || page < 1 || page > totalPages) return;

    startTransition(async () => {
      const result = await fetchPostsPageAction(page);
      setPosts(result.items);
      setCurrentPage(page);
    });
  }

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

  const locale = (params.locale as string) || "en";

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
              className={`px-7 py-1 rounded-full border text-[14px] font-medium leading-[150%] transition-colors duration-300 ease-in-out cursor-pointer shrink-0 whitespace-nowrap capitalize ${
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
              className="w-full h-full flex flex-col items-start gap-4 fade-up"
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
                    className="px-7 py-1 rounded-full border border-[#E6E6E6] text-primary flex justify-center items-center text-[14px] font-medium leading-[150%] lowercase first-letter:uppercase"
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

              <h3 className="text-primary text-[20px] md:text-[27px] font-medium leading-[130%] font-title tracking-[-0.5px] lowercase first-letter:uppercase">
                {post.title}
              </h3>

              <p className="paragraph font-normal text-primary tracking-[-0.5px] flex-1">
                {post.descriptionShort}
              </p>

              <Button
                styleButton="white"
                label="Read more"
                href={`/${locale}/blog/${post.buttonHref}?author=${post.autor}`}
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
      <nav className="mt-8 flex gap-6">
        <button
          disabled={currentPage === 1 || isPending}
          onClick={() => goToPage(currentPage - 1)}
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            disabled={isPending}
            onClick={() => goToPage(p)}
            className={p === currentPage ? "font-bold" : ""}
          >
            {p}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages || isPending}
          onClick={() => goToPage(currentPage + 1)}
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </nav>
    </section>
  );
}
