import Link from "next/link";
import { auth } from "@/auth";
import { getCustomerOrders } from "@/lib/orders";
import { LogoutButton } from "@/components/auth/LogoutButton";

function formatMoney(money?: {
  amount?: bigint | number | null;
  currency?: string;
}) {
  if (!money?.amount) return "—";
  return `${(Number(money.amount) / 100).toFixed(2)} ${money.currency ?? ""}`;
}

function estadoBadge(order: any) {
  const pagado = order.tenders && order.tenders.length > 0;
  return pagado
    ? { label: "Paid", classes: "bg-[#DDF3E4] text-[#1E7A3D]" }
    : { label: "Pending", classes: "bg-thirdary text-primary-light" };
}

export default async function MisComprasPage() {
  const session = await auth();
  const squareCustomerId = session?.user?.squareCustomerId;

  if (!squareCustomerId) {
    return <p>You need to sign in to view your purchases.</p>;
  }

  let orders;
  try {
    orders = await getCustomerOrders(squareCustomerId);
  } catch {
    return (
      <p>
        We couldn&apos;t load your purchases right now. Try reloading the page
        in a few minutes.
      </p>
    );
  }

  const totalGastado = orders.reduce(
    (acc, o) => acc + (o.totalMoney ? Number(o.totalMoney.amount) : 0),
    0,
  );
  const nombreCliente = session.user?.name?.split(" ")[0] ?? "";
  const iniciales = (session.user?.name ?? "?")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

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

      <div className="container-full flex flex-col py-12 gap-10">
        {/* Welcome + summary */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-thirdary pb-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center paragraph font-medium text-primary">
              {iniciales}
            </div>
            <div>
              <h1 className="title-h3">Hi, {nombreCliente}</h1>
              <p className="paragraph text-primary-light">
                {session.user?.email}
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div>
              <p className="paragraph-x-small text-primary-light uppercase">
                Orders
              </p>
              <p className="title-h5">{orders.length}</p>
            </div>
            <div>
              <p className="paragraph-x-small text-primary-light uppercase">
                Total spent
              </p>
              <p className="title-h5">
                {formatMoney({
                  amount: totalGastado,
                  currency: orders[0]?.totalMoney?.currency ?? "USD",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Order list */}
        <div className="flex flex-col gap-4">
          <h2 className="title-h5">My purchases</h2>

          {orders.length > 0 ? (
            <ul className="flex flex-col gap-4">
              {orders.map((order) => {
                const badge = estadoBadge(order);
                const primerItem = order.lineItems?.[0];
                const itemsExtra = (order.lineItems?.length ?? 1) - 1;

                return (
                  <li key={order.id}>
                    <Link
                      href={`/dashboard/${order.id}`}
                      className="flex items-center justify-between gap-6 rounded-2xl border border-thirdary px-6 py-5 hover:border-primary-light transition-colors"
                    >
                      <div className="flex flex-col gap-1">
                        <p className="paragraph-small">
                          {primerItem?.name ?? "Order"}
                          {itemsExtra > 0 && (
                            <span className="text-primary-light">
                              {" "}
                              + {itemsExtra} more
                            </span>
                          )}
                        </p>
                        <p className="paragraph-x-small text-primary-light">
                          {order.createdAt
                            ? new Date(order.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                },
                              )
                            : "—"}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <span
                          className={`paragraph-x-small px-3 py-1 rounded-full ${badge.classes}`}
                        >
                          {badge.label}
                        </span>
                        <p className="paragraph-small font-medium min-w-[80px] text-right">
                          {formatMoney(order.totalMoney ?? undefined)}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="rounded-2xl border border-thirdary px-6 py-12 flex flex-col items-center gap-2 text-center">
              <p className="paragraph text-primary-light">
                You don&apos;t have any registered purchases yet.
              </p>
              <Link href="/" className="paragraph-small underline">
                Go to the store
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
