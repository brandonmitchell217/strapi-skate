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
  bg: string;
  header: string | undefined;
  subtitle: string | undefined;
  link1: string | undefined;
  link1_text: string | undefined;
  link2?: string | undefined;
  link2_text?: string | undefined;
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

  // console.log(slides);

  const Slide = (
    image: string,
    title: string | undefined,
    subtitle: string | undefined,
    link1: string | undefined,
    link_text1: string | undefined,
    link2?: string | undefined,
    link_text2?: string | undefined
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
          <div className="space-y-2 text-center">
            <h2 className="text-3xl lg:text-5xl">{title}</h2>
            {subtitle && <p className="text-sm text-gray-300">{subtitle}</p>}

            <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
              <Link href={link1 ?? ""} className="btn btn-primary btn-wide">
                {link_text1 ? link_text1 : "Check it out"}
              </Link>
              {link2 && (
                <Link
                  href={link2}
                  className="btn btn-outline text-white btn-wide"
                >
                  {link_text2 ? link_text2 : "See more"}
                </Link>
              )}
            </div>
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
                slide.bg,
                slide.header,
                slide.subtitle,
                slide.link1,
                slide.link1_text,
                slide.link2,
                slide.link2_text
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      meh
    </div>
  );
}
