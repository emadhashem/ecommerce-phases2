import "./modalProduct.scss";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import img from "../../../assets/imgs/Rectangle 35.png";
import { getImg } from "../../../api";

function ModalProduct({ product }: { product?: any }) {
  return (
    <div className="ModalProduct">
      <div className="card">
        <div className="single-product">
          <div className="ModalProduct-part-1">
            <div className="product-title">
              <h4>{product.product_name}</h4>
              <span>{product.product_price_dollar} $</span>
            </div>
            <div className="img-container">
              <img src={getImg(product.product_url)} alt="" />
            </div>
            <div className="quantity-icons">
              <RemoveCircleRoundedIcon
                fontSize="medium"
                className="remove-icon"
              />
              <span>999</span>
              <AddOutlinedIcon fontSize="medium" className="add-icon" />
            </div>
          </div>
          <hr />
          <div className="ModalProduct-part-2">
            <div className="total-price">
              <p>
                السعر الإجمالي: <span>$ {product.product_price_dollar}</span>
              </p>
            </div>
            <div className="confirmation">
              <button className="cancel-btn">
                <span>إلغاء</span>
                <CancelIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
              </button>
              <button className="check-btn">
                <span>موافق</span>
                <CheckCircleRoundedIcon
                  sx={{ color: "#FFFFFF" }}
                  fontSize="large"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProduct;
