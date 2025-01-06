import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Study Buddy</div>
      <div className="navbar-links">
        <a href="#">About Us</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
      </div>
      <div className="navbar-buttons">
        <button className="signup-btn">Sign Up</button>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
