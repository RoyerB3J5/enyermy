"use client";
// src/hooks/useCart.ts
import { useCartStore } from "@/store/cart";
import { useEffect, useState } from "react";


export function useCart() {
  const [hydrated, setHydrated] = useState(false);
  const store = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
    setHydrated(true);
  }, []);

  return hydrated ? store : null;
}
