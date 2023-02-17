import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./mostSaledSwiper.style.css";
import MostSaledProduct from "../../products/mostSaledProduct/MostSaledProduct";
function MostSaledSwiper() {
  return (
    <div>
      <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
        <SwiperSlide>
            <MostSaledProduct />
        </SwiperSlide>
        <SwiperSlide>
            <MostSaledProduct />
        </SwiperSlide>
        <SwiperSlide>
            <MostSaledProduct />
        </SwiperSlide>
        <SwiperSlide>
            <MostSaledProduct />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MostSaledSwiper;
