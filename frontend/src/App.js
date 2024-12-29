
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import LoginSignupPage from './pages/LoginSignupPage';
// import ProductPage from './pages/ProductPage';
// import ProductDetailPage from './pages/ProductDetailPage';
// import CartPage from './pages/CartPage';

// const App = () => {
//   const [cart, setCart] = useState([]);  // State to manage the cart items

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find(item => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const increaseQuantity = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decreaseQuantity = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login-signup" element={<LoginSignupPage />} />
//         <Route path="/product" element={<ProductPage addToCart={addToCart} />} />
//         <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
//         <Route path="/cart" element={<CartPage cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;












// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import LoginSignupPage from './pages/LoginSignupPage';
// import ProductPage from './pages/ProductPage';
// import ProductDetailPage from './pages/ProductDetailPage';
// import CartPage from './pages/CartPage';

// const App = () => {
//   const [cart, setCart] = useState([]);

//   const increaseQuantity = (productId) => {
//     setCart((prevCart) =>
//       prevCart.map((product) =>
//         product.id === productId
//           ? { ...product, quantity: product.quantity + 1 }
//           : product
//       )
//     );
//   };

//   const decreaseQuantity = (productId) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((product) => {
//           if (product.id === productId) {
//             if (product.quantity > 1) {
//               return { ...product, quantity: product.quantity - 1 };
//             }
//             return null; // Remove the product if quantity reaches zero
//           }
//           return product;
//         })
//         .filter((product) => product !== null)
//     );
//   };

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };


//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login-signup" element={<LoginSignupPage />} />
//         <Route
//           path="/product"
//           element={<ProductPage addToCart={addToCart} />}
//         />
//         <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
//         <Route
//           path="/cart"
//           element={
//             <CartPage
//               cart={cart}
//               setCart={setCart}
//               increaseQuantity={increaseQuantity}
//               decreaseQuantity={decreaseQuantity}
//             />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;








import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginSignupPage from './pages/LoginSignupPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  const [cart, setCart] = useState([]);

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((product) => {
          if (product.id === productId) {
            if (product.quantity > 1) {
              return { ...product, quantity: product.quantity - 1 };
            }
            return null; // Remove the product if quantity reaches zero
          }
          return product;
        })
        .filter((product) => product !== null)
    );
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-signup" element={<LoginSignupPage />} />
        <Route
          path="/product"
          element={<ProductPage addToCart={addToCart} />}
        />
        <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              setCart={setCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />}
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cart={cart} totalPrice={totalPrice} setCart={setCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
