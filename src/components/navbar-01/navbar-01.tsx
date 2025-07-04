import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";
import {  ShoppingBasket } from "lucide-react";
import { Badge } from "../ui/badge" ;
import CountCartItem from "@/app/(front)/components/CountCartItem";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const Navbar01Page = async() => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  

  return (
    <div className="bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">

          

           {
             !session && (
              <>
                 <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/login">เข้าสู่ระบบ</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">สมัครสมาชิก</Link>
            </Button>
              </>
             )
           }

           { 
           session && (
            <>
            <Link href="/cart" className="flex items-center gap-2">
              <Badge className="p-2 text-sm">
                <ShoppingBasket />
                <CountCartItem/> items (s)
            </Badge>
          </Link>
          <p className="text-sm text-muted-foreground">
            Welcome my little brother, <strong>{session.user.name}</strong>
          </p>
            </>
           )}

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar01Page;
