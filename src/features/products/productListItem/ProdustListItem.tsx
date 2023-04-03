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
  const navigate = useNavigate();
  async function addToFavorite() {
    try {
      setfavoriteLoading(true);
      setfavorite(true);
      const data = await addFavorite(productId, userToken);
      setfavoriteLoading(false);
    } catch (error: any) {
      setfavorite(false);
      setfavoriteLoading(false);

      alert(error.message);
    }
  }
  async function removeFromFavorite() {
    try {
      setfavoriteLoading(true);
      setfavorite(false);
      const data = await deleteFavorite(productId, userToken);
      handleRemoveFromList(productId);
      setfavoriteLoading(false);
    } catch (error: any) {
      setfavoriteLoading(false);
      setfavorite(true);
      alert(error.message);
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
          <AddShoppingCartIcon className="icon" onClick={() => onClick(idx)} />
          <div className="product-info">
            <h3
              className="product-title"
              onClick={() =>
                navigate("/details", {
                  state: {
                    product_id: productId,
                  },
                })
              }
            >
              {handelResult(productName, 17)}
            </h3>
            {/* <h4 className="product-old-price">$79.99</h4> */}
            <h4 className="product-price">{productCoin(_product)}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
