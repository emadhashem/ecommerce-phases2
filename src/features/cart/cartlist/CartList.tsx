import React from 'react'
import CartListItem from '../cartComp/CartListItem'

function CartList() {
  return (
    <div>
        {
            [...Array(6)].map((_ , idx) => (
                <CartListItem />
            ))
        }
    </div>
  )
}

export default CartList