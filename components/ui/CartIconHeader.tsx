"use client";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
export default function CartIconHeader() {
  const cartStore = useCart(); // <--- Consumimos el hook seguro

  const totalItems = cartStore ? cartStore.getTotalItems() : 0;
  const openCart = cartStore ? cartStore.openCart : () => {};

  return (
    <button
      onClick={openCart}
      className="w-10.5 h-10.5 flex justify-center items-center cursor-pointer relative"
    >
      <Image
        src="/images/cart.svg"
        alt="Carrito"
        width="12"
        height="14"
        className="w-3 h-auto block"
      />

      {totalItems > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
}
