import React, { useContext, useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./categorySwiper.scss";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import { UserContext } from "../../../contexts/category/user.context";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { getSubCategories } from "../../../api/subcategoies/sub_categories";
import { getImg } from "../../../api";

function CategorySwiper() {
  const { categoryId, setcategoryId } = useContext(UserContext);
  const [subCategories, setsubCategories] = useState<any>([]);
  useEffect(() => {
    async function fetchSubCategories() {
      const data = await getSubCategories();
      setsubCategories(data.sub_category);
      setcategoryId(data.sub_category[0].sub_category_id);
    }
    fetchSubCategories();
  }, []);

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
        {subCategories.map((item: any) => (
          <SwiperSlide key={item.sub_category_id}>
            <div
              // style={{
              //   backgroundColor: categoryId === item.sub_category_id ? "red" : "",
              // }}
              className={`category-container ${
                categoryId === item.sub_category_id && "active-category"
              }`}
              onClick={() => setcategoryId(item.sub_category_id)}
            >
              <img
                src={getImg(item.sub_category_url)}
                className={`${
                  categoryId === item.sub_category_id
                    ? "active-category"
                    : "icon-category "
                }`}
              />
              <div className={`category-name ${
                categoryId === item.sub_category_id && "active-category"
              }`}>
                <p>{item.sub_category_name} </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategorySwiper;
