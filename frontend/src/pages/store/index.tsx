import React from "react";
import { fetchQuery } from "@/lib/util";
import { Props, ProductsProps, pagination } from "@/lib/types";
import Layout from "@/layouts/Layout";
import ProductCard from "@/components/ProductCard";
import ProductInterstitialLayout from "@/layouts/ProductInterstitial";

export default function Store({ products }: ProductsProps) {
  // const data = products.data.map((prod) => {
  //   return prod.attributes;
  // });

  // console.log(products);

  return (
    // <section className="pt-24">
    //   <h1>Store</h1>
    //   <div className="px-5 my-16 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 place-items-center gap-6">
    //     {products.data.map((product) => (
    //       <ProductCard
    //         id={product.id}
    //         title={product.attributes.title}
    //         image={product?.attributes?.image?.data.attributes.url}
    //         price={product.attributes.price}
    //         category={product.attributes.category}
    //       />
    //     ))}
    //   </div>
    // </section>
    <ProductInterstitialLayout title="Store">
      {products.data.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.attributes.title}
          image={product?.attributes?.image?.data.attributes.url}
          price={product.attributes.price}
          category={product.attributes.category}
        />
      ))}
    </ProductInterstitialLayout>
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
