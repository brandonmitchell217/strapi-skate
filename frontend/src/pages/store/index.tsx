import React from "react";
import { fetchQuery } from "@/lib/util";
import { Props, ProductProps, pagination } from "@/lib/types";
import Layout from "@/layouts/Layout";

export default function Store({ products }: ProductProps) {
  const data = products.data.map((prod) => {
    return prod.attributes;
  });

  return (
    <Layout>
      <h1>Store</h1>
      {data.map((product) => (
        <div key={product.title}>
          <h1>{product.title}</h1>
        </div>
      ))}
    </Layout>
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
