import React, { useContext, useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { CartContext } from "../context/CartContext";

const CartItemCard = ({ item }) => {
  const [qty, setQty] = useState(item.qty);
  const { cartItems, setCartItems, flag, setFlag } = useContext(CartContext);

  const updateQty = (action, id) => {
    if (action === "ad") {
      setQty(qty + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
        }
      });
      setCartItems(cartItems);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setFlag(!flag);
    } else {
      if (qty === 1) {
        cartItems.pop(id);
        console.log(cartItems);
        setCartItems(cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        setFlag(!flag);
      } else {
        setQty(qty - 1);
        cartItems.map((item) => {
          if (item.id === id) {
            item.qty -= 1;
          }
        });
        setCartItems(cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        setFlag(!flag);
      }
    }
  };

  useEffect(() => {}, [qty, item, flag]);
  return (
    <AnimatePresence>
      <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
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
            onClick={() => updateQty("re", item.id)}
          >
            <BiMinus className="text-gray-50 " />
          </motion.div>
          <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
            {qty}
          </p>
          <motion.div
            whileTap={{ scale: 0.6 }}
            onClick={() => updateQty("ad", item.id)}
          >
            <BiPlus className="text-gray-50 " />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default CartItemCard;
