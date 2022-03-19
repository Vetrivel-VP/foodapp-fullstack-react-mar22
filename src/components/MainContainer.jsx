import React, { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import Hero from "../img/hero.png";
import { IoAlarm } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const MainContainer = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <AnimatePresence>
      <div className="w-full h-full flex flex-col items-center justify-start">
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
      </div>
    </AnimatePresence>
  );
};

export default MainContainer;
