import React, { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import Hero from "../img/hero.png";
import { IoAlarm } from "react-icons/io5";

const MainContainer = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className=" flex items-center justify-center h-auto relative">
        <img src={Hero} className="w-656" alt="" />
        <div className=" h-auto p-2 bg-gradientBg shadow-lg  rounded-2xl absolute bottom-24 right-7 backdrop-blur-md flex items-center border border-whiteAlpha">
          <img
            src={Hero}
            className="w-16 h-16 rounded-full object-cover"
            alt=""
          />

          <p className="text-base font-semibold text-gray-600">
            Fresh foods{" "}
            <span className="block text-xs text-gray-600">
              Awesome food to have
            </span>
          </p>
        </div>

        <div className=" h-auto px-4 py-2 border border-whiteAlpha bg-gradientBg shadow-lg  rounded-2xl absolute top-24 left-7 backdrop-blur-md flex items-center">
          <IoAlarm className="text-gray-900 text-3xl" />

          <p className="text-base font-semibold text-gray-600 ml-2">
            Fastest delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
