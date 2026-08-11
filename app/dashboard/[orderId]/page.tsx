import Link from "next/link";
import { auth } from "@/auth";
import { getOrderById } from "@/lib/orders";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

function formatMoney(money?: {
  amount?: bigint | number | null;
  currency?: string;
}) {
  if (!money?.amount) return "—";
  return `${(Number(money.amount) / 100).toFixed(2)} ${money.currency ?? ""}`;
}

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  const session = await auth();
  const squareCustomerId = session?.user?.squareCustomerId;

  if (!squareCustomerId) {
    return <p>You need to sign in to view this order.</p>;
  }

  let order;
  try {
    order = await getOrderById(orderId);
  } catch {
    return <p>We couldn&apos;t load this order. Please try again later.</p>;
  }

  if (!order) return notFound();
  if (order.customerId !== squareCustomerId) return notFound();

  const pagado = order.tenders && order.tenders.length > 0;
  const badge = pagado
    ? { label: "Paid", classes: "bg-[#DDF3E4] text-[#1E7A3D]" }
    : { label: "Pending", classes: "bg-thirdary text-primary-light" };

  return (
    <section className="w-full flex flex-col justify-start items-center min-h-screen bg-white">
      {/* Header */}
      <div className="w-full bg-black flex justify-center items-center py-6">
        <div className="container-full flex justify-between items-center">
          <Link href="/">
            <img
              src="/images/logo-white.svg"
              alt="Logo"
              className="h-12 w-auto"
              decoding="async"
              loading="lazy"
              width={158}
              height={48}
            />
          </Link>
          <LogoutButton />
        </div>
      </div>

      <div className="container-full flex flex-col py-12 gap-8 max-w-180">
        {/* Back */}
        <Link
          href="/dashboard"
          className="flex items-center gap-2 paragraph-small text-primary-light hover:text-primary transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to my purchases
        </Link>

        {/* Order header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-thirdary pb-8">
          <div>
            <h1 className="title-h3">Order</h1>
            <p className="paragraph-x-small text-primary-light mt-1">
              #{order.id?.slice(-8).toUpperCase()}
            </p>
            <p className="paragraph-small text-primary-light mt-2">
              {order.createdAt
                ? new Date(order.createdAt).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "—"}
            </p>
          </div>
          <span
            className={`paragraph-x-small px-4 py-1.5 rounded-full w-fit ${badge.classes}`}
          >
            {badge.label}
          </span>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-4">
          <h2 className="title-h6 uppercase text-primary-light">Products</h2>
          <ul className="flex flex-col divide-y divide-thirdary">
            {order.lineItems?.map((item, i) => {
              const imageUrl = item.metadata?.image_url;

              return (
                <li key={i} className="flex items-center gap-4 py-4">
                  <div className="w-16 h-16 rounded-lg bg-thirdary overflow-hidden flex-shrink-0">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={item.name ?? "Product"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center paragraph-x-small text-primary-light">
                        No image
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="paragraph-small">{item.name}</p>
                    <p className="paragraph-x-small text-primary-light">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="paragraph-small font-medium">
                    {formatMoney(item.totalMoney)}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Resumen de totales */}
        <div className="flex flex-col gap-2 border-t border-thirdary pt-6">
          {order.totalTaxMoney && Number(order.totalTaxMoney.amount) > 0 && (
            <div className="flex justify-between paragraph-small text-primary-light">
              <span>Taxes</span>
              <span>{formatMoney(order.totalTaxMoney)}</span>
            </div>
          )}
          <div className="flex justify-between title-h5 mt-2">
            <span>Total</span>
            <span>{formatMoney(order.totalMoney)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
