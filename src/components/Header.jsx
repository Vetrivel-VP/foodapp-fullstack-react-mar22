import React from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { NavLink } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

const isActiveStyles =
  "text-green-700 font-semibold text-xl font-normal relative before:rounded-lg before:animate-pulse  before:absolute before:content before:w-5 before:h-1 before:bottom-0 before:left-4 before:bg-green-700 transition-all ease-in-out duration-100";

const isNotActiveStyles =
  "text-textColor hover:text-green-700 text-xl font-semibold before:rounded-lg relative hover:before:animate-pulse  hover:before:absolute hover:before:content hover:before:w-5 hover:before:h-1 hover:before:bottom-0 hover:before:left-5 hover:before:bg-green-700 transition-all ease-in-out duration-100";

const Header = () => {
  return (
    <div className="w-full px-8 py-4 flex items-center justify-center  ">
      <img
        src={Avatar}
        className="w-14 h-14 cursor-pointer rounded-full shadow-xl mr-auto"
        alt=""
      />

      <div className="flex items-center">
        <NavLink
          to={"/menu"}
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          Menu
        </NavLink>
        <NavLink to={"/"}>
          <img src={Logo} className="w-40 mx-16" alt="" />
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          Contact
        </NavLink>
      </div>

      <div className="flex items-center gap-2 bg-black p-2 rounded-md ml-auto">
        <MdShoppingCart className="text-xl text-white" />
        <p className="text-base text-white font-semibold">My Cart</p>
      </div>
    </div>
  );
};

export default Header;
