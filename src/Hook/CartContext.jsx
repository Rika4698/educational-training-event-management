/* eslint-disable react/prop-types */

// import  { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

//  export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cart"));
//     if (cartItems && cartItems.length > 0) {
//       setCart(cartItems);
//       setCartCount(cartItems.length);
//     }
//   }, []);


// console.log(cart.length);



  // const addToCart = (item) => {
  //   const updatedCart = [...cart, item];
  //   setCart(updatedCart);
  //   setCartCount(updatedCart.length);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

//   const removeFromCart = (id) => {
//     const updatedCart = cart.filter((item) => item.id !== id);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCart(updatedCart);
//     setCartCount(updatedCart.length);
//     if (updatedCart.length == 0) {
//       localStorage.clear();
//     } 
//   };

//   return (
//     <CartContext.Provider value={{ cart, cartCount,  removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

import  { createContext, useState, useEffect } from "react";

// Create CartContext
export const CartContext = createContext();

// CartProvider to wrap the app and share state globally
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Initialize cart from localStorage on first render
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems); // Update state from localStorage
  }, []);

  // Function to add item to cart
  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart); // Update state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync with localStorage
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart); // Update state
    if (updatedCart.length === 0) {
      localStorage.removeItem("cart");
    } else {
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync with localStorage
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};