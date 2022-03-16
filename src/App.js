import React from "react";
import Header from "./components/Header";
import BG from "./img/bg.png";

const App = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden">
      <img src={BG} className="min-w-full min-h-full object-cover" alt="" />
      <main className="absolute inset-0">
        <Header />
      </main>
    </div>
  );
};

export default App;
