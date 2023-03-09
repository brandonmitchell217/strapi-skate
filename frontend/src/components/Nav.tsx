import Link from "next/link";
import React from "react";
import { IoCart } from "react-icons/io5";
import { useShoppingCart } from "@/context/ShoppingCart";
import { HiUser } from "react-icons/hi";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { useAuth } from "@/context/AuthContext";

export default function Nav() {
  const router = useRouter();
  const { openCart, cartQuantity } = useShoppingCart();
  const { user, signOut } = useAuth();
  const [logSign, setLogSign] = React.useState(false);

  const handleSignOut = () => {
    signOut();
    router.push("/sign-in");
  };

  return (
    <nav className="py-6 px-10 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-base-100">
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
          <li className="cursor-pointer" onClick={() => setLogSign(!logSign)}>
            <HiUser size={28} />
            <div
              className={`absolute top-20 right-10 z-50 p-6 w-64 flex flex-col gap-4 border-2 bg-white ${
                logSign ? "visible" : "hidden"
              }`}
            >
              <button
                className="btn btn-primary"
                onClick={() => {
                  user ? handleSignOut() : router.push("/sign-in");
                }}
              >
                {user ? "Log Out" : "Log In"}
              </button>
              {!user && (
                <button
                  className="btn btn-outline"
                  onClick={() => router.push("/sign-up")}
                >
                  Sign Up
                </button>
              )}
            </div>
          </li>
          <li className="relative cursor-pointer" onClick={openCart}>
            <IoCart size={28} />
            <div className="bg-red-600 rounded-full h-4 w-4 absolute z-10 bottom-0 right-0 text-white text-[10px] flex justify-center items-center">
              {cartQuantity < 1 ? 0 : cartQuantity}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
