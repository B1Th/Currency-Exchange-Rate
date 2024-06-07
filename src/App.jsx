import React from "react";
import "./App.css";
import ExchangeRate from "./ExchangeRate";

const App = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col bg-gradient-to-b from-violet-600 font-mono to-violet-400 ">
      <ExchangeRate />
    </div>
  );
};

export default App;
