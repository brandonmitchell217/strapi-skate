import Head from "next/head";
import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { fetchQuery } from "../lib/util";
import Layout from "@/layouts/Layout";
import ProductCard from "@/components/ProductCard";
import { Props, RestaurantProps, pagination, ProductProps } from "@/lib/types";

export default function Home({ products }: ProductProps) {
  const data = products.data.map((product) => {
    return product.attributes;
  });

  console.log(data);

  return (
    <Layout>
      <h1 className="text-red-600 text-5xl">Home</h1>
      <div>
        <h2 className="font-bold">Store</h2>
        <div className="px-5 flex gap-6">
          {data.map((product) => (
            <ProductCard
              key={product.title}
              image={product?.image?.data.attributes.url}
              alt="stuff"
              title={product.title}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </Layout>
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
