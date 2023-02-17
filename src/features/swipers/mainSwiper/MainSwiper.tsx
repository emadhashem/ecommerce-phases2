import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import mainswiperImg from '../../../assets/imgs/mainswiperImg.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./mainSwiper.style.css";

function MainSwiper() {
  return (
   <div className="mainswiper-container" >
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
