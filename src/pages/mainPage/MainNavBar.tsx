import { useContext, useEffect, useState } from "react";
import "./MainNavBar.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/svgs/logo.svg";
import darkLogo from "../../assets/svgs/darklogo.svg";

import { Link, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { DarkModeContext } from "../../contexts/darkModeContext/darkModeContext";
import { UserContext } from "../../contexts/category/user.context";
import { Button } from "@mui/material";
import { getPorductsInCart } from "../../api/product/product";

function MainNavBar() {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);
  const { userToken } = useContext(UserContext);
  const [cartLength, setCartLength] = useState(0);
  console.log(cartLength);

  useEffect(() => {
    async function fetchPoductsInCart() {
      const data = await getPorductsInCart(userToken);
      setCartLength(data.order.product?.length);
    }
    fetchPoductsInCart();
  });

  return (
    <div className="main-nav">
      <div className="container">
        <div className="nav-icons">
          {userToken ? (
            <>
              <AccountCircleIcon
                className="icon"
                onClick={() => navigate("/profile")}
                fontSize="large"
              />
              <FavoriteIcon
                className="icon"
                onClick={() => navigate("/favorites")}
                fontSize="large"
              />
              <Badge badgeContent={99} color="error">
                <NotificationsIcon
                  onClick={() => navigate("notifications")}
                  className="icon"
                  fontSize="large"
                />
              </Badge>
              <Badge badgeContent={cartLength} color="error">
                <ShoppingCartIcon
                  onClick={() => navigate("/cart")}
                  className="icon"
                  fontSize="large"
                />
              </Badge>
            </>
          ) : (
            <div>
              <Button onClick={() => navigate("/login")}>
                Login - register
              </Button>
            </div>
          )}
        </div>
        <div className="logo">
          <Link to="/">
            {darkMode ? (
              <img src={darkLogo} alt="" />
            ) : (
              <img src={logo} alt="" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainNavBar;
