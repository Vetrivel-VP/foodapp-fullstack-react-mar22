import React, { createContext, useContext, useState } from "react";
import { fetchCart } from "../utils/fetchCart";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const cartInfo = fetchCart();

  const [cartItems, setCartItems] = useState(cartInfo ? cartInfo : []);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
