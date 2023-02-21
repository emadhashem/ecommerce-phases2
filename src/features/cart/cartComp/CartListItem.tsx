import React from "react";
import "./cartListItem.scss";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import img from "../../../assets/imgs/Rectangle 35.png";

function CartListItem() {
  return (
    <div className="CartListItem-container">
      <div className="delete-icon">
        <DeleteIcon fontSize="large" className="dicon" />
      </div>
      <div className="single-product">
        <div className="product-title">
          <h4>لابتوب أبل</h4>
          <span>2000 $</span>
        </div>
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <div className="quantity-icons">
          <RemoveCircleRoundedIcon
            sx={{ color: "#B8B8B8" }}
            fontSize="medium"
            className="remove-icon"
          />
          <span>999</span>
          <AddOutlinedIcon fontSize="medium" className="add-icon" />
        </div>
      </div>
    </div>
  );
}

export default CartListItem;
