
// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './CartPage.css'; // Import your CSS

// const CartPage = ({ cart, increaseQuantity, decreaseQuantity }) => {
//   const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Calculate total price

// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './CartPage.css'; // Import your CSS

// const CartPage = ({ cart, increaseQuantity, decreaseQuantity }) => {
//   const navigate = useNavigate(); // Initialize useNavigate for navigation

//   // Calculate total price
//   const totalPrice = cart.reduce(
//     (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
//     0
//   );

//   return (
//     <div className="cart-page-container">
//       <h2>Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <div className="cart-items">
//           {cart.map((product) => (
//             <div key={product.id} className="cart-item">
//               <img src={product.image} alt={product.name} />
//               <p>{product.name}</p>
//               <p>{product.price}</p>
//               <div className="quantity-control">
//                 <button onClick={() => decreaseQuantity(product.id)}>-</button>
//                 <span>{product.quantity}</span>
//                 <button onClick={() => increaseQuantity(product.id)}>+</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="cart-total">
//         <p>Total: ${totalPrice.toFixed(2)}</p>
//       </div>
//       {/* Button to return to the product page */}
//       <button className="back-to-products" onClick={() => navigate('/product')}>
//         Return to Product Page
//       </button>
//     </div>
//   );
// };

// export default CartPage;





// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CartPage.css';

// const CartPage = ({ cart, increaseQuantity, decreaseQuantity }) => {
//   const navigate = useNavigate();

//   const totalPrice = cart.reduce(
//     (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
//     0
//   );

//   return (
//     <div className="cart-page-container">
//       <h2>Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <div className="cart-items">
//           {cart.map((product) => (
//             <div key={product.id} className="cart-item">
//               <img src={product.image} alt={product.name} />
//               <p>{product.name}</p>
//               <p>{product.price}</p>
//               <div className="quantity-control">
//                 <button onClick={() => decreaseQuantity(product.id)}>-</button>
//                 <span>{product.quantity}</span>
//                 <button onClick={() => increaseQuantity(product.id)}>+</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="cart-total">
//         <p>Total: ${totalPrice.toFixed(2)}</p>
//       </div>
//       <button className="back-to-products" onClick={() => navigate('/product')}>
//         Return to Product Page
//       </button>
//     </div>
//   );
// };

// export default CartPage;









// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CartPage.css';

// const CartPage = ({ cart, increaseQuantity, decreaseQuantity }) => {
//   const navigate = useNavigate();

//   const totalPrice = cart.reduce(
//     (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
//     0
//   );

//   return (
//     <div className="cart-page-container">
//       <h2>Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <div className="cart-items">
//           {cart.map((product) => (
//             <div key={product.id} className="cart-item">
//               <img src={product.image} alt={product.name} />
//               <p>{product.name}</p>
//               <p>{product.price}</p>
//               <div className="quantity-control">
//                 <button onClick={() => decreaseQuantity(product.id)}>-</button>
//                 <span>{product.quantity}</span>
//                 <button onClick={() => increaseQuantity(product.id)}>+</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="cart-total">
//         <p>Total: ${totalPrice.toFixed(2)}</p>
//       </div>
//       <button className="back-to-products" onClick={() => navigate('/product')}>
//         Return to Product Page
//       </button>
//     </div>
//   );
// };

// export default CartPage;






import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';


const CartPage = ({ cart, increaseQuantity, decreaseQuantity }) => {
  const navigate = useNavigate();


  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );

  return (
    <div className="cart-page-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <div className="quantity-control">
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => increaseQuantity(product.id)}>+</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <p>Total: ${totalPrice.toFixed(2)}</p>
      </div>

      {/* Button to return to the product page */}

      <button className="checkout-button" onClick={() => navigate('/checkout')}>
        Checkout
      </button>

      <button className="back-to-products" onClick={() => navigate('/product')}>
        Return to Product Page
      </button>
    </div>
  );
};


export default CartPage;
