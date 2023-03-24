import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";
import "./showAllProductsNavBar.scss"

const showAllProductsNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="showAllProductsNavBar-container">
      <div className="rapper">
        <div className="back-icon">
          <ArrowBackRoundedIcon
            onClick={() => navigate("/")}
            fontSize="large"
          />
        </div>
        <div className="title">
          <p>
            {/* _____ICON HERE_____ */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default showAllProductsNavBar;
