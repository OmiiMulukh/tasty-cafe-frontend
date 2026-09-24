import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home">

      {/* 🔥 HERO SECTION */}
      <div className="hero-section">
        <div className="overlay">
          <p className="tag">HELLO, NEW FRIEND!</p>

          <h1>Reserve Your Table Today</h1>

          <p className="desc">
            Experience delicious food & premium ambiance
          </p>

          {/* <div className="buttons">
            <button className="btn-primary">Reservation</button>
            <button className="btn-secondary">Online Shop</button>
          </div> */}
        </div>
      </div>

      {/* 🍽️ CARDS SECTION */}
      <div className="cards-section">
        <h2>Use the tips and recipes of our chefs</h2>

        <div className="cards">

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9"
              alt="Breakfast"
            />
            <h3>Business Breakfast</h3>
            <p>Fresh and healthy morning meals</p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b"
              alt="Pancakes"
            />
            <h3>Pancakes in Chocolate</h3>
            <p>Sweet and tasty desserts</p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349"
              alt="Tuna"
            />
            <h3>Tuna & Tomatoes</h3>
            <p>Delicious chef special dish</p>
          </div>

        </div>
      </div>

      {/* 🍽️ FEATURED DISHES */}
<div className="dishes-section">

  <div className="dishes-header">
    <h2>Our Popular Dishes</h2>

    <Link to="/menu">
      <button className="view-btn">View All →</button>
    </Link>
  </div>

  <div className="dishes-grid">

    <div className="dish-card">
      <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=500" alt="" />
      <h3>Veg Burger</h3>
      <p>₹150</p>
    </div>

    <div className="dish-card">
      <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format" alt="" />
      <h3>Cheese Pizza</h3>
      <p>₹300</p>
    </div>

    <div className="dish-card">
      <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500" alt="" />
      <h3>Cappuccino</h3>
      <p>₹120</p>
    </div>

    <div className="dish-card">
      <img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500" alt="" />
      <h3>Ice Cream</h3>
      <p>₹150</p>
    </div>

  </div>

</div>

      {/* ⏰ WORKING HOURS */}
      <div className="hours-section">

  <div className="hours-section">
  <div className="hours-left">
    <h2>Working Hours</h2>
    <p>Enjoy our services all week</p>
    
  </div>

  <div className="hours-right">
    <p><b>Sunday to Tuesday</b></p>
    <p>09:00 - 22:00</p>

    <p><b>Friday to Saturday</b></p>
    <p>11:00 - 19:00</p>
  </div>
</div>

</div>

      {/* 🔻 FOOTER */}
      <Footer />

    </div>
  );
}