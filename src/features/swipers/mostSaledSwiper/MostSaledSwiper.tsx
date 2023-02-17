import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./mostSaledSwiper.style.css";
import MostSaledProduct from "../../products/mostSaledProduct/MostSaledProduct";
function MostSaledSwiper() {
  return (
    <div className="MostSaledSwiper">
      <h3 className="container-title">المنتجات الأكثر مبيعاً</h3>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        className="mySwiper"
      >
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
