/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { ChevronRight } from "lucide-react";

export default function CartButton({ products }: any ) {
    const addItem = useCartStore((state) => state.addItem);

    const handleAddItem = () => {
        addItem({
            productId: products.id,
            title: products.title,
            price: products.price,
            qty: 1,
        });
    }
    return (
        <>
            <Button className ="mt-6 shadow-none" onClick={handleAddItem}>
                หยิบใส่ตะกร้า <ChevronRight />
            </Button>
        </>
    )
}