import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function Carousel() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="h-[550px]">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="h-full w-full"
      >
        <SwiperSlide className="bg-black text-white">
          <div className="h-full flex justify-center items-center">
            <h1 className="text-5xl">Slide 1</h1>
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
