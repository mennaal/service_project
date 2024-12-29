import React from 'react';
import { Link } from 'react-router-dom'; // Link for navigation
import './NavBar.css'; // Import your CSS for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">MyShop</Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/product" className="navbar-link">Products</Link>
          </li>
          <li className="navbar-item">
            <Link to="/cart" className="navbar-link">Cart</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login-signup" className="navbar-link">Login/Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
