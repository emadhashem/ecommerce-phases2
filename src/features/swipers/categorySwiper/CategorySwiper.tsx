import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./categorySwiper.style.css";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
function CategorySwiper() {
  return (
    <div className="categoryswiper-container">
        <h3 className="container-title" >التصنيفات</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {[...Array(5)].map((_ , idx) => (
          <SwiperSlide key={idx} >
            <div className="category-container" >
              <TimeToLeaveIcon style={{color:"#2C7BE5"}} />
              <p>سيارات</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategorySwiper;
