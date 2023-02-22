import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import "./cartNavBar.scss";

function CartNavBar() {
  const navigate = useNavigate();
  return (
    <div className="cartNavBar-container">
      <div className="rapper">
        <div className="back-icon">
          <ArrowBackRoundedIcon
            onClick={() => navigate("/")}
            fontSize="large"
          />
        </div>
        <div className="title">
          <p>
          محتوى السلة <ShoppingCartIcon fontSize="large" />
          </p>
        </div>
        {/* <div className="delete-icon">
          <DeleteIcon fontSize="large" />
        </div> */}
      </div>
    </div>
  );
}

export default CartNavBar;
