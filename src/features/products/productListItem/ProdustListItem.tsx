import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import "./productListItem.style.css";
function ProductListItem({
  productId,
  productImg,
}: {
  productId: any;
  productImg: any;
}) {
  return (
    <div className="card" key={productId}>
      <div id={`product-${productId}`} className="single-product">
        <div className="part-1">
          <img src={productImg} alt="" />
          <ul>
            <li>
              <a href="#">
                <ShoppingCartIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <FavoriteIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <FullscreenIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="part-2">
          <h3 className="product-title">جهاز لوحي </h3>
          {/* <h4 className="product-old-price">$79.99</h4> */}
          <h4 className="product-price">$49.99</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
