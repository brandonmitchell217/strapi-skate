import Head from "next/head";
import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { fetchQuery } from "@/lib/util";
import Layout from "@/layouts/Layout";
import ProductCard from "@/components/ProductCard";
import { Props, RestaurantProps, pagination, ProductProps } from "@/lib/types";
import Carousel from "@/components/Carousel";

export default function Home({ products }: ProductProps) {
  const data = products.data.map((product) => {
    return product.attributes;
  });

  // console.log(products);

  return (
    <>
      <Carousel />
      <h1 className="text-red-600 text-5xl">Home</h1>
      <div>
        <h2 className="font-bold text-3xl">Some products</h2>
        <div className="px-5 my-16 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 place-items-center gap-6">
          {products.data.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product?.attributes?.image?.data.attributes.url}
              title={product.attributes.title}
              price={product.attributes.price}
              category={product.attributes.category}
            />
          ))}
        </div>
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

// export const getStaticProps: GetStaticProps<any> = async () => {
//   const response = await fetch("http://localhost:1337/api/products");
//   const data = await response.json();

//   return {
//     props: {
//       products: data,
//     },
//   };
// };
