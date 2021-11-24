import React from 'react'
import { Link } from 'react-router-dom'
import ProductCardCss from './ProductCard.module.scss'

const ProductCard = ({ product }) => {
  const {
    product_name,
    category,
    images,
    sku
  } = product;
  
  return (
    <Link 
    to={{ 
      pathname: `/details`, 
      state: product 
     }}
      className={ProductCardCss.card}>
      <div className={ProductCardCss.img}>
        <img alt="" src={images[0]} />
      </div>
      <div className={ProductCardCss.desp}>

       <h2>{product_name}</h2>
         <p>{category}</p>
      </div>
    </Link>
  )
}

export default ProductCard
