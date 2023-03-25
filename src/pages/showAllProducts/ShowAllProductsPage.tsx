import DeleteIcon from "@mui/icons-material/Delete";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import "./ShowAllProductsPage.scss";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/category/user.context";
import { getCategoryDataById } from "../../api/subcategoies/sub_categories";
import ShowAllProductsNavBar from "./ShowAllProductsNavBar";

const ShowAllProductsPage = () => {
  const { categoryId, userToken } = useContext(UserContext);
  const [products, setproducts] = useState<any[]>([]);
  useEffect(() => {}, []);

  return (
    <>
      <ShowAllProductsNavBar />
      <div className="ShowAllProductsPage-container">
        <div className="container-title">
          <div className="title">
            <ArrowLeftRoundedIcon className="icon" />
            <h3>
              عدد العناصر <span>10</span>
            </h3>
          </div>
        </div>
        <div className="all-ProductList">
          {/* _______show product list HERE_______ */}
        </div>
      </div>
    </>
  );
};

export default ShowAllProductsPage;
