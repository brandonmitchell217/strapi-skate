import React from "react";
import Image from "next/image";
import { ProductProps, Props } from "@/lib/types";
import { InferGetStaticPropsType } from "next";
import { base } from "@/lib/util";
import Link from "next/link";
import { useShoppingCart } from "@/context/ShoppingCart";

interface ProductCardProps {
  id: number;
  image: string | any;
  alt?: string;
  title: string;
  price?: number;
  category?: string;
}

export default function ProductCard({
  id,
  image,
  alt,
  title,
  price,
  category,
}: ProductCardProps) {
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <div className="max-w-xs w-1/3 border-2 shadow-lg">
      <div className="h-[300px] w-full relative">
        <Image
          src={`${base}${image}`}
          alt={alt ?? "image of product"}
          fill={true}
          //  placeholder="blur"
          //  blurDataURL={`${base}${image}`}
        />
      </div>
      <div className="p-3">
        <h3 className="font-bold">{title}</h3>
        <p>${price}</p>
        <button onClick={() => increaseCartQuantity(id, title, image)}>
          Add to cart
        </button>
        <span className="block text-[12px] text-gray-600">
          {category?.toLowerCase()}
        </span>
      </div>
    </div>
  );
}
