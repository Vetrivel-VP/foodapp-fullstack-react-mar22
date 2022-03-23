import React, { useContext, useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { CartContext } from "../context/CartContext";
import EmptyCart from "../img/emptyCart.svg";
import CartItemCard from "./CartItemCard";

const CheckOutContainer = ({ cartMenu, setCartMenu }) => {
  const { cartItems, flag } = useContext(CartContext);

  useEffect(() => {
    console.log(flag);
  }, [cartItems, flag, cartMenu]);

  return (
    <div className="w-full md:w-375 h-screen bg-white  drop-shadow-md  flex flex-col items-center justify-center">
      {/* top */}
      <div className="w-full flex items-center justify-between p-4">
        <MdOutlineKeyboardBackspace
          className="text-textColor text-3xl"
          onClick={() => setCartMenu(false)}
        />
        <p className="text-textColor text-lg font-semibold">Cart</p>
        <p className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-textColor text-base">
          Clear <RiRefreshFill />
        </p>
      </div>
      {/* bottom */}
      {cartItems.length !== 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
          <div className="w-full h-340 md:h-42 p-2 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {cartItems &&
              cartItems.map((item) => (
                <CartItemCard key={item.id} item={item} />
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
  );
};

export default CheckOutContainer;
