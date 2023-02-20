import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "./mostSaledSwiper.style.css";
import "./mostSaledSwiper.scss";
import MostSaledProduct from "../../products/mostSaledProduct/MostSaledProduct";
import ModalOverLay from "../../../layouts/modlaOverLay/ModalOverLay";
import ModalProduct from "../../products/modalProduct/ModalProduct";

function MostSaledSwiper() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="MostSaledSwiper">
      <h3 className="container-title">المنتجات الأكثر مبيعاً</h3>
      <ModalOverLay open={open} handleClose={handleClose}>
        <ModalProduct />
      </ModalOverLay>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        freeMode={true}
        className="mySwiper"
      >
        {[...Array(6)].map((_, idx) => (
          <SwiperSlide key={idx}>
            <MostSaledProduct onClick={handleOpen} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MostSaledSwiper;
