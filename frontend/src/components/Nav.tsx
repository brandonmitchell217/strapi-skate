import Link from "next/link";
import React from "react";
import { IoCart } from "react-icons/io5";
import { useShoppingCart } from "@/context/ShoppingCart";
import { HiUser } from "react-icons/hi";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";

export default function Nav() {
  const router = useRouter();
  const { openCart, cartQuantity } = useShoppingCart();

  const handleSignOut = () => {
    destroyCookie({}, "token");
    router.push("/sign-up");
  };
  return (
    <nav className="py-6 px-10 flex justify-between items-center relative">
      <div>
        <Link href={"/"}>
          <h1 className="font-bold">Logo</h1>
        </Link>
      </div>
      <div>
        <ul className="flex gap-8">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/team"}>Team</Link>
          </li>
          <li>
            <Link href={"/store"}>Store</Link>
          </li>
          <li onClick={() => router.push("/sign-up")}>
            <HiUser size={28} />
          </li>
          <li>
            <button onClick={handleSignOut}>Sign Out</button>
          </li>
          <li className="relative cursor-pointer" onClick={openCart}>
            <IoCart size={28} />
            <div className="bg-red-600 rounded-full h-4 w-4 absolute z-10 bottom-0 right-0 text-white text-[10px] flex justify-center items-center">
              {cartQuantity < 0 ? 0 : cartQuantity}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
