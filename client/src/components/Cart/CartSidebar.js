import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, onClose }) => {
  const { items, itemCount, total, navigate } = useCart();

  const handleCheckout = () => {
    navigate('checkout');
  };

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>Your Cart ({itemCount})</h2>
        <button className="close-sidebar" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <span className="empty-cart-emoji">🛒</span>
          <h3>Your cart is empty</h3>
          <p>Add items to get started</p>
        </div>
      ) : (
        <>
          <div className="sidebar-items">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="sidebar-footer">
            <CartSummary />
            <button className="checkout-btn" onClick={handleCheckout}>
              Place Order - ₹{total}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
