import { Link, useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import "./productListItem.scss";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/category/user.context";
import { addFavorite, deleteFavorite } from "../../../api/favorites/favorites";
import { CircularProgress } from "@mui/material";
import { handelResult, productCoin } from "../../../shared/helper";
import { toast } from "react-toastify";
import useLogOut from "../../../hooks/useLogOut";

function ProductListItem({
  productId,
  productImg,
  onClick,
  productName,
  productPrice,
  idx,
  in_favorite,
  handleRemoveFromList,
  _product,
}: any) {
  const { userToken } = useContext(UserContext);
  const [favorite, setfavorite] = useState(in_favorite);
  const [favoriteLoading, setfavoriteLoading] = useState(false);
  const {fetchLogOut} = useLogOut()
  const navigate = useNavigate();
  const removeFromFavoriteSuccess = "تم إزالة العنصر من المفضلة";
  const removeFromFavoriteFail = "حدث خطا";
  const addFromFavoriteSuccess = "تم اضافة العنصر الى المفضلة";
  const addFromFavoriteFail = "حدث خطا";
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
  async function addToFavorite() {
    try {
      setfavoriteLoading(true);
      setfavorite(true);
      const data = await addFavorite(productId, userToken);
      setfavoriteLoading(false);
      notify(addFromFavoriteSuccess, 0);
    } catch (error: any) {
      setfavorite(false);
      setfavoriteLoading(false);
      notify(error.message, 1);
      fetchLogOut()
    }
  }
  async function removeFromFavorite() {
    try {
      setfavoriteLoading(true);
      setfavorite(false);
      const data = await deleteFavorite(productId, userToken);
      handleRemoveFromList(productId);
      setfavoriteLoading(false);
      notify(removeFromFavoriteSuccess, 0);
    } catch (error: any) {
      setfavoriteLoading(false);
      setfavorite(true);
      notify(error.message, 1);
      fetchLogOut()
    }
  }
  return (
    <div className="card" key={productId}>
      <div id={`product-${productId}`} className="single-product">
        <div className="part-1">
          <span className="location">
            {_product.city_name} <LocationOnRoundedIcon className="icon" />
          </span>
          {favoriteLoading ? (
            <CircularProgress className="loader" />
          ) : (
            <FavoriteIcon
              className="fav-icon"
              id={favorite ? "Active-fav-icon" : "inactive-fav-icon"}
              onClick={() =>
                favorite ? removeFromFavorite() : addToFavorite()
              }
            />
          )}
          <a href={`/details/${productId}`}>
            <img src={productImg} alt="" />
          </a>
        </div>
        <div className="part-2">
          <div className="product-info">
            <p
              className="product-title"
              onClick={() =>
                navigate("/details/" + productId)
              }
            >
              {/* {handelResult(productName, 14)} */}
              {productName}
            </p>
            <div className="product-footer">
              <AddShoppingCartIcon
                className="icon"
                onClick={() => onClick(idx)}
              />
              <span className="product-price">{productCoin(_product)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
