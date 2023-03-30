import { useNavigate } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import searchIcon from "../../assets/svgs/searchIcon.svg";
import "./searchPageNavBar.scss";

const SearchPageNavBar = ({ result }: any) => {
  const navigate = useNavigate();
  return (
    <div className="searchPageNavBar-container">
      <div className="rapper">
        <div className="back-icon">
          <ArrowBackRoundedIcon
            onClick={() => navigate("/")}
            fontSize="large"
          />
        </div>
        <div className="title">
          <p>
            <img className="search-icon" src={searchIcon} alt="" />
            نتيجة البحث لـ:
          </p>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchPageNavBar;
