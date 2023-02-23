import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import "./productListItem.scss";

function ProductListItem({
  productId,
  productImg,
  onClick,
}: {
  productId: any;
  productImg: any;
  onClick: () => void;
}) {
  const navigate = useNavigate();

  return (
    <div className="card" key={productId}>
      <div id={`product-${productId}`} className="single-product">
        <div className="part-1">
          <span className="location">
            قامشلي <LocationOnRoundedIcon className="icon" />
          </span>
          <img src={productImg} alt="" />
          <ul>
            <li onClick={onClick}>
              <a>
                <AddShoppingCartIcon />
              </a>
            </li>
            <li>
              <a>
                <FavoriteIcon />
              </a>
            </li>
            <li onClick={() => navigate("/details")}>
              <a>
                <FullscreenIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="part-2">
          <h3 className="product-title">جهاز لوحي </h3>
          {/* <h4 className="product-old-price">$79.99</h4> */}
          <h4 className="product-price">$49.99</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
