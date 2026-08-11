import { square } from "./square";

export async function getCustomerOrders(customerId: string) {
  try {
    const result = await square.orders.search({
      locationIds: [process.env.SQUARE_LOCATION_ID!],
      query: {
        filter: { customerFilter: { customerIds: [customerId] } },
        sort: { sortField: "CREATED_AT", sortOrder: "DESC" },
      },
    });

    const orders = result.orders ?? [];

    // Solo devolvemos los pedidos que realmente se pagaron
    return orders.filter((order) => order.tenders && order.tenders.length > 0);
  } catch (error) {
    console.error("[getCustomerOrders] Error:", error);
    throw error;
  }
}

export async function getOrderById(orderId: string) {
  try {
    const result = await square.orders.get({ orderId });
    return result.order ?? null;
  } catch (error) {
    console.error("[getOrderById] Error:", error);
    throw error;
  }
}
