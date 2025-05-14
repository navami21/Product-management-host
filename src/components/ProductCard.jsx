import React from 'react'
import '../css/ProductCard.css'

const ProductCard = ({product}) => {
  return (
    <div className="card h-100">
    <img src={product.image} className="card-img-top p-3" style={{ height: '200px', objectFit: 'contain' }} alt={product.title} />
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">Price: ${product.price}</p>
      <p className="card-text">Rating: {product.rating?.rate ?? 'N/A'}</p>
    </div>
  </div>
    )
}

export default ProductCard