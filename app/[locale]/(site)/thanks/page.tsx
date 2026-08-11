import CallEmail from "@/components/sections/CallEmail";
import CarouselReview from "@/components/sections/CarouselReview";

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
