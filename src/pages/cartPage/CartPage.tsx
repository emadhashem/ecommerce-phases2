import CartList from "../../features/cart/cartlist/CartList";
import "./cartPage.scss";
import DeleteIcon from "@mui/icons-material/Delete";


function CartPage() {
  return (
    <div className="CartPage-container">
      <div className="container-title">
        <div className="title">
          <div className="bar"></div>
          <h3>
            لديك <span>10</span> عناصر في السلة
          </h3>
        </div>
        <div className="delete-icon">
          <DeleteIcon fontSize="large" />
        </div>
      </div>
      <CartList />
    </div>
  );
}

export default CartPage;
