import React from "react";
import "../../assets/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src="https://example.com/logo.png" alt="Logo" />
        </div>
        <ul>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="call_center">
          <a href="#" target="_blank"><span>{`+998 (91) 820-84-46`}</span></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
