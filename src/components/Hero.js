import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to Our Café ☕
      </motion.h1>

      <p>Fresh coffee & delicious food</p>
      <button>View Menu</button>
    </div>
  );
}