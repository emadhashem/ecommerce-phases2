import DeleteIcon from "@mui/icons-material/Delete";
import NotificationList from "../../features/notifications/notificationList/NotificationList";
import "./notifivcationspageStyle.scss";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import { useContext, useEffect, useState } from "react";
import {
  getNotification,
  postReadAllNotification,
} from "../../api/notifications/notifications";
import { UserContext } from "../../contexts/category/user.context";
import { NotificationContext } from "../../contexts/notificationContext/notification.context";
import { CartProductsContext } from "../../contexts/CartProducts/CartProductsContext";

function NotifivationPage() {
  const { userToken } = useContext(UserContext);
  const [notifications, setnotifications] = useState<any[]>([]);
  const [oldNotifications, setoldNotifications] = useState<any[]>([]);
  const { setnotifcationLength } = useContext(CartProductsContext);
  useEffect(() => {
    let cur = true;
    if (userToken) {
      if (cur) fetchNotification();
    }
    return () => {
      cur = false;
    };
  }, [userToken]);
  async function fetchNotification() {
    try {
      const data = await getNotification(userToken);

      const { newNotifi, oldNotifi } = manageNotifi(data.notification);
      setnotifications(newNotifi);
      setoldNotifications(oldNotifi);
    } catch (error: any) {
      alert(error.message);
    }
  }
  function manageNotifi(arr = []) {
    let oldNotifi: any[] = [];
    let newNotifi: any[] = [];
    arr.forEach((item: any) => {
      if (item.is_read) oldNotifi.push(item);
      else newNotifi.push(item);
    });
    return { oldNotifi, newNotifi };
  }
  function readNotification(notifi: any) {
    setnotifications((arr) => {
      return arr.filter(
        (item) => item.notification_id !== notifi.notification_id
      );
    });
    setoldNotifications([notifi, ...oldNotifications]);
    setnotifcationLength(notifications.length);
  }
  async function readAllNotification() {
    try {
      await postReadAllNotification(userToken);
      setoldNotifications([...notifications, ...oldNotifications]);
      setnotifications([]);
      setnotifcationLength(0);
    } catch (error: any) {
      alert(error);
    }
  }
  return (
    <NotificationContext.Provider
      value={{
        oldNotifi: oldNotifications,
        newNotifi: notifications,
        readNotifi: readNotification,
      }}
    >
      <div className="notifivationpage-container">
        {notifications.length > 0 && (
          <div className="container-title">
            <div className="title">
              <ArrowLeftRoundedIcon className="icon" />

              <h3>
                لديك <span>{notifications.length}</span> اشعارات غير مقروءة
              </h3>
            </div>
            <div className="delete-icon">
              <DeleteIcon fontSize="large" onClick={readAllNotification} />
            </div>
          </div>
        )}
        <NotificationList arr={notifications} />
        <div className="container-title">
          <div className="title">
            <div className="bar"></div>
            <h3>:الاشعارات السابقة</h3>
          </div>
        </div>
        <NotificationList arr={oldNotifications} />
      </div>
    </NotificationContext.Provider>
  );
}

export default NotifivationPage;
