import DeleteIcon from "@mui/icons-material/Delete";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import "./ShowAllProductsPage.scss";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/category/user.context";
import {
  getPorductsBySubCategory,
} from "../../api/subcategoies/sub_categories";
import ShowAllProductsNavBar from "./ShowAllProductsNavBar";
import ProductList from "../../features/products/productList/ProductList";

const ShowAllProductsPage = () => {
  const { categoryId, userToken } = useContext(UserContext);
  const [products, setproducts] = useState<any[]>([]);
  useEffect(() => {
    async function fetchProductsBySubcategory() {
      const data = await getPorductsBySubCategory(categoryId, userToken);
      setproducts(data.product);
    }
    fetchProductsBySubcategory();
  }, [categoryId]);

  return (
    <>
      <ShowAllProductsNavBar />
      <div className="ShowAllProductsPage-container">
        <div className="container-title">
          <div className="title">
            <ArrowLeftRoundedIcon className="icon" />
            <h3>
              عدد العناصر <span>{products.length}</span>
            </h3>
          </div>
        </div>
        <div className="all-ProductList">
          {/* _______show product list HERE_______ */}
          <ProductList showAllProduts = {false} products = {products} />
        </div>
      </div>
    </>
  );
};

export default ShowAllProductsPage;
