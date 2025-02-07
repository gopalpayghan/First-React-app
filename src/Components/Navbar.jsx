import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="container">
        <div className="logo">
          <img src="/Images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">Location</li>
          <li href="#">About us</li>
          <li href="#">Contact</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
        </div>
    );
};

export default Navbar;