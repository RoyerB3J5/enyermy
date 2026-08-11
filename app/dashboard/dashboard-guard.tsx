"use client";

import { redirect, usePathname } from "next/navigation";

export default function DashboardGuard({
  isAuthenticated,
  children,
}: {
  isAuthenticated: boolean;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/dashboard/login";

  if (!isAuthenticated && !isLoginPage) {
    redirect("/dashboard/login");
  }

  return <>{children}</>;
}
