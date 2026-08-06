export interface BlogCardDTO {
  id: string;
  image: string;
  categories: { id: string; label: string }[];
  date: string;
  autor: string;
  title: string;
  descriptionShort: string;
  buttonHref: string;
}

export interface BlogPostDetailDTO {
  id: string;
  image: string;
  date: string;
  autor: string;
  title: string;
  content: string | TrustedHTML; // HTML completo
}

export interface CategoryDTO {
  id: string;
  label: string;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}