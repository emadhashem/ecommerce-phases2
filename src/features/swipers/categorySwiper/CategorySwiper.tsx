import React, { useContext } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./categorySwiper.scss";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import { CategoryContext } from "../../../contexts/category/category.context";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

function CategorySwiper() {
  const { id, setId } = useContext(CategoryContext);

  return (
    <div className="categoryswiper-container">
      <div className="container-title">
        <div className="bar"></div>
        <h3>الأصناف</h3>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {[...Array(5)].map((_, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`category-container ${
                id === idx ? "active-category" : ""
              }`}
              onClick={() => setId(idx)}
            >
              <TimeToLeaveIcon
                className={`${
                  id === idx ? "active-category" : "icon-category "
                }`}
              />
              <p>سيارات</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategorySwiper;
