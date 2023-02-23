import { Swiper, SwiperSlide } from "swiper/react";
import mainswiperImg from "../../../assets/imgs/mainswiperImg.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import "./detailsPageSwiper.scss";

const DetailsPageSwiper = () => {
  return (
    <div className="detailsPageSwiper-container">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={"auto"}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={mainswiperImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainswiperImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainswiperImg} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DetailsPageSwiper;
