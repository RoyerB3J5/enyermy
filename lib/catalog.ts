import "server-only";

import { square } from "@/lib/square";
import type {
  CategoryProduct,
  FrontendProductDetail,
  LightProduct,
  getAllProductsType,
} from "@/types/square";
import type { Square as SquareTypes } from "square";
import { getCategoryIdByName } from "./categoryCache";
import { getMergedCustomAttributes } from "./helper";
import {
  SQUARE_CATALOG_CACHE_KEY,
  SQUARE_CATALOG_CACHE_OPTIONS,
  shouldCacheSquareCatalog,
} from "./square-cache";
import { unstable_cache } from "next/cache";

interface ProductCardPropsWithImage extends LightProduct {
  image2: string;
}

type SquareCustomAttributeMap = Record<
  string,
  SquareTypes.CatalogCustomAttributeValue
>;

function getCustomAttributeMap(product: {
  customAttributeValues?: unknown;
}): SquareCustomAttributeMap {
  return (product.customAttributeValues ?? {}) as SquareCustomAttributeMap;
}

/**
 * Fetches products from the Square Catalog API and maps them to a simplified ProductCardPropsWithImage format.
 */
async function getProductCardPropsWithImagesUncached(): Promise<
  ProductCardPropsWithImage[]
> {
  const response = await square.catalog.search({
    objectTypes: ["ITEM"],
    includeRelatedObjects: true,
  });

  const objects = response.objects || [];
  const related = response.relatedObjects || [];

  return objects
    .map((product) => {
      if (product.type !== "ITEM" || !product.itemData) return null;
      const itemData = product.itemData;

      const customAttributes = getCustomAttributeMap(product);

      const tieneAtributos = Object.keys(customAttributes).length > 0;

      const atributoMarca = Object.values(customAttributes).find(
        (attr) => attr.name === "Brand",
      );

      const marca = atributoMarca?.stringValue || "Sin marca";
      const primeraVariacionObj = itemData.variations?.[0];
      let precio = 0;

      if (
        primeraVariacionObj &&
        primeraVariacionObj.type === "ITEM_VARIATION" &&
        primeraVariacionObj.itemVariationData
      ) {
        const priceMoney = primeraVariacionObj.itemVariationData.priceMoney;
        precio = priceMoney ? Number(priceMoney.amount) / 100 : 0;
      }

      const targetImageId = itemData.imageIds?.[0];
      const imagenObjeto = related.find((obj) => obj.id === targetImageId);
      let urlImagen = "/placeholder.jpg";

      if (
        imagenObjeto &&
        imagenObjeto.type === "IMAGE" &&
        imagenObjeto.imageData
      ) {
        urlImagen = imagenObjeto.imageData.url || "/placeholder.jpg";
      }
      return {
        id: product.id,
        nombre: itemData.name || "Producto sin nombre",
        precio: precio.toFixed(2),
        imagen: urlImagen,
        image2: urlImagen,
        marca: marca,
        tieneAtributos: tieneAtributos,
      };
    })
    .filter((prod): prod is NonNullable<typeof prod> => prod !== null);
}

export const getProductCardPropsWithImages = shouldCacheSquareCatalog
  ? unstable_cache(
      getProductCardPropsWithImagesUncached,
      [...SQUARE_CATALOG_CACHE_KEY, "product-card-props"],
      SQUARE_CATALOG_CACHE_OPTIONS,
    )
  : getProductCardPropsWithImagesUncached;

async function getAllProductsUncached(): Promise<getAllProductsType[]> {
  const response = await square.catalog.searchItems({
    productTypes: ["REGULAR"],
  });

  const objects = response.items || [];

  // 1. Recolectar imageIds, definitionIds y categoryIds
  const imageIdsSet = new Set<string>();
  const definitionIdsSet = new Set<string>();
  const categoryIdsSet = new Set<string>();

  objects.forEach((product) => {
    if (product.type !== "ITEM" || !product.itemData) return;

    (product.itemData.imageIds || [])
      .slice(0, 2)
      .forEach((id) => imageIdsSet.add(id));

    const categoriaId =
      product.itemData.reportingCategory?.id ||
      product.itemData.categories?.[0]?.id;
    if (categoriaId) categoryIdsSet.add(categoriaId);

    // Combinamos atributos de ITEM y de la primera ITEM_VARIATION, ya que
    // Square puede guardarlos en cualquiera de los dos niveles.
    const mergedAttrs = getMergedCustomAttributes(product);

    Object.values(mergedAttrs).forEach((attr) => {
      if (attr.type === "SELECTION" && attr.customAttributeDefinitionId) {
        definitionIdsSet.add(attr.customAttributeDefinitionId);
      }
    });
  });

  // 2. Un único batchGet para imágenes + definiciones de selección + categorías
  const allIds = [...imageIdsSet, ...definitionIdsSet, ...categoryIdsSet];
  const imageMap = new Map<string, string>();
  const selectionLabelMap = new Map<string, string>();
  const categoryNameMap = new Map<string, string>();

  if (allIds.length > 0) {
    const { objects: relatedObjects = [] } = await square.catalog.batchGet({
      objectIds: allIds,
    });

    relatedObjects.forEach((obj) => {
      if (obj.type === "IMAGE" && obj.imageData?.url) {
        imageMap.set(obj.id, obj.imageData.url);
      }
      if (obj.type === "CATEGORY" && obj.categoryData?.name) {
        categoryNameMap.set(obj.id || "", obj.categoryData.name);
      }
      if (
        obj.type === "CUSTOM_ATTRIBUTE_DEFINITION" &&
        obj.customAttributeDefinitionData?.selectionConfig
      ) {
        obj.customAttributeDefinitionData.selectionConfig.allowedSelections?.forEach(
          (sel) => {
            if (sel.uid && sel.name) selectionLabelMap.set(sel.uid, sel.name);
          },
        );
      }
    });
  }

  // 3. Armar el resultado
  return objects
    .map((product) => {
      if (product.type !== "ITEM" || !product.itemData) return null;
      const itemData = product.itemData;

      // Mismo merge aquí para no perder atributos de productos con una sola
      // variación cuyos custom attributes viven a nivel de ITEM_VARIATION.
      // Se usa para resolver marca, bestSeller y cabelloTipo más abajo.
      const customAttributes = getMergedCustomAttributes(product);

      // true solo si el producto tiene más de una variación (no depende de
      // los custom attributes)
      const tieneAtributos = (itemData.variations?.length || 0) > 1;

      const atributoMarca = Object.values(customAttributes).find(
        (attr) => attr.name === "Brand",
      );
      const marca = atributoMarca?.stringValue || "Sin marca";

      const atributoBestSeller = Object.values(customAttributes).find(
        (attr) => attr.name === "Best-Seller",
      );
      const bestSellerLabels = (atributoBestSeller?.selectionUidValues || [])
        .map((uid: string) => selectionLabelMap.get(uid))
        .filter((label: string | undefined): label is string => !!label);

      const atributoCabello = Object.values(customAttributes).find(
        (attr) => attr.name === "Cabello",
      );
      const cabelloLabels = (atributoCabello?.selectionUidValues || [])
        .map((uid: string) => selectionLabelMap.get(uid))
        .filter((label: string | undefined): label is string => !!label);
      const cabelloTipo = cabelloLabels[0] ?? undefined;

      const primeraVariacionObj = itemData.variations?.[0];
      let precio = 0;

      if (
        primeraVariacionObj &&
        primeraVariacionObj.type === "ITEM_VARIATION" &&
        primeraVariacionObj.itemVariationData
      ) {
        const priceMoney = primeraVariacionObj.itemVariationData.priceMoney;
        precio = priceMoney ? Number(priceMoney.amount) / 100 : 0;
      }

      // id de la primera variación (independientemente de cuántas tenga el producto)
      const idVariant = primeraVariacionObj?.id;

      const imagenes = (itemData.imageIds || [])
        .slice(0, 2)
        .map((id) => imageMap.get(id) || "/placeholder.jpg");

      const categoriaId =
        itemData.reportingCategory?.id || itemData.categories?.[0]?.id || null;
      const categoriaNombre = categoriaId
        ? (categoryNameMap.get(categoriaId) ?? null)
        : null;

      // Excluir productos de la categoría Bundles, sin llamada extra a Square
      if (categoriaNombre?.toLowerCase().trim() === "bundles") return null;

      return {
        id: product.id,
        idVariant,
        nombre: itemData.name || "Producto sin nombre",
        precio: precio.toFixed(2),
        imagenes,
        marca,
        tieneAtributos,
        bestSeller: bestSellerLabels[0] ?? null,
        categoriaId,
        categoriaNombre,
        cabelloTipo,
        createdAt:
          (product as { created_at?: string }).created_at ??
          product.updatedAt ??
          null,
      };
    })
    .filter((prod): prod is NonNullable<typeof prod> => prod !== null);
}

export const getAllProducts = shouldCacheSquareCatalog
  ? unstable_cache(
      getAllProductsUncached,
      [...SQUARE_CATALOG_CACHE_KEY, "all-products"],
      SQUARE_CATALOG_CACHE_OPTIONS,
    )
  : getAllProductsUncached;

export async function getAllProductsTest(): Promise<{ products: any[] }> {
  const response = await square.catalog.searchItems({
    productTypes: ["REGULAR"],
  });
  return { products: response.items || [] };
}

async function getRecommendedProductsUncached(
  nameCategory: string,
): Promise<ProductCardPropsWithImage[]> {
  try {
    const id_category = await getCategoryIdByName(nameCategory);
    if (!id_category) {
      console.warn(`No se encontró la categoría "${nameCategory}" en Square`);
      return [];
    }

    const response = await square.catalog.searchItems({
      categoryIds: [id_category],
      limit: 7,
    });

    const items = response.items || [];

    // 1. Recolectar todos los imageIds de todos los productos
    const imageIdsSet = new Set<string>();
    items.forEach((product) => {
      if (product.type !== "ITEM" || !product.itemData) return;
      product.itemData.imageIds?.forEach((id) => imageIdsSet.add(id));
    });

    // 2. Resolver esos IDs a URLs reales en una sola llamada
    const imageMap = new Map<string, string>();
    if (imageIdsSet.size > 0) {
      const { objects: relatedObjects = [] } = await square.catalog.batchGet({
        objectIds: [...imageIdsSet],
      });

      relatedObjects.forEach((obj) => {
        if (obj.type === "IMAGE" && obj.imageData?.url) {
          imageMap.set(obj.id, obj.imageData.url);
        }
      });
    }

    // 3. Mapear productos pasando el imageMap
    const productos: ProductCardPropsWithImage[] = items
      .map((product) => mapToProductCardPropsWithImage(product, imageMap))
      .filter((p): p is ProductCardPropsWithImage => p !== null);

    return productos;
  } catch (error) {
    console.error("Error obteniendo productos recomendados:", error);
    return [];
  }
}

export const getRecommendedProducts = shouldCacheSquareCatalog
  ? unstable_cache(
      getRecommendedProductsUncached,
      [...SQUARE_CATALOG_CACHE_KEY, "recommended-products"],
      SQUARE_CATALOG_CACHE_OPTIONS,
    )
  : getRecommendedProductsUncached;

function mapToProductCardPropsWithImage(
  product: any,
  imageMap: Map<string, string>,
): ProductCardPropsWithImage | null {
  if (!product || product.type !== "ITEM" || !product.itemData) {
    return null;
  }

  const itemData = product.itemData;

  // Combinamos atributos de ITEM y de la primera ITEM_VARIATION, ya que
  // Square puede guardarlos en cualquiera de los dos niveles (mismo criterio
  // usado en getAllProducts y getProcessedProductById).
  const customAttrRaw = getMergedCustomAttributes(product);

  const primeraVariacion = itemData.variations?.[0];
  const priceAmount =
    primeraVariacion?.type === "ITEM_VARIATION"
      ? primeraVariacion.itemVariationData?.priceMoney?.amount
      : undefined;
  const precio = priceAmount ? (Number(priceAmount) / 100).toFixed(2) : "0.00";

  // id de la primera variación (independientemente de cuántas tenga el producto)
  const idVariant = primeraVariacion?.id;

  const marcaAttr = Object.values(customAttrRaw).find(
    (attr) =>
      attr.name?.toLowerCase().trim() === "brand" ||
      attr.name?.toLowerCase().trim() === "marca",
  );
  const marca = marcaAttr?.stringValue || "";

  // true solo si el producto tiene más de una variación (no depende de
  // los custom attributes)
  const tieneAtributos = (itemData.variations?.length || 0) > 1;

  // Resolver imágenes desde el imageMap, usando imageIds (no ecomImageUris)
  const [firstImageId, secondImageId] = itemData.imageIds || [];
  const imagen = firstImageId
    ? imageMap.get(firstImageId) || "/placeholder.jpg"
    : "/placeholder.jpg";
  const image2 = secondImageId ? imageMap.get(secondImageId) || imagen : imagen;

  return {
    id: product.id,
    idVariant,
    nombre: itemData.name || "Producto sin nombre",
    precio,
    imagen,
    image2,
    marca,
    tieneAtributos,
  };
}

// llamada a los bundles de productos, para mostrar en la pagina de bundles
async function getBundleProductsUncached(
  categoryName: string,
): Promise<CategoryProduct[]> {
  const categoryId = await getCategoryIdByName(categoryName);
  if (!categoryId) {
    // Puedes lanzar error, devolver [], o loguear que la categoría no existe
    console.warn(`No se encontró la categoría "${categoryName}" en Square`);
    return [];
  }
  const response = await square.catalog.searchItems({
    categoryIds: [categoryId],
    productTypes: ["REGULAR"],
  });

  const objects = response.items || [];

  const imageIdsSet = new Set<string>();
  objects.forEach((product) => {
    if (product.type !== "ITEM" || !product.itemData) return;
    const firstImageId = product.itemData.imageIds?.[0];
    if (firstImageId) imageIdsSet.add(firstImageId);
  });

  const imageMap = new Map<string, string>();
  if (imageIdsSet.size > 0) {
    const { objects: relatedObjects = [] } = await square.catalog.batchGet({
      objectIds: [...imageIdsSet],
    });

    relatedObjects.forEach((obj) => {
      if (obj.type === "IMAGE" && obj.imageData?.url) {
        imageMap.set(obj.id, obj.imageData.url);
      }
    });
  }

  return objects
    .map((product) => {
      if (product.type !== "ITEM" || !product.itemData) return null;
      const itemData = product.itemData;

      const primeraVariacion = itemData.variations?.[0] || null;

      // Los custom attributes están en la variación, no en el item
      const customAttrRaw =
        (primeraVariacion?.type === "ITEM_VARIATION" &&
          primeraVariacion.customAttributeValues) ||
        {};

      const brandAttr = Object.values(customAttrRaw).find(
        (attr) => attr.name?.toLowerCase().trim() === "brand",
      );
      const tag = brandAttr?.stringValue || "";

      const descripcionRaw = itemData.description || "";
      const list = descripcionRaw
        ? descripcionRaw
            .split(",")
            .map((texto) => texto.trim())
            .filter((texto) => texto !== "")
        : [];

      const desc2Attr = Object.values(customAttrRaw).find(
        (attr) => attr.name?.toLowerCase().trim() === "description-2",
      );
      const perfectFor = desc2Attr?.stringValue || "";

      const resultadosAttr = Object.values(customAttrRaw).find(
        (attr) => attr.name?.toLowerCase().trim() === "resultados",
      );
      const results = resultadosAttr?.stringValue || "";

      const firstImageId = itemData.imageIds?.[0];
      const image = firstImageId
        ? imageMap.get(firstImageId) || "/placeholder.jpg"
        : "/placeholder.jpg";

      // precio: extracción segura, sin asumir que exista variación
      const primeraVariacionPrecio = itemData.variations?.[0];
      let precio = "0.00";

      if (
        primeraVariacionPrecio &&
        primeraVariacionPrecio.type === "ITEM_VARIATION" &&
        primeraVariacionPrecio.itemVariationData?.priceMoney?.amount
      ) {
        precio = (
          Number(primeraVariacionPrecio.itemVariationData.priceMoney.amount) /
          100
        ).toFixed(2);
      }

      return {
        id: product.id,
        image,
        tag,
        title: itemData.name || "Producto sin nombre",
        list,
        perfectFor,
        results,
        precio,
      };
    })
    .filter((p): p is CategoryProduct => p !== null);
}

export const getBundleProducts = shouldCacheSquareCatalog
  ? unstable_cache(
      getBundleProductsUncached,
      [...SQUARE_CATALOG_CACHE_KEY, "bundle-products"],
      SQUARE_CATALOG_CACHE_OPTIONS,
    )
  : getBundleProductsUncached;

//Para sacar el id de bundle
export async function getBundleProductsTest(
  categoryId: string,
): Promise<{ objects: any[] }> {
  const response = await square.catalog.searchItems({
    categoryIds: [categoryId],
    productTypes: ["REGULAR"],
  });

  const objects = response.items || [];

  return { objects };
}
