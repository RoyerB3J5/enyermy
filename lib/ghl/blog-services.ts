import { BlogCardDTO, BlogPostDetailDTO, CategoryDTO, PaginatedResult } from "@/types/ghl-dto";
import { unstable_cache } from "next/cache";
import { ghlFetch } from "./client";
import { GHLCategoriesResponseRaw, GHLPostDetailResponseRaw, GHLPostListResponseRaw } from "@/types/ghl-raw";
import { ALL_CATEGORY, mapCategoryToDTO, mapPostDetailToDTO, mapPostListItemToCard } from "./mapper";


const LOCATION_ID = process.env.GHL_LOCATION_ID!;
const BLOG_ID = process.env.GHL_BLOG_ID!;

const POSTS_PAGE_SIZE = 9;
const CATEGORIES_LIMIT = 8;
const BLOG_CACHE_REVALIDATE_SECONDS = 300;

export const BLOG_CACHE_TAGS = {
  posts: "ghl-blog-posts",
  categories: "ghl-blog-categories",
  post: (id: string) => `ghl-blog-post-${id}`,
} as const;

/** Listado de posts para la grilla del blog, paginado (9 por página) */
async function getPostsPageUncached(
  page: number = 1,
): Promise<PaginatedResult<BlogCardDTO>> {
  const offset = (page - 1) * POSTS_PAGE_SIZE;

  const data = await ghlFetch<GHLPostListResponseRaw>("/blogs/posts/all", {
    params: {
      locationId: LOCATION_ID,
      blogId: BLOG_ID,
      limit: POSTS_PAGE_SIZE,
      offset,
      status: "PUBLISHED",
    },
    revalidate: BLOG_CACHE_REVALIDATE_SECONDS,
    tags: [BLOG_CACHE_TAGS.posts],
  });

  return {
    items: data.blogs.map(mapPostListItemToCard),
    total: data.count,
    page,
    pageSize: POSTS_PAGE_SIZE,
    totalPages: Math.ceil(data.count / POSTS_PAGE_SIZE),
  };
}

export const getPostsPage = unstable_cache(
  getPostsPageUncached,
  ["ghl-blog", "posts-page", LOCATION_ID, BLOG_ID],
  {
    revalidate: BLOG_CACHE_REVALIDATE_SECONDS,
    tags: [BLOG_CACHE_TAGS.posts],
  },
);

/** Detalle completo de un post por su ID (para la página individual) */
export async function getPostById(
  postId: string,
): Promise<BlogPostDetailDTO | null> {
  try {
    const data = await ghlFetch<GHLPostDetailResponseRaw>(
      `/blogs/posts/${postId}`,
      {
        params: { locationId: LOCATION_ID },
        revalidate: 60,
        tags: [BLOG_CACHE_TAGS.post(postId)],
      },
    );

    return mapPostDetailToDTO(data.blogPost);
  } catch {
    return null; // 404 u otro error -> el caller decide (ej: notFound())
  }
}

/** Categorías para el filtro, con "All" agregado al inicio */
async function getCategoriesUncached(): Promise<CategoryDTO[]> {
  const data = await ghlFetch<GHLCategoriesResponseRaw>("/blogs/categories", {
    params: { locationId: LOCATION_ID, limit: CATEGORIES_LIMIT, offset: 0 },
    revalidate: BLOG_CACHE_REVALIDATE_SECONDS,
    tags: [BLOG_CACHE_TAGS.categories],
  });

  return [ALL_CATEGORY, ...data.categories.map(mapCategoryToDTO)];
}

export const getCategories = unstable_cache(
  getCategoriesUncached,
  ["ghl-blog", "categories", LOCATION_ID, BLOG_ID],
  {
    revalidate: BLOG_CACHE_REVALIDATE_SECONDS,
    tags: [BLOG_CACHE_TAGS.categories],
  },
);
