"use client";

import { useCartStore } from "@/lib/cart-store";
import CartList from "../components/CartList";

export default function Cart() {
    const items = useCartStore((state) => state.items);

    return (
        <>
        <CartList />
        </>
    )
}