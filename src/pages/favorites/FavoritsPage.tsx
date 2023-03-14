import DeleteIcon from "@mui/icons-material/Delete";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import "./favoritsPage.scss";
import ProductList from "../../features/products/productList/ProductList";
import { useContext, useEffect } from "react";
import { getFavorites } from "../../api/favorites/favorites";
import { UserContext } from "../../contexts/category/user.context";

function FavoritsPage() {
  const {userToken} = useContext(UserContext)
  useEffect(() => {
    async function fetchFavirotes() {
      const data = await getFavorites(userToken)
    }
    fetchFavirotes()
  }, [])
  
  return (
    <div className="favoritsPage-container">
      <div className="container-title">
        <div className="title">
          <ArrowLeftRoundedIcon className="icon" />
          <h3>
            لديك في المفضلة: <span>8</span> عناصر
          </h3>
        </div>
        <div className="delete-icon">
          <DeleteIcon fontSize="large" />
        </div>
      </div>
      <div className="fav-ProductList">
        <ProductList products={[]} showAllProduts = {false} />
      </div>
    </div>
  );
}

export default FavoritsPage;
