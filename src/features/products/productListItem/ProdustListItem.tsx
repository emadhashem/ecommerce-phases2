import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import "./productListItem.scss";
import { useContext } from "react";
import { UserContext } from "../../../contexts/category/user.context";
import { postDeleteProductToOrder, postProductToOrder } from "../../../api/product/product";

function ProductListItem({
  productId,
  productImg,
  onClick,
  productName,
  productPrice,
  idx
}: {
  productId: any;
  productImg: any;
  onClick: (idx : number) => void;
  productName : string;
  productPrice : string;
  idx : number
}) {
  const {userToken} = useContext(UserContext)
  const navigate = useNavigate();
  async function addToFavorite() {
    const data = await postProductToOrder(productId, '1' , productPrice , "dollar" , userToken)
  }
  async function removeFromFavorite() {
    // const data = postDeleteProductToOrder()
  }
  return (
    <div className="card" key={productId}>
      <div id={`product-${productId}`} className="single-product">
        <div className="part-1">
          <span className="location">
            قامشلي <LocationOnRoundedIcon className="icon" />
          </span>
          <FavoriteIcon className="fav-icon" onClick = {() => addToFavorite()} />
          <img src={productImg} alt="" onClick={() => navigate("/details", {
            state : {
              product_id : productId
            }
          })} />
         
        </div>
        <div className="part-2">
          <AddShoppingCartIcon className="icon" onClick = {() => onClick(idx)} />
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
