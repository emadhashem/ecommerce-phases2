import React, { useContext } from "react";
import { CategoryContext } from "../../../contexts/category/category.context";
import "./productList.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import productImg from "../../../assets/imgs/Rectangle 35.png";

function ProductList() {
  const { id } = useContext(CategoryContext);
  return (
    <section className="section-products">
      <div className="container">
        {/* <!-- Single Product --> */}
        {[...Array(8)].map((_, idx) => (
          <div className="card" key={idx}>
            <div id={`product-${idx}`} className="single-product">
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
        ))}

      </div>
    </section>
  );
}

export default ProductList;
