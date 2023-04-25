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
        <p
          className="product-title"
          onClick={() => onOpenProuctPage(product.product_id)}
        >
          {product.product_name}
        </p>
        <div className="product-info">
          <div className="product-icon" onClick={onCartClick}>
            <AddShoppingCartIcon className="icon" />
          </div>
          <p>{productCoin(product)}</p>
        </div>
      </div>
    </div>
  );
}

export default MostSaledProduct;