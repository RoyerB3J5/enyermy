import type { Metadata } from "next";
import { Merriweather, Figtree } from "next/font/google";
import "../../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/shop/CartDrawer";

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

  title: "Enyermy Studio Pro - Salon Experience",
  description:
    "Discover the ultimate salon experience with Enyermy Studio Pro.",

  keywords: [
    "Salon Experience",
    "Professional Hair Care",
    "Hair Treatments",
    "Hair Styling",
  ],

  authors: [{ name: "Enyermy Studio Pro" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      es: "/es",
    },
  },

  openGraph: {
    type: "website",
    images: [
      {
        url: "/images/fondo.png",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@EnyermyStudioPro",
    images: ["/images/fondo.png"],
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Orlando",
    "geo.position": "28.5383;-81.3792",
    ICBM: "28.5383, -81.3792",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      // Aquí volvemos a inyectar las variables de tus fuentes
      className={`${merriweather.variable} ${figtree.variable} font-family w-full h-full`}
    >
      {children}
    </div>
  );
}
