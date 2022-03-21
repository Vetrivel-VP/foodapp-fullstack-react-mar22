import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./context/AuthContext";
import { CartContextProvider } from "./context/CartContext";
import { FoodContextProvider } from "./context/FoodItemsContext";

ReactDOM.render(
  <Router>
    <UserProvider>
      <CartContextProvider>
        <FoodContextProvider>
          <App />
        </FoodContextProvider>
      </CartContextProvider>
    </UserProvider>
  </Router>,
  document.getElementById("root")
);
