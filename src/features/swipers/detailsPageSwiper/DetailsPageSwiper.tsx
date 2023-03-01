import { Swiper, SwiperSlide } from "swiper/react";
import mainswiperImg from "../../../assets/imgs/mainswiperImg.png";
import mainswiperImg2 from "../../../assets/imgs/Rectangle 244.png";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Thumbs } from "swiper";
import SwiperCore from "swiper";
import "./detailsPageSwiper.scss";

const DetailsPageSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  return (
    <div className="detailsPageSwiper-container">
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs]}
        className="mySwiper1"
        onInit={(core) => setThumbsSwiper(core)}
      >
        <SwiperSlide>
          <img src={mainswiperImg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainswiperImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainswiperImg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainswiperImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainswiperImg2} alt="" />
        </SwiperSlide>
      </Swiper>
      <div>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={5}
          slidesPerView={"auto"}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={mainswiperImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mainswiperImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mainswiperImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mainswiperImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mainswiperImg2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <Swiper
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
      </Swiper> */}
    </div>
  );
};

export default DetailsPageSwiper;
