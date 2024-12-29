import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h2>Welcome to Neutrals</h2>
      <img
        className="homepage-image"
        src="/images/homepage-image.jpg" 
        alt="E-commerce"
      />
      <Link to="/login-signup">
        <button className="go-to-login-signup">Go to Login/Signup</button>
      </Link>
    </div>
  );
};

export default HomePage;
