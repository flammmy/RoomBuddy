import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="topbar">
      <button className="toggle-btn" onClick={toggleSidebar}>
        <i className="fa fa-bars fa-large"></i>
      </button>
      <Link to="/" className="logo">
        Dashboard
      </Link>
    </div>
  );
};

export default Topbar;
