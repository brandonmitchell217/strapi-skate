import React from "react";
import { fetchQuery } from "@/lib/util";
import { ProductProps, Props } from "@/lib/types";
import Image from "next/image";
import { base } from "@/lib/util";
import { useShoppingCart } from "@/context/ShoppingCart";

export default function ItemPage({ product }: any) {
  const { increaseCartQuantity } = useShoppingCart();
  let id: number = product.data.id;
  let title: string = product.data.attributes.title;
  let imageUrl: string = product.data.attributes.image.data.attributes.url;

  // console.log(product);

  return (
    <>
      <div className="max-w-6xl m-auto px-4 flex flex-col items-center justify-center sm:flex-row">
        <div className="">
          <Image
            src={`${base}${product.data.attributes.image.data.attributes.url}`}
            alt="ifdimfds"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center gap-6 sm:items-stretch">
          <div className="prose lg:prose-xl">
            <div>
              <h1>{product.data.attributes.title}</h1>
              <p>${product.data.attributes.price}</p>
            </div>
            <p>***grip not included</p>
          </div>
          <button
            className="max-w-md w-full btn btn-primary"
            onClick={() => increaseCartQuantity(id, title, imageUrl)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }: any) {
  const product = await fetchQuery("products", `${params.id}?populate=*`);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const products = await fetchQuery("products", "?populate=*");
  const paths = products.data.map((product: any) => {
    return {
      params: { id: String(product.id) },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
