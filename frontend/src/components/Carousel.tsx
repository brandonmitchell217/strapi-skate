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
    <div className="h-screen">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="h-full w-full"
      >
        <SwiperSlide className="">Slide 1</SwiperSlide>
        <SwiperSlide className="">Slide 2</SwiperSlide>
        <SwiperSlide className="">Slide 3</SwiperSlide>
        <SwiperSlide className="">Slide 4</SwiperSlide>
        <SwiperSlide className="">Slide 5</SwiperSlide>
        <SwiperSlide className="">Slide 6</SwiperSlide>
        <SwiperSlide className="">Slide 7</SwiperSlide>
        <SwiperSlide className="">Slide 8</SwiperSlide>
        <SwiperSlide className="">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
