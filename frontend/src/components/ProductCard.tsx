import React from "react";
import Image from "next/image";
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
    <div className="card card-compact w-full xl:w-80 bg-base-100 shadow-xl">
      <Link href={`/store/${id}`}>
        <Image
          src={`${base}${image}`}
          alt={alt ?? "image of product"}
          width={300}
          height={300}
          className="m-auto"
          //  placeholder="blur"
          //  blurDataURL={`${base}${image}`}
        />
      </Link>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>${price}</p>
        <span className="block text-[12px]">{category?.toLowerCase()}</span>
        <button
          onClick={() => increaseCartQuantity(id, title, image)}
          className={`btn btn-primary`}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
