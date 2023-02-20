import { IconButton } from "@mui/material";
import React from "react";
import "./notificationNavBar.style.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from "react-router-dom";
function NotificationNavBar() {
  const navigate = useNavigate()
  return (
    <div className="notificationnavbar-container">
      <div className="rapper" >
        <ArrowBackIcon onClick = {() => navigate('/')} />
        <div className="title" >
            <p>
                الاشعارات <NotificationsIcon />
            </p>
        </div>
        <DeleteIcon />
      </div>
    </div>
  );
}

export default NotificationNavBar;
