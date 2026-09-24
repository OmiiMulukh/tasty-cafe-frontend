import React, { useState } from "react";
import "./OrderForm.css";

export default function OrderForm({ onSubmit, onClose }) {
  const [name, setName] = useState("");
  const [table, setTable] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !table || !mobile) {
      alert("Please fill all fields");
      return;
    }

    if (mobile.length !== 10) {
      alert("Enter valid 10-digit mobile number");
      return;
    }

    onSubmit({ name, table, mobile });
  };

  return (
    <div className="form-overlay">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Enter Details</h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Table Number"
          value={table}
          onChange={(e) => setTable(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <div className="form-buttons">
          <button type="submit">Place Order</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}