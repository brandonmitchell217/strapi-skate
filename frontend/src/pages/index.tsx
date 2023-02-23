import Head from "next/head";
import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { fetchQuery } from "../lib/util";
import Layout from "@/layouts/Layout";
import { Props, RestaurantProps, pagination } from "@/lib/types";

export default function Home({ restaurants }: RestaurantProps) {
  const data = restaurants.data.map((att) => {
    return att.attributes;
  });

  // console.log(data);

  return (
    <Layout>
      <h1 className="text-red-600 text-5xl">Home</h1>
      {data.map((restaurant) => (
        <div key={restaurant.title}>
          <h1 className="text-xl font-bold">{restaurant.title}</h1>
          <h2>{restaurant.location}</h2>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const restaurants = await fetchQuery("restaurants");

  return {
    props: {
      restaurants,
    },
  };
}

// export const getStaticProps: GetStaticProps<any> = async () => {
//   const response = await fetch("http://localhost:1337/api/restaurants");
//   const data = await response.json();

//   return {
//     props: {
//       restaurants: data,
//     },
//   };
// };
