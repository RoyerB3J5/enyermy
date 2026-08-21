import type { Metadata } from "next";
import { Merriweather, Figtree } from "next/font/google";
import "../../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/shop/CartDrawer";
import ScrollAnimations from "@/components/ui/ScrollAnimations";
import { hasLocale, locales } from "@/i18n/config";
import { getContent } from "@/i18n/content";
import { notFound } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { getAllProducts } from "@/lib/catalog";
import { Suspense } from "react";
import ChatbotWidget from "@/components/layout/Chatbot";
import Popup from "@/components/sections/Popup";
import { SITE_URL } from "@/lib/seo";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Enyermy Studio Pro",
    template: "%s | Enyermy Studio Pro",
  },
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

  openGraph: {
    title: "Enyermy Studio Pro",
    description:
      "Enyermy Studio Pro offers professional hair care, salon services, and curated bundles designed to strengthen, hydrate, repair, and enhance every hair type.",
    url: SITE_URL,
    siteName: "Enyermy Studio Pro",
    images: [
      {
        url: "/images/portada.jpg", // Asegúrate de que esta ruta exista en /public
        width: 1200,
        height: 630,
        alt: "Enyermy Studio Pro Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Enyermy Studio Pro",
    description:
      "Enyermy Studio Pro offers professional hair care, salon services, and curated bundles designed to strengthen, hydrate, repair, and enhance every hair type.",
    site: "@EnyermyStudioPro",
    images: ["/images/portada.jpg"],
  },

  other: {
    "geo.region": "US-FL",
    "geo.placename": "Ocoee",
    "geo.position": "28.5695;-81.5441",
    ICBM: "28.5695, -81.5441",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const content = await getContent(locale);
  const searchProducts =
    process.env.SQUARE_ENVIRONMENT === "production"
      ? await getAllProducts()
      : undefined;

  return (
    <html
      lang={locale}
      className={`${merriweather.variable} ${figtree.variable} w-full h-full antialiased overflow-x-hidden`}
    >
      <head>
        <link rel="preconnect" href="https://widgets.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://widgets.leadconnectorhq.com" />
      </head>

      <body className="w-full font-family antialiased overflow-x-clip bg-white flex flex-col justify-center items-center ">
        <SessionProvider>
          <ScrollAnimations />
          <Header
            locale={locale}
            content={content.header}
            searchProducts={searchProducts}
          />
          {children}
          <Footer locale={locale} content={content.footer} />
          <Suspense fallback={null}>
            <CartDrawer />
          </Suspense>
          <ChatbotWidget />
          <Popup content={content.popup} />
        </SessionProvider>
      </body>
    </html>
  );
}
