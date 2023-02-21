import React from "react";
import CartListItem from "../cartComp/CartListItem";
import "./cartList.scss";

function CartList() {
  return (
    <div className="CartList-container">
      {[...Array(6)].map((_, idx) => (
        <CartListItem />
      ))}
    </div>
  );
}

export default CartList;
