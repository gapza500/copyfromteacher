"use client";

import { Table, TableHead, TableRow, TableBody, TableHeader, TableCell } from "@/components/ui/table";
import { useCartStore } from "@/lib/cart-store";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartList() {

    const router = useRouter();

    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const clearCart = useCartStore((state) => state.clearCart);
    const totalPrice = useCartStore((state) => state.totalPrice);

    if (items.length === 0) {
        return (
            <div className="max-w-4xl mx-auto mt-20">
                <h1 className="text-xl mb-4">ตะกร้าสินค้า</h1>
                <p className="text-muted-foreground text-center">ไม่มีสินค้าในตะกร้า</p>
            </div>
        );
    }


    return (
    <div className="max-w-4xl mx-auto mt-20">
      <h1 className="text-xl mb-4">ตะกร้าสินค้า</h1>
      <Table>
        <TableHeader>
            <TableRow>
                <TableHead>รหัสสินค้า</TableHead>
                <TableHead>ชื่อสินค้า</TableHead>
                <TableHead>ราคา</TableHead>
                <TableHead>จำนวน</TableHead>
                <TableHead>รวม</TableHead>
                
            </TableRow>
        </TableHeader>
        <TableBody>
            {
            items.map((i) => (
                <TableRow key={i.productId}>
                    <TableCell>{i.productId}</TableCell>
                    <TableCell>{i.title}</TableCell>
                    <TableCell>{i.price.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}</TableCell>
                    <TableCell>{i.qty}</TableCell>
                    <TableCell>{(i.price * i.qty).toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}</TableCell>
                    <TableHead>
                        <button onClick={() => removeItem(i.productId)} className="text-red-500 hover:text-red-700">
                            <Trash className="w-4 h-4" />
                        </button>
                    </TableHead>
                </TableRow>
            ))}
        </TableBody>
    </Table>

            <div className="mt-4 text-right">
                <div className="text-lg font-semibold">
                    ยอดรวม: {totalPrice().toLocaleString('th-TH', { style: 'currency', currency: 'THB', minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <br />
                <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    ล้างตะกร้า
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
                onClick={() => {
                    clearCart();
                    router.replace('/checkout'); // เปลี่ยนเส้นทางไปยังหน้าชำระเงิน
                }}>
                    ชำระเงิน
                </button>
            </div>

    </div>
  );
}