import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import { base } from "@/lib/util";
import Link from "next/link";
import { Props, ImageProps } from "@/lib/types";

interface SlideProps {
  bg: any;
  image: any;
  header: any;
  subtitle: any;
  link1?: any;
  link1_text?: any;
  link2?: any;
  link2_text?: any;
}

interface CarouselProps {
  slides: SlideProps[];
}

export default function Carousel({ slides }: CarouselProps) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  console.log(slides);

  const Slide = (
    image: any,
    title: string,
    subtitle: any,
    link: string,
    link_text?: string
  ) => {
    return (
      <div className="h-full flex justify-end items-center relative">
        <Image
          src={image}
          alt={`Background image for ${title} carousel slide`}
          fill={true}
          placeholder="blur"
          blurDataURL={image}
        />
        <div className="relative z-10 w-1/2 flex justify-center">
          <div className="space-y-12 text-center">
            <h2 className="text-5xl">{title}</h2>
            {subtitle && <p className="text-sm text-gray-300">{subtitle}</p>}
            <Link href={link} className="btn btn-primary">
              {link_text ? link_text : "Check it out"}
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
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index} className="bg-black text-white">
              {Slide(
                slide?.bg,
                slide?.header,
                slide?.subtitle,
                slide?.link1,
                slide?.link1_text
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      meh
    </div>
  );
}
