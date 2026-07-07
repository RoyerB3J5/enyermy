// app/api/checkout/route.ts
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  const { cart } = await req.json(); // CartLine[]

  const body = {
    idempotency_key: randomUUID(),
    order: {
      location_id: process.env.SQUARE_LOCATION_ID,
      line_items: cart.map((line: any) => ({
        catalog_object_id: line.id,
        quantity: String(line.quantity),
        // no mandes name ni base_price_money: se heredan del catálogo
      })),
    },
    checkout_options: {
      redirect_url: "https://tudominio.com/checkout/gracias",
      ask_for_shipping_address: true,
    },
  };

  const res = await fetch(
    "https://connect.squareupsandbox.com/v2/online-checkout/payment-links",
    {
      method: "POST",
      headers: {
        "Square-Version": "2026-01-22",
        Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  const data = await res.json();
  if (!res.ok) {
    console.error("Square error:", JSON.stringify(data, null, 2));
    return Response.json({ error: data }, { status: 400 });
  }

  return Response.json({ url: data.payment_link.url });
}
