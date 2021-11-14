import React from 'react'
import { Link } from 'react-router-dom'
import ProductCardCss from './ProductCard.module.scss'

const ProductCard = () => {

  return (
    <Link to="/details" className={ProductCardCss.card}>
      <div className={ProductCardCss.img}>

    
          <img alt="" src="images/sneaker 1 1.png" />
      </div>
      <div className={ProductCardCss.desp}>

       <h2>Air Max pegasus 37</h2>
         <p>Mens Running Shoes</p>
      </div>
    </Link>
  )
}

export default ProductCard
