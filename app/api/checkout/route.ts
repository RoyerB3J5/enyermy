// app/api/checkout/route.ts
import { auth } from "@/auth";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  try {
    const { cart, buyerEmail, buyerPhone } = await req.json(); // CartLine[] + datos opcionales si ya los tienes
    const session = await auth();
    const squareCustomerId = session?.user?.squareCustomerId;
    const SQUARE_BASE_URL =
      process.env.SQUARE_ENVIRONMENT === "production"
        ? "https://connect.squareup.com"
        : "https://connect.squareupsandbox.com";
    const body = {
      idempotency_key: randomUUID(),
      order: {
        location_id: process.env.SQUARE_LOCATION_ID,
        customer_id: squareCustomerId,
        line_items: cart.map((line: any) => ({
          catalog_object_id: line.id,
          quantity: String(line.quantity),
          metadata: {
            image_url: line.image,
          },
        })),
        pricing_options: {
          auto_apply_taxes: true, // ← esto faltaba
        },
      },
      checkout_options: {
        redirect_url: "/en/thanks",

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
        custom_fields: [{ title: "Delivery Instructions" }],
      },

      // Si ya conoces el email/teléfono del comprador (ej. viene logueado),
      // se los pre-llenas para que no tenga que reescribirlos
      pre_populated_data: {
        ...(buyerEmail && { buyer_email: buyerEmail }),
        ...(buyerPhone && { buyer_phone_number: buyerPhone }),
      },
    };

    const res = await fetch(
      `${SQUARE_BASE_URL}/v2/online-checkout/payment-links`,
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
      console.error("[checkout] Square respondió con error:", data);
      return Response.json(
        { error: "No se pudo generar el link de pago. Intenta de nuevo." },
        { status: res.status },
      );
    }

    return Response.json({ url: data.payment_link.url });
  } catch (error) {
    console.error("[checkout] Error inesperado:", error);
    return Response.json(
      { error: "Ocurrió un error al procesar tu pago. Intenta de nuevo." },
      { status: 500 },
    );
  }
}
