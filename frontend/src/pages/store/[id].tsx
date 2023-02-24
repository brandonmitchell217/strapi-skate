import React from "react";
import { fetchQuery } from "@/lib/util";
import { ProductProps, Props } from "@/lib/types";
import Layout from "@/layouts/Layout";

export default function ItemPage({ product }: any) {
  console.log(product);
  return (
    <Layout>
      <div>
        <h1>{product.data.attributes.title}</h1>
        <p>{product.data.attributes.price}</p>
      </div>
    </Layout>
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
