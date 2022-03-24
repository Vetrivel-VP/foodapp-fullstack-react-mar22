import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import CreateItem from "./components/CreateItem";
import FoodMenuContainer from "./components/FoodMenuContainer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import UserProfile from "./components/UserProfile";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { motion } from "framer-motion";
import { actionType } from "./context/reducer";
import { useStateValue } from "./context/StateProvider";

import BG from "./img/bg.png";
import MobileBg from "./img/mobileBg.png";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchFoodItems = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden">
      <img
        src={BG}
        className="hidden md:block w-full h-full object-cover"
        alt=""
      />
      <img
        src={MobileBg}
        className="block md:hidden w-full h-full object-cover"
        alt=""
      />
      <main className="absolute inset-0 flex items-center justify-between flex-col">
        <Header />

        <section className="h-[90vh] md:h-[85vh] w-[90vw] md:w-[80vw mb-4 overflow-y-scroll scrollbar-none">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/search/:searchId" element={<FoodMenuContainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/createItem" element={<CreateItem />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default App;
