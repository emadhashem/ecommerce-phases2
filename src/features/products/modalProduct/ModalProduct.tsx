import React from "react";
import "./modalProduct.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function ModalProduct() {
  return (
    <div className="ModalProduct">
      <div className="card">
        <div className="single-product">
          <div className="part-1">
            <img src="" alt="" />
          </div>
          <div className="part-2">
            <h3 className="product-title">تم اضافتها إلى سلة </h3>
            <div className="quantity">
              <div className="quantity-icons">
                <AddCircleIcon sx={{ color: "#2C7BE5" }} fontSize="large" />
                <span>01</span>
                <RemoveCircleIcon sx={{ color: "#B8B8B8" }} fontSize="large" />
              </div>
              <span>الكمية</span>
            </div>
            <div className="confirmation">
              <div className="left">
                <span>تم</span>
                <CheckCircleIcon sx={{ color: "#2C7BE5" }} fontSize="large" />
              </div>
              <div className="right">
                <span>تراجع</span>
                <CancelIcon sx={{ color: "#B8B8B8" }} fontSize="large" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProduct;
