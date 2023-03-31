import { Swiper, SwiperSlide } from "swiper/react";
import mainswiperImg from "../../../assets/imgs/mainswiperImg.png";
import mainswiperImg2 from "../../../assets/imgs/Rectangle 244.png";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { FreeMode, Thumbs } from "swiper";
import "./detailsPageSwiper.scss";
import { getImg } from "../../../api";
// test
const DetailsPageSwiper = ({ photos = [] }: { photos: any[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [currentSlide, setCurrentSlide] = useState(0);

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
      >
        {photos.map((item: any, idx: number) => (
          <SwiperSlide key={item.product_photo_id}>
            <img
              src={getImg(item.product_photo_url)}
              key={item.product_photo_id}
              alt=""
            />
          </SwiperSlide>
        ))}
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
          {photos.map((item: any, idx: number) => (
            <SwiperSlide
              onClick={() => {
                setCurrentSlide(idx);
              }}
              key={item.product_photo_id}
            >
              <img
                src={getImg(item.product_photo_url)}
                key={item.product_photo_id}
                alt=""
              />
              <svg>
                <filter id="blue-wash" color-interpolation-filters="sRGB">
                  <feColorMatrix
                    type="matrix"
                    values="0.32     0     0     0     0
                    0     0.54     0     0     0
                    0     0     0.82     0     0
                    0     0     0     0.6     0 "
                  />
                </filter>
              </svg>
              {/* {currentSlide === idx && <div className="active"></div>} */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DetailsPageSwiper;
