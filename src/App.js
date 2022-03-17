import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import FoodMenuContainer from "./components/FoodMenuContainer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { UserContext, UserProvider } from "./context/AuthContext";
import BG from "./img/bg.png";
import MobileBg from "./img/mobileBg.png";

const App = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden">
      <img
        src={BG}
        className="hidden md:block w-full h-full object-cover"
        alt=""
      />
      <img
        src={MobileBg}
        className="block md:hidden w-full h-full object-cover"
        alt=""
      />
      <main className="absolute inset-0 flex items-center justify-between flex-col">
        <UserProvider>
          <Header />

          <section className="h-[90vh] md:h-[85vh] w-[90vw] md:w-[80vw] bg-slate-400 mb-4 overflow-y-scroll scrollbar-none">
            <Routes>
              <Route path="/*" element={<MainContainer />} />
              <Route path="/menu" element={<FoodMenuContainer />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </section>
        </UserProvider>
      </main>
    </div>
  );
};

export default App;
