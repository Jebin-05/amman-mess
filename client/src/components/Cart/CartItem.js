import React from 'react';
import { useCart } from '../../context/CartContext';
import QuantitySelector from '../common/QuantitySelector';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { incrementItem, decrementItem, removeItem } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        {item.image ? (
          <img src={item.image} alt={item.name} className="cart-item-img" />
        ) : (
          <div className="cart-item-placeholder" style={{ backgroundColor: item.placeholderColor }}>
            <span className="cart-item-emoji">{item.emoji}</span>
          </div>
        )}
      </div>

      <div className="cart-item-details">
        <div className="cart-item-header">
          <span className="cart-veg-badge">
            <span className="veg-dot"></span>
          </span>
          <h4 className="cart-item-name">{item.name}</h4>
        </div>
        <span className="cart-item-price">₹{item.price}</span>
      </div>

      <div className="cart-item-actions">
        <QuantitySelector
          quantity={item.quantity}
          onIncrement={() => incrementItem(item.id)}
          onDecrement={() => decrementItem(item.id)}
          size="small"
        />
        <button
          className="remove-btn"
          onClick={() => removeItem(item.id)}
          aria-label="Remove item"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
          </svg>
        </button>
      </div>

      <div className="cart-item-total">
        ₹{item.price * item.quantity}
      </div>
    </div>
  );
};

export default CartItem;
