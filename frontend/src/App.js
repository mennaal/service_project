import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginSignupPage from './pages/LoginSignupPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';

const App = () => {
  const [cart, setCart] = useState([]);  // State to manage the cart items

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-signup" element={<LoginSignupPage />} />
        <Route path="/product" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />} />
      </Routes>
    </Router>
  );
};

export default App;
