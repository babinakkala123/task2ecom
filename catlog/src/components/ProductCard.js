import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img
      src={product.image || 'https://via.placeholder.com/200'}
      alt={product.name}
      className="product-image"
    />
    <h3>{product.name}</h3>
    <p className="price">${product.price}</p>
    <p className="category">{product.category}</p>
    <Link to={`/products/${product._id}`} className="details-btn">
      View Details
    </Link>
  </div>
);

export default ProductCard;