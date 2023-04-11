import "./notificationNavBar.style.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { useNavigate } from "react-router-dom";
function NotificationNavBar() {
  const navigate = useNavigate();
  return (
    <div className="notificationnavbar-container">
      <div className="rapper">
        <div className="back-icon">
          <ArrowBackRoundedIcon
            onClick={() => navigate("/")}
            fontSize="large"
          />
        </div>
        <div className="title">
          <p>
            الاشعارات <NotificationsRoundedIcon fontSize="large" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotificationNavBar;
