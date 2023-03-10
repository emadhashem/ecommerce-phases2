import React from "react";
import "./mostSaledProduct.scss";
import imgSrc from "../../../assets/imgs/mainswiperImg.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

interface IMostSaledProductProps {
  onClick: () => void;
}

function MostSaledProduct({ onClick }: IMostSaledProductProps) {
  return (
    <div className="mostsaledproduct-container">
      <img className="product-img" src={imgSrc} alt="" />
      <div className="product-footer">
        <div className="product-icon" onClick={onClick}>
          <AddShoppingCartIcon className="icon" />
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
