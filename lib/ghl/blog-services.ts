import { BlogCardDTO, BlogPostDetailDTO, CategoryDTO, PaginatedResult } from "@/types/ghl-dto";
import { GHLApiError, ghlFetch } from "./client";
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
export async function getPostsPage(
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
  } catch (error) {
    // A missing post is a 404; auth, configuration, and API failures must not
    // be incorrectly rendered as a page that does not exist.
    if (error instanceof GHLApiError && error.status === 404) {
      return null;
    }

    throw error;
  }
}

/** Categorías para el filtro, con "All" agregado al inicio */
export async function getCategories(): Promise<CategoryDTO[]> {
  const data = await ghlFetch<GHLCategoriesResponseRaw>("/blogs/categories", {
    params: { locationId: LOCATION_ID, limit: CATEGORIES_LIMIT, offset: 0 },
    revalidate: BLOG_CACHE_REVALIDATE_SECONDS,
    tags: [BLOG_CACHE_TAGS.categories],
  });

  return [ALL_CATEGORY, ...data.categories.map(mapCategoryToDTO)];
}
