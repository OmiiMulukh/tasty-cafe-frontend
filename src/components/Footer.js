import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-top">

        {/* Logo */}
        <div className="footer-col">
          <h2 className="logo">Tastyc</h2>
          <p>Delicious food & drinks with premium experience.</p>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
      
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/orders">Orders</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>📍 Pune, India</p>
          <p>📞 +91 9876543210</p>
          <p>✉️ cafe@email.com</p>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="socials">
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Tastyc. All rights reserved.</p>
      </div>

    </footer>
  );
}