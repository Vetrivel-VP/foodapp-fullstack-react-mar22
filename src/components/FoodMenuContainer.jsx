import React from "react";
import { NavLink } from "react-router-dom";
import { categories } from "../utils/data";
import { IoFastFood } from "react-icons/io5";
import NewDishes from "./NewDishes";

const activeStyles =
  "group hover:bg-red-400 w-24 min-w-[94px] h-28 cursor-pointer rounded-lg bg-red-400 shadow-lg flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out";

const notActiveStyles =
  "group hover:bg-red-400 w-24 min-w-[94px] h-28 cursor-pointer rounded-lg bg-cardColor shadow-lg flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out";

const data = {
  id: "1647820416809",
  calories: "120",
  category: "chicken",
  imageURL:
    "https://firebasestorage.googleapis.com/v0/b/foodapp-mar22.appspot.com/o/Images%2F1647820363190-kebab.png?alt=media&token=0c23a6a5-17fc-4f75-b209-4a50bd537ece",
  price: "10",
  title: "Chicken Kebab",
};

const FoodMenuContainer = () => {
  return (
    <div className=" flex flex-col items-center justify-center ">
      {/* Menus */}
      <div className="w-full flex flex-col items-center justify-center gap-3 p-4 ">
        <p className="text-2xl text-gray-700 font-semibold relative before:rounded-lg before:animate-pulse  before:absolute before:content before:w-20 before:h-1 before:-bottom-1 before:left-4 before:bg-green-700 transition-all ease-in-out duration-100">
          Our Menu
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none p-4">
          {categories &&
            categories.map((category) => (
              <NavLink
                key={category.id}
                to={`/search/${category.urlParamName}`}
                className={({ isActive }) =>
                  isActive ? activeStyles : notActiveStyles
                }
              >
                <div className="w-10  h-10 rounded-full bg-red-400 group-hover:bg-white flex items-center justify-center">
                  <IoFastFood className="text-white group-hover:text-textColor" />
                </div>
                <p className="text-lg text-textColor group-hover:text-white font-normal">
                  {category.name}
                </p>
              </NavLink>
            ))}
        </div>
      </div>

      <div className="w-full px-12 py-8 mt-12 flex flex-wrap items-center justify-center gap-16 ">
        <NewDishes data={data} />
        <NewDishes data={data} />
        <NewDishes data={data} />
        <NewDishes data={data} />
        <NewDishes data={data} />
        <NewDishes data={data} />
        <NewDishes data={data} />
        <NewDishes data={data} />
        <NewDishes data={data} />
        <NewDishes data={data} />
        <NewDishes data={data} />
      </div>
    </div>
  );
};

export default FoodMenuContainer;
