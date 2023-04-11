import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/category/user.context";
import "./productList.scss";
import ProductListItem from "../productListItem/ProdustListItem";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import ModalOverLay from "../../../layouts/modlaOverLay/ModalOverLay";
import ModalProduct from "../modalProduct/ModalProduct";
import { getPorductsBySubCategory } from "../../../api/subcategoies/sub_categories";
import { getImg } from "../../../api";
import { postProductToOrder } from "../../../api/product/product";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function ProductList({
  showAllProduts = true,
  products = [],
}: {
  showAllProduts?: boolean;
  products: any[];
}) {
  const [idxOfMadlProduct, setidxOfMadlProduct] = useState<number>(-1);
  const [open, setOpen] = useState(false);
  const [productsState, setproductsState] = useState<any[]>([]);
  const { userToken } = useContext(UserContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setproductsState(products);
  }, [products]);
  async function addProductToCart(product: any, count: number) {
    try {
      const data = await postProductToOrder(
        product.product_id,
        count,
        product.product_price_dollar,
        product.product_coin,
        userToken
      );
      handleClose();
    } catch (error: any) {
      alert(error.message);
    }
  }
  const handleOpen = (idx: number) => {
    setidxOfMadlProduct(idx);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleRemoveFromList = (product_id: string) => {
    if (!handleCheckingInFavorite()) return;
    setproductsState((prev) =>
      prev.filter((item: any) => item.product_id !== product_id)
    );
  };
  function handleCheckingInFavorite() {
    if (pathname.includes("favorites")) return true;
    return false;
  }
  return (
    <section className="section-products">
      <div className="container">
        {/* <!-- Single Product --> */}
        <ModalOverLay open={open} handleClose={handleClose}>
          {products[idxOfMadlProduct] && (
            <ModalProduct
              product={products[idxOfMadlProduct]}
              handleClose={handleClose}
              onAccept={addProductToCart}
            />
          )}
        </ModalOverLay>

        {productsState.length > 0 ? (
          productsState.map((product: any, idx: number) => (
            <ProductListItem
              onClick={handleOpen}
              productId={product.product_id}
              productImg={getImg(product.product_photo_url)}
              productName={product.product_name}
              productPrice={product.product_price_dollar}
              idx={idx}
              key={product.product_id}
              in_favorite={product.in_favorite}
              handleRemoveFromList={handleRemoveFromList}
              _product={product}
            />
          ))
        ) : (
          <div className="error-message">
            <SentimentVeryDissatisfiedIcon fontSize="large" />
            <p> لا توجد اي عناصر </p>
          </div>
        )}
      </div>
      {showAllProduts && (
        <div className="btn">
          <Button variant="contained" onClick={() => navigate("/allProducts")}>
            <span>...عرض الكل</span>
          </Button>
        </div>
      )}
    </section>
  );
}

export default ProductList;
