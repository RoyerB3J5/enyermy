import { Merriweather, Figtree } from "next/font/google";
import "../../../globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

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
