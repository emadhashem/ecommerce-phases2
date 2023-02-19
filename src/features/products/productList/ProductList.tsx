import React, { useContext } from "react";
import { CategoryContext } from "../../../contexts/category/category.context";
import "./productList.scss";
import productImg from "../../../assets/imgs/Rectangle 35.png";
import ProductListItem from "../productListItem/ProdustListItem";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const category_data = [5, 2, 1, 0, 6];
function ProductList() {
  const { id } = useContext(CategoryContext);
  return (
    <section className="section-products">
      <div className="container">
        {/* <!-- Single Product --> */}
        {category_data[id] > 0 ? (
          [...Array(category_data[id])].map((_, idx) => (
            <ProductListItem productId={idx} productImg={productImg} />
          ))
        ) : (
          <div className="error-message">
            <SentimentVeryDissatisfiedIcon fontSize="large" />
            <p> لا توجد اي عناصر </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductList;
