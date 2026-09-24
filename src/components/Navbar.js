import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <h2>Tastyc</h2>
        <span>FOOD & DRINKS</span>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
      
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/orders">Orders</Link></li>
    
      </ul>

      {/* Right Side */}
      {/* <div className="nav-right">
        <button className="reservation-btn">Reservation</button>
        <div className="nav-links">
          <Link to="/cart">Your Cart</Link>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;