// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const CheckoutPage = ({ cart, totalPrice, setCart }) => {
//   const navigate = useNavigate();

//   const handlePlaceOrder = () => {
//     // Display success message
//     alert('Order placed successfully!');

//     // Clear the cart after placing the order
//     setCart([]);

//     // Navigate back to the Product Page
//     navigate('/product');
//   };

//   return (
//     <div className="checkout-page-container">
//       <h2>Checkout</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <div className="checkout-items">
//           <h3>Your Order</h3>
//           {cart.map((product) => (
//             <div key={product.id} className="checkout-item">
//               <img src={product.image} alt={product.name} />
//               <p>{product.name}</p>
//               <p>{product.price}</p>
//               <p>Quantity: {product.quantity}</p>
//             </div>
//           ))}
//           <div className="checkout-total">
//             <p>Total Price: ${totalPrice.toFixed(2)}</p>
//           </div>
//           <button className="place-order-button" onClick={handlePlaceOrder}>
//             Place Order
//           </button>
//           <button
//             className="back-to-product-button"
//             onClick={() => navigate('/product')}
//           >
//             Back to Product Page
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;




///form

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const CheckoutPage = ({ cart, totalPrice, setCart }) => {
//   const navigate = useNavigate();

//   // State for user details
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     address: '',
//     email: '',
//     phone: '',
//   });

//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({ ...userDetails, [name]: value });
//   };

//   const handlePlaceOrder = () => {
//     // Validate form fields
//     const { name, address, email, phone } = userDetails;
//     if (!name || !address || !email || !phone) {
//       setError('Please fill in all fields before placing the order.');
//       return;
//     }

//     // Display success message
//     alert('Order placed successfully!');

//     // Clear the cart and reset the form after placing the order
//     setCart([]);
//     setUserDetails({ name: '', address: '', email: '', phone: '' });

//     // Navigate back to the Product Page
//     navigate('/product');
//   };

//   return (
//     <div className="checkout-page-container">
//       <h2>Checkout</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <div className="checkout-items">
//           <h3>Your Order</h3>
//           {cart.map((product) => (
//             <div key={product.id} className="checkout-item">
//               <img src={product.image} alt={product.name} />
//               <p>{product.name}</p>
//               <p>{product.price}</p>
//               <p>Quantity: {product.quantity}</p>
//             </div>
//           ))}
//           <div className="checkout-total">
//             <p>Total Price: ${totalPrice.toFixed(2)}</p>
//           </div>

//           <h3>Shipping Details</h3>
//           {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
//           <form className="checkout-form">
//             <div>
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={userDetails.name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="address">Address:</label>
//               <textarea
//                 id="address"
//                 name="address"
//                 value={userDetails.address}
//                 onChange={handleInputChange}
//                 required
//               ></textarea>
//             </div>
//             <div>
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={userDetails.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="phone">Phone Number:</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={userDetails.phone}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </form>

//           <button className="place-order-button" onClick={handlePlaceOrder}>
//             Place Order
//           </button>
//           <button
//             className="back-to-product-button"
//             onClick={() => navigate('/product')}
//           >
//             Back to Product Page
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;








import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css'; // Import the CSS for styling

const CheckoutPage = ({ cart, totalPrice, setCart }) => {
  const navigate = useNavigate();

  // State for user details
  const [userDetails, setUserDetails] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handlePlaceOrder = () => {
    // Validate form fields
    const { name, address, email, phone } = userDetails;
    if (!name || !address || !email || !phone) {
      setError('Please fill in all fields before placing the order.');
      return;
    }

    // Display success message
    alert('Order placed successfully!');

    // Clear the cart and reset the form after placing the order
    setCart([]);
    setUserDetails({ name: '', address: '', email: '', phone: '' });

    // Navigate back to the Product Page
    navigate('/product');
  };

  return (
    <div className="checkout-page-container">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="checkout-items">
          <h3>Your Order</h3>
          {cart.map((product) => {
            // Ensure product.price is a number before calling toFixed
            const price = Number(product.price);
            return (
              <div key={product.id} className="checkout-item">
                <img src={product.image} alt={product.name} className="checkout-item-image" />
                <div className="checkout-item-details">
                  <p>{product.name}</p>
                  <p>${!isNaN(price) ? price.toFixed(2) : 'Invalid Price'}</p>
                  <p>Quantity: {product.quantity}</p>
                </div>
              </div>
            );
          })}
          <div className="checkout-total">
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>

          <h3>Shipping Details</h3>
          {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
          <form className="checkout-form">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={userDetails.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </form>

          <button className="place-order-button" onClick={handlePlaceOrder}>
            Place Order
          </button>
          <button
            className="back-to-product-button"
            onClick={() => navigate('/product')}
          >
            Back to Product Page
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

