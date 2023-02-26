import { useContext } from "react";
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

function MainNavBar() {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="main-nav">
      <div className="container">
        <div className="nav-icons">
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
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon
              onClick={() => navigate("/cart")}
              className="icon"
              fontSize="large"
            />
          </Badge>
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
