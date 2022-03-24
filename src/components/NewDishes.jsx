import React, { useContext, useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const NewDishes = ({ data, setCart, cart }) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={{
          hidden: (i) => ({
            opacity: 0,
            scale: 0.6,
          }),
          visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
              delay: i * 0.025,
            },
          }),
          removed: {
            opacity: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        exit="removed"
        className="group newDishCard min-w-[250px] "
      >
        <div className="w-150 h-150  rounded-full shadow-2xl absolute -top-12 bg-cardColor">
          <img
            src={data?.imageURL}
            alt="item"
            className="w-full h-full rounded-full object-contain"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center  mt-24 cursor-pointer">
          <p className="text-2xl text-textColor group-hover:text-gray-100 text-center font-semibold my-2">
            {data?.title}
          </p>
          <div className="w-full h-[1px] bg-slate-200 my-1"></div>
          <p className="text-lg text-gray-500 group-hover:text-gray-100 font-normal my-1">
            {data?.calories} Calories
          </p>
          <div className="w-full h-[1px] bg-slate-200 my-1"></div>
          {setCart && (
            <div className="w-full flex items-center justify-between mt-1">
              <p className="text-2xl text-textColor group-hover:text-gray-100 font-semibold">
                $ {data?.price}
              </p>
              <div
                className="w-10 h-10 rounded-xl bg-yellow-500 group-hover:bg-cardColor flex items-center justify-center"
                // onClick={() => setCartItems([...cartItems, data])}
                onClick={() => setCart([...cart, data])}
              >
                <IoAdd className="text-2xl text-white group-hover:text-emerald-500 font-semibold" />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewDishes;
