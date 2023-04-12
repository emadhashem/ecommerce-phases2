import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import "./orderDetailsNavBar.scss";
import detailsIcon from "../../assets/svgs/detailsIcon.svg";
import InfoIcon from '@mui/icons-material/Info';

const OrderDetailsNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="orderDetailsNavBar-container">
      <div className="rapper">
        <div className="back-icon">
          <ArrowBackRoundedIcon
            onClick={() => navigate("/profile")}
            fontSize="large"
          />
        </div>
        <div className="title">
          <p>
            تفاصيل الطلبية
            <InfoIcon className="icon" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsNavBar;
