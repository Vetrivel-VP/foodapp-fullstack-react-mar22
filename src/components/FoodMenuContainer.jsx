import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { categories } from "../utils/data";
import { IoFastFood } from "react-icons/io5";
import NewDishes from "./NewDishes";
import Loader from "./Loader";
import NotFound from "../img/NotFound.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const activeStyles =
  "group hover:bg-red-400 w-24 min-w-[94px] h-28 cursor-pointer rounded-lg bg-red-400 shadow-lg flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out";

const notActiveStyles =
  "group hover:bg-red-400 w-24 min-w-[94px] h-28 cursor-pointer rounded-lg bg-cardColor shadow-lg flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out";

const FoodMenuContainer = () => {
  const [{ foodItems, cartItems, total }, dispatch] = useStateValue();

  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState(foodItems);
  const { searchId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    // if (searchId) {
    setItems(foodItems?.filter((n) => n.category === searchId));
    setIsLoading(false);
    // }
  }, [searchId, foodItems]);

  useEffect(() => {
    if (cart.length > 0) {
      dispatch({
        type: actionType.SET_CART,
        cartItems: cart,
      });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cart]);

  return (
    <AnimatePresence>
      <div className=" flex flex-col items-center justify-center ">
        {/* Menus */}
        <div className="w-full flex flex-col items-center justify-center gap-3 p-4 ">
          <p className="text-2xl text-gray-700 font-semibold relative before:rounded-lg before:animate-pulse  before:absolute before:content before:w-20 before:h-1 before:-bottom-1 before:left-4 before:bg-green-700 transition-all ease-in-out duration-100">
            Our Menu
          </p>

          <div className="w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none p-4">
            {categories &&
              categories.map((category) => (
                <Link key={category.id} to={`/search/${category.urlParamName}`}>
                  <div
                    className={
                      category.urlParamName === searchId
                        ? activeStyles
                        : notActiveStyles
                    }
                  >
                    <div
                      className={`w-10  h-10 rounded-full ${
                        category.urlParamName === searchId
                          ? "bg-cardColor"
                          : "bg-red-400"
                      } group-hover:bg-white flex items-center justify-center`}
                    >
                      <IoFastFood
                        className={`${
                          category.urlParamName === searchId
                            ? "text-textColor"
                            : "text-white"
                        } group-hover:text-textColor`}
                      />
                    </div>
                    <p
                      className={`text-lg ${
                        category.urlParamName === searchId
                          ? "text-white"
                          : "text-textColor"
                      }  group-hover:text-white font-normal`}
                    >
                      {category.name}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        <div className="w-full px-12 py-8 mt-12 flex flex-wrap items-center justify-center gap-16 ">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {items && items.length > 0 ? (
                <>
                  {items.map((item) => (
                    <NewDishes
                      key={item.id}
                      data={item}
                      setCart={setCart}
                      cart={cart}
                    />
                  ))}
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="flex flex-col items-center justify-center"
                >
                  <img src={NotFound} className="w-275" alt="" />
                  <p className="text-3xl">Not Available</p>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default FoodMenuContainer;
