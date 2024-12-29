
// import React from 'react';
// import { Link } from 'react-router-dom';  // To navigate to product details page
// import './ProductPage.css';

// const ProductPage = () => {
//   const products = [
//     { id: 1, name: 'Grey Tie Top Vest', price: '$20', image: '/images/product1.jpg', description: 'A stylish grey tie top vest.' },
//     { id: 2, name: 'Green Skirt', price: '$30', image: '/images/product2.jpg', description: 'Elegant green skirt perfect for summer.' },
//     { id: 3, name: 'Blue Classic Top', price: '$40', image: '/images/product3.jpg', description: 'Classic blue top for casual wear.' },
//     { id: 4, name: 'Black Tie Top Vest', price: '$50', image: '/images/product4.jpg', description: 'Black tie top vest for formal occasions.' },
//     { id: 5, name: 'Navy Blue Skirt', price: '$60', image: '/images/product5.jpg', description: 'Navy blue skirt, an all-season piece.' },
//     { id: 6, name: 'Grey Skirt', price: '$70', image: '/images/product6.jpg', description: 'Grey skirt for elegant outings.' },
//     // Add more products as needed
//   ];

//   return (
//     <div className="product-page-container">
//       <h2>Our Products</h2>
//       <div className="product-list">
//         {products.map(product => (
//           <div key={product.id} className="product-item">
//             <img src={product.image} alt={product.name} className="product-image" />  {/* Add the image */}
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <p>{product.price}</p>
//             <Link to={`/product/${product.id}`}>View Details</Link>
// =======
// // import React from 'react';
// // import { Link } from 'react-router-dom';  // To navigate to product details page
// // import './ProductPage.css';

// // const ProductPage = () => {
//   const products = [
//     { id: 1, name: 'Grey Tie Top Vest', price: '$20', image: '/images/product1.jpg', description: 'A stylish grey tie top vest.' },
//     { id: 2, name: 'Green Skirt', price: '$30', image: '/images/product2.jpg', description: 'Elegant green skirt perfect for summer.' },
//     { id: 3, name: 'Blue Classic Top', price: '$40', image: '/images/product3.jpg', description: 'Classic blue top for casual wear.' },
//     { id: 4, name: 'Black Tie Top Vest', price: '$50', image: '/images/product4.jpg', description: 'Black tie top vest for formal occasions.' },
//     { id: 5, name: 'Navy Blue Skirt', price: '$60', image: '/images/product5.jpg', description: 'Navy blue skirt, an all-season piece.' },
//     { id: 6, name: 'Grey Skirt', price: '$70', image: '/images/product6.jpg', description: 'Grey skirt for elegant outings.' },
//     // Add more products as needed
//   ];

//   return (
//     <div className="product-page-container">
//       <h2>Our Products</h2>
//       <div className="product-list">
//         {products.map(product => (
//           <div key={product.id} className="product-item">
//             <img src={product.image} alt={product.name} className="product-image" />  {/* Add the image */}
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <p>{product.price}</p>
//             <Link to={`/product/${product.id}`}>View Details</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;







// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome for icons
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Cart icon
// import './ProductPage.css';

// const ProductPage = () => {
//   const navigate = useNavigate(); // For navigation

//   const products = [
//     { id: 1, name: 'Grey Tie Top Vest', price: '$20', image: '/images/product1.jpg', description: 'A stylish grey tie top vest.' },
//     { id: 2, name: 'Green Skirt', price: '$30', image: '/images/product2.jpg', description: 'Elegant green skirt perfect for summer.' },
//     { id: 3, name: 'Blue Classic Top', price: '$40', image: '/images/product3.jpg', description: 'Classic blue top for casual wear.' },
//     { id: 4, name: 'Black Tie Top Vest', price: '$50', image: '/images/product4.jpg', description: 'Black tie top vest for formal occasions.' },
//     { id: 5, name: 'Navy Blue Skirt', price: '$60', image: '/images/product5.jpg', description: 'Navy blue skirt, an all-season piece.' },
//     { id: 6, name: 'Grey Skirt', price: '$70', image: '/images/product6.jpg', description: 'Grey skirt for elegant outings.' },
//     // Add more products as needed
//   ];

//   return (
//     <div className="product-page-container">
//       <header className="product-page-header">
//         <h2>Our Products</h2>
//         {/* Cart Icon Button */}
//         <button
//           className="cart-button"
//           onClick={() => navigate('/cart')} // Navigate to the CartPage
//         >
//           <FontAwesomeIcon icon={faShoppingCart} /> View Cart
//         </button>
//       </header>

//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-item">
//             <img src={product.image} alt={product.name} className="product-image" />
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <p>{product.price}</p>
//             <Link to={`/product/${product.id}`}>View Details</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;





// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './ProductPage.css';

// const ProductPage = ({ addToCart }) => {
//   const navigate = useNavigate(); // For navigation to the cart page

//   const [addedMessage, setAddedMessage] = useState({}); // Track messages for each product

//   const products = [
//     { id: 1, name: 'Grey Tie Top Vest', price: '$20', image: '/images/product1.jpg' },
//     { id: 2, name: 'Green Skirt', price: '$30', image: '/images/product2.jpg' },
//     { id: 3, name: 'Blue Classic Top', price: '$40', image: '/images/product3.jpg' },
//     { id: 4, name: 'Black Tie Top Vest', price: '$50', image: '/images/product4.jpg' },
//     { id: 5, name: 'Navy Blue Skirt', price: '$60', image: '/images/product5.jpg' },
//     { id: 6, name: 'Grey Skirt', price: '$70', image: '/images/product6.jpg' },
//   ];

//   const handleAddToCart = (product) => {
//     addToCart(product); // Add product to the cart
//     setAddedMessage((prev) => ({
//       ...prev,
//       [product.id]: 'Product added to cart!',
//     }));

//     // Clear the message after 2 seconds
//     setTimeout(() => {
//       setAddedMessage((prev) => ({
//         ...prev,
//         [product.id]: '',
//       }));
//     }, 2000);
//   };

//   return (
//     <div className="product-page-container">
//       {/* Header with View Cart Button */}
//       <header className="product-page-header">
//         <h2>Our Products</h2>
//         <button
//           className="cart-button"
//           onClick={() => navigate('/cart')} // Navigate to the cart page
//         >
//           View Cart
//         </button>
//       </header>

//       {/* Product List */}
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-item">
//             <img src={product.image} alt={product.name} className="product-image" />
//             <h3>{product.name}</h3>
//             <p>{product.price}</p>
//             <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//             {/* Display confirmation message */}
//             {addedMessage[product.id] && (
//               <p className="added-message">{addedMessage[product.id]}</p>
//             )}
//             {/* View Details Link */}
//             <Link to={`/product/${product.id}`} className="details-link">
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;








import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = ({ addToCart }) => {
  const navigate = useNavigate(); // For navigation to the cart page

  const [addedMessage, setAddedMessage] = useState({}); // Track messages for each product

  const products = [
    { id: 1, name: 'Grey Tie Top Vest', price: '$20', image: '/images/product1.jpg' },
    { id: 2, name: 'Green Skirt', price: '$30', image: '/images/product2.jpg' },
    { id: 3, name: 'Blue Classic Top', price: '$40', image: '/images/product3.jpg' },
    { id: 4, name: 'Black Tie Top Vest', price: '$50', image: '/images/product4.jpg' },
    { id: 5, name: 'Navy Blue Skirt', price: '$60', image: '/images/product5.jpg' },
    { id: 6, name: 'Grey Skirt', price: '$70', image: '/images/product6.jpg' },
  ];

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to the cart
    setAddedMessage((prev) => ({
      ...prev,
      [product.id]: 'Product added to cart!',
    }));

    // Clear the message after 2 seconds
    setTimeout(() => {
      setAddedMessage((prev) => ({
        ...prev,
        [product.id]: '',
      }));
    }, 2000);
  };

  return (
    <div className="product-page-container">
      {/* Header with View Cart Button */}
      <header className="product-page-header">
        <h2>Our Products</h2>
        <button
          className="cart-button"
          onClick={() => navigate('/cart')} // Navigate to the cart page
        >
          View Cart
        </button>
      </header>

      {/* Product List */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            {/* Display confirmation message */}
            {addedMessage[product.id] && (
              <p className="added-message">{addedMessage[product.id]}</p>
            )}
            {/* View Details Link */}
            <Link to={`/product/${product.id}`} className="details-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
