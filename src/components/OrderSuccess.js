import React from "react";
import { motion } from "framer-motion";
import "./OrderSuccess.css";

export default function OrderSuccess({ onClose }) {
  return (
    <div className="popup-overlay">
      <motion.div
        className="popup-box"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2>🎉 Order Placed!</h2>
        <p>Your order has been successfully placed.</p>

        <button onClick={onClose}>OK</button>
      </motion.div>
    </div>
  );
}