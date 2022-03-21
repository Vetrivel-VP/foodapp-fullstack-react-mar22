import React from "react";
import { IoAdd } from "react-icons/io5";

const NewDishes = ({ data }) => {
  return (
    <div className="group newDishCard">
      <div className="w-150 h-150 rounded-full shadow-2xl absolute -top-12 bg-cardColor">
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
          {data?.calories}
        </p>
        <div className="w-full h-[1px] bg-slate-200 my-1"></div>
        <div className="w-full flex items-center justify-between mt-1">
          <p className="text-2xl text-textColor group-hover:text-gray-100 font-semibold">
            $ {data?.price}
          </p>
          <div className="w-10 h-10 rounded-xl bg-yellow-500 group-hover:bg-cardColor flex items-center justify-center">
            <IoAdd className="text-2xl text-white group-hover:text-emerald-500 font-semibold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDishes;
