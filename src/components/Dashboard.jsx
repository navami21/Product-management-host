import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Dashboard = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setProducts(res.data))
        .catch(err=>console.error(err));
    },[]);
  return (
    <div>
        <h2>Product Dashboard</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div> 
    </div>
  )
}

export default Dashboard