import React from "react";
import Header from "./components/Header";
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
      <main className="absolute inset-0">
        <Header />
      </main>
    </div>
  );
};

export default App;
