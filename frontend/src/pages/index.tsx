import Head from "next/head";
import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { fetchQuery } from "@/lib/util";
import Layout from "@/layouts/Layout";
import ProductCard from "@/components/ProductCard";
import { Props, RestaurantProps, pagination, ProductsProps } from "@/lib/types";
import Carousel from "@/components/Carousel";
import ProductInterstitialLayout from "@/layouts/ProductInterstitial";
import ImageCta from "@/components/ImageCta";

export default function Home({ products }: ProductsProps) {
  const data = products.data.map((product) => {
    return product.attributes;
  });

  // console.log(products);

  /* {products.data.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product?.attributes?.image?.data.attributes.url}
              title={product.attributes.title}
              price={product.attributes.price}
              category={product.attributes.category}
            />
          ))} */

  return (
    <section className="pt-24">
      <Carousel />

      <ProductInterstitialLayout title="Decks">
        {products.data
          .filter((product) => product.attributes.category === "deck")
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product?.attributes?.image?.data.attributes.url}
              title={product.attributes.title}
              price={product.attributes.price}
              category={product.attributes.category}
            />
          ))}
      </ProductInterstitialLayout>
      {/* <div className="bg-red-600 h-[260px] sm:h-[300px] md:h-[375px] lg:h-[450px] w-full"></div> */}
      <ImageCta
        image="/slide2.jpg"
        alt="skater dude"
        title="title"
        subtitle="subtitle"
        link="https://google.com"
        linkText="link text"
        className="justify-end flex"
        contentClassName="flex justify-center items-start gap-4 flex-col h-full w-3/4 m-auto"
      />
      <ProductInterstitialLayout title="Shoes">
        {products.data
          .filter((product) => product.attributes.category === "shoes")
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product?.attributes?.image?.data.attributes.url}
              title={product.attributes.title}
              price={product.attributes.price}
              category={product.attributes.category}
            />
          ))}
      </ProductInterstitialLayout>
      {/* <div className="bg-red-600 h-[260px] sm:h-[300px] md:h-[375px] lg:h-[450px] w-full"></div> */}
      <ImageCta
        image="/slide1.jpg"
        alt="skater dude"
        title="title"
        subtitle="subtitle"
        link="https://google.com"
        linkText="link text"
        className="justify-end flex"
        contentClassName="flex justify-center items-center gap-4 flex-col h-full w-full lg:w-1/2"
      />
    </section>
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
