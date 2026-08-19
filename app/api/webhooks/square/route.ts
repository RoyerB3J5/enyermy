import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// ── Variables de entorno requeridas ──────────────────────────────────────
// SQUARE_WEBHOOK_SIGNATURE_KEY -> la "Signature Key" que Square genera
//                                  al crear el endpoint del webhook.
// SQUARE_WEBHOOK_NOTIFICATION_URL -> la URL EXACTA (con https) que registraste
//                                  en el Square Dashboard para este endpoint.
//                                  Se usa para recalcular la firma.
// N8N_WEBHOOK_URL -> la URL del nodo "Webhook" de tu workflow en n8n
//                                  (la de producción, no la de test).
// ──────────────────────────────────────────────────────────────────────────

function isValidSquareSignature(
  rawBody: string,
  signatureHeader: string | null,
  notificationUrl: string,
  signatureKey: string,
): boolean {
  if (!signatureHeader) return false;

  // Square firma: HMAC-SHA256( url + rawBody ) usando la signature key, en base64
  const hmac = crypto.createHmac("sha256", signatureKey);
  hmac.update(notificationUrl + rawBody);
  const expectedSignature = hmac.digest("base64");

  // Comparación segura contra timing attacks
  const a = Buffer.from(expectedSignature);
  const b = Buffer.from(signatureHeader);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export async function POST(req: NextRequest) {
  // 1. Leer el body crudo (NO parsear a JSON todavía, se necesita el string exacto para validar la firma)
  const rawBody = await req.text();
  const signatureHeader = req.headers.get("x-square-hmacsha256-signature");

  const signatureKey = process.env.SIGNATURE_KEY;
  const notificationUrl = process.env.SQUARE_WEBHOOK_NOTIFICATION_URL;
  const n8nUrl = process.env.N8N_WEBHOOK_URL;

  if (!signatureKey || !notificationUrl || !n8nUrl) {
    console.error("Faltan variables de entorno requeridas");
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 },
    );
  }

  // 2. Validar que la petición realmente viene de Square
  const isValid = isValidSquareSignature(
    rawBody,
    signatureHeader,
    notificationUrl,
    signatureKey,
  );

  if (!isValid) {
    console.warn("Firma de Square inválida, se descarta la petición");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  // 3. Ahora sí parsear el JSON
  const event = JSON.parse(rawBody);

  // 4. Filtrar: solo nos interesa cuando se crea una reserva
  //    (agrega "booking.updated" al array si también quieres detectar cancelaciones/cambios)
  const relevantEvents = ["booking.created"];
  if (!relevantEvents.includes(event.type)) {
    // Respondemos 200 igual, Square espera un 2xx aunque no hagamos nada con el evento
    return NextResponse.json({ received: true, ignored: true });
  }

  const booking = event.data?.object?.booking;

  // 5. Armar el payload que le mandamos a n8n (puedes agregar más campos si los necesitas)
  const payloadForN8n = {
    event_type: event.type,
    event_id: event.event_id,
    merchant_id: event.merchant_id,
    location_id: event.location_id,
    booking_id: booking?.id,
    status: booking?.status,
    start_at: booking?.start_at,
    customer_id: booking?.customer_id,
    customer_note: booking?.customer_note,
    appointment_segments: booking?.appointment_segments,
    created_at: booking?.created_at,
  };

  // 6. Reenviar a n8n
  try {
    const n8nResponse = await fetch(n8nUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payloadForN8n),
    });

    if (!n8nResponse.ok) {
      console.error("n8n respondió con error:", n8nResponse.status);
      // Igual respondemos 200 a Square para que no reintente indefinidamente;
      // el error de n8n se maneja/loguea aparte.
    }
  } catch (err) {
    console.error("Error llamando a n8n:", err);
  }

  // 7. Responder rápido a Square (debe ser 2xx dentro de 10 segundos)
  return NextResponse.json({ received: true });
}
