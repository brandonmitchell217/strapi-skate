import React from "react";
import { fetchQuery } from "@/lib/util";
import { Props, ProductProps, pagination } from "@/lib/types";
import Layout from "@/layouts/Layout";
import ProductCard from "@/components/ProductCard";

export default function Store({ products }: ProductProps) {
  // const data = products.data.map((prod) => {
  //   return prod.attributes;
  // });

  // console.log(products);

  return (
    <>
      <h1>Store</h1>
      <div className="px-5 my-16 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 place-items-center gap-6">
        {products.data.map((product) => (
          <ProductCard
            id={product.id}
            title={product.attributes.title}
            image={product?.attributes?.image?.data.attributes.url}
            price={product.attributes.price}
            category={product.attributes.category}
          />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const products = await fetchQuery("products", "?populate=*");

  return {
    props: {
      products,
    },
  };
}
