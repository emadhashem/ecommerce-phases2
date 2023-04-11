import { useNavigate } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import "./favoriteNavBar.scss";

function FavoriteNavBar() {
  const navigate = useNavigate();
  return (
    <div className="favoriteNavBar-container">
      <div className="rapper">
        <div className="back-icon">
          <ArrowBackRoundedIcon
            onClick={() => navigate("/")}
            fontSize="large"
          />
        </div>
        <div className="title">
          <p>
          المفضلة <FavoriteRoundedIcon fontSize="large" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default FavoriteNavBar;
