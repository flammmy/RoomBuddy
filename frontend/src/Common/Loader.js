// Loader.js
import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="border-circle"></div>
        <div className="text-loader">Room Buddy</div>
      </div>
    </div>
  );
};

export default Loader;
