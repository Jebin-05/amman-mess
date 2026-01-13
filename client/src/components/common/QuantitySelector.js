import React from 'react';
import './QuantitySelector.css';

const QuantitySelector = ({ quantity, onIncrement, onDecrement, size = 'medium' }) => {
  return (
    <div className={`quantity-selector ${size}`}>
      <button
        className="qty-btn minus"
        onClick={onDecrement}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="qty-value">{quantity}</span>
      <button
        className="qty-btn plus"
        onClick={onIncrement}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
