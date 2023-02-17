import React from 'react'
import './mostSaledProduct.style.css'
import imgSrc from '../../../assets/imgs/mainswiperImg.png'
function MostSaledProduct() {
  return (
    <div className='mostsaledproduct-container' >
        <img className='product-img' src = {imgSrc} />
        <div className='product-info' > 
            test
        </div>
    </div>
  )
}

export default MostSaledProduct