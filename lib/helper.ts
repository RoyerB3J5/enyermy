/**
 * Square puede guardar los custom attributes a nivel de ITEM o a nivel de
 * ITEM_VARIATION, dependiendo de cómo se hayan cargado en el Dashboard
 * (esto ocurre especialmente en productos con una sola variación).
 *
 * Esta función combina ambos niveles en un solo mapa, dando prioridad al
 * nivel ITEM si una misma clave existe en ambos lados.
 */
export function getMergedCustomAttributes(
  product: any, // reemplaza `any` por el tipo real de CatalogObject si lo tienes
): Record<string, any> {
  if (product.type !== "ITEM" || !product.itemData) return {};

  const itemLevelAttrs = product.customAttributeValues || {};
  const variationLevelAttrs =
    product.itemData.variations?.[0]?.customAttributeValues || {};

  return { ...variationLevelAttrs, ...itemLevelAttrs };
}
