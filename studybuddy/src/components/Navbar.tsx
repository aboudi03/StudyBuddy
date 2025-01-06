import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Study Buddy</div>
      <div className="navbar-links">
        <a href="#about-us">About Us</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
      </div>
      <div className="navbar-buttons">
        {/* Use Link to route to the respective pages */}
        <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
        </Link>
        <Link to="/signin">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
