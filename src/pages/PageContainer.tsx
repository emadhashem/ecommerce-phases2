import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import './pagecontainer.style.css'
interface Porps {
    children : React.ReactNode
}

function PageContainer({children} : Porps) {
  return (
    <div className='pagecontainer-container' >
        <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
            {children}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PageContainer