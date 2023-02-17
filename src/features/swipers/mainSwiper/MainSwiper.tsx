import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import mainswiperImg from "../../../assets/imgs/mainswiperImg.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import "./mainSwiper.style.css";

function MainSwiper() {
  return (
    <div className="mainswiper-container">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
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
