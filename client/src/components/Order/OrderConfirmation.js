import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const {
    orderedItems,
    orderNumber,
    orderedSubtotal,
    cancelOrderedItem,
    decrementOrderedItem,
    incrementOrderedItem
  } = useCart();

  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleContinueOrdering = () => {
    navigate('/menu');
  };

  const handleEndOrdering = () => {
    navigate('/thank-you');
  };

  if (orderedItems.length === 0) {
    return (
      <div className="order-confirmation">
        <div
          className="order-bg"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/ocbg.JPG)` }}
        />
        <div className="no-order">
          <span className="emoji">🍽️</span>
          <h3>No orders yet</h3>
          <p>Place an order to see it here</p>
          <button className="primary-btn" onClick={() => navigate('/menu')}>
            Browse Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="order-confirmation">
      <div
        className="order-bg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/ocbg.JPG)` }}
      />
      <div className="confirmation-content">
        <div className="success-animation">
          <div className="checkmark-circle">
            <svg viewBox="0 0 52 52">
              <circle className="checkmark-circle-bg" cx="26" cy="26" r="25" fill="none" />
              <path
                className="checkmark-check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
        </div>

        <h1 className="confirmation-title">Order Confirmed!</h1>
        <p className="confirmation-subtitle">
          Your delicious food is being prepared
        </p>

        {orderNumber && (
          <div className="order-id-card">
            <span className="order-label">Order ID</span>
            <span className="order-id">{orderNumber}</span>
          </div>
        )}

        <div className="order-items-card">
          <h2>Your Order ({orderedItems.length} items)</h2>
          {orderedItems.map((item) => (
            <div key={item.id} className="order-item">
              <div className="order-item-image">
                {item.image ? (
                  <img src={item.image} alt={item.name} />
                ) : (
                  <div className="order-item-placeholder" style={{ backgroundColor: item.placeholderColor }}>
                    <span>{item.emoji}</span>
                  </div>
                )}
              </div>
              <div className="item-details">
                <span className="item-name">{item.name}</span>
                <span className="item-qty">Qty: {item.quantity}</span>
              </div>
              <span className="item-price">₹{item.price * item.quantity}</span>
            </div>
          ))}

          <div className="order-totals-section">
            <div className="total-row grand-total">
              <span>Total</span>
              <span>₹{orderedSubtotal}</span>
            </div>
          </div>
        </div>

        <div className="estimated-time">
          <span className="time-icon">⏱️</span>
          <div>
            <span className="time-label">Estimated Time</span>
            <span className="time-value">15-20 minutes</span>
          </div>
        </div>

        <div className="confirmation-actions">
          <button className="cancel-btn" onClick={() => setShowCancelModal(true)}>
            Cancel Order
          </button>
          <button className="continue-btn" onClick={handleContinueOrdering}>
            Continue Ordering
          </button>
          <button className="end-btn" onClick={handleEndOrdering}>
            End Ordering
          </button>
        </div>
      </div>

      {showCancelModal && (
        <div className="cancel-modal-backdrop" onClick={() => setShowCancelModal(false)}>
          <div className="cancel-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cancel-modal-header">
              <h2>Modify Order</h2>
              <button className="modal-close-btn" onClick={() => setShowCancelModal(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="cancel-modal-items">
              {orderedItems.map((item) => (
                <div key={item.id} className="cancel-item">
                  <div className="cancel-item-image">
                    {item.image ? (
                      <img src={item.image} alt={item.name} />
                    ) : (
                      <div className="cancel-item-placeholder" style={{ backgroundColor: item.placeholderColor }}>
                        <span>{item.emoji}</span>
                      </div>
                    )}
                  </div>
                  <div className="cancel-item-info">
                    <span className="cancel-item-name">{item.name}</span>
                    <span className="cancel-item-price">₹{item.price}</span>
                  </div>
                  <div className="cancel-item-controls">
                    <button
                      className="qty-btn"
                      onClick={() => decrementOrderedItem(item.id)}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => incrementOrderedItem(item.id)}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => cancelOrderedItem(item.id)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {orderedItems.length === 0 && (
              <div className="empty-cancel-modal">
                <p>All items have been removed</p>
              </div>
            )}

            <div className="cancel-modal-footer">
              <div className="cancel-modal-total">
                <span>Updated Total:</span>
                <span className="total-amount">₹{orderedSubtotal}</span>
              </div>
              <button className="done-btn" onClick={() => setShowCancelModal(false)}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
