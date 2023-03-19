import React, { useState } from "react";
import ModalOverLay from "../../../layouts/modlaOverLay/ModalOverLay";
import ModalProduct from "../../products/modalProduct/ModalProduct";
import CartListItem from "../cartComp/CartListItem";
import "./cartList.scss";

function CartList({ products = [], handleDeletePorduct, handleChangeCount }: any) {
  const [idxOfMadlProduct, setidxOfMadlProduct] = useState<number>(-1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {    
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="CartList-container">
      <ModalOverLay open={open} handleClose={handleClose}>
        {products[idxOfMadlProduct] && (
          <ModalProduct
            product={products[idxOfMadlProduct]}
            handleClose={handleClose}
            onAccept = {handleChangeCount}
          />
        )}
      </ModalOverLay>
      {products.map((item: any, idx : number) => (
        <CartListItem
          handleOpen = {handleOpen}
          handleDeletePorduct={handleDeletePorduct}
          product={item}
          key={item.order_details_id}
          onSetIdx = {() => {
            setidxOfMadlProduct(idx)
          }}
        />
      ))}
    </div>
  );
}

export default CartList;
