import { BlogCardDTO, BlogPostDetailDTO, CategoryDTO } from "@/types/ghl-dto";
import {
  GHLCategoryRaw,
  GHLPostDetailRaw,
  GHLPostListItemRaw,
} from "@/types/ghl-raw";

const FALLBACK_IMAGE = "/images/blog-placeholder.jpg";
const FALLBACK_AUTHOR = "Equipo editorial";

function formatDate(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function mapPostListItemToCard(raw: GHLPostListItemRaw): BlogCardDTO {
  return {
    id: raw._id,
    image: raw.imageUrl ?? FALLBACK_IMAGE,
    categories: raw.categories.map((c) => ({ id: c._id, label: c.label })),
    date: formatDate(raw.publishedAt ?? raw.updatedAt),
    autor: raw.updatedBy ?? FALLBACK_AUTHOR,
    title: raw.title,
    descriptionShort: raw.description,
    buttonHref: `${raw._id}`,
  };
}

export function mapPostDetailToDTO(raw: GHLPostDetailRaw): BlogPostDetailDTO {
  return {
    id: raw._id,
    image: raw.imageUrl ?? FALLBACK_IMAGE,
    date: formatDate(raw.publishedAt ?? raw.updatedAt),
    autor: FALLBACK_AUTHOR, // el detalle no trae updatedBy, no hay dato real acá
    title: raw.title,
    content: raw.rawHTML,
  };
}

/** "mind-body-spirit" -> "Mind Body Spirit" */
function toTitleCase(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function mapCategoryToDTO(raw: GHLCategoryRaw): CategoryDTO {
  return {
    id: raw._id,
    label: toTitleCase(raw.label),
  };
}

export const ALL_CATEGORY: CategoryDTO = { id: "all", label: "All" };
