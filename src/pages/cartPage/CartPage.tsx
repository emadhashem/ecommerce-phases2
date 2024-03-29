import CartList from "../../features/cart/cartlist/CartList";
import "./cartPage.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useContext, useEffect, useState } from "react";
import {
  getPorductsInCart,
  postchangeProductCountInOrder,
  postRemoveAllFromCart,
} from "../../api/product/product";
import { UserContext } from "../../contexts/category/user.context";
import { postSendCheckout } from "../../api/order/order";
import { CircularProgress } from "@mui/material";
import { CartProductsContext } from "../../contexts/CartProducts/CartProductsContext";
import { Button } from "@mui/material";

function CartPage() {
  const { userToken } = useContext(UserContext);
  const { setCartLength } = useContext(CartProductsContext);
  const [products, setproducts] = useState<any[]>([]);
  const [order_id, setorder_id] = useState<number | string>("");
  const [loadingSendOrder, setloadingSendOrder] = useState(false);
  const [openPopover, setopenPopover] = useState(false);
  const [orderData, setorderData] = useState<any>(null);

  useEffect(() => {
    async function fetchPoductsInCart() {
      const data = await getPorductsInCart(userToken);
      setproducts(data.order.product);
      setorder_id(data.order.order_id);
      setorderData(data.order);
    }
    if (userToken) {
      fetchPoductsInCart();
    }
  }, [userToken]);

  useEffect(() => {
    setCartLength(products.length);
  }, [products?.length]);

  function handleDeletePorduct(id: string | number) {
    setproducts((prev) => prev.filter((item) => item.order_details_id != id));
  }
  async function handleChangeCount(product: any, count: number) {
    try {
      const data = await postchangeProductCountInOrder(
        product.order_details_id,
        count,
        userToken
      );
      setproducts((prev) => {
        let arr = prev.map((item) => {
          if (item.order_details_id == product.order_details_id) {
            return { ...item, product_count: count };
          } else return item;
        });
        setCartLength(arr.length);
        return arr;
      });
    } catch (error: any) {
      alert(error.message);
    }
  }
  async function handleSendCheckout() {
    try {
      setloadingSendOrder(true);
      const data = await postSendCheckout(userToken, order_id);
      setloadingSendOrder(false);
      setproducts([]);
    } catch (error: any) {
      setloadingSendOrder(false);
      alert(error.message);
    }
  }
  async function removeAllFromCart() {
    try {
      const data = await postRemoveAllFromCart(order_id, userToken);
      setproducts([]);
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <div className="CartPage-container">
      <div className="container-title">
        <div className="title">
          <ArrowLeftRoundedIcon className="icon" />
          <h3>
            لديك <span>{products.length}</span> عناصر في السلة
          </h3>
        </div>
        <div className="delete-icon">
          <DeleteIcon onClick={() => setopenPopover(true)} fontSize="large" />
        </div>
      </div>
      {openPopover && products?.length > 0 && (
        <div className="popover">
          <span>هل تريد إزالة الجميع من السلة ؟</span>
          <div className="button-container">
            <Button
              variant="contained"
              onClick={() => {
                removeAllFromCart();
                setopenPopover(false);
              }}
            >
              نعم
            </Button>
            <Button variant="contained" onClick={() => setopenPopover(false)}>
              الغاء
            </Button>
          </div>
        </div>
      )}
      <CartList
        handleChangeCount={handleChangeCount}
        handleDeletePorduct={handleDeletePorduct}
        products={products}
      />
      {products && products.length ? (
        <div className="cart-footer">
          <div className="price">
            <div className="total-price">
              <p>
                المجموع: <span>{orderData.sum_price_sy}</span> ل.س
              </p>
            </div>
            <div className="delivery">
              <p>
                توصيل: <span>{orderData.delivery_fee}</span> ل.س
              </p>
            </div>
            <div className="total-price">
              <p>
                المجموع: <span>{orderData.sum_price_dollar}</span> $
              </p>
            </div>
          </div>
          <hr />
          {loadingSendOrder ? (
            <CircularProgress />
          ) : (
            <button onClick={handleSendCheckout} className="check-btn">
              <CheckCircleRoundedIcon className="icon" />
              <span>ارسال الطلب</span>
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default CartPage;
