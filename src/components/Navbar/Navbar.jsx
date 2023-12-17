import React from "react";
import Header from "../Header/Header";
import "./Navbar.css";
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__contents">
        <a href={<Header />}>
          <img
            className="navbar__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            // src="https://assets.stickpng.com/images/584d8683367b6a13e54477d4.png"
            alt="netflix-logo"
          />
        </a>
        <div className="links">
          <div>
            <button>Action</button>
            <button>Comedy</button>
            <button>Documentary</button>
            <button>Western</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
