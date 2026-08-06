export interface GHLCategoryRaw {
  _id: string;
  label: string;
  urlSlug: string;
}

export interface GHLPostListItemRaw {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAltText?: string;
  status: string;
  categories: GHLCategoryRaw[]; // ya vienen resueltas en el listado
  urlSlug: string;
  publishedAt: string | null;
  updatedAt: string;
  updatedBy?: string; // nombre plano, ej: "Susy Carrillo"
}

export interface GHLPostListResponseRaw {
  blogs: GHLPostListItemRaw[];
  count: number;
}

export interface GHLPostDetailRaw {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAltText?: string;
  status: string;
  categories: string[]; // acá solo vienen los IDs, NO resueltos
  rawHTML: string;
  publishedAt: string | null;
  updatedAt: string;
  readTimeInMinutes: number;
}

export interface GHLPostDetailResponseRaw {
  blogPost: GHLPostDetailRaw;
}

export interface GHLCategoriesResponseRaw {
  categories: GHLCategoryRaw[];
  count: number;
}
