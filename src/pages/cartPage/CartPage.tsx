import CartList from "../../features/cart/cartlist/CartList";
import "./cartPage.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

function CartPage() {
  return (
    <div className="CartPage-container">
      <div className="container-title">
        <div className="title">
          <ArrowLeftRoundedIcon className="icon" />
          <h3>
            لديك <span>10</span> عناصر في السلة
          </h3>
        </div>
        <div className="delete-icon">
          <DeleteIcon fontSize="large" />
        </div>
      </div>
      <CartList />
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
        <button className="check-btn">
          <CheckCircleRoundedIcon className="icon" />
          <span>ارسال الطلب</span>
        </button>
      </div>
    </div>
  );
}

export default CartPage;
