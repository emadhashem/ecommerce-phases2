import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import "./orderDetailsNavBar.scss";
import detailsIcon from "../../assets/svgs/detailsIcon.svg";

const OrderDetailsNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="orderDetailsNavBar-container">
      <div className="rapper">
        <div className="back-icon">
          <ArrowBackRoundedIcon
            onClick={() => navigate("/")}
            fontSize="large"
          />
        </div>
        <div className="title">
          <p>
            تفاصيل الطلبية
            <img src={detailsIcon} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsNavBar;
