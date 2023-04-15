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
import { toast } from "react-toastify";

function CartPage() {
  const { userToken } = useContext(UserContext);
  const { setCartLength, setnotifcationLength, notifcationLength } =
    useContext(CartProductsContext);
  const [products, setproducts] = useState<any[]>([]);
  const [order_id, setorder_id] = useState<number | string>("");
  const [loadingSendOrder, setloadingSendOrder] = useState(false);
  const [openPopover, setopenPopover] = useState(false);
  const [orderData, setorderData] = useState<any>(null);

  const deleteAllFromCartSuccess = "تم حذف كل العناصر";
  const deleteAllFromCartFail = "حدث خطا";
  const sendOrderSuccess = "تم ارسال الطلب";
  const sendOrderFail = "حدث خطا في الطلب";
  const changeCountSuccess = "تم تعديل عدد المنتج";
  const autoClose = 1500;
  const notify = (message: string, type: number) => {
    switch (type) {
      case 0:
        return toast.success(message, {
          autoClose: autoClose,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      case 1:
        return toast.error(message, {
          autoClose: autoClose,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      default:
        return toast("اختر نوع الرسالة", {
          autoClose: autoClose,
          position: toast.POSITION.BOTTOM_CENTER,
        });
    }
  };
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
    setCartLength(products?.length);
  }, [products?.length]);

  function handleDeleteProduct(id: string | number) {
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
      notify(error.message, 1);
    }
  }
  async function handleSendCheckout() {
    try {
      setloadingSendOrder(true);
      const data = await postSendCheckout(userToken, order_id);
      setloadingSendOrder(false);
      setproducts([]);
      setnotifcationLength(notifcationLength + 1);
      notify(sendOrderSuccess, 0);
    } catch (error: any) {
      setloadingSendOrder(false);
      notify(error.message, 1);
    }
  }
  async function removeAllFromCart() {
    try {
      const data = await postRemoveAllFromCart(order_id, userToken);
      setproducts([]);
      notify(deleteAllFromCartSuccess, 0);
    } catch (error: any) {
      notify(error.message, 1);
    }
  }

  return (
    <div className="CartPage-container">
      <div className="container-title">
        <div className="title">
          <ArrowLeftRoundedIcon className="icon" />
          <h3>
            لديك <span>{products?.length}</span> عناصر في السلة
          </h3>
        </div>
        {(products.length > 0) && <div className="delete-icon">
          <DeleteIcon onClick={() => setopenPopover(true)} fontSize="large" />
        </div>}
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
        handleDeletePorduct={handleDeleteProduct}
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
