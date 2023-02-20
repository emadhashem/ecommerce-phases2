import React from "react";
import "./notification.scss";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

interface INotificationProps {
  seen: boolean;
  img: string;
  description: string;
}

function Notification({ seen, img, description }: INotificationProps) {
  return (
    <div className="notifcation-container">
      <div className="notifcation-img">
        <img src={img} alt="" />
      </div>
      <div className="description-container">
        <div className="description">
          <span>قبل 5د</span>
          <p>{description}</p>
        </div>
        <FiberManualRecordRoundedIcon className="dont-icon" />
      </div>
    </div>
  );
}

export default Notification;
