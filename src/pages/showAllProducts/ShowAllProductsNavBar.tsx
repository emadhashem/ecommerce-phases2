import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImg } from "../../api";
import { getCategoryDataById } from "../../api/subcategoies/sub_categories";
import { UserContext } from "../../contexts/category/user.context";
import "./showAllProductsNavBar.scss";

const ShowAllProductsNavBar = () => {
  const { categoryId, userToken } = useContext(UserContext);
  const navigate = useNavigate();
  const [category, setcategory] = useState<any>();
  useEffect(() => {
    if (!categoryId) {
      return navigate("/");
    }
    async function fetchCategoryData() {
      try {
        const data = await getCategoryDataById(categoryId);
        setcategory(data.sub_category[0]);
      } catch (error) {
        alert(error);
      }
    }
    fetchCategoryData();
  }, [categoryId]);
  return (
    <div className="showAllProductsNavBar-container">
      <div className="rapper">
        <div className="back-icon">
          <ArrowBackRoundedIcon
            onClick={() => navigate("/")}
            fontSize="large"
          />
        </div>
        {category && (
          <div className="title">
            <p>
              {category.sub_category_name}{" "}
              <img
                className="img-logo"
                height="15"
                src={getImg(category.sub_category_url)}
              />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowAllProductsNavBar;
