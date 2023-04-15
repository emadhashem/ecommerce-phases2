import DeleteIcon from "@mui/icons-material/Delete";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import "./favoritsPage.scss";
import ProductList from "../../features/products/productList/ProductList";
import { useContext, useEffect, useState } from "react";
import { getFavorites, postDeleteAllFavorite } from "../../api/favorites/favorites";
import { UserContext } from "../../contexts/category/user.context";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
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
  const removeAllFromFavoriteSuccess = "تم ازالة كل العناصر";
  const removeAllFromFavoriteFail = "حدث خطا ";
  const autoClose = 1500;
  const notify = (message: string, type: number) => {
    switch (type) {
      case 0:
        return toast.success(message, {
          autoClose: autoClose,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      case 1:
        return toast.error(message, {
          autoClose: autoClose,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      default:
        return toast("اختر نوع الرسالة", {
          autoClose: autoClose,
          position: toast.POSITION.BOTTOM_CENTER,
        });
    }
  };
  async function removeAllFromFavorite() {
    try {
      setproducts([]);
      await postDeleteAllFavorite(userToken)
      notify(removeAllFromFavoriteSuccess, 0);
    } catch (error) {
      notify(removeAllFromFavoriteFail, 1);
    }
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
        {products?.length > 0 && (
          <div className="delete-icon">
            <DeleteIcon onClick={() => setopenPopover(true)} fontSize="large" />
          </div>
        )}
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
        <ProductList setProducts = {(arr : any) => setproducts(arr)} products={products} showAllProduts={false} />
      </div>
    </div>
  );
}

export default FavoritsPage;
