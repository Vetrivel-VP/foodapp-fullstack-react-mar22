import React, { useContext, useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CartContext } from "../context/CartContext";
import EmptyCart from "../img/emptyCart.svg";
import { AnimatePresence, motion } from "framer-motion";

const CheckOutContainer = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [count, setCount] = useState(1);

  useEffect(() => {}, count);
  console.log(cartItems);
  return (
    <AnimatePresence>
      <div className="w-full md:w-375 h-screen bg-white fixed top-0 right-0 drop-shadow-md  flex flex-col items-center justify-center">
        {/* top */}
        <div className="w-full flex items-center justify-between p-4">
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
          <p className="text-textColor text-lg font-semibold">Cart</p>
          <p className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-textColor text-base">
            Clear <RiRefreshFill />
          </p>
        </div>
        {/* bottom */}
        {cartItems.length > 0 ? (
          <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
            <div className="w-full h-340 md:h-42 p-2 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
              {cartItems &&
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2"
                  >
                    <img
                      src={item.imageURL}
                      className="w-20 h-20 max-w-[60px] rounded-full object-contain"
                      alt=""
                    />
                    {/* name section */}
                    <div className="flex flex-col gap-2">
                      <p className="text-base text-gray-50">
                        {`${
                          item.title.length > 20
                            ? `${item.title.slice(0, 20)}...`
                            : item.title
                        }`}{" "}
                      </p>
                      <p className="text-sm block text-gray-300 font-semibold">{`$ ${item.price}`}</p>
                    </div>

                    {/* button section */}
                    <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                      <motion.div
                        whileTap={{ scale: 0.6 }}
                        onClick={() => setCount(count - 1)}
                      >
                        <BiMinus className="text-gray-50 " />
                      </motion.div>
                      <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                        {count}
                      </p>
                      <motion.div
                        whileTap={{ scale: 0.6 }}
                        onClick={() => setCount(count + 1)}
                      >
                        <BiPlus className="text-gray-50 " />
                      </motion.div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-6">
            <img src={EmptyCart} className="w-300" alt="" />
            <p className="text-xl text-textColor font-semibold">
              Add some items to your cart
            </p>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default CheckOutContainer;
