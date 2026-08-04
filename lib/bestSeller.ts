import "server-only";

import { square } from "@/lib/square";
import type { Square as SquareTypes } from "square";
import { LightProduct } from "@/types/square";
import { getMergedCustomAttributes } from "./helper";
interface ProductCardPropsWithImage extends LightProduct {
  image2: string;
}

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export async function getBestSellerProductCardProps(): Promise<
  ProductCardPropsWithImage[]
> {
  // 1. Resolver el customAttributeDefinitionId de "Best-Seller"
  //    y el selection_uid de la opción "Si". Solo lo necesitamos una vez.
  const listPage = await square.catalog.list({
    types: "CUSTOM_ATTRIBUTE_DEFINITION",
  });

  const definitions = listPage.data || [];

  // ✅ el filtro por nombre va DENTRO del find, no en un if aparte
  const bestSellerDef = definitions.find(
    (def): def is SquareTypes.CatalogObject.CustomAttributeDefinition =>
      def.type === "CUSTOM_ATTRIBUTE_DEFINITION" &&
      def.customAttributeDefinitionData?.name === "Best-Seller",
  );

  if (!bestSellerDef) return [];

  const siUid =
    bestSellerDef.customAttributeDefinitionData?.selectionConfig?.allowedSelections?.find(
      (sel) => normalizeText(sel.name) === "si",
    )?.uid;

  if (!siUid) return [];

  if (!bestSellerDef?.id || !siUid) return [];

  // 2. SearchCatalogItems SÍ soporta customAttributeFilters (a diferencia de
  //    SearchCatalogObjects/catalog.search), así que Square ya nos devuelve
  //    únicamente los productos con Best-Seller = "Si".
  const response = await square.catalog.searchItems({
    productTypes: ["REGULAR"],
    customAttributeFilters: [
      {
        customAttributeDefinitionId: bestSellerDef.id,
        selectionUidsFilter: [siUid],
      },
    ],
  });

  const objects = response.items || [];

  // 3. searchItems no trae relatedObjects como catalog.search, así que
  //    resolvemos las imágenes con un batchGet aparte.
  const imageIdsSet = new Set<string>();
  objects.forEach((product) => {
    if (product.type !== "ITEM" || !product.itemData) return;
    (product.itemData.imageIds || [])
      .slice(0, 2)
      .forEach((id) => imageIdsSet.add(id));
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

  // 4. Armar el resultado con el mismo shape que ya usas
  return objects
    .map((product) => {
      if (product.type !== "ITEM" || !product.itemData) return null;
      const itemData = product.itemData;

      // Combinamos atributos de ITEM y de la primera ITEM_VARIATION, ya que
      // Square puede guardarlos en cualquiera de los dos niveles (mismo
      // criterio usado en getAllProducts, getProcessedProductById y
      // getRecommendedProducts). Se usa para resolver "marca" más abajo.
      const customAttributes = getMergedCustomAttributes(product);

      // true solo si el producto tiene más de una variación (no depende de
      // los custom attributes)
      const tieneAtributos = (itemData.variations?.length || 0) > 1;

      // Nota: uso "Tag" como pediste antes. Si en realidad quieres "Brand"
      // (como en tu snippet de referencia), solo cambia el nombre aquí abajo.
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

      // id de la primera variación (independientemente de cuántas tenga el producto)
      const idVariant = primeraVariacionObj?.id;

      const imageIds = itemData.imageIds || [];
      const imagen = imageMap.get(imageIds[0]) || "/placeholder.jpg";
      const image2 = imageMap.get(imageIds[1]) || "/placeholder.jpg";

      return {
        id: product.id,
        idVariant,
        nombre: itemData.name || "Producto sin nombre",
        precio: precio.toFixed(2),
        imagen,
        image2,
        marca,
        tieneAtributos,
      };
    })
    .filter((prod): prod is NonNullable<typeof prod> => prod !== null);
}
