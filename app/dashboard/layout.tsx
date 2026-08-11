import { Merriweather, Figtree } from "next/font/google";
import "../globals.css";
import { Metadata } from "next";
import { auth } from "@/auth";
import DashboardGuard from "./dashboard-guard";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://enyermystudio.com"),

  title: "Client Account - Enyermy Studio Pro",
  description:
    "Enyermy Studio Pro offers professional hair care, salon services, and curated bundles designed to strengthen, hydrate, repair, and enhance every hair type.",

  keywords: [
    "Professional Hair Care",
    "Salon Services",
    "Hair Bundles",
    "Hair Repair",
    "Hair Hydration",
    "Curl Care",
    "Hair Color Solutions",
  ],

  authors: [{ name: "Enyermy Studio Pro" }],

  robots: {
    index: true,
    follow: true,
  },
};

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${figtree.variable} w-full h-full antialiased overflow-x-hidden`}
    >
      <body className="w-full font-family antialiased overflow-x-clip bg-white flex flex-col justify-center items-center">
        <DashboardGuard isAuthenticated={!!session}>{children}</DashboardGuard>
      </body>
    </html>
  );
}
