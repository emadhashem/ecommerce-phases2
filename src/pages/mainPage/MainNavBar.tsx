import React from "react";
import "./MainNavBar.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/svgs/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
function MainNavBar() {
  const navigate = useNavigate()
  return (
    <div className="main-nav">
      <div className="container">
        <div className="nav-icons">
          <AccountCircleIcon sx={{ color: "#2C7BE5" }} fontSize="large" />
          <FavoriteIcon sx={{ color: "#2C7BE5" }} fontSize="large" />
          <Badge badgeContent={99} color="error">
            <NotificationsIcon onClick = {() => navigate('notifications')} sx={{ color: "#2C7BE5" }} fontSize="large" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon onClick = {() => navigate('/cart')} sx={{ color: "#2C7BE5" }} fontSize="large" />
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
