import "server-only";

import { square } from "@/lib/square";
import type { FrontendProductDetail } from "@/types/square";
import type { Square as SquareTypes } from "square";
import { getMergedCustomAttributes } from "./helper";

type SquareCustomAttributeMap = Record<
  string,
  SquareTypes.CatalogCustomAttributeValue
>;

function getCustomAttributeMap(product: {
  customAttributeValues?: unknown;
}): SquareCustomAttributeMap {
  return (product.customAttributeValues ?? {}) as SquareCustomAttributeMap;
}

export async function getProcessedProductById(
  id: string,
): Promise<FrontendProductDetail | null> {
  try {
    // Usamos retrieve para traer el objeto específico y sus imágenes relacionadas
    const response = await square.catalog.object.get({
      objectId: id,
      includeRelatedObjects: true,
    });

    const product = response.object;
    const related = response.relatedObjects || [];

    if (!product || product.type !== "ITEM" || !product.itemData) {
      return null;
    }

    const itemData = product.itemData;

    // Square puede guardar los custom attributes a nivel de ITEM o a nivel de
    // ITEM_VARIATION dependiendo de cómo se hayan cargado en el Dashboard.
    // Este helper combina ambos niveles (mismo criterio usado en getAllProducts).
    const customAttrRaw = getMergedCustomAttributes(product);

    const descripcion = itemData.description || "";

    // B. Mapear todas las imágenes cruzando con 'relatedObjects'
    const imageIds = itemData.imageIds || [];
    const imagenes = imageIds
      .map((imageId) => {
        const imgObj = related.find((obj) => obj.id === imageId);
        if (imgObj && imgObj.type === "IMAGE" && imgObj.imageData) {
          return imgObj.imageData.url || "/placeholder.jpg";
        }
        return null;
      })
      .filter((url): url is string => url !== null);

    if (imagenes.length === 0) imagenes.push("/placeholder.jpg");

    // C. Mapear las Variaciones (nombre y precio corregido)
    const variationsRaw = itemData.variations || [];
    const variaciones = variationsRaw
      .map((v) => {
        if (v.type === "ITEM_VARIATION" && v.itemVariationData) {
          const vData = v.itemVariationData;
          const priceAmount = vData.priceMoney?.amount;
          return {
            id: v.id,
            nombre: vData.name || "Única",
            precio: priceAmount
              ? (Number(priceAmount) / 100).toFixed(2)
              : "0.00",
          };
        }
        return null;
      })
      .filter((v): v is NonNullable<typeof v> => v !== null);

    // D. Separación Quirúrgica de Atributos (Table vs Raíz Dinámica)
    const table: { nombre: string; valor: string }[] = [];
    const otrosAtributos: Record<string, string> = {};

    // Lista de nombres objetivo para la tabla (en minúsculas para evitar fallos de tipeo)
    // Los primeros 3 vienen del atributo "Table", los últimos 3 del atributo "Table2"
    const targetTableKeys = [
      "best for",
      "key benefits",
      "hero ingredient",
      "hair concerns",
      "technology",
      "rich in",
    ];

    // Procesar atributo "Table" (primeros 3 valores) si existe
    const tableAttr = Object.values(customAttrRaw).find(
      (attr) => attr.name?.toLowerCase().trim() === "table",
    );
    const tableAttrValue = tableAttr?.stringValue || "";

    if (tableAttrValue) {
      const parts = tableAttrValue.split(".").map((p: string) => p.trim());
      targetTableKeys.slice(0, 3).forEach((key, index) => {
        const valor = parts[index] || "";
        if (valor) {
          const nombre = key.charAt(0).toUpperCase() + key.slice(1);
          table.push({ nombre, valor });
        }
      });
    }

    // Procesar atributo "Table2" (últimos 3 valores) si existe
    const table2Attr = Object.values(customAttrRaw).find(
      (attr) => attr.name?.toLowerCase().trim() === "table2",
    );
    const table2AttrValue = table2Attr?.stringValue || "";

    if (table2AttrValue) {
      const parts = table2AttrValue.split(".").map((p: string) => p.trim());
      targetTableKeys.slice(3, 6).forEach((key, index) => {
        const valor = parts[index] || "";
        if (valor) {
          const nombre = key.charAt(0).toUpperCase() + key.slice(1);
          table.push({ nombre, valor });
        }
      });
    }

    // Procesar atributo "Como usar" si existe
    const comoUsar = Object.values(customAttrRaw).find(
      (attr) => attr.name?.toLowerCase().trim() === "como usar",
    );
    const comoUsarValue = comoUsar?.stringValue || "";

    if (comoUsarValue) {
      otrosAtributos["ComoUsar"] = comoUsarValue;
    }

    // Procesar atributo "Ingredientes" si existe -> lo convertimos en array
    const ingredientesAttr = Object.values(customAttrRaw).find(
      (attr) => attr.name?.toLowerCase().trim() === "ingredientes",
    );
    const ingredientesRaw = ingredientesAttr?.stringValue || "";

    const ingredientesArray = ingredientesRaw
      ? ingredientesRaw
          .split(",")
          .map((texto: string) => texto.trim())
          .filter((texto: string) => texto !== "")
      : [];

    // Procesar atributo "Bullets" si existe -> lo convertimos en array separando por puntos
    const bulletsAttr = Object.values(customAttrRaw).find(
      (attr) => attr.name?.toLowerCase().trim() === "bullets",
    );
    const bulletsRaw = bulletsAttr?.stringValue || "";

    const bulletsArray = bulletsRaw
      ? bulletsRaw
          .split(".")
          .map((texto: string) => texto.trim())
          .filter((texto: string) => texto !== "")
      : [];

    // Mapear el resto de los atributos
    Object.values(customAttrRaw).forEach((attr) => {
      const name = attr.name || "";
      const valor = attr.stringValue || "";

      // Si no tiene valor real, lo ignoramos
      if (!valor) return;

      const normalizedName = name.toLowerCase().trim();

      // Ignoramos los atributos especiales que ya procesamos de forma separada
      if (
        normalizedName === "description" ||
        normalizedName === "table" ||
        normalizedName === "table2" ||
        normalizedName === "como usar" ||
        normalizedName === "banner" ||
        normalizedName === "ingredientes" ||
        normalizedName === "bullets"
      ) {
        return;
      }

      // Si no es un atributo especial, se vuelve una propiedad directa llave-valor
      otrosAtributos[name] = valor;
    });

    // Unimos las propiedades base, el array 'table' y esparcimos los atributos planos
    return {
      id: product.id,
      nombre: itemData.name || "Producto sin nombre",
      descripcion,
      ingredientesArray,
      bulletsArray,
      imagenes,
      variaciones,
      table,
      ...otrosAtributos, // Agrega directamente "Brand": "...", "Description-2": "..." a la raíz
    };
  } catch (error) {
    console.error(`Error obteniendo el producto ${id}:`, error);
    return null;
  }
}

export async function getProductTest(
  id: string,
): Promise<{ product: any } | null> {
  try {
    const response = await square.catalog.object.get({
      objectId: id,
      includeRelatedObjects: true,
    });
    const product = response.object;
    return {
      product,
    };
  } catch (error) {
    console.error(`Error obteniendo el producto ${id}:`, error);
    return null;
  }
}
