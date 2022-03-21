import React, { createContext, useContext, useState } from "react";
import { foodItemsStatic } from "../utils/data";

export const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState(foodItemsStatic);
  return (
    <FoodContext.Provider value={{ foodItems, setFoodItems }}>
      {children}
    </FoodContext.Provider>
  );
};
