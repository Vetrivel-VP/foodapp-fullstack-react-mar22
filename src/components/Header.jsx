import React, { useContext, useEffect, useState } from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { NavLink } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../firebase.config";
import { UserContext, UserProvider } from "../context/AuthContext";

const isActiveStyles =
  "text-green-700 font-semibold text-xl font-normal relative before:rounded-lg before:animate-pulse  before:absolute before:content before:w-5 before:h-1 before:bottom-0 before:left-4 before:bg-green-700 transition-all ease-in-out duration-100";

const isNotActiveStyles =
  "text-textColor hover:text-green-700 text-xl font-semibold before:rounded-lg relative hover:before:animate-pulse  hover:before:absolute hover:before:content hover:before:w-5 hover:before:h-1 hover:before:bottom-0 hover:before:left-5 hover:before:bg-green-700 transition-all ease-in-out duration-100";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const firebaseDb = getFirestore(app);
  const { user, setUser } = useContext(UserContext);

  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const login = async () => {
    const { user } = await signInWithPopup(firebaseAuth, provider);
    const { refreshToken, providerData } = user;
    setUser(providerData[0]);
  };

  return (
    <AnimatePresence>
      <div className="w-full px-8 py-2 flex items-center justify-center  ">
        <div className="w-full hidden md:flex items-center">
          <motion.img
            whileTap={{ scale: 0.8 }}
            src={Avatar}
            className="w-14 h-14 cursor-pointer rounded-full shadow-xl mr-auto"
            alt=""
            onClick={login}
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

          <motion.div
            whileTap={{ scale: 0.8 }}
            className="flex items-center gap-2 bg-black px-6 py-4 rounded-md ml-auto cursor-pointer relative"
          >
            <MdShoppingCart className="text-xl text-white" />
            <p className="text-base text-white font-semibold">My Cart</p>
            <div className="w-6 h-6 rounded-sm bg-yellow-500 absolute -top-3 right-2 border border-white flex items-center justify-center">
              <p className="text-base font-semibold">2</p>
            </div>
          </motion.div>
        </div>

        <div className="w-full flex md:hidden items-center">
          <NavLink to={"/"}>
            <motion.img
              whileTap={{ scale: 0.8 }}
              src={Logo}
              className="w-40"
              alt=""
            />
          </NavLink>

          <div className="relative ml-auto cursor-pointer ">
            <motion.img
              whileTap={{ scale: 0.8 }}
              src={Avatar}
              className="w-14 h-14 rounded-full shadow-xl "
              alt=""
              onClick={() => setIsMobileMenu(!isMobileMenu)}
            />

            {isMobileMenu && (
              <motion.div
                initial={{ opacity: 0, y: -200, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -200, scale: 0.5 }}
                className="w-[80vw] p-4 h-auto absolute right-2 top-16 bg-white flex flex-col items-center justify-center gap-3 z-50"
              >
                <motion.p
                  whileTap={{ scale: 0.8 }}
                  className="p-2 text-center text-xl bg-gray-50 font-semibold text-gray-700 border border-gray-200 rounded-md w-full"
                >
                  Login
                </motion.p>

                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? isActiveStyles : isNotActiveStyles
                  }
                >
                  Contact
                </NavLink>

                <NavLink
                  to={"/menu"}
                  className={({ isActive }) =>
                    isActive ? isActiveStyles : isNotActiveStyles
                  }
                >
                  Menu
                </NavLink>

                <motion.div
                  whileTap={{ scale: 0.8 }}
                  className="flex items-center gap-2 bg-black px-6 py-4 rounded-md cursor-pointer relative"
                >
                  <MdShoppingCart className="text-xl text-white" />
                  <p className="text-base text-white font-semibold">My Cart</p>
                  <div className="w-6 h-6 rounded-sm bg-yellow-500 absolute -top-3 right-2 border border-white flex items-center justify-center">
                    <p className="text-base font-semibold">2</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Header;
