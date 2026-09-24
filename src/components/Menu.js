import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://cafe-backend-fmce.onrender.com/menu")
      .then(res => setItems(res.data));
  }, []);

  return (
    <div>
      <h2>Our Menu</h2>
      {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}