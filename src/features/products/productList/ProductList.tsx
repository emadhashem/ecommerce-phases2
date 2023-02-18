import React, { useContext } from 'react'
import { CategoryContext } from '../../../contexts/category/category.context'

function ProductList() {
    const {id} = useContext(CategoryContext)
  return (
    <div>
        رقم التصنيف {id}
    </div>
  )
}

export default ProductList