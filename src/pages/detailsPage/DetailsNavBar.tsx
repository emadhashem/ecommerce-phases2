import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { useNavigate } from "react-router-dom";
import "./detailsNavBar.scss";

function DetailsNavBar() {
  const navigate = useNavigate();
  return (
    <header className="detailsNavBar-container">
      <div className="rapper">
        <div className="back-icon">
          <ArrowBackRoundedIcon
            onClick={() => navigate("/")}
            fontSize="large"
          />
        </div>
        <div className="title">
          <p>
            تفاصيل
            <InfoRoundedIcon fontSize="large" />
          </p>
        </div>
      </div>
    </header>
  );
}

export default DetailsNavBar;
