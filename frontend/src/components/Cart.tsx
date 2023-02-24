import React from "react";
import { IoClose } from "react-icons/io5";
import { useShoppingCart } from "@/context/ShoppingCart";
import CartItem from "./CartItem";

interface CartProps {
  isOpen: boolean;
}

export default function Cart({ isOpen }: CartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  // console.log(cartItems);
  return (
    <div
      className={`absolute z-50 top-0 h-full bg-red-600 right-0 ${
        isOpen ? "w-96" : "w-0"
      }`}
    >
      <div className="bg-yellow-400 inline-block p-1" onClick={closeCart}>
        <IoClose size={28} />
      </div>
      <h1>cart</h1>

      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          quantity={item.quantity}
          title={item.title}
          image={item.image}
        />
      ))}
    </div>
  );
}
