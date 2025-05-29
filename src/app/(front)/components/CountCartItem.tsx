"use client";

import { useCartStore } from "@/lib/cart-store";
import { useState, useEffect } from "react";

export default function CountCartItem() {
  const totalItems = useCartStore((state) => state.totalItems());
  const [ismounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
    }, []);

    if (!ismounted) { return null; }

    return (
    <>
      <span>{totalItems}</span>
    </>
  );
}