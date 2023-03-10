import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import mainswiperImg from "../../../assets/imgs/mainswiperImg.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper";
import "./mainSwiper.scss";

function MainSwiper() {
  return (
    <div className="mainswiper-container">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={mainswiperImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainswiperImg} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainSwiper;
