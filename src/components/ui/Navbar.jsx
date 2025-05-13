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
        <div className="social_links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-telegram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
