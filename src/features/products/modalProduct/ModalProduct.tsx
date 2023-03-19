import "./modalProduct.scss";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import img from "../../../assets/imgs/Rectangle 35.png";
import { getImg } from "../../../api";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

function ModalProduct({ product, handleClose, onAccept }: any) {
  const [count, setcount] = useState(product.product_count ? product.product_count : 0);
  const [disapleAcceptBtn, setdisapleAcceptBtn] = useState(false);
  async function handleReduceCount() {
    if (count > 1) return setcount(count - 1);
  }
  async function handleAddCount() {
    setcount(count + 1);
  }
  return (
    <div className="ModalProduct">
      <div className="card">
        <div className="single-product">
          <div className="ModalProduct-part-1">
            <div className="product-title">
              <h4>{product.product_name}</h4>
              <span>{product.product_price_dollar} $</span>
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
                السعر الإجمالي:{" "}
                <span>$ {count * product.product_price_dollar}</span>
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
                    setdisapleAcceptBtn(false);
                    handleClose();
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
