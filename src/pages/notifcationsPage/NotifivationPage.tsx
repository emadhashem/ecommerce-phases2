import DeleteIcon from "@mui/icons-material/Delete";
import NotificationList from "../../features/notifications/notificationList/NotificationList";
import "./notifivcationspageStyle.scss";

function NotifivationPage() {
  return (
    <div className="notifivationpage-container">
      <div className="container-title">
        <div className="title">
          <div className="bar"></div>
          <h3>
            لديك <span>4</span> اشعارات غير مقروءة
          </h3>
        </div>
        <div className="delete-icon">
          <DeleteIcon fontSize="large" />
        </div>
      </div>
      <NotificationList />
      <div className="container-title">
        <div className="title">
          <div className="bar"></div>
          <h3>:الاشعارات السابقة</h3>
        </div>
      </div>
    </div>
  );
}

export default NotifivationPage;
