import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "./mostSaledSwiper.style.css";
import "./mostSaledSwiper.scss";
import MostSaledProduct from "../../products/mostSaledProduct/MostSaledProduct";
import ModalOverLay from "../../../layouts/modlaOverLay/ModalOverLay";
import ModalProduct from "../../products/modalProduct/ModalProduct";
import {
  getMostSoldPorducts,
  postProductToOrder,
} from "../../../api/product/product";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/category/user.context";
import { toast } from "react-toastify";
import useLogOut from "../../../hooks/useLogOut";

function MostSaledSwiper() {
  const [open, setOpen] = useState(false);
  const [products, setproducts] = useState<any[]>([]);
  const { userToken } = useContext(UserContext);
  const [idxOfMadlProduct, setidxOfMadlProduct] = useState(1);
  const { fetchLogOut } = useLogOut();
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    async function fetchMostSoldData() {
      const data = await getMostSoldPorducts();
      setproducts(data.most_sell_product);
    }
    fetchMostSoldData();
  }, []);
  function openProductPage(id: any) {
    if (id) {
      navigate(`/details/${id}`);
    }
  }
  const AddToCartSuccess = "تم اضافة المنتج الى السلة";
  const autoClose = 1500;
  const notify = (message: string, type: number) => {
    switch (type) {
      case 0:
        return toast.success(message, {
          autoClose: autoClose,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      case 1:
        return toast.error(message, {
          autoClose: autoClose,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      default:
        return toast("اختر نوع الرسالة", {
          autoClose: autoClose,
          position: toast.POSITION.BOTTOM_CENTER,
        });
    }
  };
  async function addProductToCart(product: any, count: number) {
    try {
      const data = await postProductToOrder(
        product.product_id,
        count,
        product.product_price_dollar,
        product.product_coin,
        userToken
      );
      handleClose();
      notify(AddToCartSuccess, 0);
    } catch (error: any) {
      notify(error.message, 1);
      fetchLogOut();
    }
  }
  return (
    <div className="MostSaledSwiper">
      <div className="container-title">
        <div className="bar"></div>
        <h3>المنتجات الأكثر مبيعاً</h3>
      </div>
      <ModalOverLay open={open} handleClose={handleClose}>
        <ModalProduct
          product={products[idxOfMadlProduct]}
          handleClose={handleClose}
          onAccept={addProductToCart}
        />
      </ModalOverLay>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        freeMode={true}
        className="mySwiper"
      >
        {products.map((item: any, idx: number) => (
          <SwiperSlide key={item.product_id}>
            <MostSaledProduct
              onOpenProuctPage={openProductPage}
              product={item}
              onCartClick={() => {
                handleOpen();
                setidxOfMadlProduct(idx);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MostSaledSwiper;
