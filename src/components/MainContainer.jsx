import React, { useContext, useEffect, useState } from "react";
import Hero from "../img/hero.png";
import { IoAlarm, IoAdd } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import NewDishes from "./NewDishes";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <AnimatePresence>
      <div className="w-full h-full flex flex-col items-center justify-start">
        {/* Hero section */}
        <div className=" flex flex-col items-center justify-center h-auto relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            whileHover={{ scale: 1.2 }}
            src={Hero}
            className="w-300 md:w-375"
            alt=""
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ delay: 0.5 }}
            className=" h-auto px-2 py-1 bg-gradientBg shadow-lg  rounded-2xl absolute bottom-0 right-0 md:bottom-16 md:-right-32 backdrop-blur-md flex items-center border border-whiteAlpha"
          >
            <img
              src={Hero}
              className="w-10 md:w-16 h-10 md:h-16 rounded-full object-cover"
              alt=""
            />

            <p className="text-sm md:text-base font-semibold text-gray-600">
              Fresh foods
              <span className="block text-[10px] md:text-sm text-gray-600">
                Trendy & Tasty buddy!!!
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className=" h-auto px-4 py-2 border border-whiteAlpha bg-gradientBg shadow-lg  rounded-2xl backdrop-blur-md flex items-center absolute top-0 -left-8 md:top-16 md:-left-16"
          >
            <IoAlarm className="text-gray-900 text-3xl" />

            <p className="text-base font-semibold text-gray-600 ml-2">
              Fastest delivery
            </p>
          </motion.div>
        </div>

        {/* Hero paragraph sections */}
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-[2rem] md:text-[3.25rem] font-semibold text-textColor text-center"
        >
          Wake Up Early, <span className="block">Eat Fresh & Healthy</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-sm md:text-lg text-gray-600 text-center w-300 md:w-460"
        >
          Aside from their natural good taste and freat crunchy, texture
          alongside wonderfull colors and fragnances, eating a large serving of
          fresh.
        </motion.p>

        {/* Hotest dishes */}
        <section className="w-full h-screen flex flex-col items-center mt-12">
          <p className="text-[2rem] text-textColor font-semibold relative before:absolute before:content before:w-24 before:h-1 before:rounded-md before:bg-emerald-400 before:bottom-0 before:left-24">
            Our new hotest dishes
          </p>
          <div className="w-full my-8 p-12 flex flex-wrap gap-16 items-center justify-between">
            {Array.apply(null, { length: 4 }).map((data, i) => (
              <NewDishes
                key={i + 1}
                data={
                  foodItems &&
                  foodItems[Math.floor(Math.random() * foodItems.length - 1)]
                }
              />
            ))}
          </div>
        </section>

        <section className="w-full h-225 bg-black flex flex-col items-center mt-12"></section>
      </div>
    </AnimatePresence>
  );
};

export default MainContainer;
