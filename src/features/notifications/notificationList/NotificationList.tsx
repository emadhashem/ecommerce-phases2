import React from "react";
import Notification from "../notificatioComp/Notification";
import "./notifcationList.style.scss";
import imgSrc from "../../../assets/imgs/mainswiperImg.png";
function NotificationList({arr} : any) {
  return (
    <div className="notificationlist-container">
      {arr.map((item : any) => (
        <Notification
          key={item.notification_id}
          seen={item.is_read}
          description={item.notification_body}
          notification = {item}
        />
      ))}
    </div>
  );
}

export default NotificationList;
