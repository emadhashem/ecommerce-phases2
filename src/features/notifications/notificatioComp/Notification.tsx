import React, { useContext } from "react";
import "./notification.scss";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import useGetTime from "./useGetTime";
import { getImg } from "../../../api";
import { postReadNotification } from "../../../api/notifications/notifications";
import { UserContext } from "../../../contexts/category/user.context";
import { NotificationContext } from "../../../contexts/notificationContext/notification.context";


function Notification({ seen, description, notification } : any) {
  const {returnTime} = useGetTime(notification.updated_at)
  const {userToken} = useContext(UserContext)
  const {readNotifi} = useContext(NotificationContext)
  async function readNotification() {
    if(seen) return
    try {
      await postReadNotification(notification.notification_id , userToken)
      readNotifi(notification)
    } catch (error : any) {
      alert(error)
    }
  }
  return (
    <div className="notifcation-container" onClick={readNotification} >
      <div className="notifcation-img">
        <img src={getImg(notification.notification_url)} alt="" />
      </div>
      <div className="description-container">
        <div className="description">
          <span>قبل {returnTime}</span>
          <p>{description}</p>
        </div>
        <FiberManualRecordRoundedIcon className={seen ? "dont-icon-seen" : "dont-icon-unseen"} />
      </div>
    </div>
  );
}

export default Notification;
