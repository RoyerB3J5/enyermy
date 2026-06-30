import { square } from "@/lib/square";
import type { FrontendProductDetail, LightProduct } from "@/types/square";

/**
 * Fetches products from the Square Catalog API and maps them to a simplified LightProduct format.
 */
export async function getLightProducts(): Promise<LightProduct[]> {
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

      const customAttributes = product.customAttributeValues || {};

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
        marca: marca,
        tieneAtributos: tieneAtributos,
      };
    })
    .filter((prod): prod is NonNullable<typeof prod> => prod !== null);
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

    // A. Descripción -> Convertir a Array limpio separado por comas
    const descripcionRaw = itemData.description || "";
    const descripcionArray = descripcionRaw
      ? descripcionRaw.split(",").map((texto) => texto.trim())
      : [];

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
    const customAttrRaw = product.customAttributeValues || {};
    
    const table: { nombre: string; valor: string }[] = [];
    const otrosAtributos: Record<string, string> = {};

    // Lista de nombres objetivo para la tabla (en minúsculas para evitar fallos de tipeo)
    const targetTableKeys = [
      "best for",
      "key benefits",
      "hero ingredient",
      "hair concerns",
      "technology",
      "rich in"
    ];

    Object.values(customAttrRaw).forEach((attr) => {
      const name = attr.name || "";
      const valor = attr.stringValue || "";

      // Si no tiene valor real, lo ignoramos
      if (!valor) return;

      // Verificamos si pertenece a los elegidos de la tabla (Case Insensitive)
      const isTableAttribute = targetTableKeys.includes(name.toLowerCase().trim());

      if (isTableAttribute) {
        table.push({ nombre: name, valor });
      } else {
        // Si no va en la tabla, se vuelve una propiedad directa llave-valor
        otrosAtributos[name] = valor;
      }
    });

    // Unimos las propiedades base, el array 'table' y esparcimos los atributos planos
    return {
      id: product.id,
      nombre: itemData.name || "Producto sin nombre",
      descripcionArray,
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