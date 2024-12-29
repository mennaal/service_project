import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetailPage.css'; 

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Grey Tie Top Vest', price: '$20', image: '/images/product1.jpg', description: 'A stylish grey tie top vest.' },
    { id: 2, name: 'Green Skirt', price: '$30', image: '/images/product2.jpg', description: 'Elegant green skirt perfect for summer.' },
    { id: 3, name: 'Blue Classic Top', price: '$40', image: '/images/product3.jpg', description: 'Classic blue top for casual wear.' },
    { id: 4, name: 'Black Tie Top Vest', price: '$50', image: '/images/product4.jpg', description: 'Black tie top vest for formal occasions.' },
    { id: 5, name: 'Navy Blue Skirt', price: '$60', image: '/images/product5.jpg', description: 'Navy blue skirt, an all-season piece.' },
    { id: 6, name: 'Grey Skirt', price: '$70', image: '/images/product6.jpg', description: 'Grey skirt for elegant outings.' },
  ];

  const product = products.find(product => product.id === parseInt(id));

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);  // Add product to cart
      alert('Product added to cart!');
      navigate('/cart');  // Navigate to cart page after adding the product
    }
  };

  return (
    <div className="product-detail-container">
      {product ? (
        <div className="product-detail">
          <img className="product-image" src={product.image} alt={product.name} />
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      ) : (
        <p>Product not found!</p>
      )}
      <button className="back-to-products" onClick={() => navigate('/product')}>Back to Products</button>
    </div>
  );
};

export default ProductDetailPage;
