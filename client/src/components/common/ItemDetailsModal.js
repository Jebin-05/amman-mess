import React from 'react';
import { useCart } from '../../context/CartContext';
import QuantitySelector from './QuantitySelector';
import './ItemDetailsModal.css';

const ItemDetailsModal = ({ item, onClose }) => {
  const { addItem, incrementItem, decrementItem, getItemQuantity } = useCart();
  const quantity = getItemQuantity(item.id);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAddToCart = () => {
    addItem(item);
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-image">
          {item.image ? (
            <img src={item.image} alt={item.name} className="modal-img" />
          ) : (
            <div className="modal-placeholder" style={{ backgroundColor: item.placeholderColor }}>
              <span className="modal-emoji">{item.emoji}</span>
            </div>
          )}
        </div>

        <div className="modal-info">
          <div className="modal-header">
            <span className="modal-veg-badge">
              <span className="veg-dot"></span>
            </span>
            <h2 className="modal-title">{item.name}</h2>
          </div>

          <p className="modal-description">{item.description}</p>

          <div className="modal-meta">
            <span className="modal-time">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {item.preparationTime}
            </span>
          </div>

          <div className="modal-footer">
            <span className="modal-price">₹{item.price}</span>

            {quantity === 0 ? (
              <button className="modal-add-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            ) : (
              <div className="modal-quantity">
                <QuantitySelector
                  quantity={quantity}
                  onIncrement={() => incrementItem(item.id)}
                  onDecrement={() => decrementItem(item.id)}
                  size="large"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsModal;
