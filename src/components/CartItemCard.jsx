import React, { useContext, useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
let items = [];

const CartItemCard = ({ item, setFlag, flag }) => {
  const [{ cartItems, total }, dispatch] = useStateValue();
  const [qty, setQty] = useState(item.qty);

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CART,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action == "add") {
      setQty(qty + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
          setFlag(flag + 1);
        }
      });
      cartDispatch();
    } else {
      // initial state value is one so you need to check if 1 then remove it
      if (qty == 1) {
        items = cartItems.filter((item) => item.id !== id);
        setFlag(flag + 1);
        cartDispatch();
      } else {
        setQty(qty - 1);
        cartItems.map((item) => {
          if (item.id === id) {
            item.qty -= 1;
            setFlag(flag + 1);
          }
        });
        cartDispatch();
      }
    }
  };

  useEffect(() => {
    items = cartItems;
  }, [qty, items]);

  return (
    <AnimatePresence>
      <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
        <img
          src={item?.imageURL}
          className="w-20 h-20 max-w-[60px] rounded-full object-contain"
          alt=""
        />
        {/* name section */}
        <div className="flex flex-col gap-2">
          <p className="text-base text-gray-50">
            {`${
              item?.title?.length > 20
                ? `${item?.title.slice(0, 20)}...`
                : item?.title
            }`}{" "}
          </p>
          <p className="text-sm block text-gray-300 font-semibold">{`$ ${
            item.price * qty
          }`}</p>
        </div>

        {/* button section */}
        <div className="group flex items-center gap-2 ml-auto cursor-pointer">
          <motion.div
            whileTap={{ scale: 0.6 }}
            onClick={() => updateQty("remove", item?.id)}
          >
            <BiMinus className="text-gray-50 " />
          </motion.div>
          <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
            {qty}
          </p>
          <motion.div
            whileTap={{ scale: 0.6 }}
            onClick={() => updateQty("add", item?.id)}
          >
            <BiPlus className="text-gray-50 " />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default CartItemCard;
