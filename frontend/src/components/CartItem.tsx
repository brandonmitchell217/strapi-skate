import React from "react";
import Image from "next/image";
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
    <div className="w-full flex justify-center items-center">
      <div className="h-24 w-24 relative mr-12">
        <Image
          src={`${base}${image}`}
          alt="image of product"
          fill={true}
          className="rounded-md"
        />
      </div>
      <div className="flex items-center gap-4">
        <h4>{title}</h4>
        <span className="font-light text-sm">x{quantity}</span>
      </div>
      <button
        className="p-1 cursor-pointer border ml-8 rounded-full text-warning border-warning"
        onClick={() => removeFromCart(id)}
      >
        <IoClose size={16} />
      </button>
    </div>
  );
}
