import React from "react";
import './notification.style.scss'

interface INotificationProps {
  seen: boolean;
  img: string;
  description: string;
}

function Notification({ seen, img, description }: INotificationProps) {
  return (
    <div className="notifcation-container" >
      <img className="notifcation-img" src={img} />
      <p>{description}</p>
    </div>
  )
}

export default Notification;
