import axios from 'axios';
import React, { useState } from 'react';
import '../css/AddProduct.css';

const AddProduct = () => {
  const [form, setForm] =useState({ title: '', image: '', price: '', rating: '' });
  const handleChange = (e) =>setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://fakestoreapi.com/products', {
        title:form.title,
        image:form.image,
        price:form.price,
        rating:form.rating,
      })
      .then((res) => {
        console.log('Product added:', res.data);
        alert('Product added');
        setForm({ title: '', image: '', price: '', rating: '' });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="add-product-container"> {/* New container for centering */}
      <h2>Add New Product</h2>  <br /> <br />
      <form onSubmit={handleSubmit} className="row g-3 justify-content-center">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Product Name
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            id="image"
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            id="price"
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input
            id="rating"
            type="number"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;