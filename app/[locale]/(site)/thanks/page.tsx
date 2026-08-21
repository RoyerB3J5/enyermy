import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    locale: "en",
    path: "thanks",
    title: {
      en: "Thank You for Your Order",
      es: "Gracias por tu Pedido",
    },
    description: {
      en: "Thank you for your purchase at Enyermy Studio Pro. We'll contact you soon to confirm your order.",
      es: "Gracias por tu compra en Enyermy Studio Pro. Te contactaremos pronto para confirmar tu pedido.",
    },
    noIndex: true,
  });
}

export default function Thanks() {
  return (
    <main className="w-full flex flex-col justify-center items-center pt-(--header-height)">
      <section className='flex flex-col justify-center items-center py-12 gap-6 text-primary'>
        <h1 className='title-h2'>Gracias por tu compra</h1>
        <p className='text-center paragraph font-medium'>Te contactaremos pronto para confirmar tu pedido.</p>
      </section>
      <CallEmail />
      <CarouselReview />
    </main>
  );
}
