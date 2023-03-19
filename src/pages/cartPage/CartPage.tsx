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

function CartPage() {
  const { userToken } = useContext(UserContext);
  const [products, setproducts] = useState<any[]>([]);
  const [order_id, setorder_id] = useState<number | string>('')

  useEffect(() => {
    async function fetchPoductsInCart() {
      const data = await getPorductsInCart(userToken);
      setproducts(data.order.product);
      setorder_id(data.order.order_id)
    }
    fetchPoductsInCart();
  }, []);

  function handleDeletePorduct(id: string | number) {
    setproducts((prev) => prev.filter((item) => item.product_id != id));
  }
  async function handleChangeCount(product: any, count: number) {
    try {
      const data = await postchangeProductCountInOrder(
        product.order_details_id,
        count,
        userToken
      );
      setproducts((prev) =>
        prev.map((item) => {
          if (item.product_id == product.product_id) {
            return { ...item, product_count: count };
          } else return item;
        })
      );
    } catch (error: any) {
      alert(error.message);
    }
  }
  async function handleSendCheckout() {
    try {
      const data = await postSendCheckout(userToken , order_id)
    } catch (error : any) {
      alert(error.message)
    }
  }
  async function removeAllFromCart() {
    try {
      
      const data = await postRemoveAllFromCart(order_id , userToken)
      setproducts([])
    } catch (error : any) {
      alert(error.message)
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
          <DeleteIcon onClick = {removeAllFromCart} fontSize="large" />
        </div>
      </div>
      <CartList
        handleChangeCount={handleChangeCount}
        handleDeletePorduct={handleDeletePorduct}
        products={products}
      />
      <div className="cart-footer">
        <div className="price">
          <div className="total-price">
            <p>
              المجموع: <span>9999999</span> ل.س
            </p>
          </div>
          <div className="delivery">
            <p>
              توصيل: <span>9999</span> ل.س
            </p>
          </div>
        </div>
        <hr />
        <button onClick={handleSendCheckout} className="check-btn">
          <CheckCircleRoundedIcon className="icon" />
          <span>ارسال الطلب</span>
        </button>
      </div>
    </div>
  );
}

export default CartPage;
