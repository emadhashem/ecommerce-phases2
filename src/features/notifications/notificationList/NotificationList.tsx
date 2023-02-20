import React from "react";
import Notification from "../notificatioComp/Notification";
import "./notifcationList.style.scss";
import imgSrc from "../../../assets/imgs/mainswiperImg.png";
function NotificationList() {
  return (
    <div className="notificationlist-container">
      {[...Array(6)].map((_, idx) => (
        <Notification
          key={idx}
          seen={false}
          description="هناك منتج جديد لدى متجر كيكا بايت"
          img={imgSrc}
        />
      ))}
    </div>
  );
}

export default NotificationList;
