import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./profileNavBar.scss";

const ProfileNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="profileNavBar-container">
      <div className="rapper">
        <div className="back-icon">
          <ArrowBackRoundedIcon
            onClick={() => navigate("/")}
            fontSize="large"
          />
        </div>
        <div className="title">
          <p>
            حسابي <AccountCircleIcon fontSize="large" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavBar;
