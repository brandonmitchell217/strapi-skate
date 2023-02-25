import React from "react";
import { IoClose } from "react-icons/io5";
import { useShoppingCart } from "@/context/ShoppingCart";
import CartItem from "./CartItem";
import { formatCurrency } from "@/lib/util";

interface CartProps {
  isOpen: boolean;
}

export default function Cart({ isOpen }: CartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  // console.log(cartItems);
  return (
    <div
      className={`absolute z-50 top-0 h-full bg-secondary text-base-100 right-0 ${
        isOpen ? "w-96" : "w-0"
      }`}
    >
      <div className="inline-block p-1 cursor-pointer" onClick={closeCart}>
        <IoClose size={28} />
      </div>
      <h1 className="font-bold text-3xl pl-2 pt-4 border-t-2">Cart</h1>
      <div className="px-2 pt-8 space-y-2">
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
      {/* <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = cartItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div> */}
    </div>
  );
}
