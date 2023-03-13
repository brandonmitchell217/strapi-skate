import React, { useState } from "react";
import SwiperCore, { Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/modules/thumbs/thumbs.min.css";
import ReactPlayer from "react-player";

SwiperCore.use([Thumbs]);

function ThumbGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <>
      <Swiper thumbs={{ swiper: thumbsSwiper }}>
        <SwiperSlide>
          <ReactPlayer url={"https://www.youtube.com/watch?v=N3s18dPCuVw"} />
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer url={"https://www.youtube.com/watch?v=N3s18dPCuVw"} />
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer url={"https://www.youtube.com/watch?v=N3s18dPCuVw"} />
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer url={"https://www.youtube.com/watch?v=N3s18dPCuVw"} />
        </SwiperSlide>
      </Swiper>
      <Swiper onSwiper={setThumbsSwiper} spaceBetween={5} slidesPerView={4}>
        <SwiperSlide>
          <ReactPlayer url={"https://www.youtube.com/watch?v=N3s18dPCuVw"} />
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer url={"https://www.youtube.com/watch?v=N3s18dPCuVw"} />
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer url={"https://www.youtube.com/watch?v=N3s18dPCuVw"} />
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer url={"https://www.youtube.com/watch?v=N3s18dPCuVw"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ThumbGallery;
