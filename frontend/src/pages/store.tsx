import React from "react";
import { fetchQuery } from "../lib/util";
import { Props, ProductProps, pagination } from "@/lib/types";

export default function Store({ products }: ProductProps) {
  const data = products.data.map((prod) => {
    return prod.attributes;
  });

  return (
    <div>
      <h1>Store</h1>
      {data.map((product) => (
        <div key={product.title}>
          <h1>{product.title}</h1>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const products = await fetchQuery("products");

  return {
    props: {
      products,
    },
  };
}
