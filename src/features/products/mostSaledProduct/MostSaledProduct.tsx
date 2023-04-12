import React from "react";
import "./mostSaledProduct.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { getImg } from "../../../api";
import { handelResult, productCoin } from "../../../shared/helper";

function MostSaledProduct({ onCartClick, product, onOpenProuctPage }: any) {
  return (
    <div className="mostsaledproduct-container">
      <img
        className="product-img"
        src={getImg(product.product_photo_url)}
        alt=""
        onClick={() => onOpenProuctPage(product.product_id)}
      />
      <div className="product-footer">
        <div className="product-icon" onClick={onCartClick}>
          <AddShoppingCartIcon className="icon" />
        </div>
        <div
          className="product-info"
          onClick={() => onOpenProuctPage(product.product_id)}
        >
          <span className="product-name">
            {handelResult(product.product_name, 15)}
          </span>
          <span>{productCoin(product)}</span>
        </div>
      </div>
    </div>
  );
}

export default MostSaledProduct;
