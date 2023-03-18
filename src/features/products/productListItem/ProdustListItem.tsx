import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import "./productListItem.scss";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/category/user.context";
import { addFavorite, deleteFavorite } from "../../../api/favorites/favorites";
import { CircularProgress } from "@mui/material";

function ProductListItem({
  productId,
  productImg,
  onClick,
  productName,
  productPrice,
  idx,
  in_favorite,
  handleRemoveFromList,
}: {
  productId: any;
  productImg: any;
  onClick: (idx: number) => void;
  productName: string;
  productPrice: string;
  idx: number;
  in_favorite: boolean;
  handleRemoveFromList: (id: string) => void;
}) {
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
            قامشلي <LocationOnRoundedIcon className="icon" />
          </span>
          {favoriteLoading ? <CircularProgress /> : (
            <FavoriteIcon
              style={{
                color: favorite ? "red" : "",
              }}
              className="fav-icon"
              onClick={() =>
                favorite ? removeFromFavorite() : addToFavorite()
              }
            />
          )}
          <img
            src={productImg}
            alt=""
            onClick={() =>
              navigate("/details", {
                state: {
                  product_id: productId,
                },
              })
            }
          />
        </div>
        <div className="part-2">
          <AddShoppingCartIcon className="icon" onClick={() => onClick(idx)} />
          <div className="product-info">
            <h3 className="product-title" onClick={() => navigate("/details")}>
              {productName}
            </h3>
            {/* <h4 className="product-old-price">$79.99</h4> */}
            <h4 className="product-price">${productPrice}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
