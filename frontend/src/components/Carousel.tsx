import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import { base } from "@/lib/util";
import Link from "next/link";

interface CarouselProps {
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

export default function Carousel({
  image1,
  image2,
  image3,
  image4,
}: CarouselProps) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="h-[260px] sm:h-[300px] md:h-[375px] lg:h-[550px]">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="h-full w-full"
      >
        <SwiperSlide className="bg-black text-white">
          <div className="h-full flex justify-end items-center relative">
            <Image src={base + image1} alt="potatoes" fill={true} />
            <div className="relative z-10 w-1/2 flex justify-center">
              <div className="space-y-12 text-center">
                <h1 className="text-5xl">Slide 1</h1>
                <Link href="/" className="btn btn-primary">
                  A link
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-black text-white">
          <div className="h-full flex justify-center items-center">
            <h1 className="text-5xl">Slide 2</h1>
          </div>
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
