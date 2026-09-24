import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import OrderSuccess from "../components/OrderSuccess";
import OrderForm from "../components/OrderForm";
import "./Cart.css";

export default function Cart() {

  // ✅ Hooks INSIDE component
  const { cart, removeItem, increaseQty, decreaseQty, checkout } =
    useContext(CartContext);

  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // 🧮 Total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // 👉 Open form
  const handleCheckout = () => {
    if (cart.length === 0) return;
    setShowForm(true);
  };

  // 👉 Submit form
  const handleOrderSubmit = (formData) => {
    checkout(formData);        // ✅ now defined
    setShowForm(false);        // ✅ now defined
    setShowPopup(true);        // ✅ now defined
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h3 className="empty">Your cart is empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              <img src={item.img} alt={item.name} />

              <h3>{item.name}</h3>

              <div className="qty-box">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <p className="price">₹{item.price * item.qty}</p>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>

            </div>
          ))}

          <div className="cart-total">
            <h2>Total: ₹{total}</h2>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}

      {/* 📋 FORM */}
      {showForm && (
        <OrderForm
          onSubmit={handleOrderSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* 🎉 POPUP */}
      {showPopup && (
        <OrderSuccess
          onClose={() => {
            setShowPopup(false);
            navigate("/orders");
          }}
        />
      )}
    </div>
  );
}