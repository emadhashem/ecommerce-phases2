import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import mainswiperImg from "../../../assets/imgs/mainswiperImg.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper";
import "./mainSwiper.scss";
import { getAds } from "../../../api/ads/ads";
import { getImg } from "../../../api";

function MainSwiper() {
  const [ads, setads] = useState<any>([]);
  useEffect(() => {
    async function fetchAds() {
      const data = await getAds();
      setads(data.ads);
    }
    fetchAds();
  }, []);

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
        {ads.map((item: any) => (
          <SwiperSlide>
            <img src={getImg(item.ads_url)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainSwiper;
