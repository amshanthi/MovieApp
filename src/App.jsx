import React from "react";

import Navbar from "./components/Navbar/Navbar";
import AllRouter from "./components/Router/AllRouter";
import "./index.css";

const App = () => {
  return (
    <div className="bg-[#101010] text-white   ">
      <Navbar />
      <AllRouter />
    </div>
  );
};

export default App;
