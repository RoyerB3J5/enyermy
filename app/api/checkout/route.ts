// app/api/checkout/route.ts
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  const { cart, buyerEmail, buyerPhone } = await req.json(); // CartLine[] + datos opcionales si ya los tienes

  const body = {
    idempotency_key: randomUUID(),
    order: {
      location_id: process.env.SQUARE_LOCATION_ID,
      line_items: cart.map((line: any) => ({
        catalog_object_id: line.id,
        quantity: String(line.quantity),
      })),
    },
    checkout_options: {
      redirect_url: "https://tudominio.com/checkout/gracias",

      // Pide dirección de envío (incluye First name / Last name automáticamente)
      ask_for_shipping_address: true,

      // Permite que el comprador agregue propina
      allow_tipping: true,

      // Todos los métodos de pago disponibles
      accepted_payment_methods: {
        apple_pay: true,
        google_pay: true,
        cash_app_pay: true,
        afterpay_clearpay: true,
      },

      // Campo personalizado extra, por si quieres pedir algo más (ej. instrucciones)
      custom_fields: [{ title: "Instrucciones de entrega (opcional)" }],
    },

    // Si ya conoces el email/teléfono del comprador (ej. viene logueado),
    // se los pre-llenas para que no tenga que reescribirlos
    pre_populated_data: {
      ...(buyerEmail && { buyer_email: buyerEmail }),
      ...(buyerPhone && { buyer_phone_number: buyerPhone }),
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
