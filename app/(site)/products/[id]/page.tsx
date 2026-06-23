import CarouselReview from "@/components/sections/CarouselReview";
import AddInfo from "@/components/sections/producstItem/AddInfo";
import CalllAction from "@/components/sections/producstItem/CalllAction";
import MainInfo from "@/components/sections/producstItem/MainInfo";
import Recomendations from "@/components/sections/producstItem/Recomendations";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: "Products | Enyermy Studio Pro",
  description: "Complete catalog of products",
};
export default async function ProductsItem({ params }: Props) {
  const { id } = await params;
  return (
    <main className='w-full flex flex-col justify-center items-center'>
      <MainInfo />
      <AddInfo />
      <Recomendations />
      <CalllAction />
      <CarouselReview />
    </main>
  );
}
