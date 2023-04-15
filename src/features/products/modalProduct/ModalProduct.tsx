import "./modalProduct.scss";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import img from "../../../assets/imgs/Rectangle 35.png";
import { getImg } from "../../../api";
import { useContext, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { CartProductsContext } from "../../../contexts/CartProducts/CartProductsContext";
import { productCoin, productCoinInCart } from "../../../shared/helper";
import { toast } from "react-toastify";

function ModalProduct({ product, handleClose, onAccept }: any) {
  const [count, setcount] = useState(
    product.product_count ? product.product_count : 1
  );
  const [disapleAcceptBtn, setdisapleAcceptBtn] = useState(false);
  const { cartLength, setCartLength } = useContext(CartProductsContext);

  async function handleReduceCount() {
    if (count > 1) return setcount(count - 1);
  }
  async function handleAddCount() {
    setcount(count + 1);
  }
  const changeCountSuccess = "تم تعديل عدد المنتج";
  const AddToCartSuccess = "تم اضافة المنتج";
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

  return (
    <div className="ModalProduct">
      <div className="card">
        <div className="single-product">
          <div className="ModalProduct-part-1">
            <div className="product-title">
              <h4>{product.product_name}</h4>
              <p>{productCoin(product)}</p>
            </div>
            <div className="img-container">
              <img src={getImg(product.product_photo_url)} alt="" />
            </div>
            <div className="quantity-icons">
              <RemoveCircleRoundedIcon
                fontSize="medium"
                className="remove-icon"
                onClick={handleReduceCount}
              />
              <span>{count}</span>
              <AddOutlinedIcon
                onClick={handleAddCount}
                fontSize="medium"
                className="add-icon"
              />
            </div>
          </div>
          <hr />
          <div className="ModalProduct-part-2">
            <div className="total-price">
              <p>
                السعر الإجمالي:
                <span style={{ direction: "rtl" }}>
                  {productCoinInCart({ ...product, product_count: count })}
                </span>
              </p>
            </div>
            <div className="confirmation">
              <button className="cancel-btn" onClick={handleClose}>
                <span>إلغاء</span>
                <CancelIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
              </button>
              {disapleAcceptBtn ? (
                <CircularProgress />
              ) : (
                <button
                  className="check-btn"
                  disabled={disapleAcceptBtn}
                  onClick={() => {
                    setdisapleAcceptBtn(true);
                    onAccept(product, count);
                    if (product.product_count) {
                      notify(changeCountSuccess, 0);
                    } else {
                      // notify(AddToCartSuccess, 0);
                    }
                    setdisapleAcceptBtn(false);
                    handleClose();
                    setCartLength(cartLength + 1);
                  }}
                >
                  <span>موافق</span>
                  <CheckCircleRoundedIcon
                    sx={{ color: "#FFFFFF" }}
                    fontSize="large"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProduct;
