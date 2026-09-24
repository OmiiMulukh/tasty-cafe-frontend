import React, { useState, useContext } from "react";
import "./MenuPage.css";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

const data = [
  // ☕ DRINKS
  {
    id: 1,
    name: "Cappuccino",
    price: 120,
    category: "Drinks",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    desc: "Rich espresso with creamy foam"
  },
  {
    id: 2,
    name: "Cold Coffee",
    price: 180,
    category: "Drinks",
    img: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    desc: "Chilled coffee with ice cream"
  },
  {
  id: 3,
  name: "Lemon Juice",
  price: 80,
  category: "Drinks",
  img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format",
  desc: "Fresh and refreshing drink"
},

  // 🍔 FOOD
  {
    id: 4,
    name: "Veg Burger",
    price: 150,
    category: "Food",
    img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=500&auto=format",
    desc: "Crispy veg patty with cheese"
  },
  {
  id: 5,
  name: "Cheese Pizza",
  price: 300,
  category: "Food",
  img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format",
  desc: "Loaded with cheese and toppings"
},
  {
    id: 6,
    name: "Sandwich",
    price: 120,
    category: "Food",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    desc: "Grilled sandwich with veggies"
  },
  {
    id: 7,
    name: "Pasta",
    price: 220,
    category: "Food",
    img: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    desc: "Creamy white sauce pasta"
  },

  // 🍰 DESSERTS
  {
    id: 8,
    name: "Ice Cream",
    price: 150,
    category: "Desserts",
    img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
    desc: "Sweet creamy dessert"
  },
  {
    id: 9,
    name: "Chocolate Cake",
    price: 200,
    category: "Desserts",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    desc: "Rich chocolate layered cake"
  },
  {
    id: 10,
    name: "Brownie",
    price: 180,
    category: "Desserts",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    desc: "Hot brownie with chocolate syrup"
  }
];

export default function MenuPage() {
  const [active, setActive] = useState("All");
  const { addToCart, cart } = useContext(CartContext);

  const filtered =
    active === "All"
      ? data
      : data.filter(item => item.category === active);

  return (
    <div className="menu-page">

      <h1>Our Menu</h1>

      {/* Tabs */}
      <div className="tabs">
        {["All", "Drinks", "Food", "Desserts"].map(tab => (
          <button
            key={tab}
            className={active === tab ? "active" : ""}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cart Count */}
      <h3>🛒 Cart Items: {cart.length}</h3>

      {/* Menu Grid */}
      <div className="menu-grid">
        {filtered.map(item => (
          <motion.div
            className="menu-card"
            key={item.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="img-box">
              <img src={item.img} alt="" />
            </div>

            <div className="menu-content">
              <div className="top-row">
                <h3>{item.name}</h3>
                <span className="price">₹{item.price}</span>
              </div>

              <p className="desc">{item.desc}</p>

              <button
                className="add-btn"
                onClick={() => addToCart(item)}
              >
                + Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}