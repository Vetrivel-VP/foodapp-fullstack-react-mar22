import React, { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import Hero from "../img/hero.png";
import { IoAlarm, IoAdd } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const MainContainer = () => {
  const { user, setUser } = useContext(UserContext);

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
            <div className="group newDishCard">
              <div className="w-150 h-150 rounded-full shadow-2xl absolute -top-12 ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza2.png?alt=media&token=e9b65d7f-bd12-4c33-b172-729f1dfcf461"
                  alt="item"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center  mt-24 cursor-pointer">
                <p className="text-2xl text-textColor group-hover:text-gray-100 text-center font-semibold my-2">
                  Fresh and healthy pizza
                </p>
                <div className="w-full h-[1px] bg-slate-200 my-1"></div>
                <p className="text-lg text-gray-500 group-hover:text-gray-100 font-normal my-1">
                  60 calories
                </p>
                <div className="w-full h-[1px] bg-slate-200 my-1"></div>
                <div className="w-full flex items-center justify-between mt-1">
                  <p className="text-2xl text-textColor group-hover:text-gray-100 font-semibold">
                    $ 2.64
                  </p>
                  <div className="w-10 h-10 rounded-xl bg-yellow-500 group-hover:bg-cardColor flex items-center justify-center">
                    <IoAdd className="text-2xl text-white group-hover:text-emerald-500 font-semibold" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group newDishCard">
              <div className="w-150 h-150 rounded-full shadow-2xl absolute -top-12 ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza2.png?alt=media&token=e9b65d7f-bd12-4c33-b172-729f1dfcf461"
                  alt="item"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center  mt-24 cursor-pointer">
                <p className="text-2xl text-textColor group-hover:text-gray-100 text-center font-semibold my-2">
                  Fresh and healthy pizza
                </p>
                <div className="w-full h-[1px] bg-slate-200 my-1"></div>
                <p className="text-lg text-gray-500 group-hover:text-gray-100 font-normal my-1">
                  60 calories
                </p>
                <div className="w-full h-[1px] bg-slate-200 my-1"></div>
                <div className="w-full flex items-center justify-between mt-1">
                  <p className="text-2xl text-textColor group-hover:text-gray-100 font-semibold">
                    $ 2.64
                  </p>
                  <div className="w-10 h-10 rounded-xl bg-yellow-500 group-hover:bg-cardColor flex items-center justify-center">
                    <IoAdd className="text-2xl text-white group-hover:text-emerald-500 font-semibold" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group newDishCard">
              <div className="w-150 h-150 rounded-full shadow-2xl absolute -top-12 ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza2.png?alt=media&token=e9b65d7f-bd12-4c33-b172-729f1dfcf461"
                  alt="item"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center  mt-24 cursor-pointer">
                <p className="text-2xl text-textColor group-hover:text-gray-100 text-center font-semibold my-2">
                  Fresh and healthy pizza
                </p>
                <div className="w-full h-[1px] bg-slate-200 my-1"></div>
                <p className="text-lg text-gray-500 group-hover:text-gray-100 font-normal my-1">
                  60 calories
                </p>
                <div className="w-full h-[1px] bg-slate-200 my-1"></div>
                <div className="w-full flex items-center justify-between mt-1">
                  <p className="text-2xl text-textColor group-hover:text-gray-100 font-semibold">
                    $ 2.64
                  </p>
                  <div className="w-10 h-10 rounded-xl bg-yellow-500 group-hover:bg-cardColor flex items-center justify-center">
                    <IoAdd className="text-2xl text-white group-hover:text-emerald-500 font-semibold" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group newDishCard">
              <div className="w-150 h-150 rounded-full shadow-2xl absolute -top-12 ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza2.png?alt=media&token=e9b65d7f-bd12-4c33-b172-729f1dfcf461"
                  alt="item"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center  mt-24 cursor-pointer">
                <p className="text-2xl text-textColor group-hover:text-gray-100 text-center font-semibold my-2">
                  Fresh and healthy pizza
                </p>
                <div className="w-full h-[1px] bg-slate-200 my-1"></div>
                <p className="text-lg text-gray-500 group-hover:text-gray-100 font-normal my-1">
                  60 calories
                </p>
                <div className="w-full h-[1px] bg-slate-200 my-1"></div>
                <div className="w-full flex items-center justify-between mt-1">
                  <p className="text-2xl text-textColor group-hover:text-gray-100 font-semibold">
                    $ 2.64
                  </p>
                  <div className="w-10 h-10 rounded-xl bg-yellow-500 group-hover:bg-cardColor flex items-center justify-center">
                    <IoAdd className="text-2xl text-white group-hover:text-emerald-500 font-semibold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AnimatePresence>
  );
};

export default MainContainer;
