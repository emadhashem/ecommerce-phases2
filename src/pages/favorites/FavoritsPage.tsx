import DeleteIcon from "@mui/icons-material/Delete";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import "./favoritsPage.scss";
import ProductList from "../../features/products/productList/ProductList";
import { useContext, useEffect, useState } from "react";
import { getFavorites } from "../../api/favorites/favorites";
import { UserContext } from "../../contexts/category/user.context";
import { Button } from "@mui/material";
function FavoritsPage() {
  const { userToken } = useContext(UserContext);
  const [products, setproducts] = useState<any>([]);
  const [openPopover, setopenPopover] = useState(false);
  useEffect(() => {
    async function fetchFavirotes() {
      const data = await getFavorites(userToken);
      setproducts(data.favorite);
    }
    if (userToken) fetchFavirotes();
  }, [userToken]);
  async function removeAllFromFavorite() {
    setproducts([]);
  }

  return (
    <div className="favoritsPage-container">
      <div className="container-title">
        <div className="title">
          <ArrowLeftRoundedIcon className="icon" />
          <h3>
            لديك في المفضلة: <span>{products.length}</span> عناصر
          </h3>
        </div>
        <div className="delete-icon">
          <DeleteIcon onClick={() => setopenPopover(true)} fontSize="large" />
        </div>
      </div>
      {openPopover && products?.length > 0 && (
        <div className="popover">
          <span>هل تريد إزالة الجميع من السلة ؟</span>
          <div className="button-container">
            <Button
              variant="contained"
              onClick={() => {
                removeAllFromFavorite();
                setopenPopover(false);
              }}
            >
              نعم
            </Button>
            <Button variant="contained" onClick={() => setopenPopover(false)}>
              الغاء
            </Button>
          </div>
        </div>
      )}
      <div className="fav-ProductList">
        <ProductList products={products} showAllProduts={false} />
      </div>
    </div>
  );
}

export default FavoritsPage;
