import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// ── Variables de entorno requeridas ──────────────────────────────────────
// SQUARE_WEBHOOK_SIGNATURE_KEY -> la "Signature Key" que Square genera
//                                  al crear el endpoint del webhook.
// SQUARE_WEBHOOK_NOTIFICATION_URL -> la URL EXACTA (con https) que registraste
//                                  en el Square Dashboard para este endpoint.
// N8N_WEBHOOK_URL -> la URL del nodo "Webhook" de tu workflow en n8n.
// SQUARE_ACCESS_TOKEN -> token de tu app de Square (Customers/Catalog/Team API).
//                        Requiere scopes: CUSTOMERS_READ, ITEMS_READ, EMPLOYEES_READ
// SQUARE_ENV -> "production" o "sandbox"
// ──────────────────────────────────────────────────────────────────────────

// Versión de API vigente al momento de escribir esto (revisar developer.squareup.com
// de vez en cuando, Square la actualiza seguido; no rompe nada si queda un poco vieja).
const SQUARE_API_VERSION = "2026-01-22";

const SQUARE_API_BASE =
  process.env.SQUARE_ENVIRONMENT === "sandbox"
    ? "https://connect.squareupsandbox.com/v2"
    : "https://connect.squareup.com/v2";

function squareHeaders() {
  return {
    Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
    "Square-Version": SQUARE_API_VERSION,
  };
}

function isValidSquareSignature(
  rawBody: string,
  signatureHeader: string | null,
  notificationUrl: string,
  signatureKey: string,
): boolean {
  if (!signatureHeader) return false;
  const hmac = crypto.createHmac("sha256", signatureKey);
  hmac.update(notificationUrl + rawBody);
  const expectedSignature = hmac.digest("base64");
  const a = Buffer.from(expectedSignature);
  const b = Buffer.from(signatureHeader);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

// ── Helpers de enriquecimiento (verificados contra docs oficiales de Square) ─

async function getCustomer(customerId: string | undefined) {
  if (!customerId) return null;
  try {
    // GET /v2/customers/{customer_id} — RetrieveCustomer
    const res = await fetch(`${SQUARE_API_BASE}/customers/${customerId}`, {
      headers: squareHeaders(),
    });
    if (!res.ok) {
      console.error(
        `[square-webhook] Error obteniendo customer ${customerId}:`,
        res.status,
        await res.text(),
      );
      return null;
    }
    const data = await res.json();
    const c = data.customer;
    return {
      id: c?.id,
      given_name: c?.given_name ?? null,
      family_name: c?.family_name ?? null,
      email: c?.email_address ?? null,
      phone: c?.phone_number ?? null,
    };
  } catch (err) {
    console.error("[square-webhook] Excepción llamando Customers API:", err);
    return null;
  }
}

async function getTeamMember(teamMemberId: string | undefined) {
  if (!teamMemberId) return null;
  try {
    // GET /v2/team-members/{team_member_id} — RetrieveTeamMember
    // Requiere scope EMPLOYEES_READ en el access token
    const res = await fetch(`${SQUARE_API_BASE}/team-members/${teamMemberId}`, {
      headers: squareHeaders(),
    });
    if (!res.ok) {
      console.error(
        `[square-webhook] Error obteniendo team member ${teamMemberId}:`,
        res.status,
        await res.text(),
      );
      return null;
    }
    const data = await res.json();
    const tm = data.team_member;
    return {
      id: tm?.id,
      given_name: tm?.given_name ?? null,
      family_name: tm?.family_name ?? null,
    };
  } catch (err) {
    console.error("[square-webhook] Excepción llamando Team API:", err);
    return null;
  }
}

async function getServiceVariation(serviceVariationId: string | undefined) {
  if (!serviceVariationId) return null;
  try {
    // GET /v2/catalog/object/{object_id}?include_related_objects=true — RetrieveCatalogObject
    // include_related_objects=true trae el CatalogItem padre en `related_objects`
    // cuando el objeto solicitado es un CatalogItemVariation.
    const res = await fetch(
      `${SQUARE_API_BASE}/catalog/object/${serviceVariationId}?include_related_objects=true`,
      { headers: squareHeaders() },
    );
    if (!res.ok) {
      console.error(
        `[square-webhook] Error obteniendo catalog object ${serviceVariationId}:`,
        res.status,
        await res.text(),
      );
      return null;
    }
    const data = await res.json();
    const variation = data.object?.item_variation_data;
    const priceMoney = variation?.price_money;

    const parentItem = data.related_objects?.find(
      (o: any) => o.type === "ITEM" && o.id === variation?.item_id,
    );

    return {
      service_name: parentItem?.item_data?.name ?? null,
      variation_name: variation?.name ?? null,
      // Square maneja el precio en la unidad mínima de la moneda (centavos para USD/PEN).
      price_amount: priceMoney?.amount != null ? priceMoney.amount / 100 : null,
      price_currency: priceMoney?.currency ?? null,
    };
  } catch (err) {
    console.error("[square-webhook] Excepción llamando Catalog API:", err);
    return null;
  }
}

// ── Handler principal ──────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signatureHeader = req.headers.get("x-square-hmacsha256-signature");

  const signatureKey = process.env.SIGNATURE_KEY;
  const notificationUrl = process.env.SQUARE_WEBHOOK_NOTIFICATION_URL;
  const n8nUrl = process.env.N8N_WEBHOOK_URL;

  if (!signatureKey || !notificationUrl || !n8nUrl || !process.env.SQUARE_ACCESS_TOKEN) {
    console.error("[square-webhook] Faltan variables de entorno requeridas");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const isValid = isValidSquareSignature(rawBody, signatureHeader, notificationUrl, signatureKey);
  if (!isValid) {
    console.warn("[square-webhook] Firma de Square inválida, se descarta la petición");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(rawBody);
  console.log(`[square-webhook] Evento recibido: type=${event.type} event_id=${event.event_id}`);

  const relevantEvents = ["booking.created", "booking.updated"];
  if (!relevantEvents.includes(event.type)) {
    console.log(`[square-webhook] Evento ignorado (tipo no relevante): ${event.type}`);
    return NextResponse.json({ received: true, ignored: true });
  }

  const booking = event.data?.object?.booking;

  if (booking?.status !== "ACCEPTED") {
    console.log(
      `[square-webhook] Evento ignorado (status=${booking?.status}, booking_id=${booking?.id})`,
    );
    return NextResponse.json({ received: true, ignored: true, status: booking?.status });
  }

  console.log(`[square-webhook] Booking ACCEPTED detectado: booking_id=${booking?.id}. Enriqueciendo datos...`);

  const firstSegment = booking?.appointment_segments?.[0];

  const [customer, teamMember, service] = await Promise.all([
    getCustomer(booking?.customer_id),
    getTeamMember(firstSegment?.team_member_id),
    getServiceVariation(firstSegment?.service_variation_id),
  ]);

  const payloadForN8n = {
    event_type: event.type,
    event_id: event.event_id,
    merchant_id: event.merchant_id,
    location_id: event.location_id,
    booking_id: booking?.id,
    status: booking?.status,
    start_at: booking?.start_at,
    customer_note: booking?.customer_note,
    created_at: booking?.created_at,
    customer,
    team_member: teamMember,
    service,
    // NOTA: el pago NO viene en el webhook de booking. Si el cliente paga
    // al reservar (checkout online), llega en un evento separado
    // (payment.updated / order.updated) que hay que escuchar aparte
    // y cruzar por booking_id u order_id.
  };

  console.log(
    "[square-webhook] Payload que se enviará a n8n:",
    JSON.stringify(payloadForN8n, null, 2),
  );

  try {
    const n8nResponse = await fetch(n8nUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payloadForN8n),
    });

    if (n8nResponse.ok) {
      console.log(
        `[square-webhook] ✅ Enviado a n8n correctamente (status ${n8nResponse.status}) para booking_id=${booking?.id}`,
      );
    } else {
      const errorText = await n8nResponse.text().catch(() => "<sin cuerpo>");
      console.error(
        `[square-webhook] ❌ n8n respondió con error (status ${n8nResponse.status}) para booking_id=${booking?.id}:`,
        errorText,
      );
    }
  } catch (err) {
    console.error(
      `[square-webhook] ❌ Excepción al llamar a n8n para booking_id=${booking?.id}:`,
      err,
    );
  }

  return NextResponse.json({ received: true });
}