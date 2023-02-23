import React from "react";
import { useShoppingCart } from "@/context/ShoppingCart";
import { IoClose } from "react-icons/io5";
import { base } from "@/lib/util";
interface CartItemProps {
  id: number;
  quantity: number;
  title: string;
  image: string;
}

export default function CartItem({
  id,
  quantity,
  title,
  image,
}: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

  return (
    <div className="w-full px-3 flex justify-between items-center">
      <img
        src={`${base}${image}`}
        alt="image of product"
        className="h-24 w-auto"
      />
      <div className="flex items-center gap-4">
        <h4>{title}</h4>
        <span className="font-light text-sm">x{quantity}</span>
      </div>
      <button
        className="h-4 cursor-pointer border"
        onClick={() => removeFromCart(id)}
      >
        <IoClose size={16} />
      </button>
    </div>
  );
}
