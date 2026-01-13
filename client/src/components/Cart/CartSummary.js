import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartSummary.css';

const CartSummary = () => {
  const { subtotal } = useCart();

  return (
    <div className="cart-summary">
      <h3 className="summary-title">Bill Details</h3>

      <div className="summary-row">
        <span>Item Total</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="summary-total">
        <span>To Pay</span>
        <span>₹{subtotal}</span>
      </div>
    </div>
  );
};

export default CartSummary;
