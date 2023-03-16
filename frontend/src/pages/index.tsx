import { fetchQuery } from "@/lib/util";
import ProductCard from "@/components/ProductCard";
import { ProductsProps, Props } from "@/lib/types";
import Carousel from "@/components/Carousel";
import ProductInterstitialLayout from "@/layouts/ProductInterstitial";
import ImageCta from "@/components/ImageCta";
import { base } from "@/lib/util";

interface HomeProps {
  products: Props;
  interstitialImages: Props;
  heroSliders: Props;
}

export default function Home({
  products,
  interstitialImages,
  heroSliders,
}: HomeProps) {
  // const data = images.data.map((image) => {
  //   return image.attributes;
  // });
  // console.log(images);
  // console.log(heroSliders);

  const slides = heroSliders.data.map((slide) => {
    const attributes = slide.attributes;

    return {
      bg: base + attributes.bg?.data?.attributes.url,
      header: attributes.header,
      subtitle: attributes.subtitle,
      link1: attributes.link1,
      link1_text: attributes.link1_text,
      link2: attributes.link2,
      link2_text: attributes.link2_text,
    };
  });

  // console.log(slides);

  return (
    <section className="pt-24">
      <Carousel {...{ slides }} />

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
        image={
          base + interstitialImages.data[1].attributes.bg?.data?.attributes.url
        }
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
        image={
          base + interstitialImages.data[0].attributes.bg?.data?.attributes.url
        }
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
  const interstitialImages = await fetchQuery(
    "interstitial-images",
    "?populate=*"
  );
  const heroSliders = await fetchQuery("hero-sliders", "?populate=*");

  return {
    props: {
      products,
      interstitialImages,
      heroSliders,
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
