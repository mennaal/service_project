import React from 'react';
import { Link } from 'react-router-dom';  // To navigate to product details page
import './ProductPage.css';

const ProductPage = () => {
  const products = [
    { id: 1, name: 'Grey Tie Top Vest', price: '$20', image: '/images/product1.jpg', description: 'A stylish grey tie top vest.' },
    { id: 2, name: 'Green Skirt', price: '$30', image: '/images/product2.jpg', description: 'Elegant green skirt perfect for summer.' },
    { id: 3, name: 'Blue Classic Top', price: '$40', image: '/images/product3.jpg', description: 'Classic blue top for casual wear.' },
    { id: 4, name: 'Black Tie Top Vest', price: '$50', image: '/images/product4.jpg', description: 'Black tie top vest for formal occasions.' },
    { id: 5, name: 'Navy Blue Skirt', price: '$60', image: '/images/product5.jpg', description: 'Navy blue skirt, an all-season piece.' },
    { id: 6, name: 'Grey Skirt', price: '$70', image: '/images/product6.jpg', description: 'Grey skirt for elegant outings.' },
    // Add more products as needed
  ];

  return (
    <div className="product-page-container">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />  {/* Add the image */}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
