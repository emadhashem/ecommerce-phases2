import React from "react";
import "./mostSaledProduct.scss";
import imgSrc from "../../../assets/imgs/mainswiperImg.png";
import AddBoxIcon from "@mui/icons-material/AddBox";

function MostSaledProduct() {
  return (
    <div className="mostsaledproduct-container">
      <img className="product-img" src={imgSrc} alt="" />
      <div className="product-footer">
        <div className="product-icon">
          <AddBoxIcon className="icon" />
        </div>
        <div className="product-info">
          جهاز لوحي
          <span>$500</span>
        </div>
      </div>
    </div>
  );
}

export default MostSaledProduct;
