// src/utils/slug.ts

/**
 * Transforma un texto largo (como el name:string de un producto) en un slug amigable para SEO.
 * Ejemplo: "Polera Oversized Negra - Colección 2026" -> "polera-oversized-negra-coleccion-2026"
 */
export function generarSlug(name: string, maxPalabras = 4) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remueve acentos
    .replace(/[^a-z0-9\s]/g, "") // Remueve caracteres especiales
    .trim()
    .split(/\s+/) // Separa por palabras
    .slice(0, maxPalabras) // Toma solo las primeras N palabras
    .join("-"); // Une con guiones
}
