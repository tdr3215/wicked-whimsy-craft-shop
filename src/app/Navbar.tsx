import logo from "@/assets/collections/logo/Wicked_Whimsy_Logo.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { LogoFont } from "./layout";
import { getCart } from "@/wix-api/cart";

const Navbar = async () => {
  const cart = await getCart();
  const totalQuantity =
    cart?.lineItems.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0;

  return (
    <header className="bg-secondary shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 p-5">
        <Link href={"/"} className="flex items-center gap-4">
          <Image
            src={logo}
            alt="wicked whimsy craft logo"
            width={60}
            height={60}
          />
          <span className={`text-xl font-bold ${LogoFont.className}`}>
            Wicked Whimsy Craft Shop
          </span>
        </Link>
        {totalQuantity} items in your cart.
      </div>
    </header>
  );
};

export default Navbar;
