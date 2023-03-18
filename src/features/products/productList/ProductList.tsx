import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/category/user.context";
import "./productList.scss";
import ProductListItem from "../productListItem/ProdustListItem";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import ModalOverLay from "../../../layouts/modlaOverLay/ModalOverLay";
import ModalProduct from "../modalProduct/ModalProduct";
import { getPorductsBySubCategory } from "../../../api/subcategoies/sub_categories";
import { getImg } from "../../../api";

function ProductList({
  showAllProduts = true,
  products = [],
}: {
  showAllProduts?: boolean;
  products: any[];
}) {
  const [idxOfMadlProduct, setidxOfMadlProduct] = useState<number>(-1);
  const [open, setOpen] = useState(false);
  const [productsState, setproductsState] = useState(products);
  const handleOpen = (idx: number) => {
    setidxOfMadlProduct(idx);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleRemoveFromList = (product_id: string) => {
    setproductsState((prev) =>
      prev.filter((item: any) => item.product_id !== product_id)
    );
  };
  return (
    <section className="section-products">
      <div className="container">
        {/* <!-- Single Product --> */}
        <ModalOverLay open={open} handleClose={handleClose}>
          {/* modal content or product */}
          {products[idxOfMadlProduct] && (
            <ModalProduct
              product={products[idxOfMadlProduct]}
              handleClose={handleClose}
            />
          )}
        </ModalOverLay>
        {products.length > 0 ? (
          products.map((product: any, idx: number) => (
            <ProductListItem
              onClick={handleOpen}
              productId={product.product_id}
              productImg={getImg(product.product_photo_url)}
              productName={product.product_name}
              productPrice={product.product_price_dollar}
              idx={idx}
              key={product.product_id}
              in_favorite={product.in_favorite}
              handleRemoveFromList = {handleRemoveFromList}
            />
          ))
        ) : (
          <div className="error-message">
            <SentimentVeryDissatisfiedIcon fontSize="large" />
            <p> لا توجد اي عناصر </p>
          </div>
        )}
      </div>
      {showAllProduts && products.length > 5 && (
        <div className="btn">
          <button>
            <span>...عرض الكل</span>
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductList;
