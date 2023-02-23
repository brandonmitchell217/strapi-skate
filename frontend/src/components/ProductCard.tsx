import React from "react";
import Image from "next/image";
import { ProductProps, Props } from "@/lib/types";
import { InferGetStaticPropsType } from "next";
import { base } from "@/lib/util";

interface ProductCardProps {
  key: number | string | undefined;
  image: string | any;
  alt?: string;
  title?: string;
  price?: number;
  category?: string;
}

export default function ProductCard({
  key,
  image,
  alt,
  title,
  price,
  category,
}: ProductCardProps) {
  return (
    <div className="max-w-xs w-1/3 border-2 shadow-lg" key={key}>
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
        <span>{category}</span>
      </div>
    </div>
  );
}
