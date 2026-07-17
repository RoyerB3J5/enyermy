import type { Metadata } from "next";
import { Merriweather, Figtree } from "next/font/google";
import "../../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/shop/CartDrawer";
import { hasLocale, locales } from "@/i18n/config";
import { getContent } from "@/i18n/content";
import { notFound } from "next/navigation";

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

  title: "Enyermy Studio Pro",
  description:
    "Enyermy Studio Pro is a leading provider of tree services, offering a comprehensive growth system and marketing automation solutions to help tree companies generate better leads and grow their business.",

  keywords: [
    "Tree Services",
    "Lead Generation",
    "Growth System",
    "Marketing Automation",
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
        <Header locale={locale} content={content.header} />
        {children}
        <Footer locale={locale} content={content.footer} />
        <CartDrawer />
      </body>
    </html>
  );
}
