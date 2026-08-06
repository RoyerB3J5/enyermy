"use server";

import { BlogCardDTO, PaginatedResult } from "@/types/ghl-dto";
import { getPostsPage } from "./blog-services";


/**
 * Server Action: se ejecuta en el servidor pero se puede invocar
 * desde un Client Component, sin exponer el token ni el fetch crudo.
 */
export async function fetchPostsPageAction(
  page: number,
): Promise<PaginatedResult<BlogCardDTO>> {
  return getPostsPage(page);
}
