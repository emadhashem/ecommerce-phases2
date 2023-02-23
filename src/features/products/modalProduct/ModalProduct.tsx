import "./modalProduct.scss";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import img from "../../../assets/imgs/Rectangle 35.png";

function ModalProduct() {
  return (
    <div className="ModalProduct">
      <div className="card">
        <div className="single-product">
          <div className="ModalProduct-part-1">
            <div className="product-title">
              <h4>لابتوب أبل</h4>
              <span>2000 $</span>
            </div>
            <div className="img-container">
              <img src={img} alt="" />
            </div>
            <div className="quantity-icons">
              <RemoveCircleRoundedIcon
                fontSize="medium"
                className="remove-icon"
              />
              <span>999</span>
              <AddOutlinedIcon
                fontSize="medium"
                className="add-icon"
              />
            </div>
          </div>
          <hr />
          <div className="ModalProduct-part-2">
            <div className="total-price">
              <p>
                السعر الإجمالي: <span>$ 2000</span>
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
