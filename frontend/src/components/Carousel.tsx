import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import { base } from "@/lib/util";
import Link from "next/link";
import { Props } from "@/lib/types";

interface CarouselProps {
  image1?: string | any;
  image2?: string | any;
  image3?: string | any;
  image4?: string | any;
  images?: Props[];
  props?: any;
}

export default function Carousel({
  image1,
  image2,
  image3,
  image4,
  images = [],
  props,
}: CarouselProps) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  console.log(props);

  const Slide = (
    image: any,
    title: string,
    link: string,
    button_text?: string
  ) => {
    return (
      <div className="h-full flex justify-end items-center relative">
        <Image src={base + image} alt="potatoes" fill={true} />
        <div className="relative z-10 w-1/2 flex justify-center">
          <div className="space-y-12 text-center">
            <h2 className="text-5xl">{title}</h2>
            <Link href={link} className="btn btn-primary">
              {button_text ? button_text : "Check It Out"}
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-[300px] md:h-[375px] lg:h-[550px]">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="h-full w-full"
      >
        <SwiperSlide className="bg-black text-white">
          {Slide(image1, "Slide 1", "/")}
        </SwiperSlide>
        <SwiperSlide className="bg-black text-white">
          {Slide(image2, "Slide 2", "/")}
        </SwiperSlide>
        <SwiperSlide className="bg-black text-white">
          <div className="h-full flex justify-center items-center">
            <h1 className="text-5xl">Slide 3</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-black text-white">
          <div className="h-full flex justify-center items-center">
            <h1 className="text-5xl">Slide 4</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
