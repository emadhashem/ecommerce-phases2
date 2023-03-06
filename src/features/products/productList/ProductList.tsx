import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../../contexts/category/category.context";
import "./productList.scss";
import ProductListItem from "../productListItem/ProdustListItem";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import ModalOverLay from "../../../layouts/modlaOverLay/ModalOverLay";
import ModalProduct from "../modalProduct/ModalProduct";
import { getPorductsBySubCategory } from "../../../api/subcategoies/sub_categories";
import { getImg } from "../../../api";

function ProductList() {
  const { id: idOfSubCategory } = useContext(CategoryContext);
  const [products, setproducts] = useState<any>([]);
  const [idxOfMadlProduct, setidxOfMadlProduct] = useState<number>(-1);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    async function fetchProductsBySubcategory() {
      const data = await getPorductsBySubCategory(idOfSubCategory);
      setproducts(data.product);
    }
    fetchProductsBySubcategory();
  }, [idOfSubCategory]);

  const handleOpen = (idx: number) => {
    setidxOfMadlProduct(idx);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <section className="section-products">
      <div className="container">
        {/* <!-- Single Product --> */}
        <ModalOverLay open={open} handleClose={handleClose}>
          {/* modal content or product */}
          {products[idxOfMadlProduct] && (
            <ModalProduct product={products[idxOfMadlProduct]} />
          )}
        </ModalOverLay>
        {products.length > 0 ? (
          products.map((product: any, idx: number) => (
            <ProductListItem
              onClick={handleOpen}
              productId={product.product_id}
              productImg={getImg(product.product_url)}
              productName={product.product_name}
              productPrice={product.product_price_dollar}
              idx={idx}
            />
          ))
        ) : (
          <div className="error-message">
            <SentimentVeryDissatisfiedIcon fontSize="large" />
            <p> لا توجد اي عناصر </p>
          </div>
        )}
      </div>
      <div className="btn">
        <button>
          <span>...عرض الكل</span>
        </button>
      </div>
    </section>
  );
}

export default ProductList;
