import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // 🛒 CART STATE
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // 📦 ORDERS STATE
  const [orders, setOrders] = useState([]);

  // 💾 SAVE CART TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ➕ ADD TO CART
  const addToCart = (item) => {
    const exist = cart.find(i => i.id === item.id);

    if (exist) {
      setCart(cart.map(i =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      ));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  // ❌ REMOVE ITEM
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // ➕ INCREASE QTY
  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  // ➖ DECREASE QTY
  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  // 🧾 CHECKOUT → SEND TO BACKEND
  const checkout = async (userDetails) => {
    if (cart.length === 0) return;

    const orderData = {
      name: userDetails.name,
      table: userDetails.table,
      mobile: userDetails.mobile,
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.qty, 0),
      date: new Date().toLocaleString()
    };

    try {
      const res = await axios.post(
        "https://cafe-backend-fmce.onrender.com/api/orders",
        orderData
      );

      // optional: update local orders instantly
      setOrders(prev => [res.data, ...prev]);

      // clear cart
      setCart([]);

    } catch (error) {
      console.error("❌ Order failed:", error);
      alert("Order failed. Please try again.");
    }
  };

  // 📥 FETCH ORDERS FROM BACKEND
  const fetchOrders = async () => {
    try {
      const res = await axios.get("https://cafe-backend-fmce.onrender.com/api/orders");
      setOrders(res.data);
    } catch (error) {
      console.error("❌ Error fetching orders:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        removeItem,
        increaseQty,
        decreaseQty,
        checkout,
        fetchOrders
      }}
    >
      {children}
    </CartContext.Provider>
  );
};