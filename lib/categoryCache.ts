import "server-only";

import { square } from "@/lib/square";
type CategoryCache = {
  nameToId: Map<string, string>;
  loadedAt: number;
};

let cache: CategoryCache | null = null;
const TTL_MS = 1000 * 60 * 60; // 1 hora, ajusta a lo que tenga sentido para ti

async function loadCategories(): Promise<CategoryCache> {
  const nameToId = new Map<string, string>();

  let cursor: string | undefined = undefined;

  do {
    const response = await square.catalog.search({
      objectTypes: ["CATEGORY"],
      cursor,
    });

    for (const obj of response.objects || []) {
      if (obj.type === "CATEGORY" && !obj.isDeleted && obj.categoryData?.name) {
        nameToId.set(obj.categoryData.name.toLowerCase().trim(), obj.id || "");
      }
    }

    cursor = response.cursor;
  } while (cursor);

  return { nameToId, loadedAt: Date.now() };
}

async function getCache(): Promise<CategoryCache> {
  const isExpired = !cache || Date.now() - cache.loadedAt > TTL_MS;
  if (isExpired) {
    cache = await loadCategories();
  }
  if (!cache) {
    throw new Error("No se pudo cargar la caché de categorías");
  }
  return cache;
}

export async function getCategoryIdByName(
  categoryName: string,
): Promise<string | null> {
  const { nameToId } = await getCache();
  const id = nameToId.get(categoryName.toLowerCase().trim());

  if (id) return id;

  // Fallback: por si la categoría se creó DESPUÉS de que se cargó la caché,
  // forzamos un refresh una sola vez antes de rendirnos.
  cache = await loadCategories();
  return cache.nameToId.get(categoryName.toLowerCase().trim()) ?? null;
}
