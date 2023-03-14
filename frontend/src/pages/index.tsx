import { fetchQuery } from "@/lib/util";
import ProductCard from "@/components/ProductCard";
import { ProductsProps, Props } from "@/lib/types";
import Carousel from "@/components/Carousel";
import ProductInterstitialLayout from "@/layouts/ProductInterstitial";
import ImageCta from "@/components/ImageCta";
import { base } from "@/lib/util";

interface HomeProps {
  products: Props;
  images: any;
}

export default function Home({ products, images }: HomeProps) {
  const data = products.data.map((product) => {
    return product.attributes;
  });
  console.log(images);
  // console.log(products);

  return (
    <section className="pt-24">
      <Carousel image1={images.data[0].attributes.bg.data.attributes.url} />

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

      <ImageCta
        image={base + images.data[1].attributes.bg.data.attributes.url}
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

      <ImageCta
        image={base + images.data[0].attributes.bg.data.attributes.url}
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
  const images = await fetchQuery("interstitial-images", "?populate=*");

  return {
    props: {
      products,
      images,
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
