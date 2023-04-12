import React, { useContext, useState } from "react";
import "./cartListItem.scss";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import img from "../../../assets/imgs/Rectangle 35.png";
import { getImg } from "../../../api";
import { UserContext } from "../../../contexts/category/user.context";
import { postDeleteProductToOrder } from "../../../api/product/product";
import { CircularProgress } from "@mui/material";
import { handelResult, productCoinInCart } from "../../../shared/helper";

function CartListItem({
  product,
  handleDeletePorduct,
  handleOpen,
  onSetIdx,
}: any) {
  const [deleteLoading, setdeleteLoading] = useState(false);
  const { userToken } = useContext(UserContext);
  async function deleteProductFromCart() {
    try {
      setdeleteLoading(true);

      const data = await postDeleteProductToOrder(
        product.order_details_id,
        userToken
      );
      handleDeletePorduct(product.order_details_id);
      setdeleteLoading(false);
    } catch (error: any) {
      setdeleteLoading(false);
      alert(error.message);
    }
  }
  return (
    <div className="CartListItem-container">
      <div className="delete-icon">
        {deleteLoading ? (
          <CircularProgress />
        ) : (
          <DeleteIcon
            onClick={deleteProductFromCart}
            fontSize="large"
            className="dicon"
          />
        )}
      </div>
      <div className="single-product">
        <div className="product-title">
          <p className="title">{handelResult(product.product_name, 17)}</p>
          <p>{productCoinInCart(product)}</p>
        </div>
        <div className="img-container">
          <img src={getImg(product.product_photo_url)} alt="" />
        </div>
        <div className="quantity-icons">
          <RemoveCircleRoundedIcon
            onClick={() => {
              onSetIdx();
              handleOpen();
            }}
            sx={{ color: "#B8B8B8" }}
            fontSize="medium"
            className="remove-icon"
          />
          <span>{product.product_count}</span>
          <AddOutlinedIcon
            onClick={() => {
              onSetIdx();
              handleOpen();
            }}
            fontSize="medium"
            className="add-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default CartListItem;
