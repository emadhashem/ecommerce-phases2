import { useContext, useEffect, useState } from "react";
import "./MainNavBar.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/svgs/logo.svg";
import darkLogo from "../../assets/svgs/darklogo.svg";

import { Link, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { DarkModeContext } from "../../contexts/darkModeContext/darkModeContext";
import { UserContext } from "../../contexts/category/user.context";
import { Avatar, Button } from "@mui/material";
import { CartProductsContext } from "../../contexts/CartProducts/CartProductsContext";
import { getUserData } from "../../api/user/userdata";
import { getImg } from "../../api";
function MainNavBar() {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);
  const { userToken } = useContext(UserContext);
  const { cartLength, notifcationLength } = useContext(CartProductsContext);
  const [userImg, setuserImg] = useState<any>(null);
  useEffect(() => {
    if (!userToken) return;
    fetchUserData();
  }, [userToken]);
  async function fetchUserData() {
    try {
      const data = await getUserData(userToken);
      setuserImg(data.customer.customer_url);
    } catch (error: any) {
      // alert(error.message);
    }
  }
  return (
    <div className="main-nav">
      <div className="container">
        <div className="nav-icons">
          {userToken ? (
            <>
              <Avatar
                className="icon"
                onClick={() => navigate("/profile")}
                src={getImg(userImg)}
              />
              {/* <FavoriteIcon
                className="icon"
                onClick={() => navigate("/favorites")}
                fontSize="large"
              /> */}
              <Badge badgeContent={notifcationLength} color="error">
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
                <span style={{ fontWeight: "600" }}>تسجيل الدخول</span>
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
