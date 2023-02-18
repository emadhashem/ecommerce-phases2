import React, { useContext } from "react";
import { CategoryContext } from "../../../contexts/category/category.context";
import "./productList.css";

import productImg from "../../../assets/imgs/Rectangle 35.png";
import ProductListItem from "../productListItem/ProdustListItem";
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
          <p> لا توجد اي عناصر </p>
        )}
      </div>
    </section>
  );
}

export default ProductList;
