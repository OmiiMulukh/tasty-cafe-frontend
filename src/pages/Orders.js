import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import "./Orders.css";

export default function Orders() {
  const { orders, fetchOrders } = useContext(CartContext);

  // 🔥 fetch from backend
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="orders-page">
      <h1>Your Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map(order => (
          <div className="order-card" key={order._id || order.id}>

            <h3>Order ID: {order._id || order.id}</h3>
            <p>Date: {order.date}</p>

            {/* 👤 USER DETAILS */}
            <p><b>Name:</b> {order.name}</p>
            <p><b>Table:</b> {order.table}</p>
            <p><b>Mobile:</b> {order.mobile}</p>

            {/* 🛒 ITEMS */}
            {order.items.map(item => (
              <div key={item.id} className="order-item">
                <span>{item.name} x {item.qty}</span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}

            <h4>Total: ₹{order.total}</h4>
          </div>
        ))
      )}
    </div>
  );
}