import React from "react";
import "./MainNavBar.style.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
function MainNavBar() {
  return (
    <div className="main-nav">
      <div className="container">
        <div className="nav-icons">
          <AccountCircleIcon sx={{ color: "#2C7BE5" }} fontSize="large" />
          <FavoriteIcon sx={{ color: "#2C7BE5" }} fontSize="large" />
          <Badge badgeContent={99} color="error">
            <NotificationsIcon sx={{ color: "#2C7BE5" }} fontSize="large" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon sx={{ color: "#2C7BE5" }} fontSize="large" />
          </Badge>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainNavBar;
