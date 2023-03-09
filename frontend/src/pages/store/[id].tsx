import React from "react";
import { fetchQuery } from "@/lib/util";
import { DataProps, ProductProps } from "@/lib/types";
import Image from "next/image";
import { base } from "@/lib/util";
import { useShoppingCart } from "@/context/ShoppingCart";

export default function ItemPage({ product }: ProductProps) {
  const { increaseCartQuantity } = useShoppingCart();
  const [quantity, setQuantity] = React.useState(1);
  const id = product.data.id;
  const title = product.data.attributes.title;
  const imageUrl = product.data.attributes.image?.data.attributes.url;
  const price = product.data.attributes.price;
  const category = product.data.attributes.category;

  // console.log(product);

  return (
    <section className="pt-24">
      <div className="max-w-6xl m-auto px-4 flex flex-col items-center justify-center sm:flex-row">
        <div className="">
          <Image
            src={`${base}${imageUrl}`}
            alt="ifdimfds"
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL={`${base}${imageUrl}`}
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center gap-6 sm:items-stretch">
          <div className="prose lg:prose-xl">
            <div>
              <h1>{title}</h1>
              <p>${price}</p>
            </div>
            {category === "deck" && <p>***grip not included</p>}
          </div>
          <div className="flex gap-4">
            <form className="flex justify-center items-center">
              <div
                className="px-2 cursor-pointer border"
                onClick={() =>
                  setQuantity(quantity > 0 ? quantity - 1 : quantity)
                }
              >
                -
              </div>
              <input
                className="input-xs w-[25px]"
                type="number"
                name="quantity"
                id="quantity"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <div
                className="px-2 cursor-pointer border"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </div>
            </form>
            <button
              className="btn btn-primary"
              onClick={() =>
                increaseCartQuantity(
                  id,
                  title,
                  imageUrl ? imageUrl : "",
                  quantity,
                  price ? price : 0
                )
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
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
  const paths = products.data.map((product: DataProps) => {
    return {
      params: { id: String(product.id) },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
