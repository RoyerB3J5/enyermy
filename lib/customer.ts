import { randomUUID } from "crypto";
import { square } from "./square";

export async function getOrCreateSquareCustomer({
  email,
  givenName,
  familyName,
}: {
  email: string;
  givenName?: string;
  familyName?: string;
}): Promise<string> {
  try {
    const searchResult = await square.customers.search({
      query: { filter: { emailAddress: { exact: email } } },
    });

    const existing = searchResult.customers?.[0];
    if (existing?.id) return existing.id;

    const createResult = await square.customers.create({
      idempotencyKey: randomUUID(),
      emailAddress: email,
      givenName,
      familyName,
    });

    if (!createResult.customer?.id) {
      throw new Error("Square no devolvió un ID de cliente");
    }

    return createResult.customer.id;
  } catch (error) {
    console.error("[getOrCreateSquareCustomer] Error:", error);
    throw error; // se propaga para que quien la llame decida qué hacer (ver sección 2.2)
  }
}
